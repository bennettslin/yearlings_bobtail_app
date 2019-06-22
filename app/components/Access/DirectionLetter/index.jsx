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

class AccessDirectionLetter extends PureComponent {

    static propTypes = {
        // Through Redux.
        isLyricLogue: PropTypes.bool.isRequired,

        // From parent.
        accessKey: PropTypes.string.isRequired,
        alignTop: PropTypes.bool,
        isNext: PropTypes.bool
    }

    render() {
        const {
            isLyricLogue,
            accessKey,
            alignTop,
            isNext
        } = this.props

        return (
            <div
                {...{
                    // Outer wrapper is necessary for proper transition.
                    className: cx(
                        'AccessDirectionLetter',
                        alignTop && 'AccessDirectionLetter__alignTop',
                        `AccessDirectionLetter__${isNext ? 'next' : 'previous'}`
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

export default connect(mapStateToProps)(AccessDirectionLetter)
