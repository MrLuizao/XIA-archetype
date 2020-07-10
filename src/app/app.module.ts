import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatIconModule, MatTableModule, MatGridListModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatProgressBar } from '@angular/material';
import {
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatSelectModule, 
  MatCardModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatMenuModule,
  MatTableModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatTabsModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatAutocompleteModule
  } from '@angular/material';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { ProveedorComponent } from './pages/proveedor/proveedor.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListMenuItemsComponent } from './Components/list-menu-items/list-menu-items.component';
import { LoginModalComponent } from './dialogs/login-modal/login-modal.component';
import { RegistryModalComponent } from './dialogs/registry-modal/registry-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ToolsUserComponent } from './Components/tools-user/tools-user.component';
import { ConfirmCloseComponent } from './dialogs/confirm-close/confirm-close.component';
import { CardsHomeComponent } from './Components/cards-home/cards-home.component';
import { TableUsersComponent } from './Components/table-users/table-users.component';


export const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatSelectModule,
  MatCardModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatMenuModule,
  MatTableModule,
  // MatStepperModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatTabsModule,
  MatProgressSpinnerModule, 
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule, 
  MatAutocompleteModule
]

@NgModule({
  declarations: [
    AppComponent,
    ProveedorComponent,
    ComprasComponent,
    DashboardComponent,
    ListMenuItemsComponent,
    LoginModalComponent,
    RegistryModalComponent,
    LoginPageComponent,
    ToolsUserComponent,
    ConfirmCloseComponent,
    CardsHomeComponent,
    TableUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    // MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    // MatProgressBar,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MATERIAL_COMPONENTS,
  ],
  entryComponents: [
    LoginModalComponent,
    RegistryModalComponent,
    ConfirmCloseComponent
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
