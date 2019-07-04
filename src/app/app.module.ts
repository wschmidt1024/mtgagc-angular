import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CardListModule } from './card-list/card-list.module';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot([
			{ path: '', component: HomeComponent, pathMatch: 'full' },
			{ path: '**', redirectTo: '', pathMatch: 'full' }
		]),
		AppRoutingModule,
		CardListModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
