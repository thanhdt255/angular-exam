export interface Parameters {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
}

export interface BaseResponse {
    status: boolean;
    errorCode: string;
    parameters: Parameters;
}