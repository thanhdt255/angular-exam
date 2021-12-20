import { BaseResponse } from './BaseResponse';
export interface Userupdateresponse extends BaseResponse{
    id: string;
    userName: string;
    email: string;
    phone: string;
    address: string;
}