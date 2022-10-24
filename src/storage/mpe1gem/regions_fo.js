import { makeAutoObservable } from "mobx";

export default class Regions_fo {
  constructor() {

    this._empty = []

    this._list_reg_fo = []

    this._selectedList = this._list_reg_fo

    this._selectedItem = {};

    makeAutoObservable(this);
  }

  setList(input) {
      this._list_reg_fo = input;
    }

  setListBySearch(filtered) {
    this._selectedList = filtered;
  }

  setSelectedItem(selectedItem) {
    this._selectedItem = selectedItem;
  }

  resetSelectedItem() {
    this._selectedItem = {
      p00: "",
      p01: "",
      p02: "",
      utv: "",
      sp: "",
    };
  }

  get list_reg_fo() {
    return this._list_reg_fo;
  }

  get ListBySearch() {
    return this._selectedList;
  }

  get selectedItem() {
    return this._selectedItem;
  }

  get empty() {
    return this._empty
  }
}
