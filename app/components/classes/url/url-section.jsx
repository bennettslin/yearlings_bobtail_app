import React from 'react';

const defaultProps = {
    url: ''
}

/*************
 * CONTAINER *
 *************/

class UrlSection extends React.Component {

    render() {
        return (
            <UrlSectionView {...this.props} />
        );
    }
}

/****************
 * PRESENTATION *
 ****************/

// TODO: Force refresh of same page if user clicks on link again.
// TODO: Automatically scroll to hide search bar on top.
// TODO: Add navigation and exit button.
// TODO: Browser's forward and back buttons should not affect iframe. http://www.webdeveasy.com/back-button-behavior-on-a-page-with-an-iframe/

class UrlSectionView extends React.Component {

    render() {
        return (
            <div ref="url"
                className="section url-section popup-content-wrapper"
            >
                <iframe src={this.props.url} />
            </div>
        );
    }
}

UrlSection.defaultProps = defaultProps;
export default UrlSection;