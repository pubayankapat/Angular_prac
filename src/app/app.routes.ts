import { Routes, RouterModule } from '@angular/router';
import { Home } from './home/home';
import { Auth } from './auth/auth';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'Auth',
        component:Auth
    },
    {

    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
