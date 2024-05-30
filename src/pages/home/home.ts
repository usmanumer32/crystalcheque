import { Component ,ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides : Slides;
  skipMsg : string = "Skip";
  state : string = 'x';

  constructor(public navCtrl: NavController) {  }

/*   goToDashboard(){
    this.navCtrl.push(DashboardPage);
  } */

  skip(){ 
    this.navCtrl.push(LoginPage);
  }

  slideChanged(){
    if (this.slides.isEnd())
      this.skipMsg = "Let's Get Started";
  }
  slideMoved(){
    if(this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
     this.state = 'rightSwipe';
    else
     this.state = 'leftSwipe';
  }
  animationDone(){
    this.state = 'x';
  }

}
