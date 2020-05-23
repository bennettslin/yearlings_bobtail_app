const PROSCENIUM_MULTIPLIER = 0.054

export const getProsceniumDimensionCoordinates = ({
    stageTop,
    stageLeft,
    stageWidth,
    stageHeight

}) => {
    const
        widthOffset = PROSCENIUM_MULTIPLIER * stageWidth,
        heightOffset = PROSCENIUM_MULTIPLIER * stageHeight,

        top = stageTop - heightOffset,
        left = stageLeft - widthOffset,
        width = stageWidth + widthOffset * 2,
        height = stageHeight + heightOffset * 2

    return {
        prosceniumTop: Number(top.toFixed(2)),
        prosceniumLeft: Number(left.toFixed(2)),
        prosceniumWidth: Number(width.toFixed(2)),
        prosceniumHeight: Number(height.toFixed(2))
    }
}
