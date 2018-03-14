import {h, app} from 'hyperapp'

export default function RandomQuote({state, actions}) {

  
  var quoteString = state.randomQuoteData[state.quoteStatus.currentQuote]

  var currentQuote = function () {
    return (
      <div>
        <h1>
          "{quoteString.quote}"
        </h1>
        <span class="author"> -{quoteString.author}- </span>
      </div>

    )
  }
  
  
  return (
    <section id="RandomQuote" style={{
      backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,.2)0, #000 100%),url("https://www.fishmongermedia.com/wp-content/uploads/2017/01/cooking.png")'
    }}>
      <div class="container">
       {currentQuote()}
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
