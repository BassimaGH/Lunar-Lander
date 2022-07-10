/*
    GAME SETUP 
*/
function setup() {
    createCanvas(650, 450);
    frameRate(30);
}


/*
    All CALCULATIONS
*/

// The following 3 lines of code was added by courtesy of Garrit Schaap
function calculateCenter(position, size) {
    return size / 2 + position;
}


/*
    GAME ASSETS 
*/

//spaceship
function spaceship(x, y, spaceshipRotation, flame) {
    push();
    translate(x, y);
    rotate(spaceshipRotation);
    //flames
    if (flame === true) {
        push();
        translate(0, 37);
        rotate(0.8);
        fill(255, 107, 15);
        stroke(255, 107, 15);
        rect(-10, -10, 20, 20);
        stroke(255, 18, 46);
        fill(255, 169, 115);
        rect(-5, -5, 10, 10);
        pop();
    }
    //right leg
    stroke(241, 111, 150);
    line(-35, 20, -45, 40);
    //left leg
    line(35, 20, 45, 40);
    //right upper line
    line(-6, -20, -25, -44);
    //left upper line
    line(5, -20, 25, -44);
        //fire boster rectangle
        fill(238, 28, 76);
        stroke(238, 28, 76);
        beginShape();
        vertex(8, 20);
        vertex(13, 32);
        vertex(-12, 32);
        vertex(-6, 20);
        endShape(CLOSE);
    //main body
    fill(241, 111, 150);
    stroke(241, 111, 150);
    rect(-35, -20, 70, 40);
    //window kader
    stroke(0);
    fill(255);
    ellipse(0, 0, 30, 25);
    //window glass
    fill(0);
    ellipse(0, 0, 20, 17);
    //heart right
    fill(238, 28, 76);
    stroke(238, 28, 76);
    beginShape();
    vertex(-25, -44);
    vertex(-22, -50);
    bezierVertex(-19, -56, -26, -59, -29, -53);
    bezierVertex(-35, -55, -37, -49, -31, -46);
    vertex(-25, -44);
    endShape();
    //heart left
    beginShape();
    vertex(25, -44);
    vertex(32, -46);
    bezierVertex(38, -49, 35, -55, 29, -53);
    bezierVertex(27, -59, 20, -56, 23, -50);
    vertex(25, -44);
    endShape();
    pop();
}
//background pink hearts
function backgroundHeartsPink(x, y, s) {
    push();
    translate(x * 2, y * 2);
    rotate(5.84);
    beginShape();
    fill(238, 28, 76);
    stroke(238, 28, 76);
    vertex(x + 60 * s, y - 24 * s);
    vertex(x + 67 * s, y - 26 * s);
    bezierVertex(x + 73 * s, y - 29 * s, x + 70 * s, y - 35 * s, x + 64 * s, y - 33 * s);
    bezierVertex(x + 62 * s, y - 39 * s, x + 55 * s, y - 36 * s, x + 58 * s, y - 30 * s);
    vertex(x + 60 * s, y - 24 * s);
    endShape();
    pop();
} 
//background white hearts
function backgroundHeartsWhite(x, y, s) {
    push();
    translate(x * 2, y * 2);
    rotate(5.84);
    beginShape();
    fill(255);
    stroke(255);
    vertex(x + 60 * s, y - 24 * s);
    vertex(x + 67 * s, y - 26 * s);
    bezierVertex(x + 73 * s, y - 29 * s, x + 70 * s, y - 35 * s, x + 64 * s, y - 33 * s);
    bezierVertex(x + 62 * s, y - 39 * s, x + 55 * s, y - 36 * s, x + 58 * s, y - 30 * s);
    vertex(x + 60 * s, y - 24 * s);
    endShape();
    pop();
} 
//landing platforms
function wrongPlatform(x, y) {
    fill(255);
    ellipse(x, y, 130, 20);
}
function rightPlatform(x, y) {
    fill(241, 111, 150);
    ellipse(x, y, 130, 20);
}
//rectangular buttons
function startButton(w, h) {
    noStroke();
    fill(241, 111, 150);
    rect(240, 200, w, h);

    // The following 2 lines of code was added by courtesy of Garrit Schaap
    const positionX = calculateCenter(240, w);
    const positionY = calculateCenter(200, h);

    fill(255);
    textSize(19);
    text("Start", positionX - 20.9, positionY + 4);
    
}
function rulesButton(w, h) {
    noStroke();
    fill(241, 111, 150);
    rect(240, 280, w, h);

    // The following 2 lines of code was added by courtesy of Garrit Schaap
    const positionX = calculateCenter(240, w);
    const positionY = calculateCenter(280, h);

    fill(255);
    textSize(19);
    text("Rules", positionX - 23.9, positionY + 4);
}
function backButton(w, h) {
    noStroke();
    fill(241, 111, 150);
    rect(20, 20, w, h);

    // The following 2 lines of code was added by courtesy of Garrit Schaap
    const positionX = calculateCenter(20, w);
    const positionY = calculateCenter(20, h);

    fill(255);
    textSize(17);
    text("Back", positionX - 20.9, positionY + 4);
}
function replayButton(w, h) {
    noStroke();
    fill(241, 111, 150);
    rect(195, 200, w, h);

    // The following 2 lines of code was added by courtesy of Garrit Schaap
    const positionX = calculateCenter(195, w);
    const positionY = calculateCenter(200, h);

    fill(255);
    textSize(19);
    text("Replay", positionX - 28.9, positionY + 4);
}
function exitButton(w, h) {
    noStroke();
    fill(241, 111, 150);
    rect(195, 280, w, h);

    // The following 2 lines of code was added by courtesy of Garrit Schaap
    const positionX = calculateCenter(195, w);
    const positionY = calculateCenter(280, h);

    fill(255);
    textSize(19);
    text("Exit", positionX - 20.9, positionY + 4);
}
function tryAgainButton(w, h) {
    noStroke();
    fill(241, 111, 150);
    rect(195, 200, w, h);

    // The following 2 lines of code was added by courtesy of Garrit Schaap
    const positionX = calculateCenter(195, w);
    const positionY = calculateCenter(200, h);

    fill(255);
    textSize(19);
    text("Try again", positionX - 40, positionY + 4);
}


