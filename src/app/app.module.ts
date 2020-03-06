import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { UsernameComponent } from './username/username.component';
import { BlogComponent } from './blog/blog.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path: '', component: UsernameComponent },
  { path: 'blog', component: BlogComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    BlogComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
