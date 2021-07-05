class Form {
    constructor() {
        this.text = createElement('h2');
        this.text1 = createElement('h2');
        this.text2 = createElement('h2');
        this.text3 = createElement('h2');
        this.text4 = createElement('h2');
        this.text5 = createElement('h2');
        this.text6 = createElement('h2');

        this.title = createElement('h1');
        this.button = createButton('Play');



    }
    hide() {
        this.text.hide();
        this.text1.hide();
        this.text2.hide();
        this.text3.hide();
        this.text4.hide();
        this.text5.hide();
        this.text6.hide();
        this.title.hide();
        this.button.hide();
    }

    display() {
        this.title.html("Space Shooter");
        this.title.position(300, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');

        this.text.html("year 2500..... ");
        this.text1.html("Some asteroids are coming towords Earth");
        this.text2.html("You are a space fighter.");
        this.text3.html("Help the people and Earth !");
        this.text4.html("press 'space' to shoot.");
        this.text5.html("use right and left arrows to move.");
        this.text6.html("press 'Play' button to start game");


        this.text.position(250, 200);
        this.text1.position(250, 250);

        this.text2.position(250, 300);
        this.text3.position(250, 350);
        this.text4.position(250, 400);
        this.text5.position(250, 450);
        this.text6.position(250, 500);

        this.text.style('font-size', '40px')
        this.text.style('color', 'yellow')

        this.text1.style('font-size', '40px')
        this.text1.style('color', 'yellow')

        this.text2.style('font-size', '40px')
        this.text2.style('color', 'yellow')

        this.text3.style('font-size', '40px')
        this.text3.style('color', 'yellow')

        this.text4.style('font-size', '40px')
        this.text4.style('color', 'yellow')

        this.text5.style('font-size', '40px')
        this.text5.style('color', 'yellow')

        this.text6.style('font-size', '40px')
        this.text6.style('color', 'yellow')

        this.button.position(560, 650);
        this.button.style('width', '250px');
        this.button.style('height', '60px');
        this.button.style('font-size', '40px');

        this.button.style('background', 'lightpink');


        this.button.mousePressed(() => {
            // this.input.hide();
            // this.button.hide();
            this.hide();

            gameState = play;
        });


    }

}
