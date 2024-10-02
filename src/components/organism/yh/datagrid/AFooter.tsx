import React from 'react';
import { Box, Typography } from '@mui/material';

export type FooterItem = {
  label: string;
  value: string | number | boolean;
  renderValue?: (value: string | number | boolean) => React.ReactNode;
};

type AFooterProps = {
  data: FooterItem[];
};

const AFooter = ({ data }: AFooterProps) => {
  return (
    <Box
      sx={{
        padding: '20px',

        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px', // 아이템 간 간격
        width: '150px',
      }}
    >
      {data.map((item, index) => (
        <Box key={index}>
          <Typography>
            <strong>{item.label}:</strong>{' '}
            {item.renderValue ? item.renderValue(item.value) : item.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default AFooter;
