export const Toolbar = {
  view: "toolbar",
  margin: 10,
  padding: 10,
  css: { background: "#657584"},
  elements: [
    { view: "label", label: "My App", inputWidth: 100, align: "left" },
    {
      view: "button",
      label: "Profile",
      width: 100,
      align: "right",
      type: "icon",
      icon: "wxi-user",
      css: "webix_transparent",
    },
  ],
};
