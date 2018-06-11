const FCM = require('fcm-push');

const serverKey = 'AAAAFmElNiU:APA91bFL6jXYlXaqwZx2YHqjxQDVkECkJVtMQo3tZKOueF6lz6LN8goHghO40PHqz_vERkTLXm4GyZY8wRCcB38vPoIC5rtRDL0SCJTsuyY4ZGv32TpoHnocPbuu4FSjVMZJoU4bXsVe';
const fcm = new FCM(serverKey);

//callback style

const sendMessage = (
    token,
    foodTruckName,
    orderStatus,
    orderId,
    order,
    isStatusUpdate,
    minutesMessage, otp
) => {
    const pushToken = token;
    const truckName = foodTruckName;
    let statusText = '';
    let data;
    let notification;
    if (isStatusUpdate) {
        if (orderStatus === 1) {
            statusText = foodTruckName;
            data = {
                foodtruck_name: truckName,
                order_status: orderStatus,
                order_otp: otp,
                order_id: orderId
            }
        } else if (orderStatus === 2) {
            statusText = `order with ${foodTruckName} is  cooked`;

            data = {
                foodtruck_name: truckName,
                order_status: orderStatus,
                status_text: statusText
            }

        }

        notification = {
            title: "Quflip",
            body: statusText + "         OTP  " + otp,
            sound: "default"
        }
    } else {
        console.log("sts " + minutesMessage);
        data = {
            foodtruck_name: truckName,
            order_status: orderStatus,
            order_id: orderId,
            status_text: minutesMessage
        }
        statusText = minutesMessage;

        notification = {
            title: "Quflip",
            body: statusText + " Please click to look at the details",
            sound: "default"
        }
    }

    const message = {
        to: pushToken,
        data,
        notification
    };


    fcm.send(message, (err, response) => {
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });
};

module.exports = {
    sendMessage
};