import React from 'react';

/*************
 * CONTAINER *
 *************/

const UrlSection = (props) => (
    <UrlSectionView {...props} />
);

/****************
 * PRESENTATION *
 ****************/

// TODO: Force refresh of same page if user clicks on link again.
// TODO: Automatically scroll to hide search bar on top.
// TODO: Add navigation and exit button.
// TODO: Browser's forward and back buttons should not affect iframe. http://www.webdeveasy.com/back-button-behavior-on-a-page-with-an-iframe/

const UrlSectionView = ({

    // From props.
    inPopup,
    url

}) => (

    <div className={'section url-section' + (inPopup ? ' in-popup' : '')}>
        <iframe src={url} />
    </div>

);

export default UrlSection;