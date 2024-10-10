import { Box, CardContent } from '@mui/material';
import AText from '../../atom/Text/AText';
import { colors } from '@/styles/colors';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';

type ACardProps = {
  name: string;
  tel: string;
  address: string;
  available?: string;
  remark?: string;
  onClick: () => void;
};

const ACard = ({ name, tel, address, onClick }: ACardProps) => {
  return (
    <>
      <CardContent
        onClick={onClick}
        sx={{
          // border: '1px solid black',
          width: '200px',
          height: 'auto',
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: colors.background.drawer,
            color: 'white',
          },
          backgroundColor: 'white',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <PersonIcon />
          <AText text={name} />
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <PhoneIcon />
          <AText text={tel} />
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <HomeIcon />
          <AText text={address} />
        </Box>
      </CardContent>
    </>
  );
};

export default ACard;
