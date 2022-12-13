exports.id = 168;
exports.ids = [168];
exports.modules = {

/***/ 9748:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g0": function() { return /* binding */ PostDeleteToastr; }
/* harmony export */ });
/* unused harmony exports ErrorToastr, MsgSentToastr */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);

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
    pauseOnHover: false
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
  return __jsx(ToastContainer, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false
  }, toast.error(error, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  }));
};
const MsgSentToastr = () => __jsx(ToastContainer, {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: false
}, toast.success("Sent successfully", {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined
}));

/***/ }),

/***/ 705:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Post_CardPost; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1347);
// EXTERNAL MODULE: ./components/Post/PostComments.js
var PostComments = __webpack_require__(6778);
// EXTERNAL MODULE: ./components/Post/CommentInputField.js
var CommentInputField = __webpack_require__(139);
// EXTERNAL MODULE: ./utils/calculateTime.js
var calculateTime = __webpack_require__(1715);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utils/postActions.js
var postActions = __webpack_require__(7037);
// EXTERNAL MODULE: ./components/Post/LikesList.js
var LikesList = __webpack_require__(1309);
;// CONCATENATED MODULE: ./components/Post/ImageModal.js
var __jsx = (external_react_default()).createElement;









function ImageModal({
  post,
  user,
  setLikes,
  likes,
  isLiked,
  comments,
  setComments
}) {
  return __jsx((external_react_default()).Fragment, null, __jsx(external_semantic_ui_react_.Grid, {
    columns: 2,
    stackable: true,
    relaxed: true
  }, __jsx(external_semantic_ui_react_.Grid.Column, null, __jsx(external_semantic_ui_react_.Modal.Content, {
    image: true
  }, __jsx(external_semantic_ui_react_.Image, {
    wrapped: true,
    size: "large",
    src: post.picUrl
  }))), __jsx(external_semantic_ui_react_.Grid.Column, null, __jsx(external_semantic_ui_react_.Card, {
    fluid: true
  }, __jsx(external_semantic_ui_react_.Card.Content, null, __jsx(external_semantic_ui_react_.Image, {
    floated: "left",
    avatar: true,
    src: post.user.profilePicUrl
  }), __jsx(external_semantic_ui_react_.Card.Header, null, __jsx(next_link.default, {
    href: `/${post.user.username}`
  }, __jsx("a", null, post.user.name))), __jsx(external_semantic_ui_react_.Card.Meta, null, (0,calculateTime/* default */.Z)(post.createdAt)), post.location && __jsx(external_semantic_ui_react_.Card.Meta, {
    content: post.location
  }), __jsx(external_semantic_ui_react_.Card.Description, {
    style: {
      fontSize: "17px",
      letterSpacing: "0.1px",
      wordSpacing: "0.35px"
    }
  }, post.text)), __jsx(external_semantic_ui_react_.Card.Content, {
    extra: true
  }, __jsx(external_semantic_ui_react_.Icon, {
    name: isLiked ? "heart" : "heart outline",
    color: "red",
    style: {
      cursor: "pointer"
    },
    onClick: () => (0,postActions/* likePost */.n9)(post._id, user._id, setLikes, isLiked ? false : true)
  }), __jsx(LikesList/* default */.Z, {
    postId: post._id,
    trigger: likes.length > 0 && __jsx("span", {
      className: "spanLikesList"
    }, `${likes.length} ${likes.length === 1 ? "like" : "likes"}`)
  }), __jsx(external_semantic_ui_react_.Divider, {
    hidden: true
  }), __jsx("div", {
    style: {
      overflow: "auto",
      height: comments.length > 2 ? "200px" : "60px",
      marginBottom: "8px"
    }
  }, comments.length > 0 && comments.map(comment => __jsx(PostComments/* default */.Z, {
    key: comment._id,
    comment: comment,
    postId: post._id,
    user: user,
    setComments: setComments
  }))), __jsx(CommentInputField/* default */.Z, {
    postId: post._id,
    user: user,
    setComments: setComments
  }))))));
}

