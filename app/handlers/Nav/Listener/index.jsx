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
        isNavShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._handleNavExpandIfNeeded(prevProps)
    }

    _handleNavExpandIfNeeded(prevProps) {
        const
            { isNavShown } = this.props,
            { isNavShown: wasNavShown } = prevProps

        if (isNavShown && !wasNavShown) {

            const
                { selectedSongIndex } = this.props,
                shownNavBookIndex = getBookForSongIndex(selectedSongIndex)

            this.props.updateAccessStore({
                accessedNavSongIndex: selectedSongIndex
            })
            this.props.updateSessionStore({ shownNavBookIndex })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedStore: { selectedSongIndex },
    toggleStore: { isNavShown }
}) => ({
    selectedSongIndex,
    isNavShown
})

export default connect(
    mapStateToProps,
    {
        updateAccessStore,
        updateSessionStore
    }
)(NavListener)
