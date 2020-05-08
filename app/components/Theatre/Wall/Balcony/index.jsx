import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InlineSvg from 'modules/InlineSvg'
import wallBalcony from '../../../../../assets/svgs/theatre/wallBalcony'

const propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    isLeft: PropTypes.bool.isRequired
}

const WallBalcony = ({
    top,
    left,
    width,
    height,
    isLeft

}) => (
    <InlineSvg
        {...{
            className: cx(
                'WallBalcony'
            ),
            style: {
                top: `${top}px`,
                left: `${left}px`,
                width: `${width}px`,
                height: `${height}px`
            },
            svgClassName: cx(
                'wallBalcony',
                isLeft && 'wallBalcony__left',
                'fillTransition__dimTheatre'
            )
        }}
    >
        {wallBalcony}
    </InlineSvg>
)

WallBalcony.propTypes = propTypes

export default memo(WallBalcony)
