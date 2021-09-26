export const UsersChart = {
  view: "chart",
  type: "bar",
  value: "#age#",
  barWidth: 30,
  radius: 0,
  tooltip: {
    template: "#age#",
  },
  xAxis: {
    template: "#age#",
    title: "Age",
  },
  url: "http://localhost:3000/src/data/users.js",
};
