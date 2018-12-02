// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'
import { updateSliderStore } from 'flux/slider/action'
import { updateToggleStore } from 'flux/toggle/action'

class SliderListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSliderTouched: PropTypes.bool.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateSliderStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSliderTouched(prevProps)
    }

    _checkSliderTouched(prevProps) {
        const
            { isSliderTouched } = this.props,
            { isSliderTouched: wasSliderTouched } = prevProps

        if (isSliderTouched && !wasSliderTouched) {
            this.props.updateSessionStore({ interactivatedVerseIndex: -1 })
            this.props.updateToggleStore({ isAccessOn: false })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    sliderStore: { isSliderTouched }
}) => ({
    isSliderTouched
})


const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore,
        updateSliderStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(SliderListener)
