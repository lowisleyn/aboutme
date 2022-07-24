import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {

  fn = "Louisse Laine B. Eleda";
  nick = "Leyn";
  bday = "May 30, 2001";
  addr = "Durungao, Bauan, Batangas";

  constructor() { }

  ngOnInit() {}

}
