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

        if (YourCharacter == characters.Joker) {

        } else if (YourCharacter == characters.Ryuji) {

        } else if (YourCharacter == characters.Ann) {

        } else if (YourCharacter == characters.Morgana) {

        }
        for (var i = 0; i < 4; i++) {
            $("._" + [i]).not(myChar).appendTo("#enemy" + [i]);
        }

        $("#characters-selection").hide();

    });

    $(".move").click(function () {

        // if (myDef === "") {
        // clones the chosen character to "Defender"
        // moves that character to the "Defender" section on the page.
        $(this).appendTo("#defender");
        myDef = $(this);
        YourDefender = $(myDef).children().attr("value");
        console.log(YourDefender);

        $(".youDefeated").empty();

        if (YourDefender == characters.Joker) {
            YourDefender.healthPoints = characters.Joker.healthPoints;

        } else if (YourDefender == characters.Ryuji) {

        } else if (YourDefender == characters.Ann) {

        } else if (YourDefender == characters.Morgana) {

        }

        console.log(YourDefender.healthPoints);

    });

    $(".attackbtn").click(function () {

        if ($("#defender").children().length == 0) {
            $(".noEnemy").html("No enemy here.");
        }

        if ((YourCharacter.healthPoints > 1) || (YourDefender.healthPoints > 1)) {

            YourCharacter.healthPoints = (YourCharacter.healthPoints - YourDefender.counter);

            $("." + YourCharacter + "hp").html(YourCharacter.healthPoints);

            $(".youAttacked").html("You attacked " + YourDefender.name + " for " + YourCharacter.attackPW + " damage.");

            YourDefender.healthPoints = (YourDefender.healthPoints - YourCharacter.attackPW);

            $(".attackedBack").html(YourDefender.name + " attacked you back for " + YourDefender.counter + " damage.");

            $("." + YourDefender + "hp").html(YourDefender.healthPoints);

            YourCharacter.attackPW = (YourCharacter.attackPW + YourCharacter.attackPW);

        };

        if (YourDefender.healthPoints <= 0) {

            $(".youAttacked").empty();
            $(".attackedBack").empty();
            $(".youDefeated").html("You have defeated " + YourDefender.name + ", choose your next opponent!");
            $("#defender").empty();

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
        if (YourCharacter.healthPoints <= 0) {

            $(".restartbtn").show();

            $(".attackbtn").hide();

            $(".youAttacked").empty();
            $(".attackedBack").empty();
            $(".youDefeated").empty();
            $(".youLose").html("GAME OVER!")

            $(".restartbtn").click(function () {
                reset();
            });

        }

    });

});