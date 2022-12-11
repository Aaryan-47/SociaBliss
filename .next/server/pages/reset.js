(function() {
var exports = {};
exports.id = "pages/reset";
exports.ids = ["pages/reset"];
exports.modules = {

/***/ "./pages/reset/index.js":
/*!******************************!*\
  !*** ./pages/reset/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\pages\\reset\\index.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function ResetPage() {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: emailChecked,
    1: setEmailChecked
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const resetPassword = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios__WEBPACK_IMPORTED_MODULE_4___default().post(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_2___default())}/api/reset`, {
        email
      });
      setEmailChecked(true);
    } catch (error) {
      setErrorMsg((0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_3__.default)(error));
    }

    setLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    errorMsg !== null && setTimeout(() => setErrorMsg(null), 5000);
  }, [errorMsg]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, emailChecked ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: true,
    icon: "mail",
    header: "Check Your Inbox",
    content: "Please check your inbox for further instructions",
    success: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: true,
    icon: "settings",
    header: "Reset Password",
    color: "teal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    loading: loading,
    onSubmit: resetPassword,
    error: errorMsg !== null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    fluid: true,
    icon: "mail outline",
    type: "email",
    iconPosition: "left",
    label: "Email",
    placeholder: "Enter email address",
    name: "email",
    onChange: e => setEmail(e.target.value),
    value: email,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    disabled: loading || email.length === 0,
    icon: "configure",
    type: "submit",
    color: "orange",
    content: "Submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ResetPage);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(module) {

const baseUrl = "http://localhost:3000";
module.exports = baseUrl;

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/reset/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9yZXNldC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIlJlc2V0UGFnZSIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VTdGF0ZSIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJlbWFpbENoZWNrZWQiLCJzZXRFbWFpbENoZWNrZWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc2V0UGFzc3dvcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsImJhc2VVcmwiLCJlcnJvciIsImNhdGNoRXJyb3JzIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJyZXF1ZXN0IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUNuQixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsK0NBQVEsQ0FBQyxJQUFELENBQXhD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LE9BQWpCLEM7Ozs7Ozs7Ozs7OztBQ0ZBLE1BQU1FLFdBQVcsR0FBSUQsS0FBRCxJQUFXO0FBQzdCLE1BQUlYLFFBQVEsR0FBRyxFQUFmOztBQUVBLE1BQUlXLEtBQUssQ0FBQ1MsUUFBVixFQUFvQjtBQUNsQjtBQUVBcEIsWUFBUSxHQUFHVyxLQUFLLENBQUNTLFFBQU4sQ0FBZUMsSUFBMUI7QUFFQUMsV0FBTyxDQUFDWCxLQUFSLENBQWNYLFFBQWQ7QUFDRCxHQU5ELE1BTU8sSUFBSVcsS0FBSyxDQUFDWSxPQUFWLEVBQW1CO0FBQ3hCO0FBQ0F2QixZQUFRLEdBQUdXLEtBQUssQ0FBQ1ksT0FBakI7QUFFQUQsV0FBTyxDQUFDWCxLQUFSLENBQWNYLFFBQWQ7QUFDRCxHQUxNLE1BS0E7QUFDTDtBQUNBQSxZQUFRLEdBQUdXLEtBQUssQ0FBQ2EsT0FBakI7QUFFQUYsV0FBTyxDQUFDWCxLQUFSLENBQWNYLFFBQWQ7QUFDRDs7QUFDRixTQUFPQSxRQUFQO0FBQ0EsQ0FyQkQ7O0FBdUJBLCtEQUFlWSxXQUFmLEU7Ozs7Ozs7Ozs7O0FDdkJBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL3Jlc2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi4vLi4vdXRpbHMvY2F0Y2hFcnJvcnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gUmVzZXRQYWdlKCkge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgW2VtYWlsQ2hlY2tlZCwgc2V0RW1haWxDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByZXNldFBhc3N3b3JkID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke2Jhc2VVcmx9L2FwaS9yZXNldGAsIHsgZW1haWwgfSk7XHJcblxyXG4gICAgICBzZXRFbWFpbENoZWNrZWQodHJ1ZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvck1zZyhjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBlcnJvck1zZyAhPT0gbnVsbCAmJiBzZXRUaW1lb3V0KCgpID0+IHNldEVycm9yTXNnKG51bGwpLCA1MDAwKTtcclxuICB9LCBbZXJyb3JNc2ddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtlbWFpbENoZWNrZWQgPyAoXHJcbiAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgIGF0dGFjaGVkXHJcbiAgICAgICAgICBpY29uPVwibWFpbFwiXHJcbiAgICAgICAgICBoZWFkZXI9XCJDaGVjayBZb3VyIEluYm94XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJQbGVhc2UgY2hlY2sgeW91ciBpbmJveCBmb3IgZnVydGhlciBpbnN0cnVjdGlvbnNcIlxyXG4gICAgICAgICAgc3VjY2Vzc1xyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPE1lc3NhZ2UgYXR0YWNoZWQgaWNvbj1cInNldHRpbmdzXCIgaGVhZGVyPVwiUmVzZXQgUGFzc3dvcmRcIiBjb2xvcj1cInRlYWxcIiAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPEZvcm0gbG9hZGluZz17bG9hZGluZ30gb25TdWJtaXQ9e3Jlc2V0UGFzc3dvcmR9IGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH0+XHJcbiAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXtlcnJvck1zZ30gLz5cclxuXHJcbiAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPVwibWFpbCBvdXRsaW5lXCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsIGFkZHJlc3NcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZyB8fCBlbWFpbC5sZW5ndGggPT09IDB9XHJcbiAgICAgICAgICAgIGljb249XCJjb25maWd1cmVcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiU3VibWl0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNldFBhZ2U7XHJcbiIsImNvbnN0IGJhc2VVcmwgPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVcmw7XHJcbiIsImNvbnN0IGNhdGNoRXJyb3JzID0gKGVycm9yKSA9PiB7XHJcbiAgbGV0IGVycm9yTXNnID0gJyc7XHJcblxyXG4gIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgLy8gSWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgbm90IHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGUgaW4gdGhlIHJhbmdlIG9mIDJ4eFxyXG5cclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgIC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCBubyByZXNwb25zZSB3YXMgcmVjZXZpZWQgZnJvbSBzZXJ2ZXJcclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVxdWVzdDtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaWYgc29tZXRoaW5nIGVsc2UgaGFwcGVuZWQgd2hpbGUgbWFraW5nIHRoZSByZXF1ZXN0XHJcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gcmV0dXJuIGVycm9yTXNnO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=