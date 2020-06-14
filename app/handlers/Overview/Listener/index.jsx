import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateOptionStore } from '../../../redux/option/action'
import {
    SHOWN,
    HIDDEN
} from '../../../constants/options'
import { mapSelectedOverviewOption } from '../../../redux/option/selector'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex,
    mapIsSelectedLogue
} from '../../../redux/selected/selector'

const mapStateToProps = state => {
    const
        selectedOverviewOption = mapSelectedOverviewOption(state),
        selectedSongIndex = mapSelectedSongIndex(state),
        selectedAnnotationIndex = mapSelectedAnnotationIndex(state),
        isSelectedLogue = mapIsSelectedLogue(state)

    return {
        isSelectedLogue,
        selectedSongIndex,
        selectedAnnotationIndex,
        selectedOverviewOption
    }
}

class OverviewListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        updateOptionStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this._handleOverviewUpdate()
    }

    componentDidUpdate(prevProps) {
        this._handleSongChange(prevProps)
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
                    // If shown, hide song overview when now in logue.
                    ...selectedOverviewOption === SHOWN && {
                        selectedOverviewOption: HIDDEN
                    }
                })

            } else {
                this.props.updateOptionStore({
                    // If just hidden, show song overview when now in new song.
                    ...selectedOverviewOption === HIDDEN && {
                        selectedOverviewOption: SHOWN,
                        isSongShownOverview: true
                    }
                })
            }
        }
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    { updateOptionStore }
)(OverviewListener)
