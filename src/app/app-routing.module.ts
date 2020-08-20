import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'make-payment',
    loadChildren: () => import('./make-payment/make-payment.module').then( m => m.MakePaymentPageModule)
  },
  {
    path: 'confirm-payment',
    loadChildren: () => import('./confirm-payment/confirm-payment.module').then( m => m.ConfirmPaymentPageModule)
  },
  {
    path: 'service-request',
    loadChildren: () => import('./service-request/service-request.module').then( m => m.ServiceRequestPageModule)
  },
  {
    path: 'confirm-rider',
    loadChildren: () => import('./confirm-rider/confirm-rider.module').then( m => m.ConfirmRiderPageModule)
  },
  {
    path: 'rider-profile',
    loadChildren: () => import('./rider-profile/rider-profile.module').then( m => m.RiderProfilePageModule)
  },
  {
    path: 'ad-profile',
    loadChildren: () => import('./ad-profile/ad-profile.module').then( m => m.AdProfilePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'track-rider',
    loadChildren: () => import('./track-rider/track-rider.module').then( m => m.TrackRiderPageModule)
  },

  {
    path: 'view-ads',
    loadChildren: () => import('./view-ads/view-ads.module').then( m => m.ViewAdsPageModule)
  },
  {
    path: 'edit-ad',
    loadChildren: () => import('./edit-ad/edit-ad.module').then( m => m.EditAdPageModule)
  },
  {
    path: 'permissions',
    loadChildren: () => import('./permissions/permissions.module').then( m => m.PermissionsPageModule)
  },
  {
    path: 'register-client',
    loadChildren: () => import('./register-client/register-client.module').then( m => m.RegisterClientPageModule)
  },
  {
    path: 'view-requests',
    loadChildren: () => import('./view-requests/view-requests.module').then( m => m.ViewRequestsPageModule)
  },
  {
    path: 'app-help',
    loadChildren: () => import('./app-help/app-help.module').then( m => m.AppHelpPageModule)
  },
  {
    path: 'ad-request',
    loadChildren: () => import('./ad-request/ad-request.module').then( m => m.AdRequestPageModule)
  },
  {
    path: 'town-picker',
    loadChildren: () => import('./town-picker/town-picker.module').then( m => m.TownPickerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
