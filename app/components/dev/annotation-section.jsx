import React from 'react';
import FormatHelper from '../helpers/format-helper.js';
import CodeUtility from '../utilities/code-utility.jsx';
import FormatUtility from '../utilities/format-utility.jsx';

const defaultProps = {
    title: '',
    description: '',
    codes: []
}

class AnnotationSection extends React.Component {

    render() {
        const props = this.props;

        return (
            <div ref="annotation"
                className="annotation-section">
                <div className="code-block">
                    {CodeUtility.getDotsBlock(props.codes)}
                </div>
                <h2>{FormatHelper.getStrippedHeader(props.title)}</h2>
                {FormatUtility.getFormattedTextElement(false, props.description)}
            </div>
        );
    }
}

AnnotationSection.defaultProps = defaultProps;
export default AnnotationSection;