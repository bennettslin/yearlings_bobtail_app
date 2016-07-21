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
            text={description}
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
    text,
    dotKeys

}) => (

    <div className={'annotation-card'}>
        <DotsBlock
            dotKeys={dotKeys}
            interactable={true}
        />
        <TextBlock
            isLyric={false}
            text={text}
            onAnchorClick={onWikiUrlClick}
        />
    </div>
);

export default AnnotationCard;
