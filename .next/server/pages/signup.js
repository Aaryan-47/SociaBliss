(function() {
var exports = {};
exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 322:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": function() { return /* binding */ storage; }
});

// UNUSED EXPORTS: db

;// CONCATENATED MODULE: external "firebase/app"
var app_namespaceObject = require("firebase/app");;
;// CONCATENATED MODULE: external "@firebase/firestore"
var firestore_namespaceObject = require("@firebase/firestore");;
;// CONCATENATED MODULE: external "@firebase/storage"
var storage_namespaceObject = require("@firebase/storage");;
;// CONCATENATED MODULE: ./firebase-config.js



const firebaseConfig = {
  apiKey: "AIzaSyD6TPPzuK9nu0UYX3HzZyVHCm67OyNQ9Ao",
  authDomain: "hackathon-e769d.firebaseapp.com",
  projectId: "hackathon-e769d",
  storageBucket: "hackathon-e769d.appspot.com",
  messagingSenderId: "563468467684",
  appId: "1:563468467684:web:920a6df0a19b069ad25bf1",
  measurementId: "G-2MFPBL0N0Z"
};
const app = (0,app_namespaceObject.initializeApp)(firebaseConfig);
const db = (0,firestore_namespaceObject.getFirestore)(app);
const storage = (0,storage_namespaceObject.getStorage)(app);

/***/ }),

/***/ 9633:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1347);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1694);
/* harmony import */ var _components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1911);
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9741);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4953);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6841);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8828);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1231);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(322);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
let cancel;

function Signup() {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: ""
  });
  const {
    name,
    email,
    password,
    bio
  } = user;

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

    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: formLoading,
    1: setFormLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: submitDisabled,
    1: setSubmitDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: usernameLoading,
    1: setUsernameLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: usernameAvailable,
    1: setUsernameAvailable
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isUser = Object.values({
      name,
      email,
      password,
      bio
    }).every(item => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const checkUsername = async () => {
    setUsernameLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_5___default().CancelToken);
      const res = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6___default())}/api/signup/${username}`, {
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });
      if (errorMsg !== null) setErrorMsg(null);

      if (res.data === "Available") {
        setUsernameAvailable(true);
        setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
          username
        }));
      }
    } catch (error) {
      setErrorMsg("Username Not Available");
      setUsernameAvailable(false);
    }

    setUsernameLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    username === "" ? setUsernameAvailable(false) : checkUsername();
  }, [username]);

  const handleSubmit = async e => {
    e.preventDefault();
    setFormLoading(true);
    let profilePicUrl;

    if (media !== null) {
      const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.ref)(_firebase_config__WEBPACK_IMPORTED_MODULE_10__/* .storage */ .t, `/images/${media.name + (0,uuid__WEBPACK_IMPORTED_MODULE_9__.v4)()}`); //console.log(imageRef);

      (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.uploadBytes)(imageRef, media).then(() => {
        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.getDownloadURL)(imageRef).then(async url => {
          await (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_7__/* .registerUser */ .a$)(user, url, setErrorMsg, setFormLoading); //console.log(url)
        }).catch(err => {
          console.log(err);
        });
      });
    } else {
      await (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_7__/* .registerUser */ .a$)(user, profilePicUrl, setErrorMsg, setFormLoading);
    }
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__/* .HeaderMessage */ .G, null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg,
    onDismiss: () => setErrorMsg(null)
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, null, __jsx(_components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    mediaPreview: mediaPreview,
    setMediaPreview: setMediaPreview,
    setMedia: setMedia,
    inputRef: inputRef,
    highlighted: highlighted,
    setHighlighted: setHighlighted,
    handleChange: handleChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    required: true,
    label: "Name",
    placeholder: "Name",
    name: "name",
    value: name,
    onChange: handleChange,
    fluid: true,
    icon: "user",
    iconPosition: "left"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    required: true,
    label: "Email",
    placeholder: "Email",
    name: "email",
    value: email,
    onChange: handleChange,
    fluid: true,
    icon: "envelope",
    iconPosition: "left",
    type: "email"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    label: "Password",
    placeholder: "Password",
    name: "password",
    value: password,
    onChange: handleChange,
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => setShowPassword(!showPassword)
    },
    iconPosition: "left",
    type: showPassword ? "text" : "password",
    required: true
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    loading: usernameLoading,
    error: !usernameAvailable,
    required: true,
    label: "Username",
    placeholder: "Username",
    value: username,
    onChange: e => {
      setUsername(e.target.value);

      if (regexUserName.test(e.target.value)) {
        setUsernameAvailable(true);
      } else {
        setUsernameAvailable(false);
      }
    },
    fluid: true,
    icon: usernameAvailable ? "check" : "close",
    iconPosition: "left"
  }), __jsx(_components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    user: user,
    showSocialLinks: showSocialLinks,
    setShowSocialLinks: setShowSocialLinks,
    handleChange: handleChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "signup",
    content: "Signup",
    type: "submit",
    color: "orange",
    disabled: submitDisabled || !usernameAvailable
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__/* .FooterMessage */ .u, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8828:
/***/ (function(module) {

"use strict";
module.exports = require("firebase/storage");;

/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

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

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 1347:
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ 1231:
/***/ (function(module) {

"use strict";
module.exports = require("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,880,841,860,741], function() { return __webpack_exec__(9633); });
module.exports = __webpack_exports__;

})();