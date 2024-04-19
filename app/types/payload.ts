export interface JWTPayload {
    _id: string;
    email: string;
    type: number;
    exp: number;
    iat: number;
}
