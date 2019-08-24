import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AdminCardListComponent } from './admin-card-list.component';
import { CardRepositoryService } from 'src/app/services/card-repository/card-repository.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminCardListComponent', () => {
	let component: AdminCardListComponent;
	let fixture: ComponentFixture<AdminCardListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule, RouterTestingModule ],
			providers: [ CardRepositoryService ],
			declarations: [AdminCardListComponent]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AdminCardListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
