import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppStore } from "./services/app-store";

import { AppComponent } from "./app.component";

import "../../scss/styles.scss";

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [ AppStore ],
})
export class AppModule { }
