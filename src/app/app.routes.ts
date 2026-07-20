import { RouterModule, Routes } from '@angular/router';
import { Login } from './Login/login/login';
import { Dashboard } from './Dashboard/dashboard/dashboard';
import { User } from './User/user/user';
import { WorkCategory } from './WorkCategory/work-category/work-category';
import { ToDo } from './to-do/to-do';
import { Status } from './status/status';
import { ToursTravels } from './tours-travels/tours-travels';

export const routes: Routes = [{path:'', redirectTo:'login',pathMatch:'full'},
    {path:'login',component:Login},
    { path: 'dashboard', component: Dashboard },
    { path: 'user', component: User },
    { path: 'workcategory', component: WorkCategory },
    { path: 'todo', component:ToDo },
    { path: 'status', component:Status },
    { path: 'tourstravels', component:ToursTravels },
  { path: '**', redirectTo: 'login' }
];
