//****************************************Model****************************************//


/***************************************************************************************************
 * Suite - makes a suite of cards
 * @param  suite
 * @returns {undefined} none
 * @calls {undefined} none
 */
function Suite (suite) {
    this.arrayOfCards = [];

    this.creatingCardObjects = function () {
        for (var i = 0; i < 13; i++) {
            this.arrayOfCards.push($("<div>"))
        }
    };

    this.creatingCardObjects(); //Just for testing

    this.cardNumbers = [];

    this.puttingValuesIntoCardNumbers = function () {
        for(var i=1; i<14; i++) {
            this.newNestedObject = {};
            this.newNestedObjectType = function () {
                switch (true) {
                    case i === 1:
                        this.cardType = "A";
                        break;
                    case i > 1 && i < 11:
                        this.cardType = "number";
                        break;
                    case i === 11:
                        this.cardType = "J";
                        break;
                    case i === 12:
                        this.cardType = "Q";
                        break;
                    case i === 13:
                        this.cardType = "K";
                }
                return this.cardType
            };

            this.newNestedObject.type = this.newNestedObjectType();

            this.newNestedObjectValue = function () {
                switch (true) {
                    case i === 1:
                        this.cardValue = [1, 11];
                    case i < 11:
                        this.cardValue = i;
                        break;
                    case i >= 11 && i < 14:
                        this.cardValue = 10;
                }
                return this.cardValue
            };
            this.newNestedObject.value = this.newNestedObjectValue();
            this.cardNumbers.push(this.newNestedObject);
        }
    };

    this.puttingValuesIntoCardNumbers();

    this.givingCardsNumbers = function() {
        for(var i=0; i<this.arrayOfCards.length; i++) {
            this.arrayOfCards[i].attr({
                type: this.cardNumbers[i].type,
                value: this.cardNumbers[i].value,
                class: suite
            })
        }

    };

    this.givingCardsNumbers()
}

/***************************************************************************************************
 * Deck - makes a deck of cards from several suites
 * @param  suite
 * @returns {undefined} none
 * @calls {undefined} none
 */


function Deck(){
    this.allOfTheSuites = [
        this.suiteHearts = new Suite("hearts"),
        this. suiteDiamonds = new Suite("diamonds"),
        this. suiteClubs = new Suite("clubs"),
        this. suiteSpades = new Suite("spades")
    ];

    this.deckArray = [];

    this.separateCards = function(){
        for(var i=0; i<4; i++){
            for(var j=0; j<13; j++){
                this.deckArray.push(this.allOfTheSuites[i].arrayOfCards[j]);
            }
        }
    };
    this.separateCards();

    this.randomizeCards = function() {

        this.deckRandomized = function randomizeArr(arr) {
            var array = [];
            while (arr.length > 0) {
                var randomNumber = Math.floor(Math.random() * arr.length);
                array.push(arr[randomNumber]);
                arr.splice(randomNumber, 1)
            }
            return array
        };
       return this.deckRandomized(this.deckArray)
    };
    this.deckArrayRandomized = this.randomizeCards()
}



/***************************************************************************************************
 * dealCards - Picks what cards are dealt to the player
 * @param  deck of cards
 * @returns {undefined} none
 * @calls {undefined} none
 */


/***************************************************************************************************
 * CardCompare - Compares the cards dealt to see if the player wins, loses, or gets blackjack
 * @param  cards dealt
 * @returns {undefined} none
 * @calls {undefined} none
 */




//**************************************Controller************************************//


/***************************************************************************************************
 * intializeGame - Starts the game
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

$(document).ready(initializeGame());

function initializeGame(){
    this.newDeck = new Deck();

}

// var newSuite = new Suite();



/***************************************************************************************************
 * whatDealt - Tells the view what cards have been dealt
 * @param  model's cards dealt
 * @returns {undefined} none
 * @calls {undefined} none
 */


/***************************************************************************************************
 * toDealCards - Tells the model to deal cards
 * @param  user button input to deal cards
 * @returns {undefined} none
 * @calls {undefined} none
 */


/***************************************************************************************************
 * reset - Tells the model when to make a new deck of cards when the game is reset
 * @param  user button input to make a new deck of cards
 * @returns {undefined} none
 * @calls {undefined} none
 */


//*****************************************View**************************************//


/***************************************************************************************************
 * showCards - Show the cards made
 * @param  message from controller to display the cards dealt
 * @returns {undefined} none
 * @calls {undefined} none
 */


/***************************************************************************************************
 * button - Button to reset game
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */


/***************************************************************************************************
 * dealCards - Tells model to deal cards
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */