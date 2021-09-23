export const Form = {
  view: "form",
  gravity: 2,
  margin: 10,
  id: "moviesForm",
  rules: {
    title: webix.rules.isNotEmpty,
    year: (value) => value >= 1970 && value <= new Date().getFullYear(),
    votes: (value) => value && value < 100000,
    rating: (value) => webix.rules.isNotEmpty && value,
  },
  elements: [
    { template: "Edit Films", type: "section" },
    { view: "text", label: "Title", name: "title", invalidMessage: "Add some title!" },
    { view: "text", label: "Year", name: "year", invalidMessage: "1970 - Current year" },
    { view: "text", label: "Rating", name: "rating", invalidMessage: "What is its rating?" },
    { view: "text", label: "Votes", name: "votes", invalidMessage: "0 - 100000" },
    { maxHeight: 15 },
    {
      margin: 15,
      cols: [
        {
          view: "button",
          value: "Add New",
          css: "webix_primary",
          click: () => {
            if ($$("moviesForm").validate()) {
              const newEntry = $$("moviesForm").getValues();
              $$("moviesTable").add(newEntry);
              $$("moviesForm").clear();
				  webix.message(`Movie ${newEntry.title} successfully added`);
            }
            console.log();
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
                $$("moviesForm").clear();
                $$("moviesForm").clearValidation();
              }),
        },
      ],
    },
    {},
  ],
};
