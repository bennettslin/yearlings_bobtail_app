import React from 'react';
import DotsBlock from './dots-block.jsx';
import Constants from '../constants/constants.js';
import FormatUtility from '../utilities/format-utility.jsx';

const defaultProps = {
    annotationObject: {
        title: '',
        dotKeys: {}
    },
    portalObjects: null,
    handlePortalClick() {}
}

class AnnotationSection extends React.Component {

    constructor(props) {
        super(props);
        this._onPortalClick = this._onPortalClick.bind(this);
    }

    _onPortalClick(songIndex, annotationIndex) {
        this.props.handlePortalClick(songIndex, annotationIndex);
    }

    _getAnnotationCardsBlock(annotationObject) {
        const dotKeys = Constants.allDotKeys.filter(dotKey => {
                return annotationObject.dotKeys[dotKey];
            });

        return (
            <div className="cards-block">
                {dotKeys.map((dotKey, index) => {
                    const richText = annotationObject[dotKey];

                    return (
                        <div key={index}
                            className="annotation-card">
                            {FormatUtility.getFormattedTextElement(false, richText)}
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
                            onClick={this._onPortalClick.bind(null,
                                    portalObject.songIndex,
                                    portalObject.annotationIndex)}>
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
            title = annotationObject.title,
            dotKeys = annotationObject.dotKeys,
            description = annotationObject.description;

        return (
            <div ref="annotation"
                className="section annotation-section popup-content-wrapper">
                    <DotsBlock
                        dotKeys={dotKeys}
                    />
                <h2>{title}</h2>
                <div className="annotation-cards">
                    {this._getAnnotationCardsBlock(annotationObject)}
                </div>
                {props.portalObjects ? this._getPortalsBlock(props.portalObjects) : null}
            </div>
        );
    }
}

AnnotationSection.defaultProps = defaultProps;
export default AnnotationSection;