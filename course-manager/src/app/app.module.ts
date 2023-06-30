import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { CalcButtons } from './calculator/calc.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404/404.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CalcButtons,
    StarComponent,
    ReplacePipe,
    NavbarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: CourseListComponent
      }
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
