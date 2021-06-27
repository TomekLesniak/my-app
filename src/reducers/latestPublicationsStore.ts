import { makeAutoObservable, runInAction  } from "mobx";

export interface LatestPublication {
    id: number;
    title: string;
    photo: string;
    userName: string;
    userPhoto: string; 
}

export class LatestPublicationsStore {
    latestPublications: LatestPublication[] | null = null;
    

    constructor(){
        makeAutoObservable(this);
    }

    loadPublications = async () => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=4`)
            .then((response) => response.json())
            .then(posts => {
                runInAction(() => this.latestPublications = posts)
            });


            await fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=4`)
            .then((response) => response.json())
            .then(photos => {
                runInAction(() => this.latestPublications!.forEach((u, i) => {
                    u.photo = photos[i].url
                    u.userPhoto = photos[i].url
                } 
                ));
            } )

            await fetch(`https://jsonplaceholder.typicode.com/users/?_limit=4`)
            .then((response) => response.json())
            .then(users => {
                runInAction(() => this.latestPublications!.forEach((u, i) => 
                    {u.userName = users[i].name;
                    }
                ));
            } )
            

        } catch(error) {
            console.log(error)
        }
    }
}