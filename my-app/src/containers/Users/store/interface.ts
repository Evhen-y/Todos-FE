export interface IUser {
  id?: number;
  name: string;
  lastName: string;
  email: string;
  avatar: string | null;
  createAt: Date;
  isActive: boolean;
}

export interface IUsersState {
  users: IUser[];
  error: null | string;
  loading: boolean;
  user: IUser | null;
}
