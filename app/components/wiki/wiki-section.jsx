import React, { Component } from 'react'
import spinnerUrl from '../../../app/assets/images/default_spinner.svg'

/*************
 * CONTAINER *
 *************/

const WikiSection = (props) => (
    <WikiSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

// TODO: Force refresh of same page if user clicks on link again.
// TODO: Automatically scroll to hide search bar on top.
// TODO: Add navigation and exit button.
// TODO: Browser's forward and back buttons should not affect iframe. http://www.webdeveasy.com/back-button-behavior-on-a-page-with-an-iframe/
// TODO: What if there's no response from backend?

class WikiSectionView extends Component {

    constructor(props) {
        super(props)
        this.onWebviewLoad = this.onWebviewLoad.bind(this)

        this.state = {
            webviewLoading: true
        }
    }

    onWebviewLoad(e) {
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
                            src={spinnerUrl}
                        />
                    </div> : null
                }
                <iframe
                    className={`webview${webviewLoading ? ' loading' : ''}`}
                    src={selectedWikiUrl}
                    onLoad={this.onWebviewLoad}
                />
            </div>
        )
    }
}

export default WikiSection
