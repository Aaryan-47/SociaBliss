(function() {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 6103:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5998);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1347);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Post_PostComments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6778);
/* harmony import */ var _components_Post_CommentInputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(139);
/* harmony import */ var _components_Post_LikesList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1309);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7037);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1715);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4953);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6048);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);













function PostPage({
  post,
  errorLoading,
  user
}) {
  if (errorLoading) {
    return __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_11__/* .NoPostFound */ .L$, null);
  }

  const {
    0: likes,
    1: setLikes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(post.likes);
  const isLiked = likes.length > 0 && likes.filter(like => like.user === user._id).length > 0;
  const {
    0: comments,
    1: setComments
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(post.comments);
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
    text: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {
    basic: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card, {
    color: "teal",
    fluid: true
  }, post.picUrl && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
    src: post.picUrl,
    style: {
      cursor: "pointer"
    },
    floated: "left",
    wrapped: true,
    ui: false,
    alt: "PostImage",
    onClick: () => setShowModal(true)
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
    floated: "left",
    src: post.user.profilePicUrl,
    avatar: true,
    circular: true
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Header, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7__.default, {
    href: `/${post.user.username}`
  }, __jsx("a", null, post.user.name))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Meta, null, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(post.createdAt)), post.location && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Meta, {
    content: post.location
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Description, {
    style: {
      fontSize: "17px",
      letterSpacing: "0.1px",
      wordSpacing: "0.35px"
    }
  }, post.text)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Content, {
    extra: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    name: isLiked ? "heart" : "heart outline",
    color: "red",
    style: {
      cursor: "pointer"
    },
    onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_8__/* .likePost */ .n9)(post._id, user._id, setLikes, isLiked ? false : true)
  }), __jsx(_components_Post_LikesList__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    postId: post._id,
    trigger: likes.length > 0 && __jsx("span", {
      className: "spanLikesList"
    }, `${likes.length} ${likes.length === 1 ? "like" : "likes"}`)
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    name: "comment outline",
    style: {
      marginLeft: "7px"
    },
    color: "blue"
  }), comments.length > 0 && comments.map(comment => __jsx(_components_Post_PostComments__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    key: comment._id,
    comment: comment,
    postId: post._id,
    user: user,
    setComments: setComments
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Divider, {
    hidden: true
  }), __jsx(_components_Post_CommentInputField__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    user: user,
    postId: post._id,
    setComments: setComments
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Divider, {
    hidden: true
  }));
}

PostPage.getInitialProps = async ctx => {
  try {
    const {
      postId
    } = ctx.query;
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_10___default())}/api/posts/${postId}`, {
      headers: {
        Authorization: token
      }
    });
    return {
      post: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (PostPage);

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

/***/ 3804:
/***/ (function(module) {

"use strict";
module.exports = require("lodash");;

/***/ }),

/***/ 2470:
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,880,585,194], function() { return __webpack_exec__(6103); });
module.exports = __webpack_exports__;

})();