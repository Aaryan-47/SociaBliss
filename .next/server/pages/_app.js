(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout/HeadTags.js":
/*!***************************************!*\
  !*** ./components/Layout/HeadTags.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Layout\\HeadTags.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const HeadTags = () => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}), __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "icon",
  href: "/favicon.png",
  sizes: "16*16",
  type: "image/png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/listMessages.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/styles.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/nprogress.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
}, "Mini Social Media")));

/* harmony default export */ __webpack_exports__["default"] = (HeadTags);

/***/ }),

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeadTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeadTags */ "./components/Layout/HeadTags.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SideBar */ "./components/Layout/SideBar.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Search */ "./components/Layout/Search.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Layout\\Layout.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









function Layout({
  children,
  user
}) {
  const contextRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();

  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeStart) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();

  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeComplete) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();

  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeError) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_HeadTags__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), user ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    style: {
      marginLeft: "1rem",
      marginRight: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 10
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Ref, {
    innerRef: contextRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 14
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    floated: "left",
    width: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Sticky, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 16
    }
  }, __jsx(_SideBar__WEBPACK_IMPORTED_MODULE_6__.default, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 18
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    width: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Visibility, {
    ref: contextRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, children)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    floated: "left",
    width: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Sticky, {
    context: contextRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 16
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 18
    }
  }, __jsx(_Search__WEBPACK_IMPORTED_MODULE_7__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  })))))))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 12
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
    text: true,
    style: {
      paddingTop: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 12
    }
  }, children)));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Layout\\Navbar.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function Navbar() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const CheckActive = route => {
    return router.pathname === route;
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    fluid: true,
    borderless: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
    text: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    active: CheckActive('/login'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    size: "large",
    name: "sign in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), "Login")), __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    active: CheckActive('/signup'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    size: "large",
    name: "signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), "Sign Up")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Layout/Search.js":
/*!*************************************!*\
  !*** ./components/Layout/Search.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Layout\\Search.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








function Searchs() {
  const {
    0: text,
    1: settext
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: loading,
    1: setloading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: results,
    1: setresults
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const handleChange = async e => {
    const {
      value
    } = e.target;
    settext(value);
    setloading(true);

    try {
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("token");
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__.default}/api/search/${value}`, {
        headers: {
          Authorization: token
        }
      });
      if (res.data.length === 0) return setloading(false);
      setresults(res.data); //console.log(results)
    } catch (error) {
      console.log("Error Searching");
    }

    setloading(false);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Search, {
    onBlur: () => {
      results.length > 0 && setresults([]);
      loading && setloading(false);
      settext('');
    },
    loading: loading,
    value: text,
    resultRenderer: ResultRenderer,
    results: results,
    onSearchChange: handleChange,
    minCharacters: 1,
    onResultSelect: (e, data) => {
      next_router__WEBPACK_IMPORTED_MODULE_4___default().push(`/${data.result.username}`);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 10
    }
  }));
}

const ResultRenderer = ({
  _id,
  profilePicUrl,
  name
}) => {
  //console.log(props)
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
    key: _id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: profilePicUrl,
    alt: "Profile",
    avatar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    header: name,
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Searchs);

/***/ }),

/***/ "./components/Layout/SideBar.js":
/*!**************************************!*\
  !*** ./components/Layout/SideBar.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/authUser */ "./utils/authUser.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Layout\\SideBar.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function SideBar({
  user: {
    unreadNotification,
    email,
    unreadMessage,
    username
  }
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const isActive = route => router.pathname === route;

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
    style: {
      paddingTop: "2rem"
    },
    size: "big",
    verticalAlign: "middle",
    selection: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: isActive('/'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "home",
    size: "large",
    color: isActive('/') && "teal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })))), __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/messages",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: isActive('/messages'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: unreadMessage ? "hand point right" : "mail outline",
    size: "large",
    color: isActive('/messages') && "teal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Messages",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  })))), __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/notifications",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: isActive('/notifications'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: unreadNotification ? "hand point right" : "bell outline",
    size: "large",
    color: isActive('/notifications') && "teal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Notifications",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })))), __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: `/${username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: router.query.username === username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "user",
    size: "large",
    color: router.query.username === username && "teal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    onClick: () => (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_4__.logOut)(email),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "sign-out",
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Logout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/App */ "next/App");
/* harmony import */ var next_App__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_App__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\pages\\_app.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










class MyApp extends (next_App__WEBPACK_IMPORTED_MODULE_1___default()) {
  static async getInitialProps({
    Component,
    ctx
  }) {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_6__.parseCookies)(ctx);
    let pageProps = {};
    const protectedRoutes = ctx.pathname === '/' || ctx.pathname === '/[username]' || ctx.pathname === '/notifications' || ctx.pathname === '/post/[postId]' || ctx.pathname === '/messages' || ctx.pathname === '/search';

    if (!token) {
      protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_8__.redirectUser)(ctx, "/login");
    } else {
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__.default}/api/auth`, {
          headers: {
            Authorization: token
          }
        });
        const {
          user,
          userStats
        } = res.data;
        if (user) !protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_8__.redirectUser)(ctx, "/");
        pageProps.user = user;
        pageProps.userStats = userStats;
      } catch (error) {
        (0,nookies__WEBPACK_IMPORTED_MODULE_6__.destroyCookie)(ctx, "token");
        (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_8__.redirectUser)(ctx, "/login");
      }
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__.default, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }), __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUser": function() { return /* binding */ registerUser; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; },
/* harmony export */   "redirectUser": function() { return /* binding */ redirectUser; },
/* harmony export */   "logOut": function() { return /* binding */ logOut; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/Router */ "next/Router");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_5__);






