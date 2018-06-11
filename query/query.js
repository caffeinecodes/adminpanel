



const get = (dbName,criteria, project, callback) => {
    const dataBaseName = require('../model/'+dbName);
    dataBaseName.findOne(criteria, project, (err, info) => {
        if (err) callback(err);
        else callback(null, info);
    });
};

const create = (dbName,dataToSave, callback) => {
    const dataBaseName = require('../model/'+dbName);
    dataBaseName.create(dataToSave, (err, info) => {
        if (err) callback(err);
        else callback(null, info);
    });
};

const getMultiple = (dbName,criteria, project, option,callback) => {
    const dataBaseName = require('../model/'+dbName);
    dataBaseName.find(criteria, project,{},(err, info) => {
        if (err) callback(err);
        else callback(null, info);
    });
};

const update = (dbName,criteria, dataToSave, option, callback) => {
    const dataBaseName = require('../model/'+dbName);
    dataBaseName.findOneAndUpdate(criteria, dataToSave, option, (err, info) => {
        if (err) callback(err);
        else callback(null, info);
    });
};
const getPopulate = (dbName,criteria, project, options, populateArray, callback) => {
    const dataBaseName = require('../model/'+dbName);
    dataBaseName.find(criteria, project, options).populate(populateArray).exec((err, info) => {
        if (err) callback(err);
        else callback(null, info);
    });
};
const deleteById = (dbName,criteria, callback) => {
    const dataBaseName = require('../model/'+dbName);
    dataBaseName.remove(criteria, (err, info) => {
        if (err) callback(err);
        else callback(null, info);
    });
};

module.exports = {

    get,
    getMultiple,
    create,
    update,
    getPopulate,
    deleteById
};