import { makeAutoObservable, runInAction, toJS } from "mobx";
import { useContext } from "react";
import { Photo, User } from "../entities/user";

export class UsersStore {
    user: User | null = null;
    photo: Photo | null = null;
    
    constructor(){
        makeAutoObservable(this);
    }

    loadUser = async (id: number) => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then(user => {
                runInAction(() => this.user = user)
            });

            await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then((response) => response.json())
            .then(photo => {
                runInAction(() => this.user!.photo = photo.url);
            } )


        } catch(error) {
            console.log(error)
        }
    }
}