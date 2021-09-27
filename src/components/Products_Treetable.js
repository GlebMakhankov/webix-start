export const ProductsTreetable = {
  view: "treetable",
  id: "productsTreetable",
  tooltip: true,
  select: "cell",
  columns: [
    { id: "id", header: "", width: 50 },
    {
      id: "title",
      header: "Title",
      fillspace: true,
      template: "{common.treetable()} #title#",
    },
    { id: "price", header: "price" },
  ],
  ready: () => $$("productsTreetable").openAll(),
  url: "http://localhost:3000/src/data/products.js",
};
