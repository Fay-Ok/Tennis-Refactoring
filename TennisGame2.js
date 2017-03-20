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


    if (this.playerOneScore === this.playerTwoScore) {

        if (this.playerOneScore < 3) {
            score = this.scoreLookup[this.playerOneScore];
            score += All;
        }
    }

    if (this.playerOneScore >= 3 && this.playerTwoScore >= 3) {

        if (this.playerOneScore > this.playerTwoScore) {
            score = this.AdvantagePlayerOne;

        }
        if (this.playerTwoScore > this.playerOneScore) {
            score = this.AdvantagePlayerTwo;
        }
        if (this.playerOneScore === this.playerTwoScore) {
            score = "Deuce";
        }
    }

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

    if (this.playerTwoScore < 4 && this.playerOneScore < 4) {

        if (this.playerOneScore !== this.playerTwoScore) {
            this.printTwoPlayersScore();
        }
    }

    if (this.playerOneScore >= 4 && this.playerTwoScore >= 0) {

        if (this.scoreDifference(this.playerOneScore,this.playerTwoScore) >= 2) {
            score = this.winForPlayerOne;
        }
    }

    if (this.playerTwoScore >= 4 && this.playerOneScore >= 0) {

        if (this.scoreDifference(this.playerTwoScore,this.playerOneScore) >= 2) {
            score = this.winForPlayerTwo;
        }
    }

    return score;
}
;


TennisGame2.prototype.wonPoint = function (player) {

    var playerOne = "player1";
    player === playerOne ? this.playerOneScore++ : this.playerTwoScore++;

};

TennisGame2.prototype.scoreDifference = function (firstPlayer, secondPlayer) {
    return firstPlayer - secondPlayer;
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}
