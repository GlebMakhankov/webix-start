export const Form = {
  view: "form",
  gravity: 2,
  margin: 10,
  elements: [
    { template: "Edit Films", type: "section" },
    { view: "text", label: "Title" },
    { view: "text", label: "Year" },
    { view: "text", label: "Rating" },
    { view: "text", label: "Votes" },
    { maxHeight: 15 },
    {
      margin: 15,
      cols: [
        { view: "button", value: "Add New", css: "webix_primary" },
        { view: "button", value: "Clear" },
      ],
    },
    {},
  ],
};
