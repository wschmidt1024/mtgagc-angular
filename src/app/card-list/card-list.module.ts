import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';

@NgModule({
	declarations: [
		CardsComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{ path: 'cards', component: CardsComponent }
		])
	]
})
export class CardListModule { }
