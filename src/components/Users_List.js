import { UsersListToolbar } from "./Users_List_Toolbar";

webix.protoUI(
  {
    name: "editlist",
  },
  webix.EditAbility,
  webix.ui.list
);

export const UsersList = {
  rows: [
    UsersListToolbar,
    {
      view: "editlist",
      id: "list_users",
      url: "http://localhost:3000/src/data/users.js",
      template: (obj) =>
        `${obj.name}, ${obj.age}, from ${obj.country} <span class='webix_icon wxi-close deleteUser'></span>`,
      scheme: {
        $change: (obj) => {
          if (obj.age < 26) {
            obj.$css = "notBoomer";
          }
        },
      },
      rules: {
        name: webix.rules.isNotEmpty,
      },
      editable: true,
      editor: "text",
      editValue: "name",
      ready: () => {
        const chart = $$("usersChart");
        chart.sync($$("list_users"), () =>
          chart.group({
            by: "country",
            map: {
              country: ["country", "count"],
            },
          })
        );
      },
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