/*
    ALL SCREENS
*/

//Variables 1 (for the hearts)
let heartY = 190;
let heartSpeed = 0.2;

// start screen (MAIN)
function startScreen() {
    background(46, 20, 41);
    backgroundHeartsPink(100, heartY, 1.7);
    backgroundHeartsPink(10, heartY - 24, 1.7);
    backgroundHeartsPink(90, heartY - 135, 1.7);
    backgroundHeartsPink(-5, heartY - 110, 1.7);
    backgroundHeartsPink(-15, heartY - 140, 1.7);
    backgroundHeartsPink(35, heartY - 140, 1.7);
    backgroundHeartsPink(15, heartY - 70, 1.7);
    backgroundHeartsPink(-25, heartY - 50, 1.7);
    backgroundHeartsPink(-25, heartY - 90, 1.7);
    backgroundHeartsPink(150, heartY - 120, 1.7);
    backgroundHeartsPink(150, heartY, 1.7);
    backgroundHeartsPink(160, heartY - 90, 1.7);
    backgroundHeartsPink(120, heartY - 55, 1.7);
    backgroundHeartsPink(140, heartY - 30, 1.7);
    backgroundHeartsPink(50, heartY - 10, 1.7);
    backgroundHeartsPink(-25, heartY - 20, 1.7);
    backgroundHeartsPink(150, heartY - 60, 1.7);

    // The following 3 lines of code was added by courtesy of Garrit Schaap
    heartY += heartSpeed;
    if (heartY > 190 || heartY < 187) {
        heartSpeed *= -1;
    }

    startButton(180, 50);
    rulesButton(180, 50);
    
    // change font to press start 2P (ask in lab)
    textFont("Arial");
    textSize(60);
    text("Lunar Lander", 150, 140);
}

// rules screen
function rulesScreen() {
    background(46, 20, 41);
    backgroundHeartsPink(100, heartY, 1.7);
    backgroundHeartsPink(10, heartY - 24, 1.7);
    backgroundHeartsPink(15, heartY - 70, 1.7);
    backgroundHeartsPink(-25, heartY - 50, 1.7);
    backgroundHeartsPink(-20, heartY - 76, 1.7);
    backgroundHeartsPink(150, heartY, 1.7);
    backgroundHeartsPink(120, heartY - 55, 1.7);
    backgroundHeartsPink(140, heartY - 30, 1.7);
    backgroundHeartsPink(50, heartY - 10, 1.7);
    backgroundHeartsPink(-25, heartY - 20, 1.7);
    backgroundHeartsPink(155, heartY - 50, 1.7);
    backgroundHeartsPink(50, heartY - 60, 1.7);
    backgroundHeartsPink(80, heartY - 50, 1.7);
    backgroundHeartsPink(100, heartY - 30, 1.7);
    backgroundHeartsPink(10, heartY - 50, 1.7);
    backgroundHeartsPink(50, heartY - 30, 1.7);

    // The following 3 lines of code was added by courtesy of Garrit Schaap
    heartY += heartSpeed;
    if (heartY > 190 || heartY < 187) {
        heartSpeed *= -1;
    }

    textSize(60);
    text("Rules", 250, 140);
    textSize(27);
    text("Land safely on the pink platform", 120, 200);

    backButton(100, 40);
}

