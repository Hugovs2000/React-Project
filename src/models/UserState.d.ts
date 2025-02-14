import { UserInfo } from "firebase/auth";

export default interface UserState {
  user: UserInfo | null;
  uid: string;
  docRef?: string | null;
  email: string;
  lastRoute: string;
  setLastRoute: (route: string) => void;
  setUser: (user: UserInfo) => void;
  setDocRef: (docRef: string) => void;
  removeUser: () => void;
}
