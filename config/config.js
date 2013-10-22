module.exports = {
	development: {
		db: 'mongodb://localhost/KNOWDB',
		//db: 'mongodb://heroku_app18155863:b809b6d1f05e94a9c7aad5f0cd386ea7@ds045608.mongolab.com:45608/heroku_app18155863',
		app: {
			name: 'The KNOW Passport Authentication - DEV'
		},
		facebook: {
			clientID: "clientID",
			clientSecret: "clientSecret",
			callbackURL: "http://localhost:3000/auth/facebook/callback"
		}
	},
  	production: {
    	db: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL,
		app: {
			name: 'The KNOW Passport Authentication'
		},
		facebook: {
			clientID: "clientID",
			clientSecret: "clientSecret",
			callbackURL: "{{production callbackURL}}"
		}
 	}
}
