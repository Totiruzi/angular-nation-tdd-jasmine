import { Directive, Input } from '@angular/core';
import { ChipComponent } from './chip.component';

@Directive({
  selector: '[appCustomChipValidator]'
})
export class CustomChipValidatorDirective {

  @Input('customChipValidator') maxChips: number;

  constructor(private chipComponent: ChipComponent) { }

  ngOnChanges() {
    if (this.maxChips) {
      this.chipComponent.validateChipsCount(this.maxChips);
    }
  }
}
