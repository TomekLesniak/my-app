import {createContext, useContext} from "react"
import { CommonStore } from "./commonStore";
import { UsersStore } from "./usersStore";

interface Store {
    usersStore : UsersStore;
    commonStore : CommonStore;
}

export const store: Store = {
    usersStore: new UsersStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}