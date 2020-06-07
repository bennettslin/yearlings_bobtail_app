// Basic helpers that only know math and pure JavaScript.

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_flatten
export const flatten = array => (
    [].concat(...array)
)

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_isString
export const isString = (string) => (
    string && typeof string.valueOf() === "string"
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

// TODO: Get rid of this. Just used by Button now.
export const getPropsAreShallowEqual = ({
    props = {},
    nextProps = {}
}) => {
    for (const key in props) {

        const typeOfProp = typeof props[key]

        // Exclude functions, objects, and arrays.
        if (typeOfProp !== 'function' && typeOfProp !== 'object') {

            // If there is a single mismatch, return false.
            if (props[key] !== nextProps[key]) {
                return false
            }
        }
    }

    return true
}
