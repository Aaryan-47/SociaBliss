(function() {
var exports = {};
exports.id = 280;
exports.ids = [280];
exports.modules = {

/***/ 5761:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _username_; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(4953);
var baseUrl_default = /*#__PURE__*/__webpack_require__.n(baseUrl);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(5998);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1347);
// EXTERNAL MODULE: ./components/Layout/NoData.js
var NoData = __webpack_require__(6048);
// EXTERNAL MODULE: ./components/Post/CardPost.js + 2 modules
var CardPost = __webpack_require__(705);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: ./components/Layout/PlaceHolderGroup.js
var PlaceHolderGroup = __webpack_require__(899);
;// CONCATENATED MODULE: ./components/Profile/ProfileMenuTabs.js
var __jsx = (external_react_default()).createElement;



function ProfileMenuTabs({
  activeItem,
  handleItemClick,
  followersLength,
  followingLength,
  ownAccount,
  loggedUserFollowStats
}) {
  return __jsx((external_react_default()).Fragment, null, __jsx(external_semantic_ui_react_.Menu, {
    pointing: true,
    secondary: true
  }, __jsx(external_semantic_ui_react_.Menu.Item, {
    name: "profile",
    active: activeItem === "profile",
    onClick: () => handleItemClick("profile")
  }), __jsx(external_semantic_ui_react_.Menu.Item, {
    name: `${followersLength} followers`,
    active: activeItem === "followers",
    onClick: () => handleItemClick("followers")
  }), ownAccount ? __jsx((external_react_default()).Fragment, null, __jsx(external_semantic_ui_react_.Menu.Item, {
    name: `${loggedUserFollowStats.following.length > 0 ? loggedUserFollowStats.following.length : 0} following`,
    active: activeItem === "following",
    onClick: () => handleItemClick("following")
  }), __jsx(external_semantic_ui_react_.Menu.Item, {
    name: "Update Profile",
    active: activeItem === "updateProfile",
    onClick: () => handleItemClick("updateProfile")
  }), __jsx(external_semantic_ui_react_.Menu.Item, {
    name: "settings",
    active: activeItem === "settings",
    onClick: () => handleItemClick("settings")
  })) : __jsx(external_semantic_ui_react_.Menu.Item, {
    name: `${followingLength} following`,
    active: activeItem === "following",
    onClick: () => handleItemClick("following")
  })));
}

/* harmony default export */ var Profile_ProfileMenuTabs = (ProfileMenuTabs);
// EXTERNAL MODULE: ./utils/profileActions.js
var profileActions = __webpack_require__(8145);
;// CONCATENATED MODULE: ./components/Profile/ProfileHeader.js
var ProfileHeader_jsx = (external_react_default()).createElement;




function ProfileHeader({
  profile,
  ownAccount,
  loggedUserFollowStats,
  setUserFollowStats
}) {
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === profile.user._id).length > 0;
  return ProfileHeader_jsx((external_react_default()).Fragment, null, ProfileHeader_jsx(external_semantic_ui_react_.Segment, null, ProfileHeader_jsx(external_semantic_ui_react_.Grid, {
    stackable: true
  }, ProfileHeader_jsx(external_semantic_ui_react_.Grid.Column, {
    width: 11
  }, ProfileHeader_jsx(external_semantic_ui_react_.Grid.Row, null, ProfileHeader_jsx(external_semantic_ui_react_.Header, {
    as: "h2",
    content: profile.user.name,
    style: {
      marginBottom: "5px"
    }
  })), ProfileHeader_jsx(external_semantic_ui_react_.Grid.Row, {
    stretched: true
  }, profile.bio, ProfileHeader_jsx(external_semantic_ui_react_.Divider, {
    hidden: true
  })), ProfileHeader_jsx(external_semantic_ui_react_.Grid.Row, null, profile.social ? ProfileHeader_jsx(external_semantic_ui_react_.List, null, ProfileHeader_jsx(external_semantic_ui_react_.List.Item, null, ProfileHeader_jsx(external_semantic_ui_react_.List.Icon, {
    name: "mail"
  }), ProfileHeader_jsx(external_semantic_ui_react_.List.Content, {
    content: profile.user.email
  })), profile.social.facebook && ProfileHeader_jsx(external_semantic_ui_react_.List.Item, null, ProfileHeader_jsx(external_semantic_ui_react_.List.Icon, {
    name: "facebook",
    color: "blue"
  }), ProfileHeader_jsx(external_semantic_ui_react_.List.Content, {
    style: {
      color: "blue"
    },
    content: profile.social.facebook
  })), profile.social.instagram && ProfileHeader_jsx(external_semantic_ui_react_.List.Item, null, ProfileHeader_jsx(external_semantic_ui_react_.List.Icon, {
    name: "instagram",
    color: "red"
  }), ProfileHeader_jsx(external_semantic_ui_react_.List.Content, {
    style: {
      color: "blue"
    },
    content: profile.social.instagram
  })), profile.social.youtube && ProfileHeader_jsx(external_semantic_ui_react_.List.Item, null, ProfileHeader_jsx(external_semantic_ui_react_.List.Icon, {
    name: "youtube",
    color: "red"
  }), ProfileHeader_jsx(external_semantic_ui_react_.List.Content, {
    style: {
      color: "blue"
    },
    content: profile.social.youtube
  })), profile.social.twitter && ProfileHeader_jsx(external_semantic_ui_react_.List.Item, null, ProfileHeader_jsx(external_semantic_ui_react_.List.Icon, {
    name: "twitter",
    color: "blue"
  }), ProfileHeader_jsx(external_semantic_ui_react_.List.Content, {
    style: {
      color: "blue"
    },
    content: profile.social.twitter
  }))) : ProfileHeader_jsx((external_react_default()).Fragment, null, "No Social Media Links "))), ProfileHeader_jsx(external_semantic_ui_react_.Grid.Column, {
    width: 5,
    stretched: true,
    style: {
      textAlign: "center"
    }
  }, ProfileHeader_jsx(external_semantic_ui_react_.Grid.Row, null, ProfileHeader_jsx(external_semantic_ui_react_.Image, {
    size: "large",
    avatar: true,
    src: profile.user.profilePicUrl
  })), ProfileHeader_jsx("br", null), !ownAccount && ProfileHeader_jsx(external_semantic_ui_react_.Button, {
    compact: true,
    loading: loading,
    disabled: loading,
    content: isFollowing ? "Following" : "Follow",
    icon: isFollowing ? "check circle" : "add user",
    color: isFollowing ? "instagram" : "twitter",
    onClick: async () => {
      setLoading(true);
      isFollowing ? await (0,profileActions/* unfollowUser */.F6)(profile.user._id, setUserFollowStats) : await (0,profileActions/* followUser */.P_)(profile.user._id, setUserFollowStats);
      setLoading(false);
    }
  })))));
}

/* harmony default export */ var Profile_ProfileHeader = (ProfileHeader);
;// CONCATENATED MODULE: ./components/Layout/Spinner.js
var Spinner_jsx = (external_react_default()).createElement;


const Spinner = () => Spinner_jsx("div", {
  className: "mySpinner"
});

/* harmony default export */ var Layout_Spinner = (Spinner);
;// CONCATENATED MODULE: ./components/Profile/Followers.js
var Followers_jsx = (external_react_default()).createElement;









const Followers = ({
  user,
  loggedUserFollowStats,
  setUserFollowStats,
  profileUserId
}) => {
  const {
    0: followers,
    1: setFollowers
  } = (0,external_react_.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: followLoading,
    1: setFollowLoading
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const getFollowers = async () => {
      setLoading(true);

      try {
        const res = await external_axios_default().get(`${(baseUrl_default())}/api/profile/followers/${profileUserId}`, {
          headers: {
            Authorization: external_js_cookie_default().get("token")
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
  return Followers_jsx((external_react_default()).Fragment, null, loading ? Followers_jsx(Layout_Spinner, null) : followers.length > 0 ? followers.map(profileFollower => {
    /*  */
    const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === profileFollower.user._id).length > 0;
    return Followers_jsx(external_semantic_ui_react_.List, {
      key: profileFollower.user._id,
      divided: true,
      verticalAlign: "middle"
    }, Followers_jsx(external_semantic_ui_react_.List.Item, null, Followers_jsx(external_semantic_ui_react_.List.Content, {
      floated: "right"
    }, profileFollower.user._id !== user._id && Followers_jsx(external_semantic_ui_react_.Button, {
      color: isFollowing ? "instagram" : "twitter",
      icon: isFollowing ? "check" : "add user",
      content: isFollowing ? "Following" : "Follow",
      disabled: followLoading,
      onClick: () => {
        setFollowLoading(true);
        isFollowing ? (0,profileActions/* unfollowUser */.F6)(profileFollower.user._id, setUserFollowStats) : (0,profileActions/* followUser */.P_)(profileFollower.user._id, setUserFollowStats);
        setFollowLoading(false);
      }
    })), Followers_jsx(external_semantic_ui_react_.Image, {
      avatar: true,
      src: profileFollower.user.profilePicUrl
    }), Followers_jsx(external_semantic_ui_react_.List.Content, {
      as: "a",
      href: `/${profileFollower.user.username}`
    }, profileFollower.user.name)));
  }) : Followers_jsx(NoData/* NoFollowData */.Mv, {
    followersComponent: true
  }));
};

/* harmony default export */ var Profile_Followers = (Followers);
;// CONCATENATED MODULE: ./components/Profile/Following.js
var Following_jsx = (external_react_default()).createElement;









const Following = ({
  user,
  loggedUserFollowStats,
  setUserFollowStats,
  profileUserId
}) => {
  const {
    0: following,
    1: setFollowing
  } = (0,external_react_.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: followLoading,
    1: setFollowLoading
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const getFollowing = async () => {
      setLoading(true);

      try {
        const res = await external_axios_default().get(`${(baseUrl_default())}/api/profile/following/${profileUserId}`, {
          headers: {
            Authorization: external_js_cookie_default().get("token")
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
  return Following_jsx((external_react_default()).Fragment, null, loading ? Following_jsx(Layout_Spinner, null) : following.length > 0 ? following.map(profileFollowing => {
    /*  */
    const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === profileFollowing.user._id).length > 0;
    return Following_jsx(external_semantic_ui_react_.List, {
      key: profileFollowing.user._id,
      divided: true,
      verticalAlign: "middle"
    }, Following_jsx(external_semantic_ui_react_.List.Item, null, Following_jsx(external_semantic_ui_react_.List.Content, {
      floated: "right"
    }, profileFollowing.user._id !== user._id && Following_jsx(external_semantic_ui_react_.Button, {
      color: isFollowing ? "instagram" : "twitter",
      icon: isFollowing ? "check" : "add user",
      content: isFollowing ? "Following" : "Follow",
      disabled: followLoading,
      onClick: () => {
        setFollowLoading(true);
        isFollowing ? (0,profileActions/* unfollowUser */.F6)(profileFollowing.user._id, setUserFollowStats) : (0,profileActions/* followUser */.P_)(profileFollowing.user._id, setUserFollowStats);
        setFollowLoading(false);
      }
    })), Following_jsx(external_semantic_ui_react_.Image, {
      avatar: true,
      src: profileFollowing.user.profilePicUrl
    }), Following_jsx(external_semantic_ui_react_.List.Content, {
      as: "a",
      href: `/${profileFollowing.user.username}`
    }, profileFollowing.user.name)));
  }) : Following_jsx(NoData/* NoFollowData */.Mv, {
    followingComponent: true
  }));
};

/* harmony default export */ var Profile_Following = (Following);
// EXTERNAL MODULE: ./components/Common/ImageDropDiv.js
var ImageDropDiv = __webpack_require__(1911);
// EXTERNAL MODULE: ./components/Common/CommonInputs.js
var CommonInputs = __webpack_require__(1694);
;// CONCATENATED MODULE: ./utils/uploadPicToCloudinary.js


const uploadPic = async media => {
  try {
    const form = new FormData();
    form.append('file', media);
    form.append('upload_preset', 'social_media');
    form.append('cloud_name', "dqay3zx6n");
    const res = await external_axios_default().post("api.cloudinary.com/v1_1/dqay3zx6n/image/upload", form);
    return res.data.url;
  } catch (error) {
    console.log(error);
  }
};

/* harmony default export */ var uploadPicToCloudinary = (uploadPic);
;// CONCATENATED MODULE: ./components/Profile/UpdateProfile.js
var UpdateProfile_jsx = (external_react_default()).createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function UpdateProfile({
  Profile
}) {
  const {
    0: profile,
    1: setProfile
  } = (0,external_react_.useState)({
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
  } = (0,external_react_.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = (0,external_react_.useState)(false);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,external_react_.useState)(false);
  const inputRef = (0,external_react_.useRef)();
  const {
    0: media,
    1: setMedia
  } = (0,external_react_.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,external_react_.useState)(null);

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

  return UpdateProfile_jsx((external_react_default()).Fragment, null, UpdateProfile_jsx(external_semantic_ui_react_.Form, {
    error: errorMsg !== null,
    loading: loading,
    onSubmit: async e => {
      e.preventDefault();
      setLoading(true);
      let profilePicUrl;

      if (media !== null) {
        profilePicUrl = await uploadPicToCloudinary(media);
      }

      if (media !== null && !profilePicUrl) {
        setLoading(false);
        return setErrorMsg("Error Uploading Image");
      }

      await (0,profileActions/* profileUpdate */.k6)(profile, setLoading, setErrorMsg, profilePicUrl);
    }
  }, UpdateProfile_jsx(external_semantic_ui_react_.Message, {
    onDismiss: () => setErrorMsg(false),
    error: true,
    content: errorMsg,
    attached: true,
    header: "Oops!"
  }), UpdateProfile_jsx(ImageDropDiv/* default */.Z, {
    inputRef: inputRef,
    highlighted: highlighted,
    setHighlighted: setHighlighted,
    handleChange: handleChange,
    mediaPreview: mediaPreview,
    setMediaPreview: setMediaPreview,
    setMedia: setMedia,
    profilePicUrl: profile.profilePicUrl
  }), UpdateProfile_jsx(CommonInputs/* default */.Z, {
    user: profile,
    handleChange: handleChange,
    showSocialLinks: showSocialLinks,
    setShowSocialLinks: setShowSocialLinks
  }), UpdateProfile_jsx(external_semantic_ui_react_.Divider, {
    hidden: true
  }), UpdateProfile_jsx(external_semantic_ui_react_.Button, {
    color: "blue",
    icon: "pencil alternate",
    disabled: profile.bio === "" || loading,
    content: "Submit",
    type: "submit"
  })));
}

/* harmony default export */ var Profile_UpdateProfile = (UpdateProfile);
;// CONCATENATED MODULE: ./components/Profile/Settings.js
var Settings_jsx = (external_react_default()).createElement;

function Settings_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Settings_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Settings_ownKeys(Object(source), true).forEach(function (key) { Settings_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Settings_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Settings_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Settings({
  newMessagePopup
}) {
  const {
    0: passwordFields,
    1: showPasswordFields
  } = (0,external_react_.useState)(false);
  const {
    0: newMessageSettings,
    1: showNewMessageSettings
  } = (0,external_react_.useState)(false);
  const isFirstRun = (0,external_react_.useRef)(true);
  const {
    0: popupSetting,
    1: setPopupSetting
  } = (0,external_react_.useState)(newMessagePopup);
  const {
    0: success,
    1: setSuccess
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    success && setTimeout(() => setSuccess(false), 3000);
  }, [success]);
  (0,external_react_.useEffect)(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
  }, [popupSetting]);
  return Settings_jsx((external_react_default()).Fragment, null, success && Settings_jsx((external_react_default()).Fragment, null, Settings_jsx(external_semantic_ui_react_.Message, {
    success: true,
    icon: "check circle",
    header: "Updated Successfully"
  }), Settings_jsx(external_semantic_ui_react_.Divider, {
    hidden: true
  })), Settings_jsx(external_semantic_ui_react_.List, {
    size: "huge",
    animated: true
  }, Settings_jsx(external_semantic_ui_react_.List.Item, null, Settings_jsx(external_semantic_ui_react_.List.Icon, {
    name: "user secret",
    size: "large",
    verticalAlign: "middle"
  }), Settings_jsx(external_semantic_ui_react_.List.Content, null, Settings_jsx(external_semantic_ui_react_.List.Header, {
    onClick: () => showPasswordFields(!passwordFields),
    as: "a",
    content: "Update Password"
  })), passwordFields && Settings_jsx(UpdatePassword, {
    setSuccess: setSuccess,
    showPasswordFields: showPasswordFields
  })), Settings_jsx(external_semantic_ui_react_.Divider, null), Settings_jsx(external_semantic_ui_react_.List.Item, null, Settings_jsx(external_semantic_ui_react_.List.Icon, {
    name: "paper plane outline",
    size: "large",
    verticalAlign: "middle"
  }), Settings_jsx(external_semantic_ui_react_.List.Content, null, Settings_jsx(external_semantic_ui_react_.List.Header, {
    onClick: () => showNewMessageSettings(!newMessageSettings),
    as: "a",
    content: "Show New Message Popup?"
  })), Settings_jsx("div", {
    style: {
      marginTop: "10px"
    }
  }, "Control whether a Popup should appear when there is a New Message or not.", Settings_jsx("br", null), Settings_jsx("br", null), Settings_jsx(external_semantic_ui_react_.Checkbox, {
    checked: popupSetting,
    toggle: true,
    onChange: () => (0,profileActions/* toggleMessagePopup */.jS)(popupSetting, setPopupSetting, setSuccess)
  }))), Settings_jsx(external_semantic_ui_react_.Divider, null)));
}

const UpdatePassword = ({
  setSuccess,
  showPasswordFields
}) => {
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: errorMsg,
    1: setError
  } = (0,external_react_.useState)(null);
  const {
    0: userPasswords,
    1: setUserPasswords
  } = (0,external_react_.useState)({
    currentPassword: "",
    newPassword: ""
  });
  const {
    0: typed,
    1: showTyped
  } = (0,external_react_.useState)({
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
    setUserPasswords(prev => Settings_objectSpread(Settings_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  (0,external_react_.useEffect)(() => {
    errorMsg && setTimeout(() => setError(null), 5000);
  }, [errorMsg]);
  return Settings_jsx((external_react_default()).Fragment, null, Settings_jsx(external_semantic_ui_react_.Form, {
    error: errorMsg !== null,
    loading: loading,
    onSubmit: async e => {
      e.preventDefault();
      setLoading(true);
      await (0,profileActions/* passwordUpdate */.QP)(setSuccess, userPasswords);
      setLoading(false);
      showPasswordFields(false);
    }
  }, Settings_jsx(external_semantic_ui_react_.List.List, null, Settings_jsx(external_semantic_ui_react_.List.Item, null, Settings_jsx(external_semantic_ui_react_.Form.Input, {
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => showTyped(prev => Settings_objectSpread(Settings_objectSpread({}, prev), {}, {
        field1: !field1
      }))
    },
    type: field1 ? "text" : "password",
    iconPosition: "left",
    label: "Current Password",
    placeholder: "Enter current Password",
    name: "currentPassword",
    onChange: handleChange,
    value: currentPassword
  }), Settings_jsx(external_semantic_ui_react_.Form.Input, {
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => showTyped(prev => Settings_objectSpread(Settings_objectSpread({}, prev), {}, {
        field2: !field2
      }))
    },
    type: field2 ? "text" : "password",
    iconPosition: "left",
    label: "New Password",
    placeholder: "Enter New Password",
    name: "newPassword",
    onChange: handleChange,
    value: newPassword
  }), Settings_jsx(external_semantic_ui_react_.Button, {
    disabled: loading || currentPassword === "" || newPassword === "",
    compact: true,
    icon: "configure",
    type: "submit",
    color: "teal",
    content: "Confirm"
  }), Settings_jsx(external_semantic_ui_react_.Button, {
    disabled: loading,
    compact: true,
    icon: "cancel",
    type: "button",
    content: "Cancel",
    onClick: () => showPasswordFields(false)
  }), Settings_jsx(external_semantic_ui_react_.Message, {
    icon: "meh",
    error: true,
    header: "Oops!",
    content: errorMsg
  })))), Settings_jsx(external_semantic_ui_react_.Divider, {
    hidden: true
  }));
};

/* harmony default export */ var Profile_Settings = (Settings);
// EXTERNAL MODULE: ./components/Layout/Toastr.js
var Toastr = __webpack_require__(9748);
;// CONCATENATED MODULE: ./pages/[username].js
var _username_jsx = (external_react_default()).createElement;


















function ProfilePage({
  errorLoading,
  profile,
  followersLength,
  followingLength,
  user,
  userFollowStats
}) {
  const router = (0,router_.useRouter)();
  const {
    0: posts,
    1: setPosts
  } = (0,external_react_.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: showToastr,
    1: setShowToastr
  } = (0,external_react_.useState)(false);
  const {
    0: activeItem,
    1: setActiveItem
  } = (0,external_react_.useState)("profile");

  const handleItemClick = clickedTab => setActiveItem(clickedTab);

  const {
    0: loggedUserFollowStats,
    1: setUserFollowStats
  } = (0,external_react_.useState)(userFollowStats);
  const ownAccount = profile.user._id === user._id;
  if (errorLoading) return _username_jsx(NoData/* NoProfile */.HI, null);
  (0,external_react_.useEffect)(() => {
    const getPosts = async () => {
      setLoading(true);

      try {
        const {
          username
        } = router.query;
        const res = await external_axios_default().get(`${(baseUrl_default())}/api/profile/posts/${username}`, {
          headers: {
            Authorization: external_js_cookie_default().get("token")
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
  (0,external_react_.useEffect)(() => {
    showToastr && setTimeout(() => setShowToastr(false), 4000);
  }, [showToastr]);
  return _username_jsx((external_react_default()).Fragment, null, showToastr && _username_jsx(Toastr/* PostDeleteToastr */.g0, null), _username_jsx(external_semantic_ui_react_.Grid, {
    stackable: true
  }, _username_jsx(external_semantic_ui_react_.Grid.Row, null, _username_jsx(external_semantic_ui_react_.Grid.Column, null, _username_jsx(Profile_ProfileMenuTabs, {
    activeItem: activeItem,
    handleItemClick: handleItemClick,
    followersLength: followersLength,
    followingLength: followingLength,
    ownAccount: ownAccount,
    loggedUserFollowStats: loggedUserFollowStats
  }))), _username_jsx(external_semantic_ui_react_.Grid.Row, null, _username_jsx(external_semantic_ui_react_.Grid.Column, null, activeItem === "profile" && _username_jsx((external_react_default()).Fragment, null, _username_jsx(Profile_ProfileHeader, {
    profile: profile,
    ownAccount: ownAccount,
    loggedUserFollowStats: loggedUserFollowStats,
    setUserFollowStats: setUserFollowStats
  }), loading ? _username_jsx(PlaceHolderGroup/* PlaceHolderPosts */.pj, null) : posts.length > 0 ? posts.map(post => _username_jsx(CardPost/* default */.Z, {
    key: post._id,
    post: post,
    user: user,
    setPosts: setPosts,
    setShowToastr: setShowToastr
  })) : _username_jsx(NoData/* NoProfilePosts */.AR, null)), activeItem === "followers" && _username_jsx(Profile_Followers, {
    user: user,
    loggedUserFollowStats: loggedUserFollowStats,
    setUserFollowStats: setUserFollowStats,
    profileUserId: profile.user._id
  }), activeItem === "following" && _username_jsx(Profile_Following, {
    user: user,
    loggedUserFollowStats: loggedUserFollowStats,
    setUserFollowStats: setUserFollowStats,
    profileUserId: profile.user._id
  }), activeItem === "updateProfile" && _username_jsx(Profile_UpdateProfile, {
    Profile: profile
  }), activeItem === "settings" && _username_jsx(Profile_Settings, {
    newMessagePopup: user.newMessagePopup
  })))));
}

ProfilePage.getInitialProps = async ctx => {
  try {
    const {
      username
    } = ctx.query;
    const {
      token
    } = (0,external_nookies_.parseCookies)(ctx);
    const res = await external_axios_default().get(`${(baseUrl_default())}/api/profile/${username}`, {
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

/* harmony default export */ var _username_ = (ProfilePage);

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

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,831,507,168,860,145], function() { return __webpack_exec__(5761); });
module.exports = __webpack_exports__;

})();