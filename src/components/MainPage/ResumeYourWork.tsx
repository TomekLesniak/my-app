import React, { ChangeEvent, FC, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { useStore } from "../../reducers/storeContext";
import { boxShadow } from "../../styledHelpers/boxShadow";
import { Colors } from "../../styledHelpers/Colors";
import {
  PrimaryTextBold,
  SecondaryTextHeader,
} from "../../styledHelpers/textHelpers";
import { SearchInput, ButtonSize } from "../common/SearchInput";
import { ResumeYourWorkCard } from "./ResumeYourWorkCard";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  ${boxShadow};
`;

const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0;
`;

const FiltersWrapper = styled.div`
  display: flex;
`;

const Filter = styled.div`
  display: flex;
  align-self: center;
  margin: 0 2rem;
  cursor: pointer;

  img {
    margin: 0 0.3rem;
  }
`;

const StyledPaginateContainer = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    display: flex;
    justify-content: center;
    font-size: 25px;
    margin: 4px;
  }
  ul.pagination li a {
    text-decoration: none;
    color: ${Colors.secondaryTextColor};
    font-size: 20px;
  }
  ul.pagination li.active a {
    color: ${Colors.primaryTextColor};
  }
  ul.pagination li.active {
    background-color: ${Colors.backgroundColor};
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: ${Colors.primaryTextColor};
  }
  .page-selection {
    width: 48px;
    height: 30px;
    color: ${Colors.primaryTextColor};
  }
  .pagination-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
`;

export interface UserComment {
  userId: number;
  userName: string;
  postId: number;
  title: string;
  body: string;
}

export const ResumeYourWork: FC = () => {
  const { usersStore, commentsStore } = useStore();
  const user = usersStore.user;
  const { allUsers } = usersStore;
  const { comments } = commentsStore;

  const [commentsSorted, setCommentsSorted] = useState<
    UserComment[] | undefined
  >();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [mineFilter, setMineFilter] = useState(true);
  const [inputText, setInputText] = useState<string>("");

  const handlePageClick = (data: any) => {
    const selected = data.selected;
    setCurrentPage(selected);
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  };

  useEffect(() => {
    const sorted = comments
      ?.map((c) => {
        const user = allUsers?.find((u) => u.id === (c.id % 10) + 1);
        return {
          userId: user?.id,
          userName: user?.name,
          postId: c.id,
          title: c.name,
          body: c.body,
        } as UserComment;
      })
      .filter((x) => (mineFilter ? true : (x.postId % 10) + 1 === 1))
      .slice(currentPage, currentPage + 10);

    setCommentsSorted(sorted);
  }, [comments, allUsers, currentPage, mineFilter]);

  if (!user || !commentsSorted) return <div>loading</div>;

  return (
    <Wrapper>
      <HeadWrapper>
        <SecondaryTextHeader>Resume your work</SecondaryTextHeader>
        <FiltersWrapper>
          <SearchInput
            onChangeHandler={inputHandler}
            value={inputText}
            size={ButtonSize.small}
            placeholder={"Filter by title..."}
          />
          <Filter
            onClick={() => {
              setMineFilter(!mineFilter);
              setCurrentPage(0);
            }}
          >
            <PrimaryTextBold>
              {mineFilter ? "Following" : "Mine"}
            </PrimaryTextBold>
            <img src="./icons/arrow-down.svg" alt="arrow down" />
          </Filter>
        </FiltersWrapper>
      </HeadWrapper>
      {commentsSorted.map((comment, i) => {
        return comment.title.toLowerCase().includes(inputText.toLowerCase()) ? (
          <ResumeYourWorkCard key={i} userComment={comment} />
        ) : (
          <></>
        );
      })}
      <StyledPaginateContainer>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={commentsSorted.length >= 10 ? commentsSorted.length : 0}
          marginPagesDisplayed={2}
          pageRangeDisplayed={10}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        ></ReactPaginate>
      </StyledPaginateContainer>
    </Wrapper>
  );
};
