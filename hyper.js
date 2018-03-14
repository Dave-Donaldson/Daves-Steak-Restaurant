webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var reviewLeftClicked = function reviewLeftClicked(state, actions) {

  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview - 1
    }
  };
};

var reviewRightClicked = function reviewRightClicked(state, actions) {

  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
    }
  };
};

var actions = exports.actions = {
  reviewLeftClicked: reviewLeftClicked,
  reviewRightClicked: reviewRightClicked

};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(20);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(16);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(19);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(17);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(18);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(13);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(14);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var companyInfo = {
  title: 'PRIME STEAK',
  phone: '(718) 219-8652',
  location: 'Los Angeles, California',
  email: 'info@primesteak.com',
  lunch: 'Friday, Saturday, Sunday',
  lunchHours: '12pm - 1:30pm',
  dinner: 'Daily',
  dinnerHours: '6pm - 9:30pm'
};

var specialMenuData = [{
  title: 'Super BBQ Grill No Smoke',
  description: 'Fried eggs, Steak, baked potato or french fries, side of vegetables',
  price: 25
}, {
  title: 'Chicken Fingers',
  description: 'One pound of chicken breast breaded with our special blend of herbs and spices deep fried to perfection served with hand cut potato wedges and a side of pickle slaw',
  price: 22
}, {
  title: 'All American Burger',
  description: 'An american classic. 1/2 pound of prime steak ground to perfection and served on a toasted bun with 2 pickles, crisp lettuce not to forget the juicy tomato. Your choice of cheese and served with hand cut potato wedges also with a kosher dill pickle. It does not get any more american than that. ',
  price: 15
}];

var reviewsData = [{
  company: 'The Food Network',
  author: 'Joe Bastiachi ',
  highlight: 'Best Restaurant in the L.A. area!',
  authorInfo: ' Winner Of The Chef Masters',
  review: 'bromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Best Restaurant in the L.A.areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Restaurant in the L.A. areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban supe'
}, {
  company: 'Washington Post',
  author: 'Jack Walker ',
  highlight: 'A Real Hometown Eatery',
  authorInfo: ' Fresh Eats column author',
  review: 'bromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Best Restaurant in the L.A.areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Restaurant in the L.A. areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban supe'
}, {
  company: 'Tasty.com',
  author: 'James Jones ',
  highlight: 'Fresh Taste affordable prices',
  authorInfo: ' Content maker and Chef',
  review: 'bromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Best Restaurant in the L.A.areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Restaurant in the L.A. areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban supe'
}, {
  company: 'HGTV',
  author: 'Guy Showes',
  highlight: 'A guy hangout',
  authorInfo: ' Guy\'s mancave maker',
  review: 'bromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Best Restaurant in the L.A.areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Restaurant in the L.A. areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban supe'
}, {
  company: 'HBO',
  author: 'Bill Blightly ',
  highlight: 'Best burgers in the LA area',
  authorInfo: ' Host of Bill\'s spot ',
  review: 'bromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Best Restaurant in the L.A.areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Restaurant in the L.A. areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban supe'
}];

