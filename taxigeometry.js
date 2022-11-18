const blocksAway = function(directions) {
  // Put your solution here
  let x = 0;
  let y = 0;

  //default position up
  let position = 'north';

  for (let i = 0; i < directions.length; i += 2) {
    //account if first element is left to prevent position changing to 'west'
    if (i === 0 && directions[i] === 'left') {
      y += directions[i + 1];
      //position = 'north'; position is already north
      continue;
    }

    if (directions[i] === "right" && position === 'north') {
      x += directions[i + 1];
      position = 'east';
    } else if (directions[i] === "left" && position === 'north') {
      x -= directions[i + 1];
      position = 'west';
    } else if (directions[i] === "right" && position === 'south') {
      x -= directions[i + 1];
      position = 'west';
    } else if (directions[i] === 'left' && position === 'south') {
      x += directions[i + 1];
      position = 'east';
    } else if (directions[i] === 'right' && position === 'east') {
      y -= directions[i + 1];
      position = 'south';
    } else if (directions[i] === 'left' && position === 'east') {
      y += directions[i + 1];
      position = 'north';
    } else if (directions[i] === 'right' && position === 'west') {
      y += directions[i + 1];
      position = 'north';
    } else if (directions[i] === 'left' && position === 'west') {
      y -= directions[i + 1];
      position = 'south';
    }
    
  }
  return {east: x, north: y};
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

/*Expected output
{east: 1, north: 3}
{east: 3, north: 3}
{east: 0, north: 0}
*/