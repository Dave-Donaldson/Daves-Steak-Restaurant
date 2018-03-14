import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
  return (
    <footer>
      <div class="container">
        <nav class="menu">
        <a href="#"><span>Our Story</span></a>
        <a href="#"><span>Reviews</span></a>
        <a href="#"><span>Special Menu</span></a>
        <a href="#"><span>Reservations</span></a>
        <a href="#">Contact Us</a>
        </nav>

        <ul class="social-media">
        <li><a href="http://www.plus.google.com" target="new"><i class="icons fab fa-google-plus-g"></i></a></li>
        <li><a href="http://www.facebook.com" target="new"><i class="icons fab fa-facebook-square"></i></a></li>
        <li><a href="http://www.twitter.com" target="new"><i class="icons fab fa-twitter-square"></i></a></li>
        <li><a href="http://www.instagram.com" target="new"><i class="icons fab fa-instagram"></i></a></li>
        <li><a href="http://www.snapchat.com" target="new"><i class="icons fab fa-snapchat-square"></i></a></li>

        </ul>

        <div class="copyright">
         © 2018 Copyright
        </div>
      </div>
    </footer>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
