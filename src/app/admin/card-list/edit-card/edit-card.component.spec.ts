import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EditCardComponent } from './edit-card.component';
import { CardRepositoryService } from 'src/app/services/card-repository/card-repository.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('EditCardComponent', () => {
	let component: EditCardComponent;
	let fixture: ComponentFixture<EditCardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule, RouterTestingModule, FormsModule ],
			providers: [ CardRepositoryService ],
			declarations: [ EditCardComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EditCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
