import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Texts from '../../Texts'
import './style'

const MarketingContent = ({
    children,
    footnote,

}) => (
    <div
        {...{
            className: cx(
                'MarketingContent',
                'fontSize__mediumTitle',
            ),
        }}
    >
        <div
            {...{
                className: 'MarketingContent__body',
            }}
        >
            {children}
        </div>
        {Boolean(footnote) && (
            <div
                {...{
                    className: 'MarketingContent__footnote',
                }}
            >
                <Texts {...{ text: footnote }} />
            </div>
        )}
    </div>
)

MarketingContent.propTypes = {
    children: PropTypes.node.isRequired,
    footnote: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
}

export default MarketingContent
