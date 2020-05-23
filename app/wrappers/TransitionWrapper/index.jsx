import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

class TransitionWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselEnter: PropTypes.bool.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
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
                         * all verse trackers.
                         */
                        canLyricCarouselEnter ?
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
    entranceStore: { canLyricCarouselEnter }
}) => ({
    canLyricCarouselEnter
})

export default connect(mapStateToProps)(TransitionWrapper)
