// Section to show credits and anchor for band website.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

const mapStateToProps = ({
    mobileStore: {
        isDesktopProcessor,
        isTouchSupported,
        isWheelSupported
    }
}) => ({
    isDesktopProcessor,
    isTouchSupported,
    isWheelSupported
})

const About = memo(({
    isDesktopProcessor,
    isTouchSupported,
    isWheelSupported
}) => (
    <div className={cx(
        'About',
        'fontSize__verse'
    )}>
        <p>
            Album written, performed, and recorded by Bennett Lin.
        </p>
        <p>
            Website designed, illustrated, and coded by Bennett Lin.
        </p>
        {/* TODO: Eventually delete this, of course. */}
        <p>
            isDesktopProcessor: {isDesktopProcessor ? 'true' : 'false'}
        </p>
        <p>
            isTouchSupported: {isTouchSupported ? 'true' : 'false'}
        </p>
        <p>
            isWheelSupported: {isWheelSupported ? 'true' : 'false'}
        </p>
    </div>
))

About.propTypes = {
    isDesktopProcessor: PropTypes.bool.isRequired,
    isTouchSupported: PropTypes.bool.isRequired,
    isWheelSupported: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(About)
