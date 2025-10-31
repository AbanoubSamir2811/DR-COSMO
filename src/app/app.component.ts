import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { RegisterComponent } from "./register/register.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'DRCOSMO';

   ngOnInit(): void {
    initFlowbite();
  }
}
