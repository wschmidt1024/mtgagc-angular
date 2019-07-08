import { Component, OnInit } from '@angular/core';
import { CardRepositoryService } from 'src/app/services/card-repository/card-repository.service';
import { Card } from 'src/app/models/card';

@Component({
	selector: 'app-admin-card-list',
	templateUrl: './admin-card-list.component.html',
	styleUrls: ['./admin-card-list.component.css']
})
export class AdminCardListComponent implements OnInit {
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
