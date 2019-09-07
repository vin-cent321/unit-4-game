//Creating an object array of characters and their values (name,hitpoints,attack,counter)
$(document).ready(function () {

    var myChar = "";
    var myDef = "";
    var YourCharacter;
    var YourDefender;

    function reset() {

        $(".restartbtn").hide();
        $(".attackbtn").show();

        characters.Joker.healthPoints = 180;
        characters.Ryuji.healthPoints = 150;
        characters.Ann.healthPoints = 100;
        characters.Morgana.healthPoints = 120;

        characters.Joker.attackPW = 10;
        characters.Ryuji.attackPW = 15;
        characters.Ann.attackPW = 8;
        characters.Morgana.attackPW = 10;

        $(".Jokerhp").html(characters.Joker.healthPoints);
        $(".Ryujihp").html(characters.Ryuji.healthPoints);
        $(".Annhp").html(characters.Ann.healthPoints);
        $(".Morganahp").html(characters.Morgana.healthPoints);

        $(".jokername").html(characters.Joker.name);
        $(".ryujiname").html(characters.Ryuji.name);
        $(".annname").html(characters.Ann.name);
        $(".morgananame").html(characters.Morgana.name);

    };

    var characters = {

        Joker : {
            name: 'Joker',
            healthPoints: 180,
            attackPW: 10,
            counter: 15,
        },

        Morgana : {
            name: 'Morgana',
            healthPoints: 120,
            attackPW: 10,
            counter: 8,
        },

        Ryuji : {
            name: 'Ryuji',
            healthPoints: 150,
            attackPW: 15,
            counter: 8,
        },

        Ann : {
            name: 'Ann',
            healthPoints: 100,
            attackPW: 8,
            counter: 12,
        }

    };

    reset();

    $(".icons").click(function () {

        if (myChar == "") {
            $(this).appendTo("#yourChar");
            myChar = $(this);
            YourCharacter = $(myChar).attr("value");
            console.log(YourCharacter);

        };

        if (YourCharacter == characters.Joker.name) {
            attackerHP = characters.Joker.healthPoints;
            console.log(attackerHP);
            attackerPW = characters.Joker.attackPW;
            console.log(attackerPW);
            attackerCT = characters.Joker.counter;
            console.log(attackerCT);

        } else if (YourCharacter == characters.Ryuji) {
            attackerHP = characters.Ryuji.healthPoints;
            attackerPW = characters.Ryuji.attackPW;
            attackerCT = characters.Ryuji.counter;

        } else if (YourCharacter == characters.Ann) {
            attackerHP = characters.Ann.healthPoints
            attackerPW = characters.Ann.attackPW;
            attackerCT = characters.Ann.counter;

        } else if (YourCharacter == characters.Morgana) {
            attackerHP = characters.Morgana.healthPoints;
            attackerPW = characters.Morgana.attackPW;
            attackerCT = characters.Morgana.counter;
        }

        for (var i = 0; i < 4; i++) {
            $("._" + [i]).not(myChar).appendTo("#enemy" + [i]);
        }

        $("#characters-selection").hide();
        // console.log(YourCharacter.healthPoints);

    });

    $(".move").click(function () {

        //if (myDef === "") {
        $(this).appendTo("#yourDef");
        myDef = $(this);
        YourDefender = $(myDef).children().attr("value");
        console.log(YourDefender);
        

        $(".youDefeated").empty();

        if (YourDefender == characters.Joker.name) {
            defendername = characters.Joker.name
            defenderHP = characters.Joker.healthPoints;
            console.log(defenderHP);
            defenderPW = characters.Joker.attackPW;
            console.log(defenderPW);
            defenderCT = characters.Joker.counter;
            console.log(defenderCT);

        } else if (YourDefender == characters.Ryuji.name) {
            defendername = characters.Ryuji.name
            defenderHP = characters.Ryuji.healthPoints;
            defenderPW = characters.Ryuji.attackPW;
            defenderCT = characters.Ryuji.counter;

        } else if (YourDefender == characters.Ann.name) {
            defendername = characters.Ann.name
            defenderHP = characters.Ann.healthPoints;
            defenderPW = characters.Ann.attackPW;
            defenderCT = characters.Ann.counter;

        } else if (YourDefender == characters.Morgana.name) {
            defendername = characters.Morgana.name
            defenderHP = characters.Morgana.healthPoints;
            defenderPW = characters.Morgana.attackPW;
            defenderCT = characters.Morgana.counter;

        }

    });

    $(".attackbtn").click(function () {

        if ($("#defender").children().length == 0) {
            $(".noEnemy").html("No enemy here.");
        }

        if ((attackerHP > 1) || (defenderHP > 1)) {

            attackerHP = (attackerHP - defenderCT);

            $("." + YourCharacter + "hp").html(attackerHP);

            $(".youAttacked").html("You attacked " + defendername + " for " + attackerPW + " damage.");

            defenderHP = (defenderHP - attackerPW);

            $(".attackedBack").html(defendername + " attacked you back for " + defenderCT + " damage.");

            $("." + YourDefender + "hp").html(defenderHP);

            attackerPW == (attackerPW + YourCharacter.attackPW);

        };

        if (defenderHP <= 0) {

            $(".youAttacked").empty();
            $(".attackedBack").empty();
            $(".youDefeated").html("You have defeated " + defendername + ", choose your next opponent!");
            $("#yourDef").empty();

        }

        if ($(".move").children().length == 0) {

            // clear out all the other text and the player won
            $(".youAttacked").empty();
            $(".attackedBack").empty();
            $(".youDefeated").empty();
            $(".youWon").html("You Won! Congratulations!");

            $(".attackbtn").hide();
            // show the restart button 
            $(".restartbtn").show();

            // restart the game when you press the button
            $(".restartbtn").click(function () {
                reset();
            })

        }

        // character has no health you lose
        if (attackerHP <= 0) {

            $(".restartbtn").show();

            $(".attackbtn").hide();

            $(".youAttacked").empty();
            $(".attackedBack").empty();
            $(".youDefeated").empty();
            $(".youLose").html("GAME OVER!");

            $(".restartbtn").click(function () {
                reset();
            });

        }

    });

});