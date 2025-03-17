import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // گرد کردن دکمه‌ها
          textTransform: 'none', // حذف حروف بزرگ پیش‌فرض
          padding: '10px 20px', // تنظیم اندازه دکمه
          fontWeight: 'bold',
        },
        containedPrimary: {
          backgroundColor: '#ff5722', // تغییر رنگ دکمه primary
          '&:hover': {
            backgroundColor: '#e64a19',
          },
        },
        containedSecondary: {
          backgroundColor: '#4caf50', // تغییر رنگ دکمه secondary
          '&:hover': {
            backgroundColor: '#388e3c',
          },
        },
      },
    },
  },
});

export default theme;
