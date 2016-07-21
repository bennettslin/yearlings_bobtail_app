import React from 'react';
import DotsBlock from '../dots/dots-block.jsx';
import TextBlock from '../text/text-block.jsx';

/*************
 * CONTAINER *
 *************/

const AnnotationCard = (props) => {
    const { card } = props,
        { description,
          dotKeys } = card;

    return (
        <AnnotationCardView {...props}
            description={description}
            dotKeys={dotKeys}
        />
    );
};

/****************
 * PRESENTATION *
 ****************/

const AnnotationCardView = ({

    // From props.
    onWikiUrlClick,

    // From controller.
    description,
    dotKeys

}) => (

    <div className={'annotation-card'}>
        <DotsBlock
            dotKeys={dotKeys}
            interactable={true}
        />
        <TextBlock
            isLyric={false}
            text={description}
            onAnchorClick={onWikiUrlClick}
        />
    </div>
);

export default AnnotationCard;
