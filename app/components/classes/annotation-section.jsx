import React from 'react';
import DotsBlock from './dots-block.jsx';
import FormatUtility from '../utilities/format-utility.jsx';

const defaultProps = {
    title: '',
    description: '',
    codes: {},
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

    _getPortalReferenceBlock(portalObjects) {
        return (
            <div className="dev-only">
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
        const props = this.props;

        return (
            <div ref="annotation"
                className="section annotation-section popup-content-wrapper">
                    <DotsBlock
                        codes={props.codes}
                    />
                <h2>{props.title}</h2>
                {FormatUtility.getFormattedTextElement(false, props.description)}
                {props.portalObjects ? this._getPortalReferenceBlock(props.portalObjects) : null}
            </div>
        );
    }
}

AnnotationSection.defaultProps = defaultProps;
export default AnnotationSection;