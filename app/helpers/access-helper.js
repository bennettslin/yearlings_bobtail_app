import { NAVIGATION_LEFT_KEY,
         NAVIGATION_RIGHT_KEY,
         NAVIGATION_UP_KEY,
         NAVIGATION_DOWN_KEY } from '../constants/access'

export const getDotDirectionToAccessHighlight = ({

    dotIndex,
    accessedDotIndex

}) => {
    let leftOfAccessHighlight,
        rightOfAccessHighlight,
        aboveAccessHighlight,
        belowAccessHighlight

    console.error('dotIndex, accessedDotIndex', dotIndex, accessedDotIndex)

    // TODO: Not coded as efficiently as they could be.

    if ((accessedDotIndex - dotIndex + 8) % 8 === 1) {
        leftOfAccessHighlight = true
    }

    if ((accessedDotIndex - dotIndex + 8) % 8 === 7) {
        rightOfAccessHighlight = true
    }

    if ((accessedDotIndex - dotIndex + 8) % 8 === 4) {
        if (accessedDotIndex < 4) {
            belowAccessHighlight = true
        } else {
            aboveAccessHighlight = true
        }
    }

    if ((accessedDotIndex - dotIndex + 8) % 8 === 3) {
        if (accessedDotIndex > 3) {
            belowAccessHighlight = true
        }
    }

    if ((accessedDotIndex - dotIndex + 8) % 8 === 5) {
        if (accessedDotIndex < 4) {
            aboveAccessHighlight = true
        }
    }

    console.error({
        leftOfAccessHighlight,
        rightOfAccessHighlight,
        aboveAccessHighlight,
        belowAccessHighlight
    })

    if (leftOfAccessHighlight) {
        return NAVIGATION_LEFT_KEY
    } else if (rightOfAccessHighlight) {
        return NAVIGATION_RIGHT_KEY
    } else if (aboveAccessHighlight) {
        return NAVIGATION_UP_KEY
    } else if (belowAccessHighlight) {
        return NAVIGATION_DOWN_KEY
    } else {
        return ''
    }
}
