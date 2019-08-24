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

// eslint-disable-next-line no-empty-pattern
const About = ({
    // isHigherProcessor,
    // isTouchSupported,
    // windowHeight

}) => {

    // const actualWindowHeight = window.innerHeight

    return (
        <div className={cx(
            'About',
            'fontSize__verse'
        )}>
            <p>
                Album written, arranged, and performed by Bennett Lin.
            </p>
            <p>
                Website annotated, illustrated, and coded by Bennett Lin.
            </p>
            {/* TODO: Eventually delete this, of course. */}
            {/* <p>
                isHigherProcessor: {isHigherProcessor ? 'true' : 'false'}
            </p> */}
            {/* <p>
                isTouchSupported: {isTouchSupported ? 'true' : 'false'}
            </p> */}
            {/* <p>
                {`windowHeight (stored, actual): ${windowHeight}, ${actualWindowHeight}`}
            </p> */}
        </div>
    )
}

About.propTypes = {
    isHigherProcessor: PropTypes.bool.isRequired,
    isTouchSupported: PropTypes.bool.isRequired,
    windowHeight: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(memo(About))
