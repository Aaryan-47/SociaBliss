(function() {
var exports = {};
exports.id = "pages/[username]";
exports.ids = ["pages/[username]"];
exports.modules = {

/***/ "./components/Layout/Spinner.js":
/*!**************************************!*\
  !*** ./components/Layout/Spinner.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Layout\\Spinner.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const Spinner = () => __jsx("div", {
  className: "mySpinner",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 23
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./components/Profile/Followers.js":
/*!*****************************************!*\
  !*** ./components/Profile/Followers.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/Spinner */ "./components/Layout/Spinner.js");
/* harmony import */ var _Layout_NoData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Profile\\Followers.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









const Followers = ({
  user,
  loggedUserFollowStats,
  setUserFollowStats,
  profileUserId
}) => {
  const {
    0: followers,
    1: setFollowers
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: followLoading,
    1: setFollowLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const getFollowers = async () => {
      setLoading(true);

      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6___default())}/api/profile/followers/${profileUserId}`, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get("token")
          }
        });
        setFollowers(res.data);
      } catch (error) {
        alert("Error Loading Followers");
      }

      setLoading(false);
    };

    getFollowers();
  }, []);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, loading ? __jsx(_Layout_Spinner__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }) : followers.length > 0 ? followers.map(profileFollower => {
    /*  */
    const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === profileFollower.user._id).length > 0;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
      key: profileFollower.user._id,
      divided: true,
      verticalAlign: "middle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
      floated: "right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, profileFollower.user._id !== user._id && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
      color: isFollowing ? "instagram" : "twitter",
      icon: isFollowing ? "check" : "add user",
      content: isFollowing ? "Following" : "Follow",
      disabled: followLoading,
      onClick: () => {
        setFollowLoading(true);
        isFollowing ? (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_4__.unfollowUser)(profileFollower.user._id, setUserFollowStats) : (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_4__.followUser)(profileFollower.user._id, setUserFollowStats);
        setFollowLoading(false);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
      avatar: true,
      src: profileFollower.user.profilePicUrl,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
      as: "a",
      href: `/${profileFollower.user.username}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, profileFollower.user.name)));
  }) : __jsx(_Layout_NoData__WEBPACK_IMPORTED_MODULE_3__.NoFollowData, {
    followersComponent: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Followers);

/***/ }),

/***/ "./components/Profile/Following.js":
/*!*****************************************!*\
  !*** ./components/Profile/Following.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/Spinner */ "./components/Layout/Spinner.js");
/* harmony import */ var _Layout_NoData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Profile\\Following.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









const Following = ({
  user,
  loggedUserFollowStats,
  setUserFollowStats,
  profileUserId
}) => {
  const {
    0: following,
    1: setFollowing
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: followLoading,
    1: setFollowLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const getFollowing = async () => {
      setLoading(true);

      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6___default())}/api/profile/following/${profileUserId}`, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get("token")
          }
        });
        setFollowing(res.data);
      } catch (error) {
        alert("Error Loading Followers");
      }

      setLoading(false);
    };

    getFollowing();
  }, []);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, loading ? __jsx(_Layout_Spinner__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }) : following.length > 0 ? following.map(profileFollowing => {
    /*  */
    const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === profileFollowing.user._id).length > 0;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
      key: profileFollowing.user._id,
      divided: true,
      verticalAlign: "middle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
      floated: "right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, profileFollowing.user._id !== user._id && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
      color: isFollowing ? "instagram" : "twitter",
      icon: isFollowing ? "check" : "add user",
      content: isFollowing ? "Following" : "Follow",
      disabled: followLoading,
      onClick: () => {
        setFollowLoading(true);
        isFollowing ? (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_4__.unfollowUser)(profileFollowing.user._id, setUserFollowStats) : (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_4__.followUser)(profileFollowing.user._id, setUserFollowStats);
        setFollowLoading(false);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
      avatar: true,
      src: profileFollowing.user.profilePicUrl,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
      as: "a",
      href: `/${profileFollowing.user.username}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, profileFollowing.user.name)));
  }) : __jsx(_Layout_NoData__WEBPACK_IMPORTED_MODULE_3__.NoFollowData, {
    followingComponent: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Following);

/***/ }),

/***/ "./components/Profile/ProfileHeader.js":
/*!*********************************************!*\
  !*** ./components/Profile/ProfileHeader.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Profile\\ProfileHeader.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function ProfileHeader({
  profile,
  ownAccount,
  loggedUserFollowStats,
  setUserFollowStats
}) {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === profile.user._id).length > 0;
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
    stackable: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Column, {
    width: 11,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    as: "h2",
    content: profile.user.name,
    style: {
      marginBottom: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Row, {
    stretched: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, profile.bio, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, profile.social ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Icon, {
    name: "mail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    content: profile.user.email,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  })), profile.social.facebook && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Icon, {
    name: "facebook",
    color: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 23
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    style: {
      color: "blue"
    },
    content: profile.social.facebook,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 23
    }
  })), profile.social.instagram && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Icon, {
    name: "instagram",
    color: "red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 23
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    style: {
      color: "blue"
    },
    content: profile.social.instagram,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  })), profile.social.youtube && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Icon, {
    name: "youtube",
    color: "red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 23
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    style: {
      color: "blue"
    },
    content: profile.social.youtube,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 23
    }
  })), profile.social.twitter && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Icon, {
    name: "twitter",
    color: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 23
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    style: {
      color: "blue"
    },
    content: profile.social.twitter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 23
    }
  }))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "No Social Media Links "))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Column, {
    width: 5,
    stretched: true,
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    size: "large",
    avatar: true,
    src: profile.user.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  })), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }), !ownAccount && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    compact: true,
    loading: loading,
    disabled: loading,
    content: isFollowing ? "Following" : "Follow",
    icon: isFollowing ? "check circle" : "add user",
    color: isFollowing ? "instagram" : "twitter",
    onClick: async () => {
      setLoading(true);
      isFollowing ? await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_2__.unfollowUser)(profile.user._id, setUserFollowStats) : await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_2__.followUser)(profile.user._id, setUserFollowStats);
      setLoading(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProfileHeader);

/***/ }),

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
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    name: "profile",
    active: activeItem === "profile",
    onClick: () => handleItemClick("profile"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    name: `${followersLength} followers`,
    active: activeItem === "followers",
    onClick: () => handleItemClick("followers"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), ownAccount ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    name: `${loggedUserFollowStats.following.length > 0 ? loggedUserFollowStats.following.length : 0} following`,
    active: activeItem === "following",
    onClick: () => handleItemClick("following"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    name: "Update Profile",
    active: activeItem === "updateProfile",
    onClick: () => handleItemClick("updateProfile"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    name: "settings",
    active: activeItem === "settings",
    onClick: () => handleItemClick("settings"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  })) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    name: `${followingLength} following`,
    active: activeItem === "following",
    onClick: () => handleItemClick("following"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ProfileMenuTabs);

/***/ }),

