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

    var playersScoreDic = {
        0: love,
        1: Fifteen,
        2: Thirty,
        3: Forty
    };

    if (this.playerOneScore === this.playerTwoScore && this.playerOneScore < 3) {

        score = playersScoreDic[this.playerOneScore];
        score += All;
    }
    if (this.playerOneScore === this.playerTwoScore && this.playerOneScore > 2)
        score = "Deuce";


    if (this.playerOneScore > 0 && this.playerTwoScore === 0) {

        this.P1res = playersScoreDic[this.playerOneScore];
        this.P2res = love;
        score = this.P1res + "-" + this.P2res;
    }
    if (this.playerTwoScore > 0 && this.playerOneScore === 0) {

        this.P2res = playersScoreDic[this.playerTwoScore];
        this.P1res = love;
        score = this.P1res + "-" + this.P2res;
    }

    if (this.playerOneScore > this.playerTwoScore && this.playerOneScore < 4) {

        this.P1res = playersScoreDic[this.playerOneScore];
        this.P2res = playersScoreDic[this.playerTwoScore];
        score = this.P1res + "-" + this.P2res;
    }
    if (this.playerTwoScore > this.playerOneScore && this.playerTwoScore < 4) {

        this.P1res = playersScoreDic[this.playerOneScore];
        this.P2res = playersScoreDic[this.playerTwoScore];
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

var playerOne = "player1";

TennisGame2.prototype.wonPoint = function (player) {


    player === playerOne ? this.playerOneScore++ : this.playerTwoScore++;

};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}
