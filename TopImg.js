import {h, app} from 'hyperapp'

export default function TopImg({state, actions}) {
  return (
    <section id="TopImg">
      <div class="container">
        <div class="title">
          <h5>Welcome</h5>
          <div class="comp-name">
          <h1> 
            {state.companyInfo.title}<br/>restaurant
          </h1>
          </div>
        </div>

        <div class="contact-info">
          {/* <div class="container"> */}
              <div class="booking">
                Book a table directly
              </div>
          <h2>{state.companyInfo.phone}</h2>
              <div class="hours">
                Opening hours <strong>Mon - Fri: </strong>
                9am - 9pm
                <strong> Weekend: </strong> 9am - 11pm
              </div>
          </div>
        {/* </div> */}
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
