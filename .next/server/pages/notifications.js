(function() {
var exports = {};
exports.id = 769;
exports.ids = [769];
exports.modules = {

/***/ 438:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ notifications; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1347);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(4953);
var baseUrl_default = /*#__PURE__*/__webpack_require__.n(baseUrl);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(5998);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: ./components/Layout/NoData.js
var NoData = __webpack_require__(6048);
// EXTERNAL MODULE: ./utils/calculateTime.js
var calculateTime = __webpack_require__(1715);
;// CONCATENATED MODULE: ./components/Notifications/LikeNotification.js
var __jsx = (external_react_default()).createElement;




function LikeNotification({
  notification
}) {
  return __jsx((external_react_default()).Fragment, null, __jsx(external_semantic_ui_react_.Feed.Event, null, __jsx(external_semantic_ui_react_.Feed.Label, {
    image: notification.user.profilePicUrl
  }), __jsx(external_semantic_ui_react_.Feed.Content, null, __jsx(external_semantic_ui_react_.Feed.Summary, null, __jsx((external_react_default()).Fragment, null, __jsx(external_semantic_ui_react_.Feed.User, {
    as: "a",
    href: `/${notification.user.username}`
  }, notification.user.name), " ", "liked your ", __jsx("a", {
    href: `/post/${notification.post._id}`
  }, "post."), __jsx(external_semantic_ui_react_.Feed.Date, null, (0,calculateTime/* default */.Z)(notification.date)))), notification.post.picUrl && __jsx(external_semantic_ui_react_.Feed.Extra, {
    images: true
  }, __jsx("a", {
    href: `/post/${notification.post._id}`
  }, __jsx("img", {
    src: notification.post.picUrl
  }))))), __jsx(external_semantic_ui_react_.Divider, null));
}

/* harmony default export */ var Notifications_LikeNotification = (LikeNotification);
;// CONCATENATED MODULE: ./components/Notifications/CommentNotification.js
var CommentNotification_jsx = (external_react_default()).createElement;




function CommentNotification({
  notification
}) {
  return CommentNotification_jsx((external_react_default()).Fragment, null, CommentNotification_jsx(external_semantic_ui_react_.Feed.Event, null, CommentNotification_jsx(external_semantic_ui_react_.Feed.Label, {
    image: notification.user.profilePicUrl
  }), CommentNotification_jsx(external_semantic_ui_react_.Feed.Content, null, CommentNotification_jsx(external_semantic_ui_react_.Feed.Summary, null, CommentNotification_jsx((external_react_default()).Fragment, null, CommentNotification_jsx(external_semantic_ui_react_.Feed.User, {
    as: "a",
    href: `/${notification.user.username}`
  }, notification.user.name), " ", "commented on your ", CommentNotification_jsx("a", {
    href: `/post/${notification.post._id}`
  }, "post."), CommentNotification_jsx(external_semantic_ui_react_.Feed.Date, null, (0,calculateTime/* default */.Z)(notification.date)))), notification.post.picUrl && CommentNotification_jsx(external_semantic_ui_react_.Feed.Extra, {
    images: true
  }, CommentNotification_jsx("a", {
    href: `/post/${notification.post._id}`
  }, CommentNotification_jsx("img", {
    src: notification.post.picUrl
  }))), CommentNotification_jsx(external_semantic_ui_react_.Feed.Extra, {
    text: true
  }, CommentNotification_jsx("strong", null, notification.text)))), CommentNotification_jsx(external_semantic_ui_react_.Divider, null));
}

/* harmony default export */ var Notifications_CommentNotification = (CommentNotification);
// EXTERNAL MODULE: ./utils/profileActions.js
var profileActions = __webpack_require__(8145);
;// CONCATENATED MODULE: ./components/Notifications/FollowerNotification.js
var FollowerNotification_jsx = (external_react_default()).createElement;





function FollowerNotification({
  notification,
  loggedUserFollowStats,
  setUserFollowStats
}) {
  const {
    0: disabled,
    1: setDisabled
  } = (0,external_react_.useState)(false);
  const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === notification.user._id).length > 0;
  return FollowerNotification_jsx((external_react_default()).Fragment, null, FollowerNotification_jsx(external_semantic_ui_react_.Feed.Event, null, FollowerNotification_jsx(external_semantic_ui_react_.Feed.Label, {
    image: notification.user.profilePicUrl
  }), FollowerNotification_jsx(external_semantic_ui_react_.Feed.Content, null, FollowerNotification_jsx(external_semantic_ui_react_.Feed.Summary, null, FollowerNotification_jsx((external_react_default()).Fragment, null, FollowerNotification_jsx(external_semantic_ui_react_.Feed.User, {
    as: "a",
    href: `/${notification.user.username}`
  }, notification.user.name), " ", "started following you.", FollowerNotification_jsx(external_semantic_ui_react_.Feed.Date, null, (0,calculateTime/* default */.Z)(notification.date)))), FollowerNotification_jsx("div", {
    style: {
      position: "absolute",
      right: "5px"
    }
  }, FollowerNotification_jsx(external_semantic_ui_react_.Button, {
    size: "small",
    compact: true,
    icon: isFollowing ? "check circle" : "add user",
    color: isFollowing ? "instagram" : "twitter",
    disabled: disabled,
    onClick: async () => {
      setDisabled(true);
      isFollowing ? await (0,profileActions/* unfollowUser */.F6)(notification.user._id, setUserFollowStats) : await (0,profileActions/* followUser */.P_)(notification.user._id, setUserFollowStats);
      setDisabled(false);
    }
  })))), FollowerNotification_jsx(external_semantic_ui_react_.Divider, null));
}

/* harmony default export */ var Notifications_FollowerNotification = (FollowerNotification);
;// CONCATENATED MODULE: ./pages/notifications.js
var notifications_jsx = (external_react_default()).createElement;











function Notifications({
  notifications,
  errorLoading,
  user,
  userFollowStats
}) {
  const {
    0: loggedUserFollowStats,
    1: setUserFollowStats
  } = (0,external_react_.useState)(userFollowStats);
  (0,external_react_.useEffect)(() => {
    const notificationRead = async () => {
      try {
        await external_axios_default().post(`${(baseUrl_default())}/api/notifications`, {}, {
          headers: {
            Authorization: external_js_cookie_default().get("token")
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    notificationRead();
  }, []);
  return notifications_jsx((external_react_default()).Fragment, null, notifications_jsx(external_semantic_ui_react_.Container, {
    style: {
      marginTop: "1.5rem"
    }
  }, notifications.length > 0 ? notifications_jsx(external_semantic_ui_react_.Segment, {
    color: "teal",
    raised: true
  }, notifications_jsx("div", {
    style: {
      maxHeight: "40rem",
      overflow: "auto",
      height: "40rem",
      position: "relative",
      width: "100%"
    }
  }, notifications_jsx(external_semantic_ui_react_.Feed, {
    size: "small"
  }, notifications.map(notification => notifications_jsx((external_react_default()).Fragment, null, notification.type === "newLike" && notification.post !== null && notifications_jsx(Notifications_LikeNotification, {
    key: notification._id,
    notification: notification
  }), notification.type === "newComment" && notification.post !== null && notifications_jsx(Notifications_CommentNotification, {
    key: notification._id,
    notification: notification
  }), notification.type === "newFollower" && notifications_jsx(Notifications_FollowerNotification, {
    key: notification._id,
    notification: notification,
    loggedUserFollowStats: loggedUserFollowStats,
    setUserFollowStats: setUserFollowStats
  })))))) : notifications_jsx(NoData/* NoNotifications */.nq, null), notifications_jsx(external_semantic_ui_react_.Divider, {
    hidden: true
  })));
}

Notifications.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,external_nookies_.parseCookies)(ctx);
    const res = await external_axios_default().get(`${(baseUrl_default())}/api/notifications`, {
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

/* harmony default export */ var notifications = (Notifications);

/***/ }),

/***/ 4953:
/***/ (function(module) {

const baseUrl =  false ? 0 : "https://sociabliss.onrender.com";
module.exports = baseUrl;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [585,145], function() { return __webpack_exec__(438); });
module.exports = __webpack_exports__;

})();