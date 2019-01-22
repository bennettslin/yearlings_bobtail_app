import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AccessLetters from '../../Access/Letters'

import {
    ARROW_LEFT,
    ARROW_RIGHT
} from 'constants/access'

const mapStateToProps = ({
    lyricStore: { lyricAnnotationIndex },
    toggleStore: {
        isNavShown,
        isDotsSlideShown,
        isLyricExpanded
    },
    dotsStore: { dotsBitNumber }
}) => ({
    isLyricExpanded,
    lyricAnnotationIndex,
    isNavShown,
    isDotsSlideShown,
    dotsBitNumber
})

class CarouselAccess extends PureComponent {

    static propTypes = {

        // From Redux.
        lyricAnnotationIndex: PropTypes.number.isRequired,
        isNavShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        dotsBitNumber: PropTypes.number.isRequired
    }

    render() {

        const {
                isLyricExpanded,
                lyricAnnotationIndex,
                isNavShown,
                isDotsSlideShown,
                dotsBitNumber
            } = this.props,

            showIfAccessOn = Boolean(
                /**
                 * Must have at least one selected dot, and no selected
                 * annotation.
                 */
                dotsBitNumber && !lyricAnnotationIndex && (
                    (
                        // Must not show nav or have dots section open...
                        !isNavShown &&
                        !isDotsSlideShown
                    ) || (
                        // ... or else have lyric expanded.
                        isLyricExpanded
                    )
                )
            )

        return (
            <AccessLetters
                {...{
                    accessIconsName: 'carousel',
                    showIfAccessOn,
                    accessKeys: [
                        ARROW_LEFT,
                        ARROW_RIGHT
                    ]
                }}
            />
        )
    }
}

export default connect(mapStateToProps)(CarouselAccess)
