exports.id = 741;
exports.ids = [741];
exports.modules = {

/***/ 9741:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": function() { return /* binding */ HeaderMessage; },
/* harmony export */   "u": function() { return /* binding */ FooterMessage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1347);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const HeaderMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "/signup";
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    color: "teal",
    attached: true,
    header: signupRoute ? "Get Started" : "Welcome Back",
    icon: signupRoute ? "settings" : "privacy",
    content: signupRoute ? "Create New Account" : "Login with Email and Password"
  });
};
const FooterMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "/signup";
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, signupRoute ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    warning: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "help"
  }), "Existing User? ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "/login"
  }, "Login Here Instead")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    info: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "lock"
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "/reset"
  }, "Forgot Password?")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    warning: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "help"
  }), "New User? ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "/signup"
  }, "Signup Here"), " Instead", " ")));
};

/***/ })

};
;