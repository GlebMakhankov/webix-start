export const ProductsTreetable = {
  view: "treetable",
  id: "productsTreetable",
  tooltip: true,
  select: "cell",
  editable: true,
  rules: {
    title: webix.rules.isNotEmpty,
    price: (value) => !isNaN(value) && value,
  },
  columns: [
    { id: "id", header: "", width: 50 },
    {
      id: "title",
      header: "Title",
      fillspace: true,
      editor: "text",
      template: "{common.treetable()} #title#",
    },
    { id: "price", header: "Price", editor: "text" },
  ],
  ready: () => $$("productsTreetable").openAll(),
  url: "http://localhost:3000/src/data/products.js",
};
