import { makeAutoObservable, runInAction } from "mobx";
import {Comment} from "../entities/comment";

export class CommentsStore {
    comments: Comment[] | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    loadComments = async () => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/comments?`)
            .then((response) => response.json())
            .then(users => {
                runInAction(() => this.comments = users)
            });
    } catch(error) {
        console.log(error)
    }
    
}}