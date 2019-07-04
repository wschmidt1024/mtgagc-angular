import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Card } from 'src/app/models/card';

@Injectable({
	providedIn: 'root'
})
export class CardRepositoryService {

	constructor(private httpClient: HttpClient) { }

	public GetCards(): Observable<Card[]> {
		return this.httpClient.get<Card[]>("http://localhost:44318/api/v1/cards");
	}

}
