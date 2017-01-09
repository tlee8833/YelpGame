var mongoose = require("mongoose");
var Game = require("./models/game");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Hearthstone", 
        image: "http://blogs-images.forbes.com/insertcoin/files/2014/12/hearthstone1.jpg",
        description: "Hearthstone is a free-to-play online collectible card video game developed and published by Blizzard Entertainment. It is the known for its casual play style and RNG."
    },
    {
        name: "Shadowverse", 
        image: "http://img.youtube.com/vi/hIiMFeNx3_I/maxresdefault.jpg",
        description: "Shadowverse is a free-to-play collectible card video game developed and published by Cygames. It is similar to Hearthstone with an anime style. The developers try to minimize the impact of randomness and create \"Evolve mechanism\" to make this game more strategic."
    },
    {
        name: "Faeria", 
        image: "https://www.faeria.com/bundles/app/images/socials/aurora_logo_1200x630.jpg",
        description: "Board card game"
    },
    {
        name: "Duelyst", 
        image: "https://i.ytimg.com/vi/rHUdNbKvu5c/maxresdefault.jpg",
        description: "Duelyst is a free-to-play collectible card game on a 2D battlefield."
    },
    {
        name: "Eternal", 
        image: "http://cdn.akamai.steamstatic.com/steam/apps/531640/header.jpg?t=1481652157",
        description: "Eternal combines the infinite possibilities of a deep strategy card game with the pace and polish of a modern video game."
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
