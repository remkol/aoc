const { upload } = require("./uploadFile");

const input = upload("./data/alarm.txt")
  .trim()
  .split(",")
  .map(Number);

let values = input;
// Init
values[1] = 12;
values[2] = 2;

values.forEach((el, idx) => {
  if (Number.isInteger(idx / 4)) {
    switch (el) {
      case 1:
        values[values[idx + 3]] =
          values[values[idx + 1]] + values[values[idx + 2]];
        break;
      case 2:
        values[values[idx + 3]] =
          values[values[idx + 1]] * values[values[idx + 2]];
        break;
      case 99:
        console.log("Result: " + values[0]);
        return;

      default:
        break;
    }
  }
});
