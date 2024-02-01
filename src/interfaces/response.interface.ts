export interface IResponse {
  data?: any;
  success: boolean;
  code: number;
  message: string;
  errors?: string;
}
