import React from 'react';
import DotsBlock from '../dots/dots-block.jsx';
import Constants from '../../constants/constants.js';
import FormatUtility from '../../utilities/format-utility.jsx';

const defaultProps = {
    annotationObject: {
        title: '',
        dotKeys: {}
    },
    portalObjects: null,
    handlePortalClick() {},
    handleUrlClick() {}
}

/*************
 * CONTAINER *
 *************/

/********
 * VIEW *
 ********/

class AnnotationSection extends React.Component {

    _getAnnotationCardsBlock(annotationObject) {
        const dotKeys = Constants.allDotKeys.filter(dotKey => {
                return annotationObject.dotKeys[dotKey];
            });

        return (
            <div className="cards-block">
                {dotKeys.map((dotKey, index) => {
                    const richText = annotationObject[dotKey],

                        /**
                         * Temporary workaround. Data helper will eventually
                         * pass multiple dot keys.
                         */
                        tempDotKeys = {};

                    tempDotKeys[dotKey] = true;

                    return (
                        <div key={index}
                            className={'annotation-card ' + dotKey}>
                            <DotsBlock
                                dotKeys={tempDotKeys}
                                interactable={true}
                            />
                            {/* Portal card is slightly different. */}
                            {dotKey === 'portal' ?
                                this._getPortalsBlock(this.props.portalObjects) :
                                FormatUtility.getFormattedTextElement(false, richText, this.props.handleUrlClick)}
                        </div>
                    );
                })}
            </div>
        );
    }

    _getPortalsBlock(portalObjects) {
        return (
            <div className="portals-block">
                {portalObjects.map((portalObject, index) => {
                    return (
                        <a key={index}
                            className="portal-button"
                            onClick={() => this.props.handlePortalClick(portalObject.songIndex, portalObject.annotationIndex)}>
                            <div className="song-title">{portalObject.songTitle}</div>
                            <div className="annotation-title">{portalObject.annotationTitle}</div>
                        </a>
                    );
                })}
            </div>
        );
    }

    render() {
        const props = this.props,
            annotationObject = props.annotationObject,
            title = annotationObject.title;

        return (
            <div ref="annotation"
                className="section annotation-section popup-content-wrapper">
                <h2>{title}</h2>
                <div className="annotation-cards">
                    {this._getAnnotationCardsBlock(annotationObject)}
                </div>
            </div>
        );
    }
}

AnnotationSection.defaultProps = defaultProps;
export default AnnotationSection;