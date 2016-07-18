import React from 'react';
import AnnotationPortalsBlock from './annotation-portals-block.jsx';
import DotsBlock from '../dots/dots-block.jsx';
import FormatUtility from '../../utilities/format-utility.jsx';

/*************
 * CONTAINER *
 *************/

const AnnotationCard = (props) => {
    const { dotKey,
            annotationObject,
            portalObjects,
            handlePortalClick,
            handleUrlClick } = props,

        richText = annotationObject[dotKey],

        /**
         * FIXME: This isn't a great way to render the content.
         */
        contentElement = dotKey === 'portal' ? (

            <AnnotationPortalsBlock
                portalObjects={portalObjects}
                handlePortalClick={handlePortalClick}
            />
            ) : FormatUtility.getFormattedTextElement(false, richText, handleUrlClick),

        /**
         * FIXME: Temporary workaround. Data helper will eventually
         * pass multiple dot keys.
         */
        tempDotKeys = {
            [dotKey]: true
        };

    return (
        <AnnotationCardView {...props}
            contentElement={contentElement}
            tempDotKeys={tempDotKeys}
        />
    );
};

/****************
 * PRESENTATION *
 ****************/

const AnnotationCardView = ({

    // From props.
    dotKey,

    // From controller.
    contentElement,
    tempDotKeys

}) => (

    <div className={'annotation-card ' + dotKey}>
        <DotsBlock
            dotKeys={tempDotKeys}
            interactable={true}
        />
        {contentElement}
    </div>

);

export default AnnotationCard;