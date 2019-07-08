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
		// this.cardRepository.GetCards()
		// 	.subscribe(response =>
		// 	{
		// 		console.log("cards.component: Get Cards");
		// 		console.log(response);
		// 		this.cards = response as Card[];
		// 	});

		// this.cardRepository.GetCardById(1)
		// 	.subscribe(response => {
		// 		console.log("cards.component: Get Card By ID");
		// 		console.log(response);
		// 	});

		// var updatedCard: Card = new Card();
		// updatedCard.id = 1;
		// updatedCard.name = "Updated Title from Angular";
		// this.cardRepository.UpdateCard(updatedCard)
		// 	.subscribe(response => {
		// 		console.log("cards.component: Update Card");
		// 		console.log(response);
		// 	});

		// var newCard: Card = new Card();
		// newCard.Name = "Hard-coded Title from Angular";
		// this.cardRepository.CreateCard(newCard)
		// 	.subscribe(response => {
		// 		console.log("cards.component: Create Card");
		// 		console.log(response);
		// 	});

		// this.cardRepository.DeleteCardById(14)
		// 	.subscribe(response => {
		// 		console.log("cards.component: Delete Card By Id");
		// 		console.log(response);
		// 	});
	}

}
