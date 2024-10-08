import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

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
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '8px' }}>
        요약 정보
      </Typography>
      <Divider />
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#555' }}>
            {item.label}:
          </Typography>
          <Typography variant="body1">
            {item.renderValue ? item.renderValue(item.value) : item.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default AFooter;
