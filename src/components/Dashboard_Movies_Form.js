export const DashboardMoviesForm = {
  view: "form",
  gravity: 1,
  maxWidth: 400,
  margin: 10,
  id: "moviesForm",
  rules: {
    title: webix.rules.isNotEmpty,
    year: (value) => value >= 1970 && value <= new Date().getFullYear(),
    votes: (value) => value >= 0 && value <= 100000,
    rating: (value) => webix.rules.isNotEmpty && +value,
  },
  elements: [
    { template: "Edit Films", type: "section" },
    {
      view: "text",
      label: "Title",
      name: "title",
      invalidMessage: "Add some title!",
    },
    {
      view: "text",
      label: "Year",
      name: "year",
      invalidMessage: "1970 - Current year",
    },
    {
      view: "text",
      label: "Rating",
      name: "rating",
      invalidMessage: "What is its rating?",
    },
    {
      view: "text",
      label: "Votes",
      name: "votes",
      invalidMessage: "0 - 100000",
    },
    { maxHeight: 15 },
    {
      margin: 15,
      cols: [
        {
          view: "button",
          value: "Add New",
          id: "addMovieBtn",
          css: "webix_primary",
          click: () => {
            const form = $$("moviesForm");
            const table = $$("moviesTable");
            if (form.validate()) {
              const entry = form.getValues();
              let exists = table.getItem(entry.id);
              if (!exists) {
                table.add(entry);
                webix.message(
                  `Movie <strong>${entry.title}</strong> was successfully added`
                );
              } else {
                table.updateItem(entry.id, entry);
                webix.message(
                  `Movie <strong>${entry.title}</strong> was successfully updated`
                );
              }
              form.clear();
              $$("addMovieBtn").setValue("Add New");
            }
          },
        },
        {
          view: "button",
          value: "Clear",
          click: () =>
            webix
              .confirm({
                title: "Clear form?",
                text: "Do you still want to continue?",
              })
              .then(() => {
                const form = $$("moviesForm");
                form.clear();
                form.clearValidation();
              }),
        },
      ],
    },
    {},
  ],
};
