import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CardsComponent } from './cards.component';
import { CardRepositoryService } from 'src/app/services/card-repository/card-repository.service';

describe('CardsComponent', () => {
	let component: CardsComponent;
	let fixture: ComponentFixture<CardsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule ],
			providers: [ CardRepositoryService ],
			declarations: [ CardsComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CardsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
