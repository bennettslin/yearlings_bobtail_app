import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Texts from '../../../Texts'
import './style'

const PromoContent = ({
    children,
    footnote,

}) => (
    <div
        {...{
            className: cx(
                'PromoContent',
                'fontSize__mediumTitle',
            ),
        }}
    >
        <div
            {...{
                className: 'PromoContent__body',
            }}
        >
            {children}
        </div>
        {Boolean(footnote) && (
            <div
                {...{
                    className: 'PromoContent__footnote',
                }}
            >
                <Texts {...{ text: footnote }} />
            </div>
        )}
    </div>
)

PromoContent.propTypes = {
    children: PropTypes.node.isRequired,
    footnote: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
}

export default PromoContent
