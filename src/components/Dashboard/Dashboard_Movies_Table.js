import getRandomIntInclusive from "../../functions/GetRandomInt";
import RegisterFilterByYear from "../../functions/RegisterFilterByYear";
import Storage from "../../data/Storage";

export const DashboardMoviesTable = {
  view: "datatable",
  minWidth: 700,
  id: "moviesTable",
  url: "http://localhost:3000/src/data/data.js",
  hover: "movieTableRowHover",
  select: "row",
  columns: [
    { id: "rank", header: "", width: 30, sort: "text", css: "rank" },
    {
      id: "title",
      header: ["Film title", { content: "textFilter" }],
      fillspace: true,
      sort: "text",
    },
    {
      id: "categoryId",
      collection: Storage.categories,
      header: ["Category", { content: "selectFilter" }],
      width: 120,
    },
    {
      id: "year",
      header: "Year",
      template: "#year#",
      width: 120,
      sort: "text",
    },
    {
      id: "votes",
      header: ["Votes", { content: "textFilter" }],
      width: 120,
      sort: "text",
    },
    {
      id: "rating",
      header: ["Rating", { content: "textFilter" }],
      width: 120,
      sort: "text",
    },
    {
      header: "",
      template: "<span class='webix_icon wxi-trash deleteEntry'></span>",
      width: 50,
      sort: "text",
    },
  ],
  scheme: {
    $init: (obj) => {
      obj.categoryId = getRandomIntInclusive(1, 4);
    },
  },
  ready: () => {
    const table = $$("moviesTable");
    $$("moviesForm").bind(table);
    RegisterFilterByYear(table, $$("tabbarFilterByYear"));
  },
  on: {
    onAfterSelect: () => $$("moviesForm").clearValidation(),
  },
  onClick: {
    deleteEntry: (e, id) => {
      webix
        .confirm({
          title: "Delete entry?",
          text: "Are you sure about that?",
        })
        .then(() => {
          $$("moviesTable").remove(id);
          return false;
        });
    },
  },
};
