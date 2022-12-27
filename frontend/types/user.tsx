export interface User {
  id: number;
  name: string;
  nickname: string;
  email: string;
  avatar: string;
  email_verified_at: string;
  roles: Roles;
}

export interface Roles {
  Roles: [Role];
}

export interface Role {
  id: number;
  name: string;
}
