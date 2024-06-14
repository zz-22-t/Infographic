let circles = [];
let numCircles = 28;

function setup() {
  createCanvas(800, 800);
  let circleSize = 50;
  let radius = 300; // more space?
  let centerX = width / 2;
  let centerY = height / 2;
  
  for (let i = 0; i < numCircles; i++) {
    let angle = TWO_PI / numCircles * i;
    let x = centerX + radius * cos(angle);
    let y = centerY + radius * sin(angle);
    let number = (i + 7) % numCircles+1; // 
    circles.push(new Circle(x, y, circleSize, getText(i), number));
  }
}

function draw() {
  background('pink');
  
    let anyHovered = false;

  for (let circle of circles) {
    circle.display();
    circle.checkHover(mouseX, mouseY);
    if (circle.isHovered) {
      anyHovered = true;
    }
  }

  if (!anyHovered) {
    fill("white");
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(20)
    
    text("Let's destigmatize menstruation.\n What happens during a period?", width / 2, height / 2);
  }
}
  for (let circle of circles) {
    circle.display();
    circle.checkHover(mouseX, mouseY);
  
}


function getText(index) {
  let texts = [
    "DAY 8:\nTestosterone Rises= More Attentiveness", //8
    
    "DAY 9:\nHigher estrogen can impact mood,\n complexion and cholesterol levels.", //9
    
    "DAY 10:\nSome may even feel improvment in confidence. ", //10
    
    "DAY 11:\nMood is more likely to be optimistic and social.", //11
    
    "DAY 12:\nHormone levels can affect the skin’s scent and others'.",//12
    
    "DAY 13:\nEstrogen Peaks", //13
    
    "DAY 14:\nOvulation Begins.", //14

    "DAY 15:\nThe ovary releases an egg and shifts in hormones.",//15
    
    "DAY 16:\nHormone changes may intensify emotions and tiredness. ", //16
    
    "DAY 17:\nThe egg travels down the fallopian tube toward\n the uterus to be fertilized by sperm.", //17
    
    "DAY 18:\nDuring ovulation, there may be mild\n soreness on the side of the body where\n  the ovary is releasing an egg.", //18
    
    "DAY 19:\nEstrogen drops.", //19
    
    "DAY 20:\nTestosterone and progesterone surge.", //20
    
    "DAY 21:\nLikely to break outs and oily skin. ", //21
    
    "DAY 22:\nIf conception didn’t happen, both progesterone\n and estrogen levels start lowering.", //22
    
    "DAY 23:\n High Progesterone levels occur.",//23
    
    "DAY 24:\nMany experience different symptoms before a period begins.\nTender breasts, digestion issues, bloating etc.", //24
    
    "DAY 25:\nSymptoms before and during period may be similar.", //25
    
    "DAY 26:\nPotential bloating and lowered energy.", //26
    
    "DAY 27:\n Despite higher progesterone and energy\n", //27
    
    "DAY 28:\nCycle begins again soon, good to stay hydrated.", //28
    
    "DAY 1:\nA Period starts. Low Estrogen = Fatigue\nThe average cycle lasts 28 days.", //1
    
    "DAY 2:\n Potential for Cramps. Good time to exercise gently.", //2
    
    "DAY 3:\n Typically periods can last 2-7 days.\n The length varies per body.",//3
    
    "DAY 4:\n Commonly, most periods last 3-5 days.", //4
    
    "DAY 5:\n When a periods ends,\n estrogen increases = energy rises.  ", //5
    
    "DAY 6:\nPeriod symptoms are replaced with more positive improvements.", //6
    
    "DAY 7:\n Testtosterone Rises.",//7
  ];
  return texts[index];
}

class Circle {
  constructor(x, y, size, text, number) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.text = text;
    this.number = number;
    this.isHovered = false;
  }

  display() {
    if (this.isHovered) {
      fill(255, 107, 132); // Pink color
    } else {
      fill(147, 169, 249); // Blue color 
    }
    noStroke(); // No stroke for circles
    ellipse(this.x, this.y, this.size);

    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    fill('white');
    text(this.number, this.x, this.y); // Display number in the middle of the circle

    if (this.isHovered) {
      // Display text below the larger circle formed by the smaller circles
      fill('white');
      noStroke();
      textAlign(CENTER, TOP);
      text(this.text, width / 2, height / 2.5 + 1.5 * this.size);
      
    }
  }

  checkHover(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.size / 2) {
      this.isHovered = true;
    } else {
      this.isHovered = false;
      
    }
  }
}

