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

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(module) {

const baseUrl = "http://localhost:3000";
module.exports = baseUrl;

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
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_NoData_js-utils_calculateTime_js-utils_getUserInfo_js-utils_newMsgSound_js"], function() { return __webpack_exec__("./pages/messages.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NoYXRzL0NoYXQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9DaGF0cy9DaGF0TGlzdFNlYXJjaC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL01lc3NhZ2VzL0Jhbm5lci5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL01lc3NhZ2VzL01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9NZXNzYWdlcy9NZXNzYWdlSW5wdXRGaWVsZC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNvY2tldC5pby1jbGllbnRcIiJdLCJuYW1lcyI6WyJDaGF0IiwiY2hhdCIsImNvbm5lY3RlZFVzZXJzIiwiZGVsZXRlQ2hhdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlzT25saW5lIiwibGVuZ3RoIiwiZmlsdGVyIiwidXNlciIsInVzZXJJZCIsIm1lc3NhZ2VzV2l0aCIsInF1ZXJ5IiwibWVzc2FnZSIsInB1c2giLCJ1bmRlZmluZWQiLCJzaGFsbG93IiwicHJvZmlsZVBpY1VybCIsIm5hbWUiLCJjYWxjdWxhdGVUaW1lIiwiZGF0ZSIsInBvc2l0aW9uIiwicmlnaHQiLCJjdXJzb3IiLCJsYXN0TWVzc2FnZSIsInN1YnN0cmluZyIsImNhbmNlbCIsIkNoYXRMaXN0U2VhcmNoIiwiY2hhdHMiLCJzZXRDaGF0cyIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInRva2VuIiwiY29va2llIiwicmVzIiwiYmFzZVVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY2FuY2VsVG9rZW4iLCJjYW5jZWxlciIsImRhdGEiLCJlcnJvciIsImFsZXJ0IiwiYWRkQ2hhdCIsInJlc3VsdCIsImFscmVhZHlJbkNoYXQiLCJtZXNzc2FnZXNXaXRoIiwiX2lkIiwibmV3Q2hhdCIsIkRhdGUiLCJub3ciLCJwcmV2IiwiUmVzdWx0UmVuZGVyZXIiLCJCYW5uZXIiLCJiYW5uZXJEYXRhIiwiTWVzc2FnZSIsImRlbGV0ZU1zZyIsImJhbm5lclByb2ZpbGVQaWMiLCJkaXZSZWYiLCJkZWxldGVJY29uIiwic2hvd0RlbGV0ZUljb24iLCJpZllvdVNlbmRlciIsInNlbmRlciIsIm1zZyIsIk1lc3NhZ2VJbnB1dEZpZWxkIiwic2VuZE1zZyIsImJvdHRvbSIsInByZXZlbnREZWZhdWx0IiwiY29sb3IiLCJpY29uIiwiZGlzYWJsZWQiLCJzY3JvbGxEaXZUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW91ciIsIk1lc3NhZ2VzIiwiY2hhdHNEYXRhIiwic29ja2V0IiwidXNlUmVmIiwic2V0Q29ubmVjdGVkVXNlcnMiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwic2V0QmFubmVyRGF0YSIsIm9wZW5DaGF0SWQiLCJ1c2VFZmZlY3QiLCJpbyIsImVtaXQiLCJvbiIsInVzZXJzIiwib2ZmIiwibG9hZE1lc3NhZ2VzIiwiZ2V0VXNlckluZm8iLCJtc2dTZW5kVG9Vc2VySWQiLCJuZXdNc2ciLCJyZWNlaXZlciIsInByZXZpb3VzQ2hhdCIsImZpbmQiLCJzZW5kZXJOYW1lIiwiaWZQcmV2aW91c2x5TWVzc2FnZWQiLCJuZXdNc2dTb3VuZCIsIm1lc3NhZ2VJZCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm92ZXJmbG93IiwibWF4SGVpZ2h0IiwibWFwIiwiaSIsIm92ZXJmbG93WCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInRvcCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInBhcnNlQ29va2llcyIsImVycm9yTG9hZGluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxDQUFjO0FBQUVDLE1BQUY7QUFBUUMsZ0JBQVI7QUFBd0JDO0FBQXhCLENBQWQsRUFBb0Q7QUFDbEQsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLFFBQU1DLFFBQVEsR0FDWkosY0FBYyxDQUFDSyxNQUFmLEdBQXdCLENBQXhCLElBQ0FMLGNBQWMsQ0FBQ00sTUFBZixDQUFzQkMsSUFBSSxJQUFJQSxJQUFJLENBQUNDLE1BQUwsS0FBZ0JULElBQUksQ0FBQ1UsWUFBbkQsRUFBaUVKLE1BQWpFLEdBQTBFLENBRjVFO0FBSUEsU0FDRSxx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QWxCO0FBSUEsV0FBTztBQUFFNEMsZUFBUyxFQUFFMUMsR0FBRyxDQUFDTTtBQUFqQixLQUFQO0FBQ0QsR0FSRCxDQVFFLE9BQU9DLEtBQVAsRUFBYztBQUNkLFdBQU87QUFBRXlFLGtCQUFZLEVBQUU7QUFBaEIsS0FBUDtBQUNEO0FBQ0YsQ0FaRDs7QUFjQSwrREFBZXZDLFFBQWYsRTs7Ozs7Ozs7OztBQzdTQSxNQUFNeEMsT0FBTyxHQUFFLHVCQUFmO0FBRUFnRixNQUFNLENBQUNDLE9BQVAsR0FBaUJqRixPQUFqQixDOzs7Ozs7Ozs7OztBQ0ZBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL21lc3NhZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyLCBDb21tZW50LCBJY29uLCBMaXN0IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xyXG5cclxuZnVuY3Rpb24gQ2hhdCh7IGNoYXQsIGNvbm5lY3RlZFVzZXJzLCBkZWxldGVDaGF0IH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaXNPbmxpbmUgPVxyXG4gICAgY29ubmVjdGVkVXNlcnMubGVuZ3RoID4gMCAmJlxyXG4gICAgY29ubmVjdGVkVXNlcnMuZmlsdGVyKHVzZXIgPT4gdXNlci51c2VySWQgPT09IGNoYXQubWVzc2FnZXNXaXRoKS5sZW5ndGggPiAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpc3Qgc2VsZWN0aW9uPlxyXG4gICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgIGFjdGl2ZT17cm91dGVyLnF1ZXJ5Lm1lc3NhZ2UgPT09IGNoYXQubWVzc2FnZXNXaXRofVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgcm91dGVyLnB1c2goYC9tZXNzYWdlcz9tZXNzYWdlPSR7Y2hhdC5tZXNzYWdlc1dpdGh9YCwgdW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDb21tZW50PlxyXG4gICAgICAgICAgICA8Q29tbWVudC5BdmF0YXIgc3JjPXtjaGF0LnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgICAgIDxDb21tZW50LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENvbW1lbnQuQXV0aG9yIGFzPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAge2NoYXQubmFtZX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7aXNPbmxpbmUgJiYgPEljb24gbmFtZT1cImNpcmNsZVwiIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZ3JlZW5cIiAvPn1cclxuICAgICAgICAgICAgICA8L0NvbW1lbnQuQXV0aG9yPlxyXG5cclxuICAgICAgICAgICAgICA8Q29tbWVudC5NZXRhZGF0YT5cclxuICAgICAgICAgICAgICAgIDxkaXY+e2NhbGN1bGF0ZVRpbWUoY2hhdC5kYXRlKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IFwiMTBweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFzaCBhbHRlcm5hdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVDaGF0KGNoYXQubWVzc2FnZXNXaXRoKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29tbWVudC5NZXRhZGF0YT5cclxuXHJcbiAgICAgICAgICAgICAgPENvbW1lbnQuVGV4dD5cclxuICAgICAgICAgICAgICAgIHtjaGF0Lmxhc3RNZXNzYWdlLmxlbmd0aCA+IDIwXHJcbiAgICAgICAgICAgICAgICAgID8gYCR7Y2hhdC5sYXN0TWVzc2FnZS5zdWJzdHJpbmcoMCwgMjApfSAuLi5gXHJcbiAgICAgICAgICAgICAgICAgIDogY2hhdC5sYXN0TWVzc2FnZX1cclxuICAgICAgICAgICAgICA8L0NvbW1lbnQuVGV4dD5cclxuICAgICAgICAgICAgPC9Db21tZW50LkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0NvbW1lbnQ+XHJcbiAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaXN0LCBJbWFnZSwgU2VhcmNoIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5sZXQgY2FuY2VsO1xyXG5cclxuZnVuY3Rpb24gQ2hhdExpc3RTZWFyY2goeyBjaGF0cywgc2V0Q2hhdHMgfSkge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGFzeW5jIGUgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRUZXh0KHZhbHVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY2FuY2VsICYmIGNhbmNlbCgpO1xyXG4gICAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoXCJ0b2tlblwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvc2VhcmNoLyR7dmFsdWV9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfSxcclxuICAgICAgICBjYW5jZWxUb2tlbjogbmV3IENhbmNlbFRva2VuKGNhbmNlbGVyID0+IHtcclxuICAgICAgICAgIGNhbmNlbCA9IGNhbmNlbGVyO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgc2V0UmVzdWx0cyhyZXMuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydChcIkVycm9yIFNlYXJjaGluZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRDaGF0ID0gcmVzdWx0ID0+IHtcclxuICAgIGNvbnN0IGFscmVhZHlJbkNoYXQgPVxyXG4gICAgICBjaGF0cy5sZW5ndGggPiAwICYmXHJcbiAgICAgIGNoYXRzLmZpbHRlcihjaGF0ID0+IGNoYXQubWVzc3NhZ2VzV2l0aCA9PT0gcmVzdWx0Ll9pZCkubGVuZ3RoID4gMDtcclxuXHJcbiAgICBpZiAoYWxyZWFkeUluQ2hhdCkge1xyXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2goYC9tZXNzYWdlcz9tZXNzYWdlPSR7cmVzdWx0Ll9pZH1gKTtcclxuICAgIH1cclxuICAgIC8vXHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgbmV3Q2hhdCA9IHtcclxuICAgICAgICBtZXNzYWdlc1dpdGg6IHJlc3VsdC5faWQsXHJcbiAgICAgICAgbmFtZTogcmVzdWx0Lm5hbWUsXHJcbiAgICAgICAgcHJvZmlsZVBpY1VybDogcmVzdWx0LnByb2ZpbGVQaWNVcmwsXHJcbiAgICAgICAgbGFzdE1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgZGF0ZTogRGF0ZS5ub3coKVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgc2V0Q2hhdHMocHJldiA9PiBbbmV3Q2hhdCwgLi4ucHJldl0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKGAvbWVzc2FnZXM/bWVzc2FnZT0ke3Jlc3VsdC5faWR9YCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWFyY2hcclxuICAgICAgb25CbHVyPXsoKSA9PiB7XHJcbiAgICAgICAgcmVzdWx0cy5sZW5ndGggPiAwICYmIHNldFJlc3VsdHMoW10pO1xyXG4gICAgICAgIGxvYWRpbmcgJiYgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0VGV4dChcIlwiKTtcclxuICAgICAgfX1cclxuICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgIHJlc3VsdFJlbmRlcmVyPXtSZXN1bHRSZW5kZXJlcn1cclxuICAgICAgcmVzdWx0cz17cmVzdWx0c31cclxuICAgICAgb25TZWFyY2hDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgbWluQ2hhcmFjdGVycz17MX1cclxuICAgICAgb25SZXN1bHRTZWxlY3Q9eyhlLCBkYXRhKSA9PiBhZGRDaGF0KGRhdGEucmVzdWx0KX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUmVzdWx0UmVuZGVyZXIgPSAoeyBfaWQsIHByb2ZpbGVQaWNVcmwsIG5hbWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdCBrZXk9e19pZH0+XHJcbiAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZVBpY1VybH0gYWx0PVwiUHJvZmlsZVBpY1wiIGF2YXRhciAvPlxyXG4gICAgICAgIDxMaXN0LkNvbnRlbnQgaGVhZGVyPXtuYW1lfSBhcz1cImFcIiAvPlxyXG4gICAgICA8L0xpc3QuSXRlbT5cclxuICAgIDwvTGlzdD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdExpc3RTZWFyY2g7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VnbWVudCwgR3JpZCwgSW1hZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEJhbm5lcih7IGJhbm5lckRhdGEgfSkge1xyXG4gIGNvbnN0IHsgbmFtZSwgcHJvZmlsZVBpY1VybCB9ID0gYmFubmVyRGF0YTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWdtZW50IGNvbG9yPVwidGVhbFwiIGF0dGFjaGVkPVwidG9wXCI+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPVwibGVmdFwiIHdpZHRoPXsxNH0+XHJcbiAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgIDxJbWFnZSBhdmF0YXIgc3JjPXtwcm9maWxlUGljVXJsfSAvPlxyXG4gICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9TZWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEljb24sIFBvcHVwIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlKHsgbWVzc2FnZSwgdXNlciwgZGVsZXRlTXNnLCBiYW5uZXJQcm9maWxlUGljLCBkaXZSZWYgfSkge1xyXG4gIGNvbnN0IFtkZWxldGVJY29uLCBzaG93RGVsZXRlSWNvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGlmWW91U2VuZGVyID0gbWVzc2FnZS5zZW5kZXIgPT09IHVzZXIuX2lkO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidWJibGVXcmFwcGVyXCIgcmVmPXtkaXZSZWZ9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtpZllvdVNlbmRlciA/IFwiaW5saW5lQ29udGFpbmVyIG93blwiIDogXCJpbmxpbmVDb250YWluZXJcIn1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBpZllvdVNlbmRlciAmJiBzaG93RGVsZXRlSWNvbighZGVsZXRlSWNvbil9XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmVJY29uXCJcclxuICAgICAgICAgIHNyYz17aWZZb3VTZW5kZXIgPyB1c2VyLnByb2ZpbGVQaWNVcmwgOiBiYW5uZXJQcm9maWxlUGljfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpZllvdVNlbmRlciA/IFwib3duQnViYmxlIG93blwiIDogXCJvdGhlckJ1YmJsZSBvdGhlclwifT5cclxuICAgICAgICAgIHttZXNzYWdlLm1zZ31cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2RlbGV0ZUljb24gJiYgKFxyXG4gICAgICAgICAgPFBvcHVwXHJcbiAgICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidHJhc2hcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlTXNnKG1lc3NhZ2UuX2lkKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJUaGlzIHdpbGwgb25seSBkZWxldGUgdGhlIG1lc3NhZ2UgZnJvbSB5b3VyIGluYm94IVwiXHJcbiAgICAgICAgICAgIHBvc2l0aW9uPVwidG9wIHJpZ2h0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2lmWW91U2VuZGVyID8gXCJvd25cIiA6IFwib3RoZXJcIn0+e2NhbGN1bGF0ZVRpbWUobWVzc2FnZS5kYXRlKX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgU2VnbWVudCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUlucHV0RmllbGQoeyBzZW5kTXNnIH0pIHtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInN0aWNreVwiLCBib3R0b206IFwiMFwiIH19PlxyXG4gICAgICA8U2VnbWVudCBzZWNvbmRhcnkgY29sb3I9XCJ0ZWFsXCIgYXR0YWNoZWQ9XCJib3R0b21cIj5cclxuICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgcmVwbHlcclxuICAgICAgICAgIG9uU3VibWl0PXtlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZW5kTXNnKHRleHQpO1xyXG4gICAgICAgICAgICBzZXRUZXh0KFwiXCIpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmQgTmV3IE1lc3NhZ2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGFjdGlvbj17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcclxuICAgICAgICAgICAgICBpY29uOiBcInRlbGVncmFtIHBsYW5lXCIsXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRleHQgPT09IFwiXCIsXHJcbiAgICAgICAgICAgICAgbG9hZGluZzogbG9hZGluZ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvU2VnbWVudD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VJbnB1dEZpZWxkO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTZWdtZW50LCBIZWFkZXIsIERpdmlkZXIsIENvbW1lbnQsIEdyaWQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IENoYXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhdHMvQ2hhdFwiO1xyXG5pbXBvcnQgQ2hhdExpc3RTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhdHMvQ2hhdExpc3RTZWFyY2hcIjtcclxuaW1wb3J0IHsgTm9NZXNzYWdlcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGFcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9NZXNzYWdlcy9CYW5uZXJcIjtcclxuaW1wb3J0IE1lc3NhZ2VJbnB1dEZpZWxkIGZyb20gXCIuLi9jb21wb25lbnRzL01lc3NhZ2VzL01lc3NhZ2VJbnB1dEZpZWxkXCI7XHJcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL01lc3NhZ2VzL01lc3NhZ2VcIjtcclxuaW1wb3J0IGdldFVzZXJJbmZvIGZyb20gXCIuLi91dGlscy9nZXRVc2VySW5mb1wiO1xyXG5pbXBvcnQgbmV3TXNnU291bmQgZnJvbSBcIi4uL3V0aWxzL25ld01zZ1NvdW5kXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3Qgc2Nyb2xsRGl2VG9Cb3R0b20gPSBkaXZSZWYgPT5cclxuICBkaXZSZWYuY3VycmVudCAhPT0gbnVsbCAmJiBkaXZSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW91cjogXCJzbW9vdGhcIiB9KTtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VzKHsgY2hhdHNEYXRhLCB1c2VyIH0pIHtcclxuICBjb25zdCBbY2hhdHMsIHNldENoYXRzXSA9IHVzZVN0YXRlKGNoYXRzRGF0YSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHNvY2tldCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IFtjb25uZWN0ZWRVc2Vycywgc2V0Q29ubmVjdGVkVXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYmFubmVyRGF0YSwgc2V0QmFubmVyRGF0YV0gPSB1c2VTdGF0ZSh7IG5hbWU6IFwiXCIsIHByb2ZpbGVQaWNVcmw6IFwiXCIgfSk7XHJcblxyXG4gIGNvbnN0IGRpdlJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAvLyBUaGlzIHJlZiBpcyBmb3IgcGVyc2lzdGluZyB0aGUgc3RhdGUgb2YgcXVlcnkgc3RyaW5nIGluIHVybCB0aHJvdWdob3V0IHJlLXJlbmRlcnMuIFRoaXMgcmVmIGlzIHRoZSB2YWx1ZSBvZiBxdWVyeSBzdHJpbmcgaW5zaWRlIHVybFxyXG4gIGNvbnN0IG9wZW5DaGF0SWQgPSB1c2VSZWYoXCJcIik7XHJcblxyXG4gIC8vQ09OTkVDVElPTiB1c2VFZmZlY3RcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzb2NrZXQuY3VycmVudCkge1xyXG4gICAgICBzb2NrZXQuY3VycmVudCA9IGlvKGJhc2VVcmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xyXG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiam9pblwiLCB7IHVzZXJJZDogdXNlci5faWQgfSk7XHJcblxyXG4gICAgICBzb2NrZXQuY3VycmVudC5vbihcImNvbm5lY3RlZFVzZXJzXCIsICh7IHVzZXJzIH0pID0+IHtcclxuICAgICAgICB1c2Vycy5sZW5ndGggPiAwICYmIHNldENvbm5lY3RlZFVzZXJzKHVzZXJzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoY2hhdHMubGVuZ3RoID4gMCAmJiAhcm91dGVyLnF1ZXJ5Lm1lc3NhZ2UpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChgL21lc3NhZ2VzP21lc3NhZ2U9JHtjaGF0c1swXS5tZXNzYWdlc1dpdGh9YCwgdW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICBzaGFsbG93OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiZGlzY29ubmVjdFwiKTtcclxuICAgICAgICBzb2NrZXQuY3VycmVudC5vZmYoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIExPQUQgTUVTU0FHRVMgdXNlRWZmZWN0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRNZXNzYWdlcyA9ICgpID0+IHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImxvYWRNZXNzYWdlc1wiLCB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VyLl9pZCxcclxuICAgICAgICBtZXNzYWdlc1dpdGg6IHJvdXRlci5xdWVyeS5tZXNzYWdlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJtZXNzYWdlc0xvYWRlZFwiLCBhc3luYyAoeyBjaGF0IH0pID0+IHtcclxuICAgICAgICBzZXRNZXNzYWdlcyhjaGF0Lm1lc3NhZ2VzKTtcclxuICAgICAgICBzZXRCYW5uZXJEYXRhKHtcclxuICAgICAgICAgIG5hbWU6IGNoYXQubWVzc2FnZXNXaXRoLm5hbWUsXHJcbiAgICAgICAgICBwcm9maWxlUGljVXJsOiBjaGF0Lm1lc3NhZ2VzV2l0aC5wcm9maWxlUGljVXJsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9wZW5DaGF0SWQuY3VycmVudCA9IGNoYXQubWVzc2FnZXNXaXRoLl9pZDtcclxuICAgICAgICBkaXZSZWYuY3VycmVudCAmJiBzY3JvbGxEaXZUb0JvdHRvbShkaXZSZWYpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibm9DaGF0Rm91bmRcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgcHJvZmlsZVBpY1VybCB9ID0gYXdhaXQgZ2V0VXNlckluZm8ocm91dGVyLnF1ZXJ5Lm1lc3NhZ2UpO1xyXG5cclxuICAgICAgICBzZXRCYW5uZXJEYXRhKHsgbmFtZSwgcHJvZmlsZVBpY1VybCB9KTtcclxuICAgICAgICBzZXRNZXNzYWdlcyhbXSk7XHJcblxyXG4gICAgICAgIG9wZW5DaGF0SWQuY3VycmVudCA9IHJvdXRlci5xdWVyeS5tZXNzYWdlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHNvY2tldC5jdXJyZW50ICYmIHJvdXRlci5xdWVyeS5tZXNzYWdlKSBsb2FkTWVzc2FnZXMoKTtcclxuICB9LCBbcm91dGVyLnF1ZXJ5Lm1lc3NhZ2VdKTtcclxuXHJcbiAgY29uc3Qgc2VuZE1zZyA9IG1zZyA9PiB7XHJcbiAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcInNlbmROZXdNc2dcIiwge1xyXG4gICAgICAgIHVzZXJJZDogdXNlci5faWQsXHJcbiAgICAgICAgbXNnU2VuZFRvVXNlcklkOiBvcGVuQ2hhdElkLmN1cnJlbnQsXHJcbiAgICAgICAgbXNnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIENvbmZpcm1pbmcgbXNnIGlzIHNlbnQgYW5kIHJlY2V2aW5nIHRoZSBtZXNzYWdlcyB1c2VFZmZlY3RcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNvY2tldC5jdXJyZW50KSB7XHJcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibXNnU2VudFwiLCAoeyBuZXdNc2cgfSkgPT4ge1xyXG4gICAgICAgIGlmIChuZXdNc2cucmVjZWl2ZXIgPT09IG9wZW5DaGF0SWQuY3VycmVudCkge1xyXG4gICAgICAgICAgc2V0TWVzc2FnZXMocHJldiA9PiBbLi4ucHJldiwgbmV3TXNnXSk7XHJcblxyXG4gICAgICAgICAgc2V0Q2hhdHMocHJldiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzQ2hhdCA9IHByZXYuZmluZChjaGF0ID0+IGNoYXQubWVzc2FnZXNXaXRoID09PSBuZXdNc2cucmVjZWl2ZXIpO1xyXG4gICAgICAgICAgICBwcmV2aW91c0NoYXQubGFzdE1lc3NhZ2UgPSBuZXdNc2cubXNnO1xyXG4gICAgICAgICAgICBwcmV2aW91c0NoYXQuZGF0ZSA9IG5ld01zZy5kYXRlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5wcmV2XTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzb2NrZXQuY3VycmVudC5vbihcIm5ld01zZ1JlY2VpdmVkXCIsIGFzeW5jICh7IG5ld01zZyB9KSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbmRlck5hbWU7XHJcblxyXG4gICAgICAgIC8vIFdIRU4gQ0hBVCBXSVRIIFNFTkRFUiBJUyBDVVJSRU5UTFkgT1BFTkVEIElOU0lERSBZT1VSIEJST1dTRVJcclxuICAgICAgICBpZiAobmV3TXNnLnNlbmRlciA9PT0gb3BlbkNoYXRJZC5jdXJyZW50KSB7XHJcbiAgICAgICAgICBzZXRNZXNzYWdlcyhwcmV2ID0+IFsuLi5wcmV2LCBuZXdNc2ddKTtcclxuXHJcbiAgICAgICAgICBzZXRDaGF0cyhwcmV2ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDaGF0ID0gcHJldi5maW5kKGNoYXQgPT4gY2hhdC5tZXNzYWdlc1dpdGggPT09IG5ld01zZy5zZW5kZXIpO1xyXG4gICAgICAgICAgICBwcmV2aW91c0NoYXQubGFzdE1lc3NhZ2UgPSBuZXdNc2cubXNnO1xyXG4gICAgICAgICAgICBwcmV2aW91c0NoYXQuZGF0ZSA9IG5ld01zZy5kYXRlO1xyXG5cclxuICAgICAgICAgICAgc2VuZGVyTmFtZSA9IHByZXZpb3VzQ2hhdC5uYW1lO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5wcmV2XTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgaWZQcmV2aW91c2x5TWVzc2FnZWQgPVxyXG4gICAgICAgICAgICBjaGF0cy5maWx0ZXIoY2hhdCA9PiBjaGF0Lm1lc3NhZ2VzV2l0aCA9PT0gbmV3TXNnLnNlbmRlcikubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICBpZiAoaWZQcmV2aW91c2x5TWVzc2FnZWQpIHtcclxuICAgICAgICAgICAgc2V0Q2hhdHMocHJldiA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDaGF0ID0gcHJldi5maW5kKGNoYXQgPT4gY2hhdC5tZXNzYWdlc1dpdGggPT09IG5ld01zZy5zZW5kZXIpO1xyXG4gICAgICAgICAgICAgIHByZXZpb3VzQ2hhdC5sYXN0TWVzc2FnZSA9IG5ld01zZy5tc2c7XHJcbiAgICAgICAgICAgICAgcHJldmlvdXNDaGF0LmRhdGUgPSBuZXdNc2cuZGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgc2VuZGVyTmFtZSA9IHByZXZpb3VzQ2hhdC5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNDaGF0LFxyXG4gICAgICAgICAgICAgICAgLi4ucHJldi5maWx0ZXIoY2hhdCA9PiBjaGF0Lm1lc3NhZ2VzV2l0aCAhPT0gbmV3TXNnLnNlbmRlcilcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvL0lGIE5PIFBSRVZJT1VTIENIQVQgV0lUSCBUSEUgU0VOREVSXHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCBwcm9maWxlUGljVXJsIH0gPSBhd2FpdCBnZXRVc2VySW5mbyhuZXdNc2cuc2VuZGVyKTtcclxuICAgICAgICAgICAgc2VuZGVyTmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdDaGF0ID0ge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2VzV2l0aDogbmV3TXNnLnNlbmRlcixcclxuICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgIHByb2ZpbGVQaWNVcmwsXHJcbiAgICAgICAgICAgICAgbGFzdE1lc3NhZ2U6IG5ld01zZy5tc2csXHJcbiAgICAgICAgICAgICAgZGF0ZTogbmV3TXNnLmRhdGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc2V0Q2hhdHMocHJldiA9PiBbbmV3Q2hhdCwgLi4ucHJldl0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3TXNnU291bmQoc2VuZGVyTmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgc2Nyb2xsRGl2VG9Cb3R0b20oZGl2UmVmKTtcclxuICB9LCBbbWVzc2FnZXNdKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlTXNnID0gbWVzc2FnZUlkID0+IHtcclxuICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xyXG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiZGVsZXRlTXNnXCIsIHtcclxuICAgICAgICB1c2VySWQ6IHVzZXIuX2lkLFxyXG4gICAgICAgIG1lc3NhZ2VzV2l0aDogb3BlbkNoYXRJZC5jdXJyZW50LFxyXG4gICAgICAgIG1lc3NhZ2VJZFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibXNnRGVsZXRlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0TWVzc2FnZXMocHJldiA9PiBwcmV2LmZpbHRlcihtZXNzYWdlID0+IG1lc3NhZ2UuX2lkICE9PSBtZXNzYWdlSWQpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQ2hhdCA9IGFzeW5jIG1lc3NhZ2VzV2l0aCA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5kZWxldGUoYCR7YmFzZVVybH0vYXBpL2NoYXRzLyR7bWVzc2FnZXNXaXRofWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0Q2hhdHMocHJldiA9PiBwcmV2LmZpbHRlcihjaGF0ID0+IGNoYXQubWVzc2FnZXNXaXRoICE9PSBtZXNzYWdlc1dpdGgpKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvbWVzc2FnZXNcIiwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydChcIkVycm9yIGRlbGV0aW5nIGNoYXRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTZWdtZW50IHBhZGRlZCBiYXNpYyBzaXplPVwibGFyZ2VcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgaWNvbj1cImhvbWVcIlxyXG4gICAgICAgICAgY29udGVudD1cIkdvIEJhY2shXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cclxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICA8Q2hhdExpc3RTZWFyY2ggY2hhdHM9e2NoYXRzfSBzZXRDaGF0cz17c2V0Q2hhdHN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtjaGF0cy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEdyaWQgc3RhY2thYmxlPlxyXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudC5Hcm91cCBzaXplPVwiYmlnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWdtZW50IHJhaXNlZCBzdHlsZT17eyBvdmVyZmxvdzogXCJhdXRvXCIsIG1heEhlaWdodDogXCIzMnJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGF0cy5tYXAoKGNoYXQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhdD17Y2hhdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkVXNlcnM9e2Nvbm5lY3RlZFVzZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDaGF0PXtkZWxldGVDaGF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPC9Db21tZW50Lkdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTJ9PlxyXG4gICAgICAgICAgICAgICAge3JvdXRlci5xdWVyeS5tZXNzYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjM1cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVzbW9rZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwic3RpY2t5XCIsIHRvcDogXCIwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXIgYmFubmVyRGF0YT17YmFubmVyRGF0YX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZSZWY9e2RpdlJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbm5lclByb2ZpbGVQaWM9e2Jhbm5lckRhdGEucHJvZmlsZVBpY1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlTXNnPXtkZWxldGVNc2d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlSW5wdXRGaWVsZCBzZW5kTXNnPXtzZW5kTXNnfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxOb01lc3NhZ2VzIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuTWVzc2FnZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9jaGF0c2AsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBjaGF0c0RhdGE6IHJlcy5kYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IGVycm9yTG9hZGluZzogdHJ1ZSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzO1xyXG4iLCJjb25zdCBiYXNlVXJsID1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVXJsO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==