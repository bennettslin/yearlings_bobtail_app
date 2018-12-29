import { DEVICE_OBJECTS } from '../../../constants/responsive'

export const resizeWindow = ({
    innerHeight,
    innerWidth
} = window) => {

    let deviceIndex = 0

    while (
        deviceIndex < DEVICE_OBJECTS.length - 1 &&
        innerWidth > DEVICE_OBJECTS[deviceIndex].maxWidth
    ) {
        deviceIndex++
    }

    return {
        deviceIndex,
        windowHeight: innerHeight,
        windowWidth: innerWidth
    }
}
