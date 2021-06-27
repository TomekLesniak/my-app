import { makeAutoObservable, runInAction } from "mobx";
import { Photo } from "../entities/user";

export class PhotosStore {
    photos:Photo[] | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    loadPhotos = async () => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=15`)
            .then((response) => response.json())
            .then(photos => {
                runInAction(() => this.photos = photos)
            });
    } catch(error) {
        console.log(error)
    }
    
}}