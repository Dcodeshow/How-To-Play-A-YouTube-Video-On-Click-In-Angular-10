import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  videoIcon:string = "./assets/images/play.png";
  play:string = "Play";
  videodisabled:boolean = true;

  changeImg(){
    if(this.play == "Play")
    {
      this.play = "Pause",
      this.videoIcon = "./assets/images/pause.png",
      this.videodisabled = false
    }
    else
    {
      this.videoIcon = "./assets/images/play.png",
      this.play = "Play",
      this.videodisabled = true
    }
  }

}


