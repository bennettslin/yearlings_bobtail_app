import React from 'react'
import PropTypes from 'prop-types'
import PromoViewContent from './Content'
import PromoViewParagraph from './Paragraph'
import PromoViewTitle from './Title'
import PromoViewList from './List'
import SocialMediaButtons from '../../SocialMediaButtons'

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

            } else if (entity.list) {
                return (
                    <PromoViewList
                        {...{
                            key: index,
                            list: entity.list,
                        }}
                    />
                )

            } else {
                return null
            }
        })}
        <SocialMediaButtons isPromoPage />
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
