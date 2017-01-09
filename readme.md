#YelpGame

RESTFUL ROUTES

name      url       verb    desc.
===============================================
INDEX   /games      GET     Display a list of all games
NEW     /games/new  GET     Display form to add a new game
CREATE  /games      POST    Add a new game to DB
SHOW    /games/:id  GET     Show info about one game

NEW     /games/:id/comments/new    GET    Display form to add a new comment 
CREATE  /games/:id/comments        POST   Add a new comment to DB