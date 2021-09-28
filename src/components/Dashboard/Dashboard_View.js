import { DashboardMoviesTableTab } from "./Dashboard_Movies_Table_Tab.js";
import { DashboardMoviesTable } from "./Dashboard_Movies_Table.js";
import { DashboardMoviesForm } from "./Dashboard_Movies_Form.js";

export const DashboardView = {
  view: "layout",
  cols: [
    { rows: [DashboardMoviesTableTab, DashboardMoviesTable] },
    DashboardMoviesForm,
  ],
};
