(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./resources/js/containers/DefaultLayout/DefaultAside.js":
/*!***************************************************************!*\
  !*** ./resources/js/containers/DefaultLayout/DefaultAside.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
const defaultProps = {};

class DefaultAside extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    // eslint-disable-next-line
    const _this$props = this.props,
          {
      children
    } = _this$props,
          attributes = _objectWithoutProperties(_this$props, ["children"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      tabs: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        active: this.state.activeTab === '1'
      }),
      onClick: () => {
        this.toggle('1');
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-list"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        active: this.state.activeTab === '2'
      }),
      onClick: () => {
        this.toggle('2');
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-speech"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        active: this.state.activeTab === '3'
      }),
      onClick: () => {
        this.toggle('3');
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-settings"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
      activeTab: this.state.activeTab
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
      tabId: "1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"], {
      className: "list-group-accent",
      tag: 'div'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
      className: "list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"
    }, "Today"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
      action: true,
      tag: "a",
      href: "#",
      className: "list-group-item-accent-warning list-group-item-divider"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar float-right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "img-avatar",
      src: "assets/img/avatars/7.jpg",
      alt: "admin@bootstrapmaster.com"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Meeting with ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Lucas"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted mr-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-calendar"
    }), "\xA0 1 - 3pm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-location-pin"
    }), " Palo Alto, CA")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
      action: true,
      tag: "a",
      href: "#",
      className: "list-group-item-accent-info list-group-item-divider"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar float-right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "img-avatar",
      src: "assets/img/avatars/4.jpg",
      alt: "admin@bootstrapmaster.com"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Skype with ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Megan")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted mr-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-calendar"
    }), "\xA0 4 - 5pm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-social-skype"
    }), " On-line")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
      className: "list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"
    }, "Tomorrow"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
      action: true,
      tag: "a",
      href: "#",
      className: "list-group-item-accent-danger list-group-item-divider"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "New UI Project - ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "deadline")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted mr-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-calendar"
    }), "\xA0 10 - 11pm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-home"
    }), "\xA0 creativeLabs HQ"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatars-stack mt-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar avatar-xs"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/2.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar avatar-xs"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/3.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar avatar-xs"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/4.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar avatar-xs"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/5.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar avatar-xs"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/6.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
      action: true,
      tag: "a",
      href: "#",
      className: "list-group-item-accent-success list-group-item-divider"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "#10 Startups.Garden"), " Meetup"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted mr-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-calendar"
    }), "\xA0 1 - 3pm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-location-pin"
    }), "\xA0 Palo Alto, CA")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
      action: true,
      tag: "a",
      href: "#",
      className: "list-group-item-accent-primary list-group-item-divider"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Team meeting")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted mr-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-calendar"
    }), "\xA0 4 - 6pm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-home"
    }), "\xA0 creativeLabs HQ"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatars-stack mt-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar avatar-xs"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/2.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar avatar-xs"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/3.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar avatar-xs"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/4.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar avatar-xs"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/5.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar avatar-xs"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/6.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar avatar-xs"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/7.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar avatar-xs"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/8.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
      tabId: "2",
      className: "p-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "message"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "py-3 pb-5 mr-3 float-left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/7.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "avatar-status badge-success"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "Lukasz Holeczek"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted float-right mt-1"
    }, "1:52 PM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-truncate font-weight-bold"
    }, "Lorem ipsum dolor sit amet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "message"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "py-3 pb-5 mr-3 float-left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/7.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "avatar-status badge-success"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "Lukasz Holeczek"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted float-right mt-1"
    }, "1:52 PM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-truncate font-weight-bold"
    }, "Lorem ipsum dolor sit amet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "message"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "py-3 pb-5 mr-3 float-left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/7.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "avatar-status badge-success"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "Lukasz Holeczek"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted float-right mt-1"
    }, "1:52 PM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-truncate font-weight-bold"
    }, "Lorem ipsum dolor sit amet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "message"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "py-3 pb-5 mr-3 float-left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/7.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "avatar-status badge-success"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "Lukasz Holeczek"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted float-right mt-1"
    }, "1:52 PM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-truncate font-weight-bold"
    }, "Lorem ipsum dolor sit amet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "message"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "py-3 pb-5 mr-3 float-left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'assets/img/avatars/7.jpg',
      className: "img-avatar",
      alt: "admin@bootstrapmaster.com"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "avatar-status badge-success"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "Lukasz Holeczek"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted float-right mt-1"
    }, "1:52 PM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-truncate font-weight-bold"
    }, "Lorem ipsum dolor sit amet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
      tabId: "3",
      className: "p-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Settings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "aside-options"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix mt-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Option 1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSwitch"], {
      className: 'float-right',
      variant: 'pill',
      label: true,
      color: 'success',
      defaultChecked: true,
      size: 'sm'
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "aside-options"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix mt-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Option 2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSwitch"], {
      className: 'float-right',
      variant: 'pill',
      label: true,
      color: 'success',
      size: 'sm'
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "aside-options"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix mt-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Option 3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSwitch"], {
      className: 'float-right',
      variant: 'pill',
      label: true,
      color: 'success',
      defaultChecked: true,
      size: 'sm',
      disabled: true
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "Option disabled.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "aside-options"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix mt-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Option 4")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSwitch"], {
      className: 'float-right',
      variant: 'pill',
      label: true,
      color: 'success',
      defaultChecked: true,
      size: 'sm'
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "System Utilization"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-uppercase mb-1 mt-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "CPU Usage"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      className: "progress-xs",
      color: "info",
      value: "25"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "348 Processes. 1/4 Cores."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-uppercase mb-1 mt-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Memory Usage"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      className: "progress-xs",
      color: "warning",
      value: "70"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "11444GB/16384MB"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-uppercase mb-1 mt-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "SSD 1 Usage"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      className: "progress-xs",
      color: "danger",
      value: "95"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "243GB/256GB"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-uppercase mb-1 mt-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "SSD 2 Usage"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      className: "progress-xs",
      color: "success",
      value: "10"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "25GB/256GB"))));
  }

}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (DefaultAside);

/***/ })

}]);