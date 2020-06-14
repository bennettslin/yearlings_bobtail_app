import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateEntranceStore } from '../../redux/entrance/action'
import {
    mapDidLyricEnter,
    mapDidCarouselEnter,
    mapDidTheatreEnter,
    mapDidSceneEnter
} from '../../redux/entrance/selector'

const mapStateToProps = state => {
    const
        didLyricEnter = mapDidLyricEnter(state),
        didCarouselEnter = mapDidCarouselEnter(state),
        didTheatreEnter = mapDidTheatreEnter(state),
        didSceneEnter = mapDidSceneEnter(state)

    return {
        didLyricEnter,
        didCarouselEnter,
        didTheatreEnter,
        didSceneEnter
    }
}

class AppLoadListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        didTheatreEnter: PropTypes.bool.isRequired,
        didLyricEnter: PropTypes.bool.isRequired,
        didCarouselEnter: PropTypes.bool.isRequired,
        didSceneEnter: PropTypes.bool.isRequired,
        updateEntranceStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkInitialTheatreDidEnter(prevProps)
    }

    _checkInitialTheatreDidEnter(prevProps) {
        /**
         * Upon page load, after theatre entrance, we want to kick off the
         * entrances for the remaining sections. This will never happen again.
         */

        const
            {
                didTheatreEnter,
                didLyricEnter,
                didCarouselEnter,
                didSceneEnter
            } = this.props,
            { didTheatreEnter: hadTheatreEntered } = prevProps

        if (
            (
                // Theatre has just entered.
                didTheatreEnter && !hadTheatreEntered
            ) &&
            (
                /**
                 * Subsequent sections have not yet entered. Check all three
                 * because while lyric is always last to enter, they are not
                 * synchronous so there is no strict guarantee.
                 */
                !didLyricEnter ||
                !didCarouselEnter ||
                !didSceneEnter
            )
        ) {
            logTransition('Initial theatre did enter.')
            this.props.updateEntranceStore({
                canLyricCarouselUpdate: true,
                didCarouselUpdate: true,
                didLyricUpdate: true,
                canSceneUpdate: true,
                didSceneUpdate: true
            })
        }
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    { updateEntranceStore }
)(AppLoadListener)
