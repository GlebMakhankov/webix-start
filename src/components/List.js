export const List = {
  rows: [
    {
      view: "list",
      data: ["Dashboard", "Users", "Products", "Locations"],
      minWidth: 150,
      scroll: false,
      css: "list",
    },
    {
      view: "template",
      template: `${'<span class="webix_icon wxi-check"></span>'}Connected`,
      height: 30,
		css: 'connected',
    },
  ],
};
