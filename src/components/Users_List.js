import { UsersListToolbar } from "./Users_List_Toolbar";

export function highlightUser() {
  const list = $$("list_users");
  list.data.each((obj, index) =>
    index < 5 ? (obj.$css = "highlightedUser") : (obj.$css = "")
  );
  list.refresh();
}

export const UsersList = {
  rows: [
    UsersListToolbar,
    {
      view: "list",
      id: "list_users",
      template: (obj) =>
        `${obj.name} from ${obj.country} <span class='webix_icon wxi-close deleteUser'></span>`,
      ready: () => highlightUser(),
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
