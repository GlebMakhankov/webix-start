import Storage from "../../data/Storage";
import getRandomIntInclusive from "../../functions/GetRandomInt";

export const AdminPanelCategoriesTable = {
  view: "datatable",
  id: "adminCategoriesTable",
  select: true,
  editable: true,
  editaction: "dblclick",
  columns: [
    {
      id: "id",
      header: "",
      template: (obj, a, id, c, index) => {
        return index + 1;
      },
      width: 30,
      sort: "text",
    },
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
      if (Storage.categories.count() < 2)
        return webix.message(`You can not delete last category!`);
      webix
        .confirm({
          title: "Delete category?",
          text: "Are you sure about that?",
        })
        .then(() => {
          Storage.categories.remove(id);
          $$("moviesTable").data.each((obj) => {
            if (obj.categoryId == id) {
              obj.categoryId = getRandomIntInclusive(
                1,
                Storage.categories.count()
              );
            }
          });
        });
    },
  },
};
