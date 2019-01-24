// Singleton to listen for non-toggle events related to carousel closing.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from 'flux/access/action'
import { updateSessionStore } from 'flux/session/action'

import { getBookForSongIndex } from 'album/api/songs'

class NavListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        isNavShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._updateNavBook(prevProps)
        this._checkAccessedNav(prevProps)
    }

    _updateNavBook(prevProps) {
        const {
                selectedSongIndex,
                isNavShown
            } = this.props,
            { isNavShown: wasNavShown } = prevProps

        if (isNavShown && !wasNavShown) {
            this.props.updateSessionStore({
                shownNavBookIndex: getBookForSongIndex(selectedSongIndex)
            })
        }
    }

    _checkAccessedNav = (prevProps = {}) => {
        const {
                isAccessOn,
                isNavShown,
                selectedSongIndex
            } = this.props,
            {
                isAccessOn: wasAccessOn,
                isNavShown: wasNavShown
            } = prevProps

        if (
            // If access is on, and nav is shown, and...
            isAccessOn && isNavShown && (

                // ... access was just now turned on, or...
                !wasAccessOn ||

                // ... nav was just now shown.
                !wasNavShown
            )
        ) {
            this.props.updateAccessStore({
                accessedNavSongIndex: selectedSongIndex
            })

        } else if (
            // If access was just now turned off, or...
            !isAccessOn && wasAccessOn ||

            // ... nav is just now hidden.
            (!isNavShown && wasNavShown)
        ) {
            this.props.updateAccessStore({ accessedNavSongIndex: -1 })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    accessStore: { isAccessOn },
    toggleStore: { isNavShown },
    selectedStore: { selectedSongIndex }
}) => ({
    isAccessOn,
    isNavShown,
    selectedSongIndex
})

export default connect(
    mapStateToProps,
    {
        updateAccessStore,
        updateSessionStore
    }
)(NavListener)
