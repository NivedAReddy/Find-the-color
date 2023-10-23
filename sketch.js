let colorCase = 0;
let clickedOnce = 0;
let score = 0;
let colorText = '';
let colorSize = 100; // Adjusted size of colored squares

function setup() {
  gameSetup();
}

// Colored squares if different colors
function draw() {
  noStroke();
  fill("green");
  square(100, 200, colorSize);
  fill("red");
  square(300, 200, colorSize);
  fill("orange");
  square(100, 400, colorSize);
  fill("blue");
  square(300, 400, colorSize);
  fill("purple");
  square(100, 600, colorSize);
  fill("yellow");
  square(300, 600, colorSize);
  fill("pink");
  square(100, 800, colorSize);
  fill("cyan");
  square(300, 800, colorSize);
  fill("teal");
  square(100, 1000, colorSize);
  fill("violet");
  square(300, 1000, colorSize);
  
  gameManager(); // To manage user input
}

// This is the colored square 
function gameManager() {
  if (mouseIsPressed == true && clickedOnce == 1) {
    if ((mouseX > 100 && mouseX < 200) && (mouseY > 200 && mouseY < 300)) {
      
      if (colorCase >= 0 && colorCase < 1) {
        correctButton();
      }
      else {
        incorrectButton();
      }
    }
    
    if ((mouseX > 300 && mouseX < 400) && (mouseY > 200 && mouseY < 300)) {
      
      if (colorCase >= 1 && colorCase < 2) {
        correctButton();
      }
      else {
        incorrectButton();
      }
    }
    
    if ((mouseX > 100 && mouseX < 200) && (mouseY > 400 && mouseY < 500)) {
      if (colorCase >= 2 && colorCase < 3) {
        correctButton();
      }
      else {
        incorrectButton();
      }
    }
    
    if ((mouseX > 300 && mouseX < 400) && (mouseY > 400 && mouseY < 500)) {
      if (colorCase >= 3 && colorCase < 4) {
        correctButton();
      }
      else {
        incorrectButton();
      }
    }
    if ((mouseX > 100 && mouseX < 200) && (mouseY > 600 && mouseY < 700)) {
      if (colorCase >= 4 && colorCase < 5) {
        correctButton();
      }
      else {
        incorrectButton();
      }
    }
    
    if ((mouseX > 300 && mouseX < 400) && (mouseY > 600 && mouseY < 700)) {
      if (colorCase >= 5 && colorCase < 6) {
        correctButton();
      }
      else {
        incorrectButton();
      }
    }
    
    if ((mouseX > 100 && mouseX < 200) && (mouseY > 800 && mouseY < 900)) {
      if (colorCase >= 6 && colorCase < 7) {
        correctButton();
      } 
      else {
        incorrectButton();
      }
    }
    
    if ((mouseX > 300 && mouseX < 400) && (mouseY > 800 && mouseY < 900)) {
      if (colorCase >= 7 && colorCase < 8) {
        correctButton();
      } 
      else {
        incorrectButton();
      }
    }
    
    if ((mouseX > 100 && mouseX < 200) && (mouseY > 1000 && mouseY < 1100)) {
      if (colorCase >= 8 && colorCase < 9) {
        correctButton();
      }
      else {
        incorrectButton();
      }
    }
    
    if ((mouseX > 300 && mouseX < 400) && (mouseY > 1000 && mouseY < 1100)) {
      if (colorCase >= 9 && colorCase < 10) {
        correctButton();
      }
      else {
        incorrectButton();
      }
    }
  }
}


function gameSetup() {
  colorCase = random(10); // Adjusted for ten colors
  if (colorCase >= 0 && colorCase < 1) {
    colorText = 'green';
  }
  
  else if (colorCase >= 1 && colorCase < 2) {
    colorText = 'red';
  }
  
  else if (colorCase >= 2 && colorCase < 3) {
    colorText = 'orange';
  }
  
  else if (colorCase >= 3 && colorCase < 4) {
    colorText = 'blue';
  }
  
  else if (colorCase >= 4 && colorCase < 5) {
    colorText = 'purple';
  }
  
  else if (colorCase >= 5 && colorCase < 6) {
    colorText = 'yellow';
  }
  
  else if (colorCase >= 6 && colorCase < 7) {
    colorText = 'pink';
  }
  
  else if (colorCase >= 7 && colorCase < 8) {
    colorText = 'cyan';
  }
  
  else if (colorCase >= 8 && colorCase < 9) {
    colorText = 'teal';
  }
  
  else if (colorCase >= 9 && colorCase < 10) {
    colorText = 'violet';
  }
  
  createCanvas(500, 1200); // Adjusted canvas height
  background(220);
  textSize(32);
  fill('black');
  text('Press the ' + colorText + ' button', 100, 100);
  clickedOnce = 1;
}

function correctButton() {
  background(200, 255, 200);
  textSize(50);
  fill('green');
  text('CORRECT', 100, 150);
  clickedOnce = 0;
  score = score + 1;
  
  textSize(20);
  fill('black');
  text('Score: ' + score, 210, 50);
  text('PRESS RETURN/ENTER TO RESET', 80, 1150); // Adjusted text position
}

function incorrectButton() {
  background(255, 200, 200);
  textSize(50);
  fill('red');
  text('INCORRECT', 100, 150);
  clickedOnce = 0;
  score = 0;
  
  textSize(20);
  fill('black');
  text('Score: ' + score, 210, 50);
  text('PRESS RETURN/ENTER TO RESET', 80, 1150); // Adjusted text position
}

function keyPressed() {
  if (keyCode === RETURN) {
    gameSetup();
    print('reset');
  }
}