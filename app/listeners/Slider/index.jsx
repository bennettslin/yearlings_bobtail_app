// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from 'flux/access/action'
import { resetInteractivated } from 'flux/session/action'

class SliderListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSliderTouched: PropTypes.bool.isRequired,
        resetInteractivated: PropTypes.func.isRequired,
        updateAccessStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSliderTouched(prevProps)
    }

    _checkSliderTouched(prevProps) {
        const
            { isSliderTouched } = this.props,
            { isSliderTouched: wasSliderTouched } = prevProps

        if (isSliderTouched && !wasSliderTouched) {
            this.props.resetInteractivated()
            this.props.updateAccessStore({ isAccessOn: false })
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

export default connect(
    mapStateToProps,
    {
        updateAccessStore,
        resetInteractivated
    }
)(SliderListener)
