import { Box } from '@mui/material';
import { ReactNode } from 'react';

type CenterLayoutProps = {
  children: ReactNode;
};

const CenteredLayout = ({ children }: CenterLayoutProps) => {
  return (
    <Box
      sx={{
        // height: 'calc(100vh - 112px)',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
};

export default CenteredLayout;
