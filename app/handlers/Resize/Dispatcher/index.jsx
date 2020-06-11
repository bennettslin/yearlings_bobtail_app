// Singleton to listen for window resize event.
import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import { updateViewportStore } from '../../../redux/viewport/action'
import { getWindowDimensions } from '../../../helpers/resize/device'

class ResizeDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateEntranceStore: PropTypes.func.isRequired,
        updateViewportStore: PropTypes.func.isRequired,

        // From parent.
        getRootElement: PropTypes.func.isRequired,
        getBeginEnterTransition: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getBeginEnterTransition(
            this.beginEnterTransition
        )

        /**
         * As soon as we have a reference to the root container, begin
         * showing theatre.
         */
        logTransition('Theatre can enter.')
        this.props.updateEntranceStore({
            canTheatreEnter: true
        })
    }

    beginEnterTransition = () => {
        const
            { getRootElement } = this.props,
            {
                windowHeight,
                windowWidth
            } = getWindowDimensions(getRootElement())

        this.props.updateViewportStore({
            windowWidth,
            windowHeight
        })

        logTransition('Theatre can enter.')
        this.props.updateEntranceStore({
            canTheatreEnter: true
        })
    }

    render() {
        return null
    }
}

export default connect(
    null,
    {
        updateEntranceStore,
        updateViewportStore
    }
)(ResizeDispatcher)
