var TennisGame2 = function () {
    this.playerOneScore = 0;
    this.playerTwoScore = 0;

    this.P1res = "";
    this.P2res = "";
    this.AdvantagePlayerOne = "Advantage player1";
    this.AdvantagePlayerTwo = "Advantage player2";
    this.winForPlayerOne = "Win for player1";
    this.winForPlayerTwo = "Win for player2";

    this.scoreLookup = {
        0: "Love",
        1: "Fifteen",
        2: "Thirty",
        3: "Forty"
    };

};

TennisGame2.prototype.getScore = function () {
    var score = "";
    var All = "-All";

    TennisGame2.prototype.printTwoPlayersScore = function () {

        this.P1res = this.scoreLookup[this.playerOneScore];
        this.P2res = this.scoreLookup[this.playerTwoScore];
        score = this.P1res + "-" + this.P2res;
    };


    if (this.playerOneScore === this.playerTwoScore && this.playerOneScore < 3) {

        score = this.scoreLookup[this.playerOneScore];
        score += All;
    }

    if (this.playerOneScore === this.playerTwoScore && this.playerOneScore > 2)
        score = "Deuce";


    if (this.playerOneScore > 0 && this.playerTwoScore === 0) {

        this.P1res = this.scoreLookup[this.playerOneScore];
        this.P2res = "love";
        score = this.P1res + "-" + this.P2res;
    }

    if (this.playerTwoScore > 0 && this.playerOneScore === 0) {

        this.P2res = this.scoreLookup[this.playerTwoScore];
        this.P1res = "love";
        score = this.P1res + "-" + this.P2res;
    }

    if (this.playerOneScore > this.playerTwoScore && this.playerOneScore < 4) {

        this.printTwoPlayersScore();
    }


    if (this.playerTwoScore > this.playerOneScore && this.playerTwoScore < 4) {

        this.printTwoPlayersScore();
    }

    if (this.playerOneScore > this.playerTwoScore && this.playerTwoScore >= 3) {

        score = this.AdvantagePlayerOne;
    }

    if (this.playerTwoScore > this.playerOneScore && this.playerOneScore >= 3) {
        score = this.AdvantagePlayerTwo;
    }

    if (this.playerOneScore >= 4 && this.playerTwoScore >= 0 && (this.playerOneScore - this.playerTwoScore) >= 2) {

        score = this.winForPlayerOne;
    }
    if (this.playerTwoScore >= 4 && this.playerOneScore >= 0 && (this.playerTwoScore - this.playerOneScore) >= 2) {

        score = this.winForPlayerTwo;
    }
    return score;
};


TennisGame2.prototype.wonPoint = function (player) {
    var playerOne = "player1";

    player === playerOne ? this.playerOneScore++ : this.playerTwoScore++;

};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}
