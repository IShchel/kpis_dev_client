import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { ValidateField } from "./modalwindow";

const buttons = [
  {
    title: "Добавить",
  },
  {
    title: "Изменить",
  },
  {
    title: "Сохранить",
  },
  {
    title: "Загрузить",
  },
  {
    title: "Печать",
  },
];

export const ControlButtons = observer(() => {
  const { regions_fo, mpe1gem } = useContext(Context);

  function disableButton(idx) {
    if (mpe1gem.mpe1gemList.length === 0) {
      if ([0, 3].includes(idx) && regions_fo.selectedItem.p00 !== "") {
        return false;
      }
      return true;
    }

    if (idx === 1) {
      if (mpe1gem.mpe1gemList.length > 0) {
        if (mpe1gem.newModal.id !== 0 && mpe1gem.selectedRow.id !== undefined) {
          return false;
        } else {
          return true;
        }
      } else {
        if (regions_fo.selectedItem.p00 !== "") {
          return false;
        }
      }
    }
  }

  return buttons.map((item, index) => {
    return (
      <Button
        sx={{ mr: 1, mt: 0.25, width: 120 }}
        key={`mpe1gem_ctl_${index}`}
        variant="contained"
        disabled={disableButton(index)}
        onClick={() => {
          if (index < 2) {
            mpe1gem.resetNewModal();
            mpe1gem.resetValidFields();
            if (index === 0) {
              mpe1gem.setNewModalByField(
                "r1022_fk",
                regions_fo.selectedItem.p00
              );
            } else {
              for (let field in mpe1gem.newModal) {
                mpe1gem.setNewModalByField(field, mpe1gem.selectedRow[field]);
                if (!["id", "npp", "r1022_fk"].includes(field)) {
                  if (ValidateField(field, mpe1gem.newModal[field]) === true) {
                    mpe1gem.setValidField(field, true, "OK");
                    mpe1gem.setNewModalByField(field, mpe1gem.newModal[field]);
                  } else {
                    mpe1gem.setValidField(
                      field,
                      false,
                      ValidateField(field, mpe1gem.newModal[field])
                    );
                  }
                }
              }
            }
            mpe1gem.setModalProps("active", true);
            mpe1gem.setModalProps("title", item.title);
          }
        }}
      >
        {item.title}
      </Button>
    );
  });
});
