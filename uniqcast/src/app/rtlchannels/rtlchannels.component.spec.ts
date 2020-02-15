import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtlchannelsComponent } from './rtlchannels.component';

describe('RtlchannelsComponent', () => {
  let component: RtlchannelsComponent;
  let fixture: ComponentFixture<RtlchannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtlchannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtlchannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
