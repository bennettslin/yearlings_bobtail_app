// Singleton to listen for non-toggle events related to carousel closing.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAccessStore } from 'flux/access/action'
import { updateSessionStore } from 'flux/session/action'
import { updateToggleStore } from 'flux/toggle/action'

import { getNavBookIndex } from 'helpers/dataHelper'

class CarouselNavListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        dotsBitNumber: PropTypes.number.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._closeCarouselIfNeeded(prevProps)
        this._handleNavExpandIfNeeded(prevProps)
    }

    _closeCarouselIfNeeded(prevProps) {
        const
            { dotsBitNumber } = this.props,
            { dotsBitNumber: prevDotsBitNumber } = prevProps

        // If there are no selected dots, there can be no carousel annotations.
        if (!dotsBitNumber && prevDotsBitNumber) {
            this.props.updateToggleStore({ isCarouselShown: false })
        }
    }

    _handleNavExpandIfNeeded(prevProps) {
        const
            { isCarouselShown } = this.props,
            { isCarouselShown: wasCarouselShown } = prevProps

        // Prepare nav if collapsing carousel.
        if (!isCarouselShown && wasCarouselShown) {
            const
                { selectedSongIndex } = this.props,
                shownNavBookIndex = getNavBookIndex(selectedSongIndex)

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
    dotsStore: { dotsBitNumber },
    songStore: { selectedSongIndex },
    toggleStore: { isCarouselShown }
}) => ({
    dotsBitNumber,
    selectedSongIndex,
    isCarouselShown
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAccessStore,
        updateSessionStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(CarouselNavListener)
