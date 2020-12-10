/* tslint:disable */
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';
  number = 42;
  arr = [1, 2, 3];
  // reactImg = 'https://reactjs.org/logo-og.png';
  inputValue = '';
  constructor() {
    // setTimeout(() => {
    // tslint:disable-next-line:max-line-length
    //   this.reactImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
    // }, 5000);
  }
  onInput(event : KeyboardEvent){
    this.inputValue = (<HTMLInputElement>event.target).value
  }
  onClick(){
    console.log('CLICK!')
  }
  onBlur(str: string){
    this.inputValue = str;
  }
}
