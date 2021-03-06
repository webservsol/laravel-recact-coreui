(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./resources/js/views/Users/Users.js":
/*!*******************************************!*\
  !*** ./resources/js/views/Users/Users.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _UsersData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UsersData */ "./resources/js/views/Users/UsersData.js");





function UserRow(props) {
  const user = props.user;
  const userLink = `/users/${user.id}`;

  const getBadge = status => {
    return status === 'Active' ? 'success' : status === 'Inactive' ? 'secondary' : status === 'Pending' ? 'warning' : status === 'Banned' ? 'danger' : 'primary';
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    key: user.id.toString()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: userLink
  }, user.id)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: userLink
  }, user.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, user.registered), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, user.role), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: userLink
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    color: getBadge(user.status)
  }, user.status))));
}

class Users extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const userList = _UsersData__WEBPACK_IMPORTED_MODULE_3__["default"].filter(user => user.id < 10);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "animated fadeIn"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xl: 6
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-align-justify"
    }), " Users ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "example")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      responsive: true,
      hover: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      scope: "col"
    }, "id"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      scope: "col"
    }, "name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      scope: "col"
    }, "registered"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      scope: "col"
    }, "role"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      scope: "col"
    }, "status"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, userList.map((user, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserRow, {
      key: index,
      user: user
    })))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ }),

/***/ "./resources/js/views/Users/UsersData.js":
/*!***********************************************!*\
  !*** ./resources/js/views/Users/UsersData.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const usersData = [{
  id: 0,
  name: 'John Doe',
  registered: '2018/01/01',
  role: 'Guest',
  status: 'Pending'
}, {
  id: 1,
  name: 'Samppa Nori',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 2,
  name: 'Estavan Lykos',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 3,
  name: 'Chetan Mohamed',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 4,
  name: 'Derick Maximinus',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 5,
  name: 'Friderik D??vid',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 6,
  name: 'Yiorgos Avraamu',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 7,
  name: 'Avram Tarasios',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 8,
  name: 'Quintin Ed',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 9,
  name: 'En??as Kwadwo',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 10,
  name: 'Agapetus Tade????',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 11,
  name: 'Carwyn Fachtna',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 12,
  name: 'Nehemiah Tatius',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 13,
  name: 'Ebbe Gemariah',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 14,
  name: 'Eustorgios Amulius',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 15,
  name: 'Leopold G??sp??r',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 16,
  name: 'Pompeius Ren??',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 17,
  name: 'Pa??jo Jadon',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 18,
  name: 'Micheal Mercurius',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 19,
  name: 'Ganesha Dubhghall',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 20,
  name: 'Hiroto ??imun',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 21,
  name: 'Vishnu Serghei',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 22,
  name: 'Zbyn??k Phoibos',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 23,
  name: 'Einar Randall',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 24,
  name: 'F??lix Troels',
  registered: '2018/03/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 25,
  name: 'Aulus Agmundr',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 42,
  name: 'Ford Prefex',
  registered: '2001/05/21',
  role: 'Alien',
  status: 'Don\'t panic!'
}];
/* harmony default export */ __webpack_exports__["default"] = (usersData);

/***/ })

}]);