exports.id = 880;
exports.ids = [880];
exports.modules = {

/***/ 4953:
/***/ (function(module) {

const baseUrl =  false ? 0 : "https://sociabliss.onrender.com";
module.exports = baseUrl;

/***/ }),

/***/ 3844:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const catchErrors = error => {
  let errorMsg = '';

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["Z"] = (catchErrors);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;