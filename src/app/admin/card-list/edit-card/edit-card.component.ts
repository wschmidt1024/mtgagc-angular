import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardRepositoryService } from 'src/app/services/card-repository/card-repository.service';
import { Card } from '../../../models/card';

@Component({
	selector: 'app-edit-card',
	templateUrl: './edit-card.component.html',
	styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {
	private card: Card = new Card();

	constructor(private route: ActivatedRoute, private cardRepository: CardRepositoryService) { }

	ngOnInit() {
		let idRoute = this.route.snapshot.paramMap.get('id');
		let id = parseInt(idRoute);
		if (!isNaN(id)) {
			this.cardRepository.GetCardById(id)
				.subscribe(response => {
					this.card = response;
				});
		}
	}

	onSubmit() {
		this.cardRepository.UpdateCard(this.card)
			.subscribe(response => {
				// console.log(response);
			});
	}
}
