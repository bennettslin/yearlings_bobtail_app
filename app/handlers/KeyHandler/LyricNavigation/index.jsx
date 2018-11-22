import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ENTER
} from 'constants/access'

class LyricNavigation extends Component {

    static propTypes = {
        // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,

        // From parent.
        getTryNavigateLyric: PropTypes.func.isRequired,
        handleLyricAnnotationSelect: PropTypes.func.isRequired,
        handleAnnotationAccess: PropTypes.func.isRequired,
        handleVerseInteractivate: PropTypes.func.isRequired,
        determineVerseBarsWithParameters: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getTryNavigateLyric(this.tryNavigateLyric)
    }

    tryNavigateLyric = (e, keyName) => {
        const { props } = this,
            {
                interactivatedVerseIndex,
                accessedAnnotationIndex,
                handleLyricAnnotationSelect,
                handleAnnotationAccess,
                handleVerseInteractivate,
                determineVerseBarsWithParameters
            } = props,

            isVerseInteractivated = interactivatedVerseIndex > -1

        let direction

        switch (keyName) {
            case ARROW_LEFT:
                direction = -1
                break
            case ARROW_RIGHT:
                direction = 1
                break
            case ENTER:
                return handleLyricAnnotationSelect(
                    e, accessedAnnotationIndex
                )
            default:
                return false
        }

        /**
         * If this key will turn on access, choose annotation based on selected
         * verse.
         */
        if (
            !props.isAccessOn ||
            isVerseInteractivated
        ) {
            const
                verseIndex = isVerseInteractivated ?
                    interactivatedVerseIndex :
                    props.selectedVerseIndex

            handleAnnotationAccess({
                verseIndex,
                direction,
                doScroll: true
            })

            if (isVerseInteractivated) {
                handleVerseInteractivate()
            }

        } else {
            handleAnnotationAccess({
                annotationIndex: accessedAnnotationIndex,
                direction,
                doScroll: true
            })
        }

        // Accessing annotation might scroll lyric.
        if (keyName === ARROW_LEFT || keyName === ARROW_RIGHT) {
            determineVerseBarsWithParameters()
        }

        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isAccessOn },
    accessedAnnotationIndex,
    interactivatedVerseIndex,
    songStore: { selectedVerseIndex }
}) => ({
    isAccessOn,
    accessedAnnotationIndex,
    interactivatedVerseIndex,
    selectedVerseIndex
})

export default connect(mapStateToProps)(LyricNavigation)