// game screen (MAIN)
function gameScreen() {
    background(36, 15, 32);
    push();
    translate(40, -255);
    backgroundHeartsWhite(100, heartY, 1);
    backgroundHeartsWhite(10, heartY - 24, 1);
    backgroundHeartsWhite(15, heartY - 70, 1);
    backgroundHeartsWhite(-25, heartY - 50, 1);
    backgroundHeartsWhite(-20, heartY - 76, 1);
    backgroundHeartsWhite(150, heartY, 1);
    backgroundHeartsWhite(120, heartY - 55, 1);
    backgroundHeartsWhite(140, heartY - 30, 1);
    backgroundHeartsWhite(50, heartY - 10, 1);
    backgroundHeartsWhite(-25, heartY - 20, 1);
    backgroundHeartsWhite(155, heartY - 50, 1);
    backgroundHeartsWhite(50, heartY - 60, 1);
    backgroundHeartsWhite(80, heartY - 50, 1);
    backgroundHeartsWhite(100, heartY - 30, 1);
    backgroundHeartsWhite(10, heartY - 50, 1);
    backgroundHeartsWhite(50, heartY - 30, 1);
    pop();
    push();
    translate(20, -50);
    backgroundHeartsWhite(100, heartY, 1);
    backgroundHeartsWhite(10, heartY - 24, 1);
    backgroundHeartsWhite(15, heartY - 70, 1);
    backgroundHeartsWhite(-25, heartY - 50, 1);
    backgroundHeartsWhite(-20, heartY - 76, 1);
    backgroundHeartsWhite(150, heartY, 1);
    backgroundHeartsWhite(120, heartY - 55, 1);
    backgroundHeartsWhite(140, heartY - 30, 1);
    backgroundHeartsWhite(50, heartY - 10, 1);
    backgroundHeartsWhite(-25, heartY - 20, 1);
    backgroundHeartsWhite(155, heartY - 50, 1);
    backgroundHeartsWhite(50, heartY - 60, 1);
    backgroundHeartsWhite(80, heartY - 50, 1);
    backgroundHeartsWhite(100, heartY - 30, 1);
    backgroundHeartsWhite(10, heartY - 50, 1);
    backgroundHeartsWhite(50, heartY - 30, 1);
    pop();

    // The following 3 lines of code was added by courtesy of Garrit Schaap
    heartY += heartSpeed;
    if (heartY > 190 || heartY < 187) {
        heartSpeed *= -1;
    }
    
    noStroke();
    fill(255);
    textSize(17);
    text("Stage 1", 570, 30);

    wrongPlatform(100, 420);
    rightPlatform(300, 420);
    rightPlatform(500, 420);
}

// completed screen (MAIN)
function completeScreen() {
    background(46, 20, 41);

    textSize(17);
    text("Stage 1", 570, 30);

    textSize(40);
    text("Completed", 220, 140);

    replayButton(240, 50);
    exitButton(240, 50);
}

// failed screen (MAIN)
function failScreen() {
    background(46, 20, 41);

    textSize(17);
    text("Stage 1", 570, 30);

    textSize(40);
    text("Failed", 255, 140);

    tryAgainButton(240, 50);
    exitButton(240, 50);
}

// Variables 2
//states
let state = "start_page";

//speed
let gravity = 3.5; 
let speed = 0;

//rotation
let spaceshipRotation = 0;

// Positions
let x = 300;
let y = 50;

// spaceship flames
let flame = false;

//time 
let totalTime;
let otherScreensTime;
let gameTime;
let finalGameTime;

/*
    DRAW FUNCTION
*/

