import { Injectable } from '@angular/core';

export interface Chip {
  id: number,
  label: string
}
@Injectable({
  providedIn: 'root',
})
export class ChipService {
  chips: Array<Chip> = [
    { id: 1, label: 'Alan' },
    { id: 2, label: 'Teo' },
    { id: 3, label: 'Alvaro' },
    { id: 4, label: 'Peter' },
    { id: 5, label: 'Jake' },
    { id: 6, label: 'Ander' },
  ];

  constructor() {}

  getChips() {
    return this.chips;
  }

  addChip(chip: string) {
    console.log(chip);
    let lastChipId  = this.chips[this.chips.length -1].id + 1
    this.chips.push({id: lastChipId, label: chip});
    console.log(
      '🚀 ~ file: chip.service.ts:18 ~ ChipService ~ addChip ~ chip',
      this.chips
    );
    return this.chips;
  }

  removeChip(index: number) {
    console.log(index);
    this.chips.splice(index, 1);
  }

  editChip(id: number, newChip: string) {
    console.log(id, newChip);
    this.chips[id].label = newChip;
    return this.chips;
  }
}
