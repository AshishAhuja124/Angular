import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DashboardModule} from './dashboard/dashboard.module';
import {RouterModule,RouterLink} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import {EmployeeCountComponent} from './employee/employeeCount.component';
import { HighlightDirective } from './employee/highlight.directive';
import { WelcomeComponent } from './welcome/welcome.component';
import{PageNotFoundComponent} from'./Others/pageNotFound.component';
import { DetailsComponent } from './employee/details.component';
import { EmployeeService } from './employee/employee.service';
import { DetailsGuardService } from './employee/detailsGuard.service';
import { ImageviewComponent } from './employee/imageview/imageview.component';
import { ImageService } from './employee/imageview/imageview.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,EmployeeListComponent,EmployeeCountComponent,EmployeeTitlePipe, HighlightDirective,
     WelcomeComponent,PageNotFoundComponent, DetailsComponent, ImageviewComponent
     
  ],
  imports: [HttpClientModule,
    BrowserModule,FormsModule,DashboardModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'employee',component:EmployeeListComponent},
      {path:'editPlayer/:code',
      canActivate:[DetailsGuardService],
      component:DetailsComponent},
      {path: 'album', component: ImageviewComponent},
      
      
     // {path:'employee/:code',component:EmployeeListComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      //{path:'**',component:PageNotFoundComponent},        //wild card route
       
      
    ])
  ],
  providers: [EmployeeService,DetailsGuardService,ImageService],
  bootstrap: [AppComponent]
})
export class AppModule{}
