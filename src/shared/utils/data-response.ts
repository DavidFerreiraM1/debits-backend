import { Response } from 'express';

export function dataResponse<T>(
    statusCode: number,
    success: boolean,
    errors: Array<string>,
    data: T,
  )  {
  return ({
    statusCode,
    data,
    success,
    errors,
  })
};
