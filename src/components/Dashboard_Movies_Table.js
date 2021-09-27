export const DashboardMoviesTable = {
  view: "datatable",
  columns: [
    { id: "rank", header: "", width: 30, sort: "text", css: "rank" },
    {
      id: "title",
      header: ["Film title", { content: "textFilter" }],
      fillspace: true,
      sort: "text",
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
  url: "http://localhost:3000/src/data/data.js",
  gravity: 1,
  minWidth: 700,
  hover: "movieTableRowHover",
  id: "moviesTable",
  select: "row",
  on: {
    onAfterSelect: (id) => {
      const form = $$("moviesForm");
      form.clearValidation();
      form.setValues($$("moviesTable").getItem(id));
    },
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
