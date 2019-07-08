import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';
import { AdminCardListComponent } from './card-list/admin-card-list.component';
import { AddCardComponent } from './card-list/add-card/add-card.component';
import { EditCardComponent } from './card-list/edit-card/edit-card.component';

@NgModule({
  declarations: [AdminHomeComponent, AdminCardListComponent, EditCardComponent, AddCardComponent],
  imports: [
	CommonModule,
	FormsModule,
	RouterModule.forChild([
		{ path: 'admin', component: AdminHomeComponent },
		{ path: 'admin/cards', component: AdminCardListComponent },
		{ path: 'admin/cards/add', component: AddCardComponent },
		{ path: 'admin/cards/edit/:id', component: EditCardComponent }
	])
  ]
})
export class AdminModule { }
