import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

class SongWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        isLyricLogue: PropTypes.bool.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
            isLyricLogue,
            isPlaying,
            children
        } = this.props

        return (
            <div
                {...{
                    className: cx(
                        'SongWrapper',

                        isLyricLogue ? 'SM__logue' : 'SM__song',
                        isPlaying ? 'SM__isPlaying' : 'SM__isPaused'
                    )
                }}
            >
                {children}
            </div>
        )
    }
}

const mapStateToProps = ({
    audioStore: { isPlaying },
    lyricStore: { isLyricLogue }
}) => ({
    isPlaying,
    isLyricLogue
})

export default connect(mapStateToProps)(SongWrapper)
