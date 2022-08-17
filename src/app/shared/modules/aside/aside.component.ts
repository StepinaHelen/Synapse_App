import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  userName = localStorage.getItem('userName')|| 'Synapse Team'
  credentials = ''

  constructor() { }

  ngOnInit(): void {
    this.credentials = this.userName.split(' ').map((word) => word[0]).join('');
    
  }

}
