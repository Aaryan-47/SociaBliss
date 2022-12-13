(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3043:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(5998);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(4953);
var baseUrl_default = /*#__PURE__*/__webpack_require__.n(baseUrl);
// EXTERNAL MODULE: ./utils/authUser.js
var authUser = __webpack_require__(6841);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Layout/HeadTags.js

var __jsx = (external_react_default()).createElement;


const HeadTags = () => __jsx((external_react_default()).Fragment, null, __jsx((head_default()), null, __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width"
}), __jsx("meta", {
  charSet: "UTF-8"
}), __jsx("link", {
  rel: "icon",
  href: "/favicon.png",
  sizes: "16*16",
  type: "image/png"
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/listMessages.css"
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/styles.css"
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/nprogress.css"
}), __jsx("title", null, "Mini Social Media")));

/* harmony default export */ var Layout_HeadTags = (HeadTags);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1347);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Layout/Navbar.js
var Navbar_jsx = (external_react_default()).createElement;





function Navbar() {
  const router = (0,router_.useRouter)();

  const isActive = route => router.pathname === route;

  return Navbar_jsx(external_semantic_ui_react_.Menu, {
    fluid: true,
    borderless: true
  }, Navbar_jsx(external_semantic_ui_react_.Container, {
    text: true
  }, Navbar_jsx(next_link.default, {
    href: "/login"
  }, Navbar_jsx(external_semantic_ui_react_.Menu.Item, {
    header: true,
    active: isActive("/login")
  }, Navbar_jsx(external_semantic_ui_react_.Icon, {
    size: "large",
    name: "sign in"
  }), "Login")), Navbar_jsx(next_link.default, {
    href: "/signup"
  }, Navbar_jsx(external_semantic_ui_react_.Menu.Item, {
    header: true,
    active: isActive("/signup")
  }, Navbar_jsx(external_semantic_ui_react_.Icon, {
    size: "large",
    name: "signup"
  }), "Signup"))));
}

/* harmony default export */ var Layout_Navbar = (Navbar);
;// CONCATENATED MODULE: external "nprogress"
var external_nprogress_namespaceObject = require("nprogress");;
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: ./components/Layout/SideMenu.js
var SideMenu_jsx = (external_react_default()).createElement;






function SideMenu({
  user: {
    unreadNotification,
    email,
    unreadMessage,
    username
  },
  pc = true
}) {
  const router = (0,router_.useRouter)();

  const isActive = route => router.pathname === route;

  return SideMenu_jsx((external_react_default()).Fragment, null, SideMenu_jsx(external_semantic_ui_react_.List, {
    style: {
      paddingTop: "1rem"
    },
    size: "big",
    verticalAlign: "middle",
    selection: true
  }, SideMenu_jsx(next_link.default, {
    href: "/"
  }, SideMenu_jsx(external_semantic_ui_react_.List.Item, {
    active: isActive("/")
  }, SideMenu_jsx(external_semantic_ui_react_.Icon, {
    name: "home",
    size: "large",
    color: isActive("/") && "teal"
  }), SideMenu_jsx(external_semantic_ui_react_.List.Content, null, pc && SideMenu_jsx(external_semantic_ui_react_.List.Header, {
    content: "Home"
  })))), SideMenu_jsx("br", null), SideMenu_jsx(next_link.default, {
    href: "/messages"
  }, SideMenu_jsx(external_semantic_ui_react_.List.Item, {
    active: isActive("/messages")
  }, SideMenu_jsx(external_semantic_ui_react_.Icon, {
    name: unreadMessage ? "hand point right" : "mail outline",
    size: "large",
    color: isActive("/messages") && "teal" || unreadMessage && "orange"
  }), SideMenu_jsx(external_semantic_ui_react_.List.Content, null, pc && SideMenu_jsx(external_semantic_ui_react_.List.Header, {
    content: "Messages"
  })))), SideMenu_jsx("br", null), SideMenu_jsx(next_link.default, {
    href: "/notifications"
  }, SideMenu_jsx(external_semantic_ui_react_.List.Item, {
    active: isActive("/notifications")
  }, SideMenu_jsx(external_semantic_ui_react_.Icon, {
    name: unreadNotification ? "hand point right" : "bell outline",
    size: "large",
    color: isActive("/notifications") && "teal" || unreadNotification && "orange"
  }), SideMenu_jsx(external_semantic_ui_react_.List.Content, null, pc && SideMenu_jsx(external_semantic_ui_react_.List.Header, {
    content: "Notifications"
  })))), SideMenu_jsx("br", null), SideMenu_jsx(next_link.default, {
    href: `/${username}`
  }, SideMenu_jsx(external_semantic_ui_react_.List.Item, {
    active: router.query.username === username
  }, SideMenu_jsx(external_semantic_ui_react_.Icon, {
    name: "user",
    size: "large",
    color: router.query.username === username && "teal"
  }), SideMenu_jsx(external_semantic_ui_react_.List.Content, null, pc && SideMenu_jsx(external_semantic_ui_react_.List.Header, {
    content: "Account"
  })))), SideMenu_jsx("br", null), SideMenu_jsx(external_semantic_ui_react_.List.Item, {
    onClick: () => (0,authUser/* logoutUser */.TX)(email)
  }, SideMenu_jsx(external_semantic_ui_react_.Icon, {
    name: "log out",
    size: "large"
  }), SideMenu_jsx(external_semantic_ui_react_.List.Content, null, pc && SideMenu_jsx(external_semantic_ui_react_.List.Header, {
    content: "Logout"
  })))));
}

