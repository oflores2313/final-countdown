import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CoreModule } from "./core/core.module";
import { TimeComponent } from './time/time.component';
import { TeslaComponent } from './tesla/tesla.component';

@NgModule({
  declarations: [AppComponent, TimeComponent, TeslaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    CoreModule
  ],
  exports: [FontAwesomeModule, TimeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
