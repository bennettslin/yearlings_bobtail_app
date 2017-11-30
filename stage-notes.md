Value to multiply by to get the next width and height.
1.069913193933663

Floor panel heights.
0.8389583272039552,
0.8976125834360269,
0.9603675460590861,
1.0275099085543111,
1.099346408059829,
1.1762052266867917

Floor panel widths.
2,
2.139826387867326,
2.289428485106664,
2.4494897427831788,
2.6207413942088973,
2.803965795552202,
3.000000000000001

const value = 1.069913193933663

const divider = (value * value * value * value * value) +
                (value * value * value * value) +
                (value * value * value) +
                (value * value) +
                (value) +
                1

const number = 6 / divider

console.error(
    number,
    number * value,
    number * value * value,
    number * value * value * value,
    number * value * value * value * value,
    number * value * value * value * value * value,
    number * value * value * value * value * value * value
)