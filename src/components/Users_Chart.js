export const UsersChart = {
  view: "chart",
  id: "usersChart",
  type: "bar",
  value: "#country#",
  barWidth: 30,
  radius: 0,
  tooltip: {
    template: "#value#",
  },
  xAxis: {
    template: (obj) => obj.value,
    title: "Country",
  },
  yAxis: {},
};
