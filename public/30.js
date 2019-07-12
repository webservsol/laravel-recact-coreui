(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./resources/js/views/Base/Tooltips/Tooltips.js":
/*!******************************************************!*\
  !*** ./resources/js/views/Base/Tooltips/Tooltips.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



class TooltipItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "mr-1",
      color: "secondary",
      id: 'Tooltip-' + this.props.id
    }, this.props.item.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      placement: this.props.item.placement,
      isOpen: this.state.tooltipOpen,
      target: 'Tooltip-' + this.props.id,
      toggle: this.toggle
    }, "Tooltip Content!"));
  }

}

class Tooltips extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: [false, false],
      tooltips: [{
        placement: 'top',
        text: 'Top'
      }, {
        placement: 'bottom',
        text: 'Bottom'
      }, {
        placement: 'left',
        text: 'Left'
      }, {
        placement: 'right',
        text: 'Right'
      }]
    };
  }

  toggle(i) {
    const newArray = this.state.tooltipOpen.map((element, index) => {
      return index === i ? !element : false;
    });
    this.setState({
      tooltipOpen: newArray
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "animated fadeIn"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-align-justify"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Tooltips"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header-actions"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://reactstrap.github.io/components/tooltips/",
      rel: "noreferrer noopener",
      target: "_blank",
      className: "card-header-action"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "docs")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Somewhere in here is a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      id: "TooltipExample"
    }, "tooltip"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      placement: "right",
      isOpen: this.state.tooltipOpen[0],
      target: "TooltipExample",
      toggle: () => {
        this.toggle(0);
      }
    }, "Hello world!"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-align-justify"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Tooltip"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " disable autohide")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Sometimes you need to allow users to select text within a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      id: "DisabledAutoHideExample"
    }, "tooltip"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      placement: "top",
      isOpen: this.state.tooltipOpen[1],
      autohide: false,
      target: "DisabledAutoHideExample",
      toggle: () => {
        this.toggle(1);
      }
    }, "Try to select this text!"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-align-justify"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Tooltip"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " list")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, this.state.tooltips.map((tooltip, i) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TooltipItem, {
        key: i,
        item: tooltip,
        id: i
      });
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-align-justify"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Tooltip"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " uncontrolled")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Somewhere in here is a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      id: "UncontrolledTooltipExample"
    }, "tooltip"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledTooltip"], {
      placement: "right",
      target: "UncontrolledTooltipExample"
    }, "Hello world!"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Tooltips);

/***/ })

}]);