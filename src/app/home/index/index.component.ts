import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  welcome: string;

  constructor(
    private homeService: HomeService
  ) {
  }

  ngOnInit() {
    this.welcome = this.homeService.getWelcome();
  }

}
