// Section to show credits and anchor for band website.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

const mapStateToProps = ({
    appStore: {
        isHigherProcessor,
        isTouchSupported
    },
    viewportStore: {
        rootContainerHeight,
        windowHeight
    }
}) => ({
    isHigherProcessor,
    isTouchSupported,
    rootContainerHeight,
    windowHeight
})

const About = memo(({
    isHigherProcessor,
    isTouchSupported,
    rootContainerHeight,
    windowHeight

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
            isHigherProcessor: {isHigherProcessor ? 'true' : 'false'}
        </p>
        <p>
            isTouchSupported: {isTouchSupported ? 'true' : 'false'}
        </p>
        <p>
            rootContainerHeight: {rootContainerHeight}
        </p>
        <p>
            windowHeight: {windowHeight}
        </p>
    </div>
))

About.propTypes = {
    isHigherProcessor: PropTypes.bool.isRequired,
    isTouchSupported: PropTypes.bool.isRequired,
    rootContainerHeight: PropTypes.number.isRequired,
    windowHeight: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(About)
