import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecieverComponent } from './reciever/reciever.component';
import { SenderComponent } from './sender/sender.component';
import { DataserviceService } from './dataservice.service';
import { SubjComponent } from './subj/subj.component';

@NgModule({
  declarations: [
    AppComponent,
    RecieverComponent,
    SenderComponent,
    SubjComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataserviceService], // Include the service in the providers array
  bootstrap: [AppComponent]
})
export class AppModule { }
