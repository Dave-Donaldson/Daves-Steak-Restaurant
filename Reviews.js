import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {

  var stateString = state.reviewsData[state.reviewStatus.currentReview]
  var arrowString = state.reviewStatus.currentReview
  var arrowRight = arrowString == (state.reviewsData.length - 1)

  console.log(arrowRight)

  var currentReview = function() {
   return(
     <div>
     <h5 class="comp-title">Reviews</h5>
     <h2>{stateString.company}</h2>
       <h4>{stateString.highlight}</h4>
       <p> 
         {stateString.review}
        </p>
       <div class="author"><strong>{stateString.author}</strong> <em>- {stateString.authorInfo}</em></div>
     </div>
   )
 }
  var leftClickBTN = function () {
    if (arrowString == 0) {
      console.log('do nothing')
    } else {
      actions.reviewLeftClicked()
    }
  }

 var rightClickBTN = function() {
   if (arrowString == (state.reviewsData.length - 1)) {
     console.log('do nothing')
   } else {
     actions.reviewRightClicked()
   }
 }
  

  return (
    <section id="Reviews">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="side-img">
            <img src="http://cdn.playbuzz.com/cdn/76d5533e-7e04-48ca-973e-8e05c34428ca/61a58a6a-7780-41d5-ac94-77891e70c103.jpg" />
          </div>
          </div>
          <div class="col-md-5">
            {currentReview()}
              
              <div class="arrows">
              <i onclick={leftClickBTN} class={`fas fa-arrow-left ${(arrowString > 0) ? 'ready' : ''}`} id="left"></i>
              <i onclick={rightClickBTN} class={`fas fa-arrow-right ${(arrowRight) ? '' : 'ready'}`} id="right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
