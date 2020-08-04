import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { AccountComponent } from './account/account.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { PowPipe } from './pipes/pow.pipe';
import { UserComponent } from './users/user/user.component';
import { AuthenticationService } from './services/authentication.service';
import { GaurdService } from './services/gaurd.service';
import {SubjectService} from './services/subject.service';
import { HttpserviceService} from './services/httpservice.service';
import { PostapiComponent } from './postapi/postapi.component';
import {HttpClientModule} from '@angular/common/http';
import {LengthPipe} from './pipes/length.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './login_logout/login/login.component';
import {AccChildComponent, dialogexample} from './account/acc-child/acc-child.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {SendDataService} from './services/send-data.service';
import { ShownameComponent } from './showname/showname.component';
import {DateComponent} from './servers/date/date.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { AlignDirective } from './pipes/align.directive';
import { DropdownDirective } from './services/directive/dropdown.directive';
import { NotFoundComponent } from './home/not-found/not-found.component';
import { SignComponent } from './login_logout/sign/sign.component';
import {LoginService} from './services/login.service';
import {LoginGaurdService} from './login_logout/login/login-gaurd.service';

const route: Routes = [
  {path: '' , redirectTo: 'home' , pathMatch: 'full' },
  {path: 'home' , component: HomeComponent },
  {path: 'servers' ,canActivate: [GaurdService], component: ServersComponent},
  {path: 'users' , component: UsersComponent},
  {path: 'user/:id/:name' , component: UserComponent},
  {path: 'info' , component: UserinfoComponent},
  {path: 'account' , component: AccountComponent},
  {path: 'home/post' , component: PostapiComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'sign' , component: SignComponent},
  {path: 'shop' ,canActivate: [LoginGaurdService] , component: ShopHomeComponent},
  {path: 'food' , component: ShoppingEditComponent},
  {path: 'not-found' ,component: NotFoundComponent  },
  {path: '**' , component: NotFoundComponent , data: {message: 'صفحه مورد نظر یافت نشد'}}
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UserinfoComponent,
        AccountComponent,
        UsersComponent,
        ServersComponent,
        PowPipe,
        UserComponent,
        PostapiComponent,
        LengthPipe,
        FilterPipe,
        LoginComponent,
        AccChildComponent,
        dialogexample,
        ShownameComponent,
        DateComponent,
        ShoppingListComponent,
        ShoppingEditComponent,
        RecipesComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        ShopHomeComponent,
        RecipeItemComponent,
        AlignDirective,
        DropdownDirective,
        NotFoundComponent,
        SignComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'Roxo'}),
        RouterModule.forRoot(route , {preloadingStrategy: PreloadAllModules}),
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        SweetAlert2Module.forRoot(),
        BrowserAnimationsModule,
        MatButtonToggleModule,
        HttpClientModule,
        MatButtonModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatIconModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatSlideToggleModule
    ],
  entryComponents: [AccountComponent, dialogexample],
  providers: [ SubjectService ,GaurdService , AuthenticationService ,
              SubjectService , HttpserviceService , FilterPipe ,
              SendDataService , LoginService , LoginGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
