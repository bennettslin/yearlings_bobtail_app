import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './style.scss'

const PreviewerKilobytes = ({
    kilobytes,
    hideInMobile,
    className

}) => Boolean(kilobytes) && (
    <div
        {...{
            className: cx(
                'PreviewerKilobytes',
                hideInMobile && 'PreviewerKilobytes__hideInMobile',
                'flexCentreContainer',
                className
            )
        }}
    >
        {kilobytes.toFixed(2)} kiB
    </div>
)

PreviewerKilobytes.propTypes = {
    kilobytes: PropTypes.number,
    hideInMobile: PropTypes.bool,
    className: PropTypes.string
}

export default PreviewerKilobytes
