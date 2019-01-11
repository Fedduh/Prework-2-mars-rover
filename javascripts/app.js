// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  // position
  x: 0,
  y: 0,
  travelLog: []
};

// --- Notes assignment -- //
// grid assumed to be -5 by 5, with the rover starting in the centre.
// which makes a grid of 11x11 (instead of 10x10)
// bonus "move backward" and "input validation" are included
// bonus "obstacles" and "other rovers" are not included. Perhaps I'll try that next week.


// Turning directions
function turnLeft(rover){
  //console.log("current direction is " + rover.direction);
  console.log("turnLeft was called!");
  // turning the rover
  switch (rover.direction) {
    case "N":
      rover.direction = "W"
      break;
      case "E":
      rover.direction = "N"
      break;
      case "S":
      rover.direction = "E"
      break;
      case "W":
      rover.direction = "S"
      break;
    }
  console.log("new direction is " + rover.direction);
}

function turnRight(rover){
  //console.log("current direction is " + rover.direction);
  console.log("turnRight was called!");
  // turning the rover
  switch (rover.direction) {
    case "N":
      rover.direction = "E"
      break;
      case "E":
      rover.direction = "S"
      break;
      case "S":
      rover.direction = "W"
      break;
      case "W":
      rover.direction = "N"
            break;
  }
  console.log("new direction is " + rover.direction);
}

function moveForward(rover){
  // current direction and travel log
  console.log("moveForward was called, direction is " + rover.direction);
  console.log("old position is " + rover.x + ", " + rover.y);
  rover.travelLog.push(rover.x + "," + rover.y);
  // moving depends on the direction
  switch (rover.direction) {
    case "N": // NORTH - 1 to up (y - 1)
      if (rover.y === -5) { // don't move
        console.log("end of grid ("+ rover.x + "," + rover.y + "), will remain at the same spot")
        console.log("position is " + rover.x + ", " + rover.y);
      } else { // do move
        rover.y -= 1;
        console.log("new position is " + rover.x + ", " + rover.y);
      }
     break;

    case "E": // EAST - 1 to right (x + 1)
      if (rover.x === 5) { // don't move
        console.log("end of grid ("+ rover.x + "," + rover.y + "), will remain at the same spot")
        console.log("position is " + rover.x + ", " + rover.y);
      } else { // do move  
        rover.x += 1; 
        console.log("new position is " + rover.x + ", " + rover.y);
      }
      break;

    case "S": // SOUTH - 1 to down (y + 1)
      if (rover.y === 5) { // don't move
        console.log("end of grid ("+ rover.x + "," + rover.y + "), will remain at the same spot")
        console.log("position is " + rover.x + ", " + rover.y);
      } else { // do move    
        rover.y += 1;
        console.log("new position is " + rover.x + ", " + rover.y);
      }
      break;
      
    case "W": // WEST - 1 to left (x - 1)
      if (rover.x === -5) { // don't move
        console.log("end of grid ("+ rover.x + "," + rover.y + "), will remain at the same spot")
        console.log("position is " + rover.x + ", " + rover.y);
      } else { // do move  
        rover.x -= 1;
        console.log("new position is " + rover.x + ", " + rover.y);
      }
      break;
  }
}

function moveBackward(rover){
// current direction and travel log
  console.log("moveBackward was called, direction is " + rover.direction + " (backwards)");
  console.log("old position is " + rover.x + ", " + rover.y);
  rover.travelLog.push(rover.x + "," + rover.y);
  // moving depends on the direction
  switch (rover.direction) {
    case "N": // NORTH - 1 to down (y + 1)
      if (rover.y === 5) { // don't move
        console.log("end of grid ("+ rover.x + "," + rover.y + "), will remain at the same spot")
        console.log("position is " + rover.x + ", " + rover.y);
      } else { // do move
        rover.y += 1;
        console.log("new position is " + rover.x + ", " + rover.y);
      }
     break;

    case "E": // EAST - 1 to left (x - 1)
      if (rover.x === -5) { // don't move
        console.log("end of grid ("+ rover.x + "," + rover.y + "), will remain at the same spot")
        console.log("position is " + rover.x + ", " + rover.y);
      } else { // do move  
        rover.x -= 1; 
        console.log("new position is " + rover.x + ", " + rover.y);
      }
      break;

    case "S": // SOUTH - 1 to up (y - 1)
      if (rover.y === -5) { // don't move
        console.log("end of grid ("+ rover.x + "," + rover.y + "), will remain at the same spot")
        console.log("position is " + rover.x + ", " + rover.y);
      } else { // do move    
        rover.y -= 1;
        console.log("new position is " + rover.x + ", " + rover.y);
      }
      break;
      
    case "W": // WEST - 1 to right (x + 1)
      if (rover.x === 5) { // don't move
        console.log("end of grid ("+ rover.x + "," + rover.y + "), will remain at the same spot")
        console.log("position is " + rover.x + ", " + rover.y);
      } else { // do move  
        rover.x += 1;
        console.log("new position is " + rover.x + ", " + rover.y);
      }
      break;
  }
}


function input (directions) {
  // regexp for checking only contains lrfb
  if (/^[lrfb]+$/.test(directions)) { 
    console.log("current direction is " + rover.direction);
    // loop through the commands 1 by 1
    for (i = 0; i < directions.length; i++) {
      switch (directions[i]) {
        // turn right
        case "r": 
          // console.log("Direction " + directions[i] + " is: go right!");
          turnRight(rover);
          // turn left
        case "l":
          // console.log("Direction " + directions[i] + " is: go left!");
          turnLeft(rover);
          // forward
        case "f":
          // console.log("Direction " + directions[i] + " is: go foward!");
          moveForward(rover);
        case "b":
          // console.log("Direction " + directions[i] + " is: go back!");
          moveBackward(rover);
      }
    }
    // end position
    rover.travelLog.push(rover.x + "," + rover.y);
    // report the travel log array
    console.log(rover.travelLog);
  }
  else {
  // false directions
  console.log("False directions! please try again. lrfb only.");
  }
}



// -- INPUT COMMANDS -- //

input("rffbrfflbfrffrbbbbb"); //  input commands
// input("lffffffrffffffflfffffffffffffrffffffffff");