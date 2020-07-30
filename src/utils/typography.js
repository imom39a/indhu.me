import Typography from "typography"
// import theme from "typography-theme-wordpress-2013"

// const typography = new Typography(theme)

// export const { scale, rhythm, options } = typography

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Delius'],
    bodyFontFamily: ['Delius', 'cursive'],
    // See below for the full list of options.
  })
  
export default typography