import { PHONE_WIDTH_OBJECT,
         MINI_WIDTH_OBJECT,
         TABLET_WIDTH_OBJECT,
         LAPTOP_WIDTH_OBJECT,
         MONITOR_WIDTH_OBJECT,
         DEVICE_WIDTH_OBJECTS } from 'helpers/constants'

export const resizeWindow = (target = window, presentWidth) => {

    const newState = {
            windowHeight: target.innerHeight        }

    let deviceWidth,
        innerWidth = target.innerWidth,
        index = 0

    if (!presentWidth) {
        while (index < DEVICE_WIDTH_OBJECTS.length - 1 && innerWidth > DEVICE_WIDTH_OBJECTS[index].maxWidth) {
            index++
        }

        deviceWidth = DEVICE_WIDTH_OBJECTS[index].className

    // Called from admin toggle.
    } else {
        let nextDeviceObject

        while (index < DEVICE_WIDTH_OBJECTS.length && !deviceWidth) {
            if (presentWidth === DEVICE_WIDTH_OBJECTS[index].className) {
                index = index

                nextDeviceObject = DEVICE_WIDTH_OBJECTS[(index + 1) % DEVICE_WIDTH_OBJECTS.length]

                deviceWidth = nextDeviceObject.className

                /**
                 * Show max width as inner width, arbitrary big number for monitor
                 * width.
                 */
                innerWidth = nextDeviceObject.maxWidth || 5000

            } else {
                index++
            }
        }
    }

    newState.deviceWidth = deviceWidth
    newState.windowWidth = innerWidth

    return newState
}
