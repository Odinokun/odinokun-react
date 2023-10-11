export const components = {
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: '20px',
        paddingRight: '20px',
        
        '@media (min-width:768px)': {
          maxWidth: '1600px',
          paddingLeft: '50px ',
          paddingRight: '50px',
        },
      },
    },
  },
};