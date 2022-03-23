import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AppNavigationService } from './services/app-navigation.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { MaterialModule } from './shared/modules/material/material.module';
import { ErrorMessageComponent } from './shared/components/forms/validation/error-message/error-message.component';
import { InputNumberComponent } from './shared/components/forms/inputs/input-number.component';
import { InputTextareaComponent } from './shared/components/forms/inputs/input-textarea.component';
import { InputEmailComponent } from './shared/components/forms/inputs/input-email.component';
import { InputTextComponent } from './shared/components/forms/inputs/input-text.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    SignupComponent,
    ResetPasswordComponent,
    InputTextComponent,
    ErrorMessageComponent,
    InputNumberComponent,
    InputTextareaComponent,
    InputEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
    AppNavigationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
