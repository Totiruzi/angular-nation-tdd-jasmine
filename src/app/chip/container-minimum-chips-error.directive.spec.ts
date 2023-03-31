
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, Input, Directive, ElementRef, HostListener } from '@angular/core';
import { ContainerMinimumChipsErrorDirective } from './container-minimum-chips-error.directive';
import { ChipService } from './chip.service';
import { BehaviorSubject, of } from 'rxjs';

@Directive({
  selector: '[containerMinimumChipsError]'
})
class MockContainerMinimumChipsErrorDirective {
  @Input() containerMinimumChipsError: any;
  @HostListener('mouseenter') onMouseEnter() {}
}

@Component({
  template: '<div containerMinimumChipsError></div>'
})
class TestComponent {}

describe('ContainerMinimumChipsErrorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let chipServiceSpy: jasmine.SpyObj<ChipService>;
  let directiveEl: DebugElement;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ChipService', ['getChipsLength']);
    TestBed.configureTestingModule({
      declarations: [ContainerMinimumChipsErrorDirective, TestComponent, MockContainerMinimumChipsErrorDirective],
      providers: [{ provide: ChipService, useValue: spy }]
    });
    chipServiceSpy = TestBed.inject(ChipService) as jasmine.SpyObj<ChipService>;
    fixture = TestBed.createComponent(TestComponent);
    directiveEl = fixture.debugElement.query(By.directive(MockContainerMinimumChipsErrorDirective));
  });

  it('should create the directive', () => {
    expect(directiveEl).toBeTruthy();
  });

  it('should set the border color to red when chips length is less than 3', () => {
    const chipsLengthSubject = new BehaviorSubject<number>(2)
    chipServiceSpy.chipsLength = chipsLengthSubject;
    // chipServiceSpy.getChipsLength.and.returnValue(of(2));
    fixture.detectChanges();
    expect(directiveEl.nativeElement.style.border).toBe('2px solid red');
  });

  it('should not set the border color when chips length is 3 or more', () => {
    const chipsLengthSubject = new BehaviorSubject<number>(3)
    chipServiceSpy.chipsLength = chipsLengthSubject;
    // chipServiceSpy.getChipsLength.and.returnValue(of(3));
    fixture.detectChanges();
    expect(directiveEl.nativeElement.style.border).toBe('');
  });
});















// import 'zone.js/dist/zone-testing';
// import { ChipService } from './chip.service';
// import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
// import { ChipComponent } from './chip.component';
// import { ContainerMinimumChipsErrorDirective } from './container-minimum-chips-error.directive';
// import { DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';

// describe('ContainerMinimumChipsErrorDirective', () => {
//   let component = ChipComponent;
//   let chipComponent: ChipComponent;
//   let chipService: ChipService;
//   let fixture: ComponentFixture<ChipComponent>;
//   let el: DebugElement;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ChipComponent, ContainerMinimumChipsErrorDirective],
//     });

//     chipService = new ChipService();
//     fixture = TestBed.createComponent(ChipComponent);
//     // component = fixture.componentInstance;
//     chipComponent = new ChipComponent(chipService);
//     el = fixture.debugElement;
//     fixture.detectChanges();
//   }));

//   it('should create an instance', () => {
//     let mockElRef = { nativeElement: document.createElement('div') };
//     const containerMinimumChipsErrorDirective =
//       new ContainerMinimumChipsErrorDirective(mockElRef, chipService);
//     expect(containerMinimumChipsErrorDirective).toBeTruthy();
//   });

//   it('should change the border color when chip less 3', () => {
//     let container = el.queryAll(By.css('#chip'));
//     let firstContainer = container[0];
//     firstContainer.triggerEventHandler('mouseclick', {});
//     fixture.detectChanges();
//     expect(firstContainer.nativeElement.style.border).toBe('red');
//   });

//   it('shoul change the input border color on edit mode', () => {});
// });
