import { makeAutoObservable, runInAction } from "mobx";
import {Comment} from "../entities/comment";

export class CommentsStore {
    comments: Comment[] | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    loadComments = async () => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10`)
            .then((response) => response.json())
            .then(users => {
                runInAction(() => this.comments = users)
                console.log(this.comments);
            });
    } catch(error) {
        console.log(error)
    }
    
}}