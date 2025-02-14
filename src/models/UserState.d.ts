import { UserInfo } from "firebase/auth";

export default interface UserState {
  user: UserInfo | null;
  uid: string;
  email: string;
  lastRoute: string;
  setLastRoute: (route: string) => void;
  setUser: (user: UserInfo) => void;
  removeUser: () => void;
}
