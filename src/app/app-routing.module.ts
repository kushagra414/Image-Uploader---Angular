import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { LoaderComponent } from './loader/loader.component';
import { UploadedComponent } from './uploaded/uploaded.component';
import { UploaderComponent } from './uploader/uploader.component';

const routes: Routes = [
  { path: 'upload-image', component: UploaderComponent },
  { path: 'loading', component: LoaderComponent, canActivate: [AuthGuardService] },
  { path: 'uploaded-successfully', component: UploadedComponent, canActivate: [AuthGuardService]},
  { path: '**', redirectTo: '/upload-image' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
