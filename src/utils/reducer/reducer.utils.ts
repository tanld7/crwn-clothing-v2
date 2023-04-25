import { AnyAction } from "redux";

// types
export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

// function overloading
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

// implimentation
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
