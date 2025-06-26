import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { FormsModule } from '@angular/forms';
import { SellerAuth } from './seller-auth/seller-auth';


@Component({
  selector: 'app-root',
  imports: [Header,RouterOutlet,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  display=true;
}