import React from 'react'
import PropTypes from 'prop-types'
import PromoViewContent from './Content'
import PromoViewParagraph from './Paragraph'
import PromoViewTitle from './Title'
import PromoViewEntry from './Entry'
import ShareButtons from '../../ShareButtons'
import { PROMO_PAGE_SOCIAL_MEDIA } from '../../../constants/socialMedia'

const PromoView = ({
    title,
    body,
    footnote,
}) => (
    <PromoViewContent {...{ footnote }}>
        <PromoViewTitle {...{ title }} />
        {body.map((entity, index) => {
            if (entity.paragraph) {
                return (
                    <PromoViewParagraph
                        {...{
                            key: index,
                            paragraph: entity.paragraph,
                        }}
                    />
                )

            } else if (entity.title) {
                return (
                    <PromoViewTitle
                        {...{
                            key: index,
                            title: entity.title,
                        }}
                    />
                )

            } else if (entity.entry) {
                return (
                    <PromoViewEntry
                        {...{
                            key: index,
                            entry: entity.entry,
                        }}
                    />
                )

            } else {
                return null
            }
        })}
        <ShareButtons {...{ id: PROMO_PAGE_SOCIAL_MEDIA }} />
    </PromoViewContent>
)

PromoView.propTypes = {
    title: PropTypes.string,
    body: PropTypes.array.isRequired,
    footnote: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
}

export default PromoView