import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CardRepositoryService } from './card-repository.service';

describe('CardRepositoryService', () => {
	let service: CardRepositoryService;

	beforeEach(() => TestBed.configureTestingModule({
		imports: [ HttpClientTestingModule ], 
		providers: [ CardRepositoryService ],
	}));

	beforeEach(() => {
		service = TestBed.get(CardRepositoryService);
	});
	
	it('should be created', () => {
		const service: CardRepositoryService = TestBed.get(CardRepositoryService);
		expect(service).toBeTruthy();
	});

	it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
		inject([HttpTestingController, CardRepositoryService], (httpMock: HttpTestingController, injectService: CardRepositoryService) => {
			expect(injectService).toBe(service);
		})
	);
});
