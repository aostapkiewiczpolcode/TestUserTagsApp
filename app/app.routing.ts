import {NgModule} from '@angular/core';
import {NativeScriptRouterModule} from 'nativescript-angular/router';
import {Routes} from '@angular/router';

import {UserDetailComponent} from './users/user-detail.component';
import {LoginComponent} from './login/login.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
    {path: '', redirectTo: '/users', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'users', component: UsersComponent},
    {path: 'user/:id', component: UserDetailComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}