const registerUser = async (user, profilePicUrl, setError, setLoading) => {
  setLoading(true);

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_2__.default}/api/signup`, {
      user,
      profilePicUrl
    });
    setToken(res.data);
  } catch (error) {
    setError((0,_catchErrors__WEBPACK_IMPORTED_MODULE_3__.default)(error));
  }

  setLoading(false);
};
const loginUser = async (user, setError, setLoading) => {
  setLoading(true);

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_2__.default}/api/auth`, {
      user
    });
    setToken(res.data);
  } catch (error) {
    setError((0,_catchErrors__WEBPACK_IMPORTED_MODULE_3__.default)(error));
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
    next_Router__WEBPACK_IMPORTED_MODULE_5___default().push(location);
  }
};
const logOut = email => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("userEmail", email);
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove("token");
  next_Router__WEBPACK_IMPORTED_MODULE_5___default().push('/login');
  next_Router__WEBPACK_IMPORTED_MODULE_5___default().reload();
};

const setToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("token", token);
  next_Router__WEBPACK_IMPORTED_MODULE_5___default().push("/");
};

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

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/***/ (function() {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("bcryptjs");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "next/App":
/*!***************************!*\
  !*** external "next/App" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/App");;

/***/ }),

/***/ "next/Router":
/*!******************************!*\
  !*** external "next/Router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/Router");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9IZWFkVGFncy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTGF5b3V0L1NlYXJjaC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9TaWRlQmFyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvYXV0aFVzZXIuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvYmFzZVVybC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9jYXRjaEVycm9ycy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImJjcnlwdGpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9BcHBcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L1JvdXRlclwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2lnbm9yZWR8QzpcXFVzZXJzXFxhYXJ5YVxcT25lRHJpdmVcXERvY3VtZW50c1xcbWVzc2VuZ2VyXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiSGVhZFRhZ3MiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInVzZXIiLCJjb250ZXh0UmVmIiwiY3JlYXRlUmVmIiwicm91dGVyIiwibnByb2dyZXNzIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1RvcCIsIk5hdmJhciIsInVzZVJvdXRlciIsIkNoZWNrQWN0aXZlIiwicm91dGUiLCJwYXRobmFtZSIsIlNlYXJjaHMiLCJ0ZXh0Iiwic2V0dGV4dCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldGxvYWRpbmciLCJyZXN1bHRzIiwic2V0cmVzdWx0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRva2VuIiwiY29va2llIiwicmVzIiwiYXhpb3MiLCJiYXNlVXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwibGVuZ3RoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUmVzdWx0UmVuZGVyZXIiLCJSb3V0ZXIiLCJyZXN1bHQiLCJ1c2VybmFtZSIsIl9pZCIsInByb2ZpbGVQaWNVcmwiLCJuYW1lIiwiU2lkZUJhciIsInVucmVhZE5vdGlmaWNhdGlvbiIsImVtYWlsIiwidW5yZWFkTWVzc2FnZSIsImlzQWN0aXZlIiwicXVlcnkiLCJsb2dPdXQiLCJNeUFwcCIsIkFwcCIsImdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsImN0eCIsInBhcnNlQ29va2llcyIsInBhZ2VQcm9wcyIsInByb3RlY3RlZFJvdXRlcyIsInJlZGlyZWN0VXNlciIsInVzZXJTdGF0cyIsImRlc3Ryb3lDb29raWUiLCJyZW5kZXIiLCJwcm9wcyIsInJlZ2lzdGVyVXNlciIsInNldEVycm9yIiwic2V0TG9hZGluZyIsInNldFRva2VuIiwiY2F0Y2hFcnJvcnMiLCJsb2dpblVzZXIiLCJsb2NhdGlvbiIsInJlcSIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwiZXJyb3JNc2ciLCJyZXNwb25zZSIsInJlcXVlc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFDZixxRUFDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFNLE1BQUksRUFBQyxVQUFYO0FBQXNCLFNBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUU7QUFBTSxTQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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c0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBIZWFkVGFncyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiBzaXplcz1cIjE2KjE2XCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcblxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9saXN0TWVzc2FnZXMuY3NzXCIgLz5cclxuXHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0eWxlcy5jc3NcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9ucHJvZ3Jlc3MuY3NzXCIgLz5cclxuXHJcbiAgICAgIDx0aXRsZT5NaW5pIFNvY2lhbCBNZWRpYTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgPC8+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRUYWdzO1xyXG4iLCJpbXBvcnQgUmVhY3Qse2NyZWF0ZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkVGFncyBmcm9tIFwiLi9IZWFkVGFnc1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsVmlzaWJpbGl0eSxTdGlja3ksR3JpZCxSZWYsRGl2aWRlcixTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBucHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi9TaWRlQmFyJztcclxuaW1wb3J0IFNlYXJjaHMgZnJvbSAnLi9TZWFyY2gnO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHtjaGlsZHJlbix1c2VyfSkge1xyXG4gIGNvbnN0IGNvbnRleHRSZWY9Y3JlYXRlUmVmKCk7XHJcbiAgcm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydD0oKT0+IG5wcm9ncmVzcy5zdGFydCgpO1xyXG4gIHJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGU9KCk9PiBucHJvZ3Jlc3MuZG9uZSgpO1xyXG4gIHJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3I9KCk9PiBucHJvZ3Jlc3MuZG9uZSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZFRhZ3MgLz5cclxuICAgICAgIHt1c2VyPyg8PlxyXG4gICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjFyZW1cIixtYXJnaW5SaWdodDpcIjFyZW1cIn19PlxyXG4gICAgICAgICAgIDxSZWYgaW5uZXJSZWY9e2NvbnRleHRSZWZ9PlxyXG4gICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9XCJsZWZ0XCIgd2lkdGg9ezJ9PlxyXG4gICAgICAgICAgICAgICA8U3RpY2t5PlxyXG4gICAgICAgICAgICAgICAgIDxTaWRlQmFyIHVzZXI9e3VzZXJ9Lz4gXHJcbiAgICAgICAgICAgICAgIDwvU3RpY2t5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+XHJcbiAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eSByZWY9e2NvbnRleHRSZWZ9PlxyXG4gICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvVmlzaWJpbGl0eT5cclxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPVwibGVmdFwid2lkdGg9ezR9PlxyXG4gICAgICAgICAgICAgICA8U3RpY2t5IGNvbnRleHQ9e2NvbnRleHRSZWZ9PlxyXG4gICAgICAgICAgICAgICAgIDxTZWdtZW50IGJhc2ljPlxyXG4gICAgICAgICAgICAgICAgICA8U2VhcmNocy8+XHJcbiAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICA8L1N0aWNreT5cclxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgIDwvUmVmPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvPik6KFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgIDxDb250YWluZXIgdGV4dCBzdHlsZT17e3BhZGRpbmdUb3A6XCIxcmVtXCJ9fT5cclxuICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICA8Lz5cclxuICAgICAgICl9XHJcbiAgICAgXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtNZW51LENvbnRhaW5lcixJY29ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCAgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuXHJcbiAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpXHJcbiBjb25zdCBDaGVja0FjdGl2ZT0ocm91dGUpPT57XHJcbiAgcmV0dXJuIHJvdXRlci5wYXRobmFtZT09PXJvdXRlXHJcbiB9XHJcbiAgcmV0dXJuKCBcclxuICA8ZGl2PlxyXG4gICAgIDxNZW51IGZsdWlkIGJvcmRlcmxlc3M+XHJcbiAgICAgIDxDb250YWluZXIgdGV4dD5cclxuICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICA8TWVudS5JdGVtIGFjdGl2ZT17Q2hlY2tBY3RpdmUoJy9sb2dpbicpfT5cclxuICAgICAgICA8SWNvbiBzaXplPVwibGFyZ2VcIiBuYW1lPVwic2lnbiBpblwiLz5Mb2dpbjwvTWVudS5JdGVtPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgIDxNZW51Lkl0ZW0gYWN0aXZlPXtDaGVja0FjdGl2ZSgnL3NpZ251cCcpfT5cclxuICAgICAgPEljb24gc2l6ZT1cImxhcmdlXCIgbmFtZT1cInNpZ251cFwiLz5TaWduIFVwPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgPC9NZW51PlxyXG4gIDwvZGl2Pik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtMaXN0LFNlYXJjaCxJbWFnZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gJy4uLy4uL3V0aWxzL2Jhc2VVcmwnXHJcblxyXG5mdW5jdGlvbiBTZWFyY2hzKClcclxue1xyXG4gICAgY29uc3RbdGV4dCxzZXR0ZXh0XT11c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLHNldGxvYWRpbmddPXVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3Jlc3VsdHMsc2V0cmVzdWx0c109dXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlPWFzeW5jKGUpPT57XHJcbiAgICAgICAgY29uc3R7dmFsdWV9PWUudGFyZ2V0O1xyXG4gICAgICAgIHNldHRleHQodmFsdWUpXHJcbiAgICAgICAgc2V0bG9hZGluZyh0cnVlKVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICBjb25zdCB0b2tlbj1jb29raWUuZ2V0KFwidG9rZW5cIik7XHJcbiAgICAgICAgICAgY29uc3QgcmVzPWF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvc2VhcmNoLyR7dmFsdWV9YCx7aGVhZGVyczp7QXV0aG9yaXphdGlvbjp0b2tlbn19KVxyXG4gICAgICAgICAgIGlmKHJlcy5kYXRhLmxlbmd0aD09PTApXHJcbiAgICAgICAgICAgICByZXR1cm4gc2V0bG9hZGluZyhmYWxzZSlcclxuICAgICAgICBcclxuICAgICAgICAgICAgc2V0cmVzdWx0cyhyZXMuZGF0YSlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHRzKVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgY2F0Y2goZXJyb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIFNlYXJjaGluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0bG9hZGluZyhmYWxzZSlcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8U2VhcmNoIG9uQmx1cj17KCk9PntyZXN1bHRzLmxlbmd0aD4wJiZzZXRyZXN1bHRzKFtdKVxyXG4gICAgICAgICBsb2FkaW5nJiZzZXRsb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIHNldHRleHQoJycpXHJcbiAgICAgICAgICB9fSBcclxuICAgICAgICAgbG9hZGluZz17bG9hZGluZ30gXHJcbiAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICByZXN1bHRSZW5kZXJlcj17UmVzdWx0UmVuZGVyZXJ9IFxyXG4gICAgICAgICByZXN1bHRzPXtyZXN1bHRzfSBcclxuICAgICAgICAgb25TZWFyY2hDaGFuZ2U9e2hhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgIG1pbkNoYXJhY3RlcnM9ezF9XHJcbiAgICAgICAgIG9uUmVzdWx0U2VsZWN0PXsoZSxkYXRhKT0+e1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChgLyR7ZGF0YS5yZXN1bHQudXNlcm5hbWV9YClcclxuICAgICAgICAgfX0+XHJcbiAgICAgICAgIDwvU2VhcmNoPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBSZXN1bHRSZW5kZXJlcj0oe19pZCxwcm9maWxlUGljVXJsLG5hbWV9KT0+e1xyXG4gICAgLy9jb25zb2xlLmxvZyhwcm9wcylcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3Qga2V5PXtfaWR9PlxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZVBpY1VybH0gYWx0PVwiUHJvZmlsZVwiIGF2YXRhci8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGhlYWRlcj17bmFtZX0gYXM9XCJhXCIvPlxyXG4gICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TGlzdCxJY29ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGhVc2VyJ1xyXG5cclxuZnVuY3Rpb24gU2lkZUJhcih7dXNlcjp7dW5yZWFkTm90aWZpY2F0aW9uLGVtYWlsLHVucmVhZE1lc3NhZ2UsdXNlcm5hbWV9fSlcclxue1xyXG4gICAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgaXNBY3RpdmU9cm91dGU9PnJvdXRlci5wYXRobmFtZT09PXJvdXRlXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6XCIycmVtXCJ9fVxyXG4gICAgICAgIHNpemU9XCJiaWdcIiB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCIgc2VsZWN0aW9uPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZSgnLycpfT5cclxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaG9tZVwiIHNpemU9XCJsYXJnZVwiIGNvbG9yPXtpc0FjdGl2ZSgnLycpJiZcInRlYWxcIn0vPlxyXG4gICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIkhvbWVcIi8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL21lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZSgnL21lc3NhZ2VzJyl9PlxyXG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9e3VucmVhZE1lc3NhZ2U/XCJoYW5kIHBvaW50IHJpZ2h0XCI6XCJtYWlsIG91dGxpbmVcIn0gc2l6ZT1cImxhcmdlXCIgY29sb3I9e2lzQWN0aXZlKCcvbWVzc2FnZXMnKSYmXCJ0ZWFsXCJ9Lz5cclxuICAgICAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJNZXNzYWdlc1wiLz5cclxuICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8TGluayBocmVmPVwiL25vdGlmaWNhdGlvbnNcIj5cclxuICAgICAgICAgICAgPExpc3QuSXRlbSBhY3RpdmU9e2lzQWN0aXZlKCcvbm90aWZpY2F0aW9ucycpfT5cclxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPXt1bnJlYWROb3RpZmljYXRpb24/XCJoYW5kIHBvaW50IHJpZ2h0XCI6XCJiZWxsIG91dGxpbmVcIn0gc2l6ZT1cImxhcmdlXCIgY29sb3I9e2lzQWN0aXZlKCcvbm90aWZpY2F0aW9ucycpJiZcInRlYWxcIn0vPlxyXG4gICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIk5vdGlmaWNhdGlvbnNcIi8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke3VzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtIGFjdGl2ZT17cm91dGVyLnF1ZXJ5LnVzZXJuYW1lPT09dXNlcm5hbWV9PlxyXG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ1c2VyXCIgc2l6ZT1cImxhcmdlXCIgY29sb3I9e3JvdXRlci5xdWVyeS51c2VybmFtZT09PXVzZXJuYW1lJiZcInRlYWxcIn0vPlxyXG4gICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIkFjY291bnRcIi8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPExpc3QuSXRlbSBvbkNsaWNrPXsoKT0+bG9nT3V0KGVtYWlsKX0+XHJcbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzaWduLW91dFwiIHNpemU9XCJsYXJnZVwiLz5cclxuICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkhlYWRlciBjb250ZW50PVwiTG9nb3V0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9MaXN0LkhlYWRlcj5cclxuICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyO1xyXG4iLCJpbXBvcnQgQXBwIGZyb20gXCJuZXh0L0FwcFwiXHJcbmltcG9ydCBMYXlvdXQgZnJvbScuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuaW1wb3J0IGF4aW9zIGZyb20nYXhpb3MnXHJcbmltcG9ydCB7cGFyc2VDb29raWVzLGRlc3Ryb3lDb29raWV9IGZyb20gJ25vb2tpZXMnXHJcbmltcG9ydCBiYXNlVXJsIGZyb20gJy4uL3V0aWxzL2Jhc2VVcmwnXHJcbmltcG9ydCB7cmVkaXJlY3RVc2VyfSBmcm9tICcuLi91dGlscy9hdXRoVXNlcidcclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHB7XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7Q29tcG9uZW50LGN0eH0pXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3Qge3Rva2VufT1wYXJzZUNvb2tpZXMoY3R4KVxyXG5cclxuICAgICAgICBsZXQgcGFnZVByb3BzPXt9XHJcbiAgICAgICAgY29uc3QgcHJvdGVjdGVkUm91dGVzPVxyXG4gICAgICAgIGN0eC5wYXRobmFtZT09PScvJ3x8XHJcbiAgICAgICAgY3R4LnBhdGhuYW1lPT09Jy9bdXNlcm5hbWVdJ3x8XHJcbiAgICAgICAgY3R4LnBhdGhuYW1lPT09Jy9ub3RpZmljYXRpb25zJ3x8XHJcbiAgICAgICAgY3R4LnBhdGhuYW1lPT09Jy9wb3N0L1twb3N0SWRdJ3x8Y3R4LnBhdGhuYW1lPT09Jy9tZXNzYWdlcyd8fGN0eC5wYXRobmFtZT09PScvc2VhcmNoJztcclxuICAgICAgICBpZighdG9rZW4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm90ZWN0ZWRSb3V0ZXMmJnJlZGlyZWN0VXNlcihjdHgsXCIvbG9naW5cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFnZVByb3BzPWF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXM9YXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9hdXRoYCx7aGVhZGVyczp7QXV0aG9yaXphdGlvbjp0b2tlbn19KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHt1c2VyLHVzZXJTdGF0c309cmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyKSAhcHJvdGVjdGVkUm91dGVzJiZyZWRpcmVjdFVzZXIoY3R4LFwiL1wiKTtcclxuICAgICAgICAgICAgICAgIHBhZ2VQcm9wcy51c2VyPXVzZXJcclxuICAgICAgICAgICAgICAgIHBhZ2VQcm9wcy51c2VyU3RhdHM9dXNlclN0YXRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goZXJyb3IpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBkZXN0cm95Q29va2llKGN0eCxcInRva2VuXCIpO1xyXG4gICAgICAgICAgICAgIHJlZGlyZWN0VXNlcihjdHgsXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiB7cGFnZVByb3BzfTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3R7Q29tcG9uZW50LHBhZ2VQcm9wc309dGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxMYXlvdXQgey4uLnBhZ2VQcm9wc30+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi9iYXNlVXJsJztcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gJy4vY2F0Y2hFcnJvcnMnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9Sb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlcj1hc3luYyAodXNlcixwcm9maWxlUGljVXJsLHNldEVycm9yLHNldExvYWRpbmcpPT57XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICB0cnlcclxuICAgIHtcclxuICAgICAgY29uc3QgcmVzPWF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL3NpZ251cGAse3VzZXIscHJvZmlsZVBpY1VybH0pXHJcbiAgICAgIHNldFRva2VuKHJlcy5kYXRhKVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgc2V0RXJyb3IoY2F0Y2hFcnJvcnMoZXJyb3IpKVxyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyPWFzeW5jICh1c2VyLHNldEVycm9yLHNldExvYWRpbmcpPT57XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICB0cnlcclxuICAgIHtcclxuICAgICAgY29uc3QgcmVzPWF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL2F1dGhgLHt1c2VyfSlcclxuICAgICAgc2V0VG9rZW4ocmVzLmRhdGEpXHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnJvcil7XHJcbiAgICBzZXRFcnJvcihjYXRjaEVycm9ycyhlcnJvcikpXHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZGlyZWN0VXNlcj0oY3R4LGxvY2F0aW9uKT0+e1xyXG4gIGlmKGN0eC5yZXEpXHJcbiAge1xyXG4gICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLHtMb2NhdGlvbjpsb2NhdGlvbn0pXHJcbiAgICBjdHgucmVzLmVuZCgpXHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICBSb3V0ZXIucHVzaChsb2NhdGlvbilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dPdXQ9KGVtYWlsKT0+e1xyXG4gIGNvb2tpZS5zZXQoXCJ1c2VyRW1haWxcIixlbWFpbClcclxuICBjb29raWUucmVtb3ZlKFwidG9rZW5cIilcclxuICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICBSb3V0ZXIucmVsb2FkKCk7XHJcbn1cclxuXHJcbmNvbnN0IHNldFRva2VuPSh0b2tlbik9PntcclxuICAgY29va2llLnNldChcInRva2VuXCIsdG9rZW4pO1xyXG4gICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbn0iLCJjb25zdCBiYXNlVXJsID1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZVVybDtcclxuIiwiY29uc3QgY2F0Y2hFcnJvcnMgPSAoZXJyb3IpID0+IHtcclxuICBsZXQgZXJyb3JNc2cgPSAnJztcclxuXHJcbiAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAvLyBJZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciBub3QgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZSBpbiB0aGUgcmFuZ2Ugb2YgMnh4XHJcblxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgLy8gaWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIG5vIHJlc3BvbnNlIHdhcyByZWNldmllZCBmcm9tIHNlcnZlclxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiBzb21ldGhpbmcgZWxzZSBoYXBwZW5lZCB3aGlsZSBtYWtpbmcgdGhlIHJlcXVlc3RcclxuICAgIGVycm9yTXNnID0gZXJyb3IubWVzc2FnZTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiByZXR1cm4gZXJyb3JNc2c7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXRjaEVycm9ycztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdGpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvQXBwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L1JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9