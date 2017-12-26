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

// Check if at least one present key is selected.
export const getNavDirectionToAccessHighlight = ({

    bookIndex,
    songIndex,
    accessedNavSongIndex,
    showSingleBookColumn

}) => {
    let leftOfAccessHighlight,
        rightOfAccessHighlight

    // TODO: Not coded as efficiently as they could be.

    // Called by book button, only if there is a single book column.
    if (!isNaN(bookIndex)) {

        leftOfAccessHighlight =
            bookIndex === 0 && accessedNavSongIndex === 10 ||
            bookIndex === 1 && accessedNavSongIndex === 0

        rightOfAccessHighlight =
            bookIndex === 1 && accessedNavSongIndex === 9 ||
            bookIndex === 0 && accessedNavSongIndex === 19

    // Called by logue or song button.
    } else if (!isNaN(songIndex)) {

        if (
            songIndex === accessedNavSongIndex - 1 && (
                (showSingleBookColumn && songIndex !== 9) ||
                !showSingleBookColumn
            )
        ) {
            leftOfAccessHighlight = true

        } else if (
            songIndex === accessedNavSongIndex + 1 && (
                (showSingleBookColumn && songIndex !== 10) ||
                !showSingleBookColumn
            )
        ) {
            rightOfAccessHighlight = true
        }

        if (!showSingleBookColumn) {
            if (songIndex === 19 && accessedNavSongIndex === 0) {
                leftOfAccessHighlight = true
            }

            if (songIndex === 0 && accessedNavSongIndex === 19) {
                rightOfAccessHighlight = true
            }
        }
    }

    if (leftOfAccessHighlight) {
        return NAVIGATION_LEFT_KEY
    } else if (rightOfAccessHighlight) {
        return NAVIGATION_RIGHT_KEY
    } else {
        return ''
    }
}
