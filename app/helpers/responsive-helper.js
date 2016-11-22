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
        isSingleLyricColumn = true

    // TODO: Make sure these are right.
    if (innerWidth <= 320) {
        deviceWidth = PHONE_WIDTH
    } else if (innerWidth <= 720) {
        deviceWidth = TABLET_WIDTH
    } else if (innerWidth <= 1200) {
        deviceWidth = LAPTOP_WIDTH
    } else {
        deviceWidth = MONITOR_WIDTH
        isSingleLyricColumn = false
    }

    newState.deviceWidth = deviceWidth

    // Admin page has option to set single lyric column directly.
    if (!isAdmin) {
        newState.isSingleLyricColumn = isSingleLyricColumn
    }

    return newState
}
