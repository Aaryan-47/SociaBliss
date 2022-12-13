exports.id = 507;
exports.ids = [507];
exports.modules = {

/***/ 899:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pj": function() { return /* binding */ PlaceHolderPosts; },
/* harmony export */   "SC": function() { return /* binding */ EndMessage; },
/* harmony export */   "vK": function() { return /* binding */ LikesPlaceHolder; }
/* harmony export */ });
/* unused harmony exports PlaceHolderSuggestions, PlaceHolderNotifications */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1347);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3804);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const PlaceHolderPosts = () => (0,lodash__WEBPACK_IMPORTED_MODULE_2__.range)(1, 3).map(item => __jsx("div", {
  key: item
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
  fluid: true
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Header, {
  image: true
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, null)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Paragraph, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, null))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
  hidden: true
})));
const PlaceHolderSuggestions = () => __jsx(React.Fragment, null, __jsx(List.Item, null, __jsx(Card, {
  color: "red"
}, __jsx(Placeholder, null, __jsx(Placeholder.Image, {
  square: true
})), __jsx(Card.Content, null, __jsx(Placeholder, null, __jsx(Placeholder.Header, null, __jsx(Placeholder.Line, {
  length: "medium"
})))), __jsx(Card.Content, {
  extra: true
}, __jsx(Button, {
  disabled: true,
  circular: true,
  size: "small",
  icon: "add user",
  content: "Follow",
  color: "twitter"
})))));
const PlaceHolderNotifications = () => range(1, 10).map(item => __jsx(React.Fragment, null, __jsx(Placeholder, {
  key: item
}, __jsx(Placeholder.Header, {
  image: true
}, __jsx(Placeholder.Line, null), __jsx(Placeholder.Line, null))), __jsx(Divider, {
  hidden: true
})));
const EndMessage = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
  textAlign: "center"
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  name: "refresh",
  size: "large"
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
  hidden: true
}));
const LikesPlaceHolder = () => (0,lodash__WEBPACK_IMPORTED_MODULE_2__.range)(1, 6).map(item => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
  key: item,
  style: {
    minWidth: "200px"
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Header, {
  image: true
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Placeholder.Line, {
  length: "full"
}))));

/***/ }),

/***/ 139:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1347);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7037);
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
      await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_2__/* .postComment */ .w)(postId, user, text, setComments, setText);
      setLoading(false);
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
    }
  }));
}

/* harmony default export */ __webpack_exports__["Z"] = (CommentInputField);

/***/ }),

/***/ 1309:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1347);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4953);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3844);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(899);
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
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get("token")
        }
      });
      setLikesList(res.data);
    } catch (error) {
      alert((0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(error));
    }

    setLoading(false);
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Popup, {
    on: "click",
    onClose: () => setLikesList([]),
    onOpen: getLikesList,
    popperDependencies: [likesList],
    trigger: trigger,
    wide: true
  }, loading ? __jsx(_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_6__/* .LikesPlaceHolder */ .vK, null) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, likesList.length > 0 && __jsx("div", {
    style: {
      overflow: "auto",
      maxHeight: "15rem",
      height: "15rem",
      minWidth: "210px"
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
    selection: true,
    size: "large"
  }, likesList.map(like => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    key: like._id
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    avatar: true,
    src: like.user.profilePicUrl
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_5___default().push(`/${like.user.username}`),
    as: "a",
    content: like.user.name
  }))))))));
}

/* harmony default export */ __webpack_exports__["Z"] = (LikesList);

/***/ }),

/***/ 6778:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1347);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1715);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7037);
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
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Group, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Avatar, {
    src: comment.user.profilePicUrl
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Author, {
    as: "a",
    href: `/${comment.user.username}`
  }, comment.user.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Metadata, null, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(comment.date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Text, null, comment.text), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Actions, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Action, null, (user.role === "root" || comment.user._id === user._id) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    disabled: disabled,
    color: "red",
    name: "trash",
    onClick: async () => {
      setDisabled(true);
      await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_3__/* .deleteComment */ .YF)(postId, comment._id, setComments);
      setDisabled(false);
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["Z"] = (PostComments);

/***/ }),

/***/ 3844:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["Z"] = (catchErrors);

/***/ }),

/***/ 7037:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hD": function() { return /* binding */ submitNewPost; },
/* harmony export */   "fR": function() { return /* binding */ deletePost; },
/* harmony export */   "n9": function() { return /* binding */ likePost; },
/* harmony export */   "w": function() { return /* binding */ postComment; },
/* harmony export */   "YF": function() { return /* binding */ deleteComment; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4953);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3844);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);




const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: `${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/posts`,
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("token")
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
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(error);
    setError(errorMsg);
  }
};
const deletePost = async (postId, setPosts, setShowToastr) => {
  try {
    await Axios.delete(`/${postId}`);
    setPosts(prev => prev.filter(post => post._id !== postId));
    setShowToastr(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(error));
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
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(error));
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
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(error));
  }
};
const deleteComment = async (postId, commentId, setComments) => {
  try {
    await Axios.delete(`/${postId}/${commentId}`);
    setComments(prev => prev.filter(comment => comment._id !== commentId));
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(error));
  }
};

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;