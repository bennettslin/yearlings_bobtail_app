// Singleton to listen for non-toggle events related to carousel closing.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    updateAccessStore,
    resetAccessedNav
} from '../../../redux/access/action'
import { updateSessionStore } from '../../../redux/session/action'
import { getBookForSongIndex } from '../../../album/api/songs'

class NavListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isNavShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        resetAccessedNav: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkNavShown(prevProps)
    }

    _checkNavShown = (prevProps = {}) => {
        const {
                isNavShown,
                selectedSongIndex
            } = this.props,
            { isNavShown: wasNavShown } = prevProps

        if (
            // Nav is now shown.
            isNavShown && !wasNavShown
        ) {
            /**
             * Establish the nav index upon showing the nav. This will continue
             * to be the nav index for as long as the nav stays up, even if
             * access is turned on and off in between.
             */
            this.props.updateAccessStore({
                accessedNavIndex: selectedSongIndex
            })
            this.props.updateSessionStore({
                shownNavBookIndex: getBookForSongIndex(selectedSongIndex)
            })

        } else if (
            // Nav is now hidden.
            !isNavShown && wasNavShown
        ) {
            this.props.resetAccessedNav()
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = state => {
    const {
        toggleStore: { isNavShown },
        selectedStore: { selectedSongIndex }
    } = state

    return {
        isNavShown,
        selectedSongIndex
    }
}

export default connect(
    mapStateToProps,
    {
        updateAccessStore,
        updateSessionStore,
        resetAccessedNav
    }
)(NavListener)
