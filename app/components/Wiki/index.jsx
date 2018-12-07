// Webview to show Wikipedia page for reference anchor.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Spinner from '../Spinner'

// TODO: Show that active wiki anchor is disabled.
// TODO: Browser's forward and back buttons should not affect iframe. http://www.webdeveasy.com/back-button-behavior-on-a-page-with-an-iframe/
// TODO: If loading time is too long, show page with a "There was a problem connecting to Wikipedia. Try again?"

const mapStateToProps = ({
    sessionStore: { selectedWikiUrl }
}) => ({
    selectedWikiUrl
})

class WikiSection extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedWikiUrl: PropTypes.string.isRequired,

        // From parent.
        setWikiFocusElement: PropTypes.func.isRequired
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
        const
            {
                selectedWikiUrl,
                setWikiFocusElement
            } = this.props,
            { iframeLoading } = this.state

        return (
            <div
                {...{
                    ref: setWikiFocusElement,
                    tabIndex: -1,
                    className: cx(
                        'Wiki',
                        'iframeContainer'
                    )
                }}
            >
                {iframeLoading &&
                    <div
                        {...{
                            className: cx(
                                'iframeContainer__spinner',
                                'absoluteFullContainer',
                                'flexCentreContainer'
                            )
                        }}
                    >
                        <Spinner />
                    </div>
                }
                <iframe
                    {...{
                        className: cx(
                            'iframeContainer__iframe',
                            { 'iframeLoading': iframeLoading }
                        ),
                        src: selectedWikiUrl,
                        onLoad: this.onIframeLoad
                    }}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(WikiSection)
