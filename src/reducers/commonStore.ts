import { makeAutoObservable } from "mobx";

export class CommonStore {
    currentComponentName: string = "Home";

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentComponentName = (newName: string) => {
        this.currentComponentName = newName;
    }
}