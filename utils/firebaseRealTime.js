const admin = require('firebase-admin');
const ObjectID = require('mongodb').ObjectID;

const serviceAccount = require('../vistiorMangament-186412-firebase-adminsdk-hd53z-c34cfd13cf.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://visitormanagment-ada7a.firebaseio.com/"
});

const db = admin.database();
let ref = db.ref('enteries');

let ref2= db.ref('employeeEntries');

let ref3= db.ref('vehicleEntries');


//const ref = db.ref();

exports.setData = (entryId, parkingStatus) => {
    const usersRef = ref.child(entryId);
    usersRef.set({
        parkingStatus:parkingStatus
    });

}

exports.setEmployeeData = (entryId, parkingStatus) => {
    const employeeRef = ref2.child(entryId);
    employeeRef.set({
        entry_status:parkingStatus
    });

}


exports.setVehicleData = (entryId, parkingStatus) => {
    const vehicleRef = ref3.child(entryId);
    vehicleRef.set({
        entry_status:parkingStatus
    });

}