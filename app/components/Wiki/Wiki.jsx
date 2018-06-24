// Webview to show Wikipedia page for reference anchor.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import spinnerSvg from '../../../app/assets/images/default_spinner.svg'
import { getWikiUrl } from '../../helpers/logicHelper'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

// TODO: Show that active wiki anchor is disabled.
// TODO: Browser's forward and back buttons should not affect iframe. http://www.webdeveasy.com/back-button-behavior-on-a-page-with-an-iframe/
// TODO: If loading time is too long, show page with a "There was a problem connecting to Wikipedia. Try again?"

const mapStateToProps = ({
    selectedSongIndex,
    selectedWikiIndex,
    selectedAnnotationIndex,
    carouselAnnotationIndex,
    isMobileWiki
}) => ({
    selectedSongIndex,
    selectedWikiIndex,
    selectedAnnotationIndex,
    carouselAnnotationIndex,
    isMobileWiki
})

class WikiSection extends Component {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        carouselAnnotationIndex: PropTypes.number.isRequired,
        isMobileWiki: PropTypes.bool.isRequired,

        // From parent.
        getWikiRef: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.onIframeLoad = this.onIframeLoad.bind(this)

        this.state = {
            iframeLoading: true
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { props, state } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'selectedSongIndex',
                    'selectedWikiIndex',
                    'selectedAnnotationIndex',
                    'carouselAnnotationIndex',
                    'isMobileWiki'
                ]
            }) || getComponentShouldUpdate({
                props: state,
                nextProps: nextState,
                updatingPropsArray: [
                    'iframeLoading'
                ]
            })

        return componentShouldUpdate
    }

    componentDidUpdate(prevProps) {
        const { selectedWikiUrl } = this.props

        if (selectedWikiUrl !== prevProps.selectedWikiUrl) {
            this._onWikiUrlReceived(selectedWikiUrl)
        }
    }

    _onWikiUrlReceived(selectedWikiUrl) {
        if (selectedWikiUrl) {
            this.setState({ iframeLoading: true })
        }
    }

    onIframeLoad() {
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
                        <img
                            src={spinnerSvg}
                        />
                    </div>
                }
                <iframe
                    ref={this.props.getWikiRef}
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
