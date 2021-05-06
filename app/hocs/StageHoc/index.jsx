import React from 'react'
import { useSelector } from 'react-redux'
import { mapStageDimensionCoordinates } from '../../redux/viewport/selector'

const getStageHoc = StageComponent => (
    () => {
        const {
            stageTop,
            stageLeft,
            stageWidth,
            stageHeight,
        } = JSON.parse(useSelector(mapStageDimensionCoordinates))

        return (
            <StageComponent
                {...{
                    style: {
                        top: `${stageTop}px`,
                        left: `${stageLeft}px`,
                        width: `${stageWidth}px`,
                        height: `${stageHeight}px`,
                    },
                }}
            />
        )
    }
)

export default getStageHoc
