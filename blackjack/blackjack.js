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
        for(var suite in this.cardSuitesAndNumbers) {
            var i = 1;
            while (i < 15) {
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
                            break;
                        case i === 14:
                            this.cardType = "A";
                    }
                    return this.cardType
                };
                this.newNestedObject.type = this.newNestedObjectType();

                this.newNestedObjectValue = function(){
                    switch(true){
                        case i<11:
                            this.cardValue = i;
                            break;
                        case i>=11 && i<14:
                            this.cardValue = 10;
                            break;
                        case i === 14:
                            this.cardValue = 11;
                    }
                    return this.cardValue
                };
                this.newNestedObject.value = this.newNestedObjectValue();
                this.cardSuitesAndNumbers[suite].push(this.newNestedObject);
                i++
            }
        }
    };
    this.puttingValuesIntoCardSuitesAndNumbers();
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