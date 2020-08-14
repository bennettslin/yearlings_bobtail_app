// Basic helpers that only know math and pure JavaScript.

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_flatten
export const flatten = array => (
    [].concat(...array)
)

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_isString
export const isString = (string) => (
    Boolean(string) && typeof string.valueOf() === 'string'
)

export const getArrayOfLength = (
    length,
    indexBase = 0
) => (
    Array.from(
        { length },
        (nothing, i) => i + indexBase
    )
)
