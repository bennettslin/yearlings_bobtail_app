import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateOptionStore } from '../../../redux/option/action'
import { IS_TIPS_SHOWABLE_SELECTOR } from '../../../redux/transient/selectors'

import {
    SHOWN,
    HIDDEN
} from '../../../constants/options'

const mapStateToProps = state => {
    const {
            lyricStore: { lyricAnnotationIndex },
            selectedStore: { isSelectedLogue },
            optionStore: {
                selectedTipsOption,
                isForcedShownOverview
            },
            viewportStore: { deviceWidthIndex }
        } = state,
        isTipsShowable = IS_TIPS_SHOWABLE_SELECTOR(state)

    return {
        isSelectedLogue,
        selectedTipsOption,
        isForcedShownOverview,
        lyricAnnotationIndex,
        deviceWidthIndex,
        isTipsShowable
    }
}

class TipsListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        isForcedShownOverview: PropTypes.bool.isRequired,
        deviceWidthIndex: PropTypes.number.isRequired,
        isTipsShowable: PropTypes.bool.isRequired,
        updateOptionStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this._handleTipsUpdate()
    }

    componentDidUpdate(prevProps) {
        this._handleTipsShowableChange(prevProps)
        this._handleForcedOverview(prevProps)
        this._handleDeviceWidthChange(prevProps)
    }

    _handleTipsShowableChange(prevProps) {
        const
            { isTipsShowable } = this.props,
            { isTipsShowable: wasTipsShowable } = prevProps

        if (isTipsShowable !== wasTipsShowable) {
            this._handleTipsUpdate()
        }
    }

    _handleDeviceWidthChange(prevProps) {
        const {
                isTipsShowable,
                deviceWidthIndex,
                selectedTipsOption
            } = this.props,
            { deviceWidthIndex: prevDeviceWidthIndex } = prevProps

        if (deviceWidthIndex !== prevDeviceWidthIndex) {
            if (
                !isTipsShowable &&
                selectedTipsOption === SHOWN
            ) {
                this.props.updateOptionStore({
                    selectedTipsOption: HIDDEN
                })
            }
        }
    }

    _handleTipsUpdate() {
        const {
            isTipsShowable,
            lyricAnnotationIndex
        } = this.props

        // There also cannot be a selected annotation.
        if (!lyricAnnotationIndex) {
            const {
                isSelectedLogue,
                selectedTipsOption
            } = this.props

            // Show tips for new song.
            if (
                !isSelectedLogue && (
                    selectedTipsOption === HIDDEN ||
                    selectedTipsOption === SHOWN
                )
            ) {
                this.props.updateOptionStore({
                    selectedTipsOption: isTipsShowable ? SHOWN : HIDDEN,
                    ...isTipsShowable && { isSongShownTips: true }
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

export default connect(
    mapStateToProps,
    { updateOptionStore }
)(TipsListener)
