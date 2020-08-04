import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import swal from 'sweetalert2';
@Component({
  selector: 'app-acc-child',
  templateUrl: './acc-child.component.html',
  styleUrls: ['./acc-child.component.css']
})
export class AccChildComponent implements OnInit {
  inputval: string;
  constructor(private dialog: MatDialog) { }
  @Output() entername = new EventEmitter<string>();
  ngOnInit(): void {
  }
  showlog(){
    this.entername.emit(this.inputval);
  }
  show(val){
    console.log(val);
  }

}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog',
  template: `<div>asdadasda</div>`,
})
// tslint:disable-next-line:class-name component-class-suffix
export class dialogexample {}
