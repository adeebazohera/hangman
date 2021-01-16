var words, startdash = 200, startSprite = 210, aSprite, life = 5;
var count = 0;
var backimg;
var complete = [];
var gameState = "start";
var r;
var count = [];

function preload() {
  backimg = loadImage("darkforest2.png");
}
function setup() {
  createCanvas(800, 600);
  background(backimg);

  words = ["ZAYN", "ADAM SANDLER", "AVENGERS"];

  
   lines();
  

  abutton = createButton("A");
  abutton.position(100, 150);


  bbutton = createButton("B");
  bbutton.position(130, 150);

  cbutton = createButton("C");
  cbutton.position(160, 150);

  dbutton = createButton("D");
  dbutton.position(190, 150);

  ebutton = createButton("E");
  ebutton.position(220, 150);

  fbutton = createButton("F");
  fbutton.position(250, 150);

  gbutton = createButton("G");
  gbutton.position(100, 180);

  hbutton = createButton("H");
  hbutton.position(130, 180);

  ibutton = createButton("I");
  ibutton.position(160, 180);

  jbutton = createButton("J");
  jbutton.position(190, 180);

  kbutton = createButton("K");
  kbutton.position(220, 180);

  lbutton = createButton("L");
  lbutton.position(250, 180);

  mbutton = createButton("M");
  mbutton.position(100, 210);

  nbutton = createButton("N");
  nbutton.position(130, 210);

  obutton = createButton("O");
  obutton.position(160, 210);

  pbutton = createButton("P");
  pbutton.position(190, 210);

  qbutton = createButton("Q");
  qbutton.position(220, 210);

  rbutton = createButton("R");
  rbutton.position(250, 210);

  sbutton = createButton("S");
  sbutton.position(100, 240);

  tbutton = createButton("T");
  tbutton.position(130, 240);

  ubutton = createButton("U");
  ubutton.position(160, 240);

  vbutton = createButton("V");
  vbutton.position(190, 240);

  wbutton = createButton("W");
  wbutton.position(220, 240);

  xbutton = createButton("X");
  xbutton.position(250, 240);

  ybutton = createButton("Y");
  ybutton.position(165, 270);

  zbutton = createButton("Z");
  zbutton.position(195, 270);

}