/* harmony default export */ var Layout_SideMenu = (SideMenu);
// EXTERNAL MODULE: ./components/Layout/Search.js
var Search = __webpack_require__(4602);
;// CONCATENATED MODULE: ./components/Layout/MobileHeader.js
var MobileHeader_jsx = (external_react_default()).createElement;






function MobileHeader({
  user: {
    unreadNotification,
    email,
    unreadMessage,
    username
  }
}) {
  const router = (0,router_.useRouter)();

  const isActive = route => router.pathname === route;

  return MobileHeader_jsx((external_react_default()).Fragment, null, MobileHeader_jsx(external_semantic_ui_react_.Menu, {
    fluid: true,
    borderless: true
  }, MobileHeader_jsx(external_semantic_ui_react_.Container, {
    text: true
  }, MobileHeader_jsx(next_link.default, {
    href: "/"
  }, MobileHeader_jsx(external_semantic_ui_react_.Menu.Item, {
    header: true,
    active: isActive("/")
  }, MobileHeader_jsx(external_semantic_ui_react_.Icon, {
    name: "rss",
    size: "large"
  }))), MobileHeader_jsx(next_link.default, {
    href: "/messages"
  }, MobileHeader_jsx(external_semantic_ui_react_.Menu.Item, {
    header: true,
    active: isActive("/messages") || unreadMessage
  }, MobileHeader_jsx(external_semantic_ui_react_.Icon, {
    name: unreadMessage ? "hand point right" : "mail outline",
    size: "large"
  }))), MobileHeader_jsx(next_link.default, {
    href: "/notifications"
  }, MobileHeader_jsx(external_semantic_ui_react_.Menu.Item, {
    header: true,
    active: isActive("/notifications") || unreadNotification
  }, MobileHeader_jsx(external_semantic_ui_react_.Icon, {
    name: unreadNotification ? "hand point right" : "bell outline",
    size: "large"
  }))), MobileHeader_jsx(external_semantic_ui_react_.Dropdown, {
    item: true,
    icon: "bars",
    direction: "left"
  }, MobileHeader_jsx(external_semantic_ui_react_.Dropdown.Menu, null, MobileHeader_jsx(next_link.default, {
    href: `/${username}`
  }, MobileHeader_jsx(external_semantic_ui_react_.Dropdown.Item, {
    active: isActive(`/${username}`)
  }, MobileHeader_jsx(external_semantic_ui_react_.Icon, {
    name: "user",
    size: "large"
  }), "Account")), MobileHeader_jsx(next_link.default, {
    href: "/search"
  }, MobileHeader_jsx(external_semantic_ui_react_.Dropdown.Item, {
    active: isActive("/search")
  }, MobileHeader_jsx(external_semantic_ui_react_.Icon, {
    name: "search",
    size: "large"
  }), "Search")), MobileHeader_jsx(external_semantic_ui_react_.Dropdown.Item, {
    onClick: () => (0,authUser/* logoutUser */.TX)(email)
  }, MobileHeader_jsx(external_semantic_ui_react_.Icon, {
    name: "sign out alternate",
    size: "large"
  }), "Logout"))))));
}

