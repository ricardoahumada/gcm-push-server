var gcm = require('node-gcm');
 
// Set up the sender with your GCM/FCM API key (declare this once for multiple messages)
var sender = new gcm.Sender('AAAACQGsM_Q:APA91bE-6FaznovkqGufP5THfIgpLQDHS5EsbXCjqs5PGMnTWP6iMJ8zh7tB3TXHuq7HB-8Ht7j4eC6HHGR_GHsOyqENxV8UB9FIDptUa5MCkC4wlG-89pqWYHiEjTrUXiu-0Os332A_');
 
// Prepare a message to be sent
/*var message = new gcm.Message({
    data: { key1: 'msg1' }
});*/

inc=1;

var message = new gcm.Message({
	id: inc++,
    title: 'Notificación',
    text: "Esto es una notificación",
    icon:'file://assets/imgs/logo.png',
    smallIcon:'assets://imgs/logo',
    sound: 'file://assets/sounds/sms.mp3',
    data: { message: 'Este es mi mensaje oculto' },
    at: Date.now()
});
 
// Add notification payload as key value
// message.addNotification('title', 'Alert!!!');
// message.addNotification('body', 'This a push notification');
// message.addNotification('icon', 'file://assets/imgs/logo');
 
// Specify which registration IDs to deliver the message to
var regTokens = ['d6FfxsNS3N8:APA91bFcRjcZCJo6g8SiGr9uPuQXkvnkmV8S4wrj5a4CwYwYpA5P-LpCx8HphGctp7Q7Y9EO9VZrsqenM1sbt5EZ20TseV9Ciazr2bdrnkCKD-CTKyrBmi-FGRjbTe-tuI_LKabQPbAH'];
 
// Actually send the message
sender.send(message, { registrationTokens: regTokens }, function (err, response) {
    if (err) console.error(err);
    else console.log(response);
});