import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {
  
  stats = [
    {value: 22, label: '# of Users'},
    {value: 990, label: 'Revenue'},
    {value: 50, label: 'Reviews'}
  ];

  items = [
    {image: '/assets/couch.jpeg', title: 'Couch', description: 'A Couch'},
    {image: '/assets/dresser.jpeg', title: 'Dresser', description: 'A Dresser'}
  ]
}
