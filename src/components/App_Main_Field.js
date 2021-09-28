import { DashboardView } from "./Dashboard_View";
import { UsersView } from "./Users_View";
import { ProductsView } from "./Products_View";
import { AdminPanelView } from "./Admin_Panel_View";

export const AppMainField = {
  gravity: 8,
  cells: [
    { id: "Dashboard", cols: [DashboardView] },
    { id: "Users", cols: [UsersView] },
    { id: "Products", cols: [ProductsView] },
    { id: "Admin", cols: [AdminPanelView] },
  ],
};
