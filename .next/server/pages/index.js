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

/***/ "./components/Home/NotificationPortal.js":
/*!***********************************************!*\
  !*** ./components/Home/NotificationPortal.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/newMsgSound */ "./utils/newMsgSound.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Home\\NotificationPortal.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function NotificationPortal({
  newNotification,
  notificationPopup,
  showPopup
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    name,
    profilePicUrl,
    username,
    postId
  } = newNotification;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.TransitionablePortal, {
    transition: {
      animation: "fade left",
      duration: "500"
    },
    onClose: () => notificationPopup && setPopup(false),
    onOpen: _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_2__.default,
    open: notificationPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    style: {
      right: "5%",
      position: "fixed",
      top: "10%",
      zIndex: 1000
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "close",
    size: "large",
    style: {
      float: "right",
      cursor: "pointer"
    },
    onClick: () => setPopup(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Event, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 14
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Summary, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.User, {
    onClick: router.push(`/${username}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, name), "liked your ", __jsx("a", {
    onClick: router.push(`/post/${postId}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 36
    }
  }, "post"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Date, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(Date.now()))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (NotificationPortal);

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
/* harmony import */ var _components_Home_NotificationPortal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Home/NotificationPortal */ "./components/Home/NotificationPortal.js");
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
  const {
    0: newNotification,
    1: setNewNotification
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: notificationPopup,
    1: showPopup
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (socket.current) {
      socket.current.on('newNotificationRecieved', ({
        name,
        profilePicUrl,
        username,
        postId
      }) => {
        setNewNotification({
          name,
          profilePicUrl,
          username,
          postId
        });
        showPopup(true);
      });
    }
  }, []);

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
      lineNumber: 97,
      columnNumber: 52
    }
  }), __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_8__.NoPosts, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 98
    }
  }));
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, notificationPopup && newNotification !== null && __jsx(_components_Home_NotificationPortal__WEBPACK_IMPORTED_MODULE_16__.default, {
    newNotification: newNotification,
    notificationPopup: notificationPopup,
    showPopup: showPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 53
    }
  }), showToastr && __jsx(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_9__.PostDeleteToastr, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 106,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, __jsx(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_4__.default, {
    user: user,
    setPosts: setPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }), __jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default()), {
    hasMore: hasMore,
    next: fetchDataOnScroll,
    loader: __jsx(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__.PlaceHolderPosts, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 19
      }
    }),
    endMessage: __jsx(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__.EndMessage, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 23
      }
    }),
    dataLength: posts.length,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, posts.map(post => __jsx(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_5__.default, {
    socket: socket,
    key: post._id,
    post: post,
    user: user,
    setPosts: setPosts,
    setShowToastr: setShowToastr,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_baseUrl_js-utils_catchErrors_js","components_Layout_NoData_js-components_Layout_Toastr_js-components_Post_CardPost_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0hvbWUvTWVzc2FnZU5vdGlmaWNhdGlvbk1vZGFsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvSG9tZS9Ob3RpZmljYXRpb25Qb3J0YWwuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L0NyZWF0ZVBvc3QuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vZmlyZWJhc2UtY29uZmlnLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2dldFVzZXJJbmZvLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL25ld01zZ1NvdW5kLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIkBmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJAZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwiZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJNZXNzYWdlTm90aWZpY2F0aW9uTW9kYWwiLCJzb2NrZXQiLCJzaG93TmV3TWVzc2FnZU1vZGFsIiwibmV3TWVzc2FnZU1vZGFsIiwibmV3TWVzc2FnZVJlY2VpdmVkIiwidXNlciIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uTW9kYWxDbG9zZSIsImZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwiZW1pdCIsInVzZXJJZCIsIl9pZCIsIm1zZ1NlbmRUb1VzZXJJZCIsInNlbmRlciIsIm1zZyIsIm9uIiwic2VuZGVyTmFtZSIsInNlbmRlclByb2ZpbGVQaWMiLCJjYWxjdWxhdGVUaW1lIiwiZGF0ZSIsInBvc2l0aW9uIiwiYm90dG9tIiwidGFyZ2V0IiwidmFsdWUiLCJjb2xvciIsImljb24iLCJkaXNhYmxlZCIsIm1hcmdpblRvcCIsInVzZXJuYW1lIiwiSW5zdHJ1Y3Rpb25zIiwiTm90aWZpY2F0aW9uUG9ydGFsIiwibmV3Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uUG9wdXAiLCJzaG93UG9wdXAiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJuYW1lIiwicHJvZmlsZVBpY1VybCIsInBvc3RJZCIsImFuaW1hdGlvbiIsImR1cmF0aW9uIiwic2V0UG9wdXAiLCJuZXdNc2dTb3VuZCIsInJpZ2h0IiwidG9wIiwiekluZGV4IiwiZmxvYXQiLCJjdXJzb3IiLCJwdXNoIiwiRGF0ZSIsIm5vdyIsIkNyZWF0ZVBvc3QiLCJzZXRQb3N0cyIsIm5ld1Bvc3QiLCJzZXROZXdQb3N0IiwibG9jYXRpb24iLCJpbnB1dFJlZiIsInVzZVJlZiIsImVycm9yIiwic2V0RXJyb3IiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwibWVkaWEiLCJzZXRNZWRpYSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInBpY1VybCIsInNldFBpY1VybCIsImhhbmRsZUNoYW5nZSIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicHJldiIsImFkZFN0eWxlcyIsInRleHRBbGlnbiIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyIiwicGFkZGluZ1RvcCIsImJvcmRlckNvbG9yIiwiaGFuZGxlU3VibWl0IiwiaW1hZ2VSZWYiLCJyZWYiLCJzdG9yYWdlIiwidjQiLCJ1cGxvYWRCeXRlcyIsInRoZW4iLCJnZXREb3dubG9hZFVSTCIsInVybCIsInN1Ym1pdE5ld1Bvc3QiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJkaXNwbGF5IiwiY2xpY2siLCJkcm9wcGVkRmlsZSIsIkFycmF5IiwiZnJvbSIsImRhdGFUcmFuc2ZlciIsImJhY2tncm91bmRDb2xvciIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImluaXRpYWxpemVBcHAiLCJkYiIsImdldEZpcmVzdG9yZSIsImdldFN0b3JhZ2UiLCJJbmRleCIsInBvc3RzRGF0YSIsImVycm9yTG9hZGluZyIsInBvc3RzIiwic2hvd1RvYXN0ciIsInNldFNob3dUb2FzdHIiLCJoYXNNb3JlIiwic2V0SGFzTW9yZSIsInBhZ2VOdW1iZXIiLCJzZXRQYWdlTnVtYmVyIiwic2V0TmV3TWVzc2FnZVJlY2VpdmVkIiwic2V0TmV3Tm90aWZpY2F0aW9uIiwidXNlRWZmZWN0IiwiaW8iLCJiYXNlVXJsIiwibmV3TXNnIiwiZ2V0VXNlckluZm8iLCJuZXdNZXNzYWdlUG9wdXAiLCJkb2N1bWVudCIsInRpdGxlIiwic3BsaXQiLCJvZmYiLCJzZXRUaW1lb3V0IiwiZmV0Y2hEYXRhT25TY3JvbGwiLCJyZXMiLCJheGlvcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29va2llIiwicGFyYW1zIiwiZGF0YSIsImxlbmd0aCIsImFsZXJ0IiwibWFwIiwicG9zdCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInRva2VuIiwicGFyc2VDb29raWVzIiwidXNlclRvRmluZElkIiwic291bmQiLCJBdWRpbyIsInBsYXkiLCJ2aXNpYmlsaXR5U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Esd0JBQVQsQ0FBa0M7QUFDaENDLFFBRGdDO0FBRWhDQyxxQkFGZ0M7QUFHaENDLGlCQUhnQztBQUloQ0Msb0JBSmdDO0FBS2hDQztBQUxnQyxDQUFsQyxFQU1HO0FBQ0QsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLCtDQUFRLENBQUMsS0FBRCxDQUF0Qzs7QUFFQSxRQUFNRyxZQUFZLEdBQUcsTUFBTVQsbUJBQW1CLENBQUMsS0FBRCxDQUE5Qzs7QUFFQSxRQUFNVSxVQUFVLEdBQUdDLENBQUMsSUFBSTtBQUN0QkEsS0FBQyxDQUFDQyxjQUFGOztBQUVBLFFBQUliLE1BQU0sQ0FBQ2MsT0FBWCxFQUFvQjtBQUNsQmQsWUFBTSxDQUFDYyxPQUFQLENBQWVDLElBQWYsQ0FBb0IseUJBQXBCLEVBQStDO0FBQzdDQyxjQUFNLEVBQUVaLElBQUksQ0FBQ2EsR0FEZ0M7QUFFN0NDLHVCQUFlLEVBQUVmLGtCQUFrQixDQUFDZ0IsTUFGUztBQUc3Q0MsV0FBRyxFQUFFZjtBQUh3QyxPQUEvQztBQU1BTCxZQUFNLENBQUNjLE9BQVAsQ0FBZU8sRUFBZixDQUFrQix5QkFBbEIsRUFBNkMsTUFBTTtBQUNqRHBCLDJCQUFtQixDQUFDLEtBQUQsQ0FBbkI7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQWREOztBQWdCQSxTQUNFLHFFQUNFLE1BQUMsb0RBQUQ7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUksRUFBRUMsZUFGUjtBQUdFLFdBQU8sRUFBRVEsWUFIWDtBQUlFLGFBQVMsTUFKWDtBQUtFLHNCQUFrQixNQUxwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQywyREFBRDtBQUFjLFdBQU8sRUFBRyxvQkFBbUJQLGtCQUFrQixDQUFDbUIsVUFBVyxFQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFTRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUE0QixPQUFHLEVBQUVuQixrQkFBa0IsQ0FBQ29CLGdCQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUtFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0NwQixrQkFBa0IsQ0FBQ2lCLEdBQXZELENBTEYsRUFPRTtBQUFNLGFBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlCSSw2REFBYSxDQUFDckIsa0JBQWtCLENBQUNzQixJQUFwQixDQUF0QyxDQVBGLENBREYsRUFXRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsUUFBWjtBQUFzQkMsWUFBTSxFQUFFO0FBQTlCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBUyxhQUFTLE1BQWxCO0FBQW1CLFNBQUssRUFBQyxNQUF6QjtBQUFnQyxZQUFRLEVBQUMsUUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBTSxTQUFLLE1BQVg7QUFBWSxZQUFRLEVBQUVoQixVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsZUFBVyxFQUFDLGtCQUZkO0FBR0UsU0FBSyxFQUFFTixJQUhUO0FBSUUsWUFBUSxFQUFFTyxDQUFDLElBQUlOLE9BQU8sQ0FBQ00sQ0FBQyxDQUFDZ0IsTUFBRixDQUFTQyxLQUFWLENBSnhCO0FBS0UsVUFBTSxFQUFFO0FBQ05DLFdBQUssRUFBRSxNQUREO0FBRU5DLFVBQUksRUFBRSxnQkFGQTtBQUdOQyxjQUFRLEVBQUUzQixJQUFJLEtBQUssRUFIYjtBQUlORyxhQUFPLEVBQUVBO0FBSkgsS0FMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLENBWEYsRUE4QkU7QUFBSyxTQUFLLEVBQUU7QUFBRXlCLGVBQVMsRUFBRTtBQUFiLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUcscUJBQW9COUIsa0JBQWtCLENBQUNnQixNQUFPLEVBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLENBREYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFPRSxNQUFDLFlBQUQ7QUFBYyxZQUFRLEVBQUVmLElBQUksQ0FBQzhCLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQTlCRixDQVRGLENBREYsQ0FERjtBQXNERDs7QUFFRCxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFFRDtBQUFGLENBQUQsS0FDbkIsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxtREFBRDtBQUFNLE1BQUksRUFBQyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2RUFERixDQUZGLENBREYsRUFVRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLG1EQUFEO0FBQU0sTUFBSSxFQUFDLGtCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FFRSxNQUFDLGtEQUFEO0FBQU0sTUFBSSxFQUFHLElBQUdBLFFBQVMsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQUZGLHVDQUZGLENBVkYsRUFxQkUsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxtREFBRDtBQUFNLE1BQUksRUFBQyxrQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsdUVBckJGLEVBMEJFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsbURBQUQ7QUFBTSxNQUFJLEVBQUMsa0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLDJFQTFCRixDQURGOztBQWtDQSwrREFBZW5DLHdCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNxQyxrQkFBVCxDQUE0QjtBQUFDQyxpQkFBRDtBQUFpQkMsbUJBQWpCO0FBQW1DQztBQUFuQyxDQUE1QixFQUNBO0FBQ0UsUUFBTUMsTUFBTSxHQUFDQyxzREFBUyxFQUF0QjtBQUNBLFFBQU07QUFBQ0MsUUFBRDtBQUFNQyxpQkFBTjtBQUFvQlQsWUFBcEI7QUFBNkJVO0FBQTdCLE1BQXFDUCxlQUEzQztBQUVBLFNBQ0UsTUFBQyxtRUFBRDtBQUFzQixjQUFVLEVBQUU7QUFBQ1EsZUFBUyxFQUFDLFdBQVg7QUFBdUJDLGNBQVEsRUFBQztBQUFoQyxLQUFsQztBQUNBLFdBQU8sRUFBRSxNQUFJUixpQkFBaUIsSUFBRVMsUUFBUSxDQUFDLEtBQUQsQ0FEeEM7QUFFQSxVQUFNLEVBQUVDLHVEQUZSO0FBR0EsUUFBSSxFQUFFVixpQkFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0ksTUFBQyxzREFBRDtBQUFTLFNBQUssRUFBRTtBQUFDVyxXQUFLLEVBQUMsSUFBUDtBQUFZdkIsY0FBUSxFQUFDLE9BQXJCO0FBQTZCd0IsU0FBRyxFQUFDLEtBQWpDO0FBQXVDQyxZQUFNLEVBQUM7QUFBOUMsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLE1BQUMsbURBQUQ7QUFBTSxRQUFJLEVBQUMsT0FBWDtBQUFtQixRQUFJLEVBQUMsT0FBeEI7QUFBZ0MsU0FBSyxFQUFFO0FBQUNDLFdBQUssRUFBQyxPQUFQO0FBQWVDLFlBQU0sRUFBQztBQUF0QixLQUF2QztBQUF5RSxXQUFPLEVBQUUsTUFBSU4sUUFBUSxDQUFDLEtBQUQsQ0FBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURILEVBRUcsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUVKLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREgsRUFJRyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQVcsV0FBTyxFQUFFSCxNQUFNLENBQUNjLElBQVAsQ0FBYSxJQUFHcEIsUUFBUyxFQUF6QixDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtEUSxJQUFsRCxDQURKLGlCQUVlO0FBQUcsV0FBTyxFQUFFRixNQUFNLENBQUNjLElBQVAsQ0FBYSxTQUFRVixNQUFPLEVBQTVCLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZmLEVBR0ksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVlwQiw2REFBYSxDQUFDK0IsSUFBSSxDQUFDQyxHQUFMLEVBQUQsQ0FBekIsQ0FISixDQURKLENBSkgsQ0FERixDQUZILENBTEosQ0FERjtBQTBCRDs7QUFFRCwrREFBZXBCLGtCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNxQixVQUFULENBQW9CO0FBQUVyRCxNQUFGO0FBQVFzRDtBQUFSLENBQXBCLEVBQXdDO0FBQ3RDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QnJELCtDQUFRLENBQUM7QUFBRUYsUUFBSSxFQUFFLEVBQVI7QUFBWXdELFlBQVEsRUFBRTtBQUF0QixHQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNyRCxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTXVELFFBQVEsR0FBR0MsNkNBQU0sRUFBdkI7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0IxRCwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQzJELFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDNUQsK0NBQVEsQ0FBQyxLQUFELENBQTlDO0FBRUEsUUFBTTtBQUFBLE9BQUM2RCxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQjlELCtDQUFRLENBQUMsSUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDK0QsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NoRSwrQ0FBUSxDQUFDLElBQUQsQ0FBaEQ7QUFFQSxRQUFLO0FBQUEsT0FBQ2lFLE1BQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW1CbEUsK0NBQVEsQ0FBQyxFQUFELENBQWhDOztBQUVBLFFBQU1tRSxZQUFZLEdBQUc5RCxDQUFDLElBQUk7QUFDeEIsVUFBTTtBQUFFOEIsVUFBRjtBQUFRYixXQUFSO0FBQWU4QztBQUFmLFFBQXlCL0QsQ0FBQyxDQUFDZ0IsTUFBakM7O0FBRUEsUUFBSWMsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDcEIyQixjQUFRLENBQUNNLEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBUjtBQUNBSixxQkFBZSxDQUFDSyxHQUFHLENBQUNDLGVBQUosQ0FBb0JGLEtBQUssQ0FBQyxDQUFELENBQXpCLENBQUQsQ0FBZjtBQUNEOztBQUVEZixjQUFVLENBQUNrQixJQUFJLG9DQUFVQSxJQUFWO0FBQWdCLE9BQUNwQyxJQUFELEdBQVFiO0FBQXhCLE1BQUwsQ0FBVjtBQUNELEdBVEQ7O0FBV0EsUUFBTWtELFNBQVMsR0FBRyxPQUFPO0FBQ3ZCQyxhQUFTLEVBQUUsUUFEWTtBQUV2QkMsVUFBTSxFQUFFLE9BRmU7QUFHdkJDLFNBQUssRUFBRSxPQUhnQjtBQUl2QkMsVUFBTSxFQUFFLFFBSmU7QUFLdkJDLGNBQVUsRUFBRWhCLEtBQUssS0FBSyxJQUFWLElBQWtCLE1BTFA7QUFNdkJmLFVBQU0sRUFBRSxTQU5lO0FBT3ZCZ0MsZUFBVyxFQUFFbkIsV0FBVyxHQUFHLE9BQUgsR0FBYTtBQVBkLEdBQVAsQ0FBbEI7O0FBVUEsUUFBTW9CLFlBQVksR0FBRyxNQUFNMUUsQ0FBTixJQUFXO0FBQzlCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUosY0FBVSxDQUFDLElBQUQsQ0FBVjs7QUFHQSxRQUFJMkQsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsWUFBTW1CLFFBQVEsR0FBQ0MscURBQUcsQ0FBQ0MscURBQUQsRUFBVSxXQUFVckIsS0FBSyxDQUFDMUIsSUFBTixHQUFhZ0Qsd0NBQUUsRUFBRyxFQUF0QyxDQUFsQixDQURrQixDQUVoQjs7QUFHQUMsbUVBQVcsQ0FBQ0osUUFBRCxFQUFVbkIsS0FBVixDQUFYLENBQTRCd0IsSUFBNUIsQ0FBaUMsTUFBSTtBQUNwQ0Msd0VBQWMsQ0FBQ04sUUFBRCxDQUFkLENBQXlCSyxJQUF6QixDQUE4QixNQUFPRSxHQUFQLElBQWE7QUFDekMsZ0JBQU1DLGlFQUFhLENBQUNwQyxPQUFPLENBQUN0RCxJQUFULEVBQWNzRCxPQUFPLENBQUNFLFFBQXRCLEVBQStCaUMsR0FBL0IsRUFBbUNwQyxRQUFuQyxFQUE0Q0UsVUFBNUMsRUFBdURLLFFBQXZELENBQW5CO0FBQ0MrQixpQkFBTyxDQUFDQyxHQUFSLENBQVlILEdBQVo7QUFDQyxTQUhKLEVBSUlJLEtBSkosQ0FJV0MsR0FBRCxJQUFPO0FBQ2JILGlCQUFPLENBQUNDLEdBQVIsQ0FBWUUsR0FBWjtBQUNBLFNBTko7QUFPQSxPQVJEO0FBVUgsS0FmRCxNQWdCSTtBQUVKLFlBQU1KLGlFQUFhLENBQ2pCcEMsT0FBTyxDQUFDdEQsSUFEUyxFQUVqQnNELE9BQU8sQ0FBQ0UsUUFGUyxFQUdqQlcsTUFIaUIsRUFJakJkLFFBSmlCLEVBS2pCRSxVQUxpQixFQU1qQkssUUFOaUIsQ0FBbkI7QUFRQzs7QUFFREksWUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNBRSxtQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBOUQsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEdBcENEOztBQXNDQSxTQUNFLHFFQUNFLE1BQUMsbURBQUQ7QUFBTSxTQUFLLEVBQUV1RCxLQUFLLEtBQUssSUFBdkI7QUFBNkIsWUFBUSxFQUFFc0IsWUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxTQUFLLE1BRFA7QUFFRSxhQUFTLEVBQUUsTUFBTXJCLFFBQVEsQ0FBQyxJQUFELENBRjNCO0FBR0UsV0FBTyxFQUFFRCxLQUhYO0FBSUUsVUFBTSxFQUFDLE9BSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBUUUsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFPLE9BQUcsRUFBRTVELElBQUksQ0FBQ3VDLGFBQWpCO0FBQWdDLFlBQVEsTUFBeEM7QUFBeUMsVUFBTSxNQUEvQztBQUFnRCxVQUFNLE1BQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNERBQUQ7QUFDRSxlQUFXLEVBQUMsaUJBRGQ7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFNBQUssRUFBRWdCLE9BQU8sQ0FBQ3RELElBSGpCO0FBSUUsWUFBUSxFQUFFcUUsWUFKWjtBQUtFLFFBQUksRUFBRSxDQUxSO0FBTUUsU0FBSyxFQUFFLEVBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBUkYsRUFvQkUsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUNFLFNBQUssRUFBRWYsT0FBTyxDQUFDRSxRQURqQjtBQUVFLFFBQUksRUFBQyxVQUZQO0FBR0UsWUFBUSxFQUFFYSxZQUhaO0FBSUUsU0FBSyxFQUFDLGNBSlI7QUFLRSxRQUFJLEVBQUMsc0JBTFA7QUFNRSxlQUFXLEVBQUMsdUJBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBVUU7QUFDRSxPQUFHLEVBQUVaLFFBRFA7QUFFRSxZQUFRLEVBQUVZLFlBRlo7QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLFNBQUssRUFBRTtBQUFFMEIsYUFBTyxFQUFFO0FBQVgsS0FKVDtBQUtFLFFBQUksRUFBQyxNQUxQO0FBTUUsVUFBTSxFQUFDLFNBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBcEJGLEVBd0NFO0FBQ0UsV0FBTyxFQUFFLE1BQU10QyxRQUFRLENBQUNoRCxPQUFULENBQWlCdUYsS0FBakIsRUFEakI7QUFFRSxTQUFLLEVBQUV0QixTQUFTLEVBRmxCO0FBR0UsVUFBTSxFQUFFbkUsQ0FBQyxJQUFJO0FBQ1hBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBc0Qsb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDRCxLQU5IO0FBT0UsZUFBVyxFQUFFdkQsQ0FBQyxJQUFJO0FBQ2hCQSxPQUFDLENBQUNDLGNBQUY7QUFDQXNELG9CQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0QsS0FWSDtBQVdFLFVBQU0sRUFBRXZELENBQUMsSUFBSTtBQUNYQSxPQUFDLENBQUNDLGNBQUY7QUFDQXNELG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBRUEsWUFBTW1DLFdBQVcsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVc1RixDQUFDLENBQUM2RixZQUFGLENBQWU5QixLQUExQixDQUFwQjtBQUVBTixjQUFRLENBQUNpQyxXQUFXLENBQUMsQ0FBRCxDQUFaLENBQVI7QUFDQS9CLHFCQUFlLENBQUNLLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQnlCLFdBQVcsQ0FBQyxDQUFELENBQS9CLENBQUQsQ0FBZjtBQUNELEtBbkJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FvQkdsQyxLQUFLLEtBQUssSUFBVixHQUNDLE1BQUMsbURBQUQ7QUFBTSxRQUFJLEVBQUMsTUFBWDtBQUFrQixRQUFJLEVBQUMsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEdBR0MscUVBQ0UsTUFBQyxvREFBRDtBQUNFLFNBQUssRUFBRTtBQUFFYSxZQUFNLEVBQUUsT0FBVjtBQUFtQkMsV0FBSyxFQUFFO0FBQTFCLEtBRFQ7QUFFRSxPQUFHLEVBQUVaLFlBRlA7QUFHRSxPQUFHLEVBQUMsV0FITjtBQUlFLFlBQVEsTUFKVjtBQUtFLFFBQUksRUFBQyxRQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXZCSixDQXhDRixFQTBFRSxNQUFDLHNEQUFEO0FBQVMsVUFBTSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExRUYsRUE0RUUsTUFBQyxxREFBRDtBQUNFLFlBQVEsTUFEVjtBQUVFLFlBQVEsRUFBRVgsT0FBTyxDQUFDdEQsSUFBUixLQUFpQixFQUFqQixJQUF1QkcsT0FGbkM7QUFHRSxXQUFPLEVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhYO0FBSUUsU0FBSyxFQUFFO0FBQUVrRyxxQkFBZSxFQUFFLFNBQW5CO0FBQThCNUUsV0FBSyxFQUFFO0FBQXJDLEtBSlQ7QUFLRSxRQUFJLEVBQUMsTUFMUDtBQU1FLFdBQU8sRUFBRXRCLE9BTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVFRixDQURGLEVBc0ZFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRGRixDQURGO0FBMEZEOztBQUVELCtEQUFlaUQsVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0tBO0FBQ0E7QUFDQTtBQUVBLE1BQU1rRCxjQUFjLEdBQUc7QUFDbkJDLFFBQU0sRUFBRSx5Q0FEVztBQUVuQkMsWUFBVSxFQUFFLGlDQUZPO0FBR25CQyxXQUFTLEVBQUUsaUJBSFE7QUFJbkJDLGVBQWEsRUFBRSw2QkFKSTtBQUtuQkMsbUJBQWlCLEVBQUUsY0FMQTtBQU1uQkMsT0FBSyxFQUFFLDJDQU5ZO0FBT25CQyxlQUFhLEVBQUU7QUFQSSxDQUF2QjtBQVVFLE1BQU1DLEdBQUcsR0FBQ0MsMkRBQWEsQ0FBQ1QsY0FBRCxDQUF2QjtBQUVNLE1BQU1VLEVBQUUsR0FBQ0MsaUVBQVksQ0FBQ0gsR0FBRCxDQUFyQjtBQUNBLE1BQU0xQixPQUFPLEdBQUc4Qiw2REFBVSxDQUFDSixHQUFELENBQTFCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQlI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTSyxLQUFULENBQWU7QUFBRXBILE1BQUY7QUFBUXFILFdBQVI7QUFBbUJDO0FBQW5CLENBQWYsRUFBa0Q7QUFDaEQsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRakU7QUFBUixNQUFvQm5ELCtDQUFRLENBQUNrSCxTQUFTLElBQUksRUFBZCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDRyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QnRILCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDdUgsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0J4SCwrQ0FBUSxDQUFDLElBQUQsQ0FBdEM7QUFFQSxRQUFNO0FBQUEsT0FBQ3lILFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCMUgsK0NBQVEsQ0FBQyxDQUFELENBQTVDO0FBRUEsUUFBTVAsTUFBTSxHQUFHK0QsNkNBQU0sRUFBckI7QUFFQSxRQUFNO0FBQUEsT0FBQzVELGtCQUFEO0FBQUEsT0FBcUIrSDtBQUFyQixNQUE4QzNILCtDQUFRLENBQUMsSUFBRCxDQUE1RDtBQUNBLFFBQU07QUFBQSxPQUFDTCxlQUFEO0FBQUEsT0FBa0JEO0FBQWxCLE1BQXlDTSwrQ0FBUSxDQUFDLEtBQUQsQ0FBdkQ7QUFFQSxRQUFLO0FBQUEsT0FBQzhCLGVBQUQ7QUFBQSxPQUFpQjhGO0FBQWpCLE1BQXNDNUgsK0NBQVEsQ0FBQyxJQUFELENBQW5EO0FBQ0EsUUFBTTtBQUFBLE9BQUMrQixpQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUE4QmhDLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUVBNkgsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSSxDQUFDcEksTUFBTSxDQUFDYyxPQUFaLEVBQXFCO0FBQ25CZCxZQUFNLENBQUNjLE9BQVAsR0FBaUJ1SCx1REFBRSxDQUFDQyx1REFBRCxDQUFuQjtBQUNEOztBQUVELFFBQUl0SSxNQUFNLENBQUNjLE9BQVgsRUFBb0I7QUFDbEJkLFlBQU0sQ0FBQ2MsT0FBUCxDQUFlQyxJQUFmLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVDLGNBQU0sRUFBRVosSUFBSSxDQUFDYTtBQUFmLE9BQTVCO0FBRUFqQixZQUFNLENBQUNjLE9BQVAsQ0FBZU8sRUFBZixDQUFrQixnQkFBbEIsRUFBb0MsT0FBTztBQUFFa0g7QUFBRixPQUFQLEtBQXNCO0FBQ3hELGNBQU07QUFBRTdGLGNBQUY7QUFBUUM7QUFBUixZQUEwQixNQUFNNkYsNERBQVcsQ0FBQ0QsTUFBTSxDQUFDcEgsTUFBUixDQUFqRDs7QUFFQSxZQUFJZixJQUFJLENBQUNxSSxlQUFULEVBQTBCO0FBQ3hCUCwrQkFBcUIsaUNBQ2hCSyxNQURnQjtBQUVuQmpILHNCQUFVLEVBQUVvQixJQUZPO0FBR25CbkIsNEJBQWdCLEVBQUVvQjtBQUhDLGFBQXJCO0FBS0ExQyw2QkFBbUIsQ0FBQyxJQUFELENBQW5CO0FBQ0Q7O0FBQ0QrQyxvRUFBVyxDQUFDTixJQUFELENBQVg7QUFDRCxPQVpEO0FBYUQ7O0FBRURnRyxZQUFRLENBQUNDLEtBQVQsR0FBa0IsWUFBV3ZJLElBQUksQ0FBQ3NDLElBQUwsQ0FBVWtHLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUIsQ0FBckIsQ0FBd0IsRUFBckQ7QUFFQSxXQUFPLE1BQU07QUFDWCxVQUFJNUksTUFBTSxDQUFDYyxPQUFYLEVBQW9CO0FBQ2xCZCxjQUFNLENBQUNjLE9BQVAsQ0FBZUMsSUFBZixDQUFvQixZQUFwQjtBQUNBZixjQUFNLENBQUNjLE9BQVAsQ0FBZStILEdBQWY7QUFDRDtBQUNGLEtBTEQ7QUFNRCxHQS9CUSxFQStCTixFQS9CTSxDQUFUO0FBaUNBVCxrREFBUyxDQUFDLE1BQU07QUFDZFIsY0FBVSxJQUFJa0IsVUFBVSxDQUFDLE1BQU1qQixhQUFhLENBQUMsS0FBRCxDQUFwQixFQUE2QixJQUE3QixDQUF4QjtBQUNELEdBRlEsRUFFTixDQUFDRCxVQUFELENBRk0sQ0FBVDtBQUlBUSxrREFBUyxDQUFDLE1BQUk7QUFDVCxRQUFHcEksTUFBTSxDQUFDYyxPQUFWLEVBQ0E7QUFDQ2QsWUFBTSxDQUFDYyxPQUFQLENBQWVPLEVBQWYsQ0FBa0IseUJBQWxCLEVBQTRDLENBQUM7QUFBQ3FCLFlBQUQ7QUFBTUMscUJBQU47QUFBb0JULGdCQUFwQjtBQUE2QlU7QUFBN0IsT0FBRCxLQUF3QztBQUNoRnVGLDBCQUFrQixDQUFDO0FBQUN6RixjQUFEO0FBQU1DLHVCQUFOO0FBQW9CVCxrQkFBcEI7QUFBNkJVO0FBQTdCLFNBQUQsQ0FBbEI7QUFDQUwsaUJBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSCxPQUhEO0FBSUE7QUFDTCxHQVJRLEVBUVAsRUFSTyxDQUFUOztBQVVBLFFBQU13RyxpQkFBaUIsR0FBRyxZQUFZO0FBQ3BDLFFBQUk7QUFDRixZQUFNQyxHQUFHLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVyxHQUFFWCx1REFBUSxZQUFyQixFQUFrQztBQUNsRFksZUFBTyxFQUFFO0FBQUVDLHVCQUFhLEVBQUVDLHFEQUFBLENBQVcsT0FBWDtBQUFqQixTQUR5QztBQUVsREMsY0FBTSxFQUFFO0FBQUVyQjtBQUFGO0FBRjBDLE9BQWxDLENBQWxCO0FBS0EsVUFBSWdCLEdBQUcsQ0FBQ00sSUFBSixDQUFTQyxNQUFULEtBQW9CLENBQXhCLEVBQTJCeEIsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUUzQnJFLGNBQVEsQ0FBQ29CLElBQUksSUFBSSxDQUFDLEdBQUdBLElBQUosRUFBVSxHQUFHa0UsR0FBRyxDQUFDTSxJQUFqQixDQUFULENBQVI7QUFDQXJCLG1CQUFhLENBQUNuRCxJQUFJLElBQUlBLElBQUksR0FBRyxDQUFoQixDQUFiO0FBQ0QsS0FWRCxDQVVFLE9BQU9kLEtBQVAsRUFBYztBQUNkd0YsV0FBSyxDQUFDLHNCQUFELENBQUw7QUFDRDtBQUNGLEdBZEQ7O0FBZ0JBLE1BQUk3QixLQUFLLENBQUM0QixNQUFOLEtBQWlCLENBQWpCLElBQXNCN0IsWUFBMUIsRUFBd0MsT0FBTyxxRUFBRSxNQUFDLGdFQUFEO0FBQVksUUFBSSxFQUFFdEgsSUFBbEI7QUFBd0IsWUFBUSxFQUFFc0QsUUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFGLEVBQWdELE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFoRCxDQUFQO0FBRXhDLFNBQ0UscUVBQ0NwQixpQkFBaUIsSUFBSUQsZUFBZSxLQUFHLElBQXZDLElBQStDLE1BQUMseUVBQUQ7QUFBb0IsbUJBQWUsRUFBRUEsZUFBckM7QUFDVSxxQkFBaUIsRUFBRUMsaUJBRDdCO0FBQ2dELGFBQVMsRUFBRUMsU0FEM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURoRCxFQUdHcUYsVUFBVSxJQUFJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhqQixFQUtHMUgsZUFBZSxJQUFJQyxrQkFBa0IsS0FBSyxJQUExQyxJQUNDLE1BQUMsK0VBQUQ7QUFDRSxVQUFNLEVBQUVILE1BRFY7QUFFRSx1QkFBbUIsRUFBRUMsbUJBRnZCO0FBR0UsbUJBQWUsRUFBRUMsZUFIbkI7QUFJRSxzQkFBa0IsRUFBRUMsa0JBSnRCO0FBS0UsUUFBSSxFQUFFQyxJQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQWVFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBWSxRQUFJLEVBQUVBLElBQWxCO0FBQXdCLFlBQVEsRUFBRXNELFFBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFLE1BQUMseUVBQUQ7QUFDRSxXQUFPLEVBQUVvRSxPQURYO0FBRUUsUUFBSSxFQUFFaUIsaUJBRlI7QUFHRSxVQUFNLEVBQUUsTUFBQyxrRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSFY7QUFJRSxjQUFVLEVBQUUsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmQ7QUFLRSxjQUFVLEVBQUVwQixLQUFLLENBQUM0QixNQUxwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0c1QixLQUFLLENBQUM4QixHQUFOLENBQVVDLElBQUksSUFDYixNQUFDLDhEQUFEO0FBQ0EsVUFBTSxFQUFFMUosTUFEUjtBQUVFLE9BQUcsRUFBRTBKLElBQUksQ0FBQ3pJLEdBRlo7QUFHRSxRQUFJLEVBQUV5SSxJQUhSO0FBSUUsUUFBSSxFQUFFdEosSUFKUjtBQUtFLFlBQVEsRUFBRXNELFFBTFo7QUFNRSxpQkFBYSxFQUFFbUUsYUFOakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBUEgsQ0FIRixDQWZGLENBREY7QUF3Q0Q7O0FBRURMLEtBQUssQ0FBQ21DLGVBQU4sR0FBd0IsTUFBTUMsR0FBTixJQUFhO0FBQ25DLE1BQUk7QUFDRixVQUFNO0FBQUVDO0FBQUYsUUFBWUMscURBQVksQ0FBQ0YsR0FBRCxDQUE5QjtBQUVBLFVBQU1aLEdBQUcsR0FBRyxNQUFNQyxnREFBQSxDQUFXLEdBQUVYLHVEQUFRLFlBQXJCLEVBQWtDO0FBQ2xEWSxhQUFPLEVBQUU7QUFBRUMscUJBQWEsRUFBRVU7QUFBakIsT0FEeUM7QUFFbERSLFlBQU0sRUFBRTtBQUFFckIsa0JBQVUsRUFBRTtBQUFkO0FBRjBDLEtBQWxDLENBQWxCO0FBS0EsV0FBTztBQUFFUCxlQUFTLEVBQUV1QixHQUFHLENBQUNNO0FBQWpCLEtBQVA7QUFDRCxHQVRELENBU0UsT0FBT3RGLEtBQVAsRUFBYztBQUNkLFdBQU87QUFBRTBELGtCQUFZLEVBQUU7QUFBaEIsS0FBUDtBQUNEO0FBQ0YsQ0FiRDs7QUFlQSwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSkE7QUFDQTtBQUNBOztBQUVBLE1BQU1nQixXQUFXLEdBQUcsTUFBTXVCLFlBQU4sSUFBc0I7QUFDeEMsTUFBSTtBQUNGLFVBQU1mLEdBQUcsR0FBRyxNQUFNQyxnREFBQSxDQUFXLEdBQUVYLGlEQUFRLG1CQUFrQnlCLFlBQWEsRUFBcEQsRUFBdUQ7QUFDdkViLGFBQU8sRUFBRTtBQUFFQyxxQkFBYSxFQUFFQyxvREFBQSxDQUFXLE9BQVg7QUFBakI7QUFEOEQsS0FBdkQsQ0FBbEI7QUFJQSxXQUFPO0FBQUUxRyxVQUFJLEVBQUVzRyxHQUFHLENBQUNNLElBQUosQ0FBUzVHLElBQWpCO0FBQXVCQyxtQkFBYSxFQUFFcUcsR0FBRyxDQUFDTSxJQUFKLENBQVMzRztBQUEvQyxLQUFQO0FBQ0QsR0FORCxDQU1FLE9BQU9xQixLQUFQLEVBQWM7QUFDZGdDLFdBQU8sQ0FBQ2hDLEtBQVIsQ0FBY0EsS0FBZDtBQUNEO0FBQ0YsQ0FWRDs7QUFZQSwrREFBZXdFLFdBQWYsRTs7Ozs7Ozs7Ozs7O0FDaEJBLE1BQU14RixXQUFXLEdBQUcxQixVQUFVLElBQUk7QUFDaEMsUUFBTTBJLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVUsWUFBVixDQUFkO0FBRUFELE9BQUssSUFBSUEsS0FBSyxDQUFDRSxJQUFOLEVBQVQ7O0FBRUEsTUFBSTVJLFVBQUosRUFBZ0I7QUFDZG9ILFlBQVEsQ0FBQ0MsS0FBVCxHQUFrQixvQkFBbUJySCxVQUFXLEVBQWhEOztBQUVBLFFBQUlvSCxRQUFRLENBQUN5QixlQUFULEtBQTZCLFNBQWpDLEVBQTRDO0FBQzFDckIsZ0JBQVUsQ0FBQyxNQUFNO0FBQ2ZKLGdCQUFRLENBQUNDLEtBQVQsR0FBaUIsVUFBakI7QUFDRCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7QUFDRjtBQUNGLENBZEQ7O0FBZ0JBLCtEQUFlM0YsV0FBZixFOzs7Ozs7Ozs7OztBQ2hCQSxpRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBNb2RhbCwgU2VnbWVudCwgTGlzdCwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlTm90aWZpY2F0aW9uTW9kYWwoe1xyXG4gIHNvY2tldCxcclxuICBzaG93TmV3TWVzc2FnZU1vZGFsLFxyXG4gIG5ld01lc3NhZ2VNb2RhbCxcclxuICBuZXdNZXNzYWdlUmVjZWl2ZWQsXHJcbiAgdXNlclxyXG59KSB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvbk1vZGFsQ2xvc2UgPSAoKSA9PiBzaG93TmV3TWVzc2FnZU1vZGFsKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZm9ybVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xyXG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwic2VuZE1zZ0Zyb21Ob3RpZmljYXRpb25cIiwge1xyXG4gICAgICAgIHVzZXJJZDogdXNlci5faWQsXHJcbiAgICAgICAgbXNnU2VuZFRvVXNlcklkOiBuZXdNZXNzYWdlUmVjZWl2ZWQuc2VuZGVyLFxyXG4gICAgICAgIG1zZzogdGV4dFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibXNnU2VudEZyb21Ob3RpZmljYXRpb25cIiwgKCkgPT4ge1xyXG4gICAgICAgIHNob3dOZXdNZXNzYWdlTW9kYWwoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICBvcGVuPXtuZXdNZXNzYWdlTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgIGNsb3NlSWNvblxyXG4gICAgICAgIGNsb3NlT25EaW1tZXJDbGlja1xyXG4gICAgICA+XHJcbiAgICAgICAgPE1vZGFsLkhlYWRlciBjb250ZW50PXtgTmV3IE1lc3NhZ2UgZnJvbSAke25ld01lc3NhZ2VSZWNlaXZlZC5zZW5kZXJOYW1lfWB9IC8+XHJcblxyXG4gICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWJibGVXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbmxpbmVJY29uXCIgc3JjPXtuZXdNZXNzYWdlUmVjZWl2ZWQuc2VuZGVyUHJvZmlsZVBpY30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm90aGVyQnViYmxlIG90aGVyXCI+e25ld01lc3NhZ2VSZWNlaXZlZC5tc2d9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdGhlclwiPntjYWxjdWxhdGVUaW1lKG5ld01lc3NhZ2VSZWNlaXZlZC5kYXRlKX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInN0aWNreVwiLCBib3R0b206IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxTZWdtZW50IHNlY29uZGFyeSBjb2xvcj1cInRlYWxcIiBhdHRhY2hlZD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtIHJlcGx5IG9uU3VibWl0PXtmb3JtU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VuZCBOZXcgTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwidGVsZWdyYW0gcGxhbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGV4dCA9PT0gXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbWVzc2FnZXM/bWVzc2FnZT0ke25ld01lc3NhZ2VSZWNlaXZlZC5zZW5kZXJ9YH0+XHJcbiAgICAgICAgICAgICAgPGE+VmlldyBBbGwgTWVzc2FnZXM8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgPEluc3RydWN0aW9ucyB1c2VybmFtZT17dXNlci51c2VybmFtZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IEluc3RydWN0aW9ucyA9ICh7IHVzZXJuYW1lIH0pID0+IChcclxuICA8TGlzdD5cclxuICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgIDxJY29uIG5hbWU9XCJoZWxwXCIgLz5cclxuICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICA8TGlzdC5IZWFkZXI+XHJcbiAgICAgICAgICBJZiB5b3UgZG8gbm90IGxpa2UgdGhpcyBwb3B1cCB0byBhcHBlYXIgd2hlbiB5b3UgcmVjZWl2ZSBhIG5ldyBtZXNzYWdlOlxyXG4gICAgICAgIDwvTGlzdC5IZWFkZXI+XHJcbiAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgPC9MaXN0Lkl0ZW0+XHJcblxyXG4gICAgPExpc3QuSXRlbT5cclxuICAgICAgPEljb24gbmFtZT1cImhhbmQgcG9pbnQgcmlnaHRcIiAvPlxyXG4gICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgIFlvdSBjYW4gZGlzYWJsZSBpdCBieSBnb2luZyB0b1xyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHt1c2VybmFtZX1gfT5cclxuICAgICAgICAgIDxhPiBBY2NvdW50IDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgUGFnZSBhbmQgY2xpY2tpbmcgb24gU2V0dGluZ3MgVGFiLlxyXG4gICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgIDwvTGlzdC5JdGVtPlxyXG5cclxuICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgIDxJY29uIG5hbWU9XCJoYW5kIHBvaW50IHJpZ2h0XCIgLz5cclxuICAgICAgSW5zaWRlIHRoZSBtZW51LHRoZXJlIGlzIGFuIHNldHRpbmcgbmFtZWQ6IFNob3cgTmV3IE1lc3NhZ2UgUG9wdXA/XHJcbiAgICA8L0xpc3QuSXRlbT5cclxuXHJcbiAgICA8TGlzdC5JdGVtPlxyXG4gICAgICA8SWNvbiBuYW1lPVwiaGFuZCBwb2ludCByaWdodFwiIC8+XHJcbiAgICAgIEp1c3QgdG9nZ2xlIHRoZSBzZXR0aW5nIHRvIGRpc2FibGUvZW5hYmxlIHRoZSBNZXNzYWdlIFBvcHVwIHRvIGFwcGVhci5cclxuICAgIDwvTGlzdC5JdGVtPlxyXG4gIDwvTGlzdD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VOb3RpZmljYXRpb25Nb2RhbDtcclxuIiwiaW1wb3J0IHtTZWdtZW50LFRyYW5zaXRpb25hYmxlUG9ydGFsLEljb24sRmVlZCwgRmVlZEV2ZW50fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IG5ld01zZ1NvdW5kIGZyb20gJy4uLy4uL3V0aWxzL25ld01zZ1NvdW5kJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gJy4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWUnXHJcblxyXG5mdW5jdGlvbiBOb3RpZmljYXRpb25Qb3J0YWwoe25ld05vdGlmaWNhdGlvbixub3RpZmljYXRpb25Qb3B1cCxzaG93UG9wdXB9KVxyXG57XHJcbiAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpXHJcbiAgY29uc3Qge25hbWUscHJvZmlsZVBpY1VybCx1c2VybmFtZSxwb3N0SWR9PW5ld05vdGlmaWNhdGlvblxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8VHJhbnNpdGlvbmFibGVQb3J0YWwgdHJhbnNpdGlvbj17e2FuaW1hdGlvbjpcImZhZGUgbGVmdFwiLGR1cmF0aW9uOlwiNTAwXCJ9fVxyXG4gICAgb25DbG9zZT17KCk9Pm5vdGlmaWNhdGlvblBvcHVwJiZzZXRQb3B1cChmYWxzZSl9XHJcbiAgICBvbk9wZW49e25ld01zZ1NvdW5kfVxyXG4gICAgb3Blbj17bm90aWZpY2F0aW9uUG9wdXB9PlxyXG5cclxuICAgICAgICA8U2VnbWVudCBzdHlsZT17e3JpZ2h0OlwiNSVcIixwb3NpdGlvbjpcImZpeGVkXCIsdG9wOlwiMTAlXCIsekluZGV4OjEwMDB9fT5cclxuICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2xvc2VcIiBzaXplPVwibGFyZ2VcIiBzdHlsZT17e2Zsb2F0OlwicmlnaHRcIixjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXsoKT0+c2V0UG9wdXAoZmFsc2UpfS8+XHJcbiAgICAgICAgICAgPEZlZWQ+XHJcbiAgICAgICAgICAgICA8RmVlZC5FdmVudD5cclxuICAgICAgICAgICAgICAgIDxGZWVkLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9maWxlUGljVXJsfS8+XHJcbiAgICAgICAgICAgICAgICA8L0ZlZWQuTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RmVlZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVkLlVzZXIgb25DbGljaz17cm91dGVyLnB1c2goYC8ke3VzZXJuYW1lfWApfT57bmFtZX08L0ZlZWQuVXNlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZWQgeW91ciA8YSBvbkNsaWNrPXtyb3V0ZXIucHVzaChgL3Bvc3QvJHtwb3N0SWR9YCl9PnBvc3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVkLkRhdGU+e2NhbGN1bGF0ZVRpbWUoRGF0ZS5ub3coKSl9PC9GZWVkLkRhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GZWVkLlN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICA8L0ZlZWQuQ29udGVudD5cclxuICAgICAgICAgICAgIDwvRmVlZC5FdmVudD5cclxuICAgICAgICAgICA8L0ZlZWQ+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgIDwvVHJhbnNpdGlvbmFibGVQb3J0YWw+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25Qb3J0YWwiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIEltYWdlLCBEaXZpZGVyLCBNZXNzYWdlLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydHtyZWYsIHVwbG9hZEJ5dGVzLCBnZXREb3dubG9hZFVSTH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbmltcG9ydCB7djR9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlLWNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBzdWJtaXROZXdQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBDcmVhdGVQb3N0KHsgdXNlciwgc2V0UG9zdHMgfSkge1xyXG4gIGNvbnN0IFtuZXdQb3N0LCBzZXROZXdQb3N0XSA9IHVzZVN0YXRlKHsgdGV4dDogXCJcIiwgbG9jYXRpb246IFwiXCIgfSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21lZGlhUHJldmlldywgc2V0TWVkaWFQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdFtwaWNVcmwsc2V0UGljVXJsXT11c2VTdGF0ZShcIlwiKVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIGZpbGVzIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBpZiAobmFtZSA9PT0gXCJtZWRpYVwiKSB7XHJcbiAgICAgIHNldE1lZGlhKGZpbGVzWzBdKTtcclxuICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROZXdQb3N0KHByZXYgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkU3R5bGVzID0gKCkgPT4gKHtcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGhlaWdodDogXCIxNTBweFwiLFxyXG4gICAgd2lkdGg6IFwiMTUwcHhcIixcclxuICAgIGJvcmRlcjogXCJkb3R0ZWRcIixcclxuICAgIHBhZGRpbmdUb3A6IG1lZGlhID09PSBudWxsICYmIFwiNjBweFwiLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIGJvcmRlckNvbG9yOiBoaWdobGlnaHRlZCA/IFwiZ3JlZW5cIiA6IFwiYmxhY2tcIlxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBcclxuXHJcbiAgICBpZiAobWVkaWEgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgaW1hZ2VSZWY9cmVmKHN0b3JhZ2UsYC9pbWFnZXMvJHttZWRpYS5uYW1lICsgdjQoKX1gKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGltYWdlUmVmKTtcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHVwbG9hZEJ5dGVzKGltYWdlUmVmLG1lZGlhKS50aGVuKCgpPT57XHJcbiAgICAgICAgIGdldERvd25sb2FkVVJMKGltYWdlUmVmKS50aGVuKGFzeW5jICh1cmwpPT57XHJcbiAgICAgICAgICAgYXdhaXQgc3VibWl0TmV3UG9zdChuZXdQb3N0LnRleHQsbmV3UG9zdC5sb2NhdGlvbix1cmwsc2V0UG9zdHMsc2V0TmV3UG9zdCxzZXRFcnJvcilcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXJsKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9PntcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuXHJcbiAgICBhd2FpdCBzdWJtaXROZXdQb3N0KFxyXG4gICAgICBuZXdQb3N0LnRleHQsXHJcbiAgICAgIG5ld1Bvc3QubG9jYXRpb24sXHJcbiAgICAgIHBpY1VybCxcclxuICAgICAgc2V0UG9zdHMsXHJcbiAgICAgIHNldE5ld1Bvc3QsXHJcbiAgICAgIHNldEVycm9yXHJcbiAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1lZGlhKG51bGwpO1xyXG4gICAgc2V0TWVkaWFQcmV2aWV3KG51bGwpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtIGVycm9yPXtlcnJvciAhPT0gbnVsbH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldEVycm9yKG51bGwpfVxyXG4gICAgICAgICAgY29udGVudD17ZXJyb3J9XHJcbiAgICAgICAgICBoZWFkZXI9XCJPb3BzIVwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXt1c2VyLnByb2ZpbGVQaWNVcmx9IGNpcmN1bGFyIGF2YXRhciBpbmxpbmUgLz5cclxuICAgICAgICAgIDxGb3JtLlRleHRBcmVhXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdHMgSGFwcGVuaW5nXCJcclxuICAgICAgICAgICAgbmFtZT1cInRleHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmV3UG9zdC50ZXh0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICB3aWR0aD17MTR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17bmV3UG9zdC5sb2NhdGlvbn1cclxuICAgICAgICAgICAgbmFtZT1cImxvY2F0aW9uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbGFiZWw9XCJBZGQgTG9jYXRpb25cIlxyXG4gICAgICAgICAgICBpY29uPVwibWFwIG1hcmtlciBhbHRlcm5hdGVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldhbnQgdG8gYWRkIExvY2F0aW9uP1wiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBuYW1lPVwibWVkaWFcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cclxuICAgICAgICAgIHN0eWxlPXthZGRTdHlsZXMoKX1cclxuICAgICAgICAgIG9uRHJhZz17ZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25EcmFnTGVhdmU9e2UgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKGZhbHNlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyb3A9e2UgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJvcHBlZEZpbGUgPSBBcnJheS5mcm9tKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuXHJcbiAgICAgICAgICAgIHNldE1lZGlhKGRyb3BwZWRGaWxlWzBdKTtcclxuICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZHJvcHBlZEZpbGVbMF0pKTtcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAge21lZGlhID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwicGx1c1wiIHNpemU9XCJiaWdcIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxNTBweFwiLCB3aWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e21lZGlhUHJldmlld31cclxuICAgICAgICAgICAgICAgIGFsdD1cIlBvc3RJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjaXJjdWxhclxyXG4gICAgICAgICAgZGlzYWJsZWQ9e25ld1Bvc3QudGV4dCA9PT0gXCJcIiB8fCBsb2FkaW5nfVxyXG4gICAgICAgICAgY29udGVudD17PHN0cm9uZz5Qb3N0PC9zdHJvbmc+fVxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxREExRjJcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgaWNvbj1cInNlbmRcIlxyXG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVQb3N0O1xyXG4iLCJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQge2dldEZpcmVzdG9yZX0gZnJvbSBcIkBmaXJlYmFzZS9maXJlc3RvcmVcIlxyXG5pbXBvcnQge2dldFN0b3JhZ2V9IGZyb20gXCJAZmlyZWJhc2Uvc3RvcmFnZVwiXHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lENlRQUHp1SzludTBVWVgzSHpaeVZIQ202N095TlE5QW9cIixcclxuICAgIGF1dGhEb21haW46IFwiaGFja2F0aG9uLWU3NjlkLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcImhhY2thdGhvbi1lNzY5ZFwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJoYWNrYXRob24tZTc2OWQuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjU2MzQ2ODQ2NzY4NFwiLFxyXG4gICAgYXBwSWQ6IFwiMTo1NjM0Njg0Njc2ODQ6d2ViOjkyMGE2ZGYwYTE5YjA2OWFkMjViZjFcIixcclxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy0yTUZQQkwwTjBaXCJcclxuICB9O1xyXG5cclxuICBjb25zdCBhcHA9aW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG4gZXhwb3J0IGNvbnN0IGRiPWdldEZpcmVzdG9yZShhcHApXHJcbiBleHBvcnQgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoYXBwKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCBDcmVhdGVQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3QvQ3JlYXRlUG9zdFwiO1xyXG5pbXBvcnQgQ2FyZFBvc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdC9DYXJkUG9zdFwiO1xyXG5pbXBvcnQgeyBTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCB7IE5vUG9zdHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhXCI7XHJcbmltcG9ydCB7IFBvc3REZWxldGVUb2FzdHIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvVG9hc3RyXCI7XHJcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tIFwicmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQbGFjZUhvbGRlclBvc3RzLCBFbmRNZXNzYWdlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1BsYWNlSG9sZGVyR3JvdXBcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBnZXRVc2VySW5mbyBmcm9tIFwiLi4vdXRpbHMvZ2V0VXNlckluZm9cIjtcclxuaW1wb3J0IE1lc3NhZ2VOb3RpZmljYXRpb25Nb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL01lc3NhZ2VOb3RpZmljYXRpb25Nb2RhbFwiO1xyXG5pbXBvcnQgbmV3TXNnU291bmQgZnJvbSBcIi4uL3V0aWxzL25ld01zZ1NvdW5kXCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb25Qb3J0YWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Ob3RpZmljYXRpb25Qb3J0YWxcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHsgdXNlciwgcG9zdHNEYXRhLCBlcnJvckxvYWRpbmcgfSkge1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUocG9zdHNEYXRhIHx8IFtdKTtcclxuICBjb25zdCBbc2hvd1RvYXN0ciwgc2V0U2hvd1RvYXN0cl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2hhc01vcmUsIHNldEhhc01vcmVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDIpO1xyXG5cclxuICBjb25zdCBzb2NrZXQgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgW25ld01lc3NhZ2VSZWNlaXZlZCwgc2V0TmV3TWVzc2FnZVJlY2VpdmVkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlTW9kYWwsIHNob3dOZXdNZXNzYWdlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdFtuZXdOb3RpZmljYXRpb24sc2V0TmV3Tm90aWZpY2F0aW9uXT0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbbm90aWZpY2F0aW9uUG9wdXAsc2hvd1BvcHVwXT11c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQgPSBpbyhiYXNlVXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImpvaW5cIiwgeyB1c2VySWQ6IHVzZXIuX2lkIH0pO1xyXG5cclxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJuZXdNc2dSZWNlaXZlZFwiLCBhc3luYyAoeyBuZXdNc2cgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgcHJvZmlsZVBpY1VybCB9ID0gYXdhaXQgZ2V0VXNlckluZm8obmV3TXNnLnNlbmRlcik7XHJcblxyXG4gICAgICAgIGlmICh1c2VyLm5ld01lc3NhZ2VQb3B1cCkge1xyXG4gICAgICAgICAgc2V0TmV3TWVzc2FnZVJlY2VpdmVkKHtcclxuICAgICAgICAgICAgLi4ubmV3TXNnLFxyXG4gICAgICAgICAgICBzZW5kZXJOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBzZW5kZXJQcm9maWxlUGljOiBwcm9maWxlUGljVXJsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHNob3dOZXdNZXNzYWdlTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld01zZ1NvdW5kKG5hbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC50aXRsZSA9IGBXZWxjb21lLCAke3VzZXIubmFtZS5zcGxpdChcIiBcIilbMF19YDtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiZGlzY29ubmVjdFwiKTtcclxuICAgICAgICBzb2NrZXQuY3VycmVudC5vZmYoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzaG93VG9hc3RyICYmIHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd1RvYXN0cihmYWxzZSksIDMwMDApO1xyXG4gIH0sIFtzaG93VG9hc3RyXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgaWYoc29ja2V0LmN1cnJlbnQpXHJcbiAgICAgICB7XHJcbiAgICAgICAgc29ja2V0LmN1cnJlbnQub24oJ25ld05vdGlmaWNhdGlvblJlY2lldmVkJywoe25hbWUscHJvZmlsZVBpY1VybCx1c2VybmFtZSxwb3N0SWR9KT0+e1xyXG4gICAgICAgICAgICBzZXROZXdOb3RpZmljYXRpb24oe25hbWUscHJvZmlsZVBpY1VybCx1c2VybmFtZSxwb3N0SWR9KVxyXG4gICAgICAgICAgICBzaG93UG9wdXAodHJ1ZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgfVxyXG4gIH0sW10pXHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YU9uU2Nyb2xsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9LFxyXG4gICAgICAgIHBhcmFtczogeyBwYWdlTnVtYmVyIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09PSAwKSBzZXRIYXNNb3JlKGZhbHNlKTtcclxuXHJcbiAgICAgIHNldFBvc3RzKHByZXYgPT4gWy4uLnByZXYsIC4uLnJlcy5kYXRhXSk7XHJcbiAgICAgIHNldFBhZ2VOdW1iZXIocHJldiA9PiBwcmV2ICsgMSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydChcIkVycm9yIGZldGNoaW5nIFBvc3RzXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChwb3N0cy5sZW5ndGggPT09IDAgfHwgZXJyb3JMb2FkaW5nKSByZXR1cm4gPD48Q3JlYXRlUG9zdCB1c2VyPXt1c2VyfSBzZXRQb3N0cz17c2V0UG9zdHN9IC8+PE5vUG9zdHMgLz48Lz47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAge25vdGlmaWNhdGlvblBvcHVwICYmIG5ld05vdGlmaWNhdGlvbiE9PW51bGwgJiYgPE5vdGlmaWNhdGlvblBvcnRhbCBuZXdOb3RpZmljYXRpb249e25ld05vdGlmaWNhdGlvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uUG9wdXA9e25vdGlmaWNhdGlvblBvcHVwfSBzaG93UG9wdXA9e3Nob3dQb3B1cH0vPn1cclxuICAgICAge3Nob3dUb2FzdHIgJiYgPFBvc3REZWxldGVUb2FzdHIvPn1cclxuXHJcbiAgICAgIHtuZXdNZXNzYWdlTW9kYWwgJiYgbmV3TWVzc2FnZVJlY2VpdmVkICE9PSBudWxsICYmIChcclxuICAgICAgICA8TWVzc2FnZU5vdGlmaWNhdGlvbk1vZGFsXHJcbiAgICAgICAgICBzb2NrZXQ9e3NvY2tldH1cclxuICAgICAgICAgIHNob3dOZXdNZXNzYWdlTW9kYWw9e3Nob3dOZXdNZXNzYWdlTW9kYWx9XHJcbiAgICAgICAgICBuZXdNZXNzYWdlTW9kYWw9e25ld01lc3NhZ2VNb2RhbH1cclxuICAgICAgICAgIG5ld01lc3NhZ2VSZWNlaXZlZD17bmV3TWVzc2FnZVJlY2VpdmVkfVxyXG4gICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgPENyZWF0ZVBvc3QgdXNlcj17dXNlcn0gc2V0UG9zdHM9e3NldFBvc3RzfSAvPlxyXG5cclxuICAgICAgICA8SW5maW5pdGVTY3JvbGxcclxuICAgICAgICAgIGhhc01vcmU9e2hhc01vcmV9XHJcbiAgICAgICAgICBuZXh0PXtmZXRjaERhdGFPblNjcm9sbH1cclxuICAgICAgICAgIGxvYWRlcj17PFBsYWNlSG9sZGVyUG9zdHMgLz59XHJcbiAgICAgICAgICBlbmRNZXNzYWdlPXs8RW5kTWVzc2FnZSAvPn1cclxuICAgICAgICAgIGRhdGFMZW5ndGg9e3Bvc3RzLmxlbmd0aH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxyXG4gICAgICAgICAgICA8Q2FyZFBvc3RcclxuICAgICAgICAgICAgc29ja2V0PXtzb2NrZXR9XHJcbiAgICAgICAgICAgICAga2V5PXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICBwb3N0PXtwb3N0fVxyXG4gICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgc2V0UG9zdHM9e3NldFBvc3RzfVxyXG4gICAgICAgICAgICAgIHNldFNob3dUb2FzdHI9e3NldFNob3dUb2FzdHJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxyXG4gICAgICA8L1NlZ21lbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCwge1xyXG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0sXHJcbiAgICAgIHBhcmFtczogeyBwYWdlTnVtYmVyOiAxIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHBvc3RzRGF0YTogcmVzLmRhdGEgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3JMb2FkaW5nOiB0cnVlIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IGdldFVzZXJJbmZvID0gYXN5bmMgdXNlclRvRmluZElkID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9jaGF0cy91c2VyLyR7dXNlclRvRmluZElkfWAsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgbmFtZTogcmVzLmRhdGEubmFtZSwgcHJvZmlsZVBpY1VybDogcmVzLmRhdGEucHJvZmlsZVBpY1VybCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRVc2VySW5mbztcclxuIiwiY29uc3QgbmV3TXNnU291bmQgPSBzZW5kZXJOYW1lID0+IHtcclxuICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbyhcIi9saWdodC5tcDNcIik7XHJcblxyXG4gIHNvdW5kICYmIHNvdW5kLnBsYXkoKTtcclxuXHJcbiAgaWYgKHNlbmRlck5hbWUpIHtcclxuICAgIGRvY3VtZW50LnRpdGxlID0gYE5ldyBtZXNzYWdlIGZyb20gJHtzZW5kZXJOYW1lfWA7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk1lc3NhZ2VzXCI7XHJcbiAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld01zZ1NvdW5kO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZmlyZWJhc2Uvc3RvcmFnZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=