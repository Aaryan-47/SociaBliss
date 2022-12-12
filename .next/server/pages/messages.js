(function() {
var exports = {};
exports.id = "pages/messages";
exports.ids = ["pages/messages"];
exports.modules = {

/***/ "./components/Chats/Chat.js":
/*!**********************************!*\
  !*** ./components/Chats/Chat.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Chats\\Chat.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function Chat({
  chat,
  connectedUsers,
  deleteChat
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const isOnline = connectedUsers.length > 0 && connectedUsers.filter(user => user.userId === chat.messagesWith).length > 0;
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
    selection: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: router.query.message === chat.messagesWith,
    onClick: () => router.push(`/messages?message=${chat.messagesWith}`, undefined, {
      shallow: true
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Avatar, {
    src: chat.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Author, {
    as: "a",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, chat.name, " ", isOnline && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "circle",
    size: "small",
    color: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 30
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Metadata, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__.default)(chat.date)), __jsx("div", {
    style: {
      position: "absolute",
      right: "10px",
      cursor: "pointer"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "trash alternate",
    color: "red",
    onClick: () => deleteChat(chat.messagesWith),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, chat.lastMessage.length > 20 ? `${chat.lastMessage.substring(0, 20)} ...` : chat.lastMessage))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./components/Chats/ChatListSearch.js":
/*!********************************************!*\
  !*** ./components/Chats/ChatListSearch.js ***!
  \********************************************/
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
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Chats\\ChatListSearch.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






let cancel;

function ChatListSearch({
  chats,
  setChats
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: results,
    1: setResults
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  const handleChange = async e => {
    const {
      value
    } = e.target;
    setText(value);
    setLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_2___default().CancelToken);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("token");
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5___default())}/api/search/${value}`, {
        headers: {
          Authorization: token
        },
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });
      if (res.data.length === 0) return setLoading(false);
      setResults(res.data);
    } catch (error) {
      alert("Error Searching");
    }

    setLoading(false);
  };

  const addChat = result => {
    const alreadyInChat = chats.length > 0 && chats.filter(chat => chat.messsagesWith === result._id).length > 0;

    if (alreadyInChat) {
      return router.push(`/messages?message=${result._id}`);
    } //
    else {
        const newChat = {
          messagesWith: result._id,
          name: result.name,
          profilePicUrl: result.profilePicUrl,
          lastMessage: "",
          date: Date.now()
        };
        setChats(prev => [newChat, ...prev]);
        return router.push(`/messages?message=${result._id}`);
      }
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Search, {
    onBlur: () => {
      results.length > 0 && setResults([]);
      loading && setLoading(false);
      setText("");
    },
    loading: loading,
    value: text,
    resultRenderer: ResultRenderer,
    results: results,
    onSearchChange: handleChange,
    minCharacters: 1,
    onResultSelect: (e, data) => addChat(data.result),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  });
}

const ResultRenderer = ({
  _id,
  profilePicUrl,
  name
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
    key: _id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: profilePicUrl,
    alt: "ProfilePic",
    avatar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    header: name,
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatListSearch);

/***/ }),

/***/ "./components/Messages/Banner.js":
/*!***************************************!*\
  !*** ./components/Messages/Banner.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Messages\\Banner.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function Banner({
  bannerData
}) {
  const {
    name,
    profilePicUrl
  } = bannerData;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "teal",
    attached: "top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Column, {
    floated: "left",
    width: 14,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    avatar: true,
    src: profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), name))));
}

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Messages/Message.js":
/*!****************************************!*\
  !*** ./components/Messages/Message.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Messages\\Message.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function Message({
  message,
  user,
  deleteMsg,
  bannerProfilePic,
  divRef
}) {
  const {
    0: deleteIcon,
    1: showDeleteIcon
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const ifYouSender = message.sender === user._id;
  return __jsx("div", {
    className: "bubbleWrapper",
    ref: divRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: ifYouSender ? "inlineContainer own" : "inlineContainer",
    onClick: () => ifYouSender && showDeleteIcon(!deleteIcon),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "inlineIcon",
    src: ifYouSender ? user.profilePicUrl : bannerProfilePic,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: ifYouSender ? "ownBubble own" : "otherBubble other",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, message.msg), deleteIcon && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Popup, {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "trash",
      color: "red",
      style: {
        cursor: "pointer"
      },
      onClick: () => deleteMsg(message._id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }
    }),
    content: "This will only delete the message from your inbox!",
    position: "top right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })), __jsx("span", {
    className: ifYouSender ? "own" : "other",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__.default)(message.date)));
}

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./components/Messages/MessageInputField.js":
/*!**************************************************!*\
  !*** ./components/Messages/MessageInputField.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Messages\\MessageInputField.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function MessageInputField({
  sendMsg
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return __jsx("div", {
    style: {
      position: "sticky",
      bottom: "0"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    secondary: true,
    color: "teal",
    attached: "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    reply: true,
    onSubmit: e => {
      e.preventDefault();
      sendMsg(text);
      setText("");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
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
      lineNumber: 19,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (MessageInputField);

/***/ }),

/***/ "./pages/messages.js":
/*!***************************!*\
  !*** ./pages/messages.js ***!
  \***************************/
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
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Chats_Chat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Chats/Chat */ "./components/Chats/Chat.js");
/* harmony import */ var _components_Chats_ChatListSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Chats/ChatListSearch */ "./components/Chats/ChatListSearch.js");
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Messages_Banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Messages/Banner */ "./components/Messages/Banner.js");
/* harmony import */ var _components_Messages_MessageInputField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Messages/MessageInputField */ "./components/Messages/MessageInputField.js");
/* harmony import */ var _components_Messages_Message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Messages/Message */ "./components/Messages/Message.js");
/* harmony import */ var _utils_getUserInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/getUserInfo */ "./utils/getUserInfo.js");
/* harmony import */ var _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/newMsgSound */ "./utils/newMsgSound.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\pages\\messages.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

















const scrollDivToBottom = divRef => divRef.current !== null && divRef.current.scrollIntoView({
  behaviour: "smooth"
});

function Messages({
  chatsData,
  user
}) {
  const {
    0: chats,
    1: setChats
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(chatsData);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const socket = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: connectedUsers,
    1: setConnectedUsers
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: messages,
    1: setMessages
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: bannerData,
    1: setBannerData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    profilePicUrl: ""
  });
  const divRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // This ref is for persisting the state of query string in url throughout re-renders. This ref is the value of query string inside url

  const openChatId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(""); //CONNECTION useEffect

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!socket.current) {
      socket.current = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()((_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default()));
    }

    if (socket.current) {
      socket.current.emit("join", {
        userId: user._id
      });
      socket.current.on("connectedUsers", ({
        users
      }) => {
        users.length > 0 && setConnectedUsers(users);
      });

      if (chats.length > 0 && !router.query.message) {
        router.push(`/messages?message=${chats[0].messagesWith}`, undefined, {
          shallow: true
        });
      }
    }

    return () => {
      if (socket.current) {
        socket.current.emit("disconnect");
        socket.current.off();
      }
    };
  }, []); // LOAD MESSAGES useEffect

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadMessages = () => {
      socket.current.emit("loadMessages", {
        userId: user._id,
        messagesWith: router.query.message
      });
      socket.current.on("messagesLoaded", async ({
        chat
      }) => {
        setMessages(chat.messages);
        setBannerData({
          name: chat.messagesWith.name,
          profilePicUrl: chat.messagesWith.profilePicUrl
        });
        openChatId.current = chat.messagesWith._id;
        divRef.current && scrollDivToBottom(divRef);
      });
      socket.current.on("noChatFound", async () => {
        const {
          name,
          profilePicUrl
        } = await (0,_utils_getUserInfo__WEBPACK_IMPORTED_MODULE_13__.default)(router.query.message);
        setBannerData({
          name,
          profilePicUrl
        });
        setMessages([]);
        openChatId.current = router.query.message;
      });
    };

    if (socket.current && router.query.message) loadMessages();
  }, [router.query.message]);

  const sendMsg = msg => {
    if (socket.current) {
      socket.current.emit("sendNewMsg", {
        userId: user._id,
        msgSendToUserId: openChatId.current,
        msg
      });
    }
  }; // Confirming msg is sent and receving the messages useEffect


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (socket.current) {
      socket.current.on("msgSent", ({
        newMsg
      }) => {
        if (newMsg.receiver === openChatId.current) {
          setMessages(prev => [...prev, newMsg]);
          setChats(prev => {
            const previousChat = prev.find(chat => chat.messagesWith === newMsg.receiver);
            previousChat.lastMessage = newMsg.msg;
            previousChat.date = newMsg.date;
            return [...prev];
          });
        }
      });
      socket.current.on("newMsgReceived", async ({
        newMsg
      }) => {
        let senderName; // WHEN CHAT WITH SENDER IS CURRENTLY OPENED INSIDE YOUR BROWSER

        if (newMsg.sender === openChatId.current) {
          setMessages(prev => [...prev, newMsg]);
          setChats(prev => {
            const previousChat = prev.find(chat => chat.messagesWith === newMsg.sender);
            previousChat.lastMessage = newMsg.msg;
            previousChat.date = newMsg.date;
            senderName = previousChat.name;
            return [...prev];
          });
        } //
        else {
            const ifPreviouslyMessaged = chats.filter(chat => chat.messagesWith === newMsg.sender).length > 0;

            if (ifPreviouslyMessaged) {
              setChats(prev => {
                const previousChat = prev.find(chat => chat.messagesWith === newMsg.sender);
                previousChat.lastMessage = newMsg.msg;
                previousChat.date = newMsg.date;
                senderName = previousChat.name;
                return [previousChat, ...prev.filter(chat => chat.messagesWith !== newMsg.sender)];
              });
            } //IF NO PREVIOUS CHAT WITH THE SENDER
            else {
                const {
                  name,
                  profilePicUrl
                } = await (0,_utils_getUserInfo__WEBPACK_IMPORTED_MODULE_13__.default)(newMsg.sender);
                senderName = name;
                const newChat = {
                  messagesWith: newMsg.sender,
                  name,
                  profilePicUrl,
                  lastMessage: newMsg.msg,
                  date: newMsg.date
                };
                setChats(prev => [newChat, ...prev]);
              }
          }

        (0,_utils_newMsgSound__WEBPACK_IMPORTED_MODULE_14__.default)(senderName);
      });
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    messages.length > 0 && scrollDivToBottom(divRef);
  }, [messages]);

  const deleteMsg = messageId => {
    if (socket.current) {
      socket.current.emit("deleteMsg", {
        userId: user._id,
        messagesWith: openChatId.current,
        messageId
      });
      socket.current.on("msgDeleted", () => {
        setMessages(prev => prev.filter(message => message._id !== messageId));
      });
    }
  };

  const deleteChat = async messagesWith => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_2___default().delete(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default())}/api/chats/${messagesWith}`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_15___default().get("token")
        }
      });
      setChats(prev => prev.filter(chat => chat.messagesWith !== messagesWith));
      router.push("/messages", undefined, {
        shallow: true
      });
    } catch (error) {
      alert("Error deleting chat");
    }
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {
    padded: true,
    basic: true,
    size: "large",
    style: {
      marginTop: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Header, {
    icon: "home",
    content: "Go Back!",
    onClick: () => router.push("/"),
    style: {
      cursor: "pointer"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      marginBottom: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  }, __jsx(_components_Chats_ChatListSearch__WEBPACK_IMPORTED_MODULE_8__.default, {
    chats: chats,
    setChats: setChats,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 11
    }
  })), chats.length > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {
    stackable: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Column, {
    width: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Comment.Group, {
    size: "big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {
    raised: true,
    style: {
      overflow: "auto",
      maxHeight: "32rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 19
    }
  }, chats.map((chat, i) => __jsx(_components_Chats_Chat__WEBPACK_IMPORTED_MODULE_7__.default, {
    key: i,
    chat: chat,
    connectedUsers: connectedUsers,
    deleteChat: deleteChat,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 23
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Column, {
    width: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 15
    }
  }, router.query.message && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    style: {
      overflow: "auto",
      overflowX: "hidden",
      maxHeight: "35rem",
      height: "35rem",
      backgroundColor: "whitesmoke"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      position: "sticky",
      top: "0"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 23
    }
  }, __jsx(_components_Messages_Banner__WEBPACK_IMPORTED_MODULE_10__.default, {
    bannerData: bannerData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 25
    }
  })), messages.length > 0 && messages.map((message, i) => __jsx(_components_Messages_Message__WEBPACK_IMPORTED_MODULE_12__.default, {
    divRef: divRef,
    key: i,
    bannerProfilePic: bannerData.profilePicUrl,
    message: message,
    user: user,
    deleteMsg: deleteMsg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 27
    }
  }))), __jsx(_components_Messages_MessageInputField__WEBPACK_IMPORTED_MODULE_11__.default, {
    sendMsg: sendMsg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 21
    }
  }))))) : __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_9__.NoMessages, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 11
    }
  })));
}

