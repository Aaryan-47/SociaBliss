(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Home/MessageNotificationModal.js":
/*!*****************************************************!*\
  !*** ./components/Home/MessageNotificationModal.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Home\\MessageNotificationModal.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function MessageNotificationModal({
  socket,
  showNewMessageModal,
  newMessageModal,
  newMessageReceived,
  user
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const onModalClose = () => showNewMessageModal(false);

  const formSubmit = e => {
    e.preventDefault();

    if (socket.current) {
      socket.current.emit("sendMsgFromNotification", {
        userId: user._id,
        msgSendToUserId: newMessageReceived.sender,
        msg: text
      });
      socket.current.on("msgSentFromNotification", () => {
        showNewMessageModal(false);
      });
    }
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    size: "small",
    open: newMessageModal,
    onClose: onModalClose,
    closeIcon: true,
    closeOnDimmerClick: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Header, {
    content: `New Message from ${newMessageReceived.senderName}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bubbleWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inlineContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "inlineIcon",
    src: newMessageReceived.senderProfilePic,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "otherBubble other",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, newMessageReceived.msg), __jsx("span", {
    className: "other",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__.default)(newMessageReceived.date))), __jsx("div", {
    style: {
      position: "sticky",
      bottom: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    secondary: true,
    color: "teal",
    attached: "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    reply: true,
    onSubmit: formSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    size: "large",
    placeholder: "Send New Message",
    value: text,
    onChange: e => setText(e.target.value),
    action: {
      color: "blue",
      icon: "telegram plane",
      disabled: text === "",
      loading: loading
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  })))), __jsx("div", {
    style: {
      marginTop: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: `/messages?message=${newMessageReceived.sender}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "View All Messages")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }), __jsx(Instructions, {
    username: user.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  })))));
}

const Instructions = ({
  username
}) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 3
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  name: "help",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 7
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 7
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 9
  }
}, "If you do not like this popup to appear when you receive a new message:"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  name: "hand point right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 7
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 7
  }
}, "You can disable it by going to", __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
  href: `/${username}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 11
  }
}, " Account ")), "Page and clicking on Settings Tab.")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  name: "hand point right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 7
  }
}), "Inside the menu,there is an setting named: Show New Message Popup?"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  name: "hand point right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 7
  }
}), "Just toggle the setting to disable/enable the Message Popup to appear."));

/* harmony default export */ __webpack_exports__["default"] = (MessageNotificationModal);

/***/ }),

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
/* harmony export */   "NoProfile": function() { return /* binding */ NoProfile; },
/* harmony export */   "NoNotifications": function() { return /* binding */ NoNotifications; },
/* harmony export */   "NoPostFound": function() { return /* binding */ NoPostFound; }
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
  content: `User does not have followers`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}), followingComponent && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  icon: "user outline",
  info: true,
  content: `User does not follow any users`,
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
const NoNotifications = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  content: "No Notifications",
  icon: "smile",
  info: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 3
  }
});
const NoPostFound = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Post Found.",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 3
  }
});

/***/ }),

/***/ "./components/Layout/PlaceHolderGroup.js":
/*!***********************************************!*\
  !*** ./components/Layout/PlaceHolderGroup.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceHolderPosts": function() { return /* binding */ PlaceHolderPosts; },
/* harmony export */   "PlaceHolderSuggestions": function() { return /* binding */ PlaceHolderSuggestions; },
/* harmony export */   "PlaceHolderNotifications": function() { return /* binding */ PlaceHolderNotifications; },
/* harmony export */   "EndMessage": function() { return /* binding */ EndMessage; },
/* harmony export */   "LikesPlaceHolder": function() { return /* binding */ LikesPlaceHolder; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Layout\\PlaceHolderGroup.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const PlaceHolderPosts = () => (0,lodash__WEBPACK_IMPORTED_MODULE_2__.range)(1, 3).map(item => __jsx("div", {
  key: item,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
  fluid: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Header, {
  image: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 11
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 11
  }
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Paragraph, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 11
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 11
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 11
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 11
  }
}))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
  hidden: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }
})));
const PlaceHolderSuggestions = () => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
  color: "red",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Image, {
  square: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 11
  }
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 11
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Header, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 13
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {
  length: "medium",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 15
  }
})))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
  extra: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
  disabled: true,
  circular: true,
  size: "small",
  icon: "add user",
  content: "Follow",
  color: "twitter",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 11
  }
})))));
const PlaceHolderNotifications = () => (0,lodash__WEBPACK_IMPORTED_MODULE_2__.range)(1, 10).map(item => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
  key: item,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 7
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Header, {
  image: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 9
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 11
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 11
  }
}))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
  hidden: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 7
  }
})));
const EndMessage = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
  textAlign: "center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 3
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  name: "refresh",
  size: "large",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
  hidden: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }
}));
const LikesPlaceHolder = () => (0,lodash__WEBPACK_IMPORTED_MODULE_2__.range)(1, 6).map(item => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
  key: item,
  style: {
    minWidth: "200px"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Header, {
  image: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 7
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {
  length: "full",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 9
  }
}))));

/***/ }),

/***/ "./components/Layout/Toastr.js":
/*!*************************************!*\
  !*** ./components/Layout/Toastr.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDeleteToastr": function() { return /* binding */ PostDeleteToastr; },
/* harmony export */   "ErrorToastr": function() { return /* binding */ ErrorToastr; },
/* harmony export */   "MsgSentToastr": function() { return /* binding */ MsgSentToastr; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Layout\\Toastr.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

const PostDeleteToastr = () => {
  return __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.info("Deleted Successfully", {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  }));
};
const ErrorToastr = ({
  error
}) => {
  return __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  }));
};
const MsgSentToastr = () => __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: false,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 3
  }
}, react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Sent successfully", {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined
}));

/***/ }),

/***/ "./components/Post/CardPost.js":
/*!*************************************!*\
  !*** ./components/Post/CardPost.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");
/* harmony import */ var _ImageModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ImageModal */ "./components/Post/ImageModal.js");
/* harmony import */ var _NoImageModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NoImageModal */ "./components/Post/NoImageModal.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Post\\CardPost.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












function CardPost({
  post,
  user,
  setPosts,
  setShowToastr
}) {
  const {
    0: likes,
    1: setLikes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(post.likes);
  const isLiked = likes.length > 0 && likes.filter(like => like.user === user._id).length > 0;
  const {
    0: comments,
    1: setComments
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(post.comments);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const addPropsToModal = () => ({
    post,
    user,
    setLikes,
    likes,
    isLiked,
    comments,
    setComments
  });

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showModal && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    open: showModal,
    closeIcon: true,
    closeOnDimmerClick: true,
    onClose: () => setShowModal(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, post.picUrl ? __jsx(_ImageModal__WEBPACK_IMPORTED_MODULE_8__.default, _extends({}, addPropsToModal(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  })) : __jsx(_NoImageModal__WEBPACK_IMPORTED_MODULE_9__.default, _extends({}, addPropsToModal(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
    color: "teal",
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, post.picUrl && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: post.picUrl,
    style: {
      cursor: "pointer"
    },
    floated: "left",
    wrapped: true,
    ui: false,
    alt: "PostImage",
    onClick: () => setShowModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    floated: "left",
    src: post.user.profilePicUrl,
    avatar: true,
    circular: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), (user.role === "root" || post.user._id === user._id) && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Popup, {
    on: "click",
    position: "top right",
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
      src: "/deleteIcon.svg",
      style: {
        cursor: "pointer"
      },
      size: "mini",
      floated: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    as: "h4",
    content: "Are you sure?",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, "This action is irreversible!"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    color: "red",
    icon: "trash",
    content: "Delete",
    onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_6__.deletePost)(post._id, setPosts, setShowToastr),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
    href: `/${post.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, post.user.name))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(post.createdAt)), post.location && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
    content: post.location,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 31
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Description, {
    style: {
      fontSize: "17px",
      letterSpacing: "0.1px",
      wordSpacing: "0.35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, post.text)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
    extra: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: isLiked ? "heart" : "heart outline",
    color: "red",
    style: {
      cursor: "pointer"
    },
    onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_6__.likePost)(post._id, user._id, setLikes, isLiked ? false : true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }), __jsx(_LikesList__WEBPACK_IMPORTED_MODULE_7__.default, {
    postId: post._id,
    trigger: likes.length > 0 && __jsx("span", {
      className: "spanLikesList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 19
      }
    }, `${likes.length} ${likes.length === 1 ? "like" : "likes"}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "comment outline",
    style: {
      marginLeft: "7px"
    },
    color: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }), comments.length > 0 && comments.map((comment, i) => i < 3 && __jsx(_PostComments__WEBPACK_IMPORTED_MODULE_2__.default, {
    key: comment._id,
    comment: comment,
    postId: post._id,
    user: user,
    setComments: setComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  })), comments.length > 3 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    content: "View More",
    color: "teal",
    basic: true,
    circular: true,
    onClick: () => setShowModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }), __jsx(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__.default, {
    user: user,
    postId: post._id,
    setComments: setComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CardPost);

/***/ }),

/***/ "./components/Post/CommentInputField.js":
/*!**********************************************!*\
  !*** ./components/Post/CommentInputField.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Post\\CommentInputField.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function CommentInputField({
  postId,
  user,
  setComments
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    reply: true,
    onSubmit: async e => {
      e.preventDefault();
      setLoading(true);
      await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_2__.postComment)(postId, user, text, setComments, setText);
      setLoading(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: "Add Comment",
    action: {
      color: "blue",
      icon: "edit",
      loading: loading,
      disabled: text === "" || loading
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CommentInputField);

/***/ }),

/***/ "./components/Post/CreatePost.js":
/*!***************************************!*\
  !*** ./components/Post/CreatePost.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-config */ "./firebase-config.js");
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Post\\CreatePost.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function CreatePost({
  user,
  setPosts
}) {
  const {
    0: newPost,
    1: setNewPost
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    text: "",
    location: ""
  });
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: picUrl,
    1: setPicUrl
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setNewPost(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const addStyles = () => ({
    textAlign: "center",
    height: "150px",
    width: "150px",
    border: "dotted",
    paddingTop: media === null && "60px",
    cursor: "pointer",
    borderColor: highlighted ? "green" : "black"
  });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    if (media !== null) {
      const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.storage, `/images/${media.name + (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)()}`); //console.log(imageRef);

      (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(imageRef, media).then(() => {
        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(imageRef).then(async url => {
          await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_5__.submitNewPost)(newPost.text, newPost.location, url, setPosts, setNewPost, setError);
          console.log(url);
        }).catch(err => {
          console.log(err);
        });
      });
    } else {
      await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_5__.submitNewPost)(newPost.text, newPost.location, picUrl, setPosts, setNewPost, setError);
    }

    setMedia(null);
    setMediaPreview(null);
    setLoading(false);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    error: error !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    onDismiss: () => setError(null),
    content: error,
    header: "Oops!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: user.profilePicUrl,
    circular: true,
    avatar: true,
    inline: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.TextArea, {
    placeholder: "Whats Happening",
    name: "text",
    value: newPost.text,
    onChange: handleChange,
    rows: 4,
    width: 14,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    value: newPost.location,
    name: "location",
    onChange: handleChange,
    label: "Add Location",
    icon: "map marker alternate",
    placeholder: "Want to add Location?",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }), __jsx("input", {
    ref: inputRef,
    onChange: handleChange,
    name: "media",
    style: {
      display: "none"
    },
    type: "file",
    accept: "image/*",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  })), __jsx("div", {
    onClick: () => inputRef.current.click(),
    style: addStyles(),
    onDrag: e => {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: e => {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: e => {
      e.preventDefault();
      setHighlighted(true);
      const droppedFile = Array.from(e.dataTransfer.files);
      setMedia(droppedFile[0]);
      setMediaPreview(URL.createObjectURL(droppedFile[0]));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, media === null ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "plus",
    size: "big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    style: {
      height: "150px",
      width: "150px"
    },
    src: mediaPreview,
    alt: "PostImage",
    centered: true,
    size: "medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    circular: true,
    disabled: newPost.text === "" || loading,
    content: __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 20
      }
    }, "Post"),
    style: {
      backgroundColor: "#1DA1F2",
      color: "white"
    },
    icon: "send",
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CreatePost);

/***/ }),

/***/ "./components/Post/ImageModal.js":
/*!***************************************!*\
  !*** ./components/Post/ImageModal.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Post\\ImageModal.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









function ImageModal({
  post,
  user,
  setLikes,
  likes,
  isLiked,
  comments,
  setComments
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
    columns: 2,
    stackable: true,
    relaxed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Content, {
    image: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    wrapped: true,
    size: "large",
    src: post.picUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    floated: "left",
    avatar: true,
    src: post.user.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
    href: `/${post.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, post.user.name))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(post.createdAt)), post.location && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
    content: post.location,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Description, {
    style: {
      fontSize: "17px",
      letterSpacing: "0.1px",
      wordSpacing: "0.35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, post.text)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
    extra: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: isLiked ? "heart" : "heart outline",
    color: "red",
    style: {
      cursor: "pointer"
    },
    onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_6__.likePost)(post._id, user._id, setLikes, isLiked ? false : true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }), __jsx(_LikesList__WEBPACK_IMPORTED_MODULE_7__.default, {
    postId: post._id,
    trigger: likes.length > 0 && __jsx("span", {
      className: "spanLikesList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }
    }, `${likes.length} ${likes.length === 1 ? "like" : "likes"}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }), __jsx("div", {
    style: {
      overflow: "auto",
      height: comments.length > 2 ? "200px" : "60px",
      marginBottom: "8px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, comments.length > 0 && comments.map(comment => __jsx(_PostComments__WEBPACK_IMPORTED_MODULE_2__.default, {
    key: comment._id,
    comment: comment,
    postId: post._id,
    user: user,
    setComments: setComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }))), __jsx(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__.default, {
    postId: post._id,
    user: user,
    setComments: setComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ImageModal);

/***/ }),

/***/ "./components/Post/LikesList.js":
/*!**************************************!*\
  !*** ./components/Post/LikesList.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Post\\LikesList.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









function LikesList({
  postId,
  trigger
}) {
  const {
    0: likesList,
    1: setLikesList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const getLikesList = async () => {
    setLoading(true);

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default())}/api/posts/like/${postId}`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_5___default().get("token")
        }
      });
      setLikesList(res.data);
    } catch (error) {
      alert((0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__.default)(error));
    }

    setLoading(false);
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Popup, {
    on: "click",
    onClose: () => setLikesList([]),
    onOpen: getLikesList,
    popperDependencies: [likesList],
    trigger: trigger,
    wide: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, loading ? __jsx(_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_7__.LikesPlaceHolder, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, likesList.length > 0 && __jsx("div", {
    style: {
      overflow: "auto",
      maxHeight: "15rem",
      height: "15rem",
      minWidth: "210px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
    selection: true,
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, likesList.map(like => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    key: like._id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    avatar: true,
    src: like.user.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_6___default().push(`/${like.user.username}`),
    as: "a",
    content: like.user.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 23
    }
  }))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (LikesList);

/***/ }),

/***/ "./components/Post/NoImageModal.js":
/*!*****************************************!*\
  !*** ./components/Post/NoImageModal.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Post\\NoImageModal.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









function NoImageModal({
  post,
  user,
  setLikes,
  likes,
  isLiked,
  comments,
  setComments
}) {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    floated: "left",
    avatar: true,
    src: post.user.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
    href: `/${post.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, post.user.name))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(post.createdAt)), post.location && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
    content: post.location,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 27
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Description, {
    style: {
      fontSize: "17px",
      letterSpacing: "0.1px",
      wordSpacing: "0.35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, post.text)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
    extra: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: isLiked ? "heart" : "heart outline",
    color: "red",
    style: {
      cursor: "pointer"
    },
    onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_6__.likePost)(post._id, user._id, setLikes, isLiked ? false : true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx(_LikesList__WEBPACK_IMPORTED_MODULE_7__.default, {
    postId: post._id,
    trigger: likes.length > 0 && __jsx("span", {
      className: "spanLikesList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    }, `${likes.length} ${likes.length === 1 ? "like" : "likes"}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      overflow: "auto",
      height: comments.length > 2 ? "200px" : "60px",
      marginBottom: "8px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, comments.length > 0 && comments.map(comment => __jsx(_PostComments__WEBPACK_IMPORTED_MODULE_2__.default, {
    key: comment._id,
    comment: comment,
    postId: post._id,
    user: user,
    setComments: setComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }))), __jsx(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__.default, {
    postId: post._id,
    user: user,
    setComments: setComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (NoImageModal);

/***/ }),

/***/ "./components/Post/PostComments.js":
/*!*****************************************!*\
  !*** ./components/Post/PostComments.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Post\\PostComments.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function PostComments({
  comment,
  user,
  setComments,
  postId
}) {
  const {
    0: disabled,
    1: setDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Avatar, {
    src: comment.user.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Author, {
    as: "a",
    href: `/${comment.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, comment.user.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Metadata, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__.default)(comment.date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, comment.text), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Actions, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Action, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, (user.role === "root" || comment.user._id === user._id) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    disabled: disabled,
    color: "red",
    name: "trash",
    onClick: async () => {
      setDisabled(true);
      await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_3__.deleteComment)(postId, comment._id, setComments);
      setDisabled(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 19
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (PostComments);

/***/ }),

/***/ "./firebase-config.js":
/*!****************************!*\
  !*** ./firebase-config.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": function() { return /* binding */ db; },
/* harmony export */   "storage": function() { return /* binding */ storage; }
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/firestore */ "@firebase/firestore");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/storage */ "@firebase/storage");
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_storage__WEBPACK_IMPORTED_MODULE_2__);



const firebaseConfig = {
  apiKey: "AIzaSyD6TPPzuK9nu0UYX3HzZyVHCm67OyNQ9Ao",
  authDomain: "hackathon-e769d.firebaseapp.com",
  projectId: "hackathon-e769d",
  storageBucket: "hackathon-e769d.appspot.com",
  messagingSenderId: "563468467684",
  appId: "1:563468467684:web:920a6df0a19b069ad25bf1",
  measurementId: "G-2MFPBL0N0Z"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);
