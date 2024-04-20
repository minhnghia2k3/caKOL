export enum Roles {
    User = 0,
    Admin = 1
}

export interface IUsers {
    email: string;

    avatar: string;

    type: Roles;

    active: boolean;
}
