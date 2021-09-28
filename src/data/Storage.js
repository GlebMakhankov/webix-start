export default class Storage {
  static categories = new webix.DataCollection({
    url: "http://localhost:3000/src/data/categories.js",
  });

  static users = new webix.DataCollection({url: "http://localhost:3000/src/data/users.js"});
}
