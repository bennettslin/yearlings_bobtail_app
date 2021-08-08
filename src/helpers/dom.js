// Helpers for DOM stuff.

export const getClientX = ({ nativeEvent: { touches, clientX } }) => {

    // If mouse, clientX is in native event. If touch, it's in first touch.
    return touches ? touches[0].clientX : clientX
}

export const getElementRatioForClientX = ({
    clientX,
    elementLeft,
    elementWidth,

}) => {
    const elementX = clientX - elementLeft,
        ratio = elementX / elementWidth

    if (ratio < 0) {
        return 0
    } else if (ratio > 1) {
        return 1
    } else {
        return ratio
    }
}
