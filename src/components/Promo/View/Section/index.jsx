import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PromoViewTitle from '../Title'
import PromoViewEntries from '../Entries'
import PromoViewParagraph from '../Paragraph'
import './style'

const PromoViewSection = ({ title, paragraph, promoKeys }) => (
    <div {...{ className: cx('PromoViewSection') }} >
        <PromoViewTitle {...{ title }} />
        <PromoViewParagraph {...{ paragraph }} />
        <PromoViewEntries {...{ promoKeys }} />
    </div>
)

PromoViewSection.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string,
    ]),
    promoKeys: PropTypes.arrayOf(
        PropTypes.string.isRequired,
    ),
    paragraph: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string,
    ]),
}

export default PromoViewSection
