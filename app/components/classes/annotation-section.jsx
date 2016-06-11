import React from 'react';
import FormatHelper from '../helpers/format-helper.js';
import DotsBlock from './dots-block.jsx';
import FormatUtility from '../utilities/format-utility.jsx';

const defaultProps = {
    title: '',
    description: '',
    codes: {}
}

class AnnotationSection extends React.Component {

    render() {
        const props = this.props;

        return (
            <div ref="annotation"
                className="section annotation-section popup-content-wrapper">
                    <DotsBlock
                        codes={props.codes}
                    />
                <h2>{FormatHelper.getFormattedAnnotationTitle(props.title)}</h2>
                {FormatUtility.getFormattedTextElement(false, props.description)}
            </div>
        );
    }
}

AnnotationSection.defaultProps = defaultProps;
export default AnnotationSection;