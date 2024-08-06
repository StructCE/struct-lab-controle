export type Response<T> =
  | {
      data: T;
      status: number;
    }
  | {
      error: string;
      status: number;
    };
