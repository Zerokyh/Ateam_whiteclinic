// ADataGrid.tsx
import React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';

type ADataGridProps = {
  rows: any[];
  columns: GridColDef[];
  title?: string;
  height?: number | string;
  width?: number | string;
};

const ADataGrid = ({ rows, columns, title, height = 400, width = '100%' }: ADataGridProps) => {
  return (
    <Box sx={{ height, width }}>
      {<h2>{title}</h2>}
      <DataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        slots={{
          toolbar: GridToolbar,
        }}
        hideFooterPagination
      />
    </Box>
  );
};

export default ADataGrid;
