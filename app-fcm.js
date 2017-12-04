var FCM = require('fcm-push');

var serverKey = '';
var fcm = new FCM('AAAACQGsM_Q:APA91bE-6FaznovkqGufP5THfIgpLQDHS5EsbXCjqs5PGMnTWP6iMJ8zh7tB3TXHuq7HB-8Ht7j4eC6HHGR_GHsOyqENxV8UB9FIDptUa5MCkC4wlG-89pqWYHiEjTrUXiu-0Os332A_');

var message = {
    to: 'd6FfxsNS3N8:APA91bFcRjcZCJo6g8SiGr9uPuQXkvnkmV8S4wrj5a4CwYwYpA5P-LpCx8HphGctp7Q7Y9EO9VZrsqenM1sbt5EZ20TseV9Ciazr2bdrnkCKD-CTKyrBmi-FGRjbTe-tuI_LKabQPbAH', // required fill with device token or topics
    // collapse_key: 'your_collapse_key', 
    data: {
    	message: 'Esto es un mensaje'
    },
    notification: {
    	title: 'Notificacion',
    	body: 'Cuerpo de la notificacion'
    }
};

//callback style
fcm.send(message, function(err, response){
	if (err) {
		console.log("Something has gone wrong!");
	} else {
		console.log("Successfully sent with response: ", response);
	}
});