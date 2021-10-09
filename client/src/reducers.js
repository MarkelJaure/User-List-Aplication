import { combineReducers } from "redux";


import { cabinetReducers } from "./feature/Cabinet";

export const reducers = combineReducers({
  cabinet: cabinetReducers
});
