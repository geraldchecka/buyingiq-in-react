import $ from 'jquery';

$.ajaxSettings.traditional = true;

const apiEndPoints = {
  search: 'http://localhost:5000/search'
};

//GET
function getCall(payload, callback) {
  $.ajax({
    url: apiEndPoints.search,
    type: "GET",
    data: payload,
    success: function (response) {
      console.log(response);
      //send it to storeDispatcher as success
      callback({
        status: "success",
        data: response
      });
    },
    error: function (response) {
      console.log(res);
      //send it to storeDispatcher as an error
      callback({
        status: "error",
        data: response
      });
    }
  });
}

const ajaxMethods = {
  get: getCall
};

module.exports = ajaxMethods;