function draw() {
  background(backimg);
  console.log(gameState + " " + frameCount);
  //text(mouseX+" "+mouseY,mouseX,mouseY)
  if (gameState == "start") {
    text("Ready", 450, 300);
    text("Press space to start",400,380);
  }
  if (keyDown("space") && gameState == "start") {
    text("Go", 450, 300);
    gameState = "play";
  }
  if (gameState == "play") {

    abutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "A") {
          console.log("hello");
          console.log(startSprite);
          textSize(15);
          //text("A", startSprite, 40);
          aSprite = createSprite(startSprite,40,10,10);
          complete.push("A");
        }
        startSprite = startSprite + 40;
      }

    });
    bbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "B") {
          console.log(startSprite);
          //text("B", startSprite, 40);
          bSprite = createSprite(startSprite,40,10,10);
          complete.push("B");
        }
        startSprite = startSprite + 40;
      }

    })
    cbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "C") {
          console.log(startSprite);
          //text("C", startSprite, 40);
          cSprite = createSprite(startSprite,40,10,10);
          complete.push("C");
        }
        startSprite = startSprite + 40;
      }

    })
    dbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "D") {
          console.log(startSprite);
          //text("D", startSprite, 40);
          dSprite = createSprite(startSprite,40,10,10);
          complete.push("D");
        }
        startSprite = startSprite + 40;
      }

    })
    ebutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "E") {
          console.log(startSprite);
          //text("E", startSprite, 40);
          eSprite = createSprite(startSprite,40,10,10);
          complete.push("E");
        }
        startSprite = startSprite + 40;
      }

    });
    fbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "F") {
          console.log(startSprite);
          //text("F", startSprite, 40);
          fSprite = createSprite(startSprite,40,10,10);
          complete.push("F");
        }
        startSprite = startSprite + 40;
      }

    });
    gbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "G") {
          console.log(startSprite);
          //text("G", startSprite, 40);
          gSprite = createSprite(startSprite,40,10,10);
          complete.push("G");
        }
        startSprite = startSprite + 40;
      }

    });
    hbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "H") {
          console.log(startSprite);
          //text("H", startSprite, 40);
          hSprite = createSprite(startSprite,40,10,10);
          complete.push("H");
        }
        startSprite = startSprite + 40;
      }

    });
    ibutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "I") {
          console.log(startSprite);
          //text("I", startSprite, 40);
          iSprite = createSprite(startSprite,40,10,10);
          complete.push("I");
        }
        startSprite = startSprite + 40;
      }

    });
    jbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "J") {
          console.log(startSprite);
          //text("J", startSprite, 40);
          jSprite = createSprite(startSprite,40,10,10);
        }
        startSprite = startSprite + 40;
      }

    });
    kbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "K") {
          console.log(startSprite);
          //text("K", startSprite, 40);
          kSprite = createSprite(startSprite,40,10,10);
          complete.push("K");
        }
        startSprite = startSprite + 40;
      }

    });
    lbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "L") {
          console.log(startSprite);
          //text("L", startSprite, 40);
          lSprite = createSprite(startSprite,40,10,10);
          complete.push("L");
        }
        startSprite = startSprite + 40;
      }

    });
    mbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "M") {
          console.log(startSprite);
          //text("M", startSprite, 40);
          mSprite = createSprite(startSprite,40,10,10);
          complete.push("M");
        }
        startSprite = startSprite + 40;
      }

    });
    nbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "N") {
          console.log(startSprite);
          //text("N", startSprite, 40);
          nSprite = createSprite(startSprite,40,10,10);
          complete.push("N");
        }
        startSprite = startSprite + 40;
      }

    });
    obutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "O") {
          console.log(startSprite);
          //text("O", startSprite, 40);
          oSprite = createSprite(startSprite,40,10,10);
          complete.push("O");
        }
        startSprite = startSprite + 40;
      }

    });
    pbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "P") {
          console.log(startSprite);
          text("P", startSprite, 40);
          pSprite = createSprite(startSprite,40,10,10);
          complete.push("P");
        }
        startSprite = startSprite + 40;
      }

    });

    qbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "Q") {
          console.log(startSprite);
          //text("Q", startSprite, 40);
          qSprite = createSprite(startSprite,40,10,10);
          complete.push("Q");
        }
        startSprite = startSprite + 40;
      }

    });

    rbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "R") {
          console.log(startSprite);
          //text("R", startSprite, 40);
          rSprite = createSprite(startSprite,40,10,10);
          complete.push("R");
        }
        startSprite = startSprite + 40;
      }

    });
    sbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "S") {
          console.log(startSprite);
          //text("S", startSprite, 40);
          sSprite = createSprite(startSprite,40,10,10);
          complete.push("S");
        }
        startSprite = startSprite + 40;
      }

    });
    tbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "T") {
          console.log(startSprite);
          //text("T", startSprite, 40);
          tSprite = createSprite(startSprite,40,10,10);
          complete.push("T");
        }
        startSprite = startSprite + 40;
      }

    });
    ubutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "U") {
          console.log(startSprite);
          //text("U", startSprite, 40);
          uSprite = createSprite(startSprite,40,10,10);
          complete.push("U");
        }
        startSprite = startSprite + 40;
      }

    });
    vbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "V") {
          console.log(startSprite);
          //text("V", startSprite, 40);
          vSprite = createSprite(startSprite,40,10,10);
          complete.push("V");
        }
        startSprite = startSprite + 40;
      }

    });
    wbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "W") {
          console.log(startSprite);
          //text("W", startSprite, 40);
          wSprite = createSprite(startSprite,40,10,10);
          complete.push("W");
        }
        startSprite = startSprite + 40;
      }

    });
    xbutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "X") {
          console.log(startSprite);
          //text("X", startSprite, 40);
          xSprite = createSprite(startSprite,40,10,10);
          complete.push("X");
        }
        startSprite = startSprite + 40;
      }

    });
    ybutton.mousePressed(() => {
      startSprite = 210;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "Y") {
          console.log(startSprite);
          //text("Y", startSprite, 40);
          ySprite = createSprite(startSprite,40,10,10);
          complete.push("Y");
        }
        startSprite = startSprite + 40;
      }

    });
    zbutton.mousePressed(() => {
      startSprite = 210;
      count = 1;
      for (var j = 0; j < words[r].length; j++) {
        if (words[r][j] === "Z") {
          console.log(startSprite);
          //text("Z", startSprite, 40);
          zSprite = createSprite(startSprite,40,10,10);
          complete.push("Z");
        }
        startSprite = startSprite + 40;
      }

    });
    if ((r === 0 && complete.length === 4) ||
      (r === 1 && complete.length === 11) ||
      (r === 2 && complete.length === 8)) {
      gameState = "win";
    }

  }
  if (gameState == "win") {
    textSize(20);
    text("YOU WIN", 400, 250);
    text("Press R to play again", 300, 400);
    complete=[];
    
  }
  if (keyDown("r") && gameState == "win") {
    background(backimg);
    count=[];
    lines();
    gameState="start";   
  }

  drawSprites();

}
function lines(){
  r = Math.round(random(0, 2));
  console.log(r);
  startdash = 200;
  for (var i = 0; i < words[r].length; i++) {
    /*strokeWeight(4);
    stroke("white");
    line(startdash, 60, startdash + 20, 60);*/
    var dash = createSprite(startdash,60,20,5);
    startdash = startdash + 40;
    startdash.shapeColor = "white";
    count.push(1);
    if(count.length == words[r].length){
      break;
    }
  }
}
