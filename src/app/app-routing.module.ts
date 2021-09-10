import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadedComponent } from './uploaded/uploaded.component';
import { UploaderComponent } from './uploader/uploader.component';

const routes: Routes = [
  { path: 'upload-image', component: UploaderComponent },
  { path: 'uploaded-successfully', component: UploadedComponent},
  { path: '**', redirectTo: '/upload-image' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
