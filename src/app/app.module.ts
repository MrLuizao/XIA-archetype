import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  MatAutocompleteModule,
  MatCheckboxModule
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
import { CardMenuDashboardComponent } from './Components/card-menu-dashboard/card-menu-dashboard.component';
import { NavBarDashboardComponent } from './Components/nav-bar-dashboard/nav-bar-dashboard.component';
import { NavAllAppComponent } from './Components/nav-all-app/nav-all-app.component';
import { ListSearchPipe } from './Pipes/list-search.pipe';
import { WarehouseItemsComponent } from './Components/warehouse-items/warehouse-items.component';
import { CreateWarehouseComponent } from './dialogs/create-warehouse/create-warehouse.component';
import { DeleteWarehouseComponent } from './dialogs/delete-warehouse/delete-warehouse.component';
import { EditWarehouseComponent } from './dialogs/edit-warehouse/edit-warehouse.component';


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
  MatSlideToggleModule,
  MatDialogModule,
  MatTabsModule,
  MatProgressSpinnerModule, 
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule, 
  MatAutocompleteModule,
  MatCheckboxModule
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
    TableUsersComponent,
    CardMenuDashboardComponent,
    NavBarDashboardComponent,
    NavAllAppComponent,
    ListSearchPipe,
    WarehouseItemsComponent,
    CreateWarehouseComponent,
    DeleteWarehouseComponent,
    EditWarehouseComponent
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
    MatMenuModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MATERIAL_COMPONENTS,
  ],
  entryComponents: [
    LoginModalComponent,
    RegistryModalComponent,
    ConfirmCloseComponent,
    CreateWarehouseComponent,
    DeleteWarehouseComponent,
    EditWarehouseComponent
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
