import { useState } from "react";

export function useProductsHandlers() {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleEditChange = () => {
    setOpenEdit(!openEdit);
  };

  const handleDeleteChange = () => {
    setOpenDelete(!openDelete);
  };

  return {
    open: {
      edit: openEdit,
      delete: openDelete,
    },
    onChange: {
      edit: handleEditChange,
      delete: handleDeleteChange,
    },
  };
}
