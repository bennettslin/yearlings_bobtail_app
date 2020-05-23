import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLyricStore } from '../../redux/lyric/action'
import { updateEntranceStore } from '../../redux/entrance/action'

class AppLoadListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        didTheatreEnter: PropTypes.bool.isRequired,
        didLyricEnter: PropTypes.bool.isRequired,
        didCarouselEnter: PropTypes.bool.isRequired,
        didSceneEnter: PropTypes.bool.isRequired,
        updateLyricStore: PropTypes.func.isRequired,
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
            this.props.updateLyricStore({
                canLyricCarouselUpdate: true,
                didCarouselUpdate: true,
                didLyricUpdate: true
            })
            this.props.updateEntranceStore({
                canSceneUpdate: true,
                didSceneUpdate: true
            })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    entranceStore: {
        didTheatreEnter,
        didSceneEnter
    },
    lyricStore: {
        didLyricEnter,
        didCarouselEnter
    }
}) => ({
    didTheatreEnter,
    didSceneEnter,
    didLyricEnter,
    didCarouselEnter
})

export default connect(
    mapStateToProps,
    {
        updateLyricStore,
        updateEntranceStore
    }
)(AppLoadListener)
