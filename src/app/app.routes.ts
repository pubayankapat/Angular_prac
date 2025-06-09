import { Routes, RouterModule } from '@angular/router';
import { Home } from './home/home';
import { NgModule } from '@angular/core';
import { SellerAuth } from './seller-auth/seller-auth';
import { Login } from './login/login';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'auth',
        component:SellerAuth
    },
    {
        path:'login',
        component:Login
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes),FormsModule],
    exports: [RouterModule]
})
export class AppModule { }
