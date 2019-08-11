import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InlineSvg from 'modules/InlineSvg'
import ceilingRafter from 'assets/svgs/backdrops/mountainBackdrop'

const propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

const CeilingRafter = ({
    top,
    left,
    width,
    height

}) => (
    <div
        {...{
            className: cx(
                'CeilingRafter',
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
                title: 'ceiling rafter'
            }}
        >
            {ceilingRafter}
        </InlineSvg>
    </div>
)

CeilingRafter.propTypes = propTypes

export default memo(CeilingRafter)
