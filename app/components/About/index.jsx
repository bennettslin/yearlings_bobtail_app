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
    viewportStore: { windowHeight }
}) => ({
    isHigherProcessor,
    isTouchSupported,
    windowHeight
})

const About = memo(({
    isHigherProcessor,
    isTouchSupported,
    windowHeight

}) => {

    const actualWindowHeight = window.innerHeight

    return (
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
                {`windowHeight (stored, actual): ${windowHeight}, ${actualWindowHeight}`}
            </p>
        </div>
    )
})

About.propTypes = {
    isHigherProcessor: PropTypes.bool.isRequired,
    isTouchSupported: PropTypes.bool.isRequired,
    windowHeight: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(About)
