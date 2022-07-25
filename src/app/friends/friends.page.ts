import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  public friendss: any = [
    {name: 'Ana Karl Tatlonghari', kind: 0},
    {name: 'Edbert Ocampo', kind: 0},
    {name: 'Anjersey Marasigan', kind: 1},
    {name: 'Anjaneth Cordova', kind: 1},
    {name: 'Glory May Lugue', kind: 1},
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['tabs/tab2'])
  }

}
