import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  plannedExperiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density'];
  memberBeingEdited: string = null;
  inExperimentItems: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string) {
    for(let i=0;i<this.plannedExperiments.length;i++){
    if (this.plannedExperiments[i] === memberName) {
      this.inExperimentItems = true;
    }
  }
  if (!this.inExperimentItems) {
    this.plannedExperiments.push(memberName);
  }
  this.inExperimentItems = false;
}

remove(member: string) {
  let index = this.plannedExperiments.indexOf(member);
  this.plannedExperiments.splice(index, 1);
}
edit(member: string) {
  this.memberBeingEdited = member;
}
save(name: string, item: string) {
  let index = this.plannedExperiments.indexOf(item);
  if (index !== -1) {
    this.plannedExperiments[index] = name;
    this.memberBeingEdited = null;
}
}

}
