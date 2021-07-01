import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentItems: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen Tanks'];
  memberBeingEdited: string = null;
  inEquipmentItems: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string) {
    for(let i=0;i<this.equipmentItems.length;i++){
    if (this.equipmentItems[i] === memberName) {
      this.inEquipmentItems = true;
    }
  }
  if (!this.inEquipmentItems) {
    this.equipmentItems.push(memberName);
  }
  this.inEquipmentItems = false;
}

remove(member: string) {
  let index = this.equipmentItems.indexOf(member);
  this.equipmentItems.splice(index, 1);
}
edit(member: string) {
  this.memberBeingEdited = member;
}
save(name: string, item: string) {
  let index = this.equipmentItems.indexOf(item);
  if (index !== -1) {
    this.equipmentItems[index] = name;
    this.memberBeingEdited = null;
}
}

}
