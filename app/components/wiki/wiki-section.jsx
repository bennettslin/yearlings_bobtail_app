import React from 'react'

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

const WikiSectionView = ({

    // From props.
    inPopup,
    selectedWikiUrl

}) => (

    <div className={`section wiki-section${inPopup ? ' in-popup' : ''}`}>
        <iframe src={selectedWikiUrl} />
    </div>
)

export default WikiSection
