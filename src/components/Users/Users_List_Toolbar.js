import Storage from "../../data/Storage";
import getRandomUser from "../../functions/GetRandomUser";

export const UsersListToolbar = {
  view: "toolbar",
  elements: [
    {
      view: "text",
      placeholder: "Add value to filter by username",
      gravity: 5,
      id: "usersSearchInput",
      on: {
        onTimedKeyPress: () => {
          const value = $$("usersSearchInput").getValue().toLowerCase();
          $$("list_users").filter((obj) =>
            obj.name.toLowerCase().includes(value)
          );
        },
      },
    },
    {
      view: "button",
      value: "Sort asc",
      css: "webix_primary",
      click: () => $$("list_users").sort("#name#", "asc"),
    },
    {
      view: "button",
      value: "Sort desc",
      css: "webix_primary",
      click: () => $$("list_users").sort("#name#", "desc"),
    },
    {
      view: "button",
      value: "Add new",
      css: "webix_primary",
      click: () => Storage.users.add(getRandomUser()),
    },
  ],
};
