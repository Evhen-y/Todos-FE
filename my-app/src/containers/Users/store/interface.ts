import { EOrder } from "@containers/*";

export interface IUser {
  id?: number;
  name: string;
  lastName: string;
  email: string;
  avatar: string | null;
  createAt: Date;
  isActive: boolean;
}

export interface IUserFilterSettings {
  sortBy: keyof IUser;
  search: string;
  order: EOrder;
}

export interface IUsersState {
  users: IUser[];
  error: null | string;
  loading: boolean;
  user: IUser | null;
  userFilterSettings: IUserFilterSettings;
}
