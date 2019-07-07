import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Card } from 'src/app/models/card';
import { environment } from 'src/environments/environment';
import { pipe } from '@angular/core/src/render3';

@Injectable({
	providedIn: 'root'
})
export class CardRepositoryService {
	private apiUrl: string = environment.api.dockerSqlServer.url;

	constructor(private httpClient: HttpClient) { }

	public GetCards(): Observable<Card[]> {
		return this.httpClient.get<Card[]>(`${this.apiUrl}cards`)
			.pipe(
				catchError(this.handleError<Card[]>('GetCards', []))
			);
	}

	public GetCardById(id: number): Observable<Card> {
		return this.httpClient.get<Card>(`${this.apiUrl}cards/${id}`)
			.pipe(
				catchError(this.handleError<Card>('GetCardById'))
			);
	}

	public CreateCard(card: Card): Observable<Card> {
		const httpOptions = {
			headers: new HttpHeaders().set('Content-Type', 'application/json'),
			params: new HttpParams().set('', JSON.stringify(card))
		};
		return this.httpClient
			.post<Card>(`${this.apiUrl}cards`, card, httpOptions)
			.pipe(
				catchError(this.handleError<Card>('CreateCard'))
			);
	}

	public UpdateCard(card: Card): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		};
		return this.httpClient.put<Card>(`${this.apiUrl}cards/${card.Id}`, card, httpOptions)
			.pipe(
				catchError(this.handleError<any>('UpdateCard'))
			);
	}

	public DeleteCardById(id: number): Observable<any> {
		return this.httpClient.delete(`${this.apiUrl}cards/${id}`)
			.pipe(
				catchError(this.handleError<any>('DeleteCardById'))
			);
	}

	//TODO: move this to an injectable service
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			// console.error(error); // full error from server
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		};
	}
}
