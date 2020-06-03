import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import InlineSvg from '../../../modules/InlineSvg'
import proscenium from '../../../../assets/svgs/theatre/proscenium'
import {
    mapProsceniumTop,
    mapProsceniumLeft,
    mapProsceniumWidth,
    mapProsceniumHeight
} from '../../../redux/proscenium/selectors'
import './style'

const Proscenium = () => {
    const
        prosceniumTop = useSelector(mapProsceniumTop),
        prosceniumLeft = useSelector(mapProsceniumLeft),
        prosceniumWidth = useSelector(mapProsceniumWidth),
        prosceniumHeight = useSelector(mapProsceniumHeight)

    return (
        <InlineSvg
            {...{
                className: cx(
                    'Proscenium'
                ),
                style: {
                    top: `${prosceniumTop}px`,
                    left: `${prosceniumLeft}px`,
                    width: `${prosceniumWidth}px`,
                    height: `${prosceniumHeight}px`
                },
                svgClassName: cx(
                    'proscenium',
                    'fillTransition__dimTheatre'
                )
            }}
        >
            {proscenium}
        </InlineSvg>
    )
}

export default Proscenium