function draw() {
    //time stuff
    // The following 1 lines of code was adapted from https://www.youtube.com/watch?v=iR0m6j8RwAI Accessed: 2022-04-15
    totalTime = millis();

    //states

    if (state === "start_page") {
        startScreen(); 
        // The following 1 lines of code was adapted from https://www.youtube.com/watch?v=iR0m6j8RwAI Accessed: 2022-04-15
        otherScreensTime = totalTime;
    } else if (state === "rules_page") {
        rulesScreen();
        // The following 1 lines of code was adapted from https://www.youtube.com/watch?v=iR0m6j8RwAI Accessed: 2022-04-15
        otherScreensTime = totalTime;
    } else if (state === "game_page") {
        gameScreen();
        // The following 5 lines of code was adapted from https://www.youtube.com/watch?v=iR0m6j8RwAI Accessed: 2022-04-15
        otherScreensTime = otherScreensTime;
        gameTime = int((totalTime - otherScreensTime) / 1000);
        textSize(17);
        fill(255); 
        text(gameTime + " Seconds", 20, 30);

        spaceship(x, y, spaceshipRotation, flame);

        textSize(16);
        let combinedSpeed = speed + gravity;
        text(combinedSpeed, 250, 20);
        // The following 2 lines of code was added by courtesy of Garrit Schaap  
        x += Math.sin(spaceshipRotation) * speed; 
        y += Math.cos(spaceshipRotation) * speed;

        if (keyIsDown(38) && y < 380) {
            speed += -0.6;
            gravity -= 0.001;
            flame = true; 
        } else{
            flame = false;
            speed = 0; 
        }

        // The following 11 lines of code was added by courtesy of Garrit Schaap
        if (keyIsDown(39) && y < 380) {
            spaceshipRotation -= 0.02;
        } else if (keyIsDown(37) && y < 380) { 
            spaceshipRotation += 0.02;
        }

        y += gravity;

        if (y < 380) {
            gravity *= 1.0001;
        } else {
            gravity = 0;
        }
        if (x > 240 && x < 350 && y > 378 && combinedSpeed < 3.5 || x > 440 && x < 550 && y > 378 && combinedSpeed < 3.5) {
            state = "completed_page";
            x = 270;
            y = 50;
            spaceshipRotation = 0;
            gravity = 3.5;         
            finalGameTime = gameTime;   
        } else if (x > -500 && x < 220 && y > 378|| x > 360 && x < 440 && y > 378 || x > 561 && y > 378 && combinedSpeed > 3.5 || y > 378 && combinedSpeed > 3.5 || gameTime >= 15) {
            state = "failed_page";
            x = 270;
            y = 50;
            spaceshipRotation = 0; 
            gravity = 3.5;
            finalGameTime = gameTime; 
        } 
    } else if (state === "completed_page") {
        completeScreen();
        // The following 1 lines of code was adapted from https://www.youtube.com/watch?v=iR0m6j8RwAI Accessed: 2022-04-15
        otherScreensTime = totalTime;
        text(finalGameTime + " Seconds", 20, 30);
    } else if (state === "failed_page") {
        failScreen();
        // The following 1 lines of code was adapted from https://www.youtube.com/watch?v=iR0m6j8RwAI Accessed: 2022-04-15
        otherScreensTime = totalTime;
        text(finalGameTime + " Seconds", 20, 30);
    }
}

// for clickable buttons
// The following 12 lines of code was added by courtesy of Garrit Schaap
function mouseClicked() {
    if (mouseX > 240 && mouseX < 240 + 180 && mouseY > 280 && mouseY < 280 + 50 && state === "start_page") {
        state = "rules_page";
    } else if (mouseX > 20 && mouseX < 20 + 100 && mouseY > 20 && mouseY < 20 + 40 && state === "rules_page") {
        state = "start_page";
    } else if (mouseX > 240 && mouseX < 240 + 180 && mouseY > 200 && mouseY < 200 + 50 && state === "start_page") {
        state = "game_page";
    } else if (mouseX > 195 && mouseX < 195 + 240 && mouseY > 200 && mouseY < 200 + 50 && state === "completed_page") {
        state = "game_page";
    } else if (mouseX > 195 && mouseX < 195 + 240 && mouseY > 280 && mouseY < 280 + 50 && state === "completed_page") {
        state = "start_page";
    } else if (mouseX > 195 && mouseX < 195 + 240 && mouseY > 200 && mouseY < 200 + 50 && state === "failed_page") {
        state = "game_page";
    } else if (mouseX > 195 && mouseX < 195 + 240 && mouseY > 280 && mouseY < 280 + 50 && state === "failed_page") {
        state = "start_page";
    }
}
