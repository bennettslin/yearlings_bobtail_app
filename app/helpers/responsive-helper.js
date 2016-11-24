import { PHONE_WIDTH,
         TABLET_WIDTH,
         LAPTOP_WIDTH,
         MONITOR_WIDTH } from 'helpers/constants'

export const resizeWindow = (target, isAdmin) => {

    const { innerWidth } = target,
        newState = {
            windowHeight: target.innerHeight,
            windowWidth: target.innerWidth
        }

    let deviceWidth,
        showSingleLyricColumn = true

    // TODO: Make sure these are right.
    if (innerWidth <= 400) {
        deviceWidth = PHONE_WIDTH
    } else if (innerWidth <= 800) {
        deviceWidth = TABLET_WIDTH
    } else if (innerWidth <= 1400) {
        deviceWidth = LAPTOP_WIDTH
    } else {
        deviceWidth = MONITOR_WIDTH
        showSingleLyricColumn = false
    }

    newState.deviceWidth = deviceWidth

    // Admin page has option to set single lyric column directly.
    if (!isAdmin) {
        newState.showSingleLyricColumn = showSingleLyricColumn
    }

    return newState
}