/***/ "./components/Profile/Settings.js":
/*!****************************************!*\
  !*** ./components/Profile/Settings.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Profile\\Settings.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Settings({
  newMessagePopup
}) {
  const {
    0: passwordFields,
    1: showPasswordFields
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: newMessageSettings,
    1: showNewMessageSettings
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  const {
    0: popupSetting,
    1: setPopupSetting
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(newMessagePopup);
  const {
    0: success,
    1: setSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    success && setTimeout(() => setSuccess(false), 3000);
  }, [success]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
  }, [popupSetting]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, success && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    success: true,
    icon: "check circle",
    header: "Updated Successfully",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
    size: "huge",
    animated: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Icon, {
    name: "user secret",
    size: "large",
    verticalAlign: "middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    onClick: () => showPasswordFields(!passwordFields),
    as: "a",
    content: "Update Password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })), passwordFields && __jsx(UpdatePassword, {
    setSuccess: setSuccess,
    showPasswordFields: showPasswordFields,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Icon, {
    name: "paper plane outline",
    size: "large",
    verticalAlign: "middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    onClick: () => showNewMessageSettings(!newMessageSettings),
    as: "a",
    content: "Show New Message Popup?",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: {
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, "Control whether a Popup should appear when there is a New Message or not.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
    checked: popupSetting,
    toggle: true,
    onChange: () => (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_2__.toggleMessagePopup)(popupSetting, setPopupSetting, setSuccess),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  })));
}

const UpdatePassword = ({
  setSuccess,
  showPasswordFields
}) => {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: errorMsg,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: userPasswords,
    1: setUserPasswords
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    currentPassword: "",
    newPassword: ""
  });
  const {
    0: typed,
    1: showTyped
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    field1: false,
    field2: false
  });
  const {
    field1,
    field2
  } = typed;
  const {
    currentPassword,
    newPassword
  } = userPasswords;

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setUserPasswords(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    errorMsg && setTimeout(() => setError(null), 5000);
  }, [errorMsg]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    error: errorMsg !== null,
    loading: loading,
    onSubmit: async e => {
      e.preventDefault();
      setLoading(true);
      await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_2__.passwordUpdate)(setSuccess, userPasswords);
      setLoading(false);
      showPasswordFields(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => showTyped(prev => _objectSpread(_objectSpread({}, prev), {}, {
        field1: !field1
      }))
    },
    type: field1 ? "text" : "password",
    iconPosition: "left",
    label: "Current Password",
    placeholder: "Enter current Password",
    name: "currentPassword",
    onChange: handleChange,
    value: currentPassword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => showTyped(prev => _objectSpread(_objectSpread({}, prev), {}, {
        field2: !field2
      }))
    },
    type: field2 ? "text" : "password",
    iconPosition: "left",
    label: "New Password",
    placeholder: "Enter New Password",
    name: "newPassword",
    onChange: handleChange,
    value: newPassword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    disabled: loading || currentPassword === "" || newPassword === "",
    compact: true,
    icon: "configure",
    type: "submit",
    color: "teal",
    content: "Confirm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    disabled: loading,
    compact: true,
    icon: "cancel",
    type: "button",
    content: "Cancel",
    onClick: () => showPasswordFields(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "meh",
    error: true,
    header: "Oops!",
    content: errorMsg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./components/Profile/UpdateProfile.js":
/*!*********************************************!*\
  !*** ./components/Profile/UpdateProfile.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var _Common_CommonInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Profile\\UpdateProfile.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function UpdateProfile({
  Profile
}) {
  const {
    0: profile,
    1: setProfile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    profilePicUrl: Profile.user.profilePicUrl,
    bio: Profile.bio || "",
    facebook: Profile.social && Profile.social.facebook || "",
    youtube: Profile.social && Profile.social.youtube || "",
    instagram: Profile.social && Profile.social.instagram || "",
    twitter: Profile.social && Profile.social.twitter || ""
  });
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

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

    setProfile(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    error: errorMsg !== null,
    loading: loading,
    onSubmit: async e => {
      e.preventDefault();
      setLoading(true);
      let profilePicUrl;

      if (media !== null) {
        profilePicUrl = await (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_4__.default)(media);
      }

      if (media !== null && !profilePicUrl) {
        setLoading(false);
        return setErrorMsg("Error Uploading Image");
      }

      await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_5__.profileUpdate)(profile, setLoading, setErrorMsg, profilePicUrl);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    onDismiss: () => setErrorMsg(false),
    error: true,
    content: errorMsg,
    attached: true,
    header: "Oops!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx(_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_2__.default, {
    inputRef: inputRef,
    highlighted: highlighted,
    setHighlighted: setHighlighted,
    handleChange: handleChange,
    mediaPreview: mediaPreview,
    setMediaPreview: setMediaPreview,
    setMedia: setMedia,
    profilePicUrl: profile.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx(_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_3__.default, {
    user: profile,
    handleChange: handleChange,
    showSocialLinks: showSocialLinks,
    setShowSocialLinks: setShowSocialLinks,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    color: "blue",
    icon: "pencil alternate",
    disabled: profile.bio === "" || loading,
    content: "Submit",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (UpdateProfile);

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
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Post_CardPost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Post/CardPost */ "./components/Post/CardPost.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
/* harmony import */ var _components_Profile_ProfileMenuTabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Profile/ProfileMenuTabs */ "./components/Profile/ProfileMenuTabs.js");
/* harmony import */ var _components_Profile_ProfileHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Profile/ProfileHeader */ "./components/Profile/ProfileHeader.js");
/* harmony import */ var _components_Profile_Followers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Profile/Followers */ "./components/Profile/Followers.js");
/* harmony import */ var _components_Profile_Following__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Profile/Following */ "./components/Profile/Following.js");
/* harmony import */ var _components_Profile_UpdateProfile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Profile/UpdateProfile */ "./components/Profile/UpdateProfile.js");
/* harmony import */ var _components_Profile_Settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Profile/Settings */ "./components/Profile/Settings.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\pages\\[username].js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


















