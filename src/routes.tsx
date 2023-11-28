import { RouteObject } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import NewArticle from "./pages/new-article/NewArticle";
import Wardrobe from "./pages/wardrobe/Wardrobe";

export const ROUTES = {
  DASHBOARD: "/",
  NEW_ARTICLE: "/newArticle",
  WARDROBE: "/wardrobe",
};

export const routes: RouteObject[] = [
  {
    path: ROUTES.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: ROUTES.NEW_ARTICLE,
    element: <NewArticle />,
  },
  {
    path: ROUTES.WARDROBE,
    element: <Wardrobe />,
  },
];
