import $ from 'jquery';

/******************* REFACTOR AFTER COMPLETION ***************/

const apiEndPoints = {
  search: 'http://localhost:5000/search'
};

//Write logic to mutate URL duplicate parameters

/******* Generate a string
  e.g., tags=mobiles&tag=samsung
  - If I were to represent 'tags' in an object, it is not possible because of possible duplicate keys
  - Better take input from 'actionDispatcher' payload as array of 'tags' values,
    and construct a & (Ampersand) concenated string of 'tags'
*/

//TODO
function validatePayload(response) {
  return "A ready for consumption, concatenated and URL-params string";
}

/***** Ajax wrappers go here *****/

//GET
function getCall(payload, callback) {
  let data = validatePayload(payload);
  $.ajax({
    url: apiEndPoints.search,
    type: "GET",
    data: data,
    success: function (response) {
      console.log(res);
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