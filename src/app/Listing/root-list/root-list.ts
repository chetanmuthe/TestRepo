import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterEnt } from '../../AllEntities/CommonModels';

@Component({
  selector: 'app-root-list',
  imports: [NgClass],
  templateUrl: './root-list.html',
  styleUrl: './root-list.css'
})

export class RootList {
  @Input('ShowResetAllButton') ShowResetAllButton:boolean=false;
  @Input('filter') Filter!: FilterEnt;
  @Input('AccessRights') AccessRights: any;
  @Output('resetClick') resetClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('searchClick') searchClick: EventEmitter<FilterEnt> = new EventEmitter<FilterEnt>();
  @Output('ImportItemClick') ImportItemClick: EventEmitter<FilterEnt> = new EventEmitter<FilterEnt>();
  @Output('ImportInventoryClick') ImportInventoryClick: EventEmitter<FilterEnt> = new EventEmitter<FilterEnt>();
  @Output('ImportLegacyItemClick') ImportLegacyItemClick: EventEmitter<FilterEnt> = new EventEmitter<FilterEnt>();
  @Output('ImportItemPriceClick') ImportItemPriceClick: EventEmitter<FilterEnt> = new EventEmitter<FilterEnt>();
  @Output('addClick') addClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('pageAuditClick') pageAuditClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('ExportClick') ExportClick: EventEmitter<FilterEnt> = new EventEmitter<FilterEnt>();
  
  @Output('resetAllClick') resetAllClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  LeftPanel: any = { IsOpen: true };
  constructor() { }

  ngOnInit(): void {
    debugger;
    // this.Filter.IsOpen=false
  }
  onReset() {
    this.resetClick.emit();
  }

  inputChanged(event: Event) {
    debugger;
  }

  onSearch() {
    this.Filter.PageNumber = 1;
    this.Filter.IsSearchClick = true;
    this.searchClick.emit(this.Filter);
  }
  ImportItem() {
    this.ImportItemClick.emit(this.Filter);
  }
  ImportInventory() {
    this.ImportInventoryClick.emit(this.Filter);
  }
  ImportLegacyItem(){
this.ImportLegacyItemClick.emit(this.Filter);
  }
  ImportItemPrice(){
    this.ImportItemPriceClick.emit(this.Filter);
      }
  onAdd() {
    this.addClick.emit();
  }
  onPageAuditClick() {
    this.pageAuditClick.emit();
  }
  ExportFile()
  {
    this.ExportClick.emit(this.Filter);
  }
  onPageClick(pageIndex: any) {
    this.Filter.PageNumber = pageIndex;
    this.Filter.IsSearchClick = false;
    this.searchClick.emit(this.Filter);
  }

  //#region  Reset All filter
  ResetAll(){
    this.resetAllClick.emit();
  }
  //#endregion
}
