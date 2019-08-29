const DESKTOP_WIDTH = 67.875; //  1086px
const DESKTOP_PADDING = 1.8125; // 29px

const awesomegrid = {
  container: {
    xs: 'full',
    sm: 'full',
    md: DESKTOP_WIDTH,
    lg: DESKTOP_WIDTH,
    xl: DESKTOP_WIDTH,
  },
  breakpoints: {
    xs: 1,
    sm: 48,
    md: DESKTOP_WIDTH,
    lg: 90,
    xl: 120,
  },
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: DESKTOP_PADDING,
    lg: DESKTOP_PADDING,
    xl: DESKTOP_PADDING,
  },
  columns: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 12,
    xl: 12,
  },
};

export const theme = {
  awesomegrid,
};
