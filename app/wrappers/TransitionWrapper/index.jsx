import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

class TransitionWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselUpdate: PropTypes.bool.isRequired,
        canLyricCarouselEnter: PropTypes.bool.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
            canLyricCarouselUpdate,
            canLyricCarouselEnter,
            children
        } = this.props

        return (
            <div
                {...{
                    className: cx(
                        'TransitionWrapper',

                        /**
                         * When transitioning between songs, explicitly reset
                         * all verse trackers. Based on the earliest possible
                         * flag in the transition. Not sure if this is optimal,
                         * though.
                         */
                        canLyricCarouselUpdate ?
                            'TrW__canTrackVerse' :
                            'TrW__cannotTrackVerse',

                        canLyricCarouselEnter ?
                            'TrW__canLyricCarouselEnter' :
                            'TrW__cannotLyricCarouselEnter'
                    )
                }}
            >
                {children}
            </div>
        )
    }
}

const mapStateToProps = ({
    lyricStore: {
        canLyricCarouselUpdate,
        canLyricCarouselEnter
    }
}) => ({
    canLyricCarouselUpdate,
    canLyricCarouselEnter
})

export default connect(mapStateToProps)(TransitionWrapper)
