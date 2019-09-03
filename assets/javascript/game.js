$(document).ready(function () {

    //Creating an object array of characters and their values (name,hitpoints,attack,counter)

    var myChar = "";
    var myDef = "";
    var YourCharacter;
    var YourDefender;
    var attack;
    var defend;
    var attackcharacter;
    var attackerHP;
    var attackerAP;
    var attackerCAP;
    var defendcharacter;
    var defenderHP;
    var defenderAP;
    var defenderCAP;



    var characters = {

        Joker: {
            name: 'Joker',
            hitpoints: 100,
            attack: 10,
            counter: 10,
            image: '../images/joker1.png'
        },

        Morgana: {
            name: "Morgana",
            hitpoints: 100,
            attack: 10,
            counter: 10,
        },

        Ryuji: {
            name: "Ryuji",
            hitpoints: 100,
            attack: 10,
            counter: 10,
        },

        Ann: {
            name: "Ann",
            hitpoints: 100,
            attack: 10,
            counter: 10,
        }

    };

    $(".icons").click(function () {

        if (myChar == "") {
            $(this).appendTo("#yourChar");
            myChar = $(this);
            YourCharacter = $(myChar).attr("value");
        }

        if (YourCharacter == characters.Joker.name) {
            attackerHP = characters.Joker.hitPoints;
            attackerAP = characters.Joker.attack;
            attackerCAP = characters.Joker.counter;
            attack = characters.Joker;
        } else if (YourCharacter == characters.Ryuji.name) {
            attackerHP = characters.Ryuji.hitPoints;
            attackerAP = characters.Ryuji.attack;
            attackerCAP = characters.Ryuji.counter;
            attack = characters.Ryuji;
        } else if (YourCharacter == characters.Ann.name) {
            attackerHP = characters.Ann.hitPoints;
            attackerAP = characters.Ann.attack;
            attackerCAP = characters.Ann.counter;
            attack = characters.Ann;
        } else if (YourCharacter == characters.Morgana.name) {
            attackerHP = characters.Morgana.hitPoints;
            attackerAP = characters.Morgana.attack;
            attackerCAP = characters.Morgana.counter;
            attack = characters.Morgana;
        }

        for (var i = 0; i < 4; i++) {
            $("._" + [i]).not(myChar).appendTo("#enemy" + [i]);
        }



    });

    $(".move").click(function () {

        // if (myDef === "") {
        // clones the chosen character to "Defender"
        // moves that character to the "Defender" section on the page.
        $(this).appendTo("#defender");
        myDef = $(this);
        YourDefender = $(myDef).children().attr("value");
        $(".youDefeated").empty();
    });

});