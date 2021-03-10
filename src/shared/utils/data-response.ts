import { Response } from 'express';

export function dataResponse<T>(
    data: T,
    errors: Array<string> | null
  )  {
  return ({
    data,
    errors,
  })
};
