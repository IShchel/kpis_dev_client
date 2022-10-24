import React, { useContext } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { mpe1gemColors } from "./index";
import { Context } from "../../index";
import { columnDefs } from "./mpe1gem_table_columnDefs";
import { observer } from "mobx-react-lite";
import { addMpe1gem, updateMpe1gem } from "../../http/mpe1gemAPI";

export function ValidateField(field, value) {

  let digitData = [
    "plazma_max",
    "plazma_cena",
    "erm_max",
    "erm_cena",
    "immg_max",
    "immg_cena",
    "alb_max",
    "alb_cena",
  ];
  if (digitData.includes(field)) {
    let re = new RegExp(/^\d{0,17}[[\.]\d{0,6}?]?$/);
    if (re.test(value) === true) {
      return true;
    } else {
      return "Введите корректные данные!";
    }
  } else {
    if (field === "adr_fact") {
      if (value.length < 10) {
        return "Адрес должен содержать 10 или более символов!";
      } else {
        return true;
      }
    }
    if (field === "naim_org") {
      if (value.length < 4) {
        return "Наименование организации должно содержать 4 или более символов!";
      } else {
        return true;
      }
    }

    if (field === "inn") {
      if (value !== "" && parseInt(value) == value) {
        let checkSum;
        if (value.length === 10) {
          checkSum =
            ((2 * value[0] +
              4 * value[1] +
              10 * value[2] +
              3 * value[3] +
              5 * value[4] +
              9 * value[5] +
              4 * value[6] +
              6 * value[7] +
              8 * value[8]) %
              11) %
            10;
          if (checkSum !== Number(value[9])) {
            checkSum = false;
          } else {
            return true;
          }
        } else if (value.length === 12) {
          checkSum =
            ((7 * value[0] +
              2 * value[1] +
              4 * value[2] +
              10 * value[3] +
              3 * value[4] +
              5 * value[5] +
              9 * value[6] +
              4 * value[7] +
              6 * value[8] +
              8 * value[9]) %
              11) %
            10;
          if (checkSum === Number(value[10])) {
            checkSum =
              ((3 * value[0] +
                7 * value[1] +
                2 * value[2] +
                4 * value[3] +
                10 * value[4] +
                3 * value[5] +
                5 * value[6] +
                9 * value[7] +
                4 * value[8] +
                6 * value[9] +
                8 * value[10]) %
                11) %
              10;
            if (checkSum !== Number(value[11])) {
              checkSum = false;
            } else {
              return "Вы пытаетесь ввести ИНН физического лица!";
            }
          } else {
            checkSum = false;
          }
        }
        if (checkSum === false) {
          return "Невалидная контрольная сумма – невалидный ИНН!";
        }
        if (![12, 10].includes(value.length)) {
          return "ИНН может состоять только из 10 или 12 цифр!";
        }
      } else {
        return "Введите корректный ИНН юридического лица!";
      }
    }
  }
}

const ModalWindow = observer(() => {
  const { mpe1gem, regions_fo } = useContext(Context);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    bgcolor: mpe1gemColors.header.bg,
    border: `2px solid ${mpe1gemColors.header.border}`,
    boxShadow: 24,
    p: 4,
  };

  function disableSave(input) {
    for (let item in input) {
      if (input[item].status === false) {
        return true;
      }
    }
    return false;
  }

  return (
    <div>
      <Modal
        open={mpe1gem.ModalProps.active}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} color={mpe1gemColors.header.text}>
          <Typography variant="h5" sx={{ ml: 4 }}>
            {`${mpe1gem.ModalProps.title} форму:`}
          </Typography>

          <Paper
            elevation={2}
            sx={{ mt: 2, bgcolor: "#F5D508B7", color: "inherit" }}
          >
            <Container sx={{ ml: 2, p: 1 }}>
              <Typography variant="h6">
                Регион / федеральный орган:{" "}
                <b>{`${regions_fo.selectedItem.p01}`}</b>
              </Typography>
              <Typography variant="body1">
                Код: <b>{mpe1gem.newModal.r1022_fk}</b>
              </Typography>
            </Container>
          </Paper>
          <Paper
            elevation={2}
            sx={{ mt: 2, bgcolor: "rgba(40,140,80,0.15)", color: "inherit" }}
          >
            <Grid
              container
              spacing={0.25}
              sx={{
                display: "flex",
                justifyContent: "center",
                pl: 1,
                pb: 2,
                width: "100%",
              }}
            >
              {columnDefs.map((item, index) => {
                return (
                  <Grid
                    key={`modalColumn${index}`}
                    item
                    xs={2.35}
                    sx={{ px: 0.25 }}
                  >
                    <Typography
                      sx={{ pl: 0.5, mt: 2 }}
                      variant="subtitle2"
                    >{`${item.headerName}:`}</Typography>
                    {item.children.map((i, idx) => {
                      return (
                        <TextField
                          error={!mpe1gem.validFields[i.field].status}
                          key={`modalInput${index}${idx}`}
                          size="small"
                          label={i.headerName}
                          sx={{ mt: 1, pb: 2, width: 180 }}
                          defaultValue={mpe1gem.newModal[i.field]}
                          helperText={mpe1gem.validFields[i.field].helperText}
                          onChange={(e) => {
                            if (
                              ValidateField(i.field, e.target.value) === true
                            ) {
                              mpe1gem.setValidField(i.field, true, "OK");
                              mpe1gem.setNewModalByField(
                                i.field,
                                e.target.value
                              );
                            } else {
                              mpe1gem.setValidField(
                                i.field,
                                false,
                                ValidateField(i.field, e.target.value)
                              );
                            }
                          }}
                        />
                      );
                    })}
                  </Grid>
                );
              })}
            </Grid>
          </Paper>

          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1, m: 1 }}>
            <Button
              size={"small"}
              sx={{ ml: 1, mt: 0.25, width: 100 }}
              variant="contained"
              disabled={disableSave(mpe1gem.validFields)}
              onClick={() => {
                mpe1gem.ModalProps.title === "Добавить"
                  ? addMpe1gem(mpe1gem.newModal).then((data) =>
                      console.log(data)
                    )
                  : updateMpe1gem(mpe1gem.newModal).then((data) =>
                      console.log(data)
                    );
                mpe1gem.setModalProps("active", false);
              }}
            >
              Сохранить
            </Button>
            <Button
              size={"small"}
              sx={{ ml: 1, mt: 0.25, width: 100 }}
              variant="contained"
              onClick={() => {
                mpe1gem.setModalProps("active", false);
              }}
            >
              Закрыть
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
});

export default ModalWindow;
