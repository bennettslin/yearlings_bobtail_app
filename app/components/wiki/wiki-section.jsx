import React, { Component } from 'react'
import spinnerSvg from '../../../app/assets/images/default_spinner.svg'

/*************
 * CONTAINER *
 *************/

const WikiSection = (props) => (
    <WikiSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

// TODO: Show that active wiki anchor is disabled.
// TODO: Automatically scroll to hide search bar on top.
// TODO: Add navigation and exit button.
// TODO: Browser's forward and back buttons should not affect iframe. http://www.webdeveasy.com/back-button-behavior-on-a-page-with-an-iframe/
// TODO: If loading time is too long, show page with a "There was a problem connecting to Wikipedia. Try again?"

class WikiSectionView extends Component {

    constructor(props) {
        super(props)
        this.onWebviewLoad = this.onWebviewLoad.bind(this)

        this.state = {
            webviewLoading: true
        }
    }

    componentWillReceiveProps({ selectedWikiUrl }) {
        if (selectedWikiUrl && selectedWikiUrl !== this.props.selectedWikiUrl) {
            this.setState({ webviewLoading: true })
        }
    }

    onWebviewLoad(e) {
        /**
         * Pausing this for now, as I've run into cross-origin issues.
         */
        // try {
        //     const webview = this.refs.webview,
        //     webviewDoc = webview.contentDocument || webview.contentWindow.document
        // } catch (e) {
        // }

        this.setState({
            webviewLoading: false
        })
    }

    render() {
        const { inPopup,
                selectedWikiUrl } = this.props,
            { webviewLoading } = this.state

        return (
            <div
                className={`section wiki-section${inPopup ? ' in-popup' : ''}`}
            >
                {webviewLoading ?
                    <div className="spinner-container">
                        <img
                            className="spinner"
                            src={spinnerSvg}
                        />
                    </div> : null
                }
                <iframe
                    ref="webview"
                    className={`webview${webviewLoading ? ' loading' : ''}`}
                    src={selectedWikiUrl}
                    onLoad={this.onWebviewLoad}
                />
            </div>
        )
    }
}

export default WikiSection
