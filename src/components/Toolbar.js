export const Toolbar = {
  view: "toolbar",
  margin: 10,
  padding: 10,
  css: "myToolbar",
  elements: [
    { view: "label", label: "My App", inputWidth: 100 },
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
