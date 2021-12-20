import { UserViewModel } from '../model/user.model';
import { BaseResponse } from './BaseResponse';
export interface UserResponse extends BaseResponse {
    data: UserViewModel
}