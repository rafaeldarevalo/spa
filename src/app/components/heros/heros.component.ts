import { Component, OnInit } from '@angular/core';
import {HerosService} from '../../services/heros.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  constructor(private _herosSercie:HerosService) { }

  ngOnInit(): void {
  }

}
