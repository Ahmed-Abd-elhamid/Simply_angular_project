import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  constructor(private _router: Router) {}


  ngOnInit(): void {
  }

  onLimitChange(ev) {
    const value = ev.target.value;
    this._router.navigate(['/classes'], {
      queryParams: { limit: Number(value) },
      queryParamsHandling: 'merge',
    });
  }
}
