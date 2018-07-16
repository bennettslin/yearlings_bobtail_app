export const getCursorStatusClassName = ({
    isOnCursor,
    isAfterCursor
}) => {

    if (isOnCursor) {
        return 'onCursor'

    } else if (isAfterCursor) {
        return 'afterCursor'

    } else {
        return 'beforeCursor'
    }
}
