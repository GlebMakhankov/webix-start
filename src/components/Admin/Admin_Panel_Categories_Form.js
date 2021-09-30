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
          click: () => {
            const adminCategoriesForm = $$("adminCategoriesForm");
            if (!adminCategoriesForm.validate()) return false;
            const newCategory = adminCategoriesForm.getValues();
            console.log(newCategory);
            Storage.categories.add(newCategory);
            adminCategoriesForm.clear();
            webix.message(
              `Category <strong>${newCategory.value}</strong> was successfully added`
            );
          },
        },
      ],
    },
  ],
  rules: {
    value: webix.rules.isNotEmpty,
  },
};
