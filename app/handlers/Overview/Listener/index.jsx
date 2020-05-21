import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateOptionStore } from '../../../redux/option/action'

import {
    SHOWN,
    HIDDEN
} from '../../../constants/options'

class OverviewListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        updateOptionStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this._handleOverviewUpdate()
    }

    componentDidUpdate(prevProps) {
        this._handleSongChange(prevProps)
        this._handleHeightlessChange(prevProps)
    }

    _handleSongChange(prevProps) {
        const
            { selectedSongIndex } = this.props,
            { selectedSongIndex: prevSongIndex } = prevProps

        if (selectedSongIndex !== prevSongIndex) {
            this._handleOverviewUpdate()
        }
    }

    _handleOverviewUpdate() {
        const { selectedAnnotationIndex } = this.props

        // There cannot be a selected annotation.
        if (!selectedAnnotationIndex) {
            const {
                isSelectedLogue,
                selectedOverviewOption
            } = this.props

            if (isSelectedLogue) {
                this.props.updateOptionStore({
                    // Always show logue overview when switching to logue.
                    isLogueOverviewShown: true,

                    // If shown, hide song overview when now in logue.
                    ...selectedOverviewOption === SHOWN && {
                        selectedOverviewOption: HIDDEN
                    }
                })

            } else {
                this.props.updateOptionStore({
                    // Hide logue overview when switching to song.
                    isLogueOverviewShown: false,

                    // If just hidden, show song overview when now in new song.
                    ...selectedOverviewOption === HIDDEN && {
                        selectedOverviewOption: SHOWN,
                        isSongShownOverview: true
                    }
                })
            }
        }
    }

    _handleHeightlessChange(prevProps) {
        const
            {
                isHeightlessLyric,
                isSelectedLogue
            } = this.props,
            { isHeightlessLyric: wasHeightlessLyric } = prevProps

        if (
            isSelectedLogue &&
            !isHeightlessLyric && wasHeightlessLyric
        ) {
            // Logue overview is always shown if heighted lyric.
            this.props.updateOptionStore({ isLogueOverviewShown: true })
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
    responsiveStore: { isHeightlessLyric },
    optionStore: { selectedOverviewOption }
}) => ({
    isSelectedLogue,
    selectedSongIndex,
    selectedAnnotationIndex,
    isHeightlessLyric,
    selectedOverviewOption
})

export default connect(
    mapStateToProps,
    { updateOptionStore }
)(OverviewListener)
