// Webview to show Wikipedia page for reference anchor.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Spinner from '../Spinner'
import { getWikiUrl } from './helper'

// TODO: Show that active wiki anchor is disabled.
// TODO: Browser's forward and back buttons should not affect iframe. http://www.webdeveasy.com/back-button-behavior-on-a-page-with-an-iframe/
// TODO: If loading time is too long, show page with a "There was a problem connecting to Wikipedia. Try again?"

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

class WikiSection extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        carouselAnnotationIndex: PropTypes.number.isRequired,
        isMobileWiki: PropTypes.bool.isRequired,

        // From parent.
        setWikiRef: PropTypes.func.isRequired
    }

    state = {
        iframeLoading: true
    }

    componentDidUpdate(prevProps) {
        const { selectedWikiUrl } = this.props

        if (selectedWikiUrl !== prevProps.selectedWikiUrl) {
            this._onWikiUrlReceived(selectedWikiUrl)
        }
    }

    _onWikiUrlReceived(selectedWikiUrl) {
        if (selectedWikiUrl) {
            this.setState({
                iframeLoading: true
            })
        }
    }

    onIframeLoad = () => {
        this.setState({
            iframeLoading: false
        })
    }

    render() {
        const { iframeLoading } = this.state,

            // Use all props passed through Redux.
            selectedWikiUrl = getWikiUrl(this.props)

        return (
            <div className={cx(
                'Wiki',
                'iframeContainer'
            )}>
                {iframeLoading &&
                    <div className={cx(
                        'iframeContainer__spinner',
                        'absoluteFullContainer',
                        'flexCentreContainer'
                    )}>
                        <Spinner />
                    </div>
                }
                <iframe
                    ref={this.props.setWikiRef}
                    className={cx(
                        'iframeContainer__iframe',
                        { 'iframeLoading': iframeLoading }
                    )}
                    src={selectedWikiUrl}
                    onLoad={this.onIframeLoad}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(WikiSection)