/* harmony default export */ var Post_ImageModal = (ImageModal);
;// CONCATENATED MODULE: ./components/Post/NoImageModal.js
var NoImageModal_jsx = (external_react_default()).createElement;









function NoImageModal({
  post,
  user,
  setLikes,
  likes,
  isLiked,
  comments,
  setComments
}) {
  return NoImageModal_jsx(external_semantic_ui_react_.Card, {
    fluid: true
  }, NoImageModal_jsx(external_semantic_ui_react_.Card.Content, null, NoImageModal_jsx(external_semantic_ui_react_.Image, {
    floated: "left",
    avatar: true,
    src: post.user.profilePicUrl
  }), NoImageModal_jsx(external_semantic_ui_react_.Card.Header, null, NoImageModal_jsx(next_link.default, {
    href: `/${post.user.username}`
  }, NoImageModal_jsx("a", null, post.user.name))), NoImageModal_jsx(external_semantic_ui_react_.Card.Meta, null, (0,calculateTime/* default */.Z)(post.createdAt)), post.location && NoImageModal_jsx(external_semantic_ui_react_.Card.Meta, {
    content: post.location
  }), NoImageModal_jsx(external_semantic_ui_react_.Card.Description, {
    style: {
      fontSize: "17px",
      letterSpacing: "0.1px",
      wordSpacing: "0.35px"
    }
  }, post.text)), NoImageModal_jsx(external_semantic_ui_react_.Card.Content, {
    extra: true
  }, NoImageModal_jsx(external_semantic_ui_react_.Icon, {
    name: isLiked ? "heart" : "heart outline",
    color: "red",
    style: {
      cursor: "pointer"
    },
    onClick: () => (0,postActions/* likePost */.n9)(post._id, user._id, setLikes, isLiked ? false : true)
  }), NoImageModal_jsx(LikesList/* default */.Z, {
    postId: post._id,
    trigger: likes.length > 0 && NoImageModal_jsx("span", {
      className: "spanLikesList"
    }, `${likes.length} ${likes.length === 1 ? "like" : "likes"}`)
  }), NoImageModal_jsx(external_semantic_ui_react_.Divider, {
    hidden: true
  }), NoImageModal_jsx("div", {
    style: {
      overflow: "auto",
      height: comments.length > 2 ? "200px" : "60px",
      marginBottom: "8px"
    }
  }, comments.length > 0 && comments.map(comment => NoImageModal_jsx(PostComments/* default */.Z, {
    key: comment._id,
    comment: comment,
    postId: post._id,
    user: user,
    setComments: setComments
  }))), NoImageModal_jsx(CommentInputField/* default */.Z, {
    postId: post._id,
    user: user,
    setComments: setComments
  })));
}

