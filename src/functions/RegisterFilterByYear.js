export default function RegisterFilterByYear(target, registeredFilter) {
  target.registerFilter(
    registeredFilter,
    {
      columnId: "year",
      compare: function (value, filter, item) {
        const currentYear = new Date().getFullYear();
        switch (filter) {
          case "new":
            return value >= currentYear - 3;

          case "modern":
            return value >= currentYear - 10;

          case "old":
            return value < currentYear - 10;

          default:
            return value;
        }
      },
    },
    {
      getValue: function (node) {
        return node.getValue();
      },
      setValue: function (node, value) {
        node.setValue(value);
      },
    }
  );
}
