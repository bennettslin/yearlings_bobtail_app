// Singleton to listen for changes that determine a new wiki url.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAudioStore } from 'flux/audio/action'
import { updateSessionStore } from 'flux/session/action'

import { getWikiUrl } from './helper'

class WikiListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        carouselAnnotationIndex: PropTypes.number.isRequired,
        isMobileWiki: PropTypes.bool.isRequired,
        updateSessionStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this.setWikiUrlIfNeeded(prevProps)
    }

    setWikiUrlIfNeeded(prevProps) {
        const
            {
                selectedWikiIndex,
                isMobileWiki
            } = this.props,
            {
                selectedWikiIndex: prevWikiIndex,
                isMobileWiki: wasMobileWiki
            } = prevProps

        if (
            selectedWikiIndex && !prevWikiIndex ||
            isMobileWiki !== wasMobileWiki
        ) {
            const {
                    selectedSongIndex,
                    selectedAnnotationIndex,
                    carouselAnnotationIndex,
                    isMobileWiki
                } = this.props,
                selectedWikiUrl = getWikiUrl({
                    selectedSongIndex,
                    selectedWikiIndex,
                    selectedAnnotationIndex,
                    carouselAnnotationIndex,
                    isMobileWiki
                })

            this.props.updateSessionStore({ selectedWikiUrl })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    responsiveStore: { isMobileWiki },
    songStore: {
        selectedAnnotationIndex,
        selectedSongIndex
    },
    sessionStore: {
        selectedWikiIndex,
        carouselAnnotationIndex
    }
}) => ({
    isMobileWiki,
    selectedSongIndex,
    selectedWikiIndex,
    selectedAnnotationIndex,
    carouselAnnotationIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAudioStore,
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(WikiListener)
