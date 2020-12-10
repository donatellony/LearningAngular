/* tslint:disable */
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arr = [1,1,2,3,5,8,13]

  objs = [
    {title: 'Post 1', author: 'donatellony', comments: [
        {name: 'Yehor', text: 'lala 1'},
        {name: 'Yehor', text: 'lala 2'},
        {name: 'Yehor', text: 'lala 3'}
      ]},
    {title: 'Post 2', author: 'donatellony 2', comments: [
        {name: 'Yehor 2', text: 'lala 1'},
        {name: 'Yehor 2', text: 'lala 2'},
        {name: 'Yehor 2', text: 'lala 3'}
      ]}
  ]
}
