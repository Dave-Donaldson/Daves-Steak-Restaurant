import {h, app} from 'hyperapp'

export default function ContactUs({state, actions}) {
  return (
    <section id="ContactUs" class="textureBG">
      <div class="container">
          <h5 class="comp-title">Contact Us</h5>
          <h2>We are here to help you</h2>

      <div class="box">
        <div class="row">
          <div class="col-md-6">
            <div class="title">
            {state.companyInfo.location}
            </div>

            <h6 class="address">
              435 Main st<br/>
              Hollywood, CA 12402
            </h6>
            <p>
                <strong>email:</strong><a href="mailto:{state.companyInfo.email}"> {state.companyInfo.email}</a>
              </p>
          </div>
          <div class="col-md-6">
            <h6>Phone:</h6>
              <div class="title">
                {state.companyInfo.phone}
            </div>
              <h6>Lunch Service:</h6>
              <p>{state.companyInfo.lunch}<br/> 
                from {state.companyInfo.lunchHours}</p>
              
              <h6>Dinner Service:</h6>
              <p>{state.companyInfo.dinner}<br />
                from {state.companyInfo.dinnerHours}</p>

          </div>
      </div>
      </div>

        
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
