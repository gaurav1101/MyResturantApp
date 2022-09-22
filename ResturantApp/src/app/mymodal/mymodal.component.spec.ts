import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymodalComponent } from './mymodal.component';

describe('MymodalComponent', () => {
  let component: MymodalComponent;
  let fixture: ComponentFixture<MymodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
