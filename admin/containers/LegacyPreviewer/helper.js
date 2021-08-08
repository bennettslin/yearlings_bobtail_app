import { getWindow } from '../../../src/utils/browser'

const
    PADDING_DASHBOARD = 10,
    HEIGHT_INPUT = 44

export const getHeightAspectRatio = ({
    viewBoxWidth,
    viewBoxHeight,
}) => {
    const windowWidth = getWindow().innerWidth,
        windowHeight =
            getWindow().innerHeight - PADDING_DASHBOARD * 2 -

            // In mobile, account for height of two inputs.
            HEIGHT_INPUT * (windowWidth < 1000 ? 2 : 1),

        // Set height aspect ratio.
        heightAspectRatio =
            viewBoxWidth / viewBoxHeight <
            windowWidth / windowHeight

    return heightAspectRatio
}
