var Backbone = require('backparse')({
	appId: 'SNLAJ6G7wviQikGW1xcVmn5s3rUZvDsbzoS0xiwZ',
	apiKey: '3FfrVV8MXHvsLPkjMH466udET6rfzPvo6vCMkyHB',
	apiVersion: 1
});
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
    defaults: {
        username: '',
        password: '',
        email: ''
    },
    parseClassName: '_User',
    idAttribute: 'objectId',
    isUser: true
});
