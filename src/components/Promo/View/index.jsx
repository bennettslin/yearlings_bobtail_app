import React from 'react'
import PropTypes from 'prop-types'
import PromoViewContent from './Content'
import PromoViewSection from './Section'
import PromoViewTitle from './Title'
import ShareButtons from '../../ShareButtons'
import { PROMO_PAGE_SOCIAL_MEDIA } from '../../../constants/socialMedia'

const PromoView = ({
    title,
    body,
    footnote,
}) => (
    <PromoViewContent {...{ footnote }}>
        <PromoViewTitle {...{ title }} />
        {body.map((section, index) => (
            <PromoViewSection {...{ key: index, ...section }} />
        ))}
        <ShareButtons {...{ id: PROMO_PAGE_SOCIAL_MEDIA }} />
    </PromoViewContent>
)

PromoView.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string,
    ]),
    body: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
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
            }),
        ]),
    ).isRequired,
    footnote: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
}

export default PromoView