Messages.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default())}/api/chats`, {
      headers: {
        Authorization: token
      }
    });
    return {
      chatsData: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Messages);

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

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_NoData_js-utils_baseUrl_js-utils_calculateTime_js"], function() { return __webpack_exec__("./pages/messages.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NoYXRzL0NoYXQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9DaGF0cy9DaGF0TGlzdFNlYXJjaC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL01lc3NhZ2VzL0Jhbm5lci5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL01lc3NhZ2VzL01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9NZXNzYWdlcy9NZXNzYWdlSW5wdXRGaWVsZC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9nZXRVc2VySW5mby5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9uZXdNc2dTb3VuZC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtbW9tZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJzb2NrZXQuaW8tY2xpZW50XCIiXSwibmFtZXMiOlsiQ2hhdCIsImNoYXQiLCJjb25uZWN0ZWRVc2VycyIsImRlbGV0ZUNoYXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc09ubGluZSIsImxlbmd0aCIsImZpbHRlciIsInVzZXIiLCJ1c2VySWQiLCJtZXNzYWdlc1dpdGgiLCJxdWVyeSIsIm1lc3NhZ2UiLCJwdXNoIiwidW5kZWZpbmVkIiwic2hhbGxvdyIsInByb2ZpbGVQaWNVcmwiLCJuYW1lIiwiY2FsY3VsYXRlVGltZSIsImRhdGUiLCJwb3NpdGlvbiIsInJpZ2h0IiwiY3Vyc29yIiwibGFzdE1lc3NhZ2UiLCJzdWJzdHJpbmciLCJjYW5jZWwiLCJDaGF0TGlzdFNlYXJjaCIsImNoYXRzIiwic2V0Q2hhdHMiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJ0b2tlbiIsImNvb2tpZSIsInJlcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNhbmNlbFRva2VuIiwiY2FuY2VsZXIiLCJkYXRhIiwiZXJyb3IiLCJhbGVydCIsImFkZENoYXQiLCJyZXN1bHQiLCJhbHJlYWR5SW5DaGF0IiwibWVzc3NhZ2VzV2l0aCIsIl9pZCIsIm5ld0NoYXQiLCJEYXRlIiwibm93IiwicHJldiIsIlJlc3VsdFJlbmRlcmVyIiwiQmFubmVyIiwiYmFubmVyRGF0YSIsIk1lc3NhZ2UiLCJkZWxldGVNc2ciLCJiYW5uZXJQcm9maWxlUGljIiwiZGl2UmVmIiwiZGVsZXRlSWNvbiIsInNob3dEZWxldGVJY29uIiwiaWZZb3VTZW5kZXIiLCJzZW5kZXIiLCJtc2ciLCJNZXNzYWdlSW5wdXRGaWVsZCIsInNlbmRNc2ciLCJib3R0b20iLCJwcmV2ZW50RGVmYXVsdCIsImNvbG9yIiwiaWNvbiIsImRpc2FibGVkIiwic2Nyb2xsRGl2VG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvdXIiLCJNZXNzYWdlcyIsImNoYXRzRGF0YSIsInNvY2tldCIsInVzZVJlZiIsInNldENvbm5lY3RlZFVzZXJzIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInNldEJhbm5lckRhdGEiLCJvcGVuQ2hhdElkIiwidXNlRWZmZWN0IiwiaW8iLCJlbWl0Iiwib24iLCJ1c2VycyIsIm9mZiIsImxvYWRNZXNzYWdlcyIsImdldFVzZXJJbmZvIiwibXNnU2VuZFRvVXNlcklkIiwibmV3TXNnIiwicmVjZWl2ZXIiLCJwcmV2aW91c0NoYXQiLCJmaW5kIiwic2VuZGVyTmFtZSIsImlmUHJldmlvdXNseU1lc3NhZ2VkIiwibmV3TXNnU291bmQiLCJtZXNzYWdlSWQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJvdmVyZmxvdyIsIm1heEhlaWdodCIsIm1hcCIsImkiLCJvdmVyZmxvd1giLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0b3AiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwYXJzZUNvb2tpZXMiLCJlcnJvckxvYWRpbmciLCJ1c2VyVG9GaW5kSWQiLCJjb25zb2xlIiwic291bmQiLCJBdWRpbyIsInBsYXkiLCJkb2N1bWVudCIsInRpdGxlIiwidmlzaWJpbGl0eVN0YXRlIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULENBQWM7QUFBRUMsTUFBRjtBQUFRQyxnQkFBUjtBQUF3QkM7QUFBeEIsQ0FBZCxFQUFvRDtBQUNsRCxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsUUFBTUMsUUFBUSxHQUNaSixjQUFjLENBQUNLLE1BQWYsR0FBd0IsQ0FBeEIsSUFDQUwsY0FBYyxDQUFDTSxNQUFmLENBQXNCQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsTUFBTCxLQUFnQlQsSUFBSSxDQUFDVSxZQUFuRCxFQUFpRUosTUFBakUsR0FBMEUsQ0FGNUU7QUFJQSxTQUNFLHFFQUNFLE1BQUMsbURBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxVQUFNLEVBQUVILE1BQU0sQ0FBQ1EsS0FBUCxDQUFhQyxPQUFiLEtBQXlCWixJQUFJLENBQUNVLFlBRHhDO0FBRUUsV0FBTyxFQUFFLE1BQ1BQLE1BQU0sQ0FBQ1UsSUFBUCxDQUFhLHFCQUFvQmIsSUFBSSxDQUFDVSxZQUFhLEVBQW5ELEVBQXNESSxTQUF0RCxFQUFpRTtBQUMvREMsYUFBTyxFQUFFO0FBRHNELEtBQWpFLENBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBZ0IsT0FBRyxFQUFFZixJQUFJLENBQUNnQixhQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQWdCLE1BQUUsRUFBQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0doQixJQUFJLENBQUNpQixJQURSLEVBQ2MsR0FEZCxFQUVHWixRQUFRLElBQUksTUFBQyxtREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQW9CLFFBQUksRUFBQyxPQUF6QjtBQUFpQyxTQUFLLEVBQUMsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZmLENBREYsRUFNRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1hLDZEQUFhLENBQUNsQixJQUFJLENBQUNtQixJQUFOLENBQW5CLENBREYsRUFFRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsVUFBWjtBQUF3QkMsV0FBSyxFQUFFLE1BQS9CO0FBQXVDQyxZQUFNLEVBQUU7QUFBL0MsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUNFLFFBQUksRUFBQyxpQkFEUDtBQUVFLFNBQUssRUFBQyxLQUZSO0FBR0UsV0FBTyxFQUFFLE1BQU1wQixVQUFVLENBQUNGLElBQUksQ0FBQ1UsWUFBTixDQUgzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQU5GLEVBaUJFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVixJQUFJLENBQUN1QixXQUFMLENBQWlCakIsTUFBakIsR0FBMEIsRUFBMUIsR0FDSSxHQUFFTixJQUFJLENBQUN1QixXQUFMLENBQWlCQyxTQUFqQixDQUEyQixDQUEzQixFQUE4QixFQUE5QixDQUFrQyxNQUR4QyxHQUVHeEIsSUFBSSxDQUFDdUIsV0FIWCxDQWpCRixDQUZGLENBUkYsQ0FERixDQURGLEVBc0NFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRDRixDQURGO0FBMENEOztBQUVELCtEQUFleEIsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJMEIsTUFBSjs7QUFFQSxTQUFTQyxjQUFULENBQXdCO0FBQUVDLE9BQUY7QUFBU0M7QUFBVCxDQUF4QixFQUE2QztBQUMzQyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNNUIsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxRQUFNZ0MsWUFBWSxHQUFHLE1BQU1DLENBQU4sSUFBVztBQUM5QixVQUFNO0FBQUVDO0FBQUYsUUFBWUQsQ0FBQyxDQUFDRSxNQUFwQjtBQUNBVCxXQUFPLENBQUNRLEtBQUQsQ0FBUDtBQUNBTCxjQUFVLENBQUMsSUFBRCxDQUFWOztBQUVBLFFBQUk7QUFDRlIsWUFBTSxJQUFJQSxNQUFNLEVBQWhCO0FBQ0EsWUFBTWUsV0FBVyxHQUFHQywwREFBcEI7QUFDQSxZQUFNQyxLQUFLLEdBQUdDLG9EQUFBLENBQVcsT0FBWCxDQUFkO0FBRUEsWUFBTUMsR0FBRyxHQUFHLE1BQU1ILGdEQUFBLENBQVcsR0FBRUksdURBQVEsZUFBY1AsS0FBTSxFQUF6QyxFQUE0QztBQUM1RFEsZUFBTyxFQUFFO0FBQUVDLHVCQUFhLEVBQUVMO0FBQWpCLFNBRG1EO0FBRTVETSxtQkFBVyxFQUFFLElBQUlSLFdBQUosQ0FBZ0JTLFFBQVEsSUFBSTtBQUN2Q3hCLGdCQUFNLEdBQUd3QixRQUFUO0FBQ0QsU0FGWTtBQUYrQyxPQUE1QyxDQUFsQjtBQU9BLFVBQUlMLEdBQUcsQ0FBQ00sSUFBSixDQUFTNUMsTUFBVCxLQUFvQixDQUF4QixFQUEyQixPQUFPMkIsVUFBVSxDQUFDLEtBQUQsQ0FBakI7QUFFM0JFLGdCQUFVLENBQUNTLEdBQUcsQ0FBQ00sSUFBTCxDQUFWO0FBQ0QsS0FmRCxDQWVFLE9BQU9DLEtBQVAsRUFBYztBQUNkQyxXQUFLLENBQUMsaUJBQUQsQ0FBTDtBQUNEOztBQUVEbkIsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEdBekJEOztBQTJCQSxRQUFNb0IsT0FBTyxHQUFHQyxNQUFNLElBQUk7QUFDeEIsVUFBTUMsYUFBYSxHQUNqQjVCLEtBQUssQ0FBQ3JCLE1BQU4sR0FBZSxDQUFmLElBQ0FxQixLQUFLLENBQUNwQixNQUFOLENBQWFQLElBQUksSUFBSUEsSUFBSSxDQUFDd0QsYUFBTCxLQUF1QkYsTUFBTSxDQUFDRyxHQUFuRCxFQUF3RG5ELE1BQXhELEdBQWlFLENBRm5FOztBQUlBLFFBQUlpRCxhQUFKLEVBQW1CO0FBQ2pCLGFBQU9wRCxNQUFNLENBQUNVLElBQVAsQ0FBYSxxQkFBb0J5QyxNQUFNLENBQUNHLEdBQUksRUFBNUMsQ0FBUDtBQUNELEtBRkQsQ0FHQTtBQUhBLFNBSUs7QUFDSCxjQUFNQyxPQUFPLEdBQUc7QUFDZGhELHNCQUFZLEVBQUU0QyxNQUFNLENBQUNHLEdBRFA7QUFFZHhDLGNBQUksRUFBRXFDLE1BQU0sQ0FBQ3JDLElBRkM7QUFHZEQsdUJBQWEsRUFBRXNDLE1BQU0sQ0FBQ3RDLGFBSFI7QUFJZE8scUJBQVcsRUFBRSxFQUpDO0FBS2RKLGNBQUksRUFBRXdDLElBQUksQ0FBQ0MsR0FBTDtBQUxRLFNBQWhCO0FBUUFoQyxnQkFBUSxDQUFDaUMsSUFBSSxJQUFJLENBQUNILE9BQUQsRUFBVSxHQUFHRyxJQUFiLENBQVQsQ0FBUjtBQUVBLGVBQU8xRCxNQUFNLENBQUNVLElBQVAsQ0FBYSxxQkFBb0J5QyxNQUFNLENBQUNHLEdBQUksRUFBNUMsQ0FBUDtBQUNEO0FBQ0YsR0F0QkQ7O0FBd0JBLFNBQ0UsTUFBQyxxREFBRDtBQUNFLFVBQU0sRUFBRSxNQUFNO0FBQ1p2QixhQUFPLENBQUM1QixNQUFSLEdBQWlCLENBQWpCLElBQXNCNkIsVUFBVSxDQUFDLEVBQUQsQ0FBaEM7QUFDQUgsYUFBTyxJQUFJQyxVQUFVLENBQUMsS0FBRCxDQUFyQjtBQUNBSCxhQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0QsS0FMSDtBQU1FLFdBQU8sRUFBRUUsT0FOWDtBQU9FLFNBQUssRUFBRUgsSUFQVDtBQVFFLGtCQUFjLEVBQUVpQyxjQVJsQjtBQVNFLFdBQU8sRUFBRTVCLE9BVFg7QUFVRSxrQkFBYyxFQUFFRSxZQVZsQjtBQVdFLGlCQUFhLEVBQUUsQ0FYakI7QUFZRSxrQkFBYyxFQUFFLENBQUNDLENBQUQsRUFBSWEsSUFBSixLQUFhRyxPQUFPLENBQUNILElBQUksQ0FBQ0ksTUFBTixDQVp0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFnQkQ7O0FBRUQsTUFBTVEsY0FBYyxHQUFHLENBQUM7QUFBRUwsS0FBRjtBQUFPekMsZUFBUDtBQUFzQkM7QUFBdEIsQ0FBRCxLQUFrQztBQUN2RCxTQUNFLE1BQUMsbURBQUQ7QUFBTSxPQUFHLEVBQUV3QyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU8sT0FBRyxFQUFFekMsYUFBWjtBQUEyQixPQUFHLEVBQUMsWUFBL0I7QUFBNEMsVUFBTSxNQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDJEQUFEO0FBQWMsVUFBTSxFQUFFQyxJQUF0QjtBQUE0QixNQUFFLEVBQUMsR0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FERjtBQVFELENBVEQ7O0FBV0EsK0RBQWVTLGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQ0E7O0FBRUEsU0FBU3FDLE1BQVQsQ0FBZ0I7QUFBRUM7QUFBRixDQUFoQixFQUFnQztBQUM5QixRQUFNO0FBQUUvQyxRQUFGO0FBQVFEO0FBQVIsTUFBMEJnRCxVQUFoQztBQUVBLFNBQ0UsTUFBQyxzREFBRDtBQUFTLFNBQUssRUFBQyxNQUFmO0FBQXNCLFlBQVEsRUFBQyxLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFhLFdBQU8sRUFBQyxNQUFyQjtBQUE0QixTQUFLLEVBQUUsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU8sVUFBTSxNQUFiO0FBQWMsT0FBRyxFQUFFaEQsYUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUdDLElBRkgsQ0FERixDQURGLENBREYsQ0FERjtBQVlEOztBQUVELCtEQUFlOEMsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTRSxPQUFULENBQWlCO0FBQUVyRCxTQUFGO0FBQVdKLE1BQVg7QUFBaUIwRCxXQUFqQjtBQUE0QkMsa0JBQTVCO0FBQThDQztBQUE5QyxDQUFqQixFQUF5RTtBQUN2RSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBK0J2QywrQ0FBUSxDQUFDLEtBQUQsQ0FBN0M7QUFFQSxRQUFNd0MsV0FBVyxHQUFHM0QsT0FBTyxDQUFDNEQsTUFBUixLQUFtQmhFLElBQUksQ0FBQ2lELEdBQTVDO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQStCLE9BQUcsRUFBRVcsTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFFRyxXQUFXLEdBQUcscUJBQUgsR0FBMkIsaUJBRG5EO0FBRUUsV0FBTyxFQUFFLE1BQU1BLFdBQVcsSUFBSUQsY0FBYyxDQUFDLENBQUNELFVBQUYsQ0FGOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQ0UsYUFBUyxFQUFDLFlBRFo7QUFFRSxPQUFHLEVBQUVFLFdBQVcsR0FBRy9ELElBQUksQ0FBQ1EsYUFBUixHQUF3Qm1ELGdCQUYxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFTRTtBQUFLLGFBQVMsRUFBRUksV0FBVyxHQUFHLGVBQUgsR0FBcUIsbUJBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzNELE9BQU8sQ0FBQzZELEdBRFgsQ0FURixFQWFHSixVQUFVLElBQ1QsTUFBQyxvREFBRDtBQUNFLFdBQU8sRUFDTCxNQUFDLG1EQUFEO0FBQ0UsVUFBSSxFQUFDLE9BRFA7QUFFRSxXQUFLLEVBQUMsS0FGUjtBQUdFLFdBQUssRUFBRTtBQUFFL0MsY0FBTSxFQUFFO0FBQVYsT0FIVDtBQUlFLGFBQU8sRUFBRSxNQUFNNEMsU0FBUyxDQUFDdEQsT0FBTyxDQUFDNkMsR0FBVCxDQUoxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRko7QUFTRSxXQUFPLEVBQUMsb0RBVFY7QUFVRSxZQUFRLEVBQUMsV0FWWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEosQ0FERixFQThCRTtBQUFNLGFBQVMsRUFBRWMsV0FBVyxHQUFHLEtBQUgsR0FBVyxPQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlEckQsNkRBQWEsQ0FBQ04sT0FBTyxDQUFDTyxJQUFULENBQTlELENBOUJGLENBREY7QUFrQ0Q7O0FBRUQsK0RBQWU4QyxPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBOztBQUVBLFNBQVNTLGlCQUFULENBQTJCO0FBQUVDO0FBQUYsQ0FBM0IsRUFBd0M7QUFDdEMsUUFBTTtBQUFBLE9BQUM5QyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFFQSxTQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVYLGNBQVEsRUFBRSxRQUFaO0FBQXNCd0QsWUFBTSxFQUFFO0FBQTlCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBUyxhQUFTLE1BQWxCO0FBQW1CLFNBQUssRUFBQyxNQUF6QjtBQUFnQyxZQUFRLEVBQUMsUUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFDRSxTQUFLLE1BRFA7QUFFRSxZQUFRLEVBQUV2QyxDQUFDLElBQUk7QUFDYkEsT0FBQyxDQUFDd0MsY0FBRjtBQUNBRixhQUFPLENBQUM5QyxJQUFELENBQVA7QUFDQUMsYUFBTyxDQUFDLEVBQUQsQ0FBUDtBQUNELEtBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMseURBQUQ7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLGVBQVcsRUFBQyxrQkFGZDtBQUdFLFNBQUssRUFBRUQsSUFIVDtBQUlFLFlBQVEsRUFBRVEsQ0FBQyxJQUFJUCxPQUFPLENBQUNPLENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxLQUFWLENBSnhCO0FBS0UsVUFBTSxFQUFFO0FBQ053QyxXQUFLLEVBQUUsTUFERDtBQUVOQyxVQUFJLEVBQUUsZ0JBRkE7QUFHTkMsY0FBUSxFQUFFbkQsSUFBSSxLQUFLLEVBSGI7QUFJTkcsYUFBTyxFQUFFQTtBQUpILEtBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREYsQ0FERixDQURGO0FBMkJEOztBQUVELCtEQUFlMEMsaUJBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTU8saUJBQWlCLEdBQUdiLE1BQU0sSUFDOUJBLE1BQU0sQ0FBQ2MsT0FBUCxLQUFtQixJQUFuQixJQUEyQmQsTUFBTSxDQUFDYyxPQUFQLENBQWVDLGNBQWYsQ0FBOEI7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBOUIsQ0FEN0I7O0FBR0EsU0FBU0MsUUFBVCxDQUFrQjtBQUFFQyxXQUFGO0FBQWE5RTtBQUFiLENBQWxCLEVBQXVDO0FBQ3JDLFFBQU07QUFBQSxPQUFDbUIsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JHLCtDQUFRLENBQUN1RCxTQUFELENBQWxDO0FBQ0EsUUFBTW5GLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQSxRQUFNbUYsTUFBTSxHQUFHQyw2Q0FBTSxFQUFyQjtBQUNBLFFBQU07QUFBQSxPQUFDdkYsY0FBRDtBQUFBLE9BQWlCd0Y7QUFBakIsTUFBc0MxRCwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFFQSxRQUFNO0FBQUEsT0FBQzJELFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCNUQsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNpQyxVQUFEO0FBQUEsT0FBYTRCO0FBQWIsTUFBOEI3RCwrQ0FBUSxDQUFDO0FBQUVkLFFBQUksRUFBRSxFQUFSO0FBQVlELGlCQUFhLEVBQUU7QUFBM0IsR0FBRCxDQUE1QztBQUVBLFFBQU1vRCxNQUFNLEdBQUdvQiw2Q0FBTSxFQUFyQixDQVZxQyxDQVlyQzs7QUFDQSxRQUFNSyxVQUFVLEdBQUdMLDZDQUFNLENBQUMsRUFBRCxDQUF6QixDQWJxQyxDQWVyQzs7QUFDQU0sa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSSxDQUFDUCxNQUFNLENBQUNMLE9BQVosRUFBcUI7QUFDbkJLLFlBQU0sQ0FBQ0wsT0FBUCxHQUFpQmEsdURBQUUsQ0FBQ2xELHVEQUFELENBQW5CO0FBQ0Q7O0FBRUQsUUFBSTBDLE1BQU0sQ0FBQ0wsT0FBWCxFQUFvQjtBQUNsQkssWUFBTSxDQUFDTCxPQUFQLENBQWVjLElBQWYsQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRXZGLGNBQU0sRUFBRUQsSUFBSSxDQUFDaUQ7QUFBZixPQUE1QjtBQUVBOEIsWUFBTSxDQUFDTCxPQUFQLENBQWVlLEVBQWYsQ0FBa0IsZ0JBQWxCLEVBQW9DLENBQUM7QUFBRUM7QUFBRixPQUFELEtBQWU7QUFDakRBLGFBQUssQ0FBQzVGLE1BQU4sR0FBZSxDQUFmLElBQW9CbUYsaUJBQWlCLENBQUNTLEtBQUQsQ0FBckM7QUFDRCxPQUZEOztBQUlBLFVBQUl2RSxLQUFLLENBQUNyQixNQUFOLEdBQWUsQ0FBZixJQUFvQixDQUFDSCxNQUFNLENBQUNRLEtBQVAsQ0FBYUMsT0FBdEMsRUFBK0M7QUFDN0NULGNBQU0sQ0FBQ1UsSUFBUCxDQUFhLHFCQUFvQmMsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTakIsWUFBYSxFQUF2RCxFQUEwREksU0FBMUQsRUFBcUU7QUFDbkVDLGlCQUFPLEVBQUU7QUFEMEQsU0FBckU7QUFHRDtBQUNGOztBQUVELFdBQU8sTUFBTTtBQUNYLFVBQUl3RSxNQUFNLENBQUNMLE9BQVgsRUFBb0I7QUFDbEJLLGNBQU0sQ0FBQ0wsT0FBUCxDQUFlYyxJQUFmLENBQW9CLFlBQXBCO0FBQ0FULGNBQU0sQ0FBQ0wsT0FBUCxDQUFlaUIsR0FBZjtBQUNEO0FBQ0YsS0FMRDtBQU1ELEdBekJRLEVBeUJOLEVBekJNLENBQVQsQ0FoQnFDLENBMkNyQzs7QUFDQUwsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTU0sWUFBWSxHQUFHLE1BQU07QUFDekJiLFlBQU0sQ0FBQ0wsT0FBUCxDQUFlYyxJQUFmLENBQW9CLGNBQXBCLEVBQW9DO0FBQ2xDdkYsY0FBTSxFQUFFRCxJQUFJLENBQUNpRCxHQURxQjtBQUVsQy9DLG9CQUFZLEVBQUVQLE1BQU0sQ0FBQ1EsS0FBUCxDQUFhQztBQUZPLE9BQXBDO0FBS0EyRSxZQUFNLENBQUNMLE9BQVAsQ0FBZWUsRUFBZixDQUFrQixnQkFBbEIsRUFBb0MsT0FBTztBQUFFakc7QUFBRixPQUFQLEtBQW9CO0FBQ3REMkYsbUJBQVcsQ0FBQzNGLElBQUksQ0FBQzBGLFFBQU4sQ0FBWDtBQUNBRSxxQkFBYSxDQUFDO0FBQ1ozRSxjQUFJLEVBQUVqQixJQUFJLENBQUNVLFlBQUwsQ0FBa0JPLElBRFo7QUFFWkQsdUJBQWEsRUFBRWhCLElBQUksQ0FBQ1UsWUFBTCxDQUFrQk07QUFGckIsU0FBRCxDQUFiO0FBS0E2RSxrQkFBVSxDQUFDWCxPQUFYLEdBQXFCbEYsSUFBSSxDQUFDVSxZQUFMLENBQWtCK0MsR0FBdkM7QUFDQVcsY0FBTSxDQUFDYyxPQUFQLElBQWtCRCxpQkFBaUIsQ0FBQ2IsTUFBRCxDQUFuQztBQUNELE9BVEQ7QUFXQW1CLFlBQU0sQ0FBQ0wsT0FBUCxDQUFlZSxFQUFmLENBQWtCLGFBQWxCLEVBQWlDLFlBQVk7QUFDM0MsY0FBTTtBQUFFaEYsY0FBRjtBQUFRRDtBQUFSLFlBQTBCLE1BQU1xRiw0REFBVyxDQUFDbEcsTUFBTSxDQUFDUSxLQUFQLENBQWFDLE9BQWQsQ0FBakQ7QUFFQWdGLHFCQUFhLENBQUM7QUFBRTNFLGNBQUY7QUFBUUQ7QUFBUixTQUFELENBQWI7QUFDQTJFLG1CQUFXLENBQUMsRUFBRCxDQUFYO0FBRUFFLGtCQUFVLENBQUNYLE9BQVgsR0FBcUIvRSxNQUFNLENBQUNRLEtBQVAsQ0FBYUMsT0FBbEM7QUFDRCxPQVBEO0FBUUQsS0F6QkQ7O0FBMkJBLFFBQUkyRSxNQUFNLENBQUNMLE9BQVAsSUFBa0IvRSxNQUFNLENBQUNRLEtBQVAsQ0FBYUMsT0FBbkMsRUFBNEN3RixZQUFZO0FBQ3pELEdBN0JRLEVBNkJOLENBQUNqRyxNQUFNLENBQUNRLEtBQVAsQ0FBYUMsT0FBZCxDQTdCTSxDQUFUOztBQStCQSxRQUFNK0QsT0FBTyxHQUFHRixHQUFHLElBQUk7QUFDckIsUUFBSWMsTUFBTSxDQUFDTCxPQUFYLEVBQW9CO0FBQ2xCSyxZQUFNLENBQUNMLE9BQVAsQ0FBZWMsSUFBZixDQUFvQixZQUFwQixFQUFrQztBQUNoQ3ZGLGNBQU0sRUFBRUQsSUFBSSxDQUFDaUQsR0FEbUI7QUFFaEM2Qyx1QkFBZSxFQUFFVCxVQUFVLENBQUNYLE9BRkk7QUFHaENUO0FBSGdDLE9BQWxDO0FBS0Q7QUFDRixHQVJELENBM0VxQyxDQXFGckM7OztBQUNBcUIsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSVAsTUFBTSxDQUFDTCxPQUFYLEVBQW9CO0FBQ2xCSyxZQUFNLENBQUNMLE9BQVAsQ0FBZWUsRUFBZixDQUFrQixTQUFsQixFQUE2QixDQUFDO0FBQUVNO0FBQUYsT0FBRCxLQUFnQjtBQUMzQyxZQUFJQSxNQUFNLENBQUNDLFFBQVAsS0FBb0JYLFVBQVUsQ0FBQ1gsT0FBbkMsRUFBNEM7QUFDMUNTLHFCQUFXLENBQUM5QixJQUFJLElBQUksQ0FBQyxHQUFHQSxJQUFKLEVBQVUwQyxNQUFWLENBQVQsQ0FBWDtBQUVBM0Usa0JBQVEsQ0FBQ2lDLElBQUksSUFBSTtBQUNmLGtCQUFNNEMsWUFBWSxHQUFHNUMsSUFBSSxDQUFDNkMsSUFBTCxDQUFVMUcsSUFBSSxJQUFJQSxJQUFJLENBQUNVLFlBQUwsS0FBc0I2RixNQUFNLENBQUNDLFFBQS9DLENBQXJCO0FBQ0FDLHdCQUFZLENBQUNsRixXQUFiLEdBQTJCZ0YsTUFBTSxDQUFDOUIsR0FBbEM7QUFDQWdDLHdCQUFZLENBQUN0RixJQUFiLEdBQW9Cb0YsTUFBTSxDQUFDcEYsSUFBM0I7QUFFQSxtQkFBTyxDQUFDLEdBQUcwQyxJQUFKLENBQVA7QUFDRCxXQU5PLENBQVI7QUFPRDtBQUNGLE9BWkQ7QUFjQTBCLFlBQU0sQ0FBQ0wsT0FBUCxDQUFlZSxFQUFmLENBQWtCLGdCQUFsQixFQUFvQyxPQUFPO0FBQUVNO0FBQUYsT0FBUCxLQUFzQjtBQUN4RCxZQUFJSSxVQUFKLENBRHdELENBR3hEOztBQUNBLFlBQUlKLE1BQU0sQ0FBQy9CLE1BQVAsS0FBa0JxQixVQUFVLENBQUNYLE9BQWpDLEVBQTBDO0FBQ3hDUyxxQkFBVyxDQUFDOUIsSUFBSSxJQUFJLENBQUMsR0FBR0EsSUFBSixFQUFVMEMsTUFBVixDQUFULENBQVg7QUFFQTNFLGtCQUFRLENBQUNpQyxJQUFJLElBQUk7QUFDZixrQkFBTTRDLFlBQVksR0FBRzVDLElBQUksQ0FBQzZDLElBQUwsQ0FBVTFHLElBQUksSUFBSUEsSUFBSSxDQUFDVSxZQUFMLEtBQXNCNkYsTUFBTSxDQUFDL0IsTUFBL0MsQ0FBckI7QUFDQWlDLHdCQUFZLENBQUNsRixXQUFiLEdBQTJCZ0YsTUFBTSxDQUFDOUIsR0FBbEM7QUFDQWdDLHdCQUFZLENBQUN0RixJQUFiLEdBQW9Cb0YsTUFBTSxDQUFDcEYsSUFBM0I7QUFFQXdGLHNCQUFVLEdBQUdGLFlBQVksQ0FBQ3hGLElBQTFCO0FBRUEsbUJBQU8sQ0FBQyxHQUFHNEMsSUFBSixDQUFQO0FBQ0QsV0FSTyxDQUFSO0FBU0QsU0FaRCxDQWFBO0FBYkEsYUFjSztBQUNILGtCQUFNK0Msb0JBQW9CLEdBQ3hCakYsS0FBSyxDQUFDcEIsTUFBTixDQUFhUCxJQUFJLElBQUlBLElBQUksQ0FBQ1UsWUFBTCxLQUFzQjZGLE1BQU0sQ0FBQy9CLE1BQWxELEVBQTBEbEUsTUFBMUQsR0FBbUUsQ0FEckU7O0FBR0EsZ0JBQUlzRyxvQkFBSixFQUEwQjtBQUN4QmhGLHNCQUFRLENBQUNpQyxJQUFJLElBQUk7QUFDZixzQkFBTTRDLFlBQVksR0FBRzVDLElBQUksQ0FBQzZDLElBQUwsQ0FBVTFHLElBQUksSUFBSUEsSUFBSSxDQUFDVSxZQUFMLEtBQXNCNkYsTUFBTSxDQUFDL0IsTUFBL0MsQ0FBckI7QUFDQWlDLDRCQUFZLENBQUNsRixXQUFiLEdBQTJCZ0YsTUFBTSxDQUFDOUIsR0FBbEM7QUFDQWdDLDRCQUFZLENBQUN0RixJQUFiLEdBQW9Cb0YsTUFBTSxDQUFDcEYsSUFBM0I7QUFFQXdGLDBCQUFVLEdBQUdGLFlBQVksQ0FBQ3hGLElBQTFCO0FBRUEsdUJBQU8sQ0FDTHdGLFlBREssRUFFTCxHQUFHNUMsSUFBSSxDQUFDdEQsTUFBTCxDQUFZUCxJQUFJLElBQUlBLElBQUksQ0FBQ1UsWUFBTCxLQUFzQjZGLE1BQU0sQ0FBQy9CLE1BQWpELENBRkUsQ0FBUDtBQUlELGVBWE8sQ0FBUjtBQVlELGFBYkQsQ0FlQTtBQWZBLGlCQWdCSztBQUNILHNCQUFNO0FBQUV2RCxzQkFBRjtBQUFRRDtBQUFSLG9CQUEwQixNQUFNcUYsNERBQVcsQ0FBQ0UsTUFBTSxDQUFDL0IsTUFBUixDQUFqRDtBQUNBbUMsMEJBQVUsR0FBRzFGLElBQWI7QUFFQSxzQkFBTXlDLE9BQU8sR0FBRztBQUNkaEQsOEJBQVksRUFBRTZGLE1BQU0sQ0FBQy9CLE1BRFA7QUFFZHZELHNCQUZjO0FBR2RELCtCQUhjO0FBSWRPLDZCQUFXLEVBQUVnRixNQUFNLENBQUM5QixHQUpOO0FBS2R0RCxzQkFBSSxFQUFFb0YsTUFBTSxDQUFDcEY7QUFMQyxpQkFBaEI7QUFPQVMsd0JBQVEsQ0FBQ2lDLElBQUksSUFBSSxDQUFDSCxPQUFELEVBQVUsR0FBR0csSUFBYixDQUFULENBQVI7QUFDRDtBQUNGOztBQUVEZ0Qsb0VBQVcsQ0FBQ0YsVUFBRCxDQUFYO0FBQ0QsT0F0REQ7QUF1REQ7QUFDRixHQXhFUSxFQXdFTixFQXhFTSxDQUFUO0FBMEVBYixrREFBUyxDQUFDLE1BQU07QUFDZEosWUFBUSxDQUFDcEYsTUFBVCxHQUFrQixDQUFsQixJQUF1QjJFLGlCQUFpQixDQUFDYixNQUFELENBQXhDO0FBQ0QsR0FGUSxFQUVOLENBQUNzQixRQUFELENBRk0sQ0FBVDs7QUFJQSxRQUFNeEIsU0FBUyxHQUFHNEMsU0FBUyxJQUFJO0FBQzdCLFFBQUl2QixNQUFNLENBQUNMLE9BQVgsRUFBb0I7QUFDbEJLLFlBQU0sQ0FBQ0wsT0FBUCxDQUFlYyxJQUFmLENBQW9CLFdBQXBCLEVBQWlDO0FBQy9CdkYsY0FBTSxFQUFFRCxJQUFJLENBQUNpRCxHQURrQjtBQUUvQi9DLG9CQUFZLEVBQUVtRixVQUFVLENBQUNYLE9BRk07QUFHL0I0QjtBQUgrQixPQUFqQztBQU1BdkIsWUFBTSxDQUFDTCxPQUFQLENBQWVlLEVBQWYsQ0FBa0IsWUFBbEIsRUFBZ0MsTUFBTTtBQUNwQ04sbUJBQVcsQ0FBQzlCLElBQUksSUFBSUEsSUFBSSxDQUFDdEQsTUFBTCxDQUFZSyxPQUFPLElBQUlBLE9BQU8sQ0FBQzZDLEdBQVIsS0FBZ0JxRCxTQUF2QyxDQUFULENBQVg7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQVpEOztBQWNBLFFBQU01RyxVQUFVLEdBQUcsTUFBTVEsWUFBTixJQUFzQjtBQUN2QyxRQUFJO0FBQ0YsWUFBTStCLG1EQUFBLENBQWMsR0FBRUksdURBQVEsY0FBYW5DLFlBQWEsRUFBbEQsRUFBcUQ7QUFDekRvQyxlQUFPLEVBQUU7QUFBRUMsdUJBQWEsRUFBRUoscURBQUEsQ0FBVyxPQUFYO0FBQWpCO0FBRGdELE9BQXJELENBQU47QUFJQWYsY0FBUSxDQUFDaUMsSUFBSSxJQUFJQSxJQUFJLENBQUN0RCxNQUFMLENBQVlQLElBQUksSUFBSUEsSUFBSSxDQUFDVSxZQUFMLEtBQXNCQSxZQUExQyxDQUFULENBQVI7QUFDQVAsWUFBTSxDQUFDVSxJQUFQLENBQVksV0FBWixFQUF5QkMsU0FBekIsRUFBb0M7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBcEM7QUFDRCxLQVBELENBT0UsT0FBT29DLEtBQVAsRUFBYztBQUNkQyxXQUFLLENBQUMscUJBQUQsQ0FBTDtBQUNEO0FBQ0YsR0FYRDs7QUFhQSxTQUNFLHFFQUNFLE1BQUMsc0RBQUQ7QUFBUyxVQUFNLE1BQWY7QUFBZ0IsU0FBSyxNQUFyQjtBQUFzQixRQUFJLEVBQUMsT0FBM0I7QUFBbUMsU0FBSyxFQUFFO0FBQUUyRCxlQUFTLEVBQUU7QUFBYixLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsV0FBTyxFQUFDLFVBRlY7QUFHRSxXQUFPLEVBQUUsTUFBTTVHLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZLEdBQVosQ0FIakI7QUFJRSxTQUFLLEVBQUU7QUFBRVMsWUFBTSxFQUFFO0FBQVYsS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRSxNQUFDLHNEQUFEO0FBQVMsVUFBTSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVNFO0FBQUssU0FBSyxFQUFFO0FBQUUwRixrQkFBWSxFQUFFO0FBQWhCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFBZ0IsU0FBSyxFQUFFckYsS0FBdkI7QUFBOEIsWUFBUSxFQUFFQyxRQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FURixFQWFHRCxLQUFLLENBQUNyQixNQUFOLEdBQWUsQ0FBZixHQUNDLHFFQUNFLE1BQUMsbURBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBYSxTQUFLLEVBQUUsQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBZSxRQUFJLEVBQUMsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBUyxVQUFNLE1BQWY7QUFBZ0IsU0FBSyxFQUFFO0FBQUUyRyxjQUFRLEVBQUUsTUFBWjtBQUFvQkMsZUFBUyxFQUFFO0FBQS9CLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3ZGLEtBQUssQ0FBQ3dGLEdBQU4sQ0FBVSxDQUFDbkgsSUFBRCxFQUFPb0gsQ0FBUCxLQUNULE1BQUMsMkRBQUQ7QUFDRSxPQUFHLEVBQUVBLENBRFA7QUFFRSxRQUFJLEVBQUVwSCxJQUZSO0FBR0Usa0JBQWMsRUFBRUMsY0FIbEI7QUFJRSxjQUFVLEVBQUVDLFVBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREgsQ0FERixDQURGLENBREYsRUFnQkUsTUFBQywwREFBRDtBQUFhLFNBQUssRUFBRSxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLE1BQU0sQ0FBQ1EsS0FBUCxDQUFhQyxPQUFiLElBQ0MscUVBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTHFHLGNBQVEsRUFBRSxNQURMO0FBRUxJLGVBQVMsRUFBRSxRQUZOO0FBR0xILGVBQVMsRUFBRSxPQUhOO0FBSUxJLFlBQU0sRUFBRSxPQUpIO0FBS0xDLHFCQUFlLEVBQUU7QUFMWixLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRTtBQUFLLFNBQUssRUFBRTtBQUFFbkcsY0FBUSxFQUFFLFFBQVo7QUFBc0JvRyxTQUFHLEVBQUU7QUFBM0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFRLGNBQVUsRUFBRXhELFVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVRGLEVBYUcwQixRQUFRLENBQUNwRixNQUFULEdBQWtCLENBQWxCLElBQ0NvRixRQUFRLENBQUN5QixHQUFULENBQWEsQ0FBQ3ZHLE9BQUQsRUFBVXdHLENBQVYsS0FDWCxNQUFDLGtFQUFEO0FBQ0UsVUFBTSxFQUFFaEQsTUFEVjtBQUVFLE9BQUcsRUFBRWdELENBRlA7QUFHRSxvQkFBZ0IsRUFBRXBELFVBQVUsQ0FBQ2hELGFBSC9CO0FBSUUsV0FBTyxFQUFFSixPQUpYO0FBS0UsUUFBSSxFQUFFSixJQUxSO0FBTUUsYUFBUyxFQUFFMEQsU0FOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FkSixDQURGLEVBMkJFLE1BQUMsNEVBQUQ7QUFBbUIsV0FBTyxFQUFFUyxPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JGLENBRkosQ0FoQkYsQ0FERixDQURELEdBc0RDLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5FSixDQURGLENBREY7QUEwRUQ7O0FBRURVLFFBQVEsQ0FBQ29DLGVBQVQsR0FBMkIsTUFBTUMsR0FBTixJQUFhO0FBQ3RDLE1BQUk7QUFDRixVQUFNO0FBQUVoRjtBQUFGLFFBQVlpRixxREFBWSxDQUFDRCxHQUFELENBQTlCO0FBRUEsVUFBTTlFLEdBQUcsR0FBRyxNQUFNSCxnREFBQSxDQUFXLEdBQUVJLHVEQUFRLFlBQXJCLEVBQWtDO0FBQ2xEQyxhQUFPLEVBQUU7QUFBRUMscUJBQWEsRUFBRUw7QUFBakI7QUFEeUMsS0FBbEMsQ0FBbEI7QUFJQSxXQUFPO0FBQUU0QyxlQUFTLEVBQUUxQyxHQUFHLENBQUNNO0FBQWpCLEtBQVA7QUFDRCxHQVJELENBUUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2QsV0FBTztBQUFFeUUsa0JBQVksRUFBRTtBQUFoQixLQUFQO0FBQ0Q7QUFDRixDQVpEOztBQWNBLCtEQUFldkMsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFDQTtBQUNBOztBQUVBLE1BQU1nQixXQUFXLEdBQUcsTUFBTXdCLFlBQU4sSUFBc0I7QUFDeEMsTUFBSTtBQUNGLFVBQU1qRixHQUFHLEdBQUcsTUFBTUgsZ0RBQUEsQ0FBVyxHQUFFSSxpREFBUSxtQkFBa0JnRixZQUFhLEVBQXBELEVBQXVEO0FBQ3ZFL0UsYUFBTyxFQUFFO0FBQUVDLHFCQUFhLEVBQUVKLG9EQUFBLENBQVcsT0FBWDtBQUFqQjtBQUQ4RCxLQUF2RCxDQUFsQjtBQUlBLFdBQU87QUFBRTFCLFVBQUksRUFBRTJCLEdBQUcsQ0FBQ00sSUFBSixDQUFTakMsSUFBakI7QUFBdUJELG1CQUFhLEVBQUU0QixHQUFHLENBQUNNLElBQUosQ0FBU2xDO0FBQS9DLEtBQVA7QUFDRCxHQU5ELENBTUUsT0FBT21DLEtBQVAsRUFBYztBQUNkMkUsV0FBTyxDQUFDM0UsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFDRixDQVZEOztBQVlBLCtEQUFla0QsV0FBZixFOzs7Ozs7Ozs7Ozs7QUNoQkEsTUFBTVEsV0FBVyxHQUFHRixVQUFVLElBQUk7QUFDaEMsUUFBTW9CLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVUsWUFBVixDQUFkO0FBRUFELE9BQUssSUFBSUEsS0FBSyxDQUFDRSxJQUFOLEVBQVQ7O0FBRUEsTUFBSXRCLFVBQUosRUFBZ0I7QUFDZHVCLFlBQVEsQ0FBQ0MsS0FBVCxHQUFrQixvQkFBbUJ4QixVQUFXLEVBQWhEOztBQUVBLFFBQUl1QixRQUFRLENBQUNFLGVBQVQsS0FBNkIsU0FBakMsRUFBNEM7QUFDMUNDLGdCQUFVLENBQUMsTUFBTTtBQUNmSCxnQkFBUSxDQUFDQyxLQUFULEdBQWlCLFVBQWpCO0FBQ0QsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdEO0FBQ0Y7QUFDRixDQWREOztBQWdCQSwrREFBZXRCLFdBQWYsRTs7Ozs7Ozs7Ozs7QUNoQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvbWVzc2FnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERpdmlkZXIsIENvbW1lbnQsIEljb24sIExpc3QgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XHJcblxyXG5mdW5jdGlvbiBDaGF0KHsgY2hhdCwgY29ubmVjdGVkVXNlcnMsIGRlbGV0ZUNoYXQgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBpc09ubGluZSA9XHJcbiAgICBjb25uZWN0ZWRVc2Vycy5sZW5ndGggPiAwICYmXHJcbiAgICBjb25uZWN0ZWRVc2Vycy5maWx0ZXIodXNlciA9PiB1c2VyLnVzZXJJZCA9PT0gY2hhdC5tZXNzYWdlc1dpdGgpLmxlbmd0aCA+IDA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdCBzZWxlY3Rpb24+XHJcbiAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgYWN0aXZlPXtyb3V0ZXIucXVlcnkubWVzc2FnZSA9PT0gY2hhdC5tZXNzYWdlc1dpdGh9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL21lc3NhZ2VzP21lc3NhZ2U9JHtjaGF0Lm1lc3NhZ2VzV2l0aH1gLCB1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgICBzaGFsbG93OiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENvbW1lbnQ+XHJcbiAgICAgICAgICAgIDxDb21tZW50LkF2YXRhciBzcmM9e2NoYXQucHJvZmlsZVBpY1VybH0gLz5cclxuICAgICAgICAgICAgPENvbW1lbnQuQ29udGVudD5cclxuICAgICAgICAgICAgICA8Q29tbWVudC5BdXRob3IgYXM9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICB7Y2hhdC5uYW1lfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIHtpc09ubGluZSAmJiA8SWNvbiBuYW1lPVwiY2lyY2xlXCIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJncmVlblwiIC8+fVxyXG4gICAgICAgICAgICAgIDwvQ29tbWVudC5BdXRob3I+XHJcblxyXG4gICAgICAgICAgICAgIDxDb21tZW50Lk1ldGFkYXRhPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57Y2FsY3VsYXRlVGltZShjaGF0LmRhdGUpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogXCIxMHB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRyYXNoIGFsdGVybmF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUNoYXQoY2hhdC5tZXNzYWdlc1dpdGgpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Db21tZW50Lk1ldGFkYXRhPlxyXG5cclxuICAgICAgICAgICAgICA8Q29tbWVudC5UZXh0PlxyXG4gICAgICAgICAgICAgICAge2NoYXQubGFzdE1lc3NhZ2UubGVuZ3RoID4gMjBcclxuICAgICAgICAgICAgICAgICAgPyBgJHtjaGF0Lmxhc3RNZXNzYWdlLnN1YnN0cmluZygwLCAyMCl9IC4uLmBcclxuICAgICAgICAgICAgICAgICAgOiBjaGF0Lmxhc3RNZXNzYWdlfVxyXG4gICAgICAgICAgICAgIDwvQ29tbWVudC5UZXh0PlxyXG4gICAgICAgICAgICA8L0NvbW1lbnQuQ29udGVudD5cclxuICAgICAgICAgIDwvQ29tbWVudD5cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpc3QsIEltYWdlLCBTZWFyY2ggfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9iYXNlVXJsXCI7XHJcbmxldCBjYW5jZWw7XHJcblxyXG5mdW5jdGlvbiBDaGF0TGlzdFNlYXJjaCh7IGNoYXRzLCBzZXRDaGF0cyB9KSB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgZSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldFRleHQodmFsdWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjYW5jZWwgJiYgY2FuY2VsKCk7XHJcbiAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XHJcbiAgICAgIGNvbnN0IHRva2VuID0gY29va2llLmdldChcInRva2VuXCIpO1xyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9zZWFyY2gvJHt2YWx1ZX1gLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxyXG4gICAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oY2FuY2VsZXIgPT4ge1xyXG4gICAgICAgICAgY2FuY2VsID0gY2FuY2VsZXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICBzZXRSZXN1bHRzKHJlcy5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KFwiRXJyb3IgU2VhcmNoaW5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZENoYXQgPSByZXN1bHQgPT4ge1xyXG4gICAgY29uc3QgYWxyZWFkeUluQ2hhdCA9XHJcbiAgICAgIGNoYXRzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgY2hhdHMuZmlsdGVyKGNoYXQgPT4gY2hhdC5tZXNzc2FnZXNXaXRoID09PSByZXN1bHQuX2lkKS5sZW5ndGggPiAwO1xyXG5cclxuICAgIGlmIChhbHJlYWR5SW5DaGF0KSB7XHJcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChgL21lc3NhZ2VzP21lc3NhZ2U9JHtyZXN1bHQuX2lkfWApO1xyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCBuZXdDaGF0ID0ge1xyXG4gICAgICAgIG1lc3NhZ2VzV2l0aDogcmVzdWx0Ll9pZCxcclxuICAgICAgICBuYW1lOiByZXN1bHQubmFtZSxcclxuICAgICAgICBwcm9maWxlUGljVXJsOiByZXN1bHQucHJvZmlsZVBpY1VybCxcclxuICAgICAgICBsYXN0TWVzc2FnZTogXCJcIixcclxuICAgICAgICBkYXRlOiBEYXRlLm5vdygpXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzZXRDaGF0cyhwcmV2ID0+IFtuZXdDaGF0LCAuLi5wcmV2XSk7XHJcblxyXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2goYC9tZXNzYWdlcz9tZXNzYWdlPSR7cmVzdWx0Ll9pZH1gKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaFxyXG4gICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICByZXN1bHRzLmxlbmd0aCA+IDAgJiYgc2V0UmVzdWx0cyhbXSk7XHJcbiAgICAgICAgbG9hZGluZyAmJiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRUZXh0KFwiXCIpO1xyXG4gICAgICB9fVxyXG4gICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgcmVzdWx0UmVuZGVyZXI9e1Jlc3VsdFJlbmRlcmVyfVxyXG4gICAgICByZXN1bHRzPXtyZXN1bHRzfVxyXG4gICAgICBvblNlYXJjaENoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICBtaW5DaGFyYWN0ZXJzPXsxfVxyXG4gICAgICBvblJlc3VsdFNlbGVjdD17KGUsIGRhdGEpID0+IGFkZENoYXQoZGF0YS5yZXN1bHQpfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBSZXN1bHRSZW5kZXJlciA9ICh7IF9pZCwgcHJvZmlsZVBpY1VybCwgbmFtZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0IGtleT17X2lkfT5cclxuICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9maWxlUGljVXJsfSBhbHQ9XCJQcm9maWxlUGljXCIgYXZhdGFyIC8+XHJcbiAgICAgICAgPExpc3QuQ29udGVudCBoZWFkZXI9e25hbWV9IGFzPVwiYVwiIC8+XHJcbiAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgPC9MaXN0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0TGlzdFNlYXJjaDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWdtZW50LCBHcmlkLCBJbWFnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQmFubmVyKHsgYmFubmVyRGF0YSB9KSB7XHJcbiAgY29uc3QgeyBuYW1lLCBwcm9maWxlUGljVXJsIH0gPSBiYW5uZXJEYXRhO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlZ21lbnQgY29sb3I9XCJ0ZWFsXCIgYXR0YWNoZWQ9XCJ0b3BcIj5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9XCJsZWZ0XCIgd2lkdGg9ezE0fT5cclxuICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgPEltYWdlIGF2YXRhciBzcmM9e3Byb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgPC9oND5cclxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L1NlZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSWNvbiwgUG9wdXAgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2UoeyBtZXNzYWdlLCB1c2VyLCBkZWxldGVNc2csIGJhbm5lclByb2ZpbGVQaWMsIGRpdlJlZiB9KSB7XHJcbiAgY29uc3QgW2RlbGV0ZUljb24sIHNob3dEZWxldGVJY29uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaWZZb3VTZW5kZXIgPSBtZXNzYWdlLnNlbmRlciA9PT0gdXNlci5faWQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1YmJsZVdyYXBwZXJcIiByZWY9e2RpdlJlZn0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2lmWW91U2VuZGVyID8gXCJpbmxpbmVDb250YWluZXIgb3duXCIgOiBcImlubGluZUNvbnRhaW5lclwifVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGlmWW91U2VuZGVyICYmIHNob3dEZWxldGVJY29uKCFkZWxldGVJY29uKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZUljb25cIlxyXG4gICAgICAgICAgc3JjPXtpZllvdVNlbmRlciA/IHVzZXIucHJvZmlsZVBpY1VybCA6IGJhbm5lclByb2ZpbGVQaWN9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lmWW91U2VuZGVyID8gXCJvd25CdWJibGUgb3duXCIgOiBcIm90aGVyQnViYmxlIG90aGVyXCJ9PlxyXG4gICAgICAgICAge21lc3NhZ2UubXNnfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7ZGVsZXRlSWNvbiAmJiAoXHJcbiAgICAgICAgICA8UG9wdXBcclxuICAgICAgICAgICAgdHJpZ2dlcj17XHJcbiAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVNc2cobWVzc2FnZS5faWQpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGVudD1cIlRoaXMgd2lsbCBvbmx5IGRlbGV0ZSB0aGUgbWVzc2FnZSBmcm9tIHlvdXIgaW5ib3ghXCJcclxuICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AgcmlnaHRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17aWZZb3VTZW5kZXIgPyBcIm93blwiIDogXCJvdGhlclwifT57Y2FsY3VsYXRlVGltZShtZXNzYWdlLmRhdGUpfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlSW5wdXRGaWVsZCh7IHNlbmRNc2cgfSkge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwic3RpY2t5XCIsIGJvdHRvbTogXCIwXCIgfX0+XHJcbiAgICAgIDxTZWdtZW50IHNlY29uZGFyeSBjb2xvcj1cInRlYWxcIiBhdHRhY2hlZD1cImJvdHRvbVwiPlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICByZXBseVxyXG4gICAgICAgICAgb25TdWJtaXQ9e2UgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNlbmRNc2codGV4dCk7XHJcbiAgICAgICAgICAgIHNldFRleHQoXCJcIik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VuZCBOZXcgTWVzc2FnZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICAgIGljb246IFwidGVsZWdyYW0gcGxhbmVcIixcclxuICAgICAgICAgICAgICBkaXNhYmxlZDogdGV4dCA9PT0gXCJcIixcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBsb2FkaW5nXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUlucHV0RmllbGQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNlZ21lbnQsIEhlYWRlciwgRGl2aWRlciwgQ29tbWVudCwgR3JpZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGF0cy9DaGF0XCI7XHJcbmltcG9ydCBDaGF0TGlzdFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGF0cy9DaGF0TGlzdFNlYXJjaFwiO1xyXG5pbXBvcnQgeyBOb01lc3NhZ2VzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L05vRGF0YVwiO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL01lc3NhZ2VzL0Jhbm5lclwiO1xyXG5pbXBvcnQgTWVzc2FnZUlucHV0RmllbGQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZUlucHV0RmllbGRcIjtcclxuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZVwiO1xyXG5pbXBvcnQgZ2V0VXNlckluZm8gZnJvbSBcIi4uL3V0aWxzL2dldFVzZXJJbmZvXCI7XHJcbmltcG9ydCBuZXdNc2dTb3VuZCBmcm9tIFwiLi4vdXRpbHMvbmV3TXNnU291bmRcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBzY3JvbGxEaXZUb0JvdHRvbSA9IGRpdlJlZiA9PlxyXG4gIGRpdlJlZi5jdXJyZW50ICE9PSBudWxsICYmIGRpdlJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3VyOiBcInNtb290aFwiIH0pO1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZXMoeyBjaGF0c0RhdGEsIHVzZXIgfSkge1xyXG4gIGNvbnN0IFtjaGF0cywgc2V0Q2hhdHNdID0gdXNlU3RhdGUoY2hhdHNEYXRhKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW2Nvbm5lY3RlZFVzZXJzLCBzZXRDb25uZWN0ZWRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtiYW5uZXJEYXRhLCBzZXRCYW5uZXJEYXRhXSA9IHVzZVN0YXRlKHsgbmFtZTogXCJcIiwgcHJvZmlsZVBpY1VybDogXCJcIiB9KTtcclxuXHJcbiAgY29uc3QgZGl2UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIC8vIFRoaXMgcmVmIGlzIGZvciBwZXJzaXN0aW5nIHRoZSBzdGF0ZSBvZiBxdWVyeSBzdHJpbmcgaW4gdXJsIHRocm91Z2hvdXQgcmUtcmVuZGVycy4gVGhpcyByZWYgaXMgdGhlIHZhbHVlIG9mIHF1ZXJ5IHN0cmluZyBpbnNpZGUgdXJsXHJcbiAgY29uc3Qgb3BlbkNoYXRJZCA9IHVzZVJlZihcIlwiKTtcclxuXHJcbiAgLy9DT05ORUNUSU9OIHVzZUVmZmVjdFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXNvY2tldC5jdXJyZW50KSB7XHJcbiAgICAgIHNvY2tldC5jdXJyZW50ID0gaW8oYmFzZVVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvY2tldC5jdXJyZW50KSB7XHJcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJqb2luXCIsIHsgdXNlcklkOiB1c2VyLl9pZCB9KTtcclxuXHJcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwiY29ubmVjdGVkVXNlcnNcIiwgKHsgdXNlcnMgfSkgPT4ge1xyXG4gICAgICAgIHVzZXJzLmxlbmd0aCA+IDAgJiYgc2V0Q29ubmVjdGVkVXNlcnModXNlcnMpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChjaGF0cy5sZW5ndGggPiAwICYmICFyb3V0ZXIucXVlcnkubWVzc2FnZSkge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvbWVzc2FnZXM/bWVzc2FnZT0ke2NoYXRzWzBdLm1lc3NhZ2VzV2l0aH1gLCB1bmRlZmluZWQsIHtcclxuICAgICAgICAgIHNoYWxsb3c6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xyXG4gICAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJkaXNjb25uZWN0XCIpO1xyXG4gICAgICAgIHNvY2tldC5jdXJyZW50Lm9mZigpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gTE9BRCBNRVNTQUdFUyB1c2VFZmZlY3RcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbG9hZE1lc3NhZ2VzID0gKCkgPT4ge1xyXG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwibG9hZE1lc3NhZ2VzXCIsIHtcclxuICAgICAgICB1c2VySWQ6IHVzZXIuX2lkLFxyXG4gICAgICAgIG1lc3NhZ2VzV2l0aDogcm91dGVyLnF1ZXJ5Lm1lc3NhZ2VcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzb2NrZXQuY3VycmVudC5vbihcIm1lc3NhZ2VzTG9hZGVkXCIsIGFzeW5jICh7IGNoYXQgfSkgPT4ge1xyXG4gICAgICAgIHNldE1lc3NhZ2VzKGNoYXQubWVzc2FnZXMpO1xyXG4gICAgICAgIHNldEJhbm5lckRhdGEoe1xyXG4gICAgICAgICAgbmFtZTogY2hhdC5tZXNzYWdlc1dpdGgubmFtZSxcclxuICAgICAgICAgIHByb2ZpbGVQaWNVcmw6IGNoYXQubWVzc2FnZXNXaXRoLnByb2ZpbGVQaWNVcmxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb3BlbkNoYXRJZC5jdXJyZW50ID0gY2hhdC5tZXNzYWdlc1dpdGguX2lkO1xyXG4gICAgICAgIGRpdlJlZi5jdXJyZW50ICYmIHNjcm9sbERpdlRvQm90dG9tKGRpdlJlZik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJub0NoYXRGb3VuZFwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCBwcm9maWxlUGljVXJsIH0gPSBhd2FpdCBnZXRVc2VySW5mbyhyb3V0ZXIucXVlcnkubWVzc2FnZSk7XHJcblxyXG4gICAgICAgIHNldEJhbm5lckRhdGEoeyBuYW1lLCBwcm9maWxlUGljVXJsIH0pO1xyXG4gICAgICAgIHNldE1lc3NhZ2VzKFtdKTtcclxuXHJcbiAgICAgICAgb3BlbkNoYXRJZC5jdXJyZW50ID0gcm91dGVyLnF1ZXJ5Lm1lc3NhZ2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoc29ja2V0LmN1cnJlbnQgJiYgcm91dGVyLnF1ZXJ5Lm1lc3NhZ2UpIGxvYWRNZXNzYWdlcygpO1xyXG4gIH0sIFtyb3V0ZXIucXVlcnkubWVzc2FnZV0pO1xyXG5cclxuICBjb25zdCBzZW5kTXNnID0gbXNnID0+IHtcclxuICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xyXG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwic2VuZE5ld01zZ1wiLCB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VyLl9pZCxcclxuICAgICAgICBtc2dTZW5kVG9Vc2VySWQ6IG9wZW5DaGF0SWQuY3VycmVudCxcclxuICAgICAgICBtc2dcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gQ29uZmlybWluZyBtc2cgaXMgc2VudCBhbmQgcmVjZXZpbmcgdGhlIG1lc3NhZ2VzIHVzZUVmZmVjdFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJtc2dTZW50XCIsICh7IG5ld01zZyB9KSA9PiB7XHJcbiAgICAgICAgaWYgKG5ld01zZy5yZWNlaXZlciA9PT0gb3BlbkNoYXRJZC5jdXJyZW50KSB7XHJcbiAgICAgICAgICBzZXRNZXNzYWdlcyhwcmV2ID0+IFsuLi5wcmV2LCBuZXdNc2ddKTtcclxuXHJcbiAgICAgICAgICBzZXRDaGF0cyhwcmV2ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDaGF0ID0gcHJldi5maW5kKGNoYXQgPT4gY2hhdC5tZXNzYWdlc1dpdGggPT09IG5ld01zZy5yZWNlaXZlcik7XHJcbiAgICAgICAgICAgIHByZXZpb3VzQ2hhdC5sYXN0TWVzc2FnZSA9IG5ld01zZy5tc2c7XHJcbiAgICAgICAgICAgIHByZXZpb3VzQ2hhdC5kYXRlID0gbmV3TXNnLmRhdGU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnByZXZdO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibmV3TXNnUmVjZWl2ZWRcIiwgYXN5bmMgKHsgbmV3TXNnIH0pID0+IHtcclxuICAgICAgICBsZXQgc2VuZGVyTmFtZTtcclxuXHJcbiAgICAgICAgLy8gV0hFTiBDSEFUIFdJVEggU0VOREVSIElTIENVUlJFTlRMWSBPUEVORUQgSU5TSURFIFlPVVIgQlJPV1NFUlxyXG4gICAgICAgIGlmIChuZXdNc2cuc2VuZGVyID09PSBvcGVuQ2hhdElkLmN1cnJlbnQpIHtcclxuICAgICAgICAgIHNldE1lc3NhZ2VzKHByZXYgPT4gWy4uLnByZXYsIG5ld01zZ10pO1xyXG5cclxuICAgICAgICAgIHNldENoYXRzKHByZXYgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0NoYXQgPSBwcmV2LmZpbmQoY2hhdCA9PiBjaGF0Lm1lc3NhZ2VzV2l0aCA9PT0gbmV3TXNnLnNlbmRlcik7XHJcbiAgICAgICAgICAgIHByZXZpb3VzQ2hhdC5sYXN0TWVzc2FnZSA9IG5ld01zZy5tc2c7XHJcbiAgICAgICAgICAgIHByZXZpb3VzQ2hhdC5kYXRlID0gbmV3TXNnLmRhdGU7XHJcblxyXG4gICAgICAgICAgICBzZW5kZXJOYW1lID0gcHJldmlvdXNDaGF0Lm5hbWU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnByZXZdO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBpZlByZXZpb3VzbHlNZXNzYWdlZCA9XHJcbiAgICAgICAgICAgIGNoYXRzLmZpbHRlcihjaGF0ID0+IGNoYXQubWVzc2FnZXNXaXRoID09PSBuZXdNc2cuc2VuZGVyKS5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAgIGlmIChpZlByZXZpb3VzbHlNZXNzYWdlZCkge1xyXG4gICAgICAgICAgICBzZXRDaGF0cyhwcmV2ID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0NoYXQgPSBwcmV2LmZpbmQoY2hhdCA9PiBjaGF0Lm1lc3NhZ2VzV2l0aCA9PT0gbmV3TXNnLnNlbmRlcik7XHJcbiAgICAgICAgICAgICAgcHJldmlvdXNDaGF0Lmxhc3RNZXNzYWdlID0gbmV3TXNnLm1zZztcclxuICAgICAgICAgICAgICBwcmV2aW91c0NoYXQuZGF0ZSA9IG5ld01zZy5kYXRlO1xyXG5cclxuICAgICAgICAgICAgICBzZW5kZXJOYW1lID0gcHJldmlvdXNDaGF0Lm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0NoYXQsXHJcbiAgICAgICAgICAgICAgICAuLi5wcmV2LmZpbHRlcihjaGF0ID0+IGNoYXQubWVzc2FnZXNXaXRoICE9PSBuZXdNc2cuc2VuZGVyKVxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vSUYgTk8gUFJFVklPVVMgQ0hBVCBXSVRIIFRIRSBTRU5ERVJcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIHByb2ZpbGVQaWNVcmwgfSA9IGF3YWl0IGdldFVzZXJJbmZvKG5ld01zZy5zZW5kZXIpO1xyXG4gICAgICAgICAgICBzZW5kZXJOYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0NoYXQgPSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZXNXaXRoOiBuZXdNc2cuc2VuZGVyLFxyXG4gICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgcHJvZmlsZVBpY1VybCxcclxuICAgICAgICAgICAgICBsYXN0TWVzc2FnZTogbmV3TXNnLm1zZyxcclxuICAgICAgICAgICAgICBkYXRlOiBuZXdNc2cuZGF0ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzZXRDaGF0cyhwcmV2ID0+IFtuZXdDaGF0LCAuLi5wcmV2XSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdNc2dTb3VuZChzZW5kZXJOYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbWVzc2FnZXMubGVuZ3RoID4gMCAmJiBzY3JvbGxEaXZUb0JvdHRvbShkaXZSZWYpO1xyXG4gIH0sIFttZXNzYWdlc10pO1xyXG5cclxuICBjb25zdCBkZWxldGVNc2cgPSBtZXNzYWdlSWQgPT4ge1xyXG4gICAgaWYgKHNvY2tldC5jdXJyZW50KSB7XHJcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJkZWxldGVNc2dcIiwge1xyXG4gICAgICAgIHVzZXJJZDogdXNlci5faWQsXHJcbiAgICAgICAgbWVzc2FnZXNXaXRoOiBvcGVuQ2hhdElkLmN1cnJlbnQsXHJcbiAgICAgICAgbWVzc2FnZUlkXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJtc2dEZWxldGVkXCIsICgpID0+IHtcclxuICAgICAgICBzZXRNZXNzYWdlcyhwcmV2ID0+IHByZXYuZmlsdGVyKG1lc3NhZ2UgPT4gbWVzc2FnZS5faWQgIT09IG1lc3NhZ2VJZCkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVDaGF0ID0gYXN5bmMgbWVzc2FnZXNXaXRoID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtiYXNlVXJsfS9hcGkvY2hhdHMvJHttZXNzYWdlc1dpdGh9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRDaGF0cyhwcmV2ID0+IHByZXYuZmlsdGVyKGNoYXQgPT4gY2hhdC5tZXNzYWdlc1dpdGggIT09IG1lc3NhZ2VzV2l0aCkpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9tZXNzYWdlc1wiLCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KFwiRXJyb3IgZGVsZXRpbmcgY2hhdFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNlZ21lbnQgcGFkZGVkIGJhc2ljIHNpemU9XCJsYXJnZVwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICBpY29uPVwiaG9tZVwiXHJcbiAgICAgICAgICBjb250ZW50PVwiR28gQmFjayFcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxDaGF0TGlzdFNlYXJjaCBjaGF0cz17Y2hhdHN9IHNldENoYXRzPXtzZXRDaGF0c30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2NoYXRzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8R3JpZCBzdGFja2FibGU+XHJcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50Lkdyb3VwIHNpemU9XCJiaWdcIj5cclxuICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgcmFpc2VkIHN0eWxlPXt7IG92ZXJmbG93OiBcImF1dG9cIiwgbWF4SGVpZ2h0OiBcIjMycmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYXRzLm1hcCgoY2hhdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENoYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGF0PXtjaGF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWRVc2Vycz17Y29ubmVjdGVkVXNlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNoYXQ9e2RlbGV0ZUNoYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbW1lbnQuR3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMn0+XHJcbiAgICAgICAgICAgICAgICB7cm91dGVyLnF1ZXJ5Lm1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMzVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZXNtb2tlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJzdGlja3lcIiwgdG9wOiBcIjBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lciBiYW5uZXJEYXRhPXtiYW5uZXJEYXRhfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdlJlZj17ZGl2UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVyUHJvZmlsZVBpYz17YmFubmVyRGF0YS5wcm9maWxlUGljVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVNc2c9e2RlbGV0ZU1zZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VJbnB1dEZpZWxkIHNlbmRNc2c9e3NlbmRNc2d9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPE5vTWVzc2FnZXMgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1NlZ21lbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5NZXNzYWdlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL2NoYXRzYCwge1xyXG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IGNoYXRzRGF0YTogcmVzLmRhdGEgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3JMb2FkaW5nOiB0cnVlIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXM7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IGdldFVzZXJJbmZvID0gYXN5bmMgdXNlclRvRmluZElkID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9jaGF0cy91c2VyLyR7dXNlclRvRmluZElkfWAsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgbmFtZTogcmVzLmRhdGEubmFtZSwgcHJvZmlsZVBpY1VybDogcmVzLmRhdGEucHJvZmlsZVBpY1VybCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRVc2VySW5mbztcclxuIiwiY29uc3QgbmV3TXNnU291bmQgPSBzZW5kZXJOYW1lID0+IHtcclxuICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbyhcIi9saWdodC5tcDNcIik7XHJcblxyXG4gIHNvdW5kICYmIHNvdW5kLnBsYXkoKTtcclxuXHJcbiAgaWYgKHNlbmRlck5hbWUpIHtcclxuICAgIGRvY3VtZW50LnRpdGxlID0gYE5ldyBtZXNzYWdlIGZyb20gJHtzZW5kZXJOYW1lfWA7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk1lc3NhZ2VzXCI7XHJcbiAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld01zZ1NvdW5kO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==