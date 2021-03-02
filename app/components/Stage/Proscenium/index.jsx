import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import InlineSvg from '../../../modules/InlineSvg'
import proscenium from '../../../../assets/svgs/theatre/proscenium'
import { mapProsceniumDimensionCoordinates } from '../../../redux/viewport/selector'
import './style'

const Proscenium = () => {
    const {
        prosceniumTop,
        prosceniumLeft,
        prosceniumWidth,
        prosceniumHeight,
    } = JSON.parse(useSelector(mapProsceniumDimensionCoordinates))

    return (
        <InlineSvg
            {...{
                className: cx(
                    'Proscenium',
                ),
                style: {
                    top: `${prosceniumTop}px`,
                    left: `${prosceniumLeft}px`,
                    width: `${prosceniumWidth}px`,
                    height: `${prosceniumHeight}px`,
                },
                svgClassName: cx(
                    'proscenium',
                    'fillTransition__dimTheatre',
                ),
            }}
        >
            {proscenium}
        </InlineSvg>
    )
}

export default Proscenium
