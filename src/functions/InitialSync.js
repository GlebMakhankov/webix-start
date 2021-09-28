import Storage from "../data/Storage";

export default function InitialSync() {
  $$("adminCategoriesTable").sync(Storage.categories);
  const usersChart = $$("usersChart");
  usersChart.sync(Storage.users, () => {
    usersChart.group({
      by: "country",
      map: {
        country: ["country", "count"],
      },
    });
    usersChart.sort("country", "desc");
  });
  $$("list_users").sync(Storage.users);
}
