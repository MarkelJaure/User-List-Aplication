import { notFoundRoute } from "./feature/NotFound";
import { cabinetRoutes } from "./feature/Cabinet";

export const routes = [...cabinetRoutes, notFoundRoute];
