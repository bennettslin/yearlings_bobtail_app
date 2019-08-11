import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InlineSvg from 'modules/InlineSvg'
import wallBalcony from 'assets/svgs/theatre/wallBalcony'

const propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

const WallBalcony = ({
    top,
    left,
    width,
    height

}) => (
    <div
        {...{
            className: cx(
                'WallBalcony',
                'abF'
            ),
            style: {
                top: `${top}px`,
                left: `${left}px`,
                width: `${width}px`,
                height: `${height}px`
            }
        }}
    >
        <InlineSvg
            {...{
                className: cx(
                    'fillTransition__dimTheatre'
                ),
                title: 'wall balcony'
            }}
        >
            {wallBalcony}
        </InlineSvg>
    </div>
)

WallBalcony.propTypes = propTypes

export default memo(WallBalcony)
