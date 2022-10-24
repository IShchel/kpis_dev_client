import { makeAutoObservable } from "mobx";

export default class Mpe1gem_storage {
  constructor() {
    this._mpe1gemList = [];

    this._selectedRow = {};

    this._mpe1gem_new_modal = {
      id: 0,
      npp: 0,
      r1022_fk: "",
      naim_org: "",
      adr_fact: "",
      inn: "",
      plazma_max: "0.0",
      plazma_cena: "0.0",
      erm_max: "0.0",
      erm_cena: "0.0",
      immg_max: "0.0",
      immg_cena: "0.0",
      alb_max: "0.0",
      alb_cena: "0.0",
    };

    this._validFields = {
      naim_org: { status: false, helperText: "" },
      adr_fact: { status: false, helperText: "" },
      inn: { status: false, helperText: "" },
      plazma_max: { status: false, helperText: "" },
      plazma_cena: { status: false, helperText: "" },
      erm_max: { status: false, helperText: "" },
      erm_cena: { status: false, helperText: "" },
      immg_max: { status: false, helperText: "" },
      immg_cena: { status: false, helperText: "" },
      alb_max: { status: false, helperText: "" },
      alb_cena: { status: false, helperText: "" },
    };

    this._modalProps = {
      title: String,
      active: false,
    };

    makeAutoObservable(this);
  }

  setModalProps(prop, value) {
    this._modalProps[prop] = value;
  }

  setMpe1gemList(mpe1gem) {
    this._mpe1gemList = mpe1gem;
  }

  resetNewModal() {
    this._mpe1gem_new_modal = {
      id: 0,
      npp: 0,
      r1022_fk: "",
      naim_org: "",
      adr_fact: "",
      inn: "",
      plazma_max: "0.0",
      plazma_cena: "0.0",
      erm_max: "0.0",
      erm_cena: "0.0",
      immg_max: "0.0",
      immg_cena: "0.0",
      alb_max: "0.0",
      alb_cena: "0.0",
    };
  }

  resetValidFields() {
    this._validFields = {
      naim_org: { status: false, helperText: "" },
      adr_fact: { status: false, helperText: "" },
      inn: { status: false, helperText: "" },
      plazma_max: { status: false, helperText: "" },
      plazma_cena: { status: false, helperText: "" },
      erm_max: { status: false, helperText: "" },
      erm_cena: { status: false, helperText: "" },
      immg_max: { status: false, helperText: "" },
      immg_cena: { status: false, helperText: "" },
      alb_max: { status: false, helperText: "" },
      alb_cena: { status: false, helperText: "" },
    };
  }

  setValidField(field, bool, hmessage) {
    this._validFields[field].status = bool;
    this._validFields[field].helperText = hmessage;
  }

  setSelectedRow(input) {
    this._selectedRow = input;
  }

  setNewModal(input) {
    this._mpe1gem_new_modal = input;
  }

  setNewModalByField(field, input) {
    this._mpe1gem_new_modal[field] = input;
  }

  get newModal() {
    return this._mpe1gem_new_modal;
  }

  get ModalProps() {
    return this._modalProps;
  }

  get validFields() {
    return this._validFields;
  }

  get selectedRow() {
    return this._selectedRow;
  }

  get mpe1gemList() {
    return this._mpe1gemList;
  }
}
