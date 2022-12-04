(function() {
var exports = {};
exports.id = "pages/[username]";
exports.ids = ["pages/[username]"];
exports.modules = {

/***/ "./components/Profile/ProfileMenuTabs.js":
/*!***********************************************!*\
  !*** ./components/Profile/ProfileMenuTabs.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Profile\\ProfileMenuTabs.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function ProfileMenuTabs({
  activeItem,
  handleItemClick,
  followersLength,
  followingLength,
  ownAccount,
  loggedUserFollowStats
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    pointing: true,
    secondary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    name: "profile",
    active: activeItem === 'profile',
    onClick: () => handleItemClick("profile"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 8
    }
  }), ownAccount ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    name: `${loggedUserFollowStats.followers.length > 0 ? loggedUserFollowStats.followers.length : 0} Followers`,
    active: activeItem === 'followers',
    onClick: () => handleItemClick("followers"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    name: `${loggedUserFollowStats.following.length > 0 ? loggedUserFollowStats.following.length : 0} Following`,
    active: activeItem === 'following',
    onClick: () => handleItemClick("following"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    name: `${followersLength} Followers`,
    active: activeItem === 'followers',
    onClick: () => handleItemClick("followers"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    name: `${followingLength} Following`,
    active: activeItem === 'following',
    onClick: () => handleItemClick("following"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), ownAccount ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    name: "Update Profile",
    active: activeItem === 'updateProfile',
    onClick: () => handleItemClick("updateProfile"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    name: "Settings",
    active: activeItem === 'settings',
    onClick: () => handleItemClick("settings"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null)));
}

/* harmony default export */ __webpack_exports__["default"] = (ProfileMenuTabs);

/***/ }),

/***/ "./pages/[username].js":
/*!*****************************!*\
  !*** ./pages/[username].js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Profile_ProfileMenuTabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Profile/ProfileMenuTabs */ "./components/Profile/ProfileMenuTabs.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\pages\\[username].js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);











function ProfilePage({
  profile,
  followersLength,
  followingLength,
  user,
  userStats,
  errorLoading
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    username
  } = router.query;
  if (errorLoading) return __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_5__.NoProfile, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }
  });
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: activeItem,
    1: setActiveItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('profile');

  const handleItemClick = item => setActiveItem(item);

  const {
    0: loggedUserFollowStats,
    1: setUserFollowStats
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(userStats);
  const ownAccount = profile.user._id === user._id;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const getPosts = async () => {
      setLoading(true);

      try {
        const {
          username
        } = router.query;
        const token = js_cookie__WEBPACK_IMPORTED_MODULE_6___default().get("token");
        const res = axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default}/api/profile/posts/${username}`, {
          headers: {
            Authorization: token
          }
        });
        setPosts(res.data);
      } catch (error) {
        alert('Error Loading Posts');
      }

      setLoading(false);
    };

    getPosts();
  }, []);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {
    stackable: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 6
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(_components_Profile_ProfileMenuTabs__WEBPACK_IMPORTED_MODULE_8__.default, {
    activeItem: activeItem,
    handleItemClick: handleItemClick,
    followersLength: followersLength,
    followingLength: followingLength,
    ownAccount: ownAccount,
    loggedUserFollowStats: loggedUserFollowStats,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })))));
}

ProfilePage.getInitialProps = async ctx => {
  try {
    const {
      username
    } = ctx.query;
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default}/api/profile/${username}`, {
      headers: {
        Authorization: token
      }
    });
    console.log(res);
    const {
      profile,
      followersLength,
      followingLength
    } = res.data;
    return {
      profile,
      followersLength,
      followingLength
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ProfilePage);

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

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
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
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_NoData_js-utils_baseUrl_js"], function() { return __webpack_exec__("./pages/[username].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZU1lbnVUYWJzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL1t1c2VybmFtZV0uanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiUHJvZmlsZU1lbnVUYWJzIiwiYWN0aXZlSXRlbSIsImhhbmRsZUl0ZW1DbGljayIsImZvbGxvd2Vyc0xlbmd0aCIsImZvbGxvd2luZ0xlbmd0aCIsIm93bkFjY291bnQiLCJsb2dnZWRVc2VyRm9sbG93U3RhdHMiLCJmb2xsb3dlcnMiLCJsZW5ndGgiLCJmb2xsb3dpbmciLCJQcm9maWxlUGFnZSIsInByb2ZpbGUiLCJ1c2VyIiwidXNlclN0YXRzIiwiZXJyb3JMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlcm5hbWUiLCJxdWVyeSIsInBvc3RzIiwic2V0UG9zdHMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0QWN0aXZlSXRlbSIsIml0ZW0iLCJzZXRVc2VyRm9sbG93U3RhdHMiLCJfaWQiLCJ1c2VFZmZlY3QiLCJnZXRQb3N0cyIsInRva2VuIiwiY29va2llIiwicmVzIiwiYXhpb3MiLCJiYXNlVXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwiZXJyb3IiLCJhbGVydCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInBhcnNlQ29va2llcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxDQUF5QjtBQUFFQyxZQUFGO0FBQ3JCQyxpQkFEcUI7QUFFckJDLGlCQUZxQjtBQUdyQkMsaUJBSHFCO0FBSXJCQyxZQUpxQjtBQUtyQkM7QUFMcUIsQ0FBekIsRUFNQTtBQUNHLFNBQ0MscUVBQ0EsTUFBQyxtREFBRDtBQUFNLFlBQVEsTUFBZDtBQUFlLGFBQVMsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLE1BQUMsd0RBQUQ7QUFBVyxRQUFJLEVBQUMsU0FBaEI7QUFBMEIsVUFBTSxFQUFFTCxVQUFVLEtBQUcsU0FBL0M7QUFBMEQsV0FBTyxFQUFFLE1BQUlDLGVBQWUsQ0FBQyxTQUFELENBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESCxFQUdLRyxVQUFVLEdBQ1oscUVBQ0UsTUFBQyx3REFBRDtBQUFXLFFBQUksRUFBRyxHQUFFQyxxQkFBcUIsQ0FBQ0MsU0FBdEIsQ0FBZ0NDLE1BQWhDLEdBQXVDLENBQXZDLEdBQTJDRixxQkFBcUIsQ0FBQ0MsU0FBdEIsQ0FBZ0NDLE1BQTNFLEdBQW9GLENBQUUsWUFBMUc7QUFDQSxVQUFNLEVBQUVQLFVBQVUsS0FBRyxXQURyQjtBQUNrQyxXQUFPLEVBQUUsTUFBSUMsZUFBZSxDQUFDLFdBQUQsQ0FEOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBSUMsTUFBQyx3REFBRDtBQUFXLFFBQUksRUFBRyxHQUFFSSxxQkFBcUIsQ0FBQ0csU0FBdEIsQ0FBZ0NELE1BQWhDLEdBQXVDLENBQXZDLEdBQTJDRixxQkFBcUIsQ0FBQ0csU0FBdEIsQ0FBZ0NELE1BQTNFLEdB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RUMsbURBQVEsZ0JBQWVqQixRQUFTLEVBQTdDLEVBQStDO0FBQUNrQixhQUFPLEVBQUM7QUFBQ0MscUJBQWEsRUFBQ047QUFBZjtBQUFULEtBQS9DLENBQWhCO0FBQ0FhLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWixHQUFaO0FBQ0EsVUFBTTtBQUFDckIsYUFBRDtBQUFTUixxQkFBVDtBQUF5QkM7QUFBekIsUUFBNEM0QixHQUFHLENBQUNLLElBQXREO0FBRUEsV0FBTztBQUFDMUIsYUFBRDtBQUFVUixxQkFBVjtBQUEyQkM7QUFBM0IsS0FBUDtBQUNDLEdBVkQsQ0FXQSxPQUFNa0MsS0FBTixFQUNBO0FBQ0ksV0FBTztBQUFDeEIsa0JBQVksRUFBQztBQUFkLEtBQVA7QUFDSDtBQUNKLENBaEJEOztBQW9CQSwrREFBZUosV0FBZixFOzs7Ozs7Ozs7OztBQ2hHQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9bdXNlcm5hbWVdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtNZW51fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGVNZW51VGFicyh7IGFjdGl2ZUl0ZW0sXHJcbiAgICBoYW5kbGVJdGVtQ2xpY2ssXHJcbiAgICBmb2xsb3dlcnNMZW5ndGgsXHJcbiAgICBmb2xsb3dpbmdMZW5ndGgsXHJcbiAgICBvd25BY2NvdW50LFxyXG4gICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzfSlcclxue1xyXG4gICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxNZW51IHBvaW50aW5nIHNlY29uZGFyeT5cclxuICAgICAgIDxNZW51Lkl0ZW0gbmFtZT1cInByb2ZpbGVcIiBhY3RpdmU9e2FjdGl2ZUl0ZW09PT0ncHJvZmlsZSd9IG9uQ2xpY2s9eygpPT5oYW5kbGVJdGVtQ2xpY2soXCJwcm9maWxlXCIpfS8+XHJcblxyXG4gICAgICAgeyBvd25BY2NvdW50PyAoXHJcbiAgICAgICA8PlxyXG4gICAgICAgICA8TWVudS5JdGVtIG5hbWU9e2Ake2xvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dlcnMubGVuZ3RoPjAgPyBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93ZXJzLmxlbmd0aCA6IDB9IEZvbGxvd2Vyc2B9XHJcbiAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbT09PSdmb2xsb3dlcnMnfSBvbkNsaWNrPXsoKT0+aGFuZGxlSXRlbUNsaWNrKFwiZm9sbG93ZXJzXCIpfS8+XHJcblxyXG4gICAgICAgIDxNZW51Lkl0ZW0gbmFtZT17YCR7bG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5sZW5ndGg+MCA/IGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcubGVuZ3RoIDogMH0gRm9sbG93aW5nYH1cclxuICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtPT09J2ZvbGxvd2luZyd9IG9uQ2xpY2s9eygpPT5oYW5kbGVJdGVtQ2xpY2soXCJmb2xsb3dpbmdcIil9Lz5cclxuICAgICAgICBcclxuICAgICAgIDwvPik6KFxyXG4gICAgICAgPD5cclxuICAgICAgICA8TWVudS5JdGVtIG5hbWU9e2Ake2ZvbGxvd2Vyc0xlbmd0aH0gRm9sbG93ZXJzYH1cclxuICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtPT09J2ZvbGxvd2Vycyd9IG9uQ2xpY2s9eygpPT5oYW5kbGVJdGVtQ2xpY2soXCJmb2xsb3dlcnNcIil9Lz5cclxuXHJcbiAgICAgICAgPE1lbnUuSXRlbSBuYW1lPXtgJHtmb2xsb3dpbmdMZW5ndGh9IEZvbGxvd2luZ2B9XHJcbiAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbT09PSdmb2xsb3dpbmcnfSBvbkNsaWNrPXsoKT0+aGFuZGxlSXRlbUNsaWNrKFwiZm9sbG93aW5nXCIpfS8+XHJcbiAgICAgICA8Lz4pfVxyXG5cclxuICAgICAgIHtvd25BY2NvdW50ID8oPD5cclxuICAgICAgICA8TWVudS5JdGVtIG5hbWU9XCJVcGRhdGUgUHJvZmlsZVwiXHJcbiAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbT09PSd1cGRhdGVQcm9maWxlJ30gb25DbGljaz17KCk9PmhhbmRsZUl0ZW1DbGljayhcInVwZGF0ZVByb2ZpbGVcIil9Lz5cclxuXHJcbiAgICAgICAgPE1lbnUuSXRlbSBuYW1lPVwiU2V0dGluZ3NcIlxyXG4gICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW09PT0nc2V0dGluZ3MnfSBvbkNsaWNrPXsoKT0+aGFuZGxlSXRlbUNsaWNrKFwic2V0dGluZ3NcIil9Lz5cclxuICAgICAgIDwvPik6KDw+PC8+KX1cclxuICAgICAgICBcclxuICAgIDwvTWVudT5cclxuICAgIDwvPlxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVNZW51VGFicyIsImltcG9ydCByZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tICcuLi91dGlscy9iYXNlVXJsJztcclxuaW1wb3J0IHtwYXJzZUNvb2tpZXN9IGZyb20gJ25vb2tpZXMnO1xyXG5pbXBvcnQge05vUHJvZmlsZX0gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7R3JpZH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgUHJvZmlsZU1lbnVUYWJzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlTWVudVRhYnMnXHJcblxyXG5mdW5jdGlvbiBQcm9maWxlUGFnZSh7cHJvZmlsZSxmb2xsb3dlcnNMZW5ndGgsZm9sbG93aW5nTGVuZ3RoLHVzZXIsdXNlclN0YXRzLGVycm9yTG9hZGluZ30pXHJcbntcclxuICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKClcclxuICBcclxuICBjb25zdCB7dXNlcm5hbWV9PXJvdXRlci5xdWVyeVxyXG5cclxuICBpZihlcnJvckxvYWRpbmcpXHJcbiAgICByZXR1cm4gPE5vUHJvZmlsZS8+XHJcbiBcclxuICBjb25zdCBbcG9zdHMsc2V0UG9zdHNdPXVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddPXVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0W2FjdGl2ZUl0ZW0sc2V0QWN0aXZlSXRlbV09dXNlU3RhdGUoJ3Byb2ZpbGUnKVxyXG5cclxuICBjb25zdCBoYW5kbGVJdGVtQ2xpY2sgPSBpdGVtID0+IHNldEFjdGl2ZUl0ZW0oaXRlbSlcclxuXHJcbiAgY29uc3RbbG9nZ2VkVXNlckZvbGxvd1N0YXRzLHNldFVzZXJGb2xsb3dTdGF0c109dXNlU3RhdGUodXNlclN0YXRzKVxyXG5cclxuICBjb25zdCBvd25BY2NvdW50PShwcm9maWxlLnVzZXIuX2lkPT09dXNlci5faWQpXHJcblxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgIFxyXG4gICAgY29uc3QgZ2V0UG9zdHM9YXN5bmMoKT0+e1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICB0cnkge1xyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3Qge3VzZXJuYW1lfT1yb3V0ZXIucXVlcnlcclxuICAgICAgICBjb25zdCB0b2tlbj1jb29raWUuZ2V0KFwidG9rZW5cIilcclxuXHJcbiAgICAgICAgY29uc3QgcmVzPWF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvcHJvZmlsZS9wb3N0cy8ke3VzZXJuYW1lfWAse1xyXG4gICAgICAgICAgICAgICBoZWFkZXJzOntBdXRob3JpemF0aW9uOnRva2VufVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRQb3N0cyhyZXMuZGF0YSk7XHJcblxyXG4gICAgIH1cclxuICAgICBjYXRjaChlcnJvcilcclxuICAgICB7XHJcbiAgICAgICAgYWxlcnQoJ0Vycm9yIExvYWRpbmcgUG9zdHMnKVxyXG4gICAgIH1cclxuICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgfVxyXG4gICAgIGdldFBvc3RzKClcclxuICB9LFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgIDxHcmlkIHN0YWNrYWJsZT5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgIDxQcm9maWxlTWVudVRhYnNcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW09e2FjdGl2ZUl0ZW19XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVJdGVtQ2xpY2s9e2hhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgIGZvbGxvd2Vyc0xlbmd0aD17Zm9sbG93ZXJzTGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgZm9sbG93aW5nTGVuZ3RoPXtmb2xsb3dpbmdMZW5ndGh9XHJcbiAgICAgICAgICAgICAgICBvd25BY2NvdW50PXtvd25BY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzPXtsb2dnZWRVc2VyRm9sbG93U3RhdHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgPC9HcmlkPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5Qcm9maWxlUGFnZS5nZXRJbml0aWFsUHJvcHM9YXN5bmMoY3R4KT0+e1xyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgIGNvbnN0IHt1c2VybmFtZX09Y3R4LnF1ZXJ5XHJcbiAgICAgICBjb25zdCB7dG9rZW59PXBhcnNlQ29va2llcyhjdHgpXHJcbiAgICBcclxuICAgIGNvbnN0IHJlcz1hd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Byb2ZpbGUvJHt1c2VybmFtZX1gLHtoZWFkZXJzOntBdXRob3JpemF0aW9uOnRva2VufX0pXHJcbiAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICBjb25zdCB7cHJvZmlsZSxmb2xsb3dlcnNMZW5ndGgsZm9sbG93aW5nTGVuZ3RofSA9IHJlcy5kYXRhO1xyXG5cclxuICAgIHJldHVybiB7cHJvZmlsZSwgZm9sbG93ZXJzTGVuZ3RoLCBmb2xsb3dpbmdMZW5ndGh9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnJvcilcclxuICAgIHtcclxuICAgICAgICByZXR1cm4ge2Vycm9yTG9hZGluZzp0cnVlfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==