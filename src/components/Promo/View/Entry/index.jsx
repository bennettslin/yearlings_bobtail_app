import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Texts from '../../../Texts'
import { getEntryRichText } from './helper'
import './style'

const PromoViewEntry = ({ entry }) => (
    <div
        {...{
            className: cx(
                'PromoViewEntry',
                'fontSize__mediumTitle',
            ),
        }}
    >
        {getEntryRichText(entry).map((item, index) => (
            <div {...{ key: index }} >
                <Texts {...{ text: item }} />
            </div>
        ))}
    </div>
)

PromoViewEntry.propTypes = {
    entry: PropTypes.shape({
        promoKey: PropTypes.string.isRequired,
    }).isRequired,
}

export default PromoViewEntry
