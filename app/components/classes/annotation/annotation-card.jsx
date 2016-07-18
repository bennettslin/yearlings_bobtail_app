import React from 'react';
import AnnotationPortalsBlock from './annotation-portals-block.jsx';
import DotsBlock from '../dots/dots-block.jsx';
import TextBlock from '../text/text-block.jsx';

/*************
 * CONTAINER *
 *************/

const AnnotationCard = (props) => {
    const { dotKey,
            annotationObject } = props,

        richText = annotationObject[dotKey],

        /**
         * FIXME: Temporary workaround. Data helper will eventually
         * pass multiple dot keys.
         */
        tempDotKeys = {
            [dotKey]: true
        };

    return (
        <AnnotationCardView {...props}
            richText={richText}
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
    portalObjects,
    onPortalClick,
    onUrlClick,

    // From controller.
    richText,
    tempDotKeys

}) => (

    <div className={'annotation-card ' + dotKey}>
        <DotsBlock
            dotKeys={tempDotKeys}
            interactable={true}
        />
        <TextBlock
            isLyric={false}
            text={richText}
            onAnchorClick={onUrlClick}
        />
        {dotKey === 'portal' ?
            <AnnotationPortalsBlock
                portalObjects={portalObjects}
                onPortalClick={onPortalClick}
            /> : null
        }
    </div>
);

export default AnnotationCard;