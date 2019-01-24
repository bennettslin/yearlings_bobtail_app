// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from 'flux/access/action'

const mapStateToProps = ({
    accessStore: { isAccessOn },
    toggleStore: {
        isNavShown,
        isDotsSlideShown,
        isLyricExpanded
    },
    lyricStore: { lyricAnnotationIndex },
    sessionStore: { interactivatedVerseIndex }
}) => ({
    isAccessOn,
    isNavShown,
    isDotsSlideShown,
    isLyricExpanded,
    lyricAnnotationIndex,
    interactivatedVerseIndex
})

class AccessListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        isNavShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this._checkAccessedIndexedAnchorShown()
    }

    componentDidUpdate() {
        this._checkAccessedIndexedAnchorShown()
    }

    _checkAccessedIndexedAnchorShown = () => {
        const {
                isAccessOn,
                isDotsSlideShown,
                isNavShown,
                isLyricExpanded,
                lyricAnnotationIndex,
                interactivatedVerseIndex
            } = this.props,

            isAccessedIndexedAnchorShown = Boolean(
                isAccessOn &&
                !isDotsSlideShown &&
                interactivatedVerseIndex < 0 &&
                (
                    !isNavShown ||
                    isLyricExpanded ||
                    lyricAnnotationIndex
                )
            )

        this.props.updateAccessStore({ isAccessedIndexedAnchorShown })
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    { updateAccessStore }
)(AccessListener)
