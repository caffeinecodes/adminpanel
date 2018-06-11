const express = require('express');
const Constants = require('./consts.js');



const sendErrorMessage = (res, errorCode) => {
    res.json({
        status: errorCode,
        message: Constants.ERROR_MESSAGE
    });
};

const sendErrorCustomMessage = (res, text, errorCode) => {
    res.json({

        message: text,
        status: errorCode,

    });
};

const sendSuccessMessage = (res, message) => {
    res.json({
        status: Constants.SUCCESS,
        message: message
    });
};


const sendsuccessData = (res, message, data) => {
    res.json({
        status: Constants.SUCCESS,
        message: message,
        data: data
    });
};

const sendSucessCustomMessage = (res, text, data,code) => {
    res.json({
        status: code,
        message: text,
        data:data
    });
};

module.exports = {
    sendErrorMessage,
    sendsuccessData,
    sendSuccessMessage,
    sendErrorCustomMessage,
    sendSucessCustomMessage

}