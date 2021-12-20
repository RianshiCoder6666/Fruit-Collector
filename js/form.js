class Form{
    constructor() {
       this.input = createInput("").attribute("placeholder", "Name");
       this.button = createButton('Play');
       this.greeting = createElement('h4');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }

    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }

    display() {

        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');

        this.input.position(540, 400);
        this.input.class("input");

        this.button.position(570, 480);
        this.button.class("button");

        this.reset.position(900, 660);
        this.reset.class("button");

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name + "! <br> Wait for another Player to join...");
            this.greeting.position(400, 300);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '50px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            Player.updatePlayerAtEnd(0);
            game.update(0);

            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();

            
        });

    }
}