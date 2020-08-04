import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatDatepickerModule  } from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  startDate = new Date(2000, 0, 1);
  val: string;
  @Output() value = new  EventEmitter<any>();

  constructor() { }
  ngOnInit(): void {
  }
  add(){
    this.value.emit(this.val);
  }

}
