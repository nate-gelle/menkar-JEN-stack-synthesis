import { log } from "util";

$(document).ready(onReady);

function onReady(){
    $('#sendMessageButton').on('click', refresh);
    $('#sendMessageButton').on('click', sendMessage);    
}

function getMessages(){
    $.ajax({
        method: 'GET',
        url: '/messages'
    }).then( function (response){})
}

function refresh(){
    console.log('in refresh');
    getMessages();
}

function sendMessage(){
    console.log('in sendMessage');
    // get user input
    // create an object to send to server
    let objectToSend = {
        name: $('nameIn').val(), 
        message: $('messageIn').val()
    } 
    // make ajax post call to /messages route
    $.ajax({
        method: 'POST',
        url: '/messages'
    }).then
    // when back from server, update the Dom 
}