import { DashboardMoviesTable } from "./Dashboard_Movies_Table.js";
import { DashboardMoviesForm } from "./Dashboard_Movies_Form.js";

export const DashboardView = {
  view: "layout",
  cols: [DashboardMoviesTable, DashboardMoviesForm],
};
