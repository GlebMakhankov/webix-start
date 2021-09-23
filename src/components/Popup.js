export const Popup = webix.ui({
  view: "window",
  id: "profilePopupList",
  head: false,
  body: {
    view: "list",
    autoheight: true,
    autowidth: true,
    data: ["Settings", "Log out"],
    click: () => $$("profilePopupList").hide(),
  },
});
