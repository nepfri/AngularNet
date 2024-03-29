import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'client';
  users: any;

  constructor(private Http: HttpClient){

  }
  ngOnInit(): void {
    this.Http.get('https://localhost:5001/api/users').subscribe({
      next: response =>  this.users = response,
      error: error => console.log(error),
      complete: () => console.log()
    })
  }

}
