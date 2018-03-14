
var companyInfo = {
  title: 'PRIME STEAK',
  phone: '(718) 219-8652',
  location: 'Los Angeles, California',
  email: 'info@primesteak.com',
  lunch: 'Friday, Saturday, Sunday',
  lunchHours: '12pm - 1:30pm',
  dinner: 'Daily',
  dinnerHours: '6pm - 9:30pm'
}

var specialMenuData = [
  {
    title: 'Super BBQ Grill No Smoke',
    description: 'Fried eggs, Steak, baked potato or french fries, side of vegetables',
    price: 25
  },
  {
    title: 'Chicken Fingers',
    description: 'One pound of chicken breast breaded with our special blend of herbs and spices deep fried to perfection served with hand cut potato wedges and a side of pickle slaw',
    price: 22
  },
  {
    title: 'All American Burger',
    description: 'An american classic. 1/2 pound of prime steak ground to perfection and served on a toasted bun with 2 pickles, crisp lettuce not to forget the juicy tomato. Your choice of cheese and served with hand cut potato wedges also with a kosher dill pickle. It does not get any more american than that. ',
    price: 15
  }
]

var reviewsData = [
  {
    company:'The Food Network',
    author: 'Joe Bastiachi ',
    highlight: 'Best Restaurant in the L.A. area!',
    authorInfo: ' Winner Of The Chef Masters',
    review: 'bromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Best Restaurant in the L.A.areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Restaurant in the L.A. areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban supe',
  },
  {
    company: 'Washington Post',
    author: 'Jack Walker ',
    highlight: 'A Real Hometown Eatery',
    authorInfo: ' Fresh Eats column author',
    review: 'bromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Best Restaurant in the L.A.areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Restaurant in the L.A. areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban supe',
  },
  {
    company: 'Tasty.com',
    author: 'James Jones ',
    highlight: 'Fresh Taste affordable prices',
    authorInfo: ' Content maker and Chef',
    review: 'bromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Best Restaurant in the L.A.areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Restaurant in the L.A. areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban supe',
  },
  {
    company: 'HGTV',
    author: 'Guy Showes',
    highlight: 'A guy hangout',
    authorInfo: ' Guy\'s mancave maker',
    review: 'bromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Best Restaurant in the L.A.areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Restaurant in the L.A. areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban supe',
  },
  {
    company: 'HBO',
    author: 'Bill Blightly ',
    highlight: 'Best burgers in the LA area',
    authorInfo: ' Host of Bill\'s spot ',
    review: 'bromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Best Restaurant in the L.A.areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban super deep v neck.Restaurant in the L.A. areabromosexual brosie o donnell brotally bummer designer sunglasses dude gtl lacoste lasers quads suburban supe',
  }
]

var randomQuoteData = [
  {
    author: 'Leta T',
    quote: 'Wow what great service, I love it! Food is exactly what our business has been lacking. Without food, we would have gone bankrupt by now.',
  },
  {
    author: 'Shelli S',
    quote: 'Absolutely wonderful! We were treated like royalty. This is simply unbelievable!',
  },
  {
    author: 'Cecil L',
    quote: 'I was amazed at the quality of food. I am really satisfied with my food. I could probably go into sales for you.',
  },
  {
    author: 'Huntington Q',
    quote: 'I love food. Thanks guys, keep up the good work!',
  },
  {
    author: 'Amelina P',
    quote: 'Thanks guys, keep up the good work! Food should be nominated for service of the year.',
  },
]

export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  
  reviewStatus:{
  currentReview: 4,
  },

  quoteStatus: {
    currentQuote: Math.floor(Math.random() * randomQuoteData.length ) ,
  },
}

