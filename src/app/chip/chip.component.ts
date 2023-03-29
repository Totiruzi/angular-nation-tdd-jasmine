import { Component, OnInit, ViewChild } from '@angular/core';
import { ChipService } from './chip.service';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
  @ViewChild('editedChip') editedChip: string ='';
  chips: Array<string> = ["Alan","Teo","Alvin"];
  editMode: boolean = false;
  newChip: string = '';
  selectedIndex: number = -1;

  constructor(public chipService: ChipService) { }

  ngOnInit(): void {
  }

  onAddChip(){
    this.chipService.addChip(this.newChip );
    this.newChip = ''
  }

  removeChip(index: number){
    this.chipService.removeChip(index)
  }

  turnEditModeOn(chip: any, idx: number){
    console.log("🚀 ~ file: chip.component.ts:21 ~ ChipComponent ~ turnEditModeOn ~ chip", chip)
    this.editMode = true; 
    this.editedChip = chip.label;
    this.selectedIndex = idx; 
  }

  editChip(index: number, newChip: string){
    this.chipService.editChip(index, newChip)
    this.editMode = false;
  }

  addListModal(){
    console.log('Popup Modal to add List of Chips')
  }

  trackByMethod(index:number, el:any): number {
    return el.id;
  }

}
