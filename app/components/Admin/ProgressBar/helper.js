export const getBarWidthStyle = (numerator, denominator) => {
    return (numerator / (denominator || 0.01) * 100) + '%'
}
