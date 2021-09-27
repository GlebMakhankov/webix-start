import { AppHeader } from "./components/App_Header";
import { AppSidebar } from "./components/App_Sidebar";
import { AppMainField } from "./components/App_Main_Field";
import { AppFooter } from "./components/App_Footer";

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
