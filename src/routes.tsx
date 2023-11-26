import { RouteObject } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import NewArticle from "./pages/new-article/NewArticle";
import Wardrobe from "./pages/wardrobe/Wardrobe";

export const ROUTE_NAMES = {
  DEFAULT_PATH: "/",
  NEW_ARTICLE: "/newArticle",
  WARDROBE: "/wardrobe",
};

export const routes: RouteObject[] = [
  {
    path: ROUTE_NAMES.DEFAULT_PATH,
    element: <Dashboard />,
  },
  {
    path: ROUTE_NAMES.NEW_ARTICLE,
    element: <NewArticle />,
  },
  {
    path: ROUTE_NAMES.WARDROBE,
    element: <Wardrobe />,
  },
];
