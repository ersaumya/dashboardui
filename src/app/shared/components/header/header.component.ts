import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarMenu: EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toggleSidBar(){
    this.toggleSideBarMenu.emit();
  }

}
