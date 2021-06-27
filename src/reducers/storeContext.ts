import {createContext, useContext} from "react"
import { CommentsStore } from "./commentsStore";
import { CommonStore } from "./commonStore";
import { UsersStore } from "./usersStore";

interface Store {
    usersStore : UsersStore;
    commonStore : CommonStore;
    commentsStore: CommentsStore;
}

export const store: Store = {
    usersStore: new UsersStore(),
    commonStore: new CommonStore(),
    commentsStore: new CommentsStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}