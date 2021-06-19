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

    setUserName = (newValue: string) => {
        this.user!.name = newValue;
    }

    setCompanyName = (newValue: string) => {
        this.user!.company.name = newValue;
    }

    setAddressCity = (newValue: string) => {
        this.user!.address.city = newValue;
    }

    setCompanyBs = (newValue: string) => {
        this.user!.company.bs = newValue;
    }

    setUserEmail = (newValue: string) => {
        this.user!.email = newValue;
    }

    setUserPhone = (newValue: string) => {
        this.user!.phone = newValue;
    }


}