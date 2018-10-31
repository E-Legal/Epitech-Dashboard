const express = require('express');
const router = express.Router();
var ip = require("ip");
var moment = require('moment');


router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});

router.get('/about.json', function (req, res) {
    var client_ip = ip.address();
    var currenttime = moment().unix();
    res.json({ "client" : {
        "host": client_ip
        }, "server" : {
		"current_time" : currenttime,
			"services": [{
                "name": "Weather",
                "widgets": [{
                    "name": "weather_widget",
                    "description": "Affiche la météo pour une ville",
                    "params": [{
                        "name": "cityname",
                        "type": "string"
                    }]
                }]
            }, {
				"name": "Trade",
				"widgets": [{
					"name": "crypto_trade",
					"description": "Affiche la valeur actuelle d'une cryptomonnaie",
					"params": [{
						"name": "cryptoname",
						"type": "string"
					}]
				}, {
                    "name": "market-widget",
					"description": "Affiche les informations du cours d’une action",
					"params": [{
                    	"name": "stockname",
						"type": "string"
					}]
				}]
			}, {
				"name": "Youtube",
				"widgets": [{
					"name": "youtube_widget",
					"description": "Affiche les informations d'une chaine Youtube",
					"params": [{
						"name": "channelname",
						"type": "string"
					}]
				}]
			}, {
				"name": "Steam",
				"widgets": [{
					"name": "steamuser_stat",
					"description": "Affiche le temps ainsi que les 2 derniers jeux d'un utilisateur Steam",
					"params": [{
						"id": "userid",
						"type": "number"
					}]
				}, {
					"name": "steamgame_stat",
					"description": "Affiche le nombre de joueurs actuel sur un jeu Steam",
					"params": [{
						"name": "namegame",
						"type": "stringer"
					}]
				}]

			}]
	}
    })
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;