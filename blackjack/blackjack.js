//****************************************Model****************************************//


/***************************************************************************************************
 * Deck - makes a deck of cards in random order
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */
function Deck (){
    this.arrayOfCards = [];
    this.creatingCardObjects = function(){
        for(var i=0; i<52; i++){
            this.arrayOfCards.push($("<div>"))
        }
    };
    this.creatingCardObjects(); //Just for testing

    this.cardSuitesAndNumbers = {
    hearts: [],
    diamonds: [],
    spades: [],
    clubs: []
    };

    this.puttingValuesIntoCardSuitesAndNumbers = function(){
        for(var value in this.cardSuitesAndNumbers) {
            var i = 1;
            while (i < 11) {
                this.cardSuitesAndNumbers[value].push(i);
                i++
            }
            while (i < 13) {
                this.cardSuitesAndNumbers[value].push(10);
                i++
            }
        }
    };

        this.randomSuiteArray = [];
        this.addSuitesToRandomSuiteArray = function(){
            for(suite in this.cardSuitesAndNumbers){
                this.randomSuiteArray.push(suite);
            }
        };
        this.addSuitesToRandomSuiteArray(); //Just for testing

    this.randomCardValue = function(){
        return this.randomCardValueNumber = Math.floor(Math.random()*9)+1;
    };
    thetest4 = this.randomCardValue();//Just for testing

    this.assignSuitesAndValuesToCards = function(){
        for(var i=0; i<this.arrayOfCards.length; i++){
            this.card = this.arrayOfCards[i];
            this.card.addClass(function(){
                this.randomSuiteArray[i]
            });/
            this.card.val(function(){

            })
            // this.test = this.cardSuitesAndNumbers[this.randomSuiteArray[i]]
        }
    };

    theNumber = this.puttingValuesIntoCardSuitesAndNumbers(); //Just for testing
    debugger;
    thetest2 = this.assignSuitesAndValuesToCards();//Just for testing
    debugger;
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

function initializeGame(){
    // this.newDeck = new Deck();

}

var newDeck = new Deck();



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