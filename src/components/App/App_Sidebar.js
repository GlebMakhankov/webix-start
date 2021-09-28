export const AppSidebar = {
  rows: [
    {
      view: "list",
      id: "sidebar",
      data: ["Dashboard", "Users", "Products", "Admin"],
      minWidth: 150,
      maxWidth: 300,
      scroll: false,
      select: true,
      css: "list",
      on: {
        onAfterSelect: (id) => $$(id).show(),
      },
      ready: () => $$("sidebar").select("Dashboard"),
    },
    {
      view: "template",
      template: `${'<span class="webix_icon wxi-check"></span>'}Connected`,
      height: 30,
      css: "connected",
    },
  ],
};
