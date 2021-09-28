import Storage from "../../data/Storage";

export const AdminPanelCategoriesForm = {
  view: "form",
  id: "adminCategoriesForm",
  elements: [
    {
      cols: [
        { view: "text", label: "Category", name: "value", gravity: 6 },
        {
          view: "button",
          value: "Add category",
          css: "webix_primary",
          click: () =>
            Storage.categories.add($$("adminCategoriesForm").getValues()),
        },
      ],
    },
  ],
  rules: {
    value: webix.rules.isNotEmpty,
  },
};
