var mongoose = require("mongoose");
var Game = require("./models/game");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Hearthstone", 
        image: "http://blogs-images.forbes.com/insertcoin/files/2014/12/hearthstone1.jpg",
        description: "Hearthstone is an online card game developed by Blizzard Entertainment. It is the known for its casual play style."
    },
    {
        name: "Shadowverse", 
        image: "http://img.youtube.com/vi/hIiMFeNx3_I/maxresdefault.jpg",
        description: "Shadowverse is an online card game developed by Cygames. The developers try to minimize the impact of randomness and create \"Evolve mechanism\" to make this game more strategic."
    },
    {
        name: "Faeria", 
        image: "https://www.faeria.com/bundles/app/images/socials/aurora_logo_1200x630.jpg",
        description: "Faeria is an online card game developed by Abrakam. It has a hex-based playfield, so positioning and movement matters a lot. Your mana can be saved for upcoming turns. Aggro/midrange/control are all viable."
    },
    {
        name: "Duelyst", 
        image: "https://i.ytimg.com/vi/rHUdNbKvu5c/maxresdefault.jpg",
        description: "Duelyst is an online card game developed by Counterplay Games. It has a 5*9 battlefield, so positioning and movement matters a lot. It's a strongly tempo-based game, so each game is relatively short."
    },
    {
        name: "Eternal", 
        image: "http://cdn.akamai.steamstatic.com/steam/apps/531640/header.jpg?t=1481652157",
        description: "Eternal is an online card game developed by Dire Wolf Digital. In this game, your opponent chooses his/her way to block your attacking unit, and you can react with fast spells in your opponent's turn, which makes this game very strategic."
    }
]

function seedDB(){
   //Remove all games
   Game.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed games!");
         //add a few games
        data.forEach(function(seed){
            Game.create(seed, function(err, game){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a game");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                game.comments.push(comment);
                                game.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;
