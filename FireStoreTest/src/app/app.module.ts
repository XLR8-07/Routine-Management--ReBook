import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";
 
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from './shared/employee.service';
import { SelectorComponent } from './employees/selector/selector.component';
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './employees/pop-up/pop-up.component';
import { BlankRoomsComponent } from './employees/pop-up/blank-rooms/blank-rooms.component';
import { NewSlotsComponent } from './employees/pop-up/new-slots/new-slots.component';
import { StackSlotComponent } from './employees/pop-up/stack-slot/stack-slot.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { GuestComponent } from './guest/guest.component';
import { RoutineViewComponent } from './guest/routine-view/routine-view.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    SelectorComponent,
    PopUpComponent,
    BlankRoomsComponent,
    NewSlotsComponent,
    StackSlotComponent,
    LoginComponent,
    AdminComponent,
    GuestComponent,
    RoutineViewComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MaterialModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  entryComponents:[EmployeeListComponent,PopUpComponent,EmployeeComponent,StackSlotComponent,LoginComponent]
})
export class AppModule { }