const storage = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)(app);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Post/CreatePost */ "./components/Post/CreatePost.js");
/* harmony import */ var _components_Post_CardPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Post/CardPost */ "./components/Post/CardPost.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-infinite-scroll-component */ "react-infinite-scroll-component");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_getUserInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/getUserInfo */ "./utils/getUserInfo.js");
/* harmony import */ var _components_Home_MessageNotificationModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Home/MessageNotificationModal */ "./components/Home/MessageNotificationModal.js");
/* harmony import */ var _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/newMsgSound */ "./utils/newMsgSound.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\pages\\index.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function Index({
  user,
  postsData,
  errorLoading
}) {
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(postsData || []);
  const {
    0: showToastr,
    1: setShowToastr
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: hasMore,
    1: setHasMore
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: pageNumber,
    1: setPageNumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
  const socket = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: newMessageReceived,
    1: setNewMessageReceived
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: newMessageModal,
    1: showNewMessageModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!socket.current) {
      socket.current = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()((_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default()));
    }

    if (socket.current) {
      socket.current.emit("join", {
        userId: user._id
      });
      socket.current.on("newMsgReceived", async ({
        newMsg
      }) => {
        const {
          name,
          profilePicUrl
        } = await (0,_utils_getUserInfo__WEBPACK_IMPORTED_MODULE_13__.default)(newMsg.sender);

        if (user.newMessagePopup) {
          setNewMessageReceived(_objectSpread(_objectSpread({}, newMsg), {}, {
            senderName: name,
            senderProfilePic: profilePicUrl
          }));
          showNewMessageModal(true);
        }

        (0,_utils_newMsgSound__WEBPACK_IMPORTED_MODULE_15__.default)(name);
      });
    }

    document.title = `Welcome, ${user.name.split(" ")[0]}`;
    return () => {
      if (socket.current) {
        socket.current.emit("disconnect");
        socket.current.off();
      }
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    showToastr && setTimeout(() => setShowToastr(false), 3000);
  }, [showToastr]);

  const fetchDataOnScroll = async () => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default())}/api/posts`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_12___default().get("token")
        },
        params: {
          pageNumber
        }
      });
      if (res.data.length === 0) setHasMore(false);
      setPosts(prev => [...prev, ...res.data]);
      setPageNumber(prev => prev + 1);
    } catch (error) {
      alert("Error fetching Posts");
    }
  };

  if (posts.length === 0 || errorLoading) return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_4__.default, {
    user: user,
    setPosts: setPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 52
    }
  }), __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_8__.NoPosts, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 98
    }
  }));
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showToastr && __jsx(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_9__.PostDeleteToastr, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 22
    }
  }), newMessageModal && newMessageReceived !== null && __jsx(_components_Home_MessageNotificationModal__WEBPACK_IMPORTED_MODULE_14__.default, {
    socket: socket,
    showNewMessageModal: showNewMessageModal,
    newMessageModal: newMessageModal,
    newMessageReceived: newMessageReceived,
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_4__.default, {
    user: user,
    setPosts: setPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }), __jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default()), {
    hasMore: hasMore,
    next: fetchDataOnScroll,
    loader: __jsx(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__.PlaceHolderPosts, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 19
      }
    }),
    endMessage: __jsx(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__.EndMessage, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 23
      }
    }),
    dataLength: posts.length,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, posts.map(post => __jsx(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_5__.default, {
    key: post._id,
    post: post,
    user: user,
    setPosts: setPosts,
    setShowToastr: setShowToastr,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  })))));
}

Index.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_7__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default())}/api/posts`, {
      headers: {
        Authorization: token
      },
      params: {
        pageNumber: 1
      }
    });
    return {
      postsData: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/calculateTime.js":
/*!********************************!*\
  !*** ./utils/calculateTime.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\utils\\calculateTime.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const calculateTime = createdAt => {
  const today = moment__WEBPACK_IMPORTED_MODULE_1___default()(Date.now());
  const postDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(createdAt);
  const diffInHours = today.diff(postDate, "hours");

  if (diffInHours < 24) {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Today ", __jsx((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
      format: "hh:mm A",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 19
      }
    }, createdAt));
  } else if (diffInHours > 24 && diffInHours < 36) {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Yesterday ", __jsx((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
      format: "hh:mm A",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 23
      }
    }, createdAt));
  } else if (diffInHours > 36) {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
      format: "DD/MM/YYYY hh:mm A",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, createdAt));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (calculateTime);

/***/ }),

/***/ "./utils/getUserInfo.js":
/*!******************************!*\
  !*** ./utils/getUserInfo.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);




const getUserInfo = async userToFindId => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/chats/user/${userToFindId}`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("token")
      }
    });
    return {
      name: res.data.name,
      profilePicUrl: res.data.profilePicUrl
    };
  } catch (error) {
    console.error(error);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getUserInfo);

/***/ }),

/***/ "./utils/newMsgSound.js":
/*!******************************!*\
  !*** ./utils/newMsgSound.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const newMsgSound = senderName => {
  const sound = new Audio("/light.mp3");
  sound && sound.play();

  if (senderName) {
    document.title = `New message from ${senderName}`;

    if (document.visibilityState === "visible") {
      setTimeout(() => {
        document.title = "Messages";
      }, 5000);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (newMsgSound);

/***/ }),

/***/ "./utils/postActions.js":
/*!******************************!*\
  !*** ./utils/postActions.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitNewPost": function() { return /* binding */ submitNewPost; },
/* harmony export */   "deletePost": function() { return /* binding */ deletePost; },
/* harmony export */   "likePost": function() { return /* binding */ likePost; },
/* harmony export */   "postComment": function() { return /* binding */ postComment; },
/* harmony export */   "deleteComment": function() { return /* binding */ deleteComment; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);




