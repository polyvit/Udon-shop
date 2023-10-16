export type UserInfo = {
  email: null | string;
  token: null | string;
  id: null | string;
  password: null | string;
  displayName: null | string;
}

export interface UserSliceState {
  user: UserInfo;
  formType: string;
  showForm: boolean;
}
