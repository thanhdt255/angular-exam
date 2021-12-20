import { BaseResponse } from "./BaseResponse";
export interface UserSignUpResponse extends BaseResponse {
    id: string,
    message: string,
    email: string
}
