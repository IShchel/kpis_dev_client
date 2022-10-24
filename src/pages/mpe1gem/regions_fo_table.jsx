import React, { useContext} from "react";
import { Context } from "../../index";

import { AgGridReact } from "ag-grid-react";

const RegionsFOTable = React.memo(({ regionTableData }) => {
  const { regions_fo, mpe1gem } = useContext(Context);
  return (
    <div
      id="mpe1gemGrid"
      className="ag-theme-material-regions"
      style={{ height: "100%" }}
    >
      <AgGridReact
        headerHeight={16}
        rowHeight={18}
        rowData={regionTableData.map((item) => {
          return { p00: item.p00, p01: item.p01 };
        })}
        columnDefs={[
          { field: "p01", headerName: "Субъект / ФО:", width: 235 },
          //{ field: "p00", headerName: "Код", width: 55 },
        ]}
        rowSelection="single"
        onRowDataUpdated={() => {
          regions_fo.resetSelectedItem()
        }}
        onRowClicked={(event) => {
          mpe1gem.setNewModalByField("r1022_fk", event.data.p00);
          regions_fo.setSelectedItem(
            regions_fo.list_reg_fo.find(({ p00 }) => p00 === event.data.p00)
          );
        }}
      ></AgGridReact>
    </div>
  );
});

export default RegionsFOTable;
