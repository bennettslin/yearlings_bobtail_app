import React from 'react';
import DotsBlock from './dots-block.jsx';
import FormatUtility from '../utilities/format-utility.jsx';

const defaultProps = {
    title: '',
    description: '',
    codes: {},
    portalReference: null,
    portalTitles: null,
    handlePortalClick() {}
}

class AnnotationSection extends React.Component {

    constructor(props) {
        super(props);
        this._onPortalClick = this._onPortalClick.bind(this);
    }

    _onPortalClick() {
        const props = this.props;
        props.handlePortalClick(props.portalReference.songIndex, props.portalReference.annotationIndex);
    }

    _getPortalReferenceBlock(portalReference) {
        const portalTitles = this.props.portalTitles,
            portalDescription = `${portalTitles.song}: ${portalTitles.annotation}`;

        return (
            <div className="dev-only">
                <a onClick={this._onPortalClick}>
                    {portalDescription}
                </a>
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
                {props.portalTitles ? this._getPortalReferenceBlock(props.portalTitles) : null}
            </div>
        );
    }
}

AnnotationSection.defaultProps = defaultProps;
export default AnnotationSection;