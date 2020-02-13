let rover = {
  direction: "N",
  positionX: 0,
  positionY: 0,
  travelLog: []
};


//Turn LEFT
  function turnLeft(rover){
  switch(rover.direction){

    case 'N': rover.direction='W'; break;
    case 'W': rover.direction='S'; break;
    case 'S': rover.direction='E'; break;
    case 'E': rover.direction='N'; break;
  }
  console.log("turnLeft was called!");
}


//Turn RIGHT
  function turnRight(rover){
  switch(rover.direction){

    case 'N': rover.direction='E'; break;
    case 'E': rover.direction='S'; break;
    case 'S': rover.direction='W'; break;
    case 'W': rover.direction='N'; break;
  }
  console.log("turnRight was called!");
}


//Move FORWARD
  function moveForward(rover){
    switch(rover.direction){

    case 'N':
      if(rover.positionY <= 0 || rover.positionY > 9){
        console.log("Rover reached limit grid");
      }else{
        rover.positionY -= 1;
      }
      break;
    
    case 'E':
      if(rover.positionX < 0 || rover.positionX >= 9){
        console.log("Rover reached limit grid");
      }else{
        rover.positionX += 1;
      }
      break;

    case 'S':
      if(rover.positionY < 0 || rover.positionY >= 9){
        console.log("Rover reached limit grid");
      }else{
        rover.positionY += 1;
      }
      break;

    case 'W':
      if(rover.positionX = 0 || rover.positionX > 9){
        console.log("Rover reched limit grid");
      }else{
        rover.positionX -= 1;
      }
      break;
    }

  console.log("moveForward was called!")
  console.log(`Rover is here: x: ${rover.positionX}, y: ${rover.positionY}`);
}


//Move BACKWARD
function moveBackward(rover){
  switch(rover.direction){

  case 'N':
    if(rover.positionY <= 0 || rover.positionY > 9){
      console.log("Rover reached limit grid");
    }else{
      rover.positionY += 1;
    }
    break;
  
  case 'E':
    if(rover.positionX < 0 || rover.positionX >= 9){
      console.log("Rover reached limit grid");
    }else{
      rover.positionX -= 1;
    }
    break;

  case 'S':
    if(rover.positionY < 0 || rover.positionY >= 9){
      console.log("Rover reached limit grid");
    }else{
      rover.positionY -= 1;
    }
    break;

  case 'W':
    if(rover.positionX = 0 || rover.positionX > 9){
      console.log("Rover reched limit grid");
    }else{
      rover.positionX += 1;
    }
    break;
  }

console.log("moveBackward was called!")
console.log(`Rover is here: x: ${rover.positionX}, y: ${rover.positionY}`);
}


function command(rover, entry) {

  for(let i = 0; i < entry.length; i+=1){
    switch(entry[i]){
      
      case 'f':
        moveForward(rover);
        break;

      case 'b':
        moveBackward(rover);
        break;

      case 'r':
        turnRight(rover);
        break;

      case 'l':
        turnLeft(rover);
        break;

      default:
        console.log("The entered command is not correct. Please enter f(orward), r(ight) or l(eft) as command");
    }
    
    for(let i=0; i<rover.travelLog.length; i++){
      console.log(`Path ${i} ==> x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`)
    }
    rover.travelLog.push({x: rover.positionX, y: rover.positionY})
  }
}

command(rover, 'rffrfflfrff');