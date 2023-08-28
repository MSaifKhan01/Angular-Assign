import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostPageComponent } from './post-page/post-page.component';
import { DisplaypageComponent } from './displaypage/displaypage.component';

@NgModule({
  declarations: [
    AppComponent,
    PostPageComponent,
    DisplaypageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