var randomQuoteData = [{
  author: 'Leta T',
  quote: 'Wow what great service, I love it! Food is exactly what our business has been lacking. Without food, we would have gone bankrupt by now.'
}, {
  author: 'Shelli S',
  quote: 'Absolutely wonderful! We were treated like royalty. This is simply unbelievable!'
}, {
  author: 'Cecil L',
  quote: 'I was amazed at the quality of food. I am really satisfied with my food. I could probably go into sales for you.'
}, {
  author: 'Huntington Q',
  quote: 'I love food. Thanks guys, keep up the good work!'
}, {
  author: 'Amelina P',
  quote: 'Thanks guys, keep up the good work! Food should be nominated for service of the year.'
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenuData: specialMenuData,
  reviewsData: reviewsData,
  randomQuoteData: randomQuoteData,

  reviewStatus: {
    currentReview: 4
  },

  quoteStatus: {
    currentQuote: Math.floor(Math.random() * randomQuoteData.length)
  }
};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs", "class": "textureBG" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Contact Us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "We are here to help you"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              state.companyInfo.location
            ),
            (0, _hyperapp.h)(
              "h6",
              { "class": "address" },
              "435 Main st",
              (0, _hyperapp.h)("br", null),
              "Hollywood, CA 12402"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "email:"
              ),
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:{state.companyInfo.email}" },
                " ",
                state.companyInfo.email
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              "Phone:"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              state.companyInfo.phone
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Lunch Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              state.companyInfo.lunch,
              (0, _hyperapp.h)("br", null),
              "from ",
              state.companyInfo.lunchHours
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Dinner Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              state.companyInfo.dinner,
              (0, _hyperapp.h)("br", null),
              "from ",
              state.companyInfo.dinnerHours
            )
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        { "class": "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          (0, _hyperapp.h)(
            "span",
            null,
            "Our Story"
          )
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          (0, _hyperapp.h)(
            "span",
            null,
            "Reviews"
          )
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          (0, _hyperapp.h)(
            "span",
            null,
            "Special Menu"
          )
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          (0, _hyperapp.h)(
            "span",
            null,
            "Reservations"
          )
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "social-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.plus.google.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "icons fab fa-google-plus-g" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.facebook.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "icons fab fa-facebook-square" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.twitter.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "icons fab fa-twitter-square" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.instagram.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "icons fab fa-instagram" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.snapchat.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "icons fab fa-snapchat-square" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "\xA9 2018 Copyright"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          (0, _hyperapp.h)(
            "span",
            null,
            "prime"
          ),
          (0, _hyperapp.h)("br", null),
          "steak restaurant"
        )
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Lorem ipsum dolor amet etsy scenester af, adaptogen pitchfork viral hashtag YOLO polaroid portland hoodie marfa trust fund. Street art pitchfork VHS, kombucha iceland helvetica cred mustache chambray. I guess your still using bootstrap"
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            "\"The best steak in the town of Abingdon\" -",
            (0, _hyperapp.h)(
              "strong",
              null,
              " Thomas Eggsy"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-img" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var quoteString = state.randomQuoteData[state.quoteStatus.currentQuote];

  var currentQuote = function currentQuote() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h1",
        null,
        "\"",
        quoteString.quote,
        "\""
      ),
      (0, _hyperapp.h)(
        "span",
        { "class": "author" },
        " -",
        quoteString.author,
        "- "
      )
    );
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "RandomQuote", style: {
        backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,.2)0, #000 100%),url("https://www.fishmongermedia.com/wp-content/uploads/2017/01/cooking.png")'
      } },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      currentQuote()
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var stateString = state.reviewsData[state.reviewStatus.currentReview];
  var arrowString = state.reviewStatus.currentReview;
  var arrowRight = arrowString == state.reviewsData.length - 1;

  console.log(arrowRight);

  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Reviews"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        stateString.company
      ),
      (0, _hyperapp.h)(
        "h4",
        null,
        stateString.highlight
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        stateString.review
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "author" },
        (0, _hyperapp.h)(
          "strong",
          null,
          stateString.author
        ),
        " ",
        (0, _hyperapp.h)(
          "em",
          null,
          "- ",
          stateString.authorInfo
        )
      )
    );
  };
  var leftClickBTN = function leftClickBTN() {
    if (arrowString == 0) {
      console.log('do nothing');
    } else {
      actions.reviewLeftClicked();
    }
  };

  var rightClickBTN = function rightClickBTN() {
    if (arrowString == state.reviewsData.length - 1) {
      console.log('do nothing');
    } else {
      actions.reviewRightClicked();
    }
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-7" },
          (0, _hyperapp.h)(
            "div",
            { "class": "side-img" },
            (0, _hyperapp.h)("img", { src: "http://cdn.playbuzz.com/cdn/76d5533e-7e04-48ca-973e-8e05c34428ca/61a58a6a-7780-41d5-ac94-77891e70c103.jpg" })
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-5" },
          currentReview(),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", { onclick: leftClickBTN, "class": "fas fa-arrow-left " + (arrowString > 0 ? 'ready' : ''), id: "left" }),
            (0, _hyperapp.h)("i", { onclick: rightClickBTN, "class": "fas fa-arrow-right " + (arrowRight ? '' : 'ready'), id: "right" })
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var loopMenu = function loopMenu() {
    return state.specialMenuData.map(function (item) {

      return (0, _hyperapp.h)(
        "div",
        { "class": "col-md-4" },
        (0, _hyperapp.h)(
          "div",
          { "class": "box" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box-img" },
            (0, _hyperapp.h)(
              "div",
              { "class": "price-circle" },
              "$",
              item.price
            )
          ),
          (0, _hyperapp.h)(
            "span",
            { "class": "title" },
            item.title
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "details" },
            item.description
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu", "class": "textureBG" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavour Of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row boxes" },
        loopMenu()
      )
    ),
    (0, _hyperapp.h)(
      "a",
      { href: "#", "class": "link" },
      "View Full Menu"
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "comp-name" },
          (0, _hyperapp.h)(
            "h1",
            null,
            state.companyInfo.title,
            (0, _hyperapp.h)("br", null),
            "restaurant"
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "booking" },
          "Book a table directly"
        ),
        (0, _hyperapp.h)(
          "h2",
          null,
          state.companyInfo.phone
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "hours" },
          "Opening hours ",
          (0, _hyperapp.h)(
            "strong",
            null,
            "Mon - Fri: "
          ),
          "9am - 9pm",
          (0, _hyperapp.h)(
            "strong",
            null,
            " Weekend: "
          ),
          " 9am - 11pm"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _hyperappReduxDevtools = __webpack_require__(12);

var _hyperappReduxDevtools2 = _interopRequireDefault(_hyperappReduxDevtools);

var _actions = __webpack_require__(9);

var _globalState = __webpack_require__(11);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: _globalState.globalState,
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    }
  },
  mixins: [(0, _hyperappReduxDevtools2.default)()]
});

/***/ })
],[21]);