var TennisGame2 = function () {
    this.playerOneScore = 0;
    this.playerTwoScore = 0;

    this.P1res = "";
    this.P2res = "";

};

TennisGame2.prototype.getScore = function () {
    var score = "";
    var love = "Love";
    var Fifteen = "Fifteen";
    var Thirty = "Thirty";
    var All = "-All";
    var Forty = "Forty";
    var AdvantagePlayerOne = "Advantage player1";
    var AdvantagePlayerTwo = "Advantage player2";
    var winForPlayerOne = "Win for player1";
    var winForPlayerTwo = "Win for player2";

    if (this.playerOneScore === this.playerTwoScore && this.playerOneScore < 3) {

        if (this.playerOneScore === 0)
            score = love;
        if (this.playerOneScore === 1)
            score = Fifteen;
        if (this.playerOneScore === 2)
            score = Thirty;
        score += All;
    }
    if (this.playerOneScore === this.playerTwoScore && this.playerOneScore > 2)
        score = "Deuce";


    if (this.playerOneScore > 0 && this.playerTwoScore === 0) {
        if (this.playerOneScore === 1)
            this.P1res = Fifteen;
        if (this.playerOneScore === 2)
            this.P1res = Thirty;
        if (this.playerOneScore === 3)
            this.P1res = Forty;

        this.P2res = love;
        score = this.P1res + "-" + this.P2res;
    }
    if (this.playerTwoScore > 0 && this.playerOneScore === 0) {
        if (this.playerTwoScore === 1)
            this.P2res = Fifteen;
        if (this.playerTwoScore === 2)
            this.P2res = Thirty;
        if (this.playerTwoScore === 3)
            this.P2res = Forty;

        this.P1res = love;
        score = this.P1res + "-" + this.P2res;
    }

    if (this.playerOneScore > this.playerTwoScore && this.playerOneScore < 4) {
        if (this.playerOneScore === 2)
            this.P1res = Thirty;
        if (this.playerOneScore === 3)
            this.P1res = Forty;
        if (this.playerTwoScore === 1)
            this.P2res = Fifteen;
        if (this.playerTwoScore === 2)
            this.P2res = Thirty;
        score = this.P1res + "-" + this.P2res;
    }
    if (this.playerTwoScore > this.playerOneScore && this.playerTwoScore < 4) {
        if (this.playerTwoScore === 2)
            this.P2res = Thirty;
        if (this.playerTwoScore === 3)
            this.P2res = Forty;
        if (this.playerOneScore === 1)
            this.P1res = Fifteen;
        if (this.playerOneScore === 2)
            this.P1res = Thirty;
        score = this.P1res + "-" + this.P2res;
    }

    if (this.playerOneScore > this.playerTwoScore && this.playerTwoScore >= 3) {

        score = AdvantagePlayerOne;
    }

    if (this.playerTwoScore > this.playerOneScore && this.playerOneScore >= 3) {
        score = AdvantagePlayerTwo;
    }

    if (this.playerOneScore >= 4 && this.playerTwoScore >= 0 && (this.playerOneScore - this.playerTwoScore) >= 2) {

        score = winForPlayerOne;
    }
    if (this.playerTwoScore >= 4 && this.playerOneScore >= 0 && (this.playerTwoScore - this.playerOneScore) >= 2) {

        score = winForPlayerTwo;
    }
    return score;
};

TennisGame2.prototype.wonPoint = function (player) {

    player === "player1" ? this.playerOneScore++ : this.playerTwoScore++;

};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}
