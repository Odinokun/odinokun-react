export const components = {
  MuiContainer: {
    styleOverrides: {
      root: {
        maxWidth: '1400px',
        paddingLeft: '20px',
        paddingRight: '20px',

        '@media (min-width:768px)': {
          paddingLeft: '50px ',
          paddingRight: '50px',
        }
      }
    }
  }
}