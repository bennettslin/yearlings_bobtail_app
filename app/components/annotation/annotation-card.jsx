// Component to show individual annotation note or all portals.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import DotBlock from '../dot/dot-block'
import TextBlock from '../text/text-block'
import AnnotationPortalsBlock from './annotation-portals-block'
import { PORTAL } from '../../constants/dots'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class AnnotationCard extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [

                ]
            })

        console.error('props:', JSON.stringify(props, null, 2));
        console.error('nextProps:', JSON.stringify(nextProps, null, 2));
        console.error(`componentShouldUpdate:`, componentShouldUpdate);

        return componentShouldUpdate || true
    }

    render() {
        const { card,
                ...other } = this.props,

            { description,
              dotKeys = {},
              portalLinks } = card

        // Add portal key to dot keys.
        if (portalLinks) {
            dotKeys[PORTAL] = true
        }

        return (
            <AnnotationCardView {...other}
                text={description}
                cardDotKeys={dotKeys}
                portalLinks={portalLinks}
            />
        )
    }
}

AnnotationCard.propTypes = {
    // From parent.
    card: PropTypes.object.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const AnnotationCardView = ({

    // From props.
    carouselAnnotationIndex,
    handleAnnotationWikiSelect,
    handleAnnotationPortalSelect,
    accessedAnnotationAnchorIndex,

    // From controller.
    text,
    cardDotKeys,
    portalLinks

}) => (

    <div className={classnames(
        'annotation-card',
        cardDotKeys
    )}>
        <DotBlock
            inAnnotationCard={true}
            dotKeys={cardDotKeys}
        />
        <TextBlock
            text={text}
            isLyric={false}
            carouselAnnotationIndex={carouselAnnotationIndex}
            accessedAnnotationAnchorIndex={accessedAnnotationAnchorIndex}
            handleAnchorClick={handleAnnotationWikiSelect}
        />
        {portalLinks &&
            <AnnotationPortalsBlock
                portalLinks={portalLinks}
                accessedAnnotationAnchorIndex={accessedAnnotationAnchorIndex}
                handleAnnotationPortalSelect={handleAnnotationPortalSelect}
            />
        }
    </div>
)

AnnotationCardView.propTypes = {
    // Through Redux.
    accessedAnnotationAnchorIndex: PropTypes.number.isRequired,

    // From parent.
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    portalLinks: PropTypes.array,
    cardDotKeys: PropTypes.object.isRequired,
    carouselAnnotationIndex: PropTypes.number.isRequired,
    handleAnnotationWikiSelect: PropTypes.func.isRequired,
    handleAnnotationPortalSelect: PropTypes.func.isRequired
}

export default connect(({
    accessedAnnotationAnchorIndex
}) => ({
    accessedAnnotationAnchorIndex
}))(AnnotationCard)
