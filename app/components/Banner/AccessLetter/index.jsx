import React, { PureComponent } from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AccessLetter from '../../Access/Letter'

const mapStateToProps = ({
    lyricStore: { isLyricLogue }
}) => ({
    isLyricLogue
})

class BannerAccessLetter extends PureComponent {

    static propTypes = {
        // Through Redux.
        isLyricLogue: PropTypes.bool.isRequired,

        // From parent.
        accessKey: PropTypes.string.isRequired
    }

    render() {
        const {
            isLyricLogue,
            accessKey
        } = this.props

        return (
            <div
                {...{
                    // Outer wrapper is necessary for proper transition.
                    className: cx(
                        'BannerAccessLetter',
                        `BannerAccessLetter__${accessKey}`,
                    )
                }}
            >
                <AccessLetter
                    animateStandaloneOnKeyDown
                    {...{
                        showIfAccessOn: !isLyricLogue,
                        accessKey
                    }}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(BannerAccessLetter)
