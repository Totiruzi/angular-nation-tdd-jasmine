import { ChipService } from './chip.service';
import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
  selector: '[containerMinimumChipsError]'
})
export class ContainerMinimumChipsErrorDirective implements OnInit{
  
  constructor(private elRef: ElementRef, private chipService: ChipService) { }

  ngOnInit(): void {
    this.chipService.chipsLength.subscribe( length => {
      this.elRef.nativeElement.style.border = length < 3 ? 
      '2px solid red' :
      ''
    })
  }
}
