import React, {useContext} from "react";
import { Context } from "../../index";
import { TextField, Typography } from "@mui/material";

const SearchRegionFO = React.memo(() => {
  const { regions_fo } = useContext(Context);

  const searchReg = (event) => {
    if (event.target.value.length >= 3) {
      let a = [];
      for (let item of regions_fo.list_reg_fo) {
        let c = false;
        for (let iitem of item.p01.split(" ")) {
          if (
            iitem.length >= 3 &&
            iitem.toLowerCase().indexOf(event.target.value.toLowerCase()) === 0
          ) {
            c = true;
          }
        }
        if (c === true) {
          a.push(item);
        }
      }
      regions_fo.setListBySearch(a);
    } else {
      regions_fo.setListBySearch(regions_fo.list_reg_fo)
    }
  };
    return (
    <TextField
      size={"small"}
      sx={{
        bgcolor: "#99d",
        borderRadius: 1,
        width: "100%",
      }}
      label={
        <Typography variant={"caption"}>Введите субъект РФ / ФО...</Typography>
      }
      variant="outlined"
      onChange={searchReg}
    />
  );
});

export default SearchRegionFO;