exports.id = "components_Layout_NoData_js-utils_baseUrl_js";
exports.ids = ["components_Layout_NoData_js-utils_baseUrl_js"];
exports.modules = {

/***/ "./components/Layout/NoData.js":
/*!*************************************!*\
  !*** ./components/Layout/NoData.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoProfilePosts": function() { return /* binding */ NoProfilePosts; },
/* harmony export */   "NoFollowData": function() { return /* binding */ NoFollowData; },
/* harmony export */   "NoMessages": function() { return /* binding */ NoMessages; },
/* harmony export */   "NoPosts": function() { return /* binding */ NoPosts; },
/* harmony export */   "NoProfile": function() { return /* binding */ NoProfile; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Layout\\NoData.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

const NoProfilePosts = () => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Sorry",
  content: "User has not posted anything yet!",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
  icon: "long arrow alternate left",
  content: "Go Back",
  as: "a",
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}));
const NoFollowData = ({
  followersComponent,
  followingComponent
}) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, followersComponent && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  icon: "user outline",
  info: true,
  content: "User does not have followers",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}), followingComponent && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  icon: "user outline",
  info: true,
  content: "User does not follow any users",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}));
const NoMessages = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "telegram plane",
  header: "Sorry",
  content: "You have not messaged anyone yet.Search above to message someone!",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }
});
const NoPosts = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Posts. Make sure you have followed someone.",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }
});
const NoProfile = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Profile Found.",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }
});

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGEuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvYmFzZVVybC5qcyJdLCJuYW1lcyI6WyJOb1Byb2ZpbGVQb3N0cyIsIk5vRm9sbG93RGF0YSIsImZvbGxvd2Vyc0NvbXBvbmVudCIsImZvbGxvd2luZ0NvbXBvbmVudCIsIk5vTWVzc2FnZXMiLCJOb1Bvc3RzIiwiTm9Qcm9maWxlIiwiYmFzZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLGNBQWMsR0FBRyxNQUM1QixxRUFDRSxNQUFDLHNEQUFEO0FBQVMsTUFBSSxNQUFiO0FBQWMsTUFBSSxFQUFDLEtBQW5CO0FBQXlCLFFBQU0sRUFBQyxPQUFoQztBQUF3QyxTQUFPLEVBQUMsbUNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFLE1BQUMscURBQUQ7QUFBUSxNQUFJLEVBQUMsMkJBQWI7QUFBeUMsU0FBTyxFQUFDLFNBQWpEO0FBQTJELElBQUUsRUFBQyxHQUE5RDtBQUFrRSxNQUFJLEVBQUMsR0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZGLENBREs7QUFPQSxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFFQyxvQkFBRjtBQUFzQkM7QUFBdEIsQ0FBRCxLQUMxQixxRUFDR0Qsa0JBQWtCLElBQ2pCLE1BQUMsc0RBQUQ7QUFBUyxNQUFJLEVBQUMsY0FBZDtBQUE2QixNQUFJLE1BQWpDO0FBQWtDLFNBQU8sRUFBQyw4QkFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZKLEVBS0dDLGtCQUFrQixJQUNqQixNQUFDLHNEQUFEO0FBQVMsTUFBSSxFQUFDLGNBQWQ7QUFBNkIsTUFBSSxNQUFqQztBQUFrQyxTQUFPLEVBQUMsZ0NBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFOSixDQURLO0FBWUEsTUFBTUMsVUFBVSxHQUFHLE1BQ3hCLE1BQUMsc0RBQUQ7QUFDRSxNQUFJLE1BRE47QUFFRSxNQUFJLEVBQUMsZ0JBRlA7QUFHRSxRQUFNLEVBQUMsT0FIVDtBQUlFLFNBQU8sRUFBQyxtRUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREs7QUFTQSxNQUFNQyxPQUFPLEdBQUcsTUFDckIsTUFBQyxzREFBRDtBQUNFLE1BQUksTUFETjtBQUVFLE1BQUksRUFBQyxLQUZQO0FBR0UsUUFBTSxFQUFDLE1BSFQ7QUFJRSxTQUFPLEVBQUMsZ0RBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURLO0FBU0EsTUFBTUMsU0FBUyxHQUFHLE1BQ3ZCLE1BQUMsc0RBQUQ7QUFBUyxNQUFJLE1BQWI7QUFBYyxNQUFJLEVBQUMsS0FBbkI7QUFBeUIsUUFBTSxFQUFDLE1BQWhDO0FBQXVDLFNBQU8sRUFBQyxtQkFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURLLEM7Ozs7Ozs7Ozs7OztBQ3ZDUCxNQUFNQyxPQUFPLEdBQUUsdUJBQWY7QUFFQSwrREFBZUEsT0FBZixFIiwiZmlsZSI6ImNvbXBvbmVudHNfTGF5b3V0X05vRGF0YV9qcy11dGlsc19iYXNlVXJsX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qcm9maWxlUG9zdHMgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIlNvcnJ5XCIgY29udGVudD1cIlVzZXIgaGFzIG5vdCBwb3N0ZWQgYW55dGhpbmcgeWV0IVwiIC8+XHJcbiAgICA8QnV0dG9uIGljb249XCJsb25nIGFycm93IGFsdGVybmF0ZSBsZWZ0XCIgY29udGVudD1cIkdvIEJhY2tcIiBhcz1cImFcIiBocmVmPVwiL1wiIC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Gb2xsb3dEYXRhID0gKHsgZm9sbG93ZXJzQ29tcG9uZW50LCBmb2xsb3dpbmdDb21wb25lbnQgfSkgPT4gKFxyXG4gIDw+XHJcbiAgICB7Zm9sbG93ZXJzQ29tcG9uZW50ICYmIChcclxuICAgICAgPE1lc3NhZ2UgaWNvbj1cInVzZXIgb3V0bGluZVwiIGluZm8gY29udGVudD1cIlVzZXIgZG9lcyBub3QgaGF2ZSBmb2xsb3dlcnNcIiAvPlxyXG4gICAgKX1cclxuXHJcbiAgICB7Zm9sbG93aW5nQ29tcG9uZW50ICYmIChcclxuICAgICAgPE1lc3NhZ2UgaWNvbj1cInVzZXIgb3V0bGluZVwiIGluZm8gY29udGVudD1cIlVzZXIgZG9lcyBub3QgZm9sbG93IGFueSB1c2Vyc1wiIC8+XHJcbiAgICApfVxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vTWVzc2FnZXMgPSAoKSA9PiAoXHJcbiAgPE1lc3NhZ2VcclxuICAgIGluZm9cclxuICAgIGljb249XCJ0ZWxlZ3JhbSBwbGFuZVwiXHJcbiAgICBoZWFkZXI9XCJTb3JyeVwiXHJcbiAgICBjb250ZW50PVwiWW91IGhhdmUgbm90IG1lc3NhZ2VkIGFueW9uZSB5ZXQuU2VhcmNoIGFib3ZlIHRvIG1lc3NhZ2Ugc29tZW9uZSFcIlxyXG4gIC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qb3N0cyA9ICgpID0+IChcclxuICA8TWVzc2FnZVxyXG4gICAgaW5mb1xyXG4gICAgaWNvbj1cIm1laFwiXHJcbiAgICBoZWFkZXI9XCJIZXkhXCJcclxuICAgIGNvbnRlbnQ9XCJObyBQb3N0cy4gTWFrZSBzdXJlIHlvdSBoYXZlIGZvbGxvd2VkIHNvbWVvbmUuXCJcclxuICAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUHJvZmlsZSA9ICgpID0+IChcclxuICA8TWVzc2FnZSBpbmZvIGljb249XCJtZWhcIiBoZWFkZXI9XCJIZXkhXCIgY29udGVudD1cIk5vIFByb2ZpbGUgRm91bmQuXCIgLz5cclxuKTsiLCJjb25zdCBiYXNlVXJsID1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZVVybDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==