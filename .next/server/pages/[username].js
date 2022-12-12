(function() {
var exports = {};
exports.id = "pages/[username]";
exports.ids = ["pages/[username]"];
exports.modules = {

/***/ "./components/Common/CommonInputs.js":
/*!*******************************************!*\
  !*** ./components/Common/CommonInputs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Common\\CommonInputs.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function CommonInputs({
  user: {
    bio,
    facebook,
    instagram,
    youtube,
    twitter
  },
  handleChange,
  showSocialLinks,
  setShowSocialLinks
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true,
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.TextArea,
    name: "bio",
    value: bio,
    onChange: handleChange,
    placeholder: "bio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    content: "Add Social Links",
    color: "red",
    icon: "at",
    type: "button",
    onClick: () => setShowSocialLinks(!showSocialLinks),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), showSocialLinks && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "facebook f",
    iconPosition: "left",
    name: "facebook",
    value: facebook,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "twitter",
    iconPosition: "left",
    name: "twitter",
    value: twitter,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "instagram",
    iconPosition: "left",
    name: "instagram",
    value: instagram,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "youtube",
    iconPosition: "left",
    name: "youtube",
    value: youtube,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "attention",
    info: true,
    size: "small",
    header: "Social Media Links Are Optional!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CommonInputs);

/***/ }),

/***/ "./components/Common/ImageDropDiv.js":
/*!*******************************************!*\
  !*** ./components/Common/ImageDropDiv.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\aarya\\OneDrive\\Documents\\messenger\\components\\Common\\ImageDropDiv.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function ImageDropDiv({
  highlighted,
  setHighlighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia,
  profilePicUrl
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "/signup";

  const checkForSignupPage = () => signupRoute ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    icon: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "file image outline",
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    size: "huge",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), "Drag n Drop or Click to upload image")) : __jsx("span", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: profilePicUrl,
    alt: "Profile pic",
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    size: "huge",
    centered: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), "Drag n Drop or Click to upload image");

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    placeholder: true,
    basic: true,
    secondary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("input", {
    style: {
      display: "none"
    },
    type: "file",
    accept: "image/*",
    onChange: handleChange,
    name: "media",
    ref: inputRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx("div", {
    onDragOver: e => {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: e => {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: e => {
      e.preventDefault();
      setHighlighted(true);
      const droppedFile = Array.from(e.dataTransfer.files);
      setMedia(droppedFile[0]);
      setMediaPreview(URL.createObjectURL(droppedFile[0]));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, mediaPreview === null ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: highlighted ? "green" : "",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, checkForSignupPage())) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "green",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: mediaPreview,
    size: "medium",
    centered: true,
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ImageDropDiv);

/***/ }),

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_baseUrl_js-utils_catchErrors_js","components_Layout_NoData_js-components_Layout_Toastr_js-components_Post_CardPost_js"], function() { return __webpack_exec__("./pages/[username].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dHMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTGF5b3V0L1NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qcm9maWxlL0ZvbGxvd2Vycy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Byb2ZpbGUvRm9sbG93aW5nLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlSGVhZGVyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlTWVudVRhYnMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qcm9maWxlL1NldHRpbmdzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUHJvZmlsZS9VcGRhdGVQcm9maWxlLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL1t1c2VybmFtZV0uanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvcHJvZmlsZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvdXBsb2FkUGljVG9DbG91ZGluYXJ5LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtbW9tZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkNvbW1vbklucHV0cyIsInVzZXIiLCJiaW8iLCJmYWNlYm9vayIsImluc3RhZ3JhbSIsInlvdXR1YmUiLCJ0d2l0dGVyIiwiaGFuZGxlQ2hhbmdlIiwic2hvd1NvY2lhbExpbmtzIiwic2V0U2hvd1NvY2lhbExpbmtzIiwiVGV4dEFyZWEiLCJJbWFnZURyb3BEaXYiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwiaW5wdXRSZWYiLCJtZWRpYVByZXZpZXciLCJzZXRNZWRpYVByZXZpZXciLCJzZXRNZWRpYSIsInByb2ZpbGVQaWNVcmwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaWdudXBSb3V0ZSIsInBhdGhuYW1lIiwiY2hlY2tGb3JTaWdudXBQYWdlIiwiY3Vyc29yIiwiY3VycmVudCIsImNsaWNrIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRyb3BwZWRGaWxlIiwiQXJyYXkiLCJmcm9tIiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJTcGlubmVyIiwiRm9sbG93ZXJzIiwibG9nZ2VkVXNlckZvbGxvd1N0YXRzIiwic2V0VXNlckZvbGxvd1N0YXRzIiwicHJvZmlsZVVzZXJJZCIsImZvbGxvd2VycyIsInNldEZvbGxvd2VycyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmb2xsb3dMb2FkaW5nIiwic2V0Rm9sbG93TG9hZGluZyIsInVzZUVmZmVjdCIsImdldEZvbGxvd2VycyIsInJlcyIsImF4aW9zIiwiYmFzZVVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29va2llIiwiZGF0YSIsImVycm9yIiwiYWxlcnQiLCJsZW5ndGgiLCJtYXAiLCJwcm9maWxlRm9sbG93ZXIiLCJpc0ZvbGxvd2luZyIsImZvbGxvd2luZyIsImZpbHRlciIsIl9pZCIsInVuZm9sbG93VXNlciIsImZvbGxvd1VzZXIiLCJ1c2VybmFtZSIsIm5hbWUiLCJGb2xsb3dpbmciLCJzZXRGb2xsb3dpbmciLCJnZXRGb2xsb3dpbmciLCJwcm9maWxlRm9sbG93aW5nIiwiUHJvZmlsZUhlYWRlciIsInByb2ZpbGUiLCJvd25BY2NvdW50IiwibWFyZ2luQm90dG9tIiwic29jaWFsIiwiZW1haWwiLCJjb2xvciIsIlByb2ZpbGVNZW51VGFicyIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJmb2xsb3dlcnNMZW5ndGgiLCJmb2xsb3dpbmdMZW5ndGgiLCJTZXR0aW5ncyIsIm5ld01lc3NhZ2VQb3B1cCIsInBhc3N3b3JkRmllbGRzIiwic2hvd1Bhc3N3b3JkRmllbGRzIiwibmV3TWVzc2FnZVNldHRpbmdzIiwic2hvd05ld01lc3NhZ2VTZXR0aW5ncyIsImlzRmlyc3RSdW4iLCJ1c2VSZWYiLCJwb3B1cFNldHRpbmciLCJzZXRQb3B1cFNldHRpbmciLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsInNldFRpbWVvdXQiLCJtYXJnaW5Ub3AiLCJ0b2dnbGVNZXNzYWdlUG9wdXAiLCJVcGRhdGVQYXNzd29yZCIsImVycm9yTXNnIiwic2V0RXJyb3IiLCJ1c2VyUGFzc3dvcmRzIiwic2V0VXNlclBhc3N3b3JkcyIsImN1cnJlbnRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwidHlwZWQiLCJzaG93VHlwZWQiLCJmaWVsZDEiLCJmaWVsZDIiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJwYXNzd29yZFVwZGF0ZSIsImNpcmN1bGFyIiwibGluayIsIm9uQ2xpY2siLCJVcGRhdGVQcm9maWxlIiwiUHJvZmlsZSIsInNldFByb2ZpbGUiLCJzZXRFcnJvck1zZyIsIm1lZGlhIiwidXBsb2FkUGljIiwicHJvZmlsZVVwZGF0ZSIsIlByb2ZpbGVQYWdlIiwiZXJyb3JMb2FkaW5nIiwidXNlckZvbGxvd1N0YXRzIiwicG9zdHMiLCJzZXRQb3N0cyIsInNob3dUb2FzdHIiLCJzZXRTaG93VG9hc3RyIiwic2V0QWN0aXZlSXRlbSIsImNsaWNrZWRUYWIiLCJnZXRQb3N0cyIsInF1ZXJ5IiwicG9zdCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInRva2VuIiwicGFyc2VDb29raWVzIiwiQXhpb3MiLCJiYXNlVVJMIiwidXNlclRvRm9sbG93SWQiLCJjYXRjaEVycm9ycyIsInVzZXJUb1VuZm9sbG93SWQiLCJwdXQiLCJSb3V0ZXIiLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwcm9jZXNzIiwidXJsIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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b0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvW3VzZXJuYW1lXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBUZXh0QXJlYSwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQ29tbW9uSW5wdXRzKHtcclxuICB1c2VyOiB7IGJpbywgZmFjZWJvb2ssIGluc3RhZ3JhbSwgeW91dHViZSwgdHdpdHRlciB9LFxyXG4gIGhhbmRsZUNoYW5nZSxcclxuICBzaG93U29jaWFsTGlua3MsXHJcbiAgc2V0U2hvd1NvY2lhbExpbmtzXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0uRmllbGRcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIGNvbnRyb2w9e1RleHRBcmVhfVxyXG4gICAgICAgIG5hbWU9XCJiaW9cIlxyXG4gICAgICAgIHZhbHVlPXtiaW99XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cImJpb1wiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29udGVudD1cIkFkZCBTb2NpYWwgTGlua3NcIlxyXG4gICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICBpY29uPVwiYXRcIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTb2NpYWxMaW5rcyghc2hvd1NvY2lhbExpbmtzKX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHtzaG93U29jaWFsTGlua3MgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgaWNvbj1cImZhY2Vib29rIGZcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgbmFtZT1cImZhY2Vib29rXCJcclxuICAgICAgICAgICAgdmFsdWU9e2ZhY2Vib29rfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwidHdpdHRlclwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwidHdpdHRlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0d2l0dGVyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwiaW5zdGFncmFtXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJpbnN0YWdyYW1cIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5zdGFncmFtfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt5b3V0dWJlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgICBpY29uPVwiYXR0ZW50aW9uXCJcclxuICAgICAgICAgICAgaW5mb1xyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBoZWFkZXI9XCJTb2NpYWwgTWVkaWEgTGlua3MgQXJlIE9wdGlvbmFsIVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbW9uSW5wdXRzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIFNlZ21lbnQsIEltYWdlLCBJY29uLCBIZWFkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBJbWFnZURyb3BEaXYoe1xyXG4gIGhpZ2hsaWdodGVkLFxyXG4gIHNldEhpZ2hsaWdodGVkLFxyXG4gIGlucHV0UmVmLFxyXG4gIGhhbmRsZUNoYW5nZSxcclxuICBtZWRpYVByZXZpZXcsXHJcbiAgc2V0TWVkaWFQcmV2aWV3LFxyXG4gIHNldE1lZGlhLFxyXG4gIHByb2ZpbGVQaWNVcmxcclxufSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBzaWdudXBSb3V0ZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvc2lnbnVwXCI7XHJcblxyXG4gIGNvbnN0IGNoZWNrRm9yU2lnbnVwUGFnZSA9ICgpID0+XHJcbiAgICBzaWdudXBSb3V0ZSA/IChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZGVyIGljb24+XHJcbiAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICBuYW1lPVwiZmlsZSBpbWFnZSBvdXRsaW5lXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICAgIHNpemU9XCJodWdlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICBEcmFnIG4gRHJvcCBvciBDbGljayB0byB1cGxvYWQgaW1hZ2VcclxuICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgPC8+XHJcbiAgICApIDogKFxyXG4gICAgICA8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e3Byb2ZpbGVQaWNVcmx9XHJcbiAgICAgICAgICBhbHQ9XCJQcm9maWxlIHBpY1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICBzaXplPVwiaHVnZVwiXHJcbiAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgRHJhZyBuIERyb3Agb3IgQ2xpY2sgdG8gdXBsb2FkIGltYWdlXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICA8U2VnbWVudCBwbGFjZWhvbGRlciBiYXNpYyBzZWNvbmRhcnk+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcclxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkRyYWdPdmVyPXtlID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXtlID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkRyb3A9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgZHJvcHBlZEZpbGUgPSBBcnJheS5mcm9tKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuICAgICAgICAgICAgICBzZXRNZWRpYShkcm9wcGVkRmlsZVswXSk7XHJcbiAgICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZHJvcHBlZEZpbGVbMF0pKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21lZGlhUHJldmlldyA9PT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFNlZ21lbnQgY29sb3I9e2hpZ2hsaWdodGVkID8gXCJncmVlblwiIDogXCJcIn0gcGxhY2Vob2xkZXIgYmFzaWM+XHJcbiAgICAgICAgICAgICAgICAgIHtjaGVja0ZvclNpZ251cFBhZ2UoKX1cclxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj1cImdyZWVuXCIgcGxhY2Vob2xkZXIgYmFzaWM+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXttZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZURyb3BEaXY7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgU3Bpbm5lciA9ICgpID0+IDxkaXYgY2xhc3NOYW1lPVwibXlTcGlubmVyXCIgLz47XHJcbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW1hZ2UsIExpc3QgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL0xheW91dC9TcGlubmVyXCI7XHJcbmltcG9ydCB7IE5vRm9sbG93RGF0YSB9IGZyb20gXCIuLi9MYXlvdXQvTm9EYXRhXCI7XHJcbmltcG9ydCB7IGZvbGxvd1VzZXIsIHVuZm9sbG93VXNlciB9IGZyb20gXCIuLi8uLi91dGlscy9wcm9maWxlQWN0aW9uc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3QgRm9sbG93ZXJzID0gKHtcclxuICB1c2VyLFxyXG4gIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cyxcclxuICBzZXRVc2VyRm9sbG93U3RhdHMsXHJcbiAgcHJvZmlsZVVzZXJJZFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2ZvbGxvd2Vycywgc2V0Rm9sbG93ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZvbGxvd0xvYWRpbmcsIHNldEZvbGxvd0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0Rm9sbG93ZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvcHJvZmlsZS9mb2xsb3dlcnMvJHtwcm9maWxlVXNlcklkfWAsIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0Rm9sbG93ZXJzKHJlcy5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydChcIkVycm9yIExvYWRpbmcgRm9sbG93ZXJzXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRGb2xsb3dlcnMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICApIDogZm9sbG93ZXJzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgZm9sbG93ZXJzLm1hcChwcm9maWxlRm9sbG93ZXIgPT4ge1xyXG4gICAgICAgICAgLyogICovXHJcblxyXG4gICAgICAgICAgY29uc3QgaXNGb2xsb3dpbmcgPVxyXG4gICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgZm9sbG93aW5nID0+IGZvbGxvd2luZy51c2VyID09PSBwcm9maWxlRm9sbG93ZXIudXNlci5faWRcclxuICAgICAgICAgICAgKS5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaXN0IGtleT17cHJvZmlsZUZvbGxvd2VyLnVzZXIuX2lkfSBkaXZpZGVkIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCBmbG9hdGVkPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGVGb2xsb3dlci51c2VyLl9pZCAhPT0gdXNlci5faWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtpc0ZvbGxvd2luZyA/IFwiaW5zdGFncmFtXCIgOiBcInR3aXR0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGljb249e2lzRm9sbG93aW5nID8gXCJjaGVja1wiIDogXCJhZGQgdXNlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXNGb2xsb3dpbmcgPyBcIkZvbGxvd2luZ1wiIDogXCJGb2xsb3dcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmb2xsb3dMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGb2xsb3dMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHVuZm9sbG93VXNlcihwcm9maWxlRm9sbG93ZXIudXNlci5faWQsIHNldFVzZXJGb2xsb3dTdGF0cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZvbGxvd1VzZXIocHJvZmlsZUZvbGxvd2VyLnVzZXIuX2lkLCBzZXRVc2VyRm9sbG93U3RhdHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9sbG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBhdmF0YXIgc3JjPXtwcm9maWxlRm9sbG93ZXIudXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCBhcz1cImFcIiBocmVmPXtgLyR7cHJvZmlsZUZvbGxvd2VyLnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlRm9sbG93ZXIudXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKSA6IChcclxuICAgICAgICA8Tm9Gb2xsb3dEYXRhIGZvbGxvd2Vyc0NvbXBvbmVudD17dHJ1ZX0gLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dlcnM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW1hZ2UsIExpc3QgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL0xheW91dC9TcGlubmVyXCI7XHJcbmltcG9ydCB7IE5vRm9sbG93RGF0YSB9IGZyb20gXCIuLi9MYXlvdXQvTm9EYXRhXCI7XHJcbmltcG9ydCB7IGZvbGxvd1VzZXIsIHVuZm9sbG93VXNlciB9IGZyb20gXCIuLi8uLi91dGlscy9wcm9maWxlQWN0aW9uc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3QgRm9sbG93aW5nID0gKHtcclxuICB1c2VyLFxyXG4gIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cyxcclxuICBzZXRVc2VyRm9sbG93U3RhdHMsXHJcbiAgcHJvZmlsZVVzZXJJZFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2ZvbGxvd2luZywgc2V0Rm9sbG93aW5nXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZvbGxvd0xvYWRpbmcsIHNldEZvbGxvd0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0Rm9sbG93aW5nID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvcHJvZmlsZS9mb2xsb3dpbmcvJHtwcm9maWxlVXNlcklkfWAsIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0Rm9sbG93aW5nKHJlcy5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydChcIkVycm9yIExvYWRpbmcgRm9sbG93ZXJzXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRGb2xsb3dpbmcoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICApIDogZm9sbG93aW5nLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgZm9sbG93aW5nLm1hcChwcm9maWxlRm9sbG93aW5nID0+IHtcclxuICAgICAgICAgIC8qICAqL1xyXG5cclxuICAgICAgICAgIGNvbnN0IGlzRm9sbG93aW5nID1cclxuICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIGZvbGxvd2luZyA9PiBmb2xsb3dpbmcudXNlciA9PT0gcHJvZmlsZUZvbGxvd2luZy51c2VyLl9pZFxyXG4gICAgICAgICAgICApLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpc3Qga2V5PXtwcm9maWxlRm9sbG93aW5nLnVzZXIuX2lkfSBkaXZpZGVkIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCBmbG9hdGVkPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGVGb2xsb3dpbmcudXNlci5faWQgIT09IHVzZXIuX2lkICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17aXNGb2xsb3dpbmcgPyBcImluc3RhZ3JhbVwiIDogXCJ0d2l0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpc0ZvbGxvd2luZyA/IFwiY2hlY2tcIiA6IFwiYWRkIHVzZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2lzRm9sbG93aW5nID8gXCJGb2xsb3dpbmdcIiA6IFwiRm9sbG93XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Zm9sbG93TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9sbG93TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB1bmZvbGxvd1VzZXIocHJvZmlsZUZvbGxvd2luZy51c2VyLl9pZCwgc2V0VXNlckZvbGxvd1N0YXRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogZm9sbG93VXNlcihwcm9maWxlRm9sbG93aW5nLnVzZXIuX2lkLCBzZXRVc2VyRm9sbG93U3RhdHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9sbG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBhdmF0YXIgc3JjPXtwcm9maWxlRm9sbG93aW5nLnVzZXIucHJvZmlsZVBpY1VybH0gLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgYXM9XCJhXCIgaHJlZj17YC8ke3Byb2ZpbGVGb2xsb3dpbmcudXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGVGb2xsb3dpbmcudXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKSA6IChcclxuICAgICAgICA8Tm9Gb2xsb3dEYXRhIGZvbGxvd2luZ0NvbXBvbmVudD17dHJ1ZX0gLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dpbmc7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWdtZW50LCBJbWFnZSwgR3JpZCwgRGl2aWRlciwgSGVhZGVyLCBCdXR0b24sIExpc3QgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgZm9sbG93VXNlciwgdW5mb2xsb3dVc2VyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlSGVhZGVyKHtcclxuICBwcm9maWxlLFxyXG4gIG93bkFjY291bnQsXHJcbiAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLFxyXG4gIHNldFVzZXJGb2xsb3dTdGF0c1xyXG59KSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpc0ZvbGxvd2luZyA9XHJcbiAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmxlbmd0aCA+IDAgJiZcclxuICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcuZmlsdGVyKFxyXG4gICAgICBmb2xsb3dpbmcgPT4gZm9sbG93aW5nLnVzZXIgPT09IHByb2ZpbGUudXNlci5faWRcclxuICAgICkubGVuZ3RoID4gMDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgIDxHcmlkIHN0YWNrYWJsZT5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTF9PlxyXG4gICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgYXM9XCJoMlwiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9maWxlLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcblxyXG4gICAgICAgICAgICA8R3JpZC5Sb3cgc3RyZXRjaGVkPlxyXG4gICAgICAgICAgICAgIHtwcm9maWxlLmJpb31cclxuICAgICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICB7cHJvZmlsZS5zb2NpYWwgPyAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGNvbnRlbnQ9e3Byb2ZpbGUudXNlci5lbWFpbH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZS5zb2NpYWwuZmFjZWJvb2sgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJmYWNlYm9va1wiIGNvbG9yPVwiYmx1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9maWxlLnNvY2lhbC5mYWNlYm9va31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZS5zb2NpYWwuaW5zdGFncmFtICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPVwiaW5zdGFncmFtXCIgY29sb3I9XCJyZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17cHJvZmlsZS5zb2NpYWwuaW5zdGFncmFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlLnNvY2lhbC55b3V0dWJlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPVwieW91dHViZVwiIGNvbG9yPVwicmVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb2ZpbGUuc29jaWFsLnlvdXR1YmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuc29jaWFsLnR3aXR0ZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJ0d2l0dGVyXCIgY29sb3I9XCJibHVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb2ZpbGUuc29jaWFsLnR3aXR0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8Pk5vIFNvY2lhbCBNZWRpYSBMaW5rcyA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezV9IHN0cmV0Y2hlZCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc2l6ZT1cImxhcmdlXCIgYXZhdGFyIHNyYz17cHJvZmlsZS51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgeyFvd25BY2NvdW50ICYmIChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb21wYWN0XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtpc0ZvbGxvd2luZyA/IFwiRm9sbG93aW5nXCIgOiBcIkZvbGxvd1wifVxyXG4gICAgICAgICAgICAgICAgaWNvbj17aXNGb2xsb3dpbmcgPyBcImNoZWNrIGNpcmNsZVwiIDogXCJhZGQgdXNlclwifVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e2lzRm9sbG93aW5nID8gXCJpbnN0YWdyYW1cIiA6IFwidHdpdHRlclwifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICBpc0ZvbGxvd2luZ1xyXG4gICAgICAgICAgICAgICAgICAgID8gYXdhaXQgdW5mb2xsb3dVc2VyKHByb2ZpbGUudXNlci5faWQsIHNldFVzZXJGb2xsb3dTdGF0cylcclxuICAgICAgICAgICAgICAgICAgICA6IGF3YWl0IGZvbGxvd1VzZXIocHJvZmlsZS51c2VyLl9pZCwgc2V0VXNlckZvbGxvd1N0YXRzKTtcclxuICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlTWVudVRhYnMoe1xyXG4gIGFjdGl2ZUl0ZW0sXHJcbiAgaGFuZGxlSXRlbUNsaWNrLFxyXG4gIGZvbGxvd2Vyc0xlbmd0aCxcclxuICBmb2xsb3dpbmdMZW5ndGgsXHJcbiAgb3duQWNjb3VudCxcclxuICBsb2dnZWRVc2VyRm9sbG93U3RhdHNcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TWVudSBwb2ludGluZyBzZWNvbmRhcnk+XHJcbiAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgbmFtZT1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcInByb2ZpbGVcIn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhcInByb2ZpbGVcIil9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgbmFtZT17YCR7Zm9sbG93ZXJzTGVuZ3RofSBmb2xsb3dlcnNgfVxyXG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcImZvbGxvd2Vyc1wifVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKFwiZm9sbG93ZXJzXCIpfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHtvd25BY2NvdW50ID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgID8gbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgOiAwXHJcbiAgICAgICAgICAgICAgfSBmb2xsb3dpbmdgfVxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJmb2xsb3dpbmdcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soXCJmb2xsb3dpbmdcIil9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cIlVwZGF0ZSBQcm9maWxlXCJcclxuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09IFwidXBkYXRlUHJvZmlsZVwifVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhcInVwZGF0ZVByb2ZpbGVcIil9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNldHRpbmdzXCJcclxuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09IFwic2V0dGluZ3NcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soXCJzZXR0aW5nc1wiKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgIG5hbWU9e2Ake2ZvbGxvd2luZ0xlbmd0aH0gZm9sbG93aW5nYH1cclxuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcImZvbGxvd2luZ1wifVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soXCJmb2xsb3dpbmdcIil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVNZW51VGFicztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaXN0LCBEaXZpZGVyLCBNZXNzYWdlLCBDaGVja2JveCwgRm9ybSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHBhc3N3b3JkVXBkYXRlLCB0b2dnbGVNZXNzYWdlUG9wdXAgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIFNldHRpbmdzKHsgbmV3TWVzc2FnZVBvcHVwIH0pIHtcclxuICBjb25zdCBbcGFzc3dvcmRGaWVsZHMsIHNob3dQYXNzd29yZEZpZWxkc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtuZXdNZXNzYWdlU2V0dGluZ3MsIHNob3dOZXdNZXNzYWdlU2V0dGluZ3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpc0ZpcnN0UnVuID0gdXNlUmVmKHRydWUpO1xyXG4gIGNvbnN0IFtwb3B1cFNldHRpbmcsIHNldFBvcHVwU2V0dGluZ10gPSB1c2VTdGF0ZShuZXdNZXNzYWdlUG9wdXApO1xyXG5cclxuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzdWNjZXNzICYmIHNldFRpbWVvdXQoKCkgPT4gc2V0U3VjY2VzcyhmYWxzZSksIDMwMDApO1xyXG4gIH0sIFtzdWNjZXNzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNGaXJzdFJ1bi5jdXJyZW50KSB7XHJcbiAgICAgIGlzRmlyc3RSdW4uY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfSwgW3BvcHVwU2V0dGluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3N1Y2Nlc3MgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TWVzc2FnZSBzdWNjZXNzIGljb249XCJjaGVjayBjaXJjbGVcIiBoZWFkZXI9XCJVcGRhdGVkIFN1Y2Nlc3NmdWxseVwiIC8+XHJcbiAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxMaXN0IHNpemU9XCJodWdlXCIgYW5pbWF0ZWQ+XHJcbiAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cInVzZXIgc2VjcmV0XCIgc2l6ZT1cImxhcmdlXCIgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiIC8+XHJcbiAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICA8TGlzdC5IZWFkZXJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93UGFzc3dvcmRGaWVsZHMoIXBhc3N3b3JkRmllbGRzKX1cclxuICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJVcGRhdGUgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAge3Bhc3N3b3JkRmllbGRzICYmIChcclxuICAgICAgICAgICAgPFVwZGF0ZVBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgc2V0U3VjY2Vzcz17c2V0U3VjY2Vzc31cclxuICAgICAgICAgICAgICBzaG93UGFzc3dvcmRGaWVsZHM9e3Nob3dQYXNzd29yZEZpZWxkc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cInBhcGVyIHBsYW5lIG91dGxpbmVcIiBzaXplPVwibGFyZ2VcIiB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCIgLz5cclxuXHJcbiAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICA8TGlzdC5IZWFkZXJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93TmV3TWVzc2FnZVNldHRpbmdzKCFuZXdNZXNzYWdlU2V0dGluZ3MpfVxyXG4gICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIlNob3cgTmV3IE1lc3NhZ2UgUG9wdXA/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgQ29udHJvbCB3aGV0aGVyIGEgUG9wdXAgc2hvdWxkIGFwcGVhciB3aGVuIHRoZXJlIGlzIGEgTmV3IE1lc3NhZ2Ugb3Igbm90LlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3BvcHVwU2V0dGluZ31cclxuICAgICAgICAgICAgICB0b2dnbGVcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZU1lc3NhZ2VQb3B1cChwb3B1cFNldHRpbmcsIHNldFBvcHVwU2V0dGluZywgc2V0U3VjY2VzcylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuXHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgVXBkYXRlUGFzc3dvcmQgPSAoeyBzZXRTdWNjZXNzLCBzaG93UGFzc3dvcmRGaWVsZHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBbdXNlclBhc3N3b3Jkcywgc2V0VXNlclBhc3N3b3Jkc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBjdXJyZW50UGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBuZXdQYXNzd29yZDogXCJcIlxyXG4gIH0pO1xyXG4gIGNvbnN0IFt0eXBlZCwgc2hvd1R5cGVkXSA9IHVzZVN0YXRlKHtcclxuICAgIGZpZWxkMTogZmFsc2UsXHJcbiAgICBmaWVsZDI6IGZhbHNlXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHsgZmllbGQxLCBmaWVsZDIgfSA9IHR5cGVkO1xyXG5cclxuICBjb25zdCB7IGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQgfSA9IHVzZXJQYXNzd29yZHM7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRVc2VyUGFzc3dvcmRzKHByZXYgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGVycm9yTXNnICYmIHNldFRpbWVvdXQoKCkgPT4gc2V0RXJyb3IobnVsbCksIDUwMDApO1xyXG4gIH0sIFtlcnJvck1zZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9XHJcbiAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgZSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICAgIGF3YWl0IHBhc3N3b3JkVXBkYXRlKHNldFN1Y2Nlc3MsIHVzZXJQYXNzd29yZHMpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgICAgc2hvd1Bhc3N3b3JkRmllbGRzKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3QuTGlzdD5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImV5ZVwiLFxyXG4gICAgICAgICAgICAgICAgY2lyY3VsYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gc2hvd1R5cGVkKHByZXYgPT4gKHsgLi4ucHJldiwgZmllbGQxOiAhZmllbGQxIH0pKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdHlwZT17ZmllbGQxID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDdXJyZW50IFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGN1cnJlbnQgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjdXJyZW50UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRQYXNzd29yZH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImV5ZVwiLFxyXG4gICAgICAgICAgICAgICAgY2lyY3VsYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gc2hvd1R5cGVkKHByZXYgPT4gKHsgLi4ucHJldiwgZmllbGQyOiAhZmllbGQyIH0pKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdHlwZT17ZmllbGQyID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOZXcgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTmV3IFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwibmV3UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgey8qIEJVVFRPTlMgKi99XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgY3VycmVudFBhc3N3b3JkID09PSBcIlwiIHx8IG5ld1Bhc3N3b3JkID09PSBcIlwifVxyXG4gICAgICAgICAgICAgIGNvbXBhY3RcclxuICAgICAgICAgICAgICBpY29uPVwiY29uZmlndXJlXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInRlYWxcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJDb25maXJtXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICAgICAgICBjb21wYWN0XHJcbiAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIkNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd1Bhc3N3b3JkRmllbGRzKGZhbHNlKX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxNZXNzYWdlIGljb249XCJtZWhcIiBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e2Vycm9yTXNnfSAvPlxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPC9MaXN0Lkxpc3Q+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VEcm9wRGl2IGZyb20gXCIuLi9Db21tb24vSW1hZ2VEcm9wRGl2XCI7XHJcbmltcG9ydCBDb21tb25JbnB1dHMgZnJvbSBcIi4uL0NvbW1vbi9Db21tb25JbnB1dHNcIjtcclxuaW1wb3J0IHVwbG9hZFBpYyBmcm9tIFwiLi4vLi4vdXRpbHMvdXBsb2FkUGljVG9DbG91ZGluYXJ5XCI7XHJcbmltcG9ydCB7IHByb2ZpbGVVcGRhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIFVwZGF0ZVByb2ZpbGUoeyBQcm9maWxlIH0pIHtcclxuICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBwcm9maWxlUGljVXJsOiBQcm9maWxlLnVzZXIucHJvZmlsZVBpY1VybCxcclxuICAgIGJpbzogUHJvZmlsZS5iaW8gfHwgXCJcIixcclxuICAgIGZhY2Vib29rOiAoUHJvZmlsZS5zb2NpYWwgJiYgUHJvZmlsZS5zb2NpYWwuZmFjZWJvb2spIHx8IFwiXCIsXHJcbiAgICB5b3V0dWJlOiAoUHJvZmlsZS5zb2NpYWwgJiYgUHJvZmlsZS5zb2NpYWwueW91dHViZSkgfHwgXCJcIixcclxuICAgIGluc3RhZ3JhbTogKFByb2ZpbGUuc29jaWFsICYmIFByb2ZpbGUuc29jaWFsLmluc3RhZ3JhbSkgfHwgXCJcIixcclxuICAgIHR3aXR0ZXI6IChQcm9maWxlLnNvY2lhbCAmJiBQcm9maWxlLnNvY2lhbC50d2l0dGVyKSB8fCBcIlwiXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1NvY2lhbExpbmtzLCBzZXRTaG93U29jaWFsTGlua3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbaGlnaGxpZ2h0ZWQsIHNldEhpZ2hsaWdodGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21lZGlhUHJldmlldywgc2V0TWVkaWFQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIGZpbGVzIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBpZiAobmFtZSA9PT0gXCJtZWRpYVwiKSB7XHJcbiAgICAgIHNldE1lZGlhKGZpbGVzWzBdKTtcclxuICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pKTtcclxuICAgIH1cclxuICAgIHNldFByb2ZpbGUocHJldiA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9XHJcbiAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgZSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICAgIGxldCBwcm9maWxlUGljVXJsO1xyXG5cclxuICAgICAgICAgIGlmIChtZWRpYSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwcm9maWxlUGljVXJsID0gYXdhaXQgdXBsb2FkUGljKG1lZGlhKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAobWVkaWEgIT09IG51bGwgJiYgIXByb2ZpbGVQaWNVcmwpIHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRFcnJvck1zZyhcIkVycm9yIFVwbG9hZGluZyBJbWFnZVwiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhd2FpdCBwcm9maWxlVXBkYXRlKHByb2ZpbGUsIHNldExvYWRpbmcsIHNldEVycm9yTXNnLCBwcm9maWxlUGljVXJsKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3JNc2coZmFsc2UpfVxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICAgIGNvbnRlbnQ9e2Vycm9yTXNnfVxyXG4gICAgICAgICAgYXR0YWNoZWRcclxuICAgICAgICAgIGhlYWRlcj1cIk9vcHMhXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8SW1hZ2VEcm9wRGl2XHJcbiAgICAgICAgICBpbnB1dFJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICBoaWdobGlnaHRlZD17aGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICBzZXRIaWdobGlnaHRlZD17c2V0SGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIG1lZGlhUHJldmlldz17bWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgc2V0TWVkaWFQcmV2aWV3PXtzZXRNZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICBzZXRNZWRpYT17c2V0TWVkaWF9XHJcbiAgICAgICAgICBwcm9maWxlUGljVXJsPXtwcm9maWxlLnByb2ZpbGVQaWNVcmx9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPENvbW1vbklucHV0c1xyXG4gICAgICAgICAgdXNlcj17cHJvZmlsZX1cclxuICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgc2hvd1NvY2lhbExpbmtzPXtzaG93U29jaWFsTGlua3N9XHJcbiAgICAgICAgICBzZXRTaG93U29jaWFsTGlua3M9e3NldFNob3dTb2NpYWxMaW5rc31cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY29sb3I9XCJibHVlXCJcclxuICAgICAgICAgIGljb249XCJwZW5jaWwgYWx0ZXJuYXRlXCJcclxuICAgICAgICAgIGRpc2FibGVkPXtwcm9maWxlLmJpbyA9PT0gXCJcIiB8fCBsb2FkaW5nfVxyXG4gICAgICAgICAgY29udGVudD1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVQcm9maWxlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IE5vUHJvZmlsZVBvc3RzLCBOb1Byb2ZpbGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhXCI7XHJcbmltcG9ydCBDYXJkUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0XCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBQbGFjZUhvbGRlclBvc3RzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1BsYWNlSG9sZGVyR3JvdXBcIjtcclxuaW1wb3J0IFByb2ZpbGVNZW51VGFicyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVNZW51VGFic1wiO1xyXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVIZWFkZXJcIjtcclxuaW1wb3J0IEZvbGxvd2VycyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlL0ZvbGxvd2Vyc1wiO1xyXG5pbXBvcnQgRm9sbG93aW5nIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvRm9sbG93aW5nXCI7XHJcbmltcG9ydCBVcGRhdGVQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvVXBkYXRlUHJvZmlsZVwiO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZS9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBQb3N0RGVsZXRlVG9hc3RyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1RvYXN0clwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZVBhZ2Uoe1xyXG4gIGVycm9yTG9hZGluZyxcclxuICBwcm9maWxlLFxyXG4gIGZvbGxvd2Vyc0xlbmd0aCxcclxuICBmb2xsb3dpbmdMZW5ndGgsXHJcbiAgdXNlcixcclxuICB1c2VyRm9sbG93U3RhdHNcclxufSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dUb2FzdHIsIHNldFNob3dUb2FzdHJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZShcInByb2ZpbGVcIik7XHJcbiAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID0gY2xpY2tlZFRhYiA9PiBzZXRBY3RpdmVJdGVtKGNsaWNrZWRUYWIpO1xyXG5cclxuICBjb25zdCBbbG9nZ2VkVXNlckZvbGxvd1N0YXRzLCBzZXRVc2VyRm9sbG93U3RhdHNdID0gdXNlU3RhdGUodXNlckZvbGxvd1N0YXRzKTtcclxuXHJcbiAgY29uc3Qgb3duQWNjb3VudCA9IHByb2ZpbGUudXNlci5faWQgPT09IHVzZXIuX2lkO1xyXG5cclxuICBpZiAoZXJyb3JMb2FkaW5nKSByZXR1cm4gPE5vUHJvZmlsZSAvPjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFBvc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlL3Bvc3RzLyR7dXNlcm5hbWV9YCwge1xyXG4gICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRQb3N0cyhyZXMuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoXCJFcnJvciBMb2FkaW5nIFBvc3RzXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBnZXRQb3N0cygpO1xyXG4gIH0sIFtyb3V0ZXIucXVlcnkudXNlcm5hbWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNob3dUb2FzdHIgJiYgc2V0VGltZW91dCgoKSA9PiBzZXRTaG93VG9hc3RyKGZhbHNlKSwgNDAwMCk7XHJcbiAgfSwgW3Nob3dUb2FzdHJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaG93VG9hc3RyICYmIDxQb3N0RGVsZXRlVG9hc3RyIC8+fVxyXG5cclxuICAgICAgPEdyaWQgc3RhY2thYmxlPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPFByb2ZpbGVNZW51VGFic1xyXG4gICAgICAgICAgICAgIGFjdGl2ZUl0ZW09e2FjdGl2ZUl0ZW19XHJcbiAgICAgICAgICAgICAgaGFuZGxlSXRlbUNsaWNrPXtoYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgZm9sbG93ZXJzTGVuZ3RoPXtmb2xsb3dlcnNMZW5ndGh9XHJcbiAgICAgICAgICAgICAgZm9sbG93aW5nTGVuZ3RoPXtmb2xsb3dpbmdMZW5ndGh9XHJcbiAgICAgICAgICAgICAgb3duQWNjb3VudD17b3duQWNjb3VudH1cclxuICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICB7YWN0aXZlSXRlbSA9PT0gXCJwcm9maWxlXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlclxyXG4gICAgICAgICAgICAgICAgICBwcm9maWxlPXtwcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgICBvd25BY2NvdW50PXtvd25BY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgICAgc2V0VXNlckZvbGxvd1N0YXRzPXtzZXRVc2VyRm9sbG93U3RhdHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICA8UGxhY2VIb2xkZXJQb3N0cyAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IHBvc3RzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgIHBvc3RzLm1hcChwb3N0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFBvc3RcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0PXtwb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIHNldFBvc3RzPXtzZXRQb3N0c31cclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dUb2FzdHI9e3NldFNob3dUb2FzdHJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxOb1Byb2ZpbGVQb3N0cyAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHthY3RpdmVJdGVtID09PSBcImZvbGxvd2Vyc1wiICYmIChcclxuICAgICAgICAgICAgICA8Rm9sbG93ZXJzXHJcbiAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzPXtsb2dnZWRVc2VyRm9sbG93U3RhdHN9XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyRm9sbG93U3RhdHM9e3NldFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgIHByb2ZpbGVVc2VySWQ9e3Byb2ZpbGUudXNlci5faWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHthY3RpdmVJdGVtID09PSBcImZvbGxvd2luZ1wiICYmIChcclxuICAgICAgICAgICAgICA8Rm9sbG93aW5nXHJcbiAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzPXtsb2dnZWRVc2VyRm9sbG93U3RhdHN9XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyRm9sbG93U3RhdHM9e3NldFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgIHByb2ZpbGVVc2VySWQ9e3Byb2ZpbGUudXNlci5faWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHthY3RpdmVJdGVtID09PSBcInVwZGF0ZVByb2ZpbGVcIiAmJiA8VXBkYXRlUHJvZmlsZSBQcm9maWxlPXtwcm9maWxlfSAvPn1cclxuXHJcbiAgICAgICAgICAgIHthY3RpdmVJdGVtID09PSBcInNldHRpbmdzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxTZXR0aW5ncyBuZXdNZXNzYWdlUG9wdXA9e3VzZXIubmV3TWVzc2FnZVBvcHVwfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5Qcm9maWxlUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSBjdHgucXVlcnk7XHJcbiAgICBjb25zdCB7IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Byb2ZpbGUvJHt1c2VybmFtZX1gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBwcm9maWxlLCBmb2xsb3dlcnNMZW5ndGgsIGZvbGxvd2luZ0xlbmd0aCB9ID0gcmVzLmRhdGE7XHJcblxyXG4gICAgcmV0dXJuIHsgcHJvZmlsZSwgZm9sbG93ZXJzTGVuZ3RoLCBmb2xsb3dpbmdMZW5ndGggfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3JMb2FkaW5nOiB0cnVlIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xyXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSBcIi4vY2F0Y2hFcnJvcnNcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogYCR7YmFzZVVybH0vYXBpL3Byb2ZpbGVgLFxyXG4gIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZm9sbG93VXNlciA9IGFzeW5jICh1c2VyVG9Gb2xsb3dJZCwgc2V0VXNlckZvbGxvd1N0YXRzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLnBvc3QoYC9mb2xsb3cvJHt1c2VyVG9Gb2xsb3dJZH1gKTtcclxuXHJcbiAgICBzZXRVc2VyRm9sbG93U3RhdHMocHJldiA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBmb2xsb3dpbmc6IFsuLi5wcmV2LmZvbGxvd2luZywgeyB1c2VyOiB1c2VyVG9Gb2xsb3dJZCB9XVxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1bmZvbGxvd1VzZXIgPSBhc3luYyAodXNlclRvVW5mb2xsb3dJZCwgc2V0VXNlckZvbGxvd1N0YXRzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLnB1dChgL3VuZm9sbG93LyR7dXNlclRvVW5mb2xsb3dJZH1gKTtcclxuXHJcbiAgICBzZXRVc2VyRm9sbG93U3RhdHMocHJldiA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBmb2xsb3dpbmc6IHByZXYuZm9sbG93aW5nLmZpbHRlcihmb2xsb3dpbmcgPT4gZm9sbG93aW5nLnVzZXIgIT09IHVzZXJUb1VuZm9sbG93SWQpXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVVcGRhdGUgPSBhc3luYyAocHJvZmlsZSwgc2V0TG9hZGluZywgc2V0RXJyb3IsIHByb2ZpbGVQaWNVcmwpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBiaW8sIGZhY2Vib29rLCB5b3V0dWJlLCB0d2l0dGVyLCBpbnN0YWdyYW0gfSA9IHByb2ZpbGU7XHJcblxyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL3VwZGF0ZWAsIHtcclxuICAgICAgYmlvLFxyXG4gICAgICBmYWNlYm9vayxcclxuICAgICAgeW91dHViZSxcclxuICAgICAgdHdpdHRlcixcclxuICAgICAgaW5zdGFncmFtLFxyXG4gICAgICBwcm9maWxlUGljVXJsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIFJvdXRlci5yZWxvYWQoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgc2V0RXJyb3IoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwYXNzd29yZFVwZGF0ZSA9IGFzeW5jIChzZXRTdWNjZXNzLCB1c2VyUGFzc3dvcmRzKSA9PiB7XHJcbiAgY29uc3QgeyBjdXJyZW50UGFzc3dvcmQsIG5ld1Bhc3N3b3JkIH0gPSB1c2VyUGFzc3dvcmRzO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvc2V0dGluZ3MvcGFzc3dvcmRgLCB7IGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQgfSk7XHJcblxyXG4gICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlTWVzc2FnZVBvcHVwID0gYXN5bmMgKHBvcHVwU2V0dGluZywgc2V0UG9wdXBTZXR0aW5nLCBzZXRTdWNjZXNzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLnBvc3QoYC9zZXR0aW5ncy9tZXNzYWdlUG9wdXBgKTtcclxuXHJcbiAgICBzZXRQb3B1cFNldHRpbmcoIXBvcHVwU2V0dGluZyk7XHJcbiAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgdXBsb2FkUGljPWFzeW5jKG1lZGlhKT0+e1xyXG4gIHRyeVxyXG4gIHtcclxuICAgIGNvbnN0IGZvcm09bmV3IEZvcm1EYXRhKClcclxuICAgIGZvcm0uYXBwZW5kKCdmaWxlJyxtZWRpYSlcclxuICAgIGZvcm0uYXBwZW5kKCd1cGxvYWRfcHJlc2V0Jywnc29jaWFsX21lZGlhJylcclxuICAgIGZvcm0uYXBwZW5kKCdjbG91ZF9uYW1lJyxcImRxYXkzeng2blwiKVxyXG5cclxuICAgIGNvbnN0IHJlcz1hd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkNMT1VESU5BUllfVVJMLGZvcm0pXHJcbiAgICByZXR1cm4gcmVzLmRhdGEudXJsO1xyXG4gIH1cclxuICBjYXRjaChlcnJvcilcclxuICB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwbG9hZFBpYyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==