// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from '../../redux/access/action'
import { IS_ACCESS_ON_SELECTOR } from '../../redux/access/selectors'
import { IS_ACTIVATED_SELECTOR } from '../../redux/activated/selectors'

const mapStateToProps = state => {
    const {
            toggleStore: {
                isNavShown,
                isDotsSlideShown,
                isLyricExpanded
            },
            lyricStore: { lyricAnnotationIndex }
        } = state,
        isAccessOn = IS_ACCESS_ON_SELECTOR(state),
        isActivated = IS_ACTIVATED_SELECTOR(state)

    return {
        isAccessOn,
        isNavShown,
        isDotsSlideShown,
        isLyricExpanded,
        lyricAnnotationIndex,
        isActivated
    }
}

class AccessListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        isNavShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        isActivated: PropTypes.bool.isRequired,
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
                isActivated
            } = this.props,

            isAccessedIndexedAnchorShown = Boolean(
                isAccessOn &&
                !isDotsSlideShown &&
                !isActivated &&
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
