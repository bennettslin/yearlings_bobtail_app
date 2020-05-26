import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AccessLetters from '../../Access/Letters'

import {
    ARROW_UP,
    ARROW_DOWN
} from '../../../constants/access'

const mapStateToProps = ({
    lyricStore: { lyricAnnotationIndex },
    toggleStore: { isDotsSlideShown }
}) => {
    return {
        lyricAnnotationIndex,
        isDotsSlideShown
    }
}

class LyricAccess extends PureComponent {

    static propTypes = {

        // From Redux.
        lyricAnnotationIndex: PropTypes.number.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired
    }

    render() {

        const {
                lyricAnnotationIndex,
                isDotsSlideShown
            } = this.props,

            showIfAccessOn = Boolean(
                !isDotsSlideShown &&
                !lyricAnnotationIndex
            )

        return (
            <AccessLetters
                {...{
                    accessIconsName: 'lyric',
                    className: 'top__lyricChild',
                    showIfAccessOn,
                    accessKeys: [
                        ARROW_UP,
                        ARROW_DOWN
                    ]
                }}
            />
        )
    }
}

export default connect(mapStateToProps)(LyricAccess)
