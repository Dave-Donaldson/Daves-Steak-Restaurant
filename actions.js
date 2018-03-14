




var reviewLeftClicked = function(state, actions) {

  return (
    {
      reviewStatus: {
        currentReview: state.reviewStatus.currentReview - 1
      }
    }
  )
} 

var reviewRightClicked = function(state, actions) {
  
  return (
    { 
      reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
      }  
    }      
  )
}

export const actions = {
  reviewLeftClicked,
  reviewRightClicked

}





