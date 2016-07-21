import React from 'react';
import AnnotationPortalsBlock from './annotation-portals-block.jsx';
import DotsBlock from '../dots/dots-block.jsx';
import TextBlock from '../text/text-block.jsx';
import { ALL_DOT_KEYS } from '../../helpers/constants.js';

/*************
 * CONTAINER *
 *************/

const AnnotationCard = (props) => {
    const { dotKey,
            annotationObject } = props,

        richText = annotationObject['description'];

    return (
        <AnnotationCardView {...props}
            richText={richText}
            dotKeys={annotationObject.dotKeys}
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
    onWikiUrlClick,

    // From controller.
    richText,
    dotKeys

}) => (

    <div className={'annotation-card ' + dotKey}>
        <DotsBlock
            dotKeys={dotKeys}
            interactable={true}
        />
        <TextBlock
            isLyric={false}
            text={richText}
            onAnchorClick={onWikiUrlClick}
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
