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
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        isForcedShownOverview: PropTypes.bool.isRequired,
        updateOptionStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this._handleSongChange()
    }

    componentDidUpdate(prevProps) {
        this._handleSongChange(prevProps)
        this._handleForcedOverview(prevProps)
    }

    _handleSongChange(prevProps = {}) {
        const
            {
                selectedSongIndex,
                selectedAnnotationIndex
            } = this.props,
            { selectedSongIndex: prevSongIndex } = prevProps

        if (
            selectedSongIndex !== prevSongIndex &&

            // There also cannot be a selected annotation.
            !selectedAnnotationIndex
        ) {
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
        isSelectedLogue,
        selectedSongIndex,
        selectedAnnotationIndex
    },
    optionStore: {
        selectedTipsOption,
        isForcedShownOverview
    }
}) => ({
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
