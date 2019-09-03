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
var attackerFN
var defendcharacter;
var defenderHP;
var defenderAP;
var defenderCAP;
var defenderFN;

function reset() {

    var myChar = "";
    var myDef = "";

    characters.Joke.healthPoints = 180;
    characters.Ryu.healthPoints = 150;
    characters.At.healthPoints = 100;
    characters.Morg.healthPoints = 120;

    characters.Joke.attack = 10;
    characters.Ryu.attack = 12;
    characters.At.attack = 10;
    characters.Morg.attack = 8;

    $(".jokerhp").html(characters.Joke.healthPoints);
    $(".ryujihp").html(characters.Ryu.healthPoints);
    $(".annhp").html(characters.At.healthPoints);
    $(".morganahp").html(characters.Morg.healthPoints);

    $(".jokername").html(characters.Joke.fullname);
    $(".ryujiname").html(characters.Ryu.fullname);
    $(".annname").html(characters.At.fullname);
    $(".morgananame").html(characters.Morg.fullname);

};

var characters = {

    Joke: {
        name: 'Joke',
        fullname: 'Joker',
        healthpoints: 180,
        attack: 10,
        counter: 10,
    },

    Morg: {
        name: 'Morg',
        fullname: 'Morgana',
        healthpoints: 120,
        attack: 10,
        counter: 10,
    },

    Ryu: {
        name: 'Ryu',
        fullname: 'Ryuji',
        healthpoints: 150,
        attack: 10,
        counter: 10,
    },

    At: {
        name: 'At',
        fullname: 'Ann',
        healthpoints: 100,
        attack: 10,
        counter: 10,
    }

};

$(document).ready(function () {
            reset();

            $(".icons").click(function () {

                if (myChar == "") {
                    $(this).appendTo("#yourChar");
                    myChar = $(this);
                    YourCharacter = $(myChar).attr("value");
                }

                if (YourCharacter == characters.Joke.name) {
                    attackerHP = characters.Joke.healthPoints;
                    attackerAP = characters.Joke.attack;
                    attackerCAP = characters.Joke.counter;
                    attackerFN = characters.Joke.fullname;
                    attack = characters.Joke;
                } else if (YourCharacter == characters.Ryu.name) {
                    attackerHP = characters.Ryu.healthPoints;
                    attackerAP = characters.Ryu.attack;
                    attackerCAP = characters.Ryu.counter;
                    attackerFN = characters.Ryu.fullname;
                    attack = characters.Ryu;
                } else if (YourCharacter == characters.At.name) {
                    attackerHP = characters.At.healthPoints;
                    attackerAP = characters.At.attack;
                    attackerCAP = characters.At.counter;
                    attackerFN = characters.At.fullname;
                    attack = characters.At;
                } else if (YourCharacter == characters.Morg.name) {
                    attackerHP = characters.Morg.healthPoints;
                    attackerAP = characters.Morg.attack;
                    attackerCAP = characters.Morg.counter;
                    attackerFN = characters.Morg.fullname;
                    attack = characters.Morg;
                }

                for (var i = 0; i < 4; i++) {
                    $("._" + [i]).not(myChar).appendTo("#enemy" + [i]);
                }

                $("#characters-selection").hide();

            });

            $(".move").click(function () {

                if (myDef === "") {
                    // clones the chosen character to "Defender"
                    // moves that character to the "Defender" section on the page.
                    $(this).appendTo("#defender");
                    myDef = $(this);
                    YourDefender = $(myDef).children().attr("value");
                    

                    if (YourDefender == characters.Joke.name) {
                        defenderHP = characters.Joke.healthPoints;
                        defenderAP = characters.Joke.attack;
                        defenderCAP = characters.Joke.counter;
                        defenderFN = characters.Joke.fullname;
                        defend = characters.Joke;
                    } else if (YourDefender == characters.Ryu.name) {
                        defenderHP = characters.Ryu.healthPoints;
                        defenderAP = characters.Ryu.attack;
                        defenderCAP = characters.Ryu.counter;
                        defenderFN = characters.Ryu.fullname;
                        defend = characters.Ryu;
                    } else if (YourDefender == characters.At.name) {
                        defenderHP = characters.At.healthPoints;
                        defenderAP = characters.At.attack;
                        defenderCAP = characters.At.counter;
                        defenderFN = characters.At.fullname;
                        defend = characters.At;
                    } else if (YourDefender == characters.Morg.name) {
                        defenderHP = characters.Morg.healthPoints;
                        defenderAP = characters.Morg.attack;
                        defenderCAP = characters.Morg.counter;
                        defenderFN = characters.Morg.fullname;
                        defend = characters.Morg;
                    }
                }
            });

            $(".attackbtn").click(function () {

                    if (!(attackerHP < 1) || !(defenderHP < 1)) {

                        attackerHP = (attackerHP - defenderCAP);

                        $("." + YourCharacter).html(attackerHP);

                        $(".youAttacked").html("You attacked " + defenderFN + " for " + attackerAP + " damage.");

                        defenderHP = (defenderHP - attackerAP);

                        $(".attackedBack").html(defenderFN + " attacked you back for " + defenderCAP + " damage.");
                        
                        $("." + YourDefender).html(defenderHP);
                        console.log(attackerHP);
                        console.log(defenderHP);
                    };
                    });

            });