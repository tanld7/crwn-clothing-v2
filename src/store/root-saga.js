import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./categories/categories.saga";

export function* rootSage() {
  yield all([call(categoriesSaga)]);
}
