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
        for(i=0; i<52; i++){
            this.arrayOfCards.push($("<div>"))
        }
    };
    this.cardSuitesAndNumbers = [
        {hearts: []},
        {diamonds: []},
        {spades: []},
        {clubs: []}
    ];

    this.numbersToAssignToCards = function(){
        //This statement needs to be condensed, but need to dynamically change .hearts and .diamonds,etc to do so
        for(var i=0; i<5; i++) {
            while (i < 11) {
                this.cardSuitesAndNumbers[0].hearts.push(i);
                i++
            }
            while (i < 13) {
                this.cardSuitesAndNumbers[0].hearts.push(10);
                i++
            }

            // if (i = 0) {
            //     while (i < 11) {
            //         this.cardSuitesAndNumbers[0].hearts.push(0);
            //         i++
            //     }
            //     while (i < 13) {
            //         this.cardSuitesAndNumbers[(0)].hearts.push(10);
            //         i++
            //     }
            // }
            // else if(i = 1){
            //     while (i < 11) {
            //         this.cardSuitesAndNumbers[1].diamonds.push(1);
            //         i++
            //     }
            //     while (i < 13) {
            //         this.cardSuitesAndNumbers[1].diamonds.push(10);
            //         i++
            //     }
            // }
            // else if(i = 2){
            //     while (i < 11) {
            //         this.cardSuitesAndNumbers[2].spades.push(2);
            //         i++
            //     }
            //     while (i < 13) {
            //         this.cardSuitesAndNumbers[2].spades.push(10);
            //         i++
            //     }
            // }
            // else if(i = 3){
            //     while (i < 11) {
            //         this.cardSuitesAndNumbers[3].clubs.push(3);
            //         i++
            //     }
            //     while (i < 13) {
            //         this.cardSuitesAndNumbers[3].clubs.push(10);
            //         i++
            //     }
            // }
            // i++
        }

    };
    this.randomizeArrayOfNumbersToAssignToCards = function(){

    };
    theNumber = this.numbersToAssignToCards();
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