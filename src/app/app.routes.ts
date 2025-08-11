import { Routes } from '@angular/router';
import {Blocks} from './features/blocks/blocks';
import {Logs} from './features/logs/logs';
import {Users} from './features/users/users';
import {Admins} from './features/admins/admins';
import {Setting} from './features/setting/setting';
import {Faq} from './features/faq/faq';
import {Subscriptions} from './features/subscriptions/subscriptions';
import {Orders} from './features/orders/orders';
import {Add} from './features/subscriptions/add/add';
import {Login} from './log/login/login';
import {Forget} from './log/forget/forget';
import {Logout} from './log/logout/logout';
import {Layout} from './component/shared/layout/layout';
import {authGuard} from './auth.guard';
import {Signup} from './log/signup/signup';
import {Page1} from './log/signup/page1/page1';
import {Page2} from './log/signup/page2/page2';
import {Page3} from './log/signup/page3/page3';


export const routes: Routes = [
  {path: 'login', children:[
    {path: '', component: Login},
      {path: 'logout', component: Logout},
      { path: 'forget', component: Forget },
      { path:'signup', component: Signup, children:[
          {path: '1', component: Page1},
          {path: '2', component: Page2},
          {path: '3', component: Page3},
        ]

      },
    ] },

  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  { path: 'dash',component:Layout , canActivate:[authGuard] , children:[
      { path: 'blocks', component: Blocks },
      { path: 'users', component: Users },
      { path: 'admins', component: Admins },
      { path: 'setting', component: Setting },
      { path: 'logs', component: Logs },
      { path: 'faq', component: Faq },
      { path: 'subscriptions',
        children: [
          {path: '' , component: Subscriptions },
          {path:'add', component: Add},
        ] },
      { path: 'orders', component: Orders },
    ] },
  { path: '**', redirectTo: 'dash' },

];
