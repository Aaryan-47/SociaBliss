exports.id = 263;
exports.ids = [263];
exports.modules = {

/***/ 6841:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a$": function() { return /* binding */ registerUser; },
/* harmony export */   "pH": function() { return /* binding */ loginUser; },
/* harmony export */   "a0": function() { return /* binding */ redirectUser; },
/* harmony export */   "TX": function() { return /* binding */ logoutUser; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4953);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3844);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);





const registerUser = async (user, profilePicUrl, setError, setLoading) => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/signup`, {
      user,
      profilePicUrl
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(error);
    setError(errorMsg);
  }

  setLoading(false);
};
const loginUser = async (user, setError, setLoading) => {
  setLoading(true);

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/auth`, {
      user
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(error);
    setError(errorMsg);
  }

  setLoading(false);
};
const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location
    });
    ctx.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_2___default().push(location);
  }
};

const setToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default().set("token", token);
  next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/");
};

const logoutUser = email => {
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default().set("userEmail", email);
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default().remove("token");
  next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/login");
  next_router__WEBPACK_IMPORTED_MODULE_2___default().reload();
};

/***/ }),

/***/ 4953:
/***/ (function(module) {

const baseUrl = "http://localhost:3000";
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