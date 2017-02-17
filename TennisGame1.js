var TennisGame1 = function (player1Name, player2Name) {
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function (playerName) {
    var playerOne = "player1";
    if (playerName === playerOne)
        this.playerOneScore += 1;
    else
        this.playerTwoScore += 1;
};

TennisGame1.prototype.getScore = function () {
    var score = "";
    var tempScore = 0;

    var loveAll = "Love-All";
    var fifteenAll = "Fifteen-All";
    var thirtyAll = "Thirty-All";
    var duece = "Deuce";

    var advantagePlayerOne = "Advantage player1";
    var advantagePlayerTwo = "Advantage player2";
    var winForPlayerOne = "Win for player1";
    var winForPlayerTwo = "Win for player2";

    var love = "Love";
    var fifteen = "Fifteen";
    var thirty = "Thirty";
    var forty = "Forty";

    var tieScoreDictionary = {
        0: loveAll,
        1: fifteenAll,
        2: thirtyAll
    };

    var scoreDictionary = {
        0: love,
        1: fifteen,
        2: thirty,
        3: forty
    };

    var scoreDifference = {
        "1": advantagePlayerOne,
        "-1": advantagePlayerTwo

    };

    function tieGame(tiescore) {
        if (tieScoreDictionary[tiescore]) {
            score = tieScoreDictionary[tiescore];
        }
        else {
            score = duece;
        }
    }

    function winnerPlayer(playerOneScore, playerTwoScore) {
        var minusResult = playerOneScore - playerTwoScore;

        if (scoreDifference[minusResult]) {
            score = scoreDifference[minusResult];
        } else if (minusResult >= 2) {
            score = winForPlayerOne;
        }
        else {
            score = winForPlayerTwo;
        }
    }

    function scorePrinter(playerOneScore, playerTwoScore) {

        for (var i = 1; i < 3; i++) {
            console.log(i);
            if (i === 1) {
                tempScore = playerOneScore;
            }
            else {
                score += "-";
                tempScore = playerTwoScore;
            }
            score += scoreDictionary[tempScore];
            console.log(score);
        }
    }


    if (this.playerOneScore === this.playerTwoScore) {
        tieGame.call(this, this.playerOneScore);

    } else if (this.playerOneScore >= 4 || this.playerTwoScore >= 4) {
        winnerPlayer.call(this, this.playerOneScore, this.playerTwoScore);

    } else {
        scorePrinter.call(this, this.playerOneScore, this.playerTwoScore);
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
