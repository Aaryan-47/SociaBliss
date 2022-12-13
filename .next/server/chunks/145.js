exports.id = 145;
exports.ids = [145];
exports.modules = {

/***/ 8145:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P_": function() { return /* binding */ followUser; },
/* harmony export */   "F6": function() { return /* binding */ unfollowUser; },
/* harmony export */   "k6": function() { return /* binding */ profileUpdate; },
/* harmony export */   "QP": function() { return /* binding */ passwordUpdate; },
/* harmony export */   "jS": function() { return /* binding */ toggleMessagePopup; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4953);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3844);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: `${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/profile`,
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("token")
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
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(error));
  }
};
const unfollowUser = async (userToUnfollowId, setUserFollowStats) => {
  try {
    await Axios.put(`/unfollow/${userToUnfollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: prev.following.filter(following => following.user !== userToUnfollowId)
    }));
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(error));
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
    next_router__WEBPACK_IMPORTED_MODULE_3___default().reload();
  } catch (error) {
    setError((0,_catchErrors__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(error));
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
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(error));
  }
};
const toggleMessagePopup = async (popupSetting, setPopupSetting, setSuccess) => {
  try {
    await Axios.post(`/settings/messagePopup`);
    setPopupSetting(!popupSetting);
    setSuccess(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(error));
  }
};

/***/ })

};
;