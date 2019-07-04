import { TestBed } from '@angular/core/testing';

import { CardRepositoryService } from './card-repository.service';

describe('CardRepositoryService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: CardRepositoryService = TestBed.get(CardRepositoryService);
		expect(service).toBeTruthy();
	});
});
