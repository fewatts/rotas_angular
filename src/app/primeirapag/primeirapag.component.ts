import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeirapag',
  templateUrl: './primeirapag.component.html',
  styleUrls: ['./primeirapag.component.css']
})
export class PrimeirapagComponent {
  constructor(
    private router: Router
  ){}

  SegPag(){
    this.router.navigate([
      "segunda-pag"
    ])
  }
}