const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: `${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/posts`,
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("token")
  }
});
const submitNewPost = async (text, location, picUrl, setPosts, setNewPost, setError) => {
  try {
    const res = await Axios.post("/", {
      text,
      location,
      picUrl
    });
    setPosts(prev => [res.data, ...prev]);
    setNewPost({
      text: "",
      location: ""
    });
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }
};
const deletePost = async (postId, setPosts, setShowToastr) => {
  try {
    await Axios.delete(`/${postId}`);
    setPosts(prev => prev.filter(post => post._id !== postId));
    setShowToastr(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const likePost = async (postId, userId, setLikes, like = true) => {
  try {
    if (like) {
      await Axios.post(`/like/${postId}`);
      setLikes(prev => [...prev, {
        user: userId
      }]);
    } //
    else if (!like) {
        await Axios.put(`/unlike/${postId}`);
        setLikes(prev => prev.filter(like => like.user !== userId));
      }
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const postComment = async (postId, user, text, setComments, setText) => {
  try {
    const res = await Axios.post(`/comment/${postId}`, {
      text
    });
    const newComment = {
      _id: res.data,
      user,
      text,
      date: Date.now()
    };
    setComments(prev => [newComment, ...prev]);
    setText("");
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const deleteComment = async (postId, commentId, setComments) => {
  try {
    await Axios.delete(`/${postId}/${commentId}`);
    setComments(prev => prev.filter(comment => comment._id !== commentId));
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};

/***/ }),

/***/ "@firebase/firestore":
/*!**************************************!*\
  !*** external "@firebase/firestore" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@firebase/firestore");;

/***/ }),

/***/ "@firebase/storage":
/*!************************************!*\
  !*** external "@firebase/storage" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@firebase/storage");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/app");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/storage");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

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

/***/ "react-infinite-scroll-component":
/*!**************************************************!*\
  !*** external "react-infinite-scroll-component" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-infinite-scroll-component");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-moment");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("socket.io-client");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_baseUrl_js-utils_catchErrors_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0hvbWUvTWVzc2FnZU5vdGlmaWNhdGlvbk1vZGFsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTGF5b3V0L05vRGF0YS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9QbGFjZUhvbGRlckdyb3VwLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTGF5b3V0L1RvYXN0ci5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvQ2FyZFBvc3QuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L0NvbW1lbnRJbnB1dEZpZWxkLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9DcmVhdGVQb3N0LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9JbWFnZU1vZGFsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9MaWtlc0xpc3QuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L05vSW1hZ2VNb2RhbC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvUG9zdENvbW1lbnRzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2ZpcmViYXNlLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9jYWxjdWxhdGVUaW1lLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2dldFVzZXJJbmZvLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL25ld01zZ1NvdW5kLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL3Bvc3RBY3Rpb25zLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIkBmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJAZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwiZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJNZXNzYWdlTm90aWZpY2F0aW9uTW9kYWwiLCJzb2NrZXQiLCJzaG93TmV3TWVzc2FnZU1vZGFsIiwibmV3TWVzc2FnZU1vZGFsIiwibmV3TWVzc2FnZVJlY2VpdmVkIiwidXNlciIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uTW9kYWxDbG9zZSIsImZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwiZW1pdCIsInVzZXJJZCIsIl9pZCIsIm1zZ1NlbmRUb1VzZXJJZCIsInNlbmRlciIsIm1zZyIsIm9uIiwic2VuZGVyTmFtZSIsInNlbmRlclByb2ZpbGVQaWMiLCJjYWxjdWxhdGVUaW1lIiwiZGF0ZSIsInBvc2l0aW9uIiwiYm90dG9tIiwidGFyZ2V0IiwidmFsdWUiLCJjb2xvciIsImljb24iLCJkaXNhYmxlZCIsIm1hcmdpblRvcCIsInVzZXJuYW1lIiwiSW5zdHJ1Y3Rpb25zIiwiTm9Qcm9maWxlUG9zdHMiLCJOb0ZvbGxvd0RhdGEiLCJmb2xsb3dlcnNDb21wb25lbnQiLCJmb2xsb3dpbmdDb21wb25lbnQiLCJOb01lc3NhZ2VzIiwiTm9Qb3N0cyIsIk5vUHJvZmlsZSIsIk5vTm90aWZpY2F0aW9ucyIsIk5vUG9zdEZvdW5kIiwiUGxhY2VIb2xkZXJQb3N0cyIsInJhbmdlIiwibWFwIiwiaXRlbSIsIlBsYWNlSG9sZGVyU3VnZ2VzdGlvbnMiLCJQbGFjZUhvbGRlck5vdGlmaWNhdGlvbnMiLCJFbmRNZXNzYWdlIiwiTGlrZXNQbGFjZUhvbGRlciIsIm1pbldpZHRoIiwiUG9zdERlbGV0ZVRvYXN0ciIsInRvYXN0IiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJFcnJvclRvYXN0ciIsImVycm9yIiwiTXNnU2VudFRvYXN0ciIsIkNhcmRQb3N0IiwicG9zdCIsInNldFBvc3RzIiwic2V0U2hvd1RvYXN0ciIsImxpa2VzIiwic2V0TGlrZXMiLCJpc0xpa2VkIiwibGVuZ3RoIiwiZmlsdGVyIiwibGlrZSIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJzZXRFcnJvciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImFkZFByb3BzVG9Nb2RhbCIsInBpY1VybCIsImN1cnNvciIsInByb2ZpbGVQaWNVcmwiLCJyb2xlIiwiZGVsZXRlUG9zdCIsIm5hbWUiLCJjcmVhdGVkQXQiLCJsb2NhdGlvbiIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsIndvcmRTcGFjaW5nIiwibGlrZVBvc3QiLCJtYXJnaW5MZWZ0IiwiY29tbWVudCIsImkiLCJDb21tZW50SW5wdXRGaWVsZCIsInBvc3RJZCIsInBvc3RDb21tZW50IiwiQ3JlYXRlUG9zdCIsIm5ld1Bvc3QiLCJzZXROZXdQb3N0IiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwibWVkaWEiLCJzZXRNZWRpYSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInNldFBpY1VybCIsImhhbmRsZUNoYW5nZSIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicHJldiIsImFkZFN0eWxlcyIsInRleHRBbGlnbiIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyIiwicGFkZGluZ1RvcCIsImJvcmRlckNvbG9yIiwiaGFuZGxlU3VibWl0IiwiaW1hZ2VSZWYiLCJyZWYiLCJzdG9yYWdlIiwidjQiLCJ1cGxvYWRCeXRlcyIsInRoZW4iLCJnZXREb3dubG9hZFVSTCIsInVybCIsInN1Ym1pdE5ld1Bvc3QiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJkaXNwbGF5IiwiY2xpY2siLCJkcm9wcGVkRmlsZSIsIkFycmF5IiwiZnJvbSIsImRhdGFUcmFuc2ZlciIsImJhY2tncm91bmRDb2xvciIsIkltYWdlTW9kYWwiLCJvdmVyZmxvdyIsIm1hcmdpbkJvdHRvbSIsIkxpa2VzTGlzdCIsInRyaWdnZXIiLCJsaWtlc0xpc3QiLCJzZXRMaWtlc0xpc3QiLCJnZXRMaWtlc0xpc3QiLCJyZXMiLCJheGlvcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsImRhdGEiLCJhbGVydCIsImNhdGNoRXJyb3JzIiwibWF4SGVpZ2h0IiwiUm91dGVyIiwiTm9JbWFnZU1vZGFsIiwiUG9zdENvbW1lbnRzIiwic2V0RGlzYWJsZWQiLCJkZWxldGVDb21tZW50IiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImRiIiwiZ2V0RmlyZXN0b3JlIiwiZ2V0U3RvcmFnZSIsIkluZGV4IiwicG9zdHNEYXRhIiwiZXJyb3JMb2FkaW5nIiwicG9zdHMiLCJzaG93VG9hc3RyIiwiaGFzTW9yZSIsInNldEhhc01vcmUiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInNldE5ld01lc3NhZ2VSZWNlaXZlZCIsInVzZUVmZmVjdCIsImlvIiwibmV3TXNnIiwiZ2V0VXNlckluZm8iLCJuZXdNZXNzYWdlUG9wdXAiLCJuZXdNc2dTb3VuZCIsImRvY3VtZW50IiwidGl0bGUiLCJzcGxpdCIsIm9mZiIsInNldFRpbWVvdXQiLCJmZXRjaERhdGFPblNjcm9sbCIsInBhcmFtcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInRva2VuIiwicGFyc2VDb29raWVzIiwidG9kYXkiLCJtb21lbnQiLCJEYXRlIiwibm93IiwicG9zdERhdGUiLCJkaWZmSW5Ib3VycyIsImRpZmYiLCJ1c2VyVG9GaW5kSWQiLCJzb3VuZCIsIkF1ZGlvIiwicGxheSIsInZpc2liaWxpdHlTdGF0ZSIsIkF4aW9zIiwiYmFzZVVSTCIsImVycm9yTXNnIiwiZGVsZXRlIiwicHV0IiwibmV3Q29tbWVudCIsImNvbW1lbnRJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSx3QkFBVCxDQUFrQztBQUNoQ0MsUUFEZ0M7QUFFaENDLHFCQUZnQztBQUdoQ0MsaUJBSGdDO0FBSWhDQyxvQkFKZ0M7QUFLaENDO0FBTGdDLENBQWxDLEVBTUc7QUFDRCxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsK0NBQVEsQ0FBQyxLQUFELENBQXRDOztBQUVBLFFBQU1HLFlBQVksR0FBRyxNQUFNVCxtQkFBbUIsQ0FBQyxLQUFELENBQTlDOztBQUVBLFFBQU1VLFVBQVUsR0FBR0MsQ0FBQyxJQUFJO0FBQ3RCQSxLQUFDLENBQUNDLGNBQUY7O0FBRUEsUUFBSWIsTUFBTSxDQUFDYyxPQUFYLEVBQW9CO0FBQ2xCZCxZQUFNLENBQUNjLE9BQVAsQ0FBZUMsSUFBZixDQUFvQix5QkFBcEIsRUFBK0M7QUFDN0NDLGNBQU0sRUFBRVosSUFBSSxDQUFDYSxHQURnQztBQUU3Q0MsdUJBQWUsRUFBRWYsa0JBQWtCLENBQUNnQixNQUZTO0FBRzdDQyxXQUFHLEVBQUVmO0FBSHdDLE9BQS9DO0FBTUFMLFlBQU0sQ0FBQ2MsT0FBUCxDQUFlTyxFQUFmLENBQWtCLHlCQUFsQixFQUE2QyxNQUFNO0FBQ2pEcEIsMkJBQW1CLENBQUMsS0FBRCxDQUFuQjtBQUNELE9BRkQ7QUFHRDtBQUNGLEdBZEQ7O0FBZ0JBLFNBQ0UscUVBQ0UsTUFBQyxvREFBRDtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsUUFBSSxFQUFFQyxlQUZSO0FBR0UsV0FBTyxFQUFFUSxZQUhYO0FBSUUsYUFBUyxNQUpYO0FBS0Usc0JBQWtCLE1BTHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLDJEQUFEO0FBQWMsV0FBTyxFQUFHLG9CQUFtQlAsa0JBQWtCLENBQUNtQixVQUFXLEVBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQTRCLE9BQUcsRUFBRW5CLGtCQUFrQixDQUFDb0IsZ0JBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ3BCLGtCQUFrQixDQUFDaUIsR0FBdkQsQ0FMRixFQU9FO0FBQU0sYUFBUyxFQUFDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUJJLDZEQUFhLENBQUNyQixrQkFBa0IsQ0FBQ3NCLElBQXBCLENBQXRDLENBUEYsQ0FERixFQVdFO0FBQUssU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxRQUFaO0FBQXNCQyxZQUFNLEVBQUU7QUFBOUIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFTLGFBQVMsTUFBbEI7QUFBbUIsU0FBSyxFQUFDLE1BQXpCO0FBQWdDLFlBQVEsRUFBQyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFNLFNBQUssTUFBWDtBQUFZLFlBQVEsRUFBRWhCLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxlQUFXLEVBQUMsa0JBRmQ7QUFHRSxTQUFLLEVBQUVOLElBSFQ7QUFJRSxZQUFRLEVBQUVPLENBQUMsSUFBSU4sT0FBTyxDQUFDTSxDQUFDLENBQUNnQixNQUFGLENBQVNDLEtBQVYsQ0FKeEI7QUFLRSxVQUFNLEVBQUU7QUFDTkMsV0FBSyxFQUFFLE1BREQ7QUFFTkMsVUFBSSxFQUFFLGdCQUZBO0FBR05DLGNBQVEsRUFBRTNCLElBQUksS0FBSyxFQUhiO0FBSU5HLGFBQU8sRUFBRUE7QUFKSCxLQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FYRixFQThCRTtBQUFLLFNBQUssRUFBRTtBQUFFeUIsZUFBUyxFQUFFO0FBQWIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBRyxxQkFBb0I5QixrQkFBa0IsQ0FBQ2dCLE1BQU8sRUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsQ0FERixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU9FLE1BQUMsWUFBRDtBQUFjLFlBQVEsRUFBRWYsSUFBSSxDQUFDOEIsUUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBOUJGLENBVEYsQ0FERixDQURGO0FBc0REOztBQUVELE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVEO0FBQUYsQ0FBRCxLQUNuQixNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLG1EQUFEO0FBQU0sTUFBSSxFQUFDLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZFQURGLENBRkYsQ0FERixFQVVFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsbURBQUQ7QUFBTSxNQUFJLEVBQUMsa0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUVFLE1BQUMsa0RBQUQ7QUFBTSxNQUFJLEVBQUcsSUFBR0EsUUFBUyxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBRkYsdUNBRkYsQ0FWRixFQXFCRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLG1EQUFEO0FBQU0sTUFBSSxFQUFDLGtCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERix1RUFyQkYsRUEwQkUsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxtREFBRDtBQUFNLE1BQUksRUFBQyxrQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsMkVBMUJGLENBREY7O0FBa0NBLCtEQUFlbkMsd0JBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNIQTtBQUVPLE1BQU1xQyxjQUFjLEdBQUcsTUFDNUIscUVBQ0UsTUFBQyxzREFBRDtBQUFTLE1BQUksTUFBYjtBQUFjLE1BQUksRUFBQyxLQUFuQjtBQUF5QixRQUFNLEVBQUMsT0FBaEM7QUFBd0MsU0FBTyxFQUFDLG1DQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRSxNQUFDLHFEQUFEO0FBQVEsTUFBSSxFQUFDLDJCQUFiO0FBQXlDLFNBQU8sRUFBQyxTQUFqRDtBQUEyRCxJQUFFLEVBQUMsR0FBOUQ7QUFBa0UsTUFBSSxFQUFDLEdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixDQURLO0FBT0EsTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBRUMsb0JBQUY7QUFBc0JDO0FBQXRCLENBQUQsS0FDMUIscUVBQ0dELGtCQUFrQixJQUNqQixNQUFDLHNEQUFEO0FBQVMsTUFBSSxFQUFDLGNBQWQ7QUFBNkIsTUFBSSxNQUFqQztBQUFrQyxTQUFPLEVBQUcsOEJBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGSixFQUtHQyxrQkFBa0IsSUFDakIsTUFBQyxzREFBRDtBQUFTLE1BQUksRUFBQyxjQUFkO0FBQTZCLE1BQUksTUFBakM7QUFBa0MsU0FBTyxFQUFHLGdDQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTkosQ0FESztBQVlBLE1BQU1DLFVBQVUsR0FBRyxNQUN4QixNQUFDLHNEQUFEO0FBQ0UsTUFBSSxNQUROO0FBRUUsTUFBSSxFQUFDLGdCQUZQO0FBR0UsUUFBTSxFQUFDLE9BSFQ7QUFJRSxTQUFPLEVBQUMsbUVBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURLO0FBU0EsTUFBTUMsT0FBTyxHQUFHLE1BQ3JCLE1BQUMsc0RBQUQ7QUFDRSxNQUFJLE1BRE47QUFFRSxNQUFJLEVBQUMsS0FGUDtBQUdFLFFBQU0sRUFBQyxNQUhUO0FBSUUsU0FBTyxFQUFDLGdEQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFESztBQVNBLE1BQU1DLFNBQVMsR0FBRyxNQUN2QixNQUFDLHNEQUFEO0FBQVMsTUFBSSxNQUFiO0FBQWMsTUFBSSxFQUFDLEtBQW5CO0FBQXlCLFFBQU0sRUFBQyxNQUFoQztBQUF1QyxTQUFPLEVBQUMsbUJBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFESztBQUlBLE1BQU1DLGVBQWUsR0FBRyxNQUM3QixNQUFDLHNEQUFEO0FBQVMsU0FBTyxFQUFDLGtCQUFqQjtBQUFvQyxNQUFJLEVBQUMsT0FBekM7QUFBaUQsTUFBSSxNQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREs7QUFJQSxNQUFNQyxXQUFXLEdBQUcsTUFDekIsTUFBQyxzREFBRDtBQUFTLE1BQUksTUFBYjtBQUFjLE1BQUksRUFBQyxLQUFuQjtBQUF5QixRQUFNLEVBQUMsTUFBaEM7QUFBdUMsU0FBTyxFQUFDLGdCQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREssQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NQO0FBQ0E7QUFTQTtBQUVPLE1BQU1DLGdCQUFnQixHQUFHLE1BQzlCQyw2Q0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUwsQ0FBWUMsR0FBWixDQUFnQkMsSUFBSSxJQUNsQjtBQUFLLEtBQUcsRUFBRUEsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywwREFBRDtBQUFhLE9BQUssTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsaUVBQUQ7QUFBb0IsT0FBSyxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixDQURGLEVBS0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUhGLEVBSUUsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSkYsQ0FMRixDQURGLEVBYUUsTUFBQyxzREFBRDtBQUFTLFFBQU0sTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBYkYsQ0FERixDQURLO0FBbUJBLE1BQU1DLHNCQUFzQixHQUFHLE1BQ3BDLHFFQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsbURBQUQ7QUFBTSxPQUFLLEVBQUMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxnRUFBRDtBQUFtQixRQUFNLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQURGLEVBSUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywrREFBRDtBQUFrQixRQUFNLEVBQUMsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLENBREYsQ0FERixDQUpGLEVBWUUsTUFBQywyREFBRDtBQUFjLE9BQUssTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMscURBQUQ7QUFDRSxVQUFRLE1BRFY7QUFFRSxVQUFRLE1BRlY7QUFHRSxNQUFJLEVBQUMsT0FIUDtBQUlFLE1BQUksRUFBQyxVQUpQO0FBS0UsU0FBTyxFQUFDLFFBTFY7QUFNRSxPQUFLLEVBQUMsU0FOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FaRixDQURGLENBREYsQ0FESztBQThCQSxNQUFNQyx3QkFBd0IsR0FBRyxNQUN0Q0osNkNBQUssQ0FBQyxDQUFELEVBQUksRUFBSixDQUFMLENBQWFDLEdBQWIsQ0FBaUJDLElBQUksSUFDbkIscUVBQ0UsTUFBQywwREFBRDtBQUFhLEtBQUcsRUFBRUEsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsaUVBQUQ7QUFBb0IsT0FBSyxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixDQURGLENBREYsRUFPRSxNQUFDLHNEQUFEO0FBQVMsUUFBTSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFQRixDQURGLENBREs7QUFhQSxNQUFNRyxVQUFVLEdBQUcsTUFDeEIsTUFBQyx3REFBRDtBQUFXLFdBQVMsRUFBQyxRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxtREFBRDtBQUFNLE1BQUksRUFBQyxTQUFYO0FBQXFCLE1BQUksRUFBQyxPQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRSxNQUFDLHNEQUFEO0FBQVMsUUFBTSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixDQURLO0FBT0EsTUFBTUMsZ0JBQWdCLEdBQUcsTUFDOUJOLDZDQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBTCxDQUFZQyxHQUFaLENBQWdCQyxJQUFJLElBQ2xCLE1BQUMsMERBQUQ7QUFBYSxLQUFHLEVBQUVBLElBQWxCO0FBQXdCLE9BQUssRUFBRTtBQUFFSyxZQUFRLEVBQUU7QUFBWixHQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxpRUFBRDtBQUFvQixPQUFLLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLCtEQUFEO0FBQWtCLFFBQU0sRUFBQyxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FERixDQURGLENBREssQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZQO0FBRU8sTUFBTUMsZ0JBQWdCLEdBQUcsTUFBTTtBQUNwQyxTQUNFLE1BQUMsMERBQUQ7QUFDRSxZQUFRLEVBQUMsZUFEWDtBQUVFLGFBQVMsRUFBRSxJQUZiO0FBR0UsbUJBQWUsRUFBRSxLQUhuQjtBQUlFLGVBQVcsRUFBRSxLQUpmO0FBS0UsZ0JBQVksTUFMZDtBQU1FLE9BQUcsRUFBRSxLQU5QO0FBT0Usb0JBQWdCLE1BUGxCO0FBUUUsYUFBUyxNQVJYO0FBU0UsZ0JBQVksRUFBRSxLQVRoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUdDLHNEQUFBLENBQVcsc0JBQVgsRUFBbUM7QUFDbEM3QixZQUFRLEVBQUUsZUFEd0I7QUFFbEM4QixhQUFTLEVBQUUsSUFGdUI7QUFHbENDLG1CQUFlLEVBQUUsS0FIaUI7QUFJbENDLGdCQUFZLEVBQUUsSUFKb0I7QUFLbENDLGdCQUFZLEVBQUUsS0FMb0I7QUFNbENDLGFBQVMsRUFBRSxJQU51QjtBQU9sQ0MsWUFBUSxFQUFFQztBQVB3QixHQUFuQyxDQVZILENBREY7QUFzQkQsQ0F2Qk07QUF5QkEsTUFBTUMsV0FBVyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDeEMsU0FDRSxNQUFDLDBEQUFEO0FBQ0UsWUFBUSxFQUFDLGVBRFg7QUFFRSxhQUFTLEVBQUUsSUFGYjtBQUdFLG1CQUFlLEVBQUUsS0FIbkI7QUFJRSxlQUFXLEVBQUUsS0FKZjtBQUtFLGdCQUFZLE1BTGQ7QUFNRSxPQUFHLEVBQUUsS0FOUDtBQU9FLG9CQUFnQixNQVBsQjtBQVFFLGFBQVMsTUFSWDtBQVNFLGdCQUFZLEVBQUUsS0FUaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVHVCx1REFBQSxDQUFZUyxLQUFaLEVBQW1CO0FBQ2xCdEMsWUFBUSxFQUFFLGVBRFE7QUFFbEI4QixhQUFTLEVBQUUsSUFGTztBQUdsQkMsbUJBQWUsRUFBRSxLQUhDO0FBSWxCQyxnQkFBWSxFQUFFLElBSkk7QUFLbEJDLGdCQUFZLEVBQUUsS0FMSTtBQU1sQkMsYUFBUyxFQUFFLElBTk87QUFPbEJDLFlBQVEsRUFBRUM7QUFQUSxHQUFuQixDQVZILENBREY7QUFzQkQsQ0F2Qk07QUF5QkEsTUFBTUcsYUFBYSxHQUFHLE1BQzNCLE1BQUMsMERBQUQ7QUFDRSxVQUFRLEVBQUMsZUFEWDtBQUVFLFdBQVMsRUFBRSxJQUZiO0FBR0UsaUJBQWUsRUFBRSxLQUhuQjtBQUlFLGFBQVcsRUFBRSxLQUpmO0FBS0UsY0FBWSxNQUxkO0FBTUUsS0FBRyxFQUFFLEtBTlA7QUFPRSxrQkFBZ0IsTUFQbEI7QUFRRSxXQUFTLE1BUlg7QUFTRSxjQUFZLEVBQUUsS0FUaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQVVHVix5REFBQSxDQUFjLG1CQUFkLEVBQW1DO0FBQ2xDN0IsVUFBUSxFQUFFLGVBRHdCO0FBRWxDOEIsV0FBUyxFQUFFLElBRnVCO0FBR2xDQyxpQkFBZSxFQUFFLEtBSGlCO0FBSWxDQyxjQUFZLEVBQUUsSUFKb0I7QUFLbENDLGNBQVksRUFBRSxLQUxvQjtBQU1sQ0MsV0FBUyxFQUFFLElBTnVCO0FBT2xDQyxVQUFRLEVBQUVDO0FBUHdCLENBQW5DLENBVkgsQ0FESyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRFA7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0ksUUFBVCxDQUFrQjtBQUFFQyxNQUFGO0FBQVEvRCxNQUFSO0FBQWNnRSxVQUFkO0FBQXdCQztBQUF4QixDQUFsQixFQUEyRDtBQUN6RCxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JoRSwrQ0FBUSxDQUFDNEQsSUFBSSxDQUFDRyxLQUFOLENBQWxDO0FBRUEsUUFBTUUsT0FBTyxHQUNYRixLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUFmLElBQW9CSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBSSxJQUFJQSxJQUFJLENBQUN2RSxJQUFMLEtBQWNBLElBQUksQ0FBQ2EsR0FBeEMsRUFBNkN3RCxNQUE3QyxHQUFzRCxDQUQ1RTtBQUdBLFFBQU07QUFBQSxPQUFDRyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQnRFLCtDQUFRLENBQUM0RCxJQUFJLENBQUNTLFFBQU4sQ0FBeEM7QUFFQSxRQUFNO0FBQUEsT0FBQ1osS0FBRDtBQUFBLE9BQVFjO0FBQVIsTUFBb0J2RSwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFFQSxRQUFNO0FBQUEsT0FBQ3dFLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCekUsK0NBQVEsQ0FBQyxLQUFELENBQTFDOztBQUVBLFFBQU0wRSxlQUFlLEdBQUcsT0FBTztBQUM3QmQsUUFENkI7QUFFN0IvRCxRQUY2QjtBQUc3Qm1FLFlBSDZCO0FBSTdCRCxTQUo2QjtBQUs3QkUsV0FMNkI7QUFNN0JJLFlBTjZCO0FBTzdCQztBQVA2QixHQUFQLENBQXhCOztBQVVBLFNBQ0UscUVBQ0dFLFNBQVMsSUFDUixNQUFDLG9EQUFEO0FBQ0UsUUFBSSxFQUFFQSxTQURSO0FBRUUsYUFBUyxNQUZYO0FBR0Usc0JBQWtCLE1BSHBCO0FBSUUsV0FBTyxFQUFFLE1BQU1DLFlBQVksQ0FBQyxLQUFELENBSjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2IsSUFBSSxDQUFDZSxNQUFMLEdBQ0MsTUFBQyxnREFBRCxlQUFnQkQsZUFBZSxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREQsR0FHQyxNQUFDLGtEQUFELGVBQWtCQSxlQUFlLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKSixDQUxGLENBRkosRUFpQkUsTUFBQyxzREFBRDtBQUFTLFNBQUssTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFNLFNBQUssRUFBQyxNQUFaO0FBQW1CLFNBQUssTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZCxJQUFJLENBQUNlLE1BQUwsSUFDQyxNQUFDLG9EQUFEO0FBQ0UsT0FBRyxFQUFFZixJQUFJLENBQUNlLE1BRFo7QUFFRSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FGVDtBQUdFLFdBQU8sRUFBQyxNQUhWO0FBSUUsV0FBTyxNQUpUO0FBS0UsTUFBRSxFQUFFLEtBTE47QUFNRSxPQUFHLEVBQUMsV0FOTjtBQU9FLFdBQU8sRUFBRSxNQUFNSCxZQUFZLENBQUMsSUFBRCxDQVA3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFhRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU8sV0FBTyxFQUFDLE1BQWY7QUFBc0IsT0FBRyxFQUFFYixJQUFJLENBQUMvRCxJQUFMLENBQVVnRixhQUFyQztBQUFvRCxVQUFNLE1BQTFEO0FBQTJELFlBQVEsTUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0csQ0FBQ2hGLElBQUksQ0FBQ2lGLElBQUwsS0FBYyxNQUFkLElBQXdCbEIsSUFBSSxDQUFDL0QsSUFBTCxDQUFVYSxHQUFWLEtBQWtCYixJQUFJLENBQUNhLEdBQWhELEtBQ0MscUVBQ0UsTUFBQyxvREFBRDtBQUNFLE1BQUUsRUFBQyxPQURMO0FBRUUsWUFBUSxFQUFDLFdBRlg7QUFHRSxXQUFPLEVBQ0wsTUFBQyxvREFBRDtBQUNFLFNBQUcsRUFBQyxpQkFETjtBQUVFLFdBQUssRUFBRTtBQUFFa0UsY0FBTSxFQUFFO0FBQVYsT0FGVDtBQUdFLFVBQUksRUFBQyxNQUhQO0FBSUUsYUFBTyxFQUFDLE9BSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXRSxNQUFDLHFEQUFEO0FBQVEsTUFBRSxFQUFDLElBQVg7QUFBZ0IsV0FBTyxFQUFDLGVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBWkYsRUFjRSxNQUFDLHFEQUFEO0FBQ0UsU0FBSyxFQUFDLEtBRFI7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLFdBQU8sRUFBQyxRQUhWO0FBSUUsV0FBTyxFQUFFLE1BQU1HLDhEQUFVLENBQUNuQixJQUFJLENBQUNsRCxHQUFOLEVBQVdtRCxRQUFYLEVBQXFCQyxhQUFyQixDQUozQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FERixDQUpKLEVBNkJFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUcsSUFBR0YsSUFBSSxDQUFDL0QsSUFBTCxDQUFVOEIsUUFBUyxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJaUMsSUFBSSxDQUFDL0QsSUFBTCxDQUFVbUYsSUFBZCxDQURGLENBREYsQ0E3QkYsRUFtQ0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVkvRCw2REFBYSxDQUFDMkMsSUFBSSxDQUFDcUIsU0FBTixDQUF6QixDQW5DRixFQXFDR3JCLElBQUksQ0FBQ3NCLFFBQUwsSUFBaUIsTUFBQyx3REFBRDtBQUFXLFdBQU8sRUFBRXRCLElBQUksQ0FBQ3NCLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQ3BCLEVBdUNFLE1BQUMsK0RBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTEMsY0FBUSxFQUFFLE1BREw7QUFFTEMsbUJBQWEsRUFBRSxPQUZWO0FBR0xDLGlCQUFXLEVBQUU7QUFIUixLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR3pCLElBQUksQ0FBQzlELElBTlIsQ0F2Q0YsQ0FiRixFQThERSxNQUFDLDJEQUFEO0FBQWMsU0FBSyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUNFLFFBQUksRUFBRW1FLE9BQU8sR0FBRyxPQUFILEdBQWEsZUFENUI7QUFFRSxTQUFLLEVBQUMsS0FGUjtBQUdFLFNBQUssRUFBRTtBQUFFVyxZQUFNLEVBQUU7QUFBVixLQUhUO0FBSUUsV0FBTyxFQUFFLE1BQ1BVLDREQUFRLENBQUMxQixJQUFJLENBQUNsRCxHQUFOLEVBQVdiLElBQUksQ0FBQ2EsR0FBaEIsRUFBcUJzRCxRQUFyQixFQUErQkMsT0FBTyxHQUFHLEtBQUgsR0FBVyxJQUFqRCxDQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVVFLE1BQUMsK0NBQUQ7QUFDRSxVQUFNLEVBQUVMLElBQUksQ0FBQ2xELEdBRGY7QUFFRSxXQUFPLEVBQ0xxRCxLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUFmLElBQ0U7QUFBTSxlQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLEdBQUVILEtBQUssQ0FBQ0csTUFBTyxJQUFHSCxLQUFLLENBQUNHLE1BQU4sS0FBaUIsQ0FBakIsR0FBcUIsTUFBckIsR0FBOEIsT0FBUSxFQUQ1RCxDQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQXFCRSxNQUFDLG1EQUFEO0FBQ0UsUUFBSSxFQUFDLGlCQURQO0FBRUUsU0FBSyxFQUFFO0FBQUVxQixnQkFBVSxFQUFFO0FBQWQsS0FGVDtBQUdFLFNBQUssRUFBQyxNQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkYsRUEyQkdsQixRQUFRLENBQUNILE1BQVQsR0FBa0IsQ0FBbEIsSUFDQ0csUUFBUSxDQUFDN0IsR0FBVCxDQUNFLENBQUNnRCxPQUFELEVBQVVDLENBQVYsS0FDRUEsQ0FBQyxHQUFHLENBQUosSUFDRSxNQUFDLGtEQUFEO0FBQ0UsT0FBRyxFQUFFRCxPQUFPLENBQUM5RSxHQURmO0FBRUUsV0FBTyxFQUFFOEUsT0FGWDtBQUdFLFVBQU0sRUFBRTVCLElBQUksQ0FBQ2xELEdBSGY7QUFJRSxRQUFJLEVBQUViLElBSlI7QUFLRSxlQUFXLEVBQUV5RSxXQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFITixDQTVCSixFQXlDR0QsUUFBUSxDQUFDSCxNQUFULEdBQWtCLENBQWxCLElBQ0MsTUFBQyxxREFBRDtBQUNFLFdBQU8sRUFBQyxXQURWO0FBRUUsU0FBSyxFQUFDLE1BRlI7QUFHRSxTQUFLLE1BSFA7QUFJRSxZQUFRLE1BSlY7QUFLRSxXQUFPLEVBQUUsTUFBTU8sWUFBWSxDQUFDLElBQUQsQ0FMN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFDSixFQW1ERSxNQUFDLHNEQUFEO0FBQVMsVUFBTSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuREYsRUFxREUsTUFBQyx1REFBRDtBQUNFLFFBQUksRUFBRTVFLElBRFI7QUFFRSxVQUFNLEVBQUUrRCxJQUFJLENBQUNsRCxHQUZmO0FBR0UsZUFBVyxFQUFFNEQsV0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckRGLENBOURGLENBREYsQ0FqQkYsRUE2SUUsTUFBQyxzREFBRDtBQUFTLFVBQU0sTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0lGLENBREY7QUFpSkQ7O0FBRUQsK0RBQWVYLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlMQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUytCLGlCQUFULENBQTJCO0FBQUVDLFFBQUY7QUFBVTlGLE1BQVY7QUFBZ0J5RTtBQUFoQixDQUEzQixFQUEwRDtBQUN4RCxRQUFNO0FBQUEsT0FBQ3hFLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUVBLFNBQ0UsTUFBQyxtREFBRDtBQUNFLFNBQUssTUFEUDtBQUVFLFlBQVEsRUFBRSxNQUFNSyxDQUFOLElBQVc7QUFDbkJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBSixnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBLFlBQU0wRiwrREFBVyxDQUFDRCxNQUFELEVBQVM5RixJQUFULEVBQWVDLElBQWYsRUFBcUJ3RSxXQUFyQixFQUFrQ3ZFLE9BQWxDLENBQWpCO0FBRUFHLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQyx5REFBRDtBQUNFLFNBQUssRUFBRUosSUFEVDtBQUVFLFlBQVEsRUFBRU8sQ0FBQyxJQUFJTixPQUFPLENBQUNNLENBQUMsQ0FBQ2dCLE1BQUYsQ0FBU0MsS0FBVixDQUZ4QjtBQUdFLGVBQVcsRUFBQyxhQUhkO0FBSUUsVUFBTSxFQUFFO0FBQ05DLFdBQUssRUFBRSxNQUREO0FBRU5DLFVBQUksRUFBRSxNQUZBO0FBR052QixhQUFPLEVBQUVBLE9BSEg7QUFJTndCLGNBQVEsRUFBRTNCLElBQUksS0FBSyxFQUFULElBQWVHO0FBSm5CLEtBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBREY7QUF1QkQ7O0FBRUQsK0RBQWV5RixpQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTRyxVQUFULENBQW9CO0FBQUVoRyxNQUFGO0FBQVFnRTtBQUFSLENBQXBCLEVBQXdDO0FBQ3RDLFFBQU07QUFBQSxPQUFDaUMsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0IvRiwrQ0FBUSxDQUFDO0FBQUVGLFFBQUksRUFBRSxFQUFSO0FBQVlvRixZQUFRLEVBQUU7QUFBdEIsR0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDakYsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU1nRyxRQUFRLEdBQUdDLDZDQUFNLEVBQXZCO0FBRUEsUUFBTTtBQUFBLE9BQUN4QyxLQUFEO0FBQUEsT0FBUWM7QUFBUixNQUFvQnZFLCtDQUFRLENBQUMsSUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDa0csV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NuRywrQ0FBUSxDQUFDLEtBQUQsQ0FBOUM7QUFFQSxRQUFNO0FBQUEsT0FBQ29HLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CckcsK0NBQVEsQ0FBQyxJQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNzRyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ3ZHLCtDQUFRLENBQUMsSUFBRCxDQUFoRDtBQUVBLFFBQUs7QUFBQSxPQUFDMkUsTUFBRDtBQUFBLE9BQVE2QjtBQUFSLE1BQW1CeEcsK0NBQVEsQ0FBQyxFQUFELENBQWhDOztBQUVBLFFBQU15RyxZQUFZLEdBQUdwRyxDQUFDLElBQUk7QUFDeEIsVUFBTTtBQUFFMkUsVUFBRjtBQUFRMUQsV0FBUjtBQUFlb0Y7QUFBZixRQUF5QnJHLENBQUMsQ0FBQ2dCLE1BQWpDOztBQUVBLFFBQUkyRCxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUNwQnFCLGNBQVEsQ0FBQ0ssS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFSO0FBQ0FILHFCQUFlLENBQUNJLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQkYsS0FBSyxDQUFDLENBQUQsQ0FBekIsQ0FBRCxDQUFmO0FBQ0Q7O0FBRURYLGNBQVUsQ0FBQ2MsSUFBSSxvQ0FBVUEsSUFBVjtBQUFnQixPQUFDN0IsSUFBRCxHQUFRMUQ7QUFBeEIsTUFBTCxDQUFWO0FBQ0QsR0FURDs7QUFXQSxRQUFNd0YsU0FBUyxHQUFHLE9BQU87QUFDdkJDLGFBQVMsRUFBRSxRQURZO0FBRXZCQyxVQUFNLEVBQUUsT0FGZTtBQUd2QkMsU0FBSyxFQUFFLE9BSGdCO0FBSXZCQyxVQUFNLEVBQUUsUUFKZTtBQUt2QkMsY0FBVSxFQUFFZixLQUFLLEtBQUssSUFBVixJQUFrQixNQUxQO0FBTXZCeEIsVUFBTSxFQUFFLFNBTmU7QUFPdkJ3QyxlQUFXLEVBQUVsQixXQUFXLEdBQUcsT0FBSCxHQUFhO0FBUGQsR0FBUCxDQUFsQjs7QUFVQSxRQUFNbUIsWUFBWSxHQUFHLE1BQU1oSCxDQUFOLElBQVc7QUFDOUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBSixjQUFVLENBQUMsSUFBRCxDQUFWOztBQUdBLFFBQUlrRyxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixZQUFNa0IsUUFBUSxHQUFDQyxxREFBRyxDQUFDQyxxREFBRCxFQUFVLFdBQVVwQixLQUFLLENBQUNwQixJQUFOLEdBQWF5Qyx3Q0FBRSxFQUFHLEVBQXRDLENBQWxCLENBRGtCLENBRWhCOztBQUdBQyxtRUFBVyxDQUFDSixRQUFELEVBQVVsQixLQUFWLENBQVgsQ0FBNEJ1QixJQUE1QixDQUFpQyxNQUFJO0FBQ3BDQyx3RUFBYyxDQUFDTixRQUFELENBQWQsQ0FBeUJLLElBQXpCLENBQThCLE1BQU9FLEdBQVAsSUFBYTtBQUN6QyxnQkFBTUMsaUVBQWEsQ0FBQ2hDLE9BQU8sQ0FBQ2hHLElBQVQsRUFBY2dHLE9BQU8sQ0FBQ1osUUFBdEIsRUFBK0IyQyxHQUEvQixFQUFtQ2hFLFFBQW5DLEVBQTRDa0MsVUFBNUMsRUFBdUR4QixRQUF2RCxDQUFuQjtBQUNDd0QsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0MsU0FISixFQUlJSSxLQUpKLENBSVdDLEdBQUQsSUFBTztBQUNiSCxpQkFBTyxDQUFDQyxHQUFSLENBQVlFLEdBQVo7QUFDQSxTQU5KO0FBT0EsT0FSRDtBQVVILEtBZkQsTUFnQkk7QUFFSixZQUFNSixpRUFBYSxDQUNqQmhDLE9BQU8sQ0FBQ2hHLElBRFMsRUFFakJnRyxPQUFPLENBQUNaLFFBRlMsRUFHakJQLE1BSGlCLEVBSWpCZCxRQUppQixFQUtqQmtDLFVBTGlCLEVBTWpCeEIsUUFOaUIsQ0FBbkI7QUFRQzs7QUFFRDhCLFlBQVEsQ0FBQyxJQUFELENBQVI7QUFDQUUsbUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDQXJHLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxHQXBDRDs7QUFzQ0EsU0FDRSxxRUFDRSxNQUFDLG1EQUFEO0FBQU0sU0FBSyxFQUFFdUQsS0FBSyxLQUFLLElBQXZCO0FBQTZCLFlBQVEsRUFBRTRELFlBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQ0UsU0FBSyxNQURQO0FBRUUsYUFBUyxFQUFFLE1BQU05QyxRQUFRLENBQUMsSUFBRCxDQUYzQjtBQUdFLFdBQU8sRUFBRWQsS0FIWDtBQUlFLFVBQU0sRUFBQyxPQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTyxPQUFHLEVBQUU1RCxJQUFJLENBQUNnRixhQUFqQjtBQUFnQyxZQUFRLE1BQXhDO0FBQXlDLFVBQU0sTUFBL0M7QUFBZ0QsVUFBTSxNQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDREQUFEO0FBQ0UsZUFBVyxFQUFDLGlCQURkO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxTQUFLLEVBQUVpQixPQUFPLENBQUNoRyxJQUhqQjtBQUlFLFlBQVEsRUFBRTJHLFlBSlo7QUFLRSxRQUFJLEVBQUUsQ0FMUjtBQU1FLFNBQUssRUFBRSxFQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVJGLEVBb0JFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFDRSxTQUFLLEVBQUVYLE9BQU8sQ0FBQ1osUUFEakI7QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUdFLFlBQVEsRUFBRXVCLFlBSFo7QUFJRSxTQUFLLEVBQUMsY0FKUjtBQUtFLFFBQUksRUFBQyxzQkFMUDtBQU1FLGVBQVcsRUFBQyx1QkFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFVRTtBQUNFLE9BQUcsRUFBRVQsUUFEUDtBQUVFLFlBQVEsRUFBRVMsWUFGWjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsU0FBSyxFQUFFO0FBQUUwQixhQUFPLEVBQUU7QUFBWCxLQUpUO0FBS0UsUUFBSSxFQUFDLE1BTFA7QUFNRSxVQUFNLEVBQUMsU0FOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FwQkYsRUF3Q0U7QUFDRSxXQUFPLEVBQUUsTUFBTW5DLFFBQVEsQ0FBQ3pGLE9BQVQsQ0FBaUI2SCxLQUFqQixFQURqQjtBQUVFLFNBQUssRUFBRXRCLFNBQVMsRUFGbEI7QUFHRSxVQUFNLEVBQUV6RyxDQUFDLElBQUk7QUFDWEEsT0FBQyxDQUFDQyxjQUFGO0FBQ0E2RixvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNELEtBTkg7QUFPRSxlQUFXLEVBQUU5RixDQUFDLElBQUk7QUFDaEJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBNkYsb0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDRCxLQVZIO0FBV0UsVUFBTSxFQUFFOUYsQ0FBQyxJQUFJO0FBQ1hBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBNkYsb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFFQSxZQUFNa0MsV0FBVyxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV2xJLENBQUMsQ0FBQ21JLFlBQUYsQ0FBZTlCLEtBQTFCLENBQXBCO0FBRUFMLGNBQVEsQ0FBQ2dDLFdBQVcsQ0FBQyxDQUFELENBQVosQ0FBUjtBQUNBOUIscUJBQWUsQ0FBQ0ksR0FBRyxDQUFDQyxlQUFKLENBQW9CeUIsV0FBVyxDQUFDLENBQUQsQ0FBL0IsQ0FBRCxDQUFmO0FBQ0QsS0FuQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW9CR2pDLEtBQUssS0FBSyxJQUFWLEdBQ0MsTUFBQyxtREFBRDtBQUFNLFFBQUksRUFBQyxNQUFYO0FBQWtCLFFBQUksRUFBQyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsR0FHQyxxRUFDRSxNQUFDLG9EQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVZLFlBQU0sRUFBRSxPQUFWO0FBQW1CQyxXQUFLLEVBQUU7QUFBMUIsS0FEVDtBQUVFLE9BQUcsRUFBRVgsWUFGUDtBQUdFLE9BQUcsRUFBQyxXQUhOO0FBSUUsWUFBUSxNQUpWO0FBS0UsUUFBSSxFQUFDLFFBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBdkJKLENBeENGLEVBMEVFLE1BQUMsc0RBQUQ7QUFBUyxVQUFNLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFFRixFQTRFRSxNQUFDLHFEQUFEO0FBQ0UsWUFBUSxNQURWO0FBRUUsWUFBUSxFQUFFUixPQUFPLENBQUNoRyxJQUFSLEtBQWlCLEVBQWpCLElBQXVCRyxPQUZuQztBQUdFLFdBQU8sRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSFg7QUFJRSxTQUFLLEVBQUU7QUFBRXdJLHFCQUFlLEVBQUUsU0FBbkI7QUFBOEJsSCxXQUFLLEVBQUU7QUFBckMsS0FKVDtBQUtFLFFBQUksRUFBQyxNQUxQO0FBTUUsV0FBTyxFQUFFdEIsT0FOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUVGLENBREYsRUFzRkUsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEZGLENBREY7QUEwRkQ7O0FBRUQsK0RBQWU0RixVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTNkMsVUFBVCxDQUFvQjtBQUNsQjlFLE1BRGtCO0FBRWxCL0QsTUFGa0I7QUFHbEJtRSxVQUhrQjtBQUlsQkQsT0FKa0I7QUFLbEJFLFNBTGtCO0FBTWxCSSxVQU5rQjtBQU9sQkM7QUFQa0IsQ0FBcEIsRUFRRztBQUNELFNBQ0UscUVBQ0UsTUFBQyxtREFBRDtBQUFNLFdBQU8sRUFBRSxDQUFmO0FBQWtCLGFBQVMsTUFBM0I7QUFBNEIsV0FBTyxNQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFlLFNBQUssTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTyxXQUFPLE1BQWQ7QUFBZSxRQUFJLEVBQUMsT0FBcEI7QUFBNEIsT0FBRyxFQUFFVixJQUFJLENBQUNlLE1BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFPRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQU0sU0FBSyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU8sV0FBTyxFQUFDLE1BQWY7QUFBc0IsVUFBTSxNQUE1QjtBQUE2QixPQUFHLEVBQUVmLElBQUksQ0FBQy9ELElBQUwsQ0FBVWdGLGFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUcsSUFBR2pCLElBQUksQ0FBQy9ELElBQUwsQ0FBVThCLFFBQVMsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSWlDLElBQUksQ0FBQy9ELElBQUwsQ0FBVW1GLElBQWQsQ0FERixDQURGLENBSEYsRUFTRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWS9ELDZEQUFhLENBQUMyQyxJQUFJLENBQUNxQixTQUFOLENBQXpCLENBVEYsRUFXR3JCLElBQUksQ0FBQ3NCLFFBQUwsSUFBaUIsTUFBQyx3REFBRDtBQUFXLFdBQU8sRUFBRXRCLElBQUksQ0FBQ3NCLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYcEIsRUFhRSxNQUFDLCtEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxNQURMO0FBRUxDLG1CQUFhLEVBQUUsT0FGVjtBQUdMQyxpQkFBVyxFQUFFO0FBSFIsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUd6QixJQUFJLENBQUM5RCxJQU5SLENBYkYsQ0FERixFQXdCRSxNQUFDLDJEQUFEO0FBQWMsU0FBSyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUNFLFFBQUksRUFBRW1FLE9BQU8sR0FBRyxPQUFILEdBQWEsZUFENUI7QUFFRSxTQUFLLEVBQUMsS0FGUjtBQUdFLFNBQUssRUFBRTtBQUFFVyxZQUFNLEVBQUU7QUFBVixLQUhUO0FBSUUsV0FBTyxFQUFFLE1BQ1BVLDREQUFRLENBQUMxQixJQUFJLENBQUNsRCxHQUFOLEVBQVdiLElBQUksQ0FBQ2EsR0FBaEIsRUFBcUJzRCxRQUFyQixFQUErQkMsT0FBTyxHQUFHLEtBQUgsR0FBVyxJQUFqRCxDQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVVFLE1BQUMsK0NBQUQ7QUFDRSxVQUFNLEVBQUVMLElBQUksQ0FBQ2xELEdBRGY7QUFFRSxXQUFPLEVBQ0xxRCxLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUFmLElBQ0U7QUFBTSxlQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLEdBQUVILEtBQUssQ0FBQ0csTUFBTyxJQUFHSCxLQUFLLENBQUNHLE1BQU4sS0FBaUIsQ0FBakIsR0FBcUIsTUFBckIsR0FBOEIsT0FBUSxFQUQ1RCxDQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQXFCRSxNQUFDLHNEQUFEO0FBQVMsVUFBTSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkYsRUF1QkU7QUFDRSxTQUFLLEVBQUU7QUFDTHlFLGNBQVEsRUFBRSxNQURMO0FBRUwzQixZQUFNLEVBQUUzQyxRQUFRLENBQUNILE1BQVQsR0FBa0IsQ0FBbEIsR0FBc0IsT0FBdEIsR0FBZ0MsTUFGbkM7QUFHTDBFLGtCQUFZLEVBQUU7QUFIVCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR3ZFLFFBQVEsQ0FBQ0gsTUFBVCxHQUFrQixDQUFsQixJQUNDRyxRQUFRLENBQUM3QixHQUFULENBQWFnRCxPQUFPLElBQ2xCLE1BQUMsa0RBQUQ7QUFDRSxPQUFHLEVBQUVBLE9BQU8sQ0FBQzlFLEdBRGY7QUFFRSxXQUFPLEVBQUU4RSxPQUZYO0FBR0UsVUFBTSxFQUFFNUIsSUFBSSxDQUFDbEQsR0FIZjtBQUlFLFFBQUksRUFBRWIsSUFKUjtBQUtFLGVBQVcsRUFBRXlFLFdBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUEosQ0F2QkYsRUF5Q0UsTUFBQyx1REFBRDtBQUNFLFVBQU0sRUFBRVYsSUFBSSxDQUFDbEQsR0FEZjtBQUVFLFFBQUksRUFBRWIsSUFGUjtBQUdFLGVBQVcsRUFBRXlFLFdBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpDRixDQXhCRixDQURGLENBUEYsQ0FERixDQURGO0FBc0ZEOztBQUVELCtEQUFlb0UsVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0csU0FBVCxDQUFtQjtBQUFFbEQsUUFBRjtBQUFVbUQ7QUFBVixDQUFuQixFQUF3QztBQUN0QyxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJoSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLCtDQUFRLENBQUMsS0FBRCxDQUF0Qzs7QUFFQSxRQUFNaUosWUFBWSxHQUFHLFlBQVk7QUFDL0IvSSxjQUFVLENBQUMsSUFBRCxDQUFWOztBQUNBLFFBQUk7QUFDRixZQUFNZ0osR0FBRyxHQUFHLE1BQU1DLGdEQUFBLENBQVcsR0FBRUMsdURBQVEsbUJBQWtCekQsTUFBTyxFQUE5QyxFQUFpRDtBQUNqRTBELGVBQU8sRUFBRTtBQUFFQyx1QkFBYSxFQUFFQyxvREFBQSxDQUFXLE9BQVg7QUFBakI7QUFEd0QsT0FBakQsQ0FBbEI7QUFHQVAsa0JBQVksQ0FBQ0UsR0FBRyxDQUFDTSxJQUFMLENBQVo7QUFDRCxLQUxELENBS0UsT0FBTy9GLEtBQVAsRUFBYztBQUNkZ0csV0FBSyxDQUFDQywyREFBVyxDQUFDakcsS0FBRCxDQUFaLENBQUw7QUFDRDs7QUFDRHZELGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxHQVhEOztBQWFBLFNBQ0UsTUFBQyxvREFBRDtBQUNFLE1BQUUsRUFBQyxPQURMO0FBRUUsV0FBTyxFQUFFLE1BQU04SSxZQUFZLENBQUMsRUFBRCxDQUY3QjtBQUdFLFVBQU0sRUFBRUMsWUFIVjtBQUlFLHNCQUFrQixFQUFFLENBQUNGLFNBQUQsQ0FKdEI7QUFLRSxXQUFPLEVBQUVELE9BTFg7QUFNRSxRQUFJLE1BTk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HN0ksT0FBTyxHQUNOLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURNLEdBR04scUVBQ0c4SSxTQUFTLENBQUM3RSxNQUFWLEdBQW1CLENBQW5CLElBQ0M7QUFDRSxTQUFLLEVBQUU7QUFDTHlFLGNBQVEsRUFBRSxNQURMO0FBRUxnQixlQUFTLEVBQUUsT0FGTjtBQUdMM0MsWUFBTSxFQUFFLE9BSEg7QUFJTGxFLGNBQVEsRUFBRTtBQUpMLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsbURBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsUUFBSSxFQUFDLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2lHLFNBQVMsQ0FBQ3ZHLEdBQVYsQ0FBYzRCLElBQUksSUFDakIsTUFBQyx3REFBRDtBQUFXLE9BQUcsRUFBRUEsSUFBSSxDQUFDMUQsR0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTyxVQUFNLE1BQWI7QUFBYyxPQUFHLEVBQUUwRCxJQUFJLENBQUN2RSxJQUFMLENBQVVnRixhQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQ0UsV0FBTyxFQUFFLE1BQU0rRSx1REFBQSxDQUFhLElBQUd4RixJQUFJLENBQUN2RSxJQUFMLENBQVU4QixRQUFTLEVBQW5DLENBRGpCO0FBRUUsTUFBRSxFQUFDLEdBRkw7QUFHRSxXQUFPLEVBQUV5QyxJQUFJLENBQUN2RSxJQUFMLENBQVVtRixJQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FIRixDQURELENBREgsQ0FQRixDQUZKLENBVkosQ0FERjtBQXlDRDs7QUFFRCwrREFBZTZELFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNnQixZQUFULENBQXNCO0FBQ3BCakcsTUFEb0I7QUFFcEIvRCxNQUZvQjtBQUdwQm1FLFVBSG9CO0FBSXBCRCxPQUpvQjtBQUtwQkUsU0FMb0I7QUFNcEJJLFVBTm9CO0FBT3BCQztBQVBvQixDQUF0QixFQVFHO0FBQ0QsU0FDRSxNQUFDLG1EQUFEO0FBQU0sU0FBSyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU8sV0FBTyxFQUFDLE1BQWY7QUFBc0IsVUFBTSxNQUE1QjtBQUE2QixPQUFHLEVBQUVWLElBQUksQ0FBQy9ELElBQUwsQ0FBVWdGLGFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUcsSUFBR2pCLElBQUksQ0FBQy9ELElBQUwsQ0FBVThCLFFBQVMsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSWlDLElBQUksQ0FBQy9ELElBQUwsQ0FBVW1GLElBQWQsQ0FERixDQURGLENBSEYsRUFTRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWS9ELDZEQUFhLENBQUMyQyxJQUFJLENBQUNxQixTQUFOLENBQXpCLENBVEYsRUFXR3JCLElBQUksQ0FBQ3NCLFFBQUwsSUFBaUIsTUFBQyx3REFBRDtBQUFXLFdBQU8sRUFBRXRCLElBQUksQ0FBQ3NCLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYcEIsRUFhRSxNQUFDLCtEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxNQURMO0FBRUxDLG1CQUFhLEVBQUUsT0FGVjtBQUdMQyxpQkFBVyxFQUFFO0FBSFIsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUd6QixJQUFJLENBQUM5RCxJQU5SLENBYkYsQ0FERixFQXdCRSxNQUFDLDJEQUFEO0FBQWMsU0FBSyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUNFLFFBQUksRUFBRW1FLE9BQU8sR0FBRyxPQUFILEdBQWEsZUFENUI7QUFFRSxTQUFLLEVBQUMsS0FGUjtBQUdFLFNBQUssRUFBRTtBQUFFVyxZQUFNLEVBQUU7QUFBVixLQUhUO0FBSUUsV0FBTyxFQUFFLE1BQ1BVLDREQUFRLENBQUMxQixJQUFJLENBQUNsRCxHQUFOLEVBQVdiLElBQUksQ0FBQ2EsR0FBaEIsRUFBcUJzRCxRQUFyQixFQUErQkMsT0FBTyxHQUFHLEtBQUgsR0FBVyxJQUFqRCxDQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVVFLE1BQUMsK0NBQUQ7QUFDRSxVQUFNLEVBQUVMLElBQUksQ0FBQ2xELEdBRGY7QUFFRSxXQUFPLEVBQ0xxRCxLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUFmLElBQ0U7QUFBTSxlQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLEdBQUVILEtBQUssQ0FBQ0csTUFBTyxJQUFHSCxLQUFLLENBQUNHLE1BQU4sS0FBaUIsQ0FBakIsR0FBcUIsTUFBckIsR0FBOEIsT0FBUSxFQUQ1RCxDQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQXFCRSxNQUFDLHNEQUFEO0FBQVMsVUFBTSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkYsRUF1QkU7QUFDRSxTQUFLLEVBQUU7QUFDTHlFLGNBQVEsRUFBRSxNQURMO0FBRUwzQixZQUFNLEVBQUUzQyxRQUFRLENBQUNILE1BQVQsR0FBa0IsQ0FBbEIsR0FBc0IsT0FBdEIsR0FBZ0MsTUFGbkM7QUFHTDBFLGtCQUFZLEVBQUU7QUFIVCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR3ZFLFFBQVEsQ0FBQ0gsTUFBVCxHQUFrQixDQUFsQixJQUNDRyxRQUFRLENBQUM3QixHQUFULENBQWFnRCxPQUFPLElBQ2xCLE1BQUMsa0RBQUQ7QUFDRSxPQUFHLEVBQUVBLE9BQU8sQ0FBQzlFLEdBRGY7QUFFRSxXQUFPLEVBQUU4RSxPQUZYO0FBR0UsVUFBTSxFQUFFNUIsSUFBSSxDQUFDbEQsR0FIZjtBQUlFLFFBQUksRUFBRWIsSUFKUjtBQUtFLGVBQVcsRUFBRXlFLFdBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUEosQ0F2QkYsRUF5Q0UsTUFBQyx1REFBRDtBQUFtQixVQUFNLEVBQUVWLElBQUksQ0FBQ2xELEdBQWhDO0FBQXFDLFFBQUksRUFBRWIsSUFBM0M7QUFBaUQsZUFBVyxFQUFFeUUsV0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpDRixDQXhCRixDQURGO0FBc0VEOztBQUVELCtEQUFldUYsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxZQUFULENBQXNCO0FBQUV0RSxTQUFGO0FBQVczRixNQUFYO0FBQWlCeUUsYUFBakI7QUFBOEJxQjtBQUE5QixDQUF0QixFQUE4RDtBQUM1RCxRQUFNO0FBQUEsT0FBQ2xFLFFBQUQ7QUFBQSxPQUFXc0k7QUFBWCxNQUEwQi9KLCtDQUFRLENBQUMsS0FBRCxDQUF4QztBQUVBLFNBQ0UscUVBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFnQixPQUFHLEVBQUV3RixPQUFPLENBQUMzRixJQUFSLENBQWFnRixhQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQWdCLE1BQUUsRUFBQyxHQUFuQjtBQUF1QixRQUFJLEVBQUcsSUFBR1csT0FBTyxDQUFDM0YsSUFBUixDQUFhOEIsUUFBUyxFQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c2RCxPQUFPLENBQUMzRixJQUFSLENBQWFtRixJQURoQixDQURGLEVBSUUsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1CL0QsNkRBQWEsQ0FBQ3VFLE9BQU8sQ0FBQ3RFLElBQVQsQ0FBaEMsQ0FKRixFQU1FLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlc0UsT0FBTyxDQUFDMUYsSUFBdkIsQ0FORixFQVFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUNELElBQUksQ0FBQ2lGLElBQUwsS0FBYyxNQUFkLElBQXdCVSxPQUFPLENBQUMzRixJQUFSLENBQWFhLEdBQWIsS0FBcUJiLElBQUksQ0FBQ2EsR0FBbkQsS0FDQyxNQUFDLG1EQUFEO0FBQ0UsWUFBUSxFQUFFZSxRQURaO0FBRUUsU0FBSyxFQUFDLEtBRlI7QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLFdBQU8sRUFBRSxZQUFZO0FBQ25Cc0ksaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDQSxZQUFNQyxpRUFBYSxDQUFDckUsTUFBRCxFQUFTSCxPQUFPLENBQUM5RSxHQUFqQixFQUFzQjRELFdBQXRCLENBQW5CO0FBQ0F5RixpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNELEtBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREYsQ0FSRixDQUZGLENBREYsQ0FERixDQURGO0FBa0NEOztBQUVELCtEQUFlRCxZQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBRUEsTUFBTUcsY0FBYyxHQUFHO0FBQ25CQyxRQUFNLEVBQUUseUNBRFc7QUFFbkJDLFlBQVUsRUFBRSxpQ0FGTztBQUduQkMsV0FBUyxFQUFFLGlCQUhRO0FBSW5CQyxlQUFhLEVBQUUsNkJBSkk7QUFLbkJDLG1CQUFpQixFQUFFLGNBTEE7QUFNbkJDLE9BQUssRUFBRSwyQ0FOWTtBQU9uQkMsZUFBYSxFQUFFO0FBUEksQ0FBdkI7QUFVRSxNQUFNQyxHQUFHLEdBQUNDLDJEQUFhLENBQUNULGNBQUQsQ0FBdkI7QUFFTSxNQUFNVSxFQUFFLEdBQUNDLGlFQUFZLENBQUNILEdBQUQsQ0FBckI7QUFDQSxNQUFNakQsT0FBTyxHQUFHcUQsNkRBQVUsQ0FBQ0osR0FBRCxDQUExQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQlI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0ssS0FBVCxDQUFlO0FBQUVqTCxNQUFGO0FBQVFrTCxXQUFSO0FBQW1CQztBQUFuQixDQUFmLEVBQWtEO0FBQ2hELFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUXBIO0FBQVIsTUFBb0I3RCwrQ0FBUSxDQUFDK0ssU0FBUyxJQUFJLEVBQWQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csVUFBRDtBQUFBLE9BQWFwSDtBQUFiLE1BQThCOUQsK0NBQVEsQ0FBQyxLQUFELENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNtTCxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QnBMLCtDQUFRLENBQUMsSUFBRCxDQUF0QztBQUVBLFFBQU07QUFBQSxPQUFDcUwsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJ0TCwrQ0FBUSxDQUFDLENBQUQsQ0FBNUM7QUFFQSxRQUFNUCxNQUFNLEdBQUd3Ryw2Q0FBTSxFQUFyQjtBQUVBLFFBQU07QUFBQSxPQUFDckcsa0JBQUQ7QUFBQSxPQUFxQjJMO0FBQXJCLE1BQThDdkwsK0NBQVEsQ0FBQyxJQUFELENBQTVEO0FBQ0EsUUFBTTtBQUFBLE9BQUNMLGVBQUQ7QUFBQSxPQUFrQkQ7QUFBbEIsTUFBeUNNLCtDQUFRLENBQUMsS0FBRCxDQUF2RDtBQUVBd0wsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSSxDQUFDL0wsTUFBTSxDQUFDYyxPQUFaLEVBQXFCO0FBQ25CZCxZQUFNLENBQUNjLE9BQVAsR0FBaUJrTCx1REFBRSxDQUFDckMsdURBQUQsQ0FBbkI7QUFDRDs7QUFFRCxRQUFJM0osTUFBTSxDQUFDYyxPQUFYLEVBQW9CO0FBQ2xCZCxZQUFNLENBQUNjLE9BQVAsQ0FBZUMsSUFBZixDQUFvQixNQUFwQixFQUE0QjtBQUFFQyxjQUFNLEVBQUVaLElBQUksQ0FBQ2E7QUFBZixPQUE1QjtBQUVBakIsWUFBTSxDQUFDYyxPQUFQLENBQWVPLEVBQWYsQ0FBa0IsZ0JBQWxCLEVBQW9DLE9BQU87QUFBRTRLO0FBQUYsT0FBUCxLQUFzQjtBQUN4RCxjQUFNO0FBQUUxRyxjQUFGO0FBQVFIO0FBQVIsWUFBMEIsTUFBTThHLDREQUFXLENBQUNELE1BQU0sQ0FBQzlLLE1BQVIsQ0FBakQ7O0FBRUEsWUFBSWYsSUFBSSxDQUFDK0wsZUFBVCxFQUEwQjtBQUN4QkwsK0JBQXFCLGlDQUNoQkcsTUFEZ0I7QUFFbkIzSyxzQkFBVSxFQUFFaUUsSUFGTztBQUduQmhFLDRCQUFnQixFQUFFNkQ7QUFIQyxhQUFyQjtBQUtBbkYsNkJBQW1CLENBQUMsSUFBRCxDQUFuQjtBQUNEOztBQUNEbU0sb0VBQVcsQ0FBQzdHLElBQUQsQ0FBWDtBQUNELE9BWkQ7QUFhRDs7QUFFRDhHLFlBQVEsQ0FBQ0MsS0FBVCxHQUFrQixZQUFXbE0sSUFBSSxDQUFDbUYsSUFBTCxDQUFVZ0gsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUF3QixFQUFyRDtBQUVBLFdBQU8sTUFBTTtBQUNYLFVBQUl2TSxNQUFNLENBQUNjLE9BQVgsRUFBb0I7QUFDbEJkLGNBQU0sQ0FBQ2MsT0FBUCxDQUFlQyxJQUFmLENBQW9CLFlBQXBCO0FBQ0FmLGNBQU0sQ0FBQ2MsT0FBUCxDQUFlMEwsR0FBZjtBQUNEO0FBQ0YsS0FMRDtBQU1ELEdBL0JRLEVBK0JOLEVBL0JNLENBQVQ7QUFpQ0FULGtEQUFTLENBQUMsTUFBTTtBQUNkTixjQUFVLElBQUlnQixVQUFVLENBQUMsTUFBTXBJLGFBQWEsQ0FBQyxLQUFELENBQXBCLEVBQTZCLElBQTdCLENBQXhCO0FBQ0QsR0FGUSxFQUVOLENBQUNvSCxVQUFELENBRk0sQ0FBVDs7QUFJQSxRQUFNaUIsaUJBQWlCLEdBQUcsWUFBWTtBQUNwQyxRQUFJO0FBQ0YsWUFBTWpELEdBQUcsR0FBRyxNQUFNQyxnREFBQSxDQUFXLEdBQUVDLHVEQUFRLFlBQXJCLEVBQWtDO0FBQ2xEQyxlQUFPLEVBQUU7QUFBRUMsdUJBQWEsRUFBRUMscURBQUEsQ0FBVyxPQUFYO0FBQWpCLFNBRHlDO0FBRWxENkMsY0FBTSxFQUFFO0FBQUVmO0FBQUY7QUFGMEMsT0FBbEMsQ0FBbEI7QUFLQSxVQUFJbkMsR0FBRyxDQUFDTSxJQUFKLENBQVN0RixNQUFULEtBQW9CLENBQXhCLEVBQTJCa0gsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUUzQnZILGNBQVEsQ0FBQ2dELElBQUksSUFBSSxDQUFDLEdBQUdBLElBQUosRUFBVSxHQUFHcUMsR0FBRyxDQUFDTSxJQUFqQixDQUFULENBQVI7QUFDQThCLG1CQUFhLENBQUN6RSxJQUFJLElBQUlBLElBQUksR0FBRyxDQUFoQixDQUFiO0FBQ0QsS0FWRCxDQVVFLE9BQU9wRCxLQUFQLEVBQWM7QUFDZGdHLFdBQUssQ0FBQyxzQkFBRCxDQUFMO0FBQ0Q7QUFDRixHQWREOztBQWdCQSxNQUFJd0IsS0FBSyxDQUFDL0csTUFBTixLQUFpQixDQUFqQixJQUFzQjhHLFlBQTFCLEVBQXdDLE9BQU8scUVBQUUsTUFBQyxnRUFBRDtBQUFZLFFBQUksRUFBRW5MLElBQWxCO0FBQXdCLFlBQVEsRUFBRWdFLFFBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBRixFQUFnRCxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBaEQsQ0FBUDtBQUV4QyxTQUNFLHFFQUNHcUgsVUFBVSxJQUFJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURqQixFQUdHdkwsZUFBZSxJQUFJQyxrQkFBa0IsS0FBSyxJQUExQyxJQUNDLE1BQUMsK0VBQUQ7QUFDRSxVQUFNLEVBQUVILE1BRFY7QUFFRSx1QkFBbUIsRUFBRUMsbUJBRnZCO0FBR0UsbUJBQWUsRUFBRUMsZUFIbkI7QUFJRSxzQkFBa0IsRUFBRUMsa0JBSnRCO0FBS0UsUUFBSSxFQUFFQyxJQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQWFFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBWSxRQUFJLEVBQUVBLElBQWxCO0FBQXdCLFlBQVEsRUFBRWdFLFFBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFLE1BQUMseUVBQUQ7QUFDRSxXQUFPLEVBQUVzSCxPQURYO0FBRUUsUUFBSSxFQUFFZ0IsaUJBRlI7QUFHRSxVQUFNLEVBQUUsTUFBQyxrRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSFY7QUFJRSxjQUFVLEVBQUUsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmQ7QUFLRSxjQUFVLEVBQUVsQixLQUFLLENBQUMvRyxNQUxwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0crRyxLQUFLLENBQUN6SSxHQUFOLENBQVVvQixJQUFJLElBQ2IsTUFBQyw4REFBRDtBQUNFLE9BQUcsRUFBRUEsSUFBSSxDQUFDbEQsR0FEWjtBQUVFLFFBQUksRUFBRWtELElBRlI7QUFHRSxRQUFJLEVBQUUvRCxJQUhSO0FBSUUsWUFBUSxFQUFFZ0UsUUFKWjtBQUtFLGlCQUFhLEVBQUVDLGFBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQVBILENBSEYsQ0FiRixDQURGO0FBcUNEOztBQUVEZ0gsS0FBSyxDQUFDdUIsZUFBTixHQUF3QixNQUFNQyxHQUFOLElBQWE7QUFDbkMsTUFBSTtBQUNGLFVBQU07QUFBRUM7QUFBRixRQUFZQyxxREFBWSxDQUFDRixHQUFELENBQTlCO0FBRUEsVUFBTXBELEdBQUcsR0FBRyxNQUFNQyxnREFBQSxDQUFXLEdBQUVDLHVEQUFRLFlBQXJCLEVBQWtDO0FBQ2xEQyxhQUFPLEVBQUU7QUFBRUMscUJBQWEsRUFBRWlEO0FBQWpCLE9BRHlDO0FBRWxESCxZQUFNLEVBQUU7QUFBRWYsa0JBQVUsRUFBRTtBQUFkO0FBRjBDLEtBQWxDLENBQWxCO0FBS0EsV0FBTztBQUFFTixlQUFTLEVBQUU3QixHQUFHLENBQUNNO0FBQWpCLEtBQVA7QUFDRCxHQVRELENBU0UsT0FBTy9GLEtBQVAsRUFBYztBQUNkLFdBQU87QUFBRXVILGtCQUFZLEVBQUU7QUFBaEIsS0FBUDtBQUNEO0FBQ0YsQ0FiRDs7QUFlQSwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSUE7QUFDQTs7QUFFQSxNQUFNN0osYUFBYSxHQUFFZ0UsU0FBUyxJQUFFO0FBQzVCLFFBQU13SCxLQUFLLEdBQUNDLDZDQUFNLENBQUNDLElBQUksQ0FBQ0MsR0FBTCxFQUFELENBQWxCO0FBQ0EsUUFBTUMsUUFBUSxHQUFDSCw2Q0FBTSxDQUFDekgsU0FBRCxDQUFyQjtBQUNBLFFBQU02SCxXQUFXLEdBQUNMLEtBQUssQ0FBQ00sSUFBTixDQUFXRixRQUFYLEVBQW9CLE9BQXBCLENBQWxCOztBQUVBLE1BQUdDLFdBQVcsR0FBQyxFQUFmLEVBQ0E7QUFDSSxXQUNJLCtFQUNNLE1BQUMscURBQUQ7QUFBUSxZQUFNLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBCN0gsU0FBMUIsQ0FETixDQURKO0FBS0gsR0FQRCxNQVFLLElBQUc2SCxXQUFXLEdBQUMsRUFBWixJQUFnQkEsV0FBVyxHQUFDLEVBQS9CLEVBQ0w7QUFDSSxXQUNJLG1GQUNVLE1BQUMscURBQUQ7QUFBUSxZQUFNLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBCN0gsU0FBMUIsQ0FEVixDQURKO0FBS0gsR0FQSSxNQVFBLElBQUc2SCxXQUFXLEdBQUMsRUFBZixFQUNMO0FBQ0ksV0FDSSxxRUFDQSxNQUFDLHFEQUFEO0FBQVEsWUFBTSxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBcUM3SCxTQUFyQyxDQURBLENBREo7QUFLSDtBQUNKLENBN0JEOztBQStCQSwrREFBZWhFLGFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNMEssV0FBVyxHQUFHLE1BQU1xQixZQUFOLElBQXNCO0FBQ3hDLE1BQUk7QUFDRixVQUFNOUQsR0FBRyxHQUFHLE1BQU1DLGdEQUFBLENBQVcsR0FBRUMsaURBQVEsbUJBQWtCNEQsWUFBYSxFQUFwRCxFQUF1RDtBQUN2RTNELGFBQU8sRUFBRTtBQUFFQyxxQkFBYSxFQUFFQyxvREFBQSxDQUFXLE9BQVg7QUFBakI7QUFEOEQsS0FBdkQsQ0FBbEI7QUFJQSxXQUFPO0FBQUV2RSxVQUFJLEVBQUVrRSxHQUFHLENBQUNNLElBQUosQ0FBU3hFLElBQWpCO0FBQXVCSCxtQkFBYSxFQUFFcUUsR0FBRyxDQUFDTSxJQUFKLENBQVMzRTtBQUEvQyxLQUFQO0FBQ0QsR0FORCxDQU1FLE9BQU9wQixLQUFQLEVBQWM7QUFDZHNFLFdBQU8sQ0FBQ3RFLEtBQVIsQ0FBY0EsS0FBZDtBQUNEO0FBQ0YsQ0FWRDs7QUFZQSwrREFBZWtJLFdBQWYsRTs7Ozs7Ozs7Ozs7O0FDaEJBLE1BQU1FLFdBQVcsR0FBRzlLLFVBQVUsSUFBSTtBQUNoQyxRQUFNa00sS0FBSyxHQUFHLElBQUlDLEtBQUosQ0FBVSxZQUFWLENBQWQ7QUFFQUQsT0FBSyxJQUFJQSxLQUFLLENBQUNFLElBQU4sRUFBVDs7QUFFQSxNQUFJcE0sVUFBSixFQUFnQjtBQUNkK0ssWUFBUSxDQUFDQyxLQUFULEdBQWtCLG9CQUFtQmhMLFVBQVcsRUFBaEQ7O0FBRUEsUUFBSStLLFFBQVEsQ0FBQ3NCLGVBQVQsS0FBNkIsU0FBakMsRUFBNEM7QUFDMUNsQixnQkFBVSxDQUFDLE1BQU07QUFDZkosZ0JBQVEsQ0FBQ0MsS0FBVCxHQUFpQixVQUFqQjtBQUNELE9BRlMsRUFFUCxJQUZPLENBQVY7QUFHRDtBQUNGO0FBQ0YsQ0FkRDs7QUFnQkEsK0RBQWVGLFdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNd0IsS0FBSyxHQUFHbEUsbURBQUEsQ0FBYTtBQUN6Qm1FLFNBQU8sRUFBRyxHQUFFbEUsaURBQVEsWUFESztBQUV6QkMsU0FBTyxFQUFFO0FBQUVDLGlCQUFhLEVBQUVDLG9EQUFBLENBQVcsT0FBWDtBQUFqQjtBQUZnQixDQUFiLENBQWQ7QUFLTyxNQUFNekIsYUFBYSxHQUFHLE9BQzNCaEksSUFEMkIsRUFFM0JvRixRQUYyQixFQUczQlAsTUFIMkIsRUFJM0JkLFFBSjJCLEVBSzNCa0MsVUFMMkIsRUFNM0J4QixRQU4yQixLQU94QjtBQUNILE1BQUk7QUFDRixVQUFNMkUsR0FBRyxHQUFHLE1BQU1tRSxLQUFLLENBQUN6SixJQUFOLENBQVcsR0FBWCxFQUFnQjtBQUFFOUQsVUFBRjtBQUFRb0YsY0FBUjtBQUFrQlA7QUFBbEIsS0FBaEIsQ0FBbEI7QUFFQWQsWUFBUSxDQUFDZ0QsSUFBSSxJQUFJLENBQUNxQyxHQUFHLENBQUNNLElBQUwsRUFBVyxHQUFHM0MsSUFBZCxDQUFULENBQVI7QUFDQWQsY0FBVSxDQUFDO0FBQUVqRyxVQUFJLEVBQUUsRUFBUjtBQUFZb0YsY0FBUSxFQUFFO0FBQXRCLEtBQUQsQ0FBVjtBQUNELEdBTEQsQ0FLRSxPQUFPekIsS0FBUCxFQUFjO0FBQ2QsVUFBTThKLFFBQVEsR0FBRzdELHFEQUFXLENBQUNqRyxLQUFELENBQTVCO0FBQ0FjLFlBQVEsQ0FBQ2dKLFFBQUQsQ0FBUjtBQUNEO0FBQ0YsQ0FqQk07QUFtQkEsTUFBTXhJLFVBQVUsR0FBRyxPQUFPWSxNQUFQLEVBQWU5QixRQUFmLEVBQXlCQyxhQUF6QixLQUEyQztBQUNuRSxNQUFJO0FBQ0YsVUFBTXVKLEtBQUssQ0FBQ0csTUFBTixDQUFjLElBQUc3SCxNQUFPLEVBQXhCLENBQU47QUFDQTlCLFlBQVEsQ0FBQ2dELElBQUksSUFBSUEsSUFBSSxDQUFDMUMsTUFBTCxDQUFZUCxJQUFJLElBQUlBLElBQUksQ0FBQ2xELEdBQUwsS0FBYWlGLE1BQWpDLENBQVQsQ0FBUjtBQUNBN0IsaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQUpELENBSUUsT0FBT0wsS0FBUCxFQUFjO0FBQ2RnRyxTQUFLLENBQUNDLHFEQUFXLENBQUNqRyxLQUFELENBQVosQ0FBTDtBQUNEO0FBQ0YsQ0FSTTtBQVVBLE1BQU02QixRQUFRLEdBQUcsT0FBT0ssTUFBUCxFQUFlbEYsTUFBZixFQUF1QnVELFFBQXZCLEVBQWlDSSxJQUFJLEdBQUcsSUFBeEMsS0FBaUQ7QUFDdkUsTUFBSTtBQUNGLFFBQUlBLElBQUosRUFBVTtBQUNSLFlBQU1pSixLQUFLLENBQUN6SixJQUFOLENBQVksU0FBUStCLE1BQU8sRUFBM0IsQ0FBTjtBQUNBM0IsY0FBUSxDQUFDNkMsSUFBSSxJQUFJLENBQUMsR0FBR0EsSUFBSixFQUFVO0FBQUVoSCxZQUFJLEVBQUVZO0FBQVIsT0FBVixDQUFULENBQVI7QUFDRCxLQUhELENBSUE7QUFKQSxTQUtLLElBQUksQ0FBQzJELElBQUwsRUFBVztBQUNkLGNBQU1pSixLQUFLLENBQUNJLEdBQU4sQ0FBVyxXQUFVOUgsTUFBTyxFQUE1QixDQUFOO0FBQ0EzQixnQkFBUSxDQUFDNkMsSUFBSSxJQUFJQSxJQUFJLENBQUMxQyxNQUFMLENBQVlDLElBQUksSUFBSUEsSUFBSSxDQUFDdkUsSUFBTCxLQUFjWSxNQUFsQyxDQUFULENBQVI7QUFDRDtBQUNGLEdBVkQsQ0FVRSxPQUFPZ0QsS0FBUCxFQUFjO0FBQ2RnRyxTQUFLLENBQUNDLHFEQUFXLENBQUNqRyxLQUFELENBQVosQ0FBTDtBQUNEO0FBQ0YsQ0FkTTtBQWdCQSxNQUFNbUMsV0FBVyxHQUFHLE9BQU9ELE1BQVAsRUFBZTlGLElBQWYsRUFBcUJDLElBQXJCLEVBQTJCd0UsV0FBM0IsRUFBd0N2RSxPQUF4QyxLQUFvRDtBQUM3RSxNQUFJO0FBQ0YsVUFBTW1KLEdBQUcsR0FBRyxNQUFNbUUsS0FBSyxDQUFDekosSUFBTixDQUFZLFlBQVcrQixNQUFPLEVBQTlCLEVBQWlDO0FBQUU3RjtBQUFGLEtBQWpDLENBQWxCO0FBRUEsVUFBTTROLFVBQVUsR0FBRztBQUNqQmhOLFNBQUcsRUFBRXdJLEdBQUcsQ0FBQ00sSUFEUTtBQUVqQjNKLFVBRmlCO0FBR2pCQyxVQUhpQjtBQUlqQm9CLFVBQUksRUFBRXlMLElBQUksQ0FBQ0MsR0FBTDtBQUpXLEtBQW5CO0FBT0F0SSxlQUFXLENBQUN1QyxJQUFJLElBQUksQ0FBQzZHLFVBQUQsRUFBYSxHQUFHN0csSUFBaEIsQ0FBVCxDQUFYO0FBQ0E5RyxXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0QsR0FaRCxDQVlFLE9BQU8wRCxLQUFQLEVBQWM7QUFDZGdHLFNBQUssQ0FBQ0MscURBQVcsQ0FBQ2pHLEtBQUQsQ0FBWixDQUFMO0FBQ0Q7QUFDRixDQWhCTTtBQWtCQSxNQUFNdUcsYUFBYSxHQUFHLE9BQU9yRSxNQUFQLEVBQWVnSSxTQUFmLEVBQTBCckosV0FBMUIsS0FBMEM7QUFDckUsTUFBSTtBQUNGLFVBQU0rSSxLQUFLLENBQUNHLE1BQU4sQ0FBYyxJQUFHN0gsTUFBTyxJQUFHZ0ksU0FBVSxFQUFyQyxDQUFOO0FBQ0FySixlQUFXLENBQUN1QyxJQUFJLElBQUlBLElBQUksQ0FBQzFDLE1BQUwsQ0FBWXFCLE9BQU8sSUFBSUEsT0FBTyxDQUFDOUUsR0FBUixLQUFnQmlOLFNBQXZDLENBQVQsQ0FBWDtBQUNELEdBSEQsQ0FHRSxPQUFPbEssS0FBUCxFQUFjO0FBQ2RnRyxTQUFLLENBQUNDLHFEQUFXLENBQUNqRyxLQUFELENBQVosQ0FBTDtBQUNEO0FBQ0YsQ0FQTSxDOzs7Ozs7Ozs7OztBQ3pFUCxpRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBNb2RhbCwgU2VnbWVudCwgTGlzdCwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlTm90aWZpY2F0aW9uTW9kYWwoe1xyXG4gIHNvY2tldCxcclxuICBzaG93TmV3TWVzc2FnZU1vZGFsLFxyXG4gIG5ld01lc3NhZ2VNb2RhbCxcclxuICBuZXdNZXNzYWdlUmVjZWl2ZWQsXHJcbiAgdXNlclxyXG59KSB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvbk1vZGFsQ2xvc2UgPSAoKSA9PiBzaG93TmV3TWVzc2FnZU1vZGFsKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZm9ybVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xyXG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwic2VuZE1zZ0Zyb21Ob3RpZmljYXRpb25cIiwge1xyXG4gICAgICAgIHVzZXJJZDogdXNlci5faWQsXHJcbiAgICAgICAgbXNnU2VuZFRvVXNlcklkOiBuZXdNZXNzYWdlUmVjZWl2ZWQuc2VuZGVyLFxyXG4gICAgICAgIG1zZzogdGV4dFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibXNnU2VudEZyb21Ob3RpZmljYXRpb25cIiwgKCkgPT4ge1xyXG4gICAgICAgIHNob3dOZXdNZXNzYWdlTW9kYWwoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICBvcGVuPXtuZXdNZXNzYWdlTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgIGNsb3NlSWNvblxyXG4gICAgICAgIGNsb3NlT25EaW1tZXJDbGlja1xyXG4gICAgICA+XHJcbiAgICAgICAgPE1vZGFsLkhlYWRlciBjb250ZW50PXtgTmV3IE1lc3NhZ2UgZnJvbSAke25ld01lc3NhZ2VSZWNlaXZlZC5zZW5kZXJOYW1lfWB9IC8+XHJcblxyXG4gICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWJibGVXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbmxpbmVJY29uXCIgc3JjPXtuZXdNZXNzYWdlUmVjZWl2ZWQuc2VuZGVyUHJvZmlsZVBpY30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm90aGVyQnViYmxlIG90aGVyXCI+e25ld01lc3NhZ2VSZWNlaXZlZC5tc2d9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdGhlclwiPntjYWxjdWxhdGVUaW1lKG5ld01lc3NhZ2VSZWNlaXZlZC5kYXRlKX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInN0aWNreVwiLCBib3R0b206IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxTZWdtZW50IHNlY29uZGFyeSBjb2xvcj1cInRlYWxcIiBhdHRhY2hlZD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtIHJlcGx5IG9uU3VibWl0PXtmb3JtU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VuZCBOZXcgTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwidGVsZWdyYW0gcGxhbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGV4dCA9PT0gXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbWVzc2FnZXM/bWVzc2FnZT0ke25ld01lc3NhZ2VSZWNlaXZlZC5zZW5kZXJ9YH0+XHJcbiAgICAgICAgICAgICAgPGE+VmlldyBBbGwgTWVzc2FnZXM8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgPEluc3RydWN0aW9ucyB1c2VybmFtZT17dXNlci51c2VybmFtZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IEluc3RydWN0aW9ucyA9ICh7IHVzZXJuYW1lIH0pID0+IChcclxuICA8TGlzdD5cclxuICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgIDxJY29uIG5hbWU9XCJoZWxwXCIgLz5cclxuICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICA8TGlzdC5IZWFkZXI+XHJcbiAgICAgICAgICBJZiB5b3UgZG8gbm90IGxpa2UgdGhpcyBwb3B1cCB0byBhcHBlYXIgd2hlbiB5b3UgcmVjZWl2ZSBhIG5ldyBtZXNzYWdlOlxyXG4gICAgICAgIDwvTGlzdC5IZWFkZXI+XHJcbiAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgPC9MaXN0Lkl0ZW0+XHJcblxyXG4gICAgPExpc3QuSXRlbT5cclxuICAgICAgPEljb24gbmFtZT1cImhhbmQgcG9pbnQgcmlnaHRcIiAvPlxyXG4gICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgIFlvdSBjYW4gZGlzYWJsZSBpdCBieSBnb2luZyB0b1xyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHt1c2VybmFtZX1gfT5cclxuICAgICAgICAgIDxhPiBBY2NvdW50IDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgUGFnZSBhbmQgY2xpY2tpbmcgb24gU2V0dGluZ3MgVGFiLlxyXG4gICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgIDwvTGlzdC5JdGVtPlxyXG5cclxuICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgIDxJY29uIG5hbWU9XCJoYW5kIHBvaW50IHJpZ2h0XCIgLz5cclxuICAgICAgSW5zaWRlIHRoZSBtZW51LHRoZXJlIGlzIGFuIHNldHRpbmcgbmFtZWQ6IFNob3cgTmV3IE1lc3NhZ2UgUG9wdXA/XHJcbiAgICA8L0xpc3QuSXRlbT5cclxuXHJcbiAgICA8TGlzdC5JdGVtPlxyXG4gICAgICA8SWNvbiBuYW1lPVwiaGFuZCBwb2ludCByaWdodFwiIC8+XHJcbiAgICAgIEp1c3QgdG9nZ2xlIHRoZSBzZXR0aW5nIHRvIGRpc2FibGUvZW5hYmxlIHRoZSBNZXNzYWdlIFBvcHVwIHRvIGFwcGVhci5cclxuICAgIDwvTGlzdC5JdGVtPlxyXG4gIDwvTGlzdD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VOb3RpZmljYXRpb25Nb2RhbDtcclxuIiwiaW1wb3J0IHsgTWVzc2FnZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qcm9maWxlUG9zdHMgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIlNvcnJ5XCIgY29udGVudD1cIlVzZXIgaGFzIG5vdCBwb3N0ZWQgYW55dGhpbmcgeWV0IVwiIC8+XHJcbiAgICA8QnV0dG9uIGljb249XCJsb25nIGFycm93IGFsdGVybmF0ZSBsZWZ0XCIgY29udGVudD1cIkdvIEJhY2tcIiBhcz1cImFcIiBocmVmPVwiL1wiIC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Gb2xsb3dEYXRhID0gKHsgZm9sbG93ZXJzQ29tcG9uZW50LCBmb2xsb3dpbmdDb21wb25lbnQgfSkgPT4gKFxyXG4gIDw+XHJcbiAgICB7Zm9sbG93ZXJzQ29tcG9uZW50ICYmIChcclxuICAgICAgPE1lc3NhZ2UgaWNvbj1cInVzZXIgb3V0bGluZVwiIGluZm8gY29udGVudD17YFVzZXIgZG9lcyBub3QgaGF2ZSBmb2xsb3dlcnNgfSAvPlxyXG4gICAgKX1cclxuXHJcbiAgICB7Zm9sbG93aW5nQ29tcG9uZW50ICYmIChcclxuICAgICAgPE1lc3NhZ2UgaWNvbj1cInVzZXIgb3V0bGluZVwiIGluZm8gY29udGVudD17YFVzZXIgZG9lcyBub3QgZm9sbG93IGFueSB1c2Vyc2B9IC8+XHJcbiAgICApfVxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vTWVzc2FnZXMgPSAoKSA9PiAoXHJcbiAgPE1lc3NhZ2VcclxuICAgIGluZm9cclxuICAgIGljb249XCJ0ZWxlZ3JhbSBwbGFuZVwiXHJcbiAgICBoZWFkZXI9XCJTb3JyeVwiXHJcbiAgICBjb250ZW50PVwiWW91IGhhdmUgbm90IG1lc3NhZ2VkIGFueW9uZSB5ZXQuU2VhcmNoIGFib3ZlIHRvIG1lc3NhZ2Ugc29tZW9uZSFcIlxyXG4gIC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qb3N0cyA9ICgpID0+IChcclxuICA8TWVzc2FnZVxyXG4gICAgaW5mb1xyXG4gICAgaWNvbj1cIm1laFwiXHJcbiAgICBoZWFkZXI9XCJIZXkhXCJcclxuICAgIGNvbnRlbnQ9XCJObyBQb3N0cy4gTWFrZSBzdXJlIHlvdSBoYXZlIGZvbGxvd2VkIHNvbWVvbmUuXCJcclxuICAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUHJvZmlsZSA9ICgpID0+IChcclxuICA8TWVzc2FnZSBpbmZvIGljb249XCJtZWhcIiBoZWFkZXI9XCJIZXkhXCIgY29udGVudD1cIk5vIFByb2ZpbGUgRm91bmQuXCIgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb05vdGlmaWNhdGlvbnMgPSAoKSA9PiAoXHJcbiAgPE1lc3NhZ2UgY29udGVudD1cIk5vIE5vdGlmaWNhdGlvbnNcIiBpY29uPVwic21pbGVcIiBpbmZvIC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qb3N0Rm91bmQgPSAoKSA9PiAoXHJcbiAgPE1lc3NhZ2UgaW5mbyBpY29uPVwibWVoXCIgaGVhZGVyPVwiSGV5IVwiIGNvbnRlbnQ9XCJObyBQb3N0IEZvdW5kLlwiIC8+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBQbGFjZWhvbGRlcixcclxuICBEaXZpZGVyLFxyXG4gIExpc3QsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEljb25cclxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGxhY2VIb2xkZXJQb3N0cyA9ICgpID0+XHJcbiAgcmFuZ2UoMSwgMykubWFwKGl0ZW0gPT4gKFxyXG4gICAgPGRpdiBrZXk9e2l0ZW19PlxyXG4gICAgICA8UGxhY2Vob2xkZXIgZmx1aWQ+XHJcbiAgICAgICAgPFBsYWNlaG9sZGVyLkhlYWRlciBpbWFnZT5cclxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxyXG4gICAgICAgIDwvUGxhY2Vob2xkZXIuSGVhZGVyPlxyXG4gICAgICAgIDxQbGFjZWhvbGRlci5QYXJhZ3JhcGg+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxyXG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cclxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxyXG4gICAgICAgIDwvUGxhY2Vob2xkZXIuUGFyYWdyYXBoPlxyXG4gICAgICA8L1BsYWNlaG9sZGVyPlxyXG4gICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgIDwvZGl2PlxyXG4gICkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYWNlSG9sZGVyU3VnZ2VzdGlvbnMgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgIDxDYXJkIGNvbG9yPVwicmVkXCI+XHJcbiAgICAgICAgPFBsYWNlaG9sZGVyPlxyXG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkltYWdlIHNxdWFyZSAvPlxyXG4gICAgICAgIDwvUGxhY2Vob2xkZXI+XHJcbiAgICAgICAgPENhcmQuQ29udGVudD5cclxuICAgICAgICAgIDxQbGFjZWhvbGRlcj5cclxuICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9XCJtZWRpdW1cIiAvPlxyXG4gICAgICAgICAgICA8L1BsYWNlaG9sZGVyLkhlYWRlcj5cclxuICAgICAgICAgIDwvUGxhY2Vob2xkZXI+XHJcbiAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcblxyXG4gICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIGNpcmN1bGFyXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGljb249XCJhZGQgdXNlclwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJGb2xsb3dcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInR3aXR0ZXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9MaXN0Lkl0ZW0+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgUGxhY2VIb2xkZXJOb3RpZmljYXRpb25zID0gKCkgPT5cclxuICByYW5nZSgxLCAxMCkubWFwKGl0ZW0gPT4gKFxyXG4gICAgPD5cclxuICAgICAgPFBsYWNlaG9sZGVyIGtleT17aXRlbX0+XHJcbiAgICAgICAgPFBsYWNlaG9sZGVyLkhlYWRlciBpbWFnZT5cclxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxyXG4gICAgICAgIDwvUGxhY2Vob2xkZXIuSGVhZGVyPlxyXG4gICAgICA8L1BsYWNlaG9sZGVyPlxyXG4gICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgIDwvPlxyXG4gICkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVuZE1lc3NhZ2UgPSAoKSA9PiAoXHJcbiAgPENvbnRhaW5lciB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgIDxJY29uIG5hbWU9XCJyZWZyZXNoXCIgc2l6ZT1cImxhcmdlXCIgLz5cclxuICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gIDwvQ29udGFpbmVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpa2VzUGxhY2VIb2xkZXIgPSAoKSA9PlxyXG4gIHJhbmdlKDEsIDYpLm1hcChpdGVtID0+IChcclxuICAgIDxQbGFjZWhvbGRlciBrZXk9e2l0ZW19IHN0eWxlPXt7IG1pbldpZHRoOiBcIjIwMHB4XCIgfX0+XHJcbiAgICAgIDxQbGFjZWhvbGRlci5IZWFkZXIgaW1hZ2U+XHJcbiAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPVwiZnVsbFwiIC8+XHJcbiAgICAgIDwvUGxhY2Vob2xkZXIuSGVhZGVyPlxyXG4gICAgPC9QbGFjZWhvbGRlcj5cclxuICApKTtcclxuIiwiaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdERlbGV0ZVRvYXN0ciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRvYXN0Q29udGFpbmVyXHJcbiAgICAgIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiXHJcbiAgICAgIGF1dG9DbG9zZT17MzAwMH1cclxuICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cclxuICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxyXG4gICAgICBjbG9zZU9uQ2xpY2tcclxuICAgICAgcnRsPXtmYWxzZX1cclxuICAgICAgcGF1c2VPbkZvY3VzTG9zc1xyXG4gICAgICBkcmFnZ2FibGVcclxuICAgICAgcGF1c2VPbkhvdmVyPXtmYWxzZX0+XHJcbiAgICAgIHt0b2FzdC5pbmZvKFwiRGVsZXRlZCBTdWNjZXNzZnVsbHlcIiwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZFxyXG4gICAgICB9KX1cclxuICAgIDwvVG9hc3RDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBFcnJvclRvYXN0ciA9ICh7IGVycm9yIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRvYXN0Q29udGFpbmVyXHJcbiAgICAgIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiXHJcbiAgICAgIGF1dG9DbG9zZT17MzAwMH1cclxuICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cclxuICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxyXG4gICAgICBjbG9zZU9uQ2xpY2tcclxuICAgICAgcnRsPXtmYWxzZX1cclxuICAgICAgcGF1c2VPbkZvY3VzTG9zc1xyXG4gICAgICBkcmFnZ2FibGVcclxuICAgICAgcGF1c2VPbkhvdmVyPXtmYWxzZX0+XHJcbiAgICAgIHt0b2FzdC5lcnJvcihlcnJvciwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZFxyXG4gICAgICB9KX1cclxuICAgIDwvVG9hc3RDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNc2dTZW50VG9hc3RyID0gKCkgPT4gKFxyXG4gIDxUb2FzdENvbnRhaW5lclxyXG4gICAgcG9zaXRpb249XCJib3R0b20tY2VudGVyXCJcclxuICAgIGF1dG9DbG9zZT17MzAwMH1cclxuICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XHJcbiAgICBuZXdlc3RPblRvcD17ZmFsc2V9XHJcbiAgICBjbG9zZU9uQ2xpY2tcclxuICAgIHJ0bD17ZmFsc2V9XHJcbiAgICBwYXVzZU9uRm9jdXNMb3NzXHJcbiAgICBkcmFnZ2FibGVcclxuICAgIHBhdXNlT25Ib3Zlcj17ZmFsc2V9PlxyXG4gICAge3RvYXN0LnN1Y2Nlc3MoXCJTZW50IHN1Y2Nlc3NmdWxseVwiLCB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1jZW50ZXJcIixcclxuICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZFxyXG4gICAgfSl9XHJcbiAgPC9Ub2FzdENvbnRhaW5lcj5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBJY29uLFxyXG4gIEltYWdlLFxyXG4gIERpdmlkZXIsXHJcbiAgU2VnbWVudCxcclxuICBCdXR0b24sXHJcbiAgUG9wdXAsXHJcbiAgSGVhZGVyLFxyXG4gIE1vZGFsXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBQb3N0Q29tbWVudHMgZnJvbSBcIi4vUG9zdENvbW1lbnRzXCI7XHJcbmltcG9ydCBDb21tZW50SW5wdXRGaWVsZCBmcm9tIFwiLi9Db21tZW50SW5wdXRGaWVsZFwiO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGRlbGV0ZVBvc3QsIGxpa2VQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XHJcbmltcG9ydCBMaWtlc0xpc3QgZnJvbSBcIi4vTGlrZXNMaXN0XCI7XHJcbmltcG9ydCBJbWFnZU1vZGFsIGZyb20gXCIuL0ltYWdlTW9kYWxcIjtcclxuaW1wb3J0IE5vSW1hZ2VNb2RhbCBmcm9tIFwiLi9Ob0ltYWdlTW9kYWxcIjtcclxuXHJcbmZ1bmN0aW9uIENhcmRQb3N0KHsgcG9zdCwgdXNlciwgc2V0UG9zdHMsIHNldFNob3dUb2FzdHIgfSkge1xyXG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGUocG9zdC5saWtlcyk7XHJcblxyXG4gIGNvbnN0IGlzTGlrZWQgPVxyXG4gICAgbGlrZXMubGVuZ3RoID4gMCAmJiBsaWtlcy5maWx0ZXIobGlrZSA9PiBsaWtlLnVzZXIgPT09IHVzZXIuX2lkKS5sZW5ndGggPiAwO1xyXG5cclxuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKHBvc3QuY29tbWVudHMpO1xyXG5cclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBhZGRQcm9wc1RvTW9kYWwgPSAoKSA9PiAoe1xyXG4gICAgcG9zdCxcclxuICAgIHVzZXIsXHJcbiAgICBzZXRMaWtlcyxcclxuICAgIGxpa2VzLFxyXG4gICAgaXNMaWtlZCxcclxuICAgIGNvbW1lbnRzLFxyXG4gICAgc2V0Q29tbWVudHNcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaG93TW9kYWwgJiYgKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgb3Blbj17c2hvd01vZGFsfVxyXG4gICAgICAgICAgY2xvc2VJY29uXHJcbiAgICAgICAgICBjbG9zZU9uRGltbWVyQ2xpY2tcclxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIHtwb3N0LnBpY1VybCA/IChcclxuICAgICAgICAgICAgICA8SW1hZ2VNb2RhbCB7Li4uYWRkUHJvcHNUb01vZGFsKCl9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPE5vSW1hZ2VNb2RhbCB7Li4uYWRkUHJvcHNUb01vZGFsKCl9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxTZWdtZW50IGJhc2ljPlxyXG4gICAgICAgIDxDYXJkIGNvbG9yPVwidGVhbFwiIGZsdWlkPlxyXG4gICAgICAgICAge3Bvc3QucGljVXJsICYmIChcclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtwb3N0LnBpY1VybH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgZmxvYXRlZD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgIHdyYXBwZWRcclxuICAgICAgICAgICAgICB1aT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgYWx0PVwiUG9zdEltYWdlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxJbWFnZSBmbG9hdGVkPVwibGVmdFwiIHNyYz17cG9zdC51c2VyLnByb2ZpbGVQaWNVcmx9IGF2YXRhciBjaXJjdWxhciAvPlxyXG5cclxuICAgICAgICAgICAgeyh1c2VyLnJvbGUgPT09IFwicm9vdFwiIHx8IHBvc3QudXNlci5faWQgPT09IHVzZXIuX2lkKSAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxQb3B1cFxyXG4gICAgICAgICAgICAgICAgICBvbj1cImNsaWNrXCJcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AgcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9kZWxldGVJY29uLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWluaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9XCJoNFwiIGNvbnRlbnQ9XCJBcmUgeW91IHN1cmU/XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHA+VGhpcyBhY3Rpb24gaXMgaXJyZXZlcnNpYmxlITwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVQb3N0KHBvc3QuX2lkLCBzZXRQb3N0cywgc2V0U2hvd1RvYXN0cil9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BvcHVwPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT57cG9zdC51c2VyLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxDYXJkLk1ldGE+e2NhbGN1bGF0ZVRpbWUocG9zdC5jcmVhdGVkQXQpfTwvQ2FyZC5NZXRhPlxyXG5cclxuICAgICAgICAgICAge3Bvc3QubG9jYXRpb24gJiYgPENhcmQuTWV0YSBjb250ZW50PXtwb3N0LmxvY2F0aW9ufSAvPn1cclxuXHJcbiAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcclxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4xcHhcIixcclxuICAgICAgICAgICAgICAgIHdvcmRTcGFjaW5nOiBcIjAuMzVweFwiXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAge3Bvc3QudGV4dH1cclxuICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBuYW1lPXtpc0xpa2VkID8gXCJoZWFydFwiIDogXCJoZWFydCBvdXRsaW5lXCJ9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgbGlrZVBvc3QocG9zdC5faWQsIHVzZXIuX2lkLCBzZXRMaWtlcywgaXNMaWtlZCA/IGZhbHNlIDogdHJ1ZSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8TGlrZXNMaXN0XHJcbiAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICB0cmlnZ2VyPXtcclxuICAgICAgICAgICAgICAgIGxpa2VzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTGlrZXNMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Ake2xpa2VzLmxlbmd0aH0gJHtsaWtlcy5sZW5ndGggPT09IDEgPyBcImxpa2VcIiA6IFwibGlrZXNcIn1gfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBuYW1lPVwiY29tbWVudCBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjdweFwiIH19XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgY29tbWVudHMubWFwKFxyXG4gICAgICAgICAgICAgICAgKGNvbW1lbnQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgIGkgPCAzICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8UG9zdENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDMgJiYgKFxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJWaWV3IE1vcmVcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZWFsXCJcclxuICAgICAgICAgICAgICAgIGJhc2ljXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhclxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuXHJcbiAgICAgICAgICAgIDxDb21tZW50SW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICBzZXRDb21tZW50cz17c2V0Q29tbWVudHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvU2VnbWVudD5cclxuICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUG9zdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgcG9zdENvbW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIENvbW1lbnRJbnB1dEZpZWxkKHsgcG9zdElkLCB1c2VyLCBzZXRDb21tZW50cyB9KSB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgcmVwbHlcclxuICAgICAgb25TdWJtaXQ9e2FzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGF3YWl0IHBvc3RDb21tZW50KHBvc3RJZCwgdXNlciwgdGV4dCwgc2V0Q29tbWVudHMsIHNldFRleHQpO1xyXG5cclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfX0+XHJcbiAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgQ29tbWVudFwiXHJcbiAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICBjb2xvcjogXCJibHVlXCIsXHJcbiAgICAgICAgICBpY29uOiBcImVkaXRcIixcclxuICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXHJcbiAgICAgICAgICBkaXNhYmxlZDogdGV4dCA9PT0gXCJcIiB8fCBsb2FkaW5nXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50SW5wdXRGaWVsZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbWFnZSwgRGl2aWRlciwgTWVzc2FnZSwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnR7cmVmLCB1cGxvYWRCeXRlcywgZ2V0RG93bmxvYWRVUkx9IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5pbXBvcnQge3Y0fSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuLi8uLi9maXJlYmFzZS1jb25maWdcIjtcclxuaW1wb3J0IHsgc3VibWl0TmV3UG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gQ3JlYXRlUG9zdCh7IHVzZXIsIHNldFBvc3RzIH0pIHtcclxuICBjb25zdCBbbmV3UG9zdCwgc2V0TmV3UG9zdF0gPSB1c2VTdGF0ZSh7IHRleHQ6IFwiXCIsIGxvY2F0aW9uOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtoaWdobGlnaHRlZCwgc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbbWVkaWEsIHNldE1lZGlhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttZWRpYVByZXZpZXcsIHNldE1lZGlhUHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3RbcGljVXJsLHNldFBpY1VybF09dXNlU3RhdGUoXCJcIilcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCBmaWxlcyB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgaWYgKG5hbWUgPT09IFwibWVkaWFcIikge1xyXG4gICAgICBzZXRNZWRpYShmaWxlc1swXSk7XHJcbiAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmV3UG9zdChwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFN0eWxlcyA9ICgpID0+ICh7XHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTUwcHhcIixcclxuICAgIHdpZHRoOiBcIjE1MHB4XCIsXHJcbiAgICBib3JkZXI6IFwiZG90dGVkXCIsXHJcbiAgICBwYWRkaW5nVG9wOiBtZWRpYSA9PT0gbnVsbCAmJiBcIjYwcHhcIixcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICBib3JkZXJDb2xvcjogaGlnaGxpZ2h0ZWQgPyBcImdyZWVuXCIgOiBcImJsYWNrXCJcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgXHJcblxyXG4gICAgaWYgKG1lZGlhICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGltYWdlUmVmPXJlZihzdG9yYWdlLGAvaW1hZ2VzLyR7bWVkaWEubmFtZSArIHY0KCl9YCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpbWFnZVJlZik7XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB1cGxvYWRCeXRlcyhpbWFnZVJlZixtZWRpYSkudGhlbigoKT0+e1xyXG4gICAgICAgICBnZXREb3dubG9hZFVSTChpbWFnZVJlZikudGhlbihhc3luYyAodXJsKT0+e1xyXG4gICAgICAgICAgIGF3YWl0IHN1Ym1pdE5ld1Bvc3QobmV3UG9zdC50ZXh0LG5ld1Bvc3QubG9jYXRpb24sdXJsLHNldFBvc3RzLHNldE5ld1Bvc3Qsc2V0RXJyb3IpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGVsc2V7XHJcblxyXG4gICAgYXdhaXQgc3VibWl0TmV3UG9zdChcclxuICAgICAgbmV3UG9zdC50ZXh0LFxyXG4gICAgICBuZXdQb3N0LmxvY2F0aW9uLFxyXG4gICAgICBwaWNVcmwsXHJcbiAgICAgIHNldFBvc3RzLFxyXG4gICAgICBzZXROZXdQb3N0LFxyXG4gICAgICBzZXRFcnJvclxyXG4gICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNZWRpYShudWxsKTtcclxuICAgIHNldE1lZGlhUHJldmlldyhudWxsKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybSBlcnJvcj17ZXJyb3IgIT09IG51bGx9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRFcnJvcihudWxsKX1cclxuICAgICAgICAgIGNvbnRlbnQ9e2Vycm9yfVxyXG4gICAgICAgICAgaGVhZGVyPVwiT29wcyFcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17dXNlci5wcm9maWxlUGljVXJsfSBjaXJjdWxhciBhdmF0YXIgaW5saW5lIC8+XHJcbiAgICAgICAgICA8Rm9ybS5UZXh0QXJlYVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXRzIEhhcHBlbmluZ1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e25ld1Bvc3QudGV4dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgd2lkdGg9ezE0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e25ld1Bvc3QubG9jYXRpb259XHJcbiAgICAgICAgICAgIG5hbWU9XCJsb2NhdGlvblwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiQWRkIExvY2F0aW9uXCJcclxuICAgICAgICAgICAgaWNvbj1cIm1hcCBtYXJrZXIgYWx0ZXJuYXRlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXYW50IHRvIGFkZCBMb2NhdGlvbj9cIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICBzdHlsZT17YWRkU3R5bGVzKCl9XHJcbiAgICAgICAgICBvbkRyYWc9e2UgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uRHJhZ0xlYXZlPXtlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZChmYWxzZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Ecm9wPXtlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BwZWRGaWxlID0gQXJyYXkuZnJvbShlLmRhdGFUcmFuc2Zlci5maWxlcyk7XHJcblxyXG4gICAgICAgICAgICBzZXRNZWRpYShkcm9wcGVkRmlsZVswXSk7XHJcbiAgICAgICAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGRyb3BwZWRGaWxlWzBdKSk7XHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHttZWRpYSA9PT0gbnVsbCA/IChcclxuICAgICAgICAgICAgPEljb24gbmFtZT1cInBsdXNcIiBzaXplPVwiYmlnXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTUwcHhcIiwgd2lkdGg6IFwiMTUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXttZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJQb3N0SW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY2lyY3VsYXJcclxuICAgICAgICAgIGRpc2FibGVkPXtuZXdQb3N0LnRleHQgPT09IFwiXCIgfHwgbG9hZGluZ31cclxuICAgICAgICAgIGNvbnRlbnQ9ezxzdHJvbmc+UG9zdDwvc3Ryb25nPn1cclxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMURBMUYyXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgIGljb249XCJzZW5kXCJcclxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUG9zdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNb2RhbCwgR3JpZCwgSW1hZ2UsIENhcmQsIEljb24sIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IFBvc3RDb21tZW50cyBmcm9tIFwiLi9Qb3N0Q29tbWVudHNcIjtcclxuaW1wb3J0IENvbW1lbnRJbnB1dEZpZWxkIGZyb20gXCIuL0NvbW1lbnRJbnB1dEZpZWxkXCI7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgbGlrZVBvc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcclxuaW1wb3J0IExpa2VzTGlzdCBmcm9tIFwiLi9MaWtlc0xpc3RcIjtcclxuXHJcbmZ1bmN0aW9uIEltYWdlTW9kYWwoe1xyXG4gIHBvc3QsXHJcbiAgdXNlcixcclxuICBzZXRMaWtlcyxcclxuICBsaWtlcyxcclxuICBpc0xpa2VkLFxyXG4gIGNvbW1lbnRzLFxyXG4gIHNldENvbW1lbnRzXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdyaWQgY29sdW1ucz17Mn0gc3RhY2thYmxlIHJlbGF4ZWQ+XHJcbiAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPE1vZGFsLkNvbnRlbnQgaW1hZ2U+XHJcbiAgICAgICAgICAgIDxJbWFnZSB3cmFwcGVkIHNpemU9XCJsYXJnZVwiIHNyYz17cG9zdC5waWNVcmx9IC8+XHJcbiAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPENhcmQgZmx1aWQ+XHJcbiAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPEltYWdlIGZsb2F0ZWQ9XCJsZWZ0XCIgYXZhdGFyIHNyYz17cG9zdC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPntwb3N0LnVzZXIubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgPENhcmQuTWV0YT57Y2FsY3VsYXRlVGltZShwb3N0LmNyZWF0ZWRBdCl9PC9DYXJkLk1ldGE+XHJcblxyXG4gICAgICAgICAgICAgIHtwb3N0LmxvY2F0aW9uICYmIDxDYXJkLk1ldGEgY29udGVudD17cG9zdC5sb2NhdGlvbn0gLz59XHJcblxyXG4gICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxN3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4xcHhcIixcclxuICAgICAgICAgICAgICAgICAgd29yZFNwYWNpbmc6IFwiMC4zNXB4XCJcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAge3Bvc3QudGV4dH1cclxuICAgICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG5cclxuICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgbmFtZT17aXNMaWtlZCA/IFwiaGVhcnRcIiA6IFwiaGVhcnQgb3V0bGluZVwifVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgbGlrZVBvc3QocG9zdC5faWQsIHVzZXIuX2lkLCBzZXRMaWtlcywgaXNMaWtlZCA/IGZhbHNlIDogdHJ1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8TGlrZXNMaXN0XHJcbiAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcj17XHJcbiAgICAgICAgICAgICAgICAgIGxpa2VzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5MaWtlc0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtgJHtsaWtlcy5sZW5ndGh9ICR7bGlrZXMubGVuZ3RoID09PSAxID8gXCJsaWtlXCIgOiBcImxpa2VzXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvbW1lbnRzLmxlbmd0aCA+IDIgPyBcIjIwMHB4XCIgOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnRzLm1hcChjb21tZW50ID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8UG9zdENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8Q29tbWVudElucHV0RmllbGRcclxuICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlTW9kYWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaXN0LCBQb3B1cCwgSW1hZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSBcIi4uLy4uL3V0aWxzL2NhdGNoRXJyb3JzXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMaWtlc1BsYWNlSG9sZGVyIH0gZnJvbSBcIi4uL0xheW91dC9QbGFjZUhvbGRlckdyb3VwXCI7XHJcblxyXG5mdW5jdGlvbiBMaWtlc0xpc3QoeyBwb3N0SWQsIHRyaWdnZXIgfSkge1xyXG4gIGNvbnN0IFtsaWtlc0xpc3QsIHNldExpa2VzTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBnZXRMaWtlc0xpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wb3N0cy9saWtlLyR7cG9zdElkfWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRMaWtlc0xpc3QocmVzLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UG9wdXBcclxuICAgICAgb249XCJjbGlja1wiXHJcbiAgICAgIG9uQ2xvc2U9eygpID0+IHNldExpa2VzTGlzdChbXSl9XHJcbiAgICAgIG9uT3Blbj17Z2V0TGlrZXNMaXN0fVxyXG4gICAgICBwb3BwZXJEZXBlbmRlbmNpZXM9e1tsaWtlc0xpc3RdfVxyXG4gICAgICB0cmlnZ2VyPXt0cmlnZ2VyfVxyXG4gICAgICB3aWRlPlxyXG4gICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICA8TGlrZXNQbGFjZUhvbGRlciAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7bGlrZXNMaXN0Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cmVtXCIsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIyMTBweFwiXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgPExpc3Qgc2VsZWN0aW9uIHNpemU9XCJsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAge2xpa2VzTGlzdC5tYXAobGlrZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXtsaWtlLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGF2YXRhciBzcmM9e2xpa2UudXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvJHtsaWtlLnVzZXIudXNlcm5hbWV9YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2xpa2UudXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvUG9wdXA+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlrZXNMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1vZGFsLCBJbWFnZSwgQ2FyZCwgSWNvbiwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgUG9zdENvbW1lbnRzIGZyb20gXCIuL1Bvc3RDb21tZW50c1wiO1xyXG5pbXBvcnQgQ29tbWVudElucHV0RmllbGQgZnJvbSBcIi4vQ29tbWVudElucHV0RmllbGRcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBsaWtlUG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xyXG5pbXBvcnQgTGlrZXNMaXN0IGZyb20gXCIuL0xpa2VzTGlzdFwiO1xyXG5cclxuZnVuY3Rpb24gTm9JbWFnZU1vZGFsKHtcclxuICBwb3N0LFxyXG4gIHVzZXIsXHJcbiAgc2V0TGlrZXMsXHJcbiAgbGlrZXMsXHJcbiAgaXNMaWtlZCxcclxuICBjb21tZW50cyxcclxuICBzZXRDb21tZW50c1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGZsdWlkPlxyXG4gICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgIDxJbWFnZSBmbG9hdGVkPVwibGVmdFwiIGF2YXRhciBzcmM9e3Bvc3QudXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG5cclxuICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdC51c2VyLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICA8YT57cG9zdC51c2VyLm5hbWV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcblxyXG4gICAgICAgIDxDYXJkLk1ldGE+e2NhbGN1bGF0ZVRpbWUocG9zdC5jcmVhdGVkQXQpfTwvQ2FyZC5NZXRhPlxyXG5cclxuICAgICAgICB7cG9zdC5sb2NhdGlvbiAmJiA8Q2FyZC5NZXRhIGNvbnRlbnQ9e3Bvc3QubG9jYXRpb259IC8+fVxyXG5cclxuICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvblxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxyXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjAuMXB4XCIsXHJcbiAgICAgICAgICAgIHdvcmRTcGFjaW5nOiBcIjAuMzVweFwiXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHtwb3N0LnRleHR9XHJcbiAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICA8L0NhcmQuQ29udGVudD5cclxuXHJcbiAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XHJcbiAgICAgICAgPEljb25cclxuICAgICAgICAgIG5hbWU9e2lzTGlrZWQgPyBcImhlYXJ0XCIgOiBcImhlYXJ0IG91dGxpbmVcIn1cclxuICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIGxpa2VQb3N0KHBvc3QuX2lkLCB1c2VyLl9pZCwgc2V0TGlrZXMsIGlzTGlrZWQgPyBmYWxzZSA6IHRydWUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPExpa2VzTGlzdFxyXG4gICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICBsaWtlcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTGlrZXNMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7YCR7bGlrZXMubGVuZ3RofSAke2xpa2VzLmxlbmd0aCA9PT0gMSA/IFwibGlrZVwiIDogXCJsaWtlc1wifWB9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBjb21tZW50cy5sZW5ndGggPiAyID8gXCIyMDBweFwiIDogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIlxyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICBjb21tZW50cy5tYXAoY29tbWVudCA9PiAoXHJcbiAgICAgICAgICAgICAgPFBvc3RDb21tZW50c1xyXG4gICAgICAgICAgICAgICAga2V5PXtjb21tZW50Ll9pZH1cclxuICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPENvbW1lbnRJbnB1dEZpZWxkIHBvc3RJZD17cG9zdC5faWR9IHVzZXI9e3VzZXJ9IHNldENvbW1lbnRzPXtzZXRDb21tZW50c30gLz5cclxuICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm9JbWFnZU1vZGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29tbWVudCwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xyXG5pbXBvcnQgeyBkZWxldGVDb21tZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBQb3N0Q29tbWVudHMoeyBjb21tZW50LCB1c2VyLCBzZXRDb21tZW50cywgcG9zdElkIH0pIHtcclxuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb21tZW50Lkdyb3VwPlxyXG4gICAgICAgIDxDb21tZW50PlxyXG4gICAgICAgICAgPENvbW1lbnQuQXZhdGFyIHNyYz17Y29tbWVudC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgICA8Q29tbWVudC5Db250ZW50PlxyXG4gICAgICAgICAgICA8Q29tbWVudC5BdXRob3IgYXM9XCJhXCIgaHJlZj17YC8ke2NvbW1lbnQudXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICB7Y29tbWVudC51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgIDwvQ29tbWVudC5BdXRob3I+XHJcbiAgICAgICAgICAgIDxDb21tZW50Lk1ldGFkYXRhPntjYWxjdWxhdGVUaW1lKGNvbW1lbnQuZGF0ZSl9PC9Db21tZW50Lk1ldGFkYXRhPlxyXG5cclxuICAgICAgICAgICAgPENvbW1lbnQuVGV4dD57Y29tbWVudC50ZXh0fTwvQ29tbWVudC5UZXh0PlxyXG5cclxuICAgICAgICAgICAgPENvbW1lbnQuQWN0aW9ucz5cclxuICAgICAgICAgICAgICA8Q29tbWVudC5BY3Rpb24+XHJcbiAgICAgICAgICAgICAgICB7KHVzZXIucm9sZSA9PT0gXCJyb290XCIgfHwgY29tbWVudC51c2VyLl9pZCA9PT0gdXNlci5faWQpICYmIChcclxuICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RGlzYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZWxldGVDb21tZW50KHBvc3RJZCwgY29tbWVudC5faWQsIHNldENvbW1lbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0NvbW1lbnQuQWN0aW9uPlxyXG4gICAgICAgICAgICA8L0NvbW1lbnQuQWN0aW9ucz5cclxuICAgICAgICAgIDwvQ29tbWVudC5Db250ZW50PlxyXG4gICAgICAgIDwvQ29tbWVudD5cclxuICAgICAgPC9Db21tZW50Lkdyb3VwPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENvbW1lbnRzO1xyXG4iLCJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQge2dldEZpcmVzdG9yZX0gZnJvbSBcIkBmaXJlYmFzZS9maXJlc3RvcmVcIlxyXG5pbXBvcnQge2dldFN0b3JhZ2V9IGZyb20gXCJAZmlyZWJhc2Uvc3RvcmFnZVwiXHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lENlRQUHp1SzludTBVWVgzSHpaeVZIQ202N095TlE5QW9cIixcclxuICAgIGF1dGhEb21haW46IFwiaGFja2F0aG9uLWU3NjlkLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcImhhY2thdGhvbi1lNzY5ZFwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJoYWNrYXRob24tZTc2OWQuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjU2MzQ2ODQ2NzY4NFwiLFxyXG4gICAgYXBwSWQ6IFwiMTo1NjM0Njg0Njc2ODQ6d2ViOjkyMGE2ZGYwYTE5YjA2OWFkMjViZjFcIixcclxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy0yTUZQQkwwTjBaXCJcclxuICB9O1xyXG5cclxuICBjb25zdCBhcHA9aW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG4gZXhwb3J0IGNvbnN0IGRiPWdldEZpcmVzdG9yZShhcHApXHJcbiBleHBvcnQgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoYXBwKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCBDcmVhdGVQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3QvQ3JlYXRlUG9zdFwiO1xyXG5pbXBvcnQgQ2FyZFBvc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdC9DYXJkUG9zdFwiO1xyXG5pbXBvcnQgeyBTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCB7IE5vUG9zdHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhXCI7XHJcbmltcG9ydCB7IFBvc3REZWxldGVUb2FzdHIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvVG9hc3RyXCI7XHJcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tIFwicmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQbGFjZUhvbGRlclBvc3RzLCBFbmRNZXNzYWdlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1BsYWNlSG9sZGVyR3JvdXBcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBnZXRVc2VySW5mbyBmcm9tIFwiLi4vdXRpbHMvZ2V0VXNlckluZm9cIjtcclxuaW1wb3J0IE1lc3NhZ2VOb3RpZmljYXRpb25Nb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL01lc3NhZ2VOb3RpZmljYXRpb25Nb2RhbFwiO1xyXG5pbXBvcnQgbmV3TXNnU291bmQgZnJvbSBcIi4uL3V0aWxzL25ld01zZ1NvdW5kXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleCh7IHVzZXIsIHBvc3RzRGF0YSwgZXJyb3JMb2FkaW5nIH0pIHtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKHBvc3RzRGF0YSB8fCBbXSk7XHJcbiAgY29uc3QgW3Nob3dUb2FzdHIsIHNldFNob3dUb2FzdHJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtoYXNNb3JlLCBzZXRIYXNNb3JlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgyKTtcclxuXHJcbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IFtuZXdNZXNzYWdlUmVjZWl2ZWQsIHNldE5ld01lc3NhZ2VSZWNlaXZlZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbmV3TWVzc2FnZU1vZGFsLCBzaG93TmV3TWVzc2FnZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQgPSBpbyhiYXNlVXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImpvaW5cIiwgeyB1c2VySWQ6IHVzZXIuX2lkIH0pO1xyXG5cclxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJuZXdNc2dSZWNlaXZlZFwiLCBhc3luYyAoeyBuZXdNc2cgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgcHJvZmlsZVBpY1VybCB9ID0gYXdhaXQgZ2V0VXNlckluZm8obmV3TXNnLnNlbmRlcik7XHJcblxyXG4gICAgICAgIGlmICh1c2VyLm5ld01lc3NhZ2VQb3B1cCkge1xyXG4gICAgICAgICAgc2V0TmV3TWVzc2FnZVJlY2VpdmVkKHtcclxuICAgICAgICAgICAgLi4ubmV3TXNnLFxyXG4gICAgICAgICAgICBzZW5kZXJOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBzZW5kZXJQcm9maWxlUGljOiBwcm9maWxlUGljVXJsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHNob3dOZXdNZXNzYWdlTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld01zZ1NvdW5kKG5hbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC50aXRsZSA9IGBXZWxjb21lLCAke3VzZXIubmFtZS5zcGxpdChcIiBcIilbMF19YDtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiZGlzY29ubmVjdFwiKTtcclxuICAgICAgICBzb2NrZXQuY3VycmVudC5vZmYoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzaG93VG9hc3RyICYmIHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd1RvYXN0cihmYWxzZSksIDMwMDApO1xyXG4gIH0sIFtzaG93VG9hc3RyXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YU9uU2Nyb2xsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9LFxyXG4gICAgICAgIHBhcmFtczogeyBwYWdlTnVtYmVyIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09PSAwKSBzZXRIYXNNb3JlKGZhbHNlKTtcclxuXHJcbiAgICAgIHNldFBvc3RzKHByZXYgPT4gWy4uLnByZXYsIC4uLnJlcy5kYXRhXSk7XHJcbiAgICAgIHNldFBhZ2VOdW1iZXIocHJldiA9PiBwcmV2ICsgMSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydChcIkVycm9yIGZldGNoaW5nIFBvc3RzXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChwb3N0cy5sZW5ndGggPT09IDAgfHwgZXJyb3JMb2FkaW5nKSByZXR1cm4gPD48Q3JlYXRlUG9zdCB1c2VyPXt1c2VyfSBzZXRQb3N0cz17c2V0UG9zdHN9IC8+PE5vUG9zdHMgLz48Lz47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c2hvd1RvYXN0ciAmJiA8UG9zdERlbGV0ZVRvYXN0ci8+fVxyXG5cclxuICAgICAge25ld01lc3NhZ2VNb2RhbCAmJiBuZXdNZXNzYWdlUmVjZWl2ZWQgIT09IG51bGwgJiYgKFxyXG4gICAgICAgIDxNZXNzYWdlTm90aWZpY2F0aW9uTW9kYWxcclxuICAgICAgICAgIHNvY2tldD17c29ja2V0fVxyXG4gICAgICAgICAgc2hvd05ld01lc3NhZ2VNb2RhbD17c2hvd05ld01lc3NhZ2VNb2RhbH1cclxuICAgICAgICAgIG5ld01lc3NhZ2VNb2RhbD17bmV3TWVzc2FnZU1vZGFsfVxyXG4gICAgICAgICAgbmV3TWVzc2FnZVJlY2VpdmVkPXtuZXdNZXNzYWdlUmVjZWl2ZWR9XHJcbiAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8U2VnbWVudD5cclxuICAgICAgICA8Q3JlYXRlUG9zdCB1c2VyPXt1c2VyfSBzZXRQb3N0cz17c2V0UG9zdHN9IC8+XHJcblxyXG4gICAgICAgIDxJbmZpbml0ZVNjcm9sbFxyXG4gICAgICAgICAgaGFzTW9yZT17aGFzTW9yZX1cclxuICAgICAgICAgIG5leHQ9e2ZldGNoRGF0YU9uU2Nyb2xsfVxyXG4gICAgICAgICAgbG9hZGVyPXs8UGxhY2VIb2xkZXJQb3N0cyAvPn1cclxuICAgICAgICAgIGVuZE1lc3NhZ2U9ezxFbmRNZXNzYWdlIC8+fVxyXG4gICAgICAgICAgZGF0YUxlbmd0aD17cG9zdHMubGVuZ3RofVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgICAgIDxDYXJkUG9zdFxyXG4gICAgICAgICAgICAgIGtleT17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgcG9zdD17cG9zdH1cclxuICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgIHNldFBvc3RzPXtzZXRQb3N0c31cclxuICAgICAgICAgICAgICBzZXRTaG93VG9hc3RyPXtzZXRTaG93VG9hc3RyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9JbmZpbml0ZVNjcm9sbD5cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxyXG4gICAgICBwYXJhbXM6IHsgcGFnZU51bWJlcjogMSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBwb3N0c0RhdGE6IHJlcy5kYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IGVycm9yTG9hZGluZzogdHJ1ZSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50J1xyXG5cclxuY29uc3QgY2FsY3VsYXRlVGltZSA9Y3JlYXRlZEF0PT57XHJcbiAgICBjb25zdCB0b2RheT1tb21lbnQoRGF0ZS5ub3coKSlcclxuICAgIGNvbnN0IHBvc3REYXRlPW1vbWVudChjcmVhdGVkQXQpXHJcbiAgICBjb25zdCBkaWZmSW5Ib3Vycz10b2RheS5kaWZmKHBvc3REYXRlLFwiaG91cnNcIilcclxuXHJcbiAgICBpZihkaWZmSW5Ib3VyczwyNClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIFRvZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlmZkluSG91cnM+MjQmJmRpZmZJbkhvdXJzPDM2KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgWWVzdGVyZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlmZkluSG91cnM+MzYpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TW9tZW50IGZvcm1hdD1cIkREL01NL1lZWVkgaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FsY3VsYXRlVGltZSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IGdldFVzZXJJbmZvID0gYXN5bmMgdXNlclRvRmluZElkID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9jaGF0cy91c2VyLyR7dXNlclRvRmluZElkfWAsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgbmFtZTogcmVzLmRhdGEubmFtZSwgcHJvZmlsZVBpY1VybDogcmVzLmRhdGEucHJvZmlsZVBpY1VybCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRVc2VySW5mbztcclxuIiwiY29uc3QgbmV3TXNnU291bmQgPSBzZW5kZXJOYW1lID0+IHtcclxuICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbyhcIi9saWdodC5tcDNcIik7XHJcblxyXG4gIHNvdW5kICYmIHNvdW5kLnBsYXkoKTtcclxuXHJcbiAgaWYgKHNlbmRlck5hbWUpIHtcclxuICAgIGRvY3VtZW50LnRpdGxlID0gYE5ldyBtZXNzYWdlIGZyb20gJHtzZW5kZXJOYW1lfWA7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk1lc3NhZ2VzXCI7XHJcbiAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld01zZ1NvdW5kO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuL2NhdGNoRXJyb3JzXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3QgQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsXHJcbiAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWJtaXROZXdQb3N0ID0gYXN5bmMgKFxyXG4gIHRleHQsXHJcbiAgbG9jYXRpb24sXHJcbiAgcGljVXJsLFxyXG4gIHNldFBvc3RzLFxyXG4gIHNldE5ld1Bvc3QsXHJcbiAgc2V0RXJyb3JcclxuKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IEF4aW9zLnBvc3QoXCIvXCIsIHsgdGV4dCwgbG9jYXRpb24sIHBpY1VybCB9KTtcclxuXHJcbiAgICBzZXRQb3N0cyhwcmV2ID0+IFtyZXMuZGF0YSwgLi4ucHJldl0pO1xyXG4gICAgc2V0TmV3UG9zdCh7IHRleHQ6IFwiXCIsIGxvY2F0aW9uOiBcIlwiIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCBlcnJvck1zZyA9IGNhdGNoRXJyb3JzKGVycm9yKTtcclxuICAgIHNldEVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUG9zdCA9IGFzeW5jIChwb3N0SWQsIHNldFBvc3RzLCBzZXRTaG93VG9hc3RyKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLmRlbGV0ZShgLyR7cG9zdElkfWApO1xyXG4gICAgc2V0UG9zdHMocHJldiA9PiBwcmV2LmZpbHRlcihwb3N0ID0+IHBvc3QuX2lkICE9PSBwb3N0SWQpKTtcclxuICAgIHNldFNob3dUb2FzdHIodHJ1ZSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpa2VQb3N0ID0gYXN5bmMgKHBvc3RJZCwgdXNlcklkLCBzZXRMaWtlcywgbGlrZSA9IHRydWUpID0+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKGxpa2UpIHtcclxuICAgICAgYXdhaXQgQXhpb3MucG9zdChgL2xpa2UvJHtwb3N0SWR9YCk7XHJcbiAgICAgIHNldExpa2VzKHByZXYgPT4gWy4uLnByZXYsIHsgdXNlcjogdXNlcklkIH1dKTtcclxuICAgIH1cclxuICAgIC8vXHJcbiAgICBlbHNlIGlmICghbGlrZSkge1xyXG4gICAgICBhd2FpdCBBeGlvcy5wdXQoYC91bmxpa2UvJHtwb3N0SWR9YCk7XHJcbiAgICAgIHNldExpa2VzKHByZXYgPT4gcHJldi5maWx0ZXIobGlrZSA9PiBsaWtlLnVzZXIgIT09IHVzZXJJZCkpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChwb3N0SWQsIHVzZXIsIHRleHQsIHNldENvbW1lbnRzLCBzZXRUZXh0KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IEF4aW9zLnBvc3QoYC9jb21tZW50LyR7cG9zdElkfWAsIHsgdGV4dCB9KTtcclxuXHJcbiAgICBjb25zdCBuZXdDb21tZW50ID0ge1xyXG4gICAgICBfaWQ6IHJlcy5kYXRhLFxyXG4gICAgICB1c2VyLFxyXG4gICAgICB0ZXh0LFxyXG4gICAgICBkYXRlOiBEYXRlLm5vdygpXHJcbiAgICB9O1xyXG5cclxuICAgIHNldENvbW1lbnRzKHByZXYgPT4gW25ld0NvbW1lbnQsIC4uLnByZXZdKTtcclxuICAgIHNldFRleHQoXCJcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbW1lbnQgPSBhc3luYyAocG9zdElkLCBjb21tZW50SWQsIHNldENvbW1lbnRzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLmRlbGV0ZShgLyR7cG9zdElkfS8ke2NvbW1lbnRJZH1gKTtcclxuICAgIHNldENvbW1lbnRzKHByZXYgPT4gcHJldi5maWx0ZXIoY29tbWVudCA9PiBjb21tZW50Ll9pZCAhPT0gY29tbWVudElkKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZmlyZWJhc2Uvc3RvcmFnZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=