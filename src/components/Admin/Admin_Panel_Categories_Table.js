import Storage from "../../data/Storage";

export const AdminPanelCategoriesTable = {
  view: "datatable",
  id: "adminCategoriesTable",
  select: true,
  editable: true,
  editaction: "dblclick",
  columns: [
    { id: "id", header: "", width: 30, sort: "text" },
    {
      id: "value",
      header: "Category",
      fillspace: true,
      sort: "text",
      editor: "text",
    },
    {
      header: "",
      template: "<span class='webix_icon wxi-trash deleteCategory'></span>",
      width: 50,
    },
  ],
  onClick: {
    deleteCategory: (e, id) => {
      webix
        .confirm({
          title: "Delete category?",
          text: "Are you sure about that?",
        })
        .then(() => {
          Storage.categories.remove(id);
          return false;
        });
    },
  },
};
