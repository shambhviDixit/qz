class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h2');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');
  }

  hide(){

    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(550, 0);

    this.question.html("Question:- What Type Of Music Do Rabbits Listen To? " );
    this.question.position(150, 80);
    this.option1.html("1:Classical" );
    this.option1.position(150, 120);
    this.option2.html("2:Hip Hop" );
    this.option2.position(150, 160);
    this.option3.html("3:Jazz " );
    this.option3.position(150, 200);
    this.option4.html("4:Rock" );
    this.option4.position(150, 240);


    this.input1.position(300, 320);
    this.input2.position(550, 320);
    this.button.position(495, 390);


    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount +=1;
      contestant.index = contestantCount;
      //contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}