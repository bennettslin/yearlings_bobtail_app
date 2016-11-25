import { PHONE_WIDTH,
         MINI_WIDTH,
         TABLET_WIDTH,
         LAPTOP_WIDTH,
         MONITOR_WIDTH } from 'helpers/constants'

export const resizeWindow = (target, isAdmin) => {

    const { innerWidth } = target,
        newState = {
            windowHeight: target.innerHeight,
            windowWidth: target.innerWidth
        }

    let deviceWidth

    // TODO: Make sure these are right.
    if (innerWidth <= 500) {
        deviceWidth = PHONE_WIDTH
    } else if (innerWidth <= 720) {
        deviceWidth = MINI_WIDTH
    } else if (innerWidth <= 900) {
        deviceWidth = TABLET_WIDTH
    } else if (innerWidth <= 1400) {
        deviceWidth = LAPTOP_WIDTH
    } else {
        deviceWidth = MONITOR_WIDTH
    }

    newState.deviceWidth = deviceWidth

    return newState
}
