import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipService } from './chip.service';

import { ChipComponent } from './chip.component';

describe('ChipComponent', () => {
  let service: ChipService = new ChipService()
  let component: ChipComponent = new ChipComponent(service)

  beforeEach(async () => {
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
