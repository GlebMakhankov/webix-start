import { AppHeader } from "./components/App/App_Header";
import { AppSidebar } from "./components/App/App_Sidebar";
import { AppMainField } from "./components/App/App_Main_Field";
import { AppFooter } from "./components/App/App_Footer";

export const App = {
  view: "layout",
  rows: [
    AppHeader,
    {
      cols: [AppSidebar, { view: "resizer" }, AppMainField],
    },
    AppFooter,
  ],
};
