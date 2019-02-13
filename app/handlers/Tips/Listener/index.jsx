import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateOptionStore } from 'flux/option/action'

import {
    SHOWN,
    HIDDEN
} from 'constants/options'

class TipsListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isRoutingComplete: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        isForcedShownOverview: PropTypes.bool.isRequired,
        updateOptionStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._handleRoutingComplete(prevProps)
        this._handleSongChange(prevProps)
        this._handleForcedOverview(prevProps)
    }

    _handleRoutingComplete(prevProps) {
        const
            { isRoutingComplete } = this.props,
            { isRoutingComplete: wasRoutingComplete } = prevProps

        if (isRoutingComplete && !wasRoutingComplete) {
            this._handleTipsUpdate()
        }
    }

    _handleSongChange(prevProps) {
        const
            { selectedSongIndex } = this.props,
            { selectedSongIndex: prevSongIndex } = prevProps

        if (selectedSongIndex !== prevSongIndex) {
            this._handleTipsUpdate()
        }
    }

    _handleTipsUpdate() {
        const
            { selectedAnnotationIndex } = this.props

        // There also cannot be a selected annotation.
        if (!selectedAnnotationIndex) {
            const {
                isSelectedLogue,
                selectedTipsOption
            } = this.props

            // If just hidden, show tips for new song.
            if (!isSelectedLogue && selectedTipsOption === HIDDEN) {
                this.props.updateOptionStore({
                    selectedTipsOption: SHOWN,
                    isSongShownTips: true
                })

            // If shown, hide when now in logue.
            } else if (isSelectedLogue && selectedTipsOption === SHOWN) {
                this.props.updateOptionStore({
                    selectedTipsOption: HIDDEN
                })
            }
        }
    }

    _handleForcedOverview(prevProps) {
        const
            {
                isForcedShownOverview,
                selectedTipsOption
            } = this.props,
            { isForcedShownOverview: wasForcedShownOverview } = prevProps

        if (
            selectedTipsOption === SHOWN &&
            isForcedShownOverview && !wasForcedShownOverview
        ) {
            this.props.updateOptionStore({
                selectedTipsOption: HIDDEN,
                isForcedShownOverview: false
            })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedStore: {
        isRoutingComplete,
        isSelectedLogue,
        selectedSongIndex,
        selectedAnnotationIndex
    },
    optionStore: {
        selectedTipsOption,
        isForcedShownOverview
    }
}) => ({
    isRoutingComplete,
    isSelectedLogue,
    selectedTipsOption,
    isForcedShownOverview,
    selectedSongIndex,
    selectedAnnotationIndex
})

export default connect(
    mapStateToProps,
    { updateOptionStore }
)(TipsListener)
