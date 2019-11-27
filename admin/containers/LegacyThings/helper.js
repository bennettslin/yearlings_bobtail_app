const
    PADDING_DASHBOARD = 10,
    HEIGHT_INPUT = 44

export const getHeightAspectRatio = ({
    viewBoxWidth,
    viewBoxHeight
}) => {
    const windowWidth = window.innerWidth,
        windowHeight =
            window.innerHeight - PADDING_DASHBOARD * 2 -

            // In mobile, account for height of two inputs.
            HEIGHT_INPUT * (window.innerWidth < 1000 ? 2 : 1),

        // Set height aspect ratio.
        heightAspectRatio =
            viewBoxWidth / viewBoxHeight <
            windowWidth / windowHeight

    return heightAspectRatio
}
