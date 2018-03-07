import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';

import {NativeScriptHttpModule} from 'nativescript-angular';
import {NativeScriptFormsModule} from 'nativescript-angular/forms';

import {LoginComponent} from './login/login.component';
import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './users/user-detail.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        UsersComponent,
        UserDetailComponent
    ],
    providers: [
        AuthService,
        UserService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
