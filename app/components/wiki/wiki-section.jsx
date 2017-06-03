// Webview to show Wikipedia page for reference anchor.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import spinnerSvg from '../../../app/assets/images/default_spinner.svg'
import { getWikiUrl } from '../../helpers/logic-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

// TODO: Show that active wiki anchor is disabled.
// TODO: Browser's forward and back buttons should not affect iframe. http://www.webdeveasy.com/back-button-behavior-on-a-page-with-an-iframe/
// TODO: If loading time is too long, show page with a "There was a problem connecting to Wikipedia. Try again?"

class WikiSection extends Component {

    constructor(props) {
        super(props)
        this.onWebviewLoad = this.onWebviewLoad.bind(this)

        this.state = {
            webviewLoading: true
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
                    'webviewLoading'
                ]
            })

        return componentShouldUpdate
    }

    componentWillReceiveProps({ selectedWikiUrl }) {
        this._onWikiUrlReceived(selectedWikiUrl)
    }

    _onWikiUrlReceived(selectedWikiUrl) {
        if (selectedWikiUrl && selectedWikiUrl !== this.props.selectedWikiUrl) {
            this.setState({ webviewLoading: true })
        }
    }

    onWebviewLoad() {
        this.setState({
            webviewLoading: false
        })
    }

    render() {
        const { webviewLoading } = this.state,

            // Use all props passed through Redux.
            selectedWikiUrl = getWikiUrl(this.props)

        return (
            <div className="section wiki-section">
                {webviewLoading &&
                    <div className="spinner-container">
                        <img
                            className="spinner"
                            src={spinnerSvg}
                        />
                    </div>
                }
                <iframe
                    ref={this.props.wikiSectionRef}
                    className={`webview${webviewLoading ? ' loading' : ''}`}
                    src={selectedWikiUrl}
                    onLoad={this.onWebviewLoad}
                />
            </div>
        )
    }
}

WikiSection.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,
    selectedWikiIndex: PropTypes.number.isRequired,
    selectedAnnotationIndex: PropTypes.number.isRequired,
    carouselAnnotationIndex: PropTypes.number.isRequired,
    isMobileWiki: PropTypes.bool.isRequired,

    // From parent.
    wikiSectionRef: PropTypes.func.isRequired
}

export default connect(({
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
}))(WikiSection)
