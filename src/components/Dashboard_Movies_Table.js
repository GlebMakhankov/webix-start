import getRandomIntInclusive from "../functions/GetRandomInt";

const categories = new webix.DataCollection({
  url: "http://localhost:3000/src/data/categories.js",
});

export const DashboardMoviesTable = {
  view: "datatable",
  gravity: 1,
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
      collection: categories,
      header: ["Category", { content: "selectFilter" }],
      width: 120,
    },
    {
      id: "year",
      header: ["Released", { content: "textFilter" }],
      template: "at #year#",
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
    table.registerFilter(
      $$("tabbarFilterByYear"),
      {
        columnId: "year",
        compare: function (value, filter, item) {
          const currentYear = new Date().getFullYear();
          switch (filter) {
            case "new":
              return value >= currentYear - 3;

            case "modern":
              return value >= currentYear - 10;

            case "old":
              return value < currentYear - 10;

            default:
              return value;
          }
        },
      },
      {
        getValue: function (node) {
          return node.getValue();
        },
        setValue: function (node, value) {
          node.setValue(value);
        },
      }
    );
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
