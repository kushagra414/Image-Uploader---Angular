import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploaderComponent } from './uploader/uploader.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DndDirective } from './directive/dnd.directive';
import { LoaderComponent } from './loader/loader.component';
import { UploadedComponent } from './uploaded/uploaded.component';
@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    DndDirective,
    LoaderComponent,
    UploadedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
