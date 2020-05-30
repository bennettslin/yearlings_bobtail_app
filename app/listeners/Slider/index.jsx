// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from '../../redux/access/action'
import { updateActivatedStore } from '../../redux/activated/action'
import { IS_SLIDER_TOUCHED_SELECTOR } from '../../redux/slider/selectors'

const mapStateToProps = state => {
    const isSliderTouched = IS_SLIDER_TOUCHED_SELECTOR(state)

    return {
        isSliderTouched
    }
}

class SliderListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSliderTouched: PropTypes.bool.isRequired,
        updateActivatedStore: PropTypes.func.isRequired,
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
            this.props.updateActivatedStore()
            this.props.updateAccessStore({ isAccessOn: false })
        }
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    {
        updateAccessStore,
        updateActivatedStore
    }
)(SliderListener)
