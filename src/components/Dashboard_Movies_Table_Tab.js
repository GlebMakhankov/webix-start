export const DashboardMoviesTableTab = {
  view: "tabbar",
  id: "tabbarFilterByYear",
  value: "all",
  options: [
    { id: "all", value: "All" },
    { id: "old", value: "Old" },
    { id: "modern", value: "Modern" },
    { id: "new", value: "New" },
  ],
  on: {
    onChange: function () {
      $$("moviesTable").filterByAll();
    },
  },
};
