import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { columnDefs } from "./mpe1gem_table_columnDefs";
import { AgGridReact } from "ag-grid-react";
import { Context } from "../../index";
import { fetchMpe1gemSelected } from "../../http/mpe1gemAPI";

const Mpe1GemTable = observer(() => {
  const { mpe1gem, regions_fo } = useContext(Context);

  useEffect(() => {
    fetchMpe1gemSelected(regions_fo.selectedItem.p00).then((data) => {
      mpe1gem.setMpe1gemList(data)
    }).catch(err => alert(err))
  }, [regions_fo.selectedItem,mpe1gem.newModal]);

  return (
    <div
      id="mpe1gemGrid"
      className="ag-theme-material"
      style={{ height: "100%" }}
    >
      <AgGridReact
        rowHeight={18}
        rowData={mpe1gem.mpe1gemList}
        columnDefs={columnDefs}
        rowSelection="single"
        onRowDataUpdated={() => {
          mpe1gem.resetNewModal()
          mpe1gem.setSelectedRow(mpe1gem.resetNewModal)
        }}
        onRowClicked={(event) => {
          mpe1gem.setSelectedRow(event.data);
          mpe1gem.setNewModal(event.data)
        }}
      ></AgGridReact>
    </div>
  );
})

export default Mpe1GemTable;