/* harmony default export */ var Layout_MobileHeader = (MobileHeader);
;// CONCATENATED MODULE: external "@artsy/fresnel"
var fresnel_namespaceObject = require("@artsy/fresnel");;
;// CONCATENATED MODULE: ./components/Layout/Layout.js
var Layout_jsx = (external_react_default()).createElement;










const AppMedia = (0,fresnel_namespaceObject.createMedia)({
  breakpoints: {
    zero: 0,
    mobile: 549,
    tablet: 850,
    computer: 1080
  }
});
const mediaStyles = AppMedia.createMediaStyle();
const {
  Media,
  MediaContextProvider
} = AppMedia;

function Layout({
  children,
  user
}) {
  const contextRef = /*#__PURE__*/(0,external_react_.createRef)();
  const router = (0,router_.useRouter)();
  const messagesRoute = router.pathname === "/messages";

  (router_default()).onRouteChangeStart = () => external_nprogress_default().start();

  (router_default()).onRouteChangeComplete = () => external_nprogress_default().done();

  (router_default()).onRouteChangeError = () => external_nprogress_default().done();

  return Layout_jsx((external_react_default()).Fragment, null, Layout_jsx(Layout_HeadTags, null), user ? Layout_jsx((external_react_default()).Fragment, null, Layout_jsx("style", null, mediaStyles), Layout_jsx(MediaContextProvider, null, Layout_jsx("div", {
    style: {
      marginLeft: "1rem",
      marginRight: "1rem"
    }
  }, Layout_jsx(Media, {
    greaterThanOrEqual: "computer"
  }, Layout_jsx(external_semantic_ui_react_.Ref, {
    innerRef: contextRef
  }, Layout_jsx(external_semantic_ui_react_.Grid, null, !messagesRoute ? Layout_jsx((external_react_default()).Fragment, null, Layout_jsx(external_semantic_ui_react_.Grid.Column, {
    floated: "left",
    width: 2
  }, Layout_jsx(external_semantic_ui_react_.Sticky, {
    context: contextRef
  }, Layout_jsx(Layout_SideMenu, {
    user: user,
    pc: true
  }))), Layout_jsx(external_semantic_ui_react_.Grid.Column, {
    width: 10
  }, Layout_jsx(external_semantic_ui_react_.Visibility, {
    context: contextRef
  }, children)), Layout_jsx(external_semantic_ui_react_.Grid.Column, {
    floated: "left",
    width: 4
  }, Layout_jsx(external_semantic_ui_react_.Sticky, {
    context: contextRef
  }, Layout_jsx(external_semantic_ui_react_.Segment, {
    basic: true
  }, Layout_jsx(Search/* default */.Z, null))))) : Layout_jsx((external_react_default()).Fragment, null, Layout_jsx(external_semantic_ui_react_.Grid.Column, {
    floated: "left",
    width: 1
  }), Layout_jsx(external_semantic_ui_react_.Grid.Column, {
    width: 15
  }, children))))), Layout_jsx(Media, {
    between: ["tablet", "computer"]
  }, Layout_jsx(external_semantic_ui_react_.Ref, {
    innerRef: contextRef
  }, Layout_jsx(external_semantic_ui_react_.Grid, null, !messagesRoute ? Layout_jsx((external_react_default()).Fragment, null, Layout_jsx(external_semantic_ui_react_.Grid.Column, {
    floated: "left",
    width: 1
  }, Layout_jsx(external_semantic_ui_react_.Sticky, {
    context: contextRef
  }, Layout_jsx(Layout_SideMenu, {
    user: user,
    pc: false
  }))), Layout_jsx(external_semantic_ui_react_.Grid.Column, {
    width: 15
  }, Layout_jsx(external_semantic_ui_react_.Visibility, {
    context: contextRef
  }, children))) : Layout_jsx((external_react_default()).Fragment, null, Layout_jsx(external_semantic_ui_react_.Grid.Column, {
    floated: "left",
    width: 1
  }), Layout_jsx(external_semantic_ui_react_.Grid.Column, {
    width: 15
  }, children))))), Layout_jsx(Media, {
    between: ["mobile", "tablet"]
  }, Layout_jsx(external_semantic_ui_react_.Ref, {
    innerRef: contextRef
  }, Layout_jsx(external_semantic_ui_react_.Grid, null, !messagesRoute ? Layout_jsx((external_react_default()).Fragment, null, Layout_jsx(external_semantic_ui_react_.Grid.Column, {
    floated: "left",
    width: 2
  }, Layout_jsx(external_semantic_ui_react_.Sticky, {
    context: contextRef
  }, Layout_jsx(Layout_SideMenu, {
    user: user,
    pc: false
  }))), Layout_jsx(external_semantic_ui_react_.Grid.Column, {
    width: 14
  }, Layout_jsx(external_semantic_ui_react_.Visibility, {
    context: contextRef
  }, children))) : Layout_jsx((external_react_default()).Fragment, null, Layout_jsx(external_semantic_ui_react_.Grid.Column, {
    floated: "left",
    width: 1
  }), Layout_jsx(external_semantic_ui_react_.Grid.Column, {
    width: 15
  }, children))))), Layout_jsx(Media, {
    between: ["zero", "mobile"]
  }, Layout_jsx(Layout_MobileHeader, {
    user: user
  }), Layout_jsx(external_semantic_ui_react_.Grid, null, Layout_jsx(external_semantic_ui_react_.Grid.Column, null, children)))))) : Layout_jsx((external_react_default()).Fragment, null, Layout_jsx(Layout_Navbar, null), Layout_jsx(external_semantic_ui_react_.Container, {
    text: true,
    style: {
      paddingTop: "1rem"
    }
  }, children)));
}

