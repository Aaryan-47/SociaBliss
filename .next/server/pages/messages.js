(function() {
var exports = {};
exports.id = 313;
exports.ids = [313];
exports.modules = {

/***/ 9517:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ messages; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__(7069);
var external_socket_io_client_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_client_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(4953);
var baseUrl_default = /*#__PURE__*/__webpack_require__.n(baseUrl);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(5998);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1347);
// EXTERNAL MODULE: ./utils/calculateTime.js
var calculateTime = __webpack_require__(1715);
;// CONCATENATED MODULE: ./components/Chats/Chat.js
var __jsx = (external_react_default()).createElement;





function Chat({
  chat,
  connectedUsers,
  deleteChat
}) {
  const router = (0,router_.useRouter)();
  const isOnline = connectedUsers.length > 0 && connectedUsers.filter(user => user.userId === chat.messagesWith).length > 0;
  return __jsx((external_react_default()).Fragment, null, __jsx(external_semantic_ui_react_.List, {
    selection: true
  }, __jsx(external_semantic_ui_react_.List.Item, {
    active: router.query.message === chat.messagesWith,
    onClick: () => router.push(`/messages?message=${chat.messagesWith}`, undefined, {
      shallow: true
    })
  }, __jsx(external_semantic_ui_react_.Comment, null, __jsx(external_semantic_ui_react_.Comment.Avatar, {
    src: chat.profilePicUrl
  }), __jsx(external_semantic_ui_react_.Comment.Content, null, __jsx(external_semantic_ui_react_.Comment.Author, {
    as: "a"
  }, chat.name, " ", isOnline && __jsx(external_semantic_ui_react_.Icon, {
    name: "circle",
    size: "small",
    color: "green"
  })), __jsx(external_semantic_ui_react_.Comment.Metadata, null, __jsx("div", null, (0,calculateTime/* default */.Z)(chat.date)), __jsx("div", {
    style: {
      position: "absolute",
      right: "10px",
      cursor: "pointer"
    }
  }, __jsx(external_semantic_ui_react_.Icon, {
    name: "trash alternate",
    color: "red",
    onClick: () => deleteChat(chat.messagesWith)
  }))), __jsx(external_semantic_ui_react_.Comment.Text, null, chat.lastMessage.length > 20 ? `${chat.lastMessage.substring(0, 20)} ...` : chat.lastMessage))))), __jsx(external_semantic_ui_react_.Divider, null));
}

/* harmony default export */ var Chats_Chat = (Chat);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
;// CONCATENATED MODULE: ./components/Chats/ChatListSearch.js
var ChatListSearch_jsx = (external_react_default()).createElement;






let cancel;

function ChatListSearch({
  chats,
  setChats
}) {
  const {
    0: text,
    1: setText
  } = (0,external_react_.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: results,
    1: setResults
  } = (0,external_react_.useState)([]);
  const router = (0,router_.useRouter)();

  const handleChange = async e => {
    const {
      value
    } = e.target;
    setText(value);
    setLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (external_axios_default()).CancelToken;
      const token = external_js_cookie_default().get("token");
      const res = await external_axios_default().get(`${(baseUrl_default())}/api/search/${value}`, {
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

  return ChatListSearch_jsx(external_semantic_ui_react_.Search, {
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
    onResultSelect: (e, data) => addChat(data.result)
  });
}

const ResultRenderer = ({
  _id,
  profilePicUrl,
  name
}) => {
  return ChatListSearch_jsx(external_semantic_ui_react_.List, {
    key: _id
  }, ChatListSearch_jsx(external_semantic_ui_react_.List.Item, null, ChatListSearch_jsx(external_semantic_ui_react_.Image, {
    src: profilePicUrl,
    alt: "ProfilePic",
    avatar: true
  }), ChatListSearch_jsx(external_semantic_ui_react_.List.Content, {
    header: name,
    as: "a"
  })));
};

/* harmony default export */ var Chats_ChatListSearch = (ChatListSearch);
// EXTERNAL MODULE: ./components/Layout/NoData.js
var NoData = __webpack_require__(6048);
;// CONCATENATED MODULE: ./components/Messages/Banner.js
var Banner_jsx = (external_react_default()).createElement;



function Banner({
  bannerData
}) {
  const {
    name,
    profilePicUrl
  } = bannerData;
  return Banner_jsx(external_semantic_ui_react_.Segment, {
    color: "teal",
    attached: "top"
  }, Banner_jsx(external_semantic_ui_react_.Grid, null, Banner_jsx(external_semantic_ui_react_.Grid.Column, {
    floated: "left",
    width: 14
  }, Banner_jsx("h4", null, Banner_jsx(external_semantic_ui_react_.Image, {
    avatar: true,
    src: profilePicUrl
  }), name))));
}

/* harmony default export */ var Messages_Banner = (Banner);
;// CONCATENATED MODULE: ./components/Messages/MessageInputField.js
var MessageInputField_jsx = (external_react_default()).createElement;



function MessageInputField({
  sendMsg
}) {
  const {
    0: text,
    1: setText
  } = (0,external_react_.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  return MessageInputField_jsx("div", {
    style: {
      position: "sticky",
      bottom: "0"
    }
  }, MessageInputField_jsx(external_semantic_ui_react_.Segment, {
    secondary: true,
    color: "teal",
    attached: "bottom"
  }, MessageInputField_jsx(external_semantic_ui_react_.Form, {
    reply: true,
    onSubmit: e => {
      e.preventDefault();
      sendMsg(text);
      setText("");
    }
  }, MessageInputField_jsx(external_semantic_ui_react_.Form.Input, {
    size: "large",
    placeholder: "Send New Message",
    value: text,
    onChange: e => setText(e.target.value),
    action: {
      color: "blue",
      icon: "telegram plane",
      disabled: text === "",
      loading: loading
    }
  }))));
}

/* harmony default export */ var Messages_MessageInputField = (MessageInputField);
;// CONCATENATED MODULE: ./components/Messages/Message.js
var Message_jsx = (external_react_default()).createElement;




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
  } = (0,external_react_.useState)(false);
  const ifYouSender = message.sender === user._id;
  return Message_jsx("div", {
    className: "bubbleWrapper",
    ref: divRef
  }, Message_jsx("div", {
    className: ifYouSender ? "inlineContainer own" : "inlineContainer",
    onClick: () => ifYouSender && showDeleteIcon(!deleteIcon)
  }, Message_jsx("img", {
    className: "inlineIcon",
    src: ifYouSender ? user.profilePicUrl : bannerProfilePic
  }), Message_jsx("div", {
    className: ifYouSender ? "ownBubble own" : "otherBubble other"
  }, message.msg), deleteIcon && Message_jsx(external_semantic_ui_react_.Popup, {
    trigger: Message_jsx(external_semantic_ui_react_.Icon, {
      name: "trash",
      color: "red",
      style: {
        cursor: "pointer"
      },
      onClick: () => deleteMsg(message._id)
    }),
    content: "This will only delete the message from your inbox!",
    position: "top right"
  })), Message_jsx("span", {
    className: ifYouSender ? "own" : "other"
  }, (0,calculateTime/* default */.Z)(message.date)));
}

/* harmony default export */ var Messages_Message = (Message);
// EXTERNAL MODULE: ./utils/getUserInfo.js
var getUserInfo = __webpack_require__(7354);
// EXTERNAL MODULE: ./utils/newMsgSound.js
var newMsgSound = __webpack_require__(1553);
;// CONCATENATED MODULE: ./pages/messages.js
var messages_jsx = (external_react_default()).createElement;

















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
  } = (0,external_react_.useState)(chatsData);
  const router = (0,router_.useRouter)();
  const socket = (0,external_react_.useRef)();
  const {
    0: connectedUsers,
    1: setConnectedUsers
  } = (0,external_react_.useState)([]);
  const {
    0: messages,
    1: setMessages
  } = (0,external_react_.useState)([]);
  const {
    0: bannerData,
    1: setBannerData
  } = (0,external_react_.useState)({
    name: "",
    profilePicUrl: ""
  });
  const divRef = (0,external_react_.useRef)(); // This ref is for persisting the state of query string in url throughout re-renders. This ref is the value of query string inside url

  const openChatId = (0,external_react_.useRef)(""); //CONNECTION useEffect

  (0,external_react_.useEffect)(() => {
    if (!socket.current) {
      socket.current = external_socket_io_client_default()((baseUrl_default()));
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

  (0,external_react_.useEffect)(() => {
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
        } = await (0,getUserInfo/* default */.Z)(router.query.message);
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


  (0,external_react_.useEffect)(() => {
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
                } = await (0,getUserInfo/* default */.Z)(newMsg.sender);
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

        (0,newMsgSound/* default */.Z)(senderName);
      });
    }
  }, []);
  (0,external_react_.useEffect)(() => {
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
      await external_axios_default().delete(`${(baseUrl_default())}/api/chats/${messagesWith}`, {
        headers: {
          Authorization: external_js_cookie_default().get("token")
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

  return messages_jsx((external_react_default()).Fragment, null, messages_jsx(external_semantic_ui_react_.Segment, {
    padded: true,
    basic: true,
    size: "large",
    style: {
      marginTop: "5px"
    }
  }, messages_jsx(external_semantic_ui_react_.Header, {
    icon: "home",
    content: "Go Back!",
    onClick: () => router.push("/"),
    style: {
      cursor: "pointer"
    }
  }), messages_jsx(external_semantic_ui_react_.Divider, {
    hidden: true
  }), messages_jsx("div", {
    style: {
      marginBottom: "10px"
    }
  }, messages_jsx(Chats_ChatListSearch, {
    chats: chats,
    setChats: setChats
  })), chats.length > 0 ? messages_jsx((external_react_default()).Fragment, null, messages_jsx(external_semantic_ui_react_.Grid, {
    stackable: true
  }, messages_jsx(external_semantic_ui_react_.Grid.Column, {
    width: 4
  }, messages_jsx(external_semantic_ui_react_.Comment.Group, {
    size: "big"
  }, messages_jsx(external_semantic_ui_react_.Segment, {
    raised: true,
    style: {
      overflow: "auto",
      maxHeight: "32rem"
    }
  }, chats.map((chat, i) => messages_jsx(Chats_Chat, {
    key: i,
    chat: chat,
    connectedUsers: connectedUsers,
    deleteChat: deleteChat
  }))))), messages_jsx(external_semantic_ui_react_.Grid.Column, {
    width: 12
  }, router.query.message && messages_jsx((external_react_default()).Fragment, null, messages_jsx("div", {
    style: {
      overflow: "auto",
      overflowX: "hidden",
      maxHeight: "35rem",
      height: "35rem",
      backgroundColor: "whitesmoke"
    }
  }, messages_jsx("div", {
    style: {
      position: "sticky",
      top: "0"
    }
  }, messages_jsx(Messages_Banner, {
    bannerData: bannerData
  })), messages.length > 0 && messages.map((message, i) => messages_jsx(Messages_Message, {
    divRef: divRef,
    key: i,
    bannerProfilePic: bannerData.profilePicUrl,
    message: message,
    user: user,
    deleteMsg: deleteMsg
  }))), messages_jsx(Messages_MessageInputField, {
    sendMsg: sendMsg
  }))))) : messages_jsx(NoData/* NoMessages */.eb, null)));
}

Messages.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,external_nookies_.parseCookies)(ctx);
    const res = await external_axios_default().get(`${(baseUrl_default())}/api/chats`, {
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

/* harmony default export */ var messages = (Messages);

/***/ }),

/***/ 7354:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4953);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6155);
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

/* harmony default export */ __webpack_exports__["Z"] = (getUserInfo);

/***/ }),

/***/ 1553:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["Z"] = (newMsgSound);

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ 2470:
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 5998:
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 3818:
/***/ (function(module) {

"use strict";
module.exports = require("react-moment");;

/***/ }),

/***/ 1347:
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ 7069:
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
var __webpack_exports__ = __webpack_require__.X(0, [831], function() { return __webpack_exec__(9517); });
module.exports = __webpack_exports__;

})();