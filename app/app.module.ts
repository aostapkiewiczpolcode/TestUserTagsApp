import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';

import {NativeScriptFormsModule} from 'nativescript-angular/forms';
import {NativeScriptHttpClientModule} from 'nativescript-angular/http-client';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {LoginComponent} from './login/login.component';
import {InMemoryUserService} from './services/in-memory-user.service';
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
        NativeScriptHttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryUserService, {delay: 500, dataEncapsulation: false}
        ),
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
