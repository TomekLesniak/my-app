import {createContext, useContext} from "react"
import { UsersStore } from "./usersStore";

interface Store {
    usersStore : UsersStore
}

export const store: Store = {
    usersStore: new UsersStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}