/* harmony default export */ var Layout_Layout = (Layout);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: ./pages/_app.js

var _app_jsx = (external_react_default()).createElement;









class MyApp extends app.default {
  static async getInitialProps({
    Component,
    ctx
  }) {
    const {
      token
    } = (0,external_nookies_.parseCookies)(ctx);
    let pageProps = {};
    const protectedRoutes = ctx.pathname === "/" || ctx.pathname === "/[username]" || ctx.pathname === "/notifications" || ctx.pathname === "/post/[postId]" || ctx.pathname === "/messages" || ctx.pathname === "/search";

    if (!token) {
      (0,external_nookies_.destroyCookie)(ctx, "token");
      protectedRoutes && (0,authUser/* redirectUser */.a0)(ctx, "/login");
    } //
    else {
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx);
        }

        try {
          const res = await external_axios_default().get(`${(baseUrl_default())}/api/auth`, {
            headers: {
              Authorization: token
            }
          });
          const {
            user,
            userFollowStats
          } = res.data;
          if (user) !protectedRoutes && (0,authUser/* redirectUser */.a0)(ctx, "/");
          pageProps.user = user;
          pageProps.userFollowStats = userFollowStats;
        } catch (error) {
          (0,external_nookies_.destroyCookie)(ctx, "token");
          (0,authUser/* redirectUser */.a0)(ctx, "/login");
        }
      }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return _app_jsx(Layout_Layout, pageProps, _app_jsx(Component, pageProps));
  }

}

/* harmony default export */ var _app = (MyApp);

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

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,568,880,841,602], function() { return __webpack_exec__(3043); });
module.exports = __webpack_exports__;

})();