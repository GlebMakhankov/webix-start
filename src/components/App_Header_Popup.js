export const AppHeaderPopup = webix.ui({
  view: "window",
  id: "profilePopupList",
  head: false,
  body: {
    view: "list",
    autoheight: true,
    data: ["Settings", "Log out"],
    click: () => $$("profilePopupList").hide(),
  },
});
