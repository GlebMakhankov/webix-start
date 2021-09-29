import { App } from "./App.js";
import Storage from "./data/Storage.js";
import getRandomIntInclusive from "./functions/GetRandomInt.js";
import InitialSync from "./functions/InitialSync.js";

webix.ui(App);
InitialSync();
Storage.categories.attachEvent("onAfterDelete", function (id) {
  const count = this.count();
  const moviesTable = $$("moviesTable");
  moviesTable
    .find((x) => x.categoryId == id.row)
    .forEach(
      (element) =>
        (element.categoryId = this.getIdByIndex(
          getRandomIntInclusive(0, count - 1)
        ))
    );
  moviesTable.refresh();
});
