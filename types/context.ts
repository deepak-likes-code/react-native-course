
import { User } from "./common";

export interface GlobalContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
    user: User | null;
    setUser: (user: any | null) => void;
    isLoading: boolean;
}
