import {createContext, useContext} from "react"
import { CommentsStore } from "./commentsStore";
import { CommonStore } from "./commonStore";
import { LatestPublicationsStore } from "./latestPublicationsStore";
import { PhotosStore } from "./photosStore";
import { UsersStore } from "./usersStore";

interface Store {
    usersStore : UsersStore;
    commonStore : CommonStore;
    commentsStore: CommentsStore;
    photosStore: PhotosStore;
    latestPublicationsStore : LatestPublicationsStore;
}

export const store: Store = {
    usersStore: new UsersStore(),
    commonStore: new CommonStore(),
    commentsStore: new CommentsStore(),
    photosStore: new PhotosStore(),
    latestPublicationsStore: new LatestPublicationsStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}