/* harmony default export */ var Post_NoImageModal = (NoImageModal);
;// CONCATENATED MODULE: ./components/Post/CardPost.js
var CardPost_jsx = (external_react_default()).createElement;











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
  } = (0,external_react_.useState)(post.likes);
  const isLiked = likes.length > 0 && likes.filter(like => like.user === user._id).length > 0;
  const {
    0: comments,
    1: setComments
  } = (0,external_react_.useState)(post.comments);
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)(null);
  const {
    0: showModal,
    1: setShowModal
  } = (0,external_react_.useState)(false); //console.log(post)

  const addPropsToModal = () => ({
    post,
    user,
    setLikes,
    likes,
    isLiked,
    comments,
    setComments
  });

  return CardPost_jsx((external_react_default()).Fragment, null, showModal && CardPost_jsx(external_semantic_ui_react_.Modal, {
    open: showModal,
    closeIcon: true,
    closeOnDimmerClick: true,
    onClose: () => setShowModal(false)
  }, CardPost_jsx(external_semantic_ui_react_.Modal.Content, null, post.picUrl ? CardPost_jsx(Post_ImageModal, addPropsToModal()) : CardPost_jsx(Post_NoImageModal, addPropsToModal()))), CardPost_jsx(external_semantic_ui_react_.Segment, {
    basic: true
  }, CardPost_jsx(external_semantic_ui_react_.Card, {
    color: "teal",
    fluid: true
  }, post.picUrl && CardPost_jsx(external_semantic_ui_react_.Image, {
    src: post.picUrl,
    style: {
      cursor: "pointer"
    },
    floated: "left",
    wrapped: true,
    ui: false,
    alt: "PostImage",
    onClick: () => setShowModal(true)
  }), CardPost_jsx(external_semantic_ui_react_.Card.Content, null, CardPost_jsx(external_semantic_ui_react_.Image, {
    floated: "left",
    src: post.user.profilePicUrl,
    avatar: true,
    circular: true
  }), (user.role === "root" || post.user._id === user._id) && CardPost_jsx((external_react_default()).Fragment, null, CardPost_jsx(external_semantic_ui_react_.Popup, {
    on: "click",
    position: "top right",
    trigger: CardPost_jsx(external_semantic_ui_react_.Image, {
      src: "/deleteIcon.svg",
      style: {
        cursor: "pointer"
      },
      size: "mini",
      floated: "right"
    })
  }, CardPost_jsx(external_semantic_ui_react_.Header, {
    as: "h4",
    content: "Are you sure?"
  }), CardPost_jsx("p", null, "This action is irreversible!"), CardPost_jsx(external_semantic_ui_react_.Button, {
    color: "red",
    icon: "trash",
    content: "Delete",
    onClick: () => (0,postActions/* deletePost */.fR)(post._id, setPosts, setShowToastr)
  }))), CardPost_jsx(external_semantic_ui_react_.Card.Header, null, CardPost_jsx(next_link.default, {
    href: `/${post.user.username}`
  }, CardPost_jsx("a", null, post.user.name))), CardPost_jsx(external_semantic_ui_react_.Card.Meta, null, (0,calculateTime/* default */.Z)(post.createdAt)), post.location && CardPost_jsx(external_semantic_ui_react_.Card.Meta, {
    content: post.location
  }), CardPost_jsx(external_semantic_ui_react_.Card.Description, {
    style: {
      fontSize: "17px",
      letterSpacing: "0.1px",
      wordSpacing: "0.35px"
    }
  }, post.text)), CardPost_jsx(external_semantic_ui_react_.Card.Content, {
    extra: true
  }, CardPost_jsx(external_semantic_ui_react_.Icon, {
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
        (0,postActions/* likePost */.n9)(post._id, user._id, setLikes, isLiked ? false : true);
      }
    }
  }), CardPost_jsx(LikesList/* default */.Z, {
    postId: post._id,
    trigger: likes.length > 0 && CardPost_jsx("span", {
      className: "spanLikesList"
    }, `${likes.length} ${likes.length === 1 ? "like" : "likes"}`)
  }), CardPost_jsx(external_semantic_ui_react_.Icon, {
    name: "comment outline",
    style: {
      marginLeft: "7px"
    },
    color: "blue"
  }), comments.length > 0 && comments.map((comment, i) => i < 3 && CardPost_jsx(PostComments/* default */.Z, {
    key: comment._id,
    comment: comment,
    postId: post._id,
    user: user,
    setComments: setComments
  })), comments.length > 3 && CardPost_jsx(external_semantic_ui_react_.Button, {
    content: "View More",
    color: "teal",
    basic: true,
    circular: true,
    onClick: () => setShowModal(true)
  }), CardPost_jsx(external_semantic_ui_react_.Divider, {
    hidden: true
  }), CardPost_jsx(CommentInputField/* default */.Z, {
    user: user,
    postId: post._id,
    setComments: setComments
  })))), CardPost_jsx(external_semantic_ui_react_.Divider, {
    hidden: true
  }));
}

/* harmony default export */ var Post_CardPost = (CardPost);

/***/ })

};
;