import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import InlineSvg from '../../../modules/InlineSvg'
import dramaMasks from '../../../../assets/svgs/theatre/dramaMasks'
import {
    mapProsceniumTop,
    mapProsceniumLeft,
    mapProsceniumWidth,
    mapProsceniumHeight
} from '../../../redux/proscenium/selectors'
import './style'

const DramaMasks = () => {
    const
        prosceniumTop = useSelector(mapProsceniumTop),
        prosceniumLeft = useSelector(mapProsceniumLeft),
        prosceniumWidth = useSelector(mapProsceniumWidth),
        prosceniumHeight = useSelector(mapProsceniumHeight)

    return (
        <InlineSvg
            {...{
                className: cx(
                    'DramaMasks'
                ),
                style: {
                    top: `${prosceniumTop + prosceniumHeight * 0.0025}px`,
                    left: `${prosceniumLeft + prosceniumWidth * 0.5}px`,
                    width: `${prosceniumWidth * 0.125}px`,
                    height: `${prosceniumHeight * 0.1}px`
                },
                svgClassName: cx(
                    'dramaMasks',
                    'fillTransition__dimTheatre'
                )
            }}
        >
            {dramaMasks}
        </InlineSvg>
    )
}

export default DramaMasks
