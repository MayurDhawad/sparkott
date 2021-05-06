import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { RgvworldComponent } from './components/rgvworld/rgvworld.component';
import { SparkoriginalComponent } from './components/sparkoriginal/sparkoriginal.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { WebseriesComponent } from './components/webseries/webseries.component';
import { PractiseComponent } from './components/practise/practise.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './pipes_&_guards/auth.guard';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UsersComponent } from './components/admin/users/users.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AdminmoviesComponent } from './components/admin/admin-movies/adminmovies.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'movies/:id', component:MoviedetailsComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'subscribe', component:SubscribeComponent},
  {path:'webseries', component:WebseriesComponent},
  {path:'sparkoriginal', component:SparkoriginalComponent},
  {path:'movies', component:MoviesComponent},
  {
      path:'rgvworld', 
      component:RgvworldComponent,
      canActivate:[AuthGuard]
  },
  {
      path:'admin', component:AdminComponent,
      children : [
          {path:'', redirectTo:'/admin/dashboard', pathMatch:'full'},
          {path:'dashboard', component:DashboardComponent},
          {path:'users', component:UsersComponent},
          {path:'adminmovies', component: AdminmoviesComponent}
      ]
  },
  {path:'profile', component:ProfileComponent},
  {path:'practise', component:PractiseComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents =  [
                                      HomeComponent,
                                      HeaderComponent,
                                      FooterComponent,
                                      LoginComponent,
                                      RegisterComponent,
                                      WebseriesComponent,
                                      SparkoriginalComponent,
                                      RgvworldComponent,
                                      MoviesComponent,
                                      SubscribeComponent,
                                      AdminComponent,
                                      DashboardComponent,
                                      UsersComponent,
                                      MoviesComponent,
                                      PractiseComponent,
                                      MoviedetailsComponent,
                                      ProfileComponent,
                                      AdminmoviesComponent,
                                      PageNotFoundComponent
                                  ]
