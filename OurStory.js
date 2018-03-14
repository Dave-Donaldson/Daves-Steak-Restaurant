import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="comp-title">Our Story</h5>
            
            <h2>Cooking is the art of adjustment</h2>
            
            <p>Lorem ipsum dolor amet etsy scenester af, 
              adaptogen pitchfork viral hashtag YOLO 
              polaroid portland hoodie marfa trust fund. 
              Street art pitchfork VHS, kombucha iceland 
              helvetica cred mustache chambray. I guess your
              still using bootstrap</p>
            <div class="quote">"The best steak in the town of Abingdon" - 
            <strong> Thomas Eggsy</strong></div>
            <a href="#" class="reserve-btn">Reserve</a>
            </div>
            <div class="col-md-6">
            <div class="video-img"></div>
            </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
