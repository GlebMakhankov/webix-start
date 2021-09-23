import { Toolbar } from "./components/Toolbar.js";
import { List } from "./components/List.js";
import { Table } from "./components/Table.js";
import { Form } from "./components/Form.js";
import { Footer } from "./components/Footer.js";

export const App = {
  view: "layout",
  rows: [
    Toolbar,
    {
      cols: [List, { view: "resizer" }, Table, Form],
    },
    Footer,
  ],
};