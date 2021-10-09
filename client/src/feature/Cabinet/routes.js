import { UsersContainer } from "./Users";

export const routes = [
  {
    path: "/",
    component: UsersContainer,
    isAuth: true,
    exact: true
  }
];
