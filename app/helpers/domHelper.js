// Helpers for DOM stuff.

export const getClientX = (e) => {
    const { nativeEvent } = e,
        {
            touches,
            clientX
        } = nativeEvent

    // If mouse, clientX is in native event. If touch, it's in first touch.
    return touches ? touches[0].clientX : clientX
}
