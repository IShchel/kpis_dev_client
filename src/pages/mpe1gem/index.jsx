import React, {
  Fragment,
  useEffect,
  useState,
  useRef,
  useContext,
  useMemo,
} from "react";
import { observer } from "mobx-react-lite";

import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import "./ag-table.css";

import { Context } from "../../index";
import { ControlButtons } from "./controlbuttons";
import SearchRegionFO from "./searchregionFO";
import ModalWindow from "./modalwindow";
import { fetchFromR1022 } from "../../http/mpe1gemAPI";
import RegionsFOTable from "./regions_fo_table";
import Mpe1GemTable from "./mpe1gem_table";

export const mpe1gemColors = {
  header: {
    bg: "#ddfffd",
    text: "#335c55",
    border: "#669c99",
  },
};

const Mpe1gem = observer(() => {
  const { regions_fo, mpe1gem } = useContext(Context);
  const [titleHeight, setTitleHeight] = useState(0);
  const refTitle = useRef(null);
  // const [modalActive, setModalActive] = useState(false);
  // const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    setTitleHeight(refTitle.current.clientHeight);
  }, []);

  useEffect(() => {
    fetchFromR1022().then((data) => {
      regions_fo.setList(data);
      regions_fo.setListBySearch(data);
    }).catch(err => alert(err))
  }, [regions_fo.empty]);

  let regionTableData = useMemo(
    () => regions_fo.ListBySearch,
    [regions_fo.ListBySearch]
  );

  return (
    <Fragment>
      <Box ref={refTitle}>
        <Box
          sx={{
            p: 1,
            mr: 0.5,
            boxShadow: 6,
            bgcolor: mpe1gemColors.header.bg,
            color: mpe1gemColors.header.text,
            border: 1,
            borderColor: mpe1gemColors.header.border,
            borderRadius: 1,
          }}
        >
          <Typography variant="subtitle2">
            Форма МПЭ-1Гем — номенклатура продукции и возможностей
            подведомственных организаций по заготовке компонентов донорской
            крови
          </Typography>
          <Typography variant="body2">
            слева — поиск субъектов РФ и федеральных органов, справа — перечень
            организаций этого субъекта / органа
          </Typography>
        </Box>
        <Grid container spacing={0.5}>
          <Grid item xs={2} sx={{ mt: 1 }}>
            <SearchRegionFO />
          </Grid>
          <Grid item xs={10} sx={{ mt: 1 }}>
            <ControlButtons />
            <ModalWindow
              active={mpe1gem.ModalProps.active}
              title={mpe1gem.ModalProps.title}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mr: 0.5, height: "100%" }}>
        <Grid
          container
          spacing={0.5}
          sx={{
            height: `calc(100% - ${titleHeight + 4}px)`,
            mt: 0,
          }}
        >
          <Grid item xs={2}>
            <RegionsFOTable regionTableData={regionTableData} />
          </Grid>
          <Grid item xs={10}>
            <Mpe1GemTable />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
});

export default Mpe1gem;
