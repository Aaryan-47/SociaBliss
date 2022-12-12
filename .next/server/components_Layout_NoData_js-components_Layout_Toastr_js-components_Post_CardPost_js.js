exports.id = "components_Layout_NoData_js-components_Layout_Toastr_js-components_Post_CardPost_js";
exports.ids = ["components_Layout_NoData_js-components_Layout_Toastr_js-components_Post_CardPost_js"];
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
  setShowToastr,
  socket
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); //console.log(post)

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
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, post.picUrl ? __jsx(_ImageModal__WEBPACK_IMPORTED_MODULE_8__.default, _extends({}, addPropsToModal(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  })) : __jsx(_NoImageModal__WEBPACK_IMPORTED_MODULE_9__.default, _extends({}, addPropsToModal(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
    color: "teal",
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 66,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 78,
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
        lineNumber: 86,
        columnNumber: 21
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    as: "h4",
    content: "Are you sure?",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      lineNumber: 96,
      columnNumber: 19
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
    href: `/${post.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, post.user.name))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(post.createdAt)), post.location && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
    content: post.location,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 116,
      columnNumber: 13
    }
  }, post.text)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
    extra: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: isLiked ? "heart" : "heart outline",
    color: "red",
    style: {
      cursor: "pointer"
    },
    onClick: () => {
      if (socket.current) {
        socket.current.emit('likePost', {
          postId: post._id,
          userId: user._id,
          like: isLiked ? false : true
        });
        socket.current.on('PostLiked', () => {
          if (isLiked) {
            setLikes(prev => prev.filter(like => like.user !== user._id));
          } else {
            setLikes(prev => [...prev, {
              user: user._id
            }]);
          }
        });
      } else {
        (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_6__.likePost)(post._id, user._id, setLikes, isLiked ? false : true);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }), __jsx(_LikesList__WEBPACK_IMPORTED_MODULE_7__.default, {
    postId: post._id,
    trigger: likes.length > 0 && __jsx("span", {
      className: "spanLikesList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 19
      }
    }, `${likes.length} ${likes.length === 1 ? "like" : "likes"}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
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
      lineNumber: 164,
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
      lineNumber: 174,
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
      lineNumber: 185,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }), __jsx(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__.default, {
    user: user,
    postId: post._id,
    setComments: setComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGEuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvUGxhY2VIb2xkZXJHcm91cC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9Ub2FzdHIuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9Db21tZW50SW5wdXRGaWVsZC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvSW1hZ2VNb2RhbC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvTGlrZXNMaXN0LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9Ob0ltYWdlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L1Bvc3RDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9jYWxjdWxhdGVUaW1lLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL3Bvc3RBY3Rpb25zLmpzIl0sIm5hbWVzIjpbIk5vUHJvZmlsZVBvc3RzIiwiTm9Gb2xsb3dEYXRhIiwiZm9sbG93ZXJzQ29tcG9uZW50IiwiZm9sbG93aW5nQ29tcG9uZW50IiwiTm9NZXNzYWdlcyIsIk5vUG9zdHMiLCJOb1Byb2ZpbGUiLCJOb05vdGlmaWNhdGlvbnMiLCJOb1Bvc3RGb3VuZCIsIlBsYWNlSG9sZGVyUG9zdHMiLCJyYW5nZSIsIm1hcCIsIml0ZW0iLCJQbGFjZUhvbGRlclN1Z2dlc3Rpb25zIiwiUGxhY2VIb2xkZXJOb3RpZmljYXRpb25zIiwiRW5kTWVzc2FnZSIsIkxpa2VzUGxhY2VIb2xkZXIiLCJtaW5XaWR0aCIsIlBvc3REZWxldGVUb2FzdHIiLCJ0b2FzdCIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJFcnJvclRvYXN0ciIsImVycm9yIiwiTXNnU2VudFRvYXN0ciIsIkNhcmRQb3N0IiwicG9zdCIsInVzZXIiLCJzZXRQb3N0cyIsInNldFNob3dUb2FzdHIiLCJzb2NrZXQiLCJsaWtlcyIsInNldExpa2VzIiwidXNlU3RhdGUiLCJpc0xpa2VkIiwibGVuZ3RoIiwiZmlsdGVyIiwibGlrZSIsIl9pZCIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJzZXRFcnJvciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImFkZFByb3BzVG9Nb2RhbCIsInBpY1VybCIsImN1cnNvciIsInByb2ZpbGVQaWNVcmwiLCJyb2xlIiwiZGVsZXRlUG9zdCIsInVzZXJuYW1lIiwibmFtZSIsImNhbGN1bGF0ZVRpbWUiLCJjcmVhdGVkQXQiLCJsb2NhdGlvbiIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsIndvcmRTcGFjaW5nIiwidGV4dCIsImN1cnJlbnQiLCJlbWl0IiwicG9zdElkIiwidXNlcklkIiwib24iLCJwcmV2IiwibGlrZVBvc3QiLCJtYXJnaW5MZWZ0IiwiY29tbWVudCIsImkiLCJDb21tZW50SW5wdXRGaWVsZCIsInNldFRleHQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3RDb21tZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjb2xvciIsImljb24iLCJkaXNhYmxlZCIsIkltYWdlTW9kYWwiLCJvdmVyZmxvdyIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSIsIkxpa2VzTGlzdCIsInRyaWdnZXIiLCJsaWtlc0xpc3QiLCJzZXRMaWtlc0xpc3QiLCJnZXRMaWtlc0xpc3QiLCJyZXMiLCJheGlvcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsImRhdGEiLCJhbGVydCIsImNhdGNoRXJyb3JzIiwibWF4SGVpZ2h0IiwiUm91dGVyIiwiTm9JbWFnZU1vZGFsIiwiUG9zdENvbW1lbnRzIiwic2V0RGlzYWJsZWQiLCJkYXRlIiwiZGVsZXRlQ29tbWVudCIsInRvZGF5IiwibW9tZW50IiwiRGF0ZSIsIm5vdyIsInBvc3REYXRlIiwiZGlmZkluSG91cnMiLCJkaWZmIiwiQXhpb3MiLCJiYXNlVVJMIiwic3VibWl0TmV3UG9zdCIsInNldE5ld1Bvc3QiLCJlcnJvck1zZyIsImRlbGV0ZSIsInB1dCIsIm5ld0NvbW1lbnQiLCJjb21tZW50SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLGNBQWMsR0FBRyxNQUM1QixxRUFDRSxNQUFDLHNEQUFEO0FBQVMsTUFBSSxNQUFiO0FBQWMsTUFBSSxFQUFDLEtBQW5CO0FBQXlCLFFBQU0sRUFBQyxPQUFoQztBQUF3QyxTQUFPLEVBQUMsbUNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFLE1BQUMscURBQUQ7QUFBUSxNQUFJLEVBQUMsMkJBQWI7QUFBeUMsU0FBTyxFQUFDLFNBQWpEO0FBQTJELElBQUUsRUFBQyxHQUE5RDtBQUFrRSxNQUFJLEVBQUMsR0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZGLENBREs7QUFPQSxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFFQyxvQkFBRjtBQUFzQkM7QUFBdEIsQ0FBRCxLQUMxQixxRUFDR0Qsa0JBQWtCLElBQ2pCLE1BQUMsc0RBQUQ7QUFBUyxNQUFJLEVBQUMsY0FBZDtBQUE2QixNQUFJLE1BQWpDO0FBQWtD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QUFXLENBQUMzRSxLQUFELENBQVosQ0FBTDtBQUNEO0FBQ0YsQ0FoQk07QUFrQkEsTUFBTWtGLGFBQWEsR0FBRyxPQUFPNUMsTUFBUCxFQUFlNEQsU0FBZixFQUEwQmpGLFdBQTFCLEtBQTBDO0FBQ3JFLE1BQUk7QUFDRixVQUFNeUUsS0FBSyxDQUFDSyxNQUFOLENBQWMsSUFBR3pELE1BQU8sSUFBRzRELFNBQVUsRUFBckMsQ0FBTjtBQUNBakYsZUFBVyxDQUFDd0IsSUFBSSxJQUFJQSxJQUFJLENBQUM1QixNQUFMLENBQVkrQixPQUFPLElBQUlBLE9BQU8sQ0FBQzdCLEdBQVIsS0FBZ0JtRixTQUF2QyxDQUFULENBQVg7QUFDRCxHQUhELENBR0UsT0FBT2xHLEtBQVAsRUFBYztBQUNkMEUsU0FBSyxDQUFDQyxxREFBVyxDQUFDM0UsS0FBRCxDQUFaLENBQUw7QUFDRDtBQUNGLENBUE0sQyIsImZpbGUiOiJjb21wb25lbnRzX0xheW91dF9Ob0RhdGFfanMtY29tcG9uZW50c19MYXlvdXRfVG9hc3RyX2pzLWNvbXBvbmVudHNfUG9zdF9DYXJkUG9zdF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUHJvZmlsZVBvc3RzID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8TWVzc2FnZSBpbmZvIGljb249XCJtZWhcIiBoZWFkZXI9XCJTb3JyeVwiIGNvbnRlbnQ9XCJVc2VyIGhhcyBub3QgcG9zdGVkIGFueXRoaW5nIHlldCFcIiAvPlxyXG4gICAgPEJ1dHRvbiBpY29uPVwibG9uZyBhcnJvdyBhbHRlcm5hdGUgbGVmdFwiIGNvbnRlbnQ9XCJHbyBCYWNrXCIgYXM9XCJhXCIgaHJlZj1cIi9cIiAvPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vRm9sbG93RGF0YSA9ICh7IGZvbGxvd2Vyc0NvbXBvbmVudCwgZm9sbG93aW5nQ29tcG9uZW50IH0pID0+IChcclxuICA8PlxyXG4gICAge2ZvbGxvd2Vyc0NvbXBvbmVudCAmJiAoXHJcbiAgICAgIDxNZXNzYWdlIGljb249XCJ1c2VyIG91dGxpbmVcIiBpbmZvIGNvbnRlbnQ9e2BVc2VyIGRvZXMgbm90IGhhdmUgZm9sbG93ZXJzYH0gLz5cclxuICAgICl9XHJcblxyXG4gICAge2ZvbGxvd2luZ0NvbXBvbmVudCAmJiAoXHJcbiAgICAgIDxNZXNzYWdlIGljb249XCJ1c2VyIG91dGxpbmVcIiBpbmZvIGNvbnRlbnQ9e2BVc2VyIGRvZXMgbm90IGZvbGxvdyBhbnkgdXNlcnNgfSAvPlxyXG4gICAgKX1cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb01lc3NhZ2VzID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlXHJcbiAgICBpbmZvXHJcbiAgICBpY29uPVwidGVsZWdyYW0gcGxhbmVcIlxyXG4gICAgaGVhZGVyPVwiU29ycnlcIlxyXG4gICAgY29udGVudD1cIllvdSBoYXZlIG5vdCBtZXNzYWdlZCBhbnlvbmUgeWV0LlNlYXJjaCBhYm92ZSB0byBtZXNzYWdlIHNvbWVvbmUhXCJcclxuICAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdHMgPSAoKSA9PiAoXHJcbiAgPE1lc3NhZ2VcclxuICAgIGluZm9cclxuICAgIGljb249XCJtZWhcIlxyXG4gICAgaGVhZGVyPVwiSGV5IVwiXHJcbiAgICBjb250ZW50PVwiTm8gUG9zdHMuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBmb2xsb3dlZCBzb21lb25lLlwiXHJcbiAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Byb2ZpbGUgPSAoKSA9PiAoXHJcbiAgPE1lc3NhZ2UgaW5mbyBpY29uPVwibWVoXCIgaGVhZGVyPVwiSGV5IVwiIGNvbnRlbnQ9XCJObyBQcm9maWxlIEZvdW5kLlwiIC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Ob3RpZmljYXRpb25zID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlIGNvbnRlbnQ9XCJObyBOb3RpZmljYXRpb25zXCIgaWNvbj1cInNtaWxlXCIgaW5mbyAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdEZvdW5kID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIkhleSFcIiBjb250ZW50PVwiTm8gUG9zdCBGb3VuZC5cIiAvPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgUGxhY2Vob2xkZXIsXHJcbiAgRGl2aWRlcixcclxuICBMaXN0LFxyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIENvbnRhaW5lcixcclxuICBJY29uXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHJhbmdlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYWNlSG9sZGVyUG9zdHMgPSAoKSA9PlxyXG4gIHJhbmdlKDEsIDMpLm1hcChpdGVtID0+IChcclxuICAgIDxkaXYga2V5PXtpdGVtfT5cclxuICAgICAgPFBsYWNlaG9sZGVyIGZsdWlkPlxyXG4gICAgICAgIDxQbGFjZWhvbGRlci5IZWFkZXIgaW1hZ2U+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxyXG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cclxuICAgICAgICA8L1BsYWNlaG9sZGVyLkhlYWRlcj5cclxuICAgICAgICA8UGxhY2Vob2xkZXIuUGFyYWdyYXBoPlxyXG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cclxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxyXG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cclxuICAgICAgICA8L1BsYWNlaG9sZGVyLlBhcmFncmFwaD5cclxuICAgICAgPC9QbGFjZWhvbGRlcj5cclxuICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICA8L2Rpdj5cclxuICApKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGFjZUhvbGRlclN1Z2dlc3Rpb25zID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8TGlzdC5JdGVtPlxyXG4gICAgICA8Q2FyZCBjb2xvcj1cInJlZFwiPlxyXG4gICAgICAgIDxQbGFjZWhvbGRlcj5cclxuICAgICAgICAgIDxQbGFjZWhvbGRlci5JbWFnZSBzcXVhcmUgLz5cclxuICAgICAgICA8L1BsYWNlaG9sZGVyPlxyXG4gICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXI+XHJcbiAgICAgICAgICAgIDxQbGFjZWhvbGRlci5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPVwibWVkaXVtXCIgLz5cclxuICAgICAgICAgICAgPC9QbGFjZWhvbGRlci5IZWFkZXI+XHJcbiAgICAgICAgICA8L1BsYWNlaG9sZGVyPlxyXG4gICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG5cclxuICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBjaXJjdWxhclxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBpY29uPVwiYWRkIHVzZXJcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiRm9sbG93XCJcclxuICAgICAgICAgICAgY29sb3I9XCJ0d2l0dGVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvTGlzdC5JdGVtPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYWNlSG9sZGVyTm90aWZpY2F0aW9ucyA9ICgpID0+XHJcbiAgcmFuZ2UoMSwgMTApLm1hcChpdGVtID0+IChcclxuICAgIDw+XHJcbiAgICAgIDxQbGFjZWhvbGRlciBrZXk9e2l0ZW19PlxyXG4gICAgICAgIDxQbGFjZWhvbGRlci5IZWFkZXIgaW1hZ2U+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxyXG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cclxuICAgICAgICA8L1BsYWNlaG9sZGVyLkhlYWRlcj5cclxuICAgICAgPC9QbGFjZWhvbGRlcj5cclxuICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICA8Lz5cclxuICApKTtcclxuXHJcbmV4cG9ydCBjb25zdCBFbmRNZXNzYWdlID0gKCkgPT4gKFxyXG4gIDxDb250YWluZXIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICA8SWNvbiBuYW1lPVwicmVmcmVzaFwiIHNpemU9XCJsYXJnZVwiIC8+XHJcbiAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICA8L0NvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMaWtlc1BsYWNlSG9sZGVyID0gKCkgPT5cclxuICByYW5nZSgxLCA2KS5tYXAoaXRlbSA9PiAoXHJcbiAgICA8UGxhY2Vob2xkZXIga2V5PXtpdGVtfSBzdHlsZT17eyBtaW5XaWR0aDogXCIyMDBweFwiIH19PlxyXG4gICAgICA8UGxhY2Vob2xkZXIuSGVhZGVyIGltYWdlPlxyXG4gICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD1cImZ1bGxcIiAvPlxyXG4gICAgICA8L1BsYWNlaG9sZGVyLkhlYWRlcj5cclxuICAgIDwvUGxhY2Vob2xkZXI+XHJcbiAgKSk7XHJcbiIsImltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3REZWxldGVUb2FzdHIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2FzdENvbnRhaW5lclxyXG4gICAgICBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIlxyXG4gICAgICBhdXRvQ2xvc2U9ezMwMDB9XHJcbiAgICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XHJcbiAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cclxuICAgICAgY2xvc2VPbkNsaWNrXHJcbiAgICAgIHJ0bD17ZmFsc2V9XHJcbiAgICAgIHBhdXNlT25Gb2N1c0xvc3NcclxuICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgIHBhdXNlT25Ib3Zlcj17ZmFsc2V9PlxyXG4gICAgICB7dG9hc3QuaW5mbyhcIkRlbGV0ZWQgU3VjY2Vzc2Z1bGx5XCIsIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWRcclxuICAgICAgfSl9XHJcbiAgICA8L1RvYXN0Q29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3JUb2FzdHIgPSAoeyBlcnJvciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2FzdENvbnRhaW5lclxyXG4gICAgICBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIlxyXG4gICAgICBhdXRvQ2xvc2U9ezMwMDB9XHJcbiAgICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XHJcbiAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cclxuICAgICAgY2xvc2VPbkNsaWNrXHJcbiAgICAgIHJ0bD17ZmFsc2V9XHJcbiAgICAgIHBhdXNlT25Gb2N1c0xvc3NcclxuICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgIHBhdXNlT25Ib3Zlcj17ZmFsc2V9PlxyXG4gICAgICB7dG9hc3QuZXJyb3IoZXJyb3IsIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWRcclxuICAgICAgfSl9XHJcbiAgICA8L1RvYXN0Q29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTXNnU2VudFRvYXN0ciA9ICgpID0+IChcclxuICA8VG9hc3RDb250YWluZXJcclxuICAgIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiXHJcbiAgICBhdXRvQ2xvc2U9ezMwMDB9XHJcbiAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxyXG4gICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxyXG4gICAgY2xvc2VPbkNsaWNrXHJcbiAgICBydGw9e2ZhbHNlfVxyXG4gICAgcGF1c2VPbkZvY3VzTG9zc1xyXG4gICAgZHJhZ2dhYmxlXHJcbiAgICBwYXVzZU9uSG92ZXI9e2ZhbHNlfT5cclxuICAgIHt0b2FzdC5zdWNjZXNzKFwiU2VudCBzdWNjZXNzZnVsbHlcIiwge1xyXG4gICAgICBwb3NpdGlvbjogXCJib3R0b20tY2VudGVyXCIsXHJcbiAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWRcclxuICAgIH0pfVxyXG4gIDwvVG9hc3RDb250YWluZXI+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgSWNvbixcclxuICBJbWFnZSxcclxuICBEaXZpZGVyLFxyXG4gIFNlZ21lbnQsXHJcbiAgQnV0dG9uLFxyXG4gIFBvcHVwLFxyXG4gIEhlYWRlcixcclxuICBNb2RhbFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgUG9zdENvbW1lbnRzIGZyb20gXCIuL1Bvc3RDb21tZW50c1wiO1xyXG5pbXBvcnQgQ29tbWVudElucHV0RmllbGQgZnJvbSBcIi4vQ29tbWVudElucHV0RmllbGRcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBkZWxldGVQb3N0LCBsaWtlUG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xyXG5pbXBvcnQgTGlrZXNMaXN0IGZyb20gXCIuL0xpa2VzTGlzdFwiO1xyXG5pbXBvcnQgSW1hZ2VNb2RhbCBmcm9tIFwiLi9JbWFnZU1vZGFsXCI7XHJcbmltcG9ydCBOb0ltYWdlTW9kYWwgZnJvbSBcIi4vTm9JbWFnZU1vZGFsXCI7XHJcblxyXG5mdW5jdGlvbiBDYXJkUG9zdCh7IHBvc3QsIHVzZXIsIHNldFBvc3RzLCBzZXRTaG93VG9hc3RyLCBzb2NrZXQgfSkge1xyXG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGUocG9zdC5saWtlcyk7XHJcblxyXG4gIGNvbnN0IGlzTGlrZWQgPVxyXG4gICAgbGlrZXMubGVuZ3RoID4gMCAmJiBsaWtlcy5maWx0ZXIobGlrZSA9PiBsaWtlLnVzZXIgPT09IHVzZXIuX2lkKS5sZW5ndGggPiAwO1xyXG5cclxuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKHBvc3QuY29tbWVudHMpO1xyXG5cclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vY29uc29sZS5sb2cocG9zdClcclxuXHJcbiAgY29uc3QgYWRkUHJvcHNUb01vZGFsID0gKCkgPT4gKHtcclxuICAgIHBvc3QsXHJcbiAgICB1c2VyLFxyXG4gICAgc2V0TGlrZXMsXHJcbiAgICBsaWtlcyxcclxuICAgIGlzTGlrZWQsXHJcbiAgICBjb21tZW50cyxcclxuICAgIHNldENvbW1lbnRzXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c2hvd01vZGFsICYmIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgIG9wZW49e3Nob3dNb2RhbH1cclxuICAgICAgICAgIGNsb3NlSWNvblxyXG4gICAgICAgICAgY2xvc2VPbkRpbW1lckNsaWNrXHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfT5cclxuICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICB7cG9zdC5waWNVcmwgPyAoXHJcbiAgICAgICAgICAgICAgPEltYWdlTW9kYWwgey4uLmFkZFByb3BzVG9Nb2RhbCgpfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxOb0ltYWdlTW9kYWwgey4uLmFkZFByb3BzVG9Nb2RhbCgpfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8U2VnbWVudCBiYXNpYz5cclxuICAgICAgICA8Q2FyZCBjb2xvcj1cInRlYWxcIiBmbHVpZD5cclxuICAgICAgICAgIHtwb3N0LnBpY1VybCAmJiAoXHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17cG9zdC5waWNVcmx9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgIGZsb2F0ZWQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICB3cmFwcGVkXHJcbiAgICAgICAgICAgICAgdWk9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlBvc3RJbWFnZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICA8SW1hZ2UgZmxvYXRlZD1cImxlZnRcIiBzcmM9e3Bvc3QudXNlci5wcm9maWxlUGljVXJsfSBhdmF0YXIgY2lyY3VsYXIgLz5cclxuXHJcbiAgICAgICAgICAgIHsodXNlci5yb2xlID09PSBcInJvb3RcIiB8fCBwb3N0LnVzZXIuX2lkID09PSB1c2VyLl9pZCkgJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8UG9wdXBcclxuICAgICAgICAgICAgICAgICAgb249XCJjbGlja1wiXHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwidG9wIHJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvZGVsZXRlSWNvbi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1pbmlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDRcIiBjb250ZW50PVwiQXJlIHlvdSBzdXJlP1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlRoaXMgYWN0aW9uIGlzIGlycmV2ZXJzaWJsZSE8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlUG9zdChwb3N0Ll9pZCwgc2V0UG9zdHMsIHNldFNob3dUb2FzdHIpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3B1cD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdC51c2VyLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+e3Bvc3QudXNlci5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8Q2FyZC5NZXRhPntjYWxjdWxhdGVUaW1lKHBvc3QuY3JlYXRlZEF0KX08L0NhcmQuTWV0YT5cclxuXHJcbiAgICAgICAgICAgIHtwb3N0LmxvY2F0aW9uICYmIDxDYXJkLk1ldGEgY29udGVudD17cG9zdC5sb2NhdGlvbn0gLz59XHJcblxyXG4gICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxN3B4XCIsXHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjAuMXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3b3JkU3BhY2luZzogXCIwLjM1cHhcIlxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIHtwb3N0LnRleHR9XHJcbiAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG5cclxuICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgbmFtZT17aXNMaWtlZCA/IFwiaGVhcnRcIiA6IFwiaGVhcnQgb3V0bGluZVwifVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT57XHJcbiAgICAgICAgICAgICAgICBpZihzb2NrZXQuY3VycmVudClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoJ2xpa2VQb3N0Jyx7cG9zdElkOnBvc3QuX2lkLHVzZXJJZDp1c2VyLl9pZCxsaWtlOmlzTGlrZWQ/ZmFsc2U6dHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAgICBzb2NrZXQuY3VycmVudC5vbignUG9zdExpa2VkJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzTGlrZWQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0TGlrZXMocHJldiA9PiBwcmV2LmZpbHRlcihsaWtlPT5saWtlLnVzZXIgIT09IHVzZXIuX2lkKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldExpa2VzKHByZXY9PlsuLi5wcmV2LHt1c2VyOnVzZXIuX2lkfV0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBsaWtlUG9zdChwb3N0Ll9pZCwgdXNlci5faWQsIHNldExpa2VzLCBpc0xpa2VkID8gZmFsc2UgOiB0cnVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8TGlrZXNMaXN0XHJcbiAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICB0cmlnZ2VyPXtcclxuICAgICAgICAgICAgICAgIGxpa2VzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTGlrZXNMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Ake2xpa2VzLmxlbmd0aH0gJHtsaWtlcy5sZW5ndGggPT09IDEgPyBcImxpa2VcIiA6IFwibGlrZXNcIn1gfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBuYW1lPVwiY29tbWVudCBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjdweFwiIH19XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgY29tbWVudHMubWFwKFxyXG4gICAgICAgICAgICAgICAgKGNvbW1lbnQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgIGkgPCAzICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8UG9zdENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDMgJiYgKFxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJWaWV3IE1vcmVcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZWFsXCJcclxuICAgICAgICAgICAgICAgIGJhc2ljXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhclxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuXHJcbiAgICAgICAgICAgIDxDb21tZW50SW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICBzZXRDb21tZW50cz17c2V0Q29tbWVudHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvU2VnbWVudD5cclxuICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUG9zdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgcG9zdENvbW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIENvbW1lbnRJbnB1dEZpZWxkKHsgcG9zdElkLCB1c2VyLCBzZXRDb21tZW50cyB9KSB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgcmVwbHlcclxuICAgICAgb25TdWJtaXQ9e2FzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGF3YWl0IHBvc3RDb21tZW50KHBvc3RJZCwgdXNlciwgdGV4dCwgc2V0Q29tbWVudHMsIHNldFRleHQpO1xyXG5cclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfX0+XHJcbiAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgQ29tbWVudFwiXHJcbiAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICBjb2xvcjogXCJibHVlXCIsXHJcbiAgICAgICAgICBpY29uOiBcImVkaXRcIixcclxuICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXHJcbiAgICAgICAgICBkaXNhYmxlZDogdGV4dCA9PT0gXCJcIiB8fCBsb2FkaW5nXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50SW5wdXRGaWVsZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNb2RhbCwgR3JpZCwgSW1hZ2UsIENhcmQsIEljb24sIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IFBvc3RDb21tZW50cyBmcm9tIFwiLi9Qb3N0Q29tbWVudHNcIjtcclxuaW1wb3J0IENvbW1lbnRJbnB1dEZpZWxkIGZyb20gXCIuL0NvbW1lbnRJbnB1dEZpZWxkXCI7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgbGlrZVBvc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcclxuaW1wb3J0IExpa2VzTGlzdCBmcm9tIFwiLi9MaWtlc0xpc3RcIjtcclxuXHJcbmZ1bmN0aW9uIEltYWdlTW9kYWwoe1xyXG4gIHBvc3QsXHJcbiAgdXNlcixcclxuICBzZXRMaWtlcyxcclxuICBsaWtlcyxcclxuICBpc0xpa2VkLFxyXG4gIGNvbW1lbnRzLFxyXG4gIHNldENvbW1lbnRzXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdyaWQgY29sdW1ucz17Mn0gc3RhY2thYmxlIHJlbGF4ZWQ+XHJcbiAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPE1vZGFsLkNvbnRlbnQgaW1hZ2U+XHJcbiAgICAgICAgICAgIDxJbWFnZSB3cmFwcGVkIHNpemU9XCJsYXJnZVwiIHNyYz17cG9zdC5waWNVcmx9IC8+XHJcbiAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPENhcmQgZmx1aWQ+XHJcbiAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPEltYWdlIGZsb2F0ZWQ9XCJsZWZ0XCIgYXZhdGFyIHNyYz17cG9zdC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPntwb3N0LnVzZXIubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgPENhcmQuTWV0YT57Y2FsY3VsYXRlVGltZShwb3N0LmNyZWF0ZWRBdCl9PC9DYXJkLk1ldGE+XHJcblxyXG4gICAgICAgICAgICAgIHtwb3N0LmxvY2F0aW9uICYmIDxDYXJkLk1ldGEgY29udGVudD17cG9zdC5sb2NhdGlvbn0gLz59XHJcblxyXG4gICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxN3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4xcHhcIixcclxuICAgICAgICAgICAgICAgICAgd29yZFNwYWNpbmc6IFwiMC4zNXB4XCJcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAge3Bvc3QudGV4dH1cclxuICAgICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG5cclxuICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgbmFtZT17aXNMaWtlZCA/IFwiaGVhcnRcIiA6IFwiaGVhcnQgb3V0bGluZVwifVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgbGlrZVBvc3QocG9zdC5faWQsIHVzZXIuX2lkLCBzZXRMaWtlcywgaXNMaWtlZCA/IGZhbHNlIDogdHJ1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8TGlrZXNMaXN0XHJcbiAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcj17XHJcbiAgICAgICAgICAgICAgICAgIGxpa2VzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5MaWtlc0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtgJHtsaWtlcy5sZW5ndGh9ICR7bGlrZXMubGVuZ3RoID09PSAxID8gXCJsaWtlXCIgOiBcImxpa2VzXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvbW1lbnRzLmxlbmd0aCA+IDIgPyBcIjIwMHB4XCIgOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnRzLm1hcChjb21tZW50ID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8UG9zdENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8Q29tbWVudElucHV0RmllbGRcclxuICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlTW9kYWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaXN0LCBQb3B1cCwgSW1hZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSBcIi4uLy4uL3V0aWxzL2NhdGNoRXJyb3JzXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMaWtlc1BsYWNlSG9sZGVyIH0gZnJvbSBcIi4uL0xheW91dC9QbGFjZUhvbGRlckdyb3VwXCI7XHJcblxyXG5mdW5jdGlvbiBMaWtlc0xpc3QoeyBwb3N0SWQsIHRyaWdnZXIgfSkge1xyXG4gIGNvbnN0IFtsaWtlc0xpc3QsIHNldExpa2VzTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBnZXRMaWtlc0xpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wb3N0cy9saWtlLyR7cG9zdElkfWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRMaWtlc0xpc3QocmVzLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UG9wdXBcclxuICAgICAgb249XCJjbGlja1wiXHJcbiAgICAgIG9uQ2xvc2U9eygpID0+IHNldExpa2VzTGlzdChbXSl9XHJcbiAgICAgIG9uT3Blbj17Z2V0TGlrZXNMaXN0fVxyXG4gICAgICBwb3BwZXJEZXBlbmRlbmNpZXM9e1tsaWtlc0xpc3RdfVxyXG4gICAgICB0cmlnZ2VyPXt0cmlnZ2VyfVxyXG4gICAgICB3aWRlPlxyXG4gICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICA8TGlrZXNQbGFjZUhvbGRlciAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7bGlrZXNMaXN0Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cmVtXCIsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIyMTBweFwiXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgPExpc3Qgc2VsZWN0aW9uIHNpemU9XCJsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAge2xpa2VzTGlzdC5tYXAobGlrZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXtsaWtlLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGF2YXRhciBzcmM9e2xpa2UudXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvJHtsaWtlLnVzZXIudXNlcm5hbWV9YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2xpa2UudXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvUG9wdXA+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlrZXNMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1vZGFsLCBJbWFnZSwgQ2FyZCwgSWNvbiwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgUG9zdENvbW1lbnRzIGZyb20gXCIuL1Bvc3RDb21tZW50c1wiO1xyXG5pbXBvcnQgQ29tbWVudElucHV0RmllbGQgZnJvbSBcIi4vQ29tbWVudElucHV0RmllbGRcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBsaWtlUG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xyXG5pbXBvcnQgTGlrZXNMaXN0IGZyb20gXCIuL0xpa2VzTGlzdFwiO1xyXG5cclxuZnVuY3Rpb24gTm9JbWFnZU1vZGFsKHtcclxuICBwb3N0LFxyXG4gIHVzZXIsXHJcbiAgc2V0TGlrZXMsXHJcbiAgbGlrZXMsXHJcbiAgaXNMaWtlZCxcclxuICBjb21tZW50cyxcclxuICBzZXRDb21tZW50c1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGZsdWlkPlxyXG4gICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgIDxJbWFnZSBmbG9hdGVkPVwibGVmdFwiIGF2YXRhciBzcmM9e3Bvc3QudXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG5cclxuICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdC51c2VyLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICA8YT57cG9zdC51c2VyLm5hbWV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcblxyXG4gICAgICAgIDxDYXJkLk1ldGE+e2NhbGN1bGF0ZVRpbWUocG9zdC5jcmVhdGVkQXQpfTwvQ2FyZC5NZXRhPlxyXG5cclxuICAgICAgICB7cG9zdC5sb2NhdGlvbiAmJiA8Q2FyZC5NZXRhIGNvbnRlbnQ9e3Bvc3QubG9jYXRpb259IC8+fVxyXG5cclxuICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvblxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxyXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjAuMXB4XCIsXHJcbiAgICAgICAgICAgIHdvcmRTcGFjaW5nOiBcIjAuMzVweFwiXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHtwb3N0LnRleHR9XHJcbiAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICA8L0NhcmQuQ29udGVudD5cclxuXHJcbiAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XHJcbiAgICAgICAgPEljb25cclxuICAgICAgICAgIG5hbWU9e2lzTGlrZWQgPyBcImhlYXJ0XCIgOiBcImhlYXJ0IG91dGxpbmVcIn1cclxuICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIGxpa2VQb3N0KHBvc3QuX2lkLCB1c2VyLl9pZCwgc2V0TGlrZXMsIGlzTGlrZWQgPyBmYWxzZSA6IHRydWUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPExpa2VzTGlzdFxyXG4gICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICBsaWtlcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTGlrZXNMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7YCR7bGlrZXMubGVuZ3RofSAke2xpa2VzLmxlbmd0aCA9PT0gMSA/IFwibGlrZVwiIDogXCJsaWtlc1wifWB9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBjb21tZW50cy5sZW5ndGggPiAyID8gXCIyMDBweFwiIDogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIlxyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICBjb21tZW50cy5tYXAoY29tbWVudCA9PiAoXHJcbiAgICAgICAgICAgICAgPFBvc3RDb21tZW50c1xyXG4gICAgICAgICAgICAgICAga2V5PXtjb21tZW50Ll9pZH1cclxuICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPENvbW1lbnRJbnB1dEZpZWxkIHBvc3RJZD17cG9zdC5faWR9IHVzZXI9e3VzZXJ9IHNldENvbW1lbnRzPXtzZXRDb21tZW50c30gLz5cclxuICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm9JbWFnZU1vZGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29tbWVudCwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xyXG5pbXBvcnQgeyBkZWxldGVDb21tZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBQb3N0Q29tbWVudHMoeyBjb21tZW50LCB1c2VyLCBzZXRDb21tZW50cywgcG9zdElkIH0pIHtcclxuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb21tZW50Lkdyb3VwPlxyXG4gICAgICAgIDxDb21tZW50PlxyXG4gICAgICAgICAgPENvbW1lbnQuQXZhdGFyIHNyYz17Y29tbWVudC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgICA8Q29tbWVudC5Db250ZW50PlxyXG4gICAgICAgICAgICA8Q29tbWVudC5BdXRob3IgYXM9XCJhXCIgaHJlZj17YC8ke2NvbW1lbnQudXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICB7Y29tbWVudC51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgIDwvQ29tbWVudC5BdXRob3I+XHJcbiAgICAgICAgICAgIDxDb21tZW50Lk1ldGFkYXRhPntjYWxjdWxhdGVUaW1lKGNvbW1lbnQuZGF0ZSl9PC9Db21tZW50Lk1ldGFkYXRhPlxyXG5cclxuICAgICAgICAgICAgPENvbW1lbnQuVGV4dD57Y29tbWVudC50ZXh0fTwvQ29tbWVudC5UZXh0PlxyXG5cclxuICAgICAgICAgICAgPENvbW1lbnQuQWN0aW9ucz5cclxuICAgICAgICAgICAgICA8Q29tbWVudC5BY3Rpb24+XHJcbiAgICAgICAgICAgICAgICB7KHVzZXIucm9sZSA9PT0gXCJyb290XCIgfHwgY29tbWVudC51c2VyLl9pZCA9PT0gdXNlci5faWQpICYmIChcclxuICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RGlzYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZWxldGVDb21tZW50KHBvc3RJZCwgY29tbWVudC5faWQsIHNldENvbW1lbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0NvbW1lbnQuQWN0aW9uPlxyXG4gICAgICAgICAgICA8L0NvbW1lbnQuQWN0aW9ucz5cclxuICAgICAgICAgIDwvQ29tbWVudC5Db250ZW50PlxyXG4gICAgICAgIDwvQ29tbWVudD5cclxuICAgICAgPC9Db21tZW50Lkdyb3VwPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENvbW1lbnRzO1xyXG4iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50J1xyXG5cclxuY29uc3QgY2FsY3VsYXRlVGltZSA9Y3JlYXRlZEF0PT57XHJcbiAgICBjb25zdCB0b2RheT1tb21lbnQoRGF0ZS5ub3coKSlcclxuICAgIGNvbnN0IHBvc3REYXRlPW1vbWVudChjcmVhdGVkQXQpXHJcbiAgICBjb25zdCBkaWZmSW5Ib3Vycz10b2RheS5kaWZmKHBvc3REYXRlLFwiaG91cnNcIilcclxuXHJcbiAgICBpZihkaWZmSW5Ib3VyczwyNClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIFRvZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlmZkluSG91cnM+MjQmJmRpZmZJbkhvdXJzPDM2KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgWWVzdGVyZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlmZkluSG91cnM+MzYpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TW9tZW50IGZvcm1hdD1cIkREL01NL1lZWVkgaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FsY3VsYXRlVGltZSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xyXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSBcIi4vY2F0Y2hFcnJvcnNcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCxcclxuICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1Ym1pdE5ld1Bvc3QgPSBhc3luYyAoXHJcbiAgdGV4dCxcclxuICBsb2NhdGlvbixcclxuICBwaWNVcmwsXHJcbiAgc2V0UG9zdHMsXHJcbiAgc2V0TmV3UG9zdCxcclxuICBzZXRFcnJvclxyXG4pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQXhpb3MucG9zdChcIi9cIiwgeyB0ZXh0LCBsb2NhdGlvbiwgcGljVXJsIH0pO1xyXG5cclxuICAgIHNldFBvc3RzKHByZXYgPT4gW3Jlcy5kYXRhLCAuLi5wcmV2XSk7XHJcbiAgICBzZXROZXdQb3N0KHsgdGV4dDogXCJcIiwgbG9jYXRpb246IFwiXCIgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnN0IGVycm9yTXNnID0gY2F0Y2hFcnJvcnMoZXJyb3IpO1xyXG4gICAgc2V0RXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVQb3N0ID0gYXN5bmMgKHBvc3RJZCwgc2V0UG9zdHMsIHNldFNob3dUb2FzdHIpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MuZGVsZXRlKGAvJHtwb3N0SWR9YCk7XHJcbiAgICBzZXRQb3N0cyhwcmV2ID0+IHByZXYuZmlsdGVyKHBvc3QgPT4gcG9zdC5faWQgIT09IHBvc3RJZCkpO1xyXG4gICAgc2V0U2hvd1RvYXN0cih0cnVlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlrZVBvc3QgPSBhc3luYyAocG9zdElkLCB1c2VySWQsIHNldExpa2VzLCBsaWtlID0gdHJ1ZSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAobGlrZSkge1xyXG4gICAgICBhd2FpdCBBeGlvcy5wb3N0KGAvbGlrZS8ke3Bvc3RJZH1gKTtcclxuICAgICAgc2V0TGlrZXMocHJldiA9PiBbLi4ucHJldiwgeyB1c2VyOiB1c2VySWQgfV0pO1xyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIGVsc2UgaWYgKCFsaWtlKSB7XHJcbiAgICAgIGF3YWl0IEF4aW9zLnB1dChgL3VubGlrZS8ke3Bvc3RJZH1gKTtcclxuICAgICAgc2V0TGlrZXMocHJldiA9PiBwcmV2LmZpbHRlcihsaWtlID0+IGxpa2UudXNlciAhPT0gdXNlcklkKSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RDb21tZW50ID0gYXN5bmMgKHBvc3RJZCwgdXNlciwgdGV4dCwgc2V0Q29tbWVudHMsIHNldFRleHQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQXhpb3MucG9zdChgL2NvbW1lbnQvJHtwb3N0SWR9YCwgeyB0ZXh0IH0pO1xyXG5cclxuICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XHJcbiAgICAgIF9pZDogcmVzLmRhdGEsXHJcbiAgICAgIHVzZXIsXHJcbiAgICAgIHRleHQsXHJcbiAgICAgIGRhdGU6IERhdGUubm93KClcclxuICAgIH07XHJcblxyXG4gICAgc2V0Q29tbWVudHMocHJldiA9PiBbbmV3Q29tbWVudCwgLi4ucHJldl0pO1xyXG4gICAgc2V0VGV4dChcIlwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ29tbWVudCA9IGFzeW5jIChwb3N0SWQsIGNvbW1lbnRJZCwgc2V0Q29tbWVudHMpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MuZGVsZXRlKGAvJHtwb3N0SWR9LyR7Y29tbWVudElkfWApO1xyXG4gICAgc2V0Q29tbWVudHMocHJldiA9PiBwcmV2LmZpbHRlcihjb21tZW50ID0+IGNvbW1lbnQuX2lkICE9PSBjb21tZW50SWQpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=