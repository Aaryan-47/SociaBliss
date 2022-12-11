(function() {
var exports = {};
exports.id = "pages/notifications";
exports.ids = ["pages/notifications"];
exports.modules = {

/***/ "./components/Notifications/CommentNotification.js":
/*!*********************************************************!*\
  !*** ./components/Notifications/CommentNotification.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Notifications\\CommentNotification.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function CommentNotification({
  notification
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Event, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Label, {
    image: notification.user.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Summary, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.User, {
    as: "a",
    href: `/${notification.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, notification.user.name), " ", "commented on your ", __jsx("a", {
    href: `/post/${notification.post._id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }, "post."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Date, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__.default)(notification.date)))), notification.post.picUrl && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Extra, {
    images: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: `/post/${notification.post._id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: notification.post.picUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Extra, {
    text: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, notification.text)))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CommentNotification);

/***/ }),

/***/ "./components/Notifications/FollowerNotification.js":
/*!**********************************************************!*\
  !*** ./components/Notifications/FollowerNotification.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Notifications\\FollowerNotification.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function FollowerNotification({
  notification,
  loggedUserFollowStats,
  setUserFollowStats
}) {
  const {
    0: disabled,
    1: setDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === notification.user._id).length > 0;
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Event, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Label, {
    image: notification.user.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Summary, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.User, {
    as: "a",
    href: `/${notification.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, notification.user.name), " ", "started following you.", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Date, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__.default)(notification.date)))), __jsx("div", {
    style: {
      position: "absolute",
      right: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    size: "small",
    compact: true,
    icon: isFollowing ? "check circle" : "add user",
    color: isFollowing ? "instagram" : "twitter",
    disabled: disabled,
    onClick: async () => {
      setDisabled(true);
      isFollowing ? await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_3__.unfollowUser)(notification.user._id, setUserFollowStats) : await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_3__.followUser)(notification.user._id, setUserFollowStats);
      setDisabled(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FollowerNotification);

/***/ }),

/***/ "./components/Notifications/LikeNotification.js":
/*!******************************************************!*\
  !*** ./components/Notifications/LikeNotification.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Notifications\\LikeNotification.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function LikeNotification({
  notification
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Event, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Label, {
    image: notification.user.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Summary, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.User, {
    as: "a",
    href: `/${notification.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, notification.user.name), " ", "liked your ", __jsx("a", {
    href: `/post/${notification.post._id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 26
    }
  }, "post."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Date, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__.default)(notification.date)))), notification.post.picUrl && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Extra, {
    images: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: `/post/${notification.post._id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: notification.post.picUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LikeNotification);

/***/ }),

/***/ "./pages/notifications.js":
/*!********************************!*\
  !*** ./pages/notifications.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Notifications_LikeNotification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Notifications/LikeNotification */ "./components/Notifications/LikeNotification.js");
/* harmony import */ var _components_Notifications_CommentNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Notifications/CommentNotification */ "./components/Notifications/CommentNotification.js");
/* harmony import */ var _components_Notifications_FollowerNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Notifications/FollowerNotification */ "./components/Notifications/FollowerNotification.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\pages\\notifications.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);











function Notifications({
  notifications,
  errorLoading,
  user,
  userFollowStats
}) {
  const {
    0: loggedUserFollowStats,
    1: setUserFollowStats
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(userFollowStats);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const notificationRead = async () => {
      try {
        await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default())}/api/notifications`, {}, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_5___default().get("token")
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    notificationRead();
  }, []);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
    style: {
      marginTop: "1.5rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, notifications.length > 0 ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "teal",
    raised: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      maxHeight: "40rem",
      overflow: "auto",
      height: "40rem",
      position: "relative",
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed, {
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, notifications.map(notification => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, notification.type === "newLike" && notification.post !== null && __jsx(_components_Notifications_LikeNotification__WEBPACK_IMPORTED_MODULE_7__.default, {
    key: notification._id,
    notification: notification,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 23
    }
  }), notification.type === "newComment" && notification.post !== null && __jsx(_components_Notifications_CommentNotification__WEBPACK_IMPORTED_MODULE_8__.default, {
    key: notification._id,
    notification: notification,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 23
    }
  }), notification.type === "newFollower" && __jsx(_components_Notifications_FollowerNotification__WEBPACK_IMPORTED_MODULE_9__.default, {
    key: notification._id,
    notification: notification,
    loggedUserFollowStats: loggedUserFollowStats,
    setUserFollowStats: setUserFollowStats,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 23
    }
  })))))) : __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_6__.NoNotifications, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  })));
}

Notifications.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default())}/api/notifications`, {
      headers: {
        Authorization: token
      }
    });
    return {
      notifications: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Notifications);

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

/***/ "./utils/profileActions.js":
/*!*********************************!*\
  !*** ./utils/profileActions.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "followUser": function() { return /* binding */ followUser; },
/* harmony export */   "unfollowUser": function() { return /* binding */ unfollowUser; },
/* harmony export */   "profileUpdate": function() { return /* binding */ profileUpdate; },
/* harmony export */   "passwordUpdate": function() { return /* binding */ passwordUpdate; },
/* harmony export */   "toggleMessagePopup": function() { return /* binding */ toggleMessagePopup; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: `${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/profile`,
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("token")
  }
});
const followUser = async (userToFollowId, setUserFollowStats) => {
  try {
    await Axios.post(`/follow/${userToFollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: [...prev.following, {
        user: userToFollowId
      }]
    }));
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const unfollowUser = async (userToUnfollowId, setUserFollowStats) => {
  try {
    await Axios.put(`/unfollow/${userToUnfollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: prev.following.filter(following => following.user !== userToUnfollowId)
    }));
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const profileUpdate = async (profile, setLoading, setError, profilePicUrl) => {
  try {
    const {
      bio,
      facebook,
      youtube,
      twitter,
      instagram
    } = profile;
    await Axios.post(`/update`, {
      bio,
      facebook,
      youtube,
      twitter,
      instagram,
      profilePicUrl
    });
    setLoading(false);
    next_router__WEBPACK_IMPORTED_MODULE_4___default().reload();
  } catch (error) {
    setError((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
    setLoading(false);
  }
};
const passwordUpdate = async (setSuccess, userPasswords) => {
  const {
    currentPassword,
    newPassword
  } = userPasswords;

  try {
    await Axios.post(`/settings/password`, {
      currentPassword,
      newPassword
    });
    setSuccess(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const toggleMessagePopup = async (popupSetting, setPopupSetting, setSuccess) => {
  try {
    await Axios.post(`/settings/messagePopup`);
    setPopupSetting(!popupSetting);
    setSuccess(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-moment");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_NoData_js-utils_calculateTime_js"], function() { return __webpack_exec__("./pages/notifications.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMvQ29tbWVudE5vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMvRm9sbG93ZXJOb3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25zL0xpa2VOb3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vcGFnZXMvbm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkNvbW1lbnROb3RpZmljYXRpb24iLCJub3RpZmljYXRpb24iLCJ1c2VyIiwicHJvZmlsZVBpY1VybCIsInVzZXJuYW1lIiwibmFtZSIsInBvc3QiLCJfaWQiLCJjYWxjdWxhdGVUaW1lIiwiZGF0ZSIsInBpY1VybCIsInRleHQiLCJGb2xsb3dlck5vdGlmaWNhdGlvbiIsImxvZ2dlZFVzZXJGb2xsb3dTdGF0cyIsInNldFVzZXJGb2xsb3dTdGF0cyIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJ1c2VTdGF0ZSIsImlzRm9sbG93aW5nIiwiZm9sbG93aW5nIiwibGVuZ3RoIiwiZmlsdGVyIiwicG9zaXRpb24iLCJyaWdodCIsInVuZm9sbG93VXNlciIsImZvbGxvd1VzZXIiLCJMaWtlTm90aWZpY2F0aW9uIiwiTm90aWZpY2F0aW9ucyIsIm5vdGlmaWNhdGlvbnMiLCJlcnJvckxvYWRpbmciLCJ1c2VyRm9sbG93U3RhdHMiLCJ1c2VFZmZlY3QiLCJub3RpZmljYXRpb25SZWFkIiwiYXhpb3MiLCJiYXNlVXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb29raWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW5Ub3AiLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsImhlaWdodCIsIndpZHRoIiwibWFwIiwidHlwZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInRva2VuIiwicGFyc2VDb29raWVzIiwicmVzIiwiZGF0YSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYXRjaEVycm9ycyIsImVycm9yTXNnIiwicmVzcG9uc2UiLCJyZXF1ZXN0IiwibWVzc2FnZSIsIkF4aW9zIiwiYmFzZVVSTCIsInVzZXJUb0ZvbGxvd0lkIiwicHJldiIsImFsZXJ0IiwidXNlclRvVW5mb2xsb3dJZCIsInB1dCIsInByb2ZpbGVVcGRhdGUiLCJwcm9maWxlIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwiYmlvIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwidHdpdHRlciIsImluc3RhZ3JhbSIsIlJvdXRlciIsInBhc3N3b3JkVXBkYXRlIiwic2V0U3VjY2VzcyIsInVzZXJQYXNzd29yZHMiLCJjdXJyZW50UGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsInRvZ2dsZU1lc3NhZ2VQb3B1cCIsInBvcHVwU2V0dGluZyIsInNldFBvcHVwU2V0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLG1CQUFULENBQTZCO0FBQUVDO0FBQUYsQ0FBN0IsRUFBK0M7QUFDN0MsU0FDRSxxRUFDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQVksU0FBSyxFQUFFQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JDLGFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFFQUNFLE1BQUMsd0RBQUQ7QUFBVyxNQUFFLEVBQUMsR0FBZDtBQUFrQixRQUFJLEVBQUcsSUFBR0YsWUFBWSxDQUFDQyxJQUFiLENBQWtCRSxRQUFTLEVBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsWUFBWSxDQUFDQyxJQUFiLENBQWtCRyxJQURyQixDQURGLEVBR2UsR0FIZix3QkFJb0I7QUFBRyxRQUFJLEVBQUcsU0FBUUosWUFBWSxDQUFDSyxJQUFiLENBQWtCQyxHQUFJLEVBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKcEIsRUFLRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWUMsNkRBQWEsQ0FBQ1AsWUFBWSxDQUFDUSxJQUFkLENBQXpCLENBTEYs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O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvbm90aWZpY2F0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGl2aWRlciwgRmVlZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xyXG5cclxuZnVuY3Rpb24gQ29tbWVudE5vdGlmaWNhdGlvbih7IG5vdGlmaWNhdGlvbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGZWVkLkV2ZW50PlxyXG4gICAgICAgIDxGZWVkLkxhYmVsIGltYWdlPXtub3RpZmljYXRpb24udXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG4gICAgICAgIDxGZWVkLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8RmVlZC5TdW1tYXJ5PlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxGZWVkLlVzZXIgYXM9XCJhXCIgaHJlZj17YC8ke25vdGlmaWNhdGlvbi51c2VyLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAge25vdGlmaWNhdGlvbi51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9GZWVkLlVzZXI+e1wiIFwifVxyXG4gICAgICAgICAgICAgIGNvbW1lbnRlZCBvbiB5b3VyIDxhIGhyZWY9e2AvcG9zdC8ke25vdGlmaWNhdGlvbi5wb3N0Ll9pZH1gfT5wb3N0LjwvYT5cclxuICAgICAgICAgICAgICA8RmVlZC5EYXRlPntjYWxjdWxhdGVUaW1lKG5vdGlmaWNhdGlvbi5kYXRlKX08L0ZlZWQuRGF0ZT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L0ZlZWQuU3VtbWFyeT5cclxuXHJcbiAgICAgICAgICB7bm90aWZpY2F0aW9uLnBvc3QucGljVXJsICYmIChcclxuICAgICAgICAgICAgPEZlZWQuRXh0cmEgaW1hZ2VzPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2AvcG9zdC8ke25vdGlmaWNhdGlvbi5wb3N0Ll9pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtub3RpZmljYXRpb24ucG9zdC5waWNVcmx9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0ZlZWQuRXh0cmE+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPEZlZWQuRXh0cmEgdGV4dD5cclxuICAgICAgICAgICAgPHN0cm9uZz57bm90aWZpY2F0aW9uLnRleHR9PC9zdHJvbmc+XHJcbiAgICAgICAgICA8L0ZlZWQuRXh0cmE+XHJcbiAgICAgICAgPC9GZWVkLkNvbnRlbnQ+XHJcbiAgICAgIDwvRmVlZC5FdmVudD5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnROb3RpZmljYXRpb247XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGZWVkLCBCdXR0b24sIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuaW1wb3J0IHsgZm9sbG93VXNlciwgdW5mb2xsb3dVc2VyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBGb2xsb3dlck5vdGlmaWNhdGlvbih7XHJcbiAgbm90aWZpY2F0aW9uLFxyXG4gIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cyxcclxuICBzZXRVc2VyRm9sbG93U3RhdHNcclxufSkge1xyXG4gIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpc0ZvbGxvd2luZyA9XHJcbiAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmxlbmd0aCA+IDAgJiZcclxuICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcuZmlsdGVyKFxyXG4gICAgICBmb2xsb3dpbmcgPT4gZm9sbG93aW5nLnVzZXIgPT09IG5vdGlmaWNhdGlvbi51c2VyLl9pZFxyXG4gICAgKS5sZW5ndGggPiAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZlZWQuRXZlbnQ+XHJcbiAgICAgICAgPEZlZWQuTGFiZWwgaW1hZ2U9e25vdGlmaWNhdGlvbi51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgPEZlZWQuQ29udGVudD5cclxuICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEZlZWQuVXNlciBhcz1cImFcIiBocmVmPXtgLyR7bm90aWZpY2F0aW9uLnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICA8L0ZlZWQuVXNlcj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgc3RhcnRlZCBmb2xsb3dpbmcgeW91LlxyXG4gICAgICAgICAgICAgIDxGZWVkLkRhdGU+e2NhbGN1bGF0ZVRpbWUobm90aWZpY2F0aW9uLmRhdGUpfTwvRmVlZC5EYXRlPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDwvRmVlZC5TdW1tYXJ5PlxyXG5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgIGNvbXBhY3RcclxuICAgICAgICAgICAgICBpY29uPXtpc0ZvbGxvd2luZyA/IFwiY2hlY2sgY2lyY2xlXCIgOiBcImFkZCB1c2VyXCJ9XHJcbiAgICAgICAgICAgICAgY29sb3I9e2lzRm9sbG93aW5nID8gXCJpbnN0YWdyYW1cIiA6IFwidHdpdHRlclwifVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXREaXNhYmxlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpc0ZvbGxvd2luZ1xyXG4gICAgICAgICAgICAgICAgICA/IGF3YWl0IHVuZm9sbG93VXNlcihub3RpZmljYXRpb24udXNlci5faWQsIHNldFVzZXJGb2xsb3dTdGF0cylcclxuICAgICAgICAgICAgICAgICAgOiBhd2FpdCBmb2xsb3dVc2VyKG5vdGlmaWNhdGlvbi51c2VyLl9pZCwgc2V0VXNlckZvbGxvd1N0YXRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXREaXNhYmxlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRmVlZC5Db250ZW50PlxyXG4gICAgICA8L0ZlZWQuRXZlbnQ+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dlck5vdGlmaWNhdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGZWVkLCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XHJcblxyXG5mdW5jdGlvbiBMaWtlTm90aWZpY2F0aW9uKHsgbm90aWZpY2F0aW9uIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZlZWQuRXZlbnQ+XHJcbiAgICAgICAgPEZlZWQuTGFiZWwgaW1hZ2U9e25vdGlmaWNhdGlvbi51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgPEZlZWQuQ29udGVudD5cclxuICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEZlZWQuVXNlciBhcz1cImFcIiBocmVmPXtgLyR7bm90aWZpY2F0aW9uLnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICA8L0ZlZWQuVXNlcj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgbGlrZWQgeW91ciA8YSBocmVmPXtgL3Bvc3QvJHtub3RpZmljYXRpb24ucG9zdC5faWR9YH0+cG9zdC48L2E+XHJcbiAgICAgICAgICAgICAgPEZlZWQuRGF0ZT57Y2FsY3VsYXRlVGltZShub3RpZmljYXRpb24uZGF0ZSl9PC9GZWVkLkRhdGU+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgPC9GZWVkLlN1bW1hcnk+XHJcblxyXG4gICAgICAgICAge25vdGlmaWNhdGlvbi5wb3N0LnBpY1VybCAmJiAoXHJcbiAgICAgICAgICAgIDxGZWVkLkV4dHJhIGltYWdlcz5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtgL3Bvc3QvJHtub3RpZmljYXRpb24ucG9zdC5faWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bm90aWZpY2F0aW9uLnBvc3QucGljVXJsfSAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9GZWVkLkV4dHJhPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0ZlZWQuQ29udGVudD5cclxuICAgICAgPC9GZWVkLkV2ZW50PlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlrZU5vdGlmaWNhdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmVlZCwgU2VnbWVudCwgRGl2aWRlciwgQ29udGFpbmVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IE5vTm90aWZpY2F0aW9ucyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGFcIjtcclxuaW1wb3J0IExpa2VOb3RpZmljYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9MaWtlTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBDb21tZW50Tm90aWZpY2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMvQ29tbWVudE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgRm9sbG93ZXJOb3RpZmljYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9Gb2xsb3dlck5vdGlmaWNhdGlvblwiO1xyXG5cclxuZnVuY3Rpb24gTm90aWZpY2F0aW9ucyh7IG5vdGlmaWNhdGlvbnMsIGVycm9yTG9hZGluZywgdXNlciwgdXNlckZvbGxvd1N0YXRzIH0pIHtcclxuICBjb25zdCBbbG9nZ2VkVXNlckZvbGxvd1N0YXRzLCBzZXRVc2VyRm9sbG93U3RhdHNdID0gdXNlU3RhdGUodXNlckZvbGxvd1N0YXRzKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvblJlYWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgIGAke2Jhc2VVcmx9L2FwaS9ub3RpZmljYXRpb25zYCxcclxuICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9IH1cclxuICAgICAgICApO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBub3RpZmljYXRpb25SZWFkKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMS41cmVtXCIgfX0+XHJcbiAgICAgICAge25vdGlmaWNhdGlvbnMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIDxTZWdtZW50IGNvbG9yPVwidGVhbFwiIHJhaXNlZD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiNDByZW1cIixcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MHJlbVwiLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RmVlZCBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb25zLm1hcChub3RpZmljYXRpb24gPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb24udHlwZSA9PT0gXCJuZXdMaWtlXCIgJiYgbm90aWZpY2F0aW9uLnBvc3QgIT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpa2VOb3RpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtub3RpZmljYXRpb24uX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb249e25vdGlmaWNhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge25vdGlmaWNhdGlvbi50eXBlID09PSBcIm5ld0NvbW1lbnRcIiAmJiBub3RpZmljYXRpb24ucG9zdCAhPT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudE5vdGlmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e25vdGlmaWNhdGlvbi5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbj17bm90aWZpY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uLnR5cGUgPT09IFwibmV3Rm9sbG93ZXJcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9sbG93ZXJOb3RpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtub3RpZmljYXRpb24uX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb249e25vdGlmaWNhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzPXtsb2dnZWRVc2VyRm9sbG93U3RhdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJGb2xsb3dTdGF0cz17c2V0VXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvRmVlZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxOb05vdGlmaWNhdGlvbnMgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbk5vdGlmaWNhdGlvbnMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9ub3RpZmljYXRpb25zYCwge1xyXG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IG5vdGlmaWNhdGlvbnM6IHJlcy5kYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IGVycm9yTG9hZGluZzogdHJ1ZSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbnM7XHJcbiIsImNvbnN0IGJhc2VVcmwgPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVcmw7XHJcbiIsImNvbnN0IGNhdGNoRXJyb3JzID0gKGVycm9yKSA9PiB7XHJcbiAgbGV0IGVycm9yTXNnID0gJyc7XHJcblxyXG4gIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgLy8gSWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgbm90IHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGUgaW4gdGhlIHJhbmdlIG9mIDJ4eFxyXG5cclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgIC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCBubyByZXNwb25zZSB3YXMgcmVjZXZpZWQgZnJvbSBzZXJ2ZXJcclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVxdWVzdDtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaWYgc29tZXRoaW5nIGVsc2UgaGFwcGVuZWQgd2hpbGUgbWFraW5nIHRoZSByZXF1ZXN0XHJcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gcmV0dXJuIGVycm9yTXNnO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xyXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSBcIi4vY2F0Y2hFcnJvcnNcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogYCR7YmFzZVVybH0vYXBpL3Byb2ZpbGVgLFxyXG4gIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZm9sbG93VXNlciA9IGFzeW5jICh1c2VyVG9Gb2xsb3dJZCwgc2V0VXNlckZvbGxvd1N0YXRzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLnBvc3QoYC9mb2xsb3cvJHt1c2VyVG9Gb2xsb3dJZH1gKTtcclxuXHJcbiAgICBzZXRVc2VyRm9sbG93U3RhdHMocHJldiA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBmb2xsb3dpbmc6IFsuLi5wcmV2LmZvbGxvd2luZywgeyB1c2VyOiB1c2VyVG9Gb2xsb3dJZCB9XVxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1bmZvbGxvd1VzZXIgPSBhc3luYyAodXNlclRvVW5mb2xsb3dJZCwgc2V0VXNlckZvbGxvd1N0YXRzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLnB1dChgL3VuZm9sbG93LyR7dXNlclRvVW5mb2xsb3dJZH1gKTtcclxuXHJcbiAgICBzZXRVc2VyRm9sbG93U3RhdHMocHJldiA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBmb2xsb3dpbmc6IHByZXYuZm9sbG93aW5nLmZpbHRlcihmb2xsb3dpbmcgPT4gZm9sbG93aW5nLnVzZXIgIT09IHVzZXJUb1VuZm9sbG93SWQpXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVVcGRhdGUgPSBhc3luYyAocHJvZmlsZSwgc2V0TG9hZGluZywgc2V0RXJyb3IsIHByb2ZpbGVQaWNVcmwpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBiaW8sIGZhY2Vib29rLCB5b3V0dWJlLCB0d2l0dGVyLCBpbnN0YWdyYW0gfSA9IHByb2ZpbGU7XHJcblxyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL3VwZGF0ZWAsIHtcclxuICAgICAgYmlvLFxyXG4gICAgICBmYWNlYm9vayxcclxuICAgICAgeW91dHViZSxcclxuICAgICAgdHdpdHRlcixcclxuICAgICAgaW5zdGFncmFtLFxyXG4gICAgICBwcm9maWxlUGljVXJsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIFJvdXRlci5yZWxvYWQoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgc2V0RXJyb3IoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwYXNzd29yZFVwZGF0ZSA9IGFzeW5jIChzZXRTdWNjZXNzLCB1c2VyUGFzc3dvcmRzKSA9PiB7XHJcbiAgY29uc3QgeyBjdXJyZW50UGFzc3dvcmQsIG5ld1Bhc3N3b3JkIH0gPSB1c2VyUGFzc3dvcmRzO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvc2V0dGluZ3MvcGFzc3dvcmRgLCB7IGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQgfSk7XHJcblxyXG4gICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlTWVzc2FnZVBvcHVwID0gYXN5bmMgKHBvcHVwU2V0dGluZywgc2V0UG9wdXBTZXR0aW5nLCBzZXRTdWNjZXNzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLnBvc3QoYC9zZXR0aW5ncy9tZXNzYWdlUG9wdXBgKTtcclxuXHJcbiAgICBzZXRQb3B1cFNldHRpbmcoIXBvcHVwU2V0dGluZyk7XHJcbiAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=