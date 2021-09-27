import { UsersListToolbar } from "./Users_List_Toolbar";

export const UsersList = {
  rows: [
    UsersListToolbar,
    {
      view: "list",
      id: "list_users",
      template: (obj) =>
        `${obj.name} from ${obj.country} <span class='webix_icon wxi-close deleteUser'></span>`,
      scheme: {
        $init: function (obj) {
          if (obj.id <= 5) obj.$css = "highlightedUser";
        },
      },
      url: "http://localhost:3000/src/data/users.js",
      onClick: {
        deleteUser: (e, id) => {
          webix
            .confirm({
              title: "Delete entry?",
              text: "Are you sure about that?",
            })
            .then(() => {
              $$("list_users").remove(id);
            });
        },
      },
    },
  ],
};