function ProfilePage({
  errorLoading,
  profile,
  followersLength,
  followingLength,
  user,
  userFollowStats
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showToastr,
    1: setShowToastr
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: activeItem,
    1: setActiveItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("profile");

  const handleItemClick = clickedTab => setActiveItem(clickedTab);

  const {
    0: loggedUserFollowStats,
    1: setUserFollowStats
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(userFollowStats);
  const ownAccount = profile.user._id === user._id;
  if (errorLoading) return __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_6__.NoProfile, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 28
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const getPosts = async () => {
      setLoading(true);

      try {
        const {
          username
        } = router.query;
        const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default())}/api/profile/posts/${username}`, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_8___default().get("token")
          }
        });
        setPosts(res.data);
      } catch (error) {
        alert("Error Loading Posts");
      }

      setLoading(false);
    };

    getPosts();
  }, [router.query.username]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    showToastr && setTimeout(() => setShowToastr(false), 4000);
  }, [showToastr]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showToastr && __jsx(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_16__.PostDeleteToastr, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 22
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    stackable: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(_components_Profile_ProfileMenuTabs__WEBPACK_IMPORTED_MODULE_10__.default, {
    activeItem: activeItem,
    handleItemClick: handleItemClick,
    followersLength: followersLength,
    followingLength: followingLength,
    ownAccount: ownAccount,
    loggedUserFollowStats: loggedUserFollowStats,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, activeItem === "profile" && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Profile_ProfileHeader__WEBPACK_IMPORTED_MODULE_11__.default, {
    profile: profile,
    ownAccount: ownAccount,
    loggedUserFollowStats: loggedUserFollowStats,
    setUserFollowStats: setUserFollowStats,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }), loading ? __jsx(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_9__.PlaceHolderPosts, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }) : posts.length > 0 ? posts.map(post => __jsx(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_7__.default, {
    key: post._id,
    post: post,
    user: user,
    setPosts: setPosts,
    setShowToastr: setShowToastr,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  })) : __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_6__.NoProfilePosts, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  })), activeItem === "followers" && __jsx(_components_Profile_Followers__WEBPACK_IMPORTED_MODULE_12__.default, {
    user: user,
    loggedUserFollowStats: loggedUserFollowStats,
    setUserFollowStats: setUserFollowStats,
    profileUserId: profile.user._id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }), activeItem === "following" && __jsx(_components_Profile_Following__WEBPACK_IMPORTED_MODULE_13__.default, {
    user: user,
    loggedUserFollowStats: loggedUserFollowStats,
    setUserFollowStats: setUserFollowStats,
    profileUserId: profile.user._id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }), activeItem === "updateProfile" && __jsx(_components_Profile_UpdateProfile__WEBPACK_IMPORTED_MODULE_14__.default, {
    Profile: profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 48
    }
  }), activeItem === "settings" && __jsx(_components_Profile_Settings__WEBPACK_IMPORTED_MODULE_15__.default, {
    newMessagePopup: user.newMessagePopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
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
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default())}/api/profile/${username}`, {
      headers: {
        Authorization: token
      }
    });
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

/***/ "./utils/profileActions.js":
/*!*********************************!*\
  !*** ./utils/profileActions.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "followUser": function() { return /* binding */ followUser; },
/* harmony export */   "unfollowUser": function() { return /* binding */ unfollowUser; },
/* harmony export */   "profileUpdate": function() { return /* binding */ profileUpdate; },
/* harmony export */   "passwordUpdate": function() { return /* binding */ passwordUpdate; },
/* harmony export */   "toggleMessagePopup": function() { return /* binding */ toggleMessagePopup; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: `${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/profile`,
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("token")
  }
});
const followUser = async (userToFollowId, setUserFollowStats) => {
  try {
    await Axios.post(`/follow/${userToFollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: [...prev.following, {
        user: userToFollowId
      }]
    }));
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const unfollowUser = async (userToUnfollowId, setUserFollowStats) => {
  try {
    await Axios.put(`/unfollow/${userToUnfollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: prev.following.filter(following => following.user !== userToUnfollowId)
    }));
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const profileUpdate = async (profile, setLoading, setError, profilePicUrl) => {
  try {
    const {
      bio,
      facebook,
      youtube,
      twitter,
      instagram
    } = profile;
    await Axios.post(`/update`, {
      bio,
      facebook,
      youtube,
      twitter,
      instagram,
      profilePicUrl
    });
    setLoading(false);
    next_router__WEBPACK_IMPORTED_MODULE_4___default().reload();
  } catch (error) {
    setError((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
    setLoading(false);
  }
};
const passwordUpdate = async (setSuccess, userPasswords) => {
  const {
    currentPassword,
    newPassword
  } = userPasswords;

  try {
    await Axios.post(`/settings/password`, {
      currentPassword,
      newPassword
    });
    setSuccess(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const toggleMessagePopup = async (popupSetting, setPopupSetting, setSuccess) => {
  try {
    await Axios.post(`/settings/messagePopup`);
    setPopupSetting(!popupSetting);
    setSuccess(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};

/***/ }),

/***/ "./utils/uploadPicToCloudinary.js":
/*!****************************************!*\
  !*** ./utils/uploadPicToCloudinary.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const uploadPic = async media => {
  try {
    const form = new FormData();
    form.append('file', media);
    form.append('upload_preset', 'social_media');
    form.append('cloud_name', "dqay3zx6n");
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("api.cloudinary.com/v1_1/dqay3zx6n/image/upload", form);
    return res.data.url;
  } catch (error) {
    console.log(error);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (uploadPic);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_baseUrl_js-utils_catchErrors_js","components_Layout_NoData_js-components_Layout_Toastr_js-components_Post_CardPost_js","components_Common_CommonInputs_js-components_Common_ImageDropDiv_js"], function() { return __webpack_exec__("./pages/[username].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9TcGlubmVyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUHJvZmlsZS9Gb2xsb3dlcnMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qcm9maWxlL0ZvbGxvd2luZy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZUhlYWRlci5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZU1lbnVUYWJzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUHJvZmlsZS9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Byb2ZpbGUvVXBkYXRlUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9bdXNlcm5hbWVdLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LW1vbWVudFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJTcGlubmVyIiwiRm9sbG93ZXJzIiwidXNlciIsImxvZ2dlZFVzZXJGb2xsb3dTdGF0cyIsInNldFVzZXJGb2xsb3dTdGF0cyIsInByb2ZpbGVVc2VySWQiLCJmb2xsb3dlcnMiLCJzZXRGb2xsb3dlcnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZm9sbG93TG9hZGluZyIsInNldEZvbGxvd0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJnZXRGb2xsb3dlcnMiLCJyZXMiLCJheGlvcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsImRhdGEiLCJlcnJvciIsImFsZXJ0IiwibGVuZ3RoIiwibWFwIiwicHJvZmlsZUZvbGxvd2VyIiwiaXNGb2xsb3dpbmciLCJmb2xsb3dpbmciLCJmaWx0ZXIiLCJfaWQiLCJ1bmZvbGxvd1VzZXIiLCJmb2xsb3dVc2VyIiwicHJvZmlsZVBpY1VybCIsInVzZXJuYW1lIiwibmFtZSIsIkZvbGxvd2luZyIsInNldEZvbGxvd2luZyIsImdldEZvbGxvd2luZyIsInByb2ZpbGVGb2xsb3dpbmciLCJQcm9maWxlSGVhZGVyIiwicHJvZmlsZSIsIm93bkFjY291bnQiLCJtYXJnaW5Cb3R0b20iLCJiaW8iLCJzb2NpYWwiLCJlbWFpbCIsImZhY2Vib29rIiwiY29sb3IiLCJpbnN0YWdyYW0iLCJ5b3V0dWJlIiwidHdpdHRlciIsInRleHRBbGlnbiIsIlByb2ZpbGVNZW51VGFicyIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJmb2xsb3dlcnNMZW5ndGgiLCJmb2xsb3dpbmdMZW5ndGgiLCJTZXR0aW5ncyIsIm5ld01lc3NhZ2VQb3B1cCIsInBhc3N3b3JkRmllbGRzIiwic2hvd1Bhc3N3b3JkRmllbGRzIiwibmV3TWVzc2FnZVNldHRpbmdzIiwic2hvd05ld01lc3NhZ2VTZXR0aW5ncyIsImlzRmlyc3RSdW4iLCJ1c2VSZWYiLCJwb3B1cFNldHRpbmciLCJzZXRQb3B1cFNldHRpbmciLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsInNldFRpbWVvdXQiLCJjdXJyZW50IiwibWFyZ2luVG9wIiwidG9nZ2xlTWVzc2FnZVBvcHVwIiwiVXBkYXRlUGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yIiwidXNlclBhc3N3b3JkcyIsInNldFVzZXJQYXNzd29yZHMiLCJjdXJyZW50UGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsInR5cGVkIiwic2hvd1R5cGVkIiwiZmllbGQxIiwiZmllbGQyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldiIsInByZXZlbnREZWZhdWx0IiwicGFzc3dvcmRVcGRhdGUiLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIiwiVXBkYXRlUHJvZmlsZSIsIlByb2ZpbGUiLCJzZXRQcm9maWxlIiwic2V0RXJyb3JNc2ciLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwiaW5wdXRSZWYiLCJtZWRpYSIsInNldE1lZGlhIiwibWVkaWFQcmV2aWV3Iiwic2V0TWVkaWFQcmV2aWV3IiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ1cGxvYWRQaWMiLCJwcm9maWxlVXBkYXRlIiwiUHJvZmlsZVBhZ2UiLCJlcnJvckxvYWRpbmciLCJ1c2VyRm9sbG93U3RhdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0cyIsInNldFBvc3RzIiwic2hvd1RvYXN0ciIsInNldFNob3dUb2FzdHIiLCJzZXRBY3RpdmVJdGVtIiwiY2xpY2tlZFRhYiIsImdldFBvc3RzIiwicXVlcnkiLCJwb3N0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwidG9rZW4iLCJwYXJzZUNvb2tpZXMiLCJBeGlvcyIsImJhc2VVUkwiLCJ1c2VyVG9Gb2xsb3dJZCIsImNhdGNoRXJyb3JzIiwidXNlclRvVW5mb2xsb3dJZCIsInB1dCIsIlJvdXRlciIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsInByb2Nlc3MiLCJ1cmwiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUFLLFdBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBdEI7O0FBQ0EsK0RBQWVBLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsQ0FBQztBQUNqQkMsTUFEaUI7QUFFakJDLHVCQUZpQjtBQUdqQkMsb0JBSGlCO0FBSWpCQztBQUppQixDQUFELEtBS1o7QUFDSixRQUFNO0FB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R0FBQyxJQUFJQyxRQUFKLEVBQVg7QUFDQUQsUUFBSSxDQUFDRSxNQUFMLENBQVksTUFBWixFQUFtQnBDLEtBQW5CO0FBQ0FrQyxRQUFJLENBQUNFLE1BQUwsQ0FBWSxlQUFaLEVBQTRCLGNBQTVCO0FBQ0FGLFFBQUksQ0FBQ0UsTUFBTCxDQUFZLFlBQVosRUFBeUIsV0FBekI7QUFFQSxVQUFNN0gsR0FBRyxHQUFDLE1BQU1DLGlEQUFBLENBQVc2SCxnREFBWCxFQUFzQ0gsSUFBdEMsQ0FBaEI7QUFDQSxXQUFPM0gsR0FBRyxDQUFDTSxJQUFKLENBQVN5SCxHQUFoQjtBQUNELEdBVEQsQ0FVQSxPQUFNeEgsS0FBTixFQUNBO0FBQ0V5SCxXQUFPLENBQUNDLEdBQVIsQ0FBWTFILEtBQVo7QUFDRDtBQUNGLENBZkQ7O0FBaUJBLCtEQUFleUYsU0FBZixFOzs7Ozs7Ozs7OztBQ25CQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9bdXNlcm5hbWVdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBTcGlubmVyID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9XCJteVNwaW5uZXJcIiAvPjtcclxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBJbWFnZSwgTGlzdCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vTGF5b3V0L1NwaW5uZXJcIjtcclxuaW1wb3J0IHsgTm9Gb2xsb3dEYXRhIH0gZnJvbSBcIi4uL0xheW91dC9Ob0RhdGFcIjtcclxuaW1wb3J0IHsgZm9sbG93VXNlciwgdW5mb2xsb3dVc2VyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBGb2xsb3dlcnMgPSAoe1xyXG4gIHVzZXIsXHJcbiAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLFxyXG4gIHNldFVzZXJGb2xsb3dTdGF0cyxcclxuICBwcm9maWxlVXNlcklkXHJcbn0pID0+IHtcclxuICBjb25zdCBbZm9sbG93ZXJzLCBzZXRGb2xsb3dlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZm9sbG93TG9hZGluZywgc2V0Rm9sbG93TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRGb2xsb3dlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlL2ZvbGxvd2Vycy8ke3Byb2ZpbGVVc2VySWR9YCwge1xyXG4gICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRGb2xsb3dlcnMocmVzLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KFwiRXJyb3IgTG9hZGluZyBGb2xsb3dlcnNcIik7XHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEZvbGxvd2VycygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICkgOiBmb2xsb3dlcnMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICBmb2xsb3dlcnMubWFwKHByb2ZpbGVGb2xsb3dlciA9PiB7XHJcbiAgICAgICAgICAvKiAgKi9cclxuXHJcbiAgICAgICAgICBjb25zdCBpc0ZvbGxvd2luZyA9XHJcbiAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmZpbHRlcihcclxuICAgICAgICAgICAgICBmb2xsb3dpbmcgPT4gZm9sbG93aW5nLnVzZXIgPT09IHByb2ZpbGVGb2xsb3dlci51c2VyLl9pZFxyXG4gICAgICAgICAgICApLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpc3Qga2V5PXtwcm9maWxlRm9sbG93ZXIudXNlci5faWR9IGRpdmlkZWQgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGZsb2F0ZWQ9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZUZvbGxvd2VyLnVzZXIuX2lkICE9PSB1c2VyLl9pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2lzRm9sbG93aW5nID8gXCJpbnN0YWdyYW1cIiA6IFwidHdpdHRlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17aXNGb2xsb3dpbmcgPyBcImNoZWNrXCIgOiBcImFkZCB1c2VyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpc0ZvbGxvd2luZyA/IFwiRm9sbG93aW5nXCIgOiBcIkZvbGxvd1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZvbGxvd0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvbGxvd0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvd2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdW5mb2xsb3dVc2VyKHByb2ZpbGVGb2xsb3dlci51c2VyLl9pZCwgc2V0VXNlckZvbGxvd1N0YXRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogZm9sbG93VXNlcihwcm9maWxlRm9sbG93ZXIudXNlci5faWQsIHNldFVzZXJGb2xsb3dTdGF0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGb2xsb3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGF2YXRhciBzcmM9e3Byb2ZpbGVGb2xsb3dlci51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGFzPVwiYVwiIGhyZWY9e2AvJHtwcm9maWxlRm9sbG93ZXIudXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGVGb2xsb3dlci51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxOb0ZvbGxvd0RhdGEgZm9sbG93ZXJzQ29tcG9uZW50PXt0cnVlfSAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd2VycztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBJbWFnZSwgTGlzdCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vTGF5b3V0L1NwaW5uZXJcIjtcclxuaW1wb3J0IHsgTm9Gb2xsb3dEYXRhIH0gZnJvbSBcIi4uL0xheW91dC9Ob0RhdGFcIjtcclxuaW1wb3J0IHsgZm9sbG93VXNlciwgdW5mb2xsb3dVc2VyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBGb2xsb3dpbmcgPSAoe1xyXG4gIHVzZXIsXHJcbiAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLFxyXG4gIHNldFVzZXJGb2xsb3dTdGF0cyxcclxuICBwcm9maWxlVXNlcklkXHJcbn0pID0+IHtcclxuICBjb25zdCBbZm9sbG93aW5nLCBzZXRGb2xsb3dpbmddID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZm9sbG93TG9hZGluZywgc2V0Rm9sbG93TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRGb2xsb3dpbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlL2ZvbGxvd2luZy8ke3Byb2ZpbGVVc2VySWR9YCwge1xyXG4gICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRGb2xsb3dpbmcocmVzLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KFwiRXJyb3IgTG9hZGluZyBGb2xsb3dlcnNcIik7XHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEZvbGxvd2luZygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICkgOiBmb2xsb3dpbmcubGVuZ3RoID4gMCA/IChcclxuICAgICAgICBmb2xsb3dpbmcubWFwKHByb2ZpbGVGb2xsb3dpbmcgPT4ge1xyXG4gICAgICAgICAgLyogICovXHJcblxyXG4gICAgICAgICAgY29uc3QgaXNGb2xsb3dpbmcgPVxyXG4gICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgZm9sbG93aW5nID0+IGZvbGxvd2luZy51c2VyID09PSBwcm9maWxlRm9sbG93aW5nLnVzZXIuX2lkXHJcbiAgICAgICAgICAgICkubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGlzdCBrZXk9e3Byb2ZpbGVGb2xsb3dpbmcudXNlci5faWR9IGRpdmlkZWQgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGZsb2F0ZWQ9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZUZvbGxvd2luZy51c2VyLl9pZCAhPT0gdXNlci5faWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtpc0ZvbGxvd2luZyA/IFwiaW5zdGFncmFtXCIgOiBcInR3aXR0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGljb249e2lzRm9sbG93aW5nID8gXCJjaGVja1wiIDogXCJhZGQgdXNlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXNGb2xsb3dpbmcgPyBcIkZvbGxvd2luZ1wiIDogXCJGb2xsb3dcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmb2xsb3dMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGb2xsb3dMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHVuZm9sbG93VXNlcihwcm9maWxlRm9sbG93aW5nLnVzZXIuX2lkLCBzZXRVc2VyRm9sbG93U3RhdHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmb2xsb3dVc2VyKHByb2ZpbGVGb2xsb3dpbmcudXNlci5faWQsIHNldFVzZXJGb2xsb3dTdGF0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGb2xsb3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGF2YXRhciBzcmM9e3Byb2ZpbGVGb2xsb3dpbmcudXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCBhcz1cImFcIiBocmVmPXtgLyR7cHJvZmlsZUZvbGxvd2luZy51c2VyLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZUZvbGxvd2luZy51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxOb0ZvbGxvd0RhdGEgZm9sbG93aW5nQ29tcG9uZW50PXt0cnVlfSAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd2luZztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNlZ21lbnQsIEltYWdlLCBHcmlkLCBEaXZpZGVyLCBIZWFkZXIsIEJ1dHRvbiwgTGlzdCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBmb2xsb3dVc2VyLCB1bmZvbGxvd1VzZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGVIZWFkZXIoe1xyXG4gIHByb2ZpbGUsXHJcbiAgb3duQWNjb3VudCxcclxuICBsb2dnZWRVc2VyRm9sbG93U3RhdHMsXHJcbiAgc2V0VXNlckZvbGxvd1N0YXRzXHJcbn0pIHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGlzRm9sbG93aW5nID1cclxuICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcubGVuZ3RoID4gMCAmJlxyXG4gICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5maWx0ZXIoXHJcbiAgICAgIGZvbGxvd2luZyA9PiBmb2xsb3dpbmcudXNlciA9PT0gcHJvZmlsZS51c2VyLl9pZFxyXG4gICAgKS5sZW5ndGggPiAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgPEdyaWQgc3RhY2thYmxlPlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMX0+XHJcbiAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICBhcz1cImgyXCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb2ZpbGUudXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkLlJvdyBzdHJldGNoZWQ+XHJcbiAgICAgICAgICAgICAge3Byb2ZpbGUuYmlvfVxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuUm93PlxyXG5cclxuICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgIHtwcm9maWxlLnNvY2lhbCA/IChcclxuICAgICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cIm1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgY29udGVudD17cHJvZmlsZS51c2VyLmVtYWlsfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlLnNvY2lhbC5mYWNlYm9vayAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cImZhY2Vib29rXCIgY29sb3I9XCJibHVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb2ZpbGUuc29jaWFsLmZhY2Vib29rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlLnNvY2lhbC5pbnN0YWdyYW0gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJpbnN0YWdyYW1cIiBjb2xvcj1cInJlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9maWxlLnNvY2lhbC5pbnN0YWdyYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuc29jaWFsLnlvdXR1YmUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJ5b3V0dWJlXCIgY29sb3I9XCJyZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17cHJvZmlsZS5zb2NpYWwueW91dHViZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZS5zb2NpYWwudHdpdHRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cInR3aXR0ZXJcIiBjb2xvcj1cImJsdWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17cHJvZmlsZS5zb2NpYWwudHdpdHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+Tm8gU29jaWFsIE1lZGlhIExpbmtzIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NX0gc3RyZXRjaGVkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzaXplPVwibGFyZ2VcIiBhdmF0YXIgc3JjPXtwcm9maWxlLnVzZXIucHJvZmlsZVBpY1VybH0gLz5cclxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICB7IW93bkFjY291bnQgJiYgKFxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNvbXBhY3RcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2lzRm9sbG93aW5nID8gXCJGb2xsb3dpbmdcIiA6IFwiRm9sbG93XCJ9XHJcbiAgICAgICAgICAgICAgICBpY29uPXtpc0ZvbGxvd2luZyA/IFwiY2hlY2sgY2lyY2xlXCIgOiBcImFkZCB1c2VyXCJ9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17aXNGb2xsb3dpbmcgPyBcImluc3RhZ3JhbVwiIDogXCJ0d2l0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGlzRm9sbG93aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgPyBhd2FpdCB1bmZvbGxvd1VzZXIocHJvZmlsZS51c2VyLl9pZCwgc2V0VXNlckZvbGxvd1N0YXRzKVxyXG4gICAgICAgICAgICAgICAgICAgIDogYXdhaXQgZm9sbG93VXNlcihwcm9maWxlLnVzZXIuX2lkLCBzZXRVc2VyRm9sbG93U3RhdHMpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L1NlZ21lbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGVNZW51VGFicyh7XHJcbiAgYWN0aXZlSXRlbSxcclxuICBoYW5kbGVJdGVtQ2xpY2ssXHJcbiAgZm9sbG93ZXJzTGVuZ3RoLFxyXG4gIGZvbGxvd2luZ0xlbmd0aCxcclxuICBvd25BY2NvdW50LFxyXG4gIGxvZ2dlZFVzZXJGb2xsb3dTdGF0c1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNZW51IHBvaW50aW5nIHNlY29uZGFyeT5cclxuICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICBuYW1lPVwicHJvZmlsZVwiXHJcbiAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09IFwicHJvZmlsZVwifVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKFwicHJvZmlsZVwiKX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICBuYW1lPXtgJHtmb2xsb3dlcnNMZW5ndGh9IGZvbGxvd2Vyc2B9XHJcbiAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09IFwiZm9sbG93ZXJzXCJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soXCJmb2xsb3dlcnNcIil9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAge293bkFjY291bnQgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgPyBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICA6IDBcclxuICAgICAgICAgICAgICB9IGZvbGxvd2luZ2B9XHJcbiAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcImZvbGxvd2luZ1wifVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhcImZvbGxvd2luZ1wiKX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICBuYW1lPVwiVXBkYXRlIFByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJ1cGRhdGVQcm9maWxlXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKFwidXBkYXRlUHJvZmlsZVwiKX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICBuYW1lPVwic2V0dGluZ3NcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJzZXR0aW5nc1wifVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhcInNldHRpbmdzXCIpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgbmFtZT17YCR7Zm9sbG93aW5nTGVuZ3RofSBmb2xsb3dpbmdgfVxyXG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09IFwiZm9sbG93aW5nXCJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhcImZvbGxvd2luZ1wiKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9NZW51PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZU1lbnVUYWJzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpc3QsIERpdmlkZXIsIE1lc3NhZ2UsIENoZWNrYm94LCBGb3JtLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgcGFzc3dvcmRVcGRhdGUsIHRvZ2dsZU1lc3NhZ2VQb3B1cCB9IGZyb20gXCIuLi8uLi91dGlscy9wcm9maWxlQWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gU2V0dGluZ3MoeyBuZXdNZXNzYWdlUG9wdXAgfSkge1xyXG4gIGNvbnN0IFtwYXNzd29yZEZpZWxkcywgc2hvd1Bhc3N3b3JkRmllbGRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW25ld01lc3NhZ2VTZXR0aW5ncywgc2hvd05ld01lc3NhZ2VTZXR0aW5nc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGlzRmlyc3RSdW4gPSB1c2VSZWYodHJ1ZSk7XHJcbiAgY29uc3QgW3BvcHVwU2V0dGluZywgc2V0UG9wdXBTZXR0aW5nXSA9IHVzZVN0YXRlKG5ld01lc3NhZ2VQb3B1cCk7XHJcblxyXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHN1Y2Nlc3MgJiYgc2V0VGltZW91dCgoKSA9PiBzZXRTdWNjZXNzKGZhbHNlKSwgMzAwMCk7XHJcbiAgfSwgW3N1Y2Nlc3NdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc0ZpcnN0UnVuLmN1cnJlbnQpIHtcclxuICAgICAgaXNGaXJzdFJ1bi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9LCBbcG9wdXBTZXR0aW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c3VjY2VzcyAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxNZXNzYWdlIHN1Y2Nlc3MgaWNvbj1cImNoZWNrIGNpcmNsZVwiIGhlYWRlcj1cIlVwZGF0ZWQgU3VjY2Vzc2Z1bGx5XCIgLz5cclxuICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPExpc3Qgc2l6ZT1cImh1Z2VcIiBhbmltYXRlZD5cclxuICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgPExpc3QuSWNvbiBuYW1lPVwidXNlciBzZWNyZXRcIiBzaXplPVwibGFyZ2VcIiB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCIgLz5cclxuICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxMaXN0LkhlYWRlclxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dQYXNzd29yZEZpZWxkcyghcGFzc3dvcmRGaWVsZHMpfVxyXG4gICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIlVwZGF0ZSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuXHJcbiAgICAgICAgICB7cGFzc3dvcmRGaWVsZHMgJiYgKFxyXG4gICAgICAgICAgICA8VXBkYXRlUGFzc3dvcmRcclxuICAgICAgICAgICAgICBzZXRTdWNjZXNzPXtzZXRTdWNjZXNzfVxyXG4gICAgICAgICAgICAgIHNob3dQYXNzd29yZEZpZWxkcz17c2hvd1Bhc3N3b3JkRmllbGRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgPExpc3QuSWNvbiBuYW1lPVwicGFwZXIgcGxhbmUgb3V0bGluZVwiIHNpemU9XCJsYXJnZVwiIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIiAvPlxyXG5cclxuICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxMaXN0LkhlYWRlclxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dOZXdNZXNzYWdlU2V0dGluZ3MoIW5ld01lc3NhZ2VTZXR0aW5ncyl9XHJcbiAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwiU2hvdyBOZXcgTWVzc2FnZSBQb3B1cD9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICBDb250cm9sIHdoZXRoZXIgYSBQb3B1cCBzaG91bGQgYXBwZWFyIHdoZW4gdGhlcmUgaXMgYSBOZXcgTWVzc2FnZSBvciBub3QuXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17cG9wdXBTZXR0aW5nfVxyXG4gICAgICAgICAgICAgIHRvZ2dsZVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlTWVzc2FnZVBvcHVwKHBvcHVwU2V0dGluZywgc2V0UG9wdXBTZXR0aW5nLCBzZXRTdWNjZXNzKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGlzdC5JdGVtPlxyXG5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBVcGRhdGVQYXNzd29yZCA9ICh7IHNldFN1Y2Nlc3MsIHNob3dQYXNzd29yZEZpZWxkcyB9KSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IFt1c2VyUGFzc3dvcmRzLCBzZXRVc2VyUGFzc3dvcmRzXSA9IHVzZVN0YXRlKHtcclxuICAgIGN1cnJlbnRQYXNzd29yZDogXCJcIixcclxuICAgIG5ld1Bhc3N3b3JkOiBcIlwiXHJcbiAgfSk7XHJcbiAgY29uc3QgW3R5cGVkLCBzaG93VHlwZWRdID0gdXNlU3RhdGUoe1xyXG4gICAgZmllbGQxOiBmYWxzZSxcclxuICAgIGZpZWxkMjogZmFsc2VcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBmaWVsZDEsIGZpZWxkMiB9ID0gdHlwZWQ7XHJcblxyXG4gIGNvbnN0IHsgY3VycmVudFBhc3N3b3JkLCBuZXdQYXNzd29yZCB9ID0gdXNlclBhc3N3b3JkcztcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldFVzZXJQYXNzd29yZHMocHJldiA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZXJyb3JNc2cgJiYgc2V0VGltZW91dCgoKSA9PiBzZXRFcnJvcihudWxsKSwgNTAwMCk7XHJcbiAgfSwgW2Vycm9yTXNnXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH1cclxuICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgIG9uU3VibWl0PXthc3luYyBlID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgYXdhaXQgcGFzc3dvcmRVcGRhdGUoc2V0U3VjY2VzcywgdXNlclBhc3N3b3Jkcyk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICBzaG93UGFzc3dvcmRGaWVsZHMoZmFsc2UpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TGlzdC5MaXN0PlxyXG4gICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgIGljb249e3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZXllXCIsXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzaG93VHlwZWQocHJldiA9PiAoeyAuLi5wcmV2LCBmaWVsZDE6ICFmaWVsZDEgfSkpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB0eXBlPXtmaWVsZDEgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkN1cnJlbnQgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgY3VycmVudCBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImN1cnJlbnRQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudFBhc3N3b3JkfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgIGljb249e3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZXllXCIsXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzaG93VHlwZWQocHJldiA9PiAoeyAuLi5wcmV2LCBmaWVsZDI6ICFmaWVsZDIgfSkpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB0eXBlPXtmaWVsZDIgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk5ldyBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBOZXcgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuZXdQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3UGFzc3dvcmR9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7LyogQlVUVE9OUyAqL31cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZyB8fCBjdXJyZW50UGFzc3dvcmQgPT09IFwiXCIgfHwgbmV3UGFzc3dvcmQgPT09IFwiXCJ9XHJcbiAgICAgICAgICAgICAgY29tcGFjdFxyXG4gICAgICAgICAgICAgIGljb249XCJjb25maWd1cmVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwidGVhbFwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIkNvbmZpcm1cIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgIGNvbXBhY3RcclxuICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwiQ2FuY2VsXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93UGFzc3dvcmRGaWVsZHMoZmFsc2UpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPE1lc3NhZ2UgaWNvbj1cIm1laFwiIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17ZXJyb3JNc2d9IC8+XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICA8L0xpc3QuTGlzdD5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZURyb3BEaXYgZnJvbSBcIi4uL0NvbW1vbi9JbWFnZURyb3BEaXZcIjtcclxuaW1wb3J0IENvbW1vbklucHV0cyBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vbklucHV0c1wiO1xyXG5pbXBvcnQgdXBsb2FkUGljIGZyb20gXCIuLi8uLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnlcIjtcclxuaW1wb3J0IHsgcHJvZmlsZVVwZGF0ZSB9IGZyb20gXCIuLi8uLi91dGlscy9wcm9maWxlQWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gVXBkYXRlUHJvZmlsZSh7IFByb2ZpbGUgfSkge1xyXG4gIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlKHtcclxuICAgIHByb2ZpbGVQaWNVcmw6IFByb2ZpbGUudXNlci5wcm9maWxlUGljVXJsLFxyXG4gICAgYmlvOiBQcm9maWxlLmJpbyB8fCBcIlwiLFxyXG4gICAgZmFjZWJvb2s6IChQcm9maWxlLnNvY2lhbCAmJiBQcm9maWxlLnNvY2lhbC5mYWNlYm9vaykgfHwgXCJcIixcclxuICAgIHlvdXR1YmU6IChQcm9maWxlLnNvY2lhbCAmJiBQcm9maWxlLnNvY2lhbC55b3V0dWJlKSB8fCBcIlwiLFxyXG4gICAgaW5zdGFncmFtOiAoUHJvZmlsZS5zb2NpYWwgJiYgUHJvZmlsZS5zb2NpYWwuaW5zdGFncmFtKSB8fCBcIlwiLFxyXG4gICAgdHdpdHRlcjogKFByb2ZpbGUuc29jaWFsICYmIFByb2ZpbGUuc29jaWFsLnR3aXR0ZXIpIHx8IFwiXCJcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93U29jaWFsTGlua3MsIHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtoaWdobGlnaHRlZCwgc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbWVkaWFQcmV2aWV3LCBzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgZmlsZXMgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIGlmIChuYW1lID09PSBcIm1lZGlhXCIpIHtcclxuICAgICAgc2V0TWVkaWEoZmlsZXNbMF0pO1xyXG4gICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpO1xyXG4gICAgfVxyXG4gICAgc2V0UHJvZmlsZShwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH1cclxuICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgIG9uU3VibWl0PXthc3luYyBlID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgbGV0IHByb2ZpbGVQaWNVcmw7XHJcblxyXG4gICAgICAgICAgaWYgKG1lZGlhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHByb2ZpbGVQaWNVcmwgPSBhd2FpdCB1cGxvYWRQaWMobWVkaWEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChtZWRpYSAhPT0gbnVsbCAmJiAhcHJvZmlsZVBpY1VybCkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNldEVycm9yTXNnKFwiRXJyb3IgVXBsb2FkaW5nIEltYWdlXCIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGF3YWl0IHByb2ZpbGVVcGRhdGUocHJvZmlsZSwgc2V0TG9hZGluZywgc2V0RXJyb3JNc2csIHByb2ZpbGVQaWNVcmwpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRFcnJvck1zZyhmYWxzZSl9XHJcbiAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgY29udGVudD17ZXJyb3JNc2d9XHJcbiAgICAgICAgICBhdHRhY2hlZFxyXG4gICAgICAgICAgaGVhZGVyPVwiT29wcyFcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxJbWFnZURyb3BEaXZcclxuICAgICAgICAgIGlucHV0UmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgIGhpZ2hsaWdodGVkPXtoaWdobGlnaHRlZH1cclxuICAgICAgICAgIHNldEhpZ2hsaWdodGVkPXtzZXRIaWdobGlnaHRlZH1cclxuICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgbWVkaWFQcmV2aWV3PXttZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICBzZXRNZWRpYVByZXZpZXc9e3NldE1lZGlhUHJldmlld31cclxuICAgICAgICAgIHNldE1lZGlhPXtzZXRNZWRpYX1cclxuICAgICAgICAgIHByb2ZpbGVQaWNVcmw9e3Byb2ZpbGUucHJvZmlsZVBpY1VybH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Q29tbW9uSW5wdXRzXHJcbiAgICAgICAgICB1c2VyPXtwcm9maWxlfVxyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBzaG93U29jaWFsTGlua3M9e3Nob3dTb2NpYWxMaW5rc31cclxuICAgICAgICAgIHNldFNob3dTb2NpYWxMaW5rcz17c2V0U2hvd1NvY2lhbExpbmtzfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjb2xvcj1cImJsdWVcIlxyXG4gICAgICAgICAgaWNvbj1cInBlbmNpbCBhbHRlcm5hdGVcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3Byb2ZpbGUuYmlvID09PSBcIlwiIHx8IGxvYWRpbmd9XHJcbiAgICAgICAgICBjb250ZW50PVwiU3VibWl0XCJcclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZVByb2ZpbGU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgTm9Qcm9maWxlUG9zdHMsIE5vUHJvZmlsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGFcIjtcclxuaW1wb3J0IENhcmRQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3QvQ2FyZFBvc3RcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IFBsYWNlSG9sZGVyUG9zdHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvUGxhY2VIb2xkZXJHcm91cFwiO1xyXG5pbXBvcnQgUHJvZmlsZU1lbnVUYWJzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZU1lbnVUYWJzXCI7XHJcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZUhlYWRlclwiO1xyXG5pbXBvcnQgRm9sbG93ZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvRm9sbG93ZXJzXCI7XHJcbmltcG9ydCBGb2xsb3dpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZS9Gb2xsb3dpbmdcIjtcclxuaW1wb3J0IFVwZGF0ZVByb2ZpbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZS9VcGRhdGVQcm9maWxlXCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlL1NldHRpbmdzXCI7XHJcbmltcG9ydCB7IFBvc3REZWxldGVUb2FzdHIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvVG9hc3RyXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlUGFnZSh7XHJcbiAgZXJyb3JMb2FkaW5nLFxyXG4gIHByb2ZpbGUsXHJcbiAgZm9sbG93ZXJzTGVuZ3RoLFxyXG4gIGZvbGxvd2luZ0xlbmd0aCxcclxuICB1c2VyLFxyXG4gIHVzZXJGb2xsb3dTdGF0c1xyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1RvYXN0ciwgc2V0U2hvd1RvYXN0cl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKFwicHJvZmlsZVwiKTtcclxuICBjb25zdCBoYW5kbGVJdGVtQ2xpY2sgPSBjbGlja2VkVGFiID0+IHNldEFjdGl2ZUl0ZW0oY2xpY2tlZFRhYik7XHJcblxyXG4gIGNvbnN0IFtsb2dnZWRVc2VyRm9sbG93U3RhdHMsIHNldFVzZXJGb2xsb3dTdGF0c10gPSB1c2VTdGF0ZSh1c2VyRm9sbG93U3RhdHMpO1xyXG5cclxuICBjb25zdCBvd25BY2NvdW50ID0gcHJvZmlsZS51c2VyLl9pZCA9PT0gdXNlci5faWQ7XHJcblxyXG4gIGlmIChlcnJvckxvYWRpbmcpIHJldHVybiA8Tm9Qcm9maWxlIC8+O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Byb2ZpbGUvcG9zdHMvJHt1c2VybmFtZX1gLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFBvc3RzKHJlcy5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydChcIkVycm9yIExvYWRpbmcgUG9zdHNcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGdldFBvc3RzKCk7XHJcbiAgfSwgW3JvdXRlci5xdWVyeS51c2VybmFtZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2hvd1RvYXN0ciAmJiBzZXRUaW1lb3V0KCgpID0+IHNldFNob3dUb2FzdHIoZmFsc2UpLCA0MDAwKTtcclxuICB9LCBbc2hvd1RvYXN0cl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3Nob3dUb2FzdHIgJiYgPFBvc3REZWxldGVUb2FzdHIgLz59XHJcblxyXG4gICAgICA8R3JpZCBzdGFja2FibGU+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8UHJvZmlsZU1lbnVUYWJzXHJcbiAgICAgICAgICAgICAgYWN0aXZlSXRlbT17YWN0aXZlSXRlbX1cclxuICAgICAgICAgICAgICBoYW5kbGVJdGVtQ2xpY2s9e2hhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICBmb2xsb3dlcnNMZW5ndGg9e2ZvbGxvd2Vyc0xlbmd0aH1cclxuICAgICAgICAgICAgICBmb2xsb3dpbmdMZW5ndGg9e2ZvbGxvd2luZ0xlbmd0aH1cclxuICAgICAgICAgICAgICBvd25BY2NvdW50PXtvd25BY2NvdW50fVxyXG4gICAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cz17bG9nZ2VkVXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIHthY3RpdmVJdGVtID09PSBcInByb2ZpbGVcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgIHByb2ZpbGU9e3Byb2ZpbGV9XHJcbiAgICAgICAgICAgICAgICAgIG93bkFjY291bnQ9e293bkFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cz17bG9nZ2VkVXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAgICAgICBzZXRVc2VyRm9sbG93U3RhdHM9e3NldFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxQbGFjZUhvbGRlclBvc3RzIC8+XHJcbiAgICAgICAgICAgICAgICApIDogcG9zdHMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgcG9zdHMubWFwKHBvc3QgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkUG9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBvc3Q9e3Bvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0UG9zdHM9e3NldFBvc3RzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RvYXN0cj17c2V0U2hvd1RvYXN0cn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPE5vUHJvZmlsZVBvc3RzIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2FjdGl2ZUl0ZW0gPT09IFwiZm9sbG93ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxGb2xsb3dlcnNcclxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgIHNldFVzZXJGb2xsb3dTdGF0cz17c2V0VXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZVVzZXJJZD17cHJvZmlsZS51c2VyLl9pZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2FjdGl2ZUl0ZW0gPT09IFwiZm9sbG93aW5nXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxGb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgIHNldFVzZXJGb2xsb3dTdGF0cz17c2V0VXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZVVzZXJJZD17cHJvZmlsZS51c2VyLl9pZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2FjdGl2ZUl0ZW0gPT09IFwidXBkYXRlUHJvZmlsZVwiICYmIDxVcGRhdGVQcm9maWxlIFByb2ZpbGU9e3Byb2ZpbGV9IC8+fVxyXG5cclxuICAgICAgICAgICAge2FjdGl2ZUl0ZW0gPT09IFwic2V0dGluZ3NcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPFNldHRpbmdzIG5ld01lc3NhZ2VQb3B1cD17dXNlci5uZXdNZXNzYWdlUG9wdXB9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblByb2ZpbGVQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IGN0eC5xdWVyeTtcclxuICAgIGNvbnN0IHsgdG9rZW4gfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvcHJvZmlsZS8ke3VzZXJuYW1lfWAsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IHByb2ZpbGUsIGZvbGxvd2Vyc0xlbmd0aCwgZm9sbG93aW5nTGVuZ3RoIH0gPSByZXMuZGF0YTtcclxuXHJcbiAgICByZXR1cm4geyBwcm9maWxlLCBmb2xsb3dlcnNMZW5ndGgsIGZvbGxvd2luZ0xlbmd0aCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBlcnJvckxvYWRpbmc6IHRydWUgfTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCI7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi9jYXRjaEVycm9yc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEF4aW9zID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBgJHtiYXNlVXJsfS9hcGkvcHJvZmlsZWAsXHJcbiAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb2xsb3dVc2VyID0gYXN5bmMgKHVzZXJUb0ZvbGxvd0lkLCBzZXRVc2VyRm9sbG93U3RhdHMpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL2ZvbGxvdy8ke3VzZXJUb0ZvbGxvd0lkfWApO1xyXG5cclxuICAgIHNldFVzZXJGb2xsb3dTdGF0cyhwcmV2ID0+ICh7XHJcbiAgICAgIC4uLnByZXYsXHJcbiAgICAgIGZvbGxvd2luZzogWy4uLnByZXYuZm9sbG93aW5nLCB7IHVzZXI6IHVzZXJUb0ZvbGxvd0lkIH1dXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuZm9sbG93VXNlciA9IGFzeW5jICh1c2VyVG9VbmZvbGxvd0lkLCBzZXRVc2VyRm9sbG93U3RhdHMpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucHV0KGAvdW5mb2xsb3cvJHt1c2VyVG9VbmZvbGxvd0lkfWApO1xyXG5cclxuICAgIHNldFVzZXJGb2xsb3dTdGF0cyhwcmV2ID0+ICh7XHJcbiAgICAgIC4uLnByZXYsXHJcbiAgICAgIGZvbGxvd2luZzogcHJldi5mb2xsb3dpbmcuZmlsdGVyKGZvbGxvd2luZyA9PiBmb2xsb3dpbmcudXNlciAhPT0gdXNlclRvVW5mb2xsb3dJZClcclxuICAgIH0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZmlsZVVwZGF0ZSA9IGFzeW5jIChwcm9maWxlLCBzZXRMb2FkaW5nLCBzZXRFcnJvciwgcHJvZmlsZVBpY1VybCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGJpbywgZmFjZWJvb2ssIHlvdXR1YmUsIHR3aXR0ZXIsIGluc3RhZ3JhbSB9ID0gcHJvZmlsZTtcclxuXHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvdXBkYXRlYCwge1xyXG4gICAgICBiaW8sXHJcbiAgICAgIGZhY2Vib29rLFxyXG4gICAgICB5b3V0dWJlLFxyXG4gICAgICB0d2l0dGVyLFxyXG4gICAgICBpbnN0YWdyYW0sXHJcbiAgICAgIHByb2ZpbGVQaWNVcmxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgUm91dGVyLnJlbG9hZCgpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBzZXRFcnJvcihjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkVXBkYXRlID0gYXN5bmMgKHNldFN1Y2Nlc3MsIHVzZXJQYXNzd29yZHMpID0+IHtcclxuICBjb25zdCB7IGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQgfSA9IHVzZXJQYXNzd29yZHM7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLnBvc3QoYC9zZXR0aW5ncy9wYXNzd29yZGAsIHsgY3VycmVudFBhc3N3b3JkLCBuZXdQYXNzd29yZCB9KTtcclxuXHJcbiAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVNZXNzYWdlUG9wdXAgPSBhc3luYyAocG9wdXBTZXR0aW5nLCBzZXRQb3B1cFNldHRpbmcsIHNldFN1Y2Nlc3MpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL3NldHRpbmdzL21lc3NhZ2VQb3B1cGApO1xyXG5cclxuICAgIHNldFBvcHVwU2V0dGluZyghcG9wdXBTZXR0aW5nKTtcclxuICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCB1cGxvYWRQaWM9YXN5bmMobWVkaWEpPT57XHJcbiAgdHJ5XHJcbiAge1xyXG4gICAgY29uc3QgZm9ybT1uZXcgRm9ybURhdGEoKVxyXG4gICAgZm9ybS5hcHBlbmQoJ2ZpbGUnLG1lZGlhKVxyXG4gICAgZm9ybS5hcHBlbmQoJ3VwbG9hZF9wcmVzZXQnLCdzb2NpYWxfbWVkaWEnKVxyXG4gICAgZm9ybS5hcHBlbmQoJ2Nsb3VkX25hbWUnLFwiZHFheTN6eDZuXCIpXHJcblxyXG4gICAgY29uc3QgcmVzPWF3YWl0IGF4aW9zLnBvc3QocHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9VUkwsZm9ybSlcclxuICAgIHJldHVybiByZXMuZGF0YS51cmw7XHJcbiAgfVxyXG4gIGNhdGNoKGVycm9yKVxyXG4gIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBsb2FkUGljIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9