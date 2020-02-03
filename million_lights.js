const { upload } = require("./uploadFile");

const INPUT = upload('data/lights_instruction.txt').split('\n');

const COMMANDS_REGEX = /(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/;

// Parse command from string and return object
const parseCommand = _command => {
  let commandArr = _command.match(COMMANDS_REGEX);
  return { command: commandArr[1], x1: +commandArr[2], y1: +commandArr[3], x2: +commandArr[4], y2: +commandArr[5] };
};

// Map of our lights
let LIGHTS = new Uint8Array(1000 * 1000);

// Parse each command and change brightness of our lights
INPUT.forEach(_command => {
  let command = parseCommand(_command);

  for (let x = command.x1; x <= command.x2; x++) {
    for (let y = command.y1; y <= command.y2; y++) {
      let index = 1000 * x + y;

      switch (command.command) {
        case 'turn on':
          LIGHTS[index] += 1;
          break;
        case 'turn off':
          LIGHTS[index] = LIGHTS[index] === 0 ? 0 : LIGHTS[index] - 1;
          break;
        case 'toggle':
          LIGHTS[index] += 2;
          break;
      }
    }
  }
});

// Calculate brightness
const result = LIGHTS.reduce((brightness, light) => brightness + light, 0);

console.log(result);