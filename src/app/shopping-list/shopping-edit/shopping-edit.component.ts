import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoplistService} from '../../services/shoplist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') name: ElementRef;
  @ViewChild('count') count: ElementRef;

  constructor(private addservice: ShoplistService) { }

  ngOnInit(): void {
  }
  addrecpice(){
    const a = this.name.nativeElement.value;
    const b = this.count.nativeElement.value;
    this.addservice.add(a,b);
  }
}
