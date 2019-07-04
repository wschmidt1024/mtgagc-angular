import { Component, OnInit } from '@angular/core';
import { CardRepositoryService } from 'src/app/services/card-repository/card-repository.service';
import { Card } from 'src/app/models/card';

@Component({
	selector: 'app-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
	private cards: Card[];

	constructor(private cardRepository: CardRepositoryService) { }

	ngOnInit() {
		this.cardRepository.GetCards()
			.subscribe(response =>
			{
				this.cards = response as Card[];
			});
	}

}
