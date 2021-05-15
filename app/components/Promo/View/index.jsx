import React from 'react'
import PropTypes from 'prop-types'
import Contact from './../../Contact'
import PromoViewTitle from './Title'
import PromoViewContent from './Content'
import PromoViewText from './Text'
import { isString } from '../../../helpers/general'

const PromoView = ({
    title,
    body,
    footnote,
    showContact,
}) => (
    <PromoViewContent {...{ footnote }}>
        <PromoViewTitle {...{ title }} />
        {body.map((text, index) => {
            if (isString(text) || Array.isArray(text) || text.text) {
                const textEntity =
                    isString(text) || Array.isArray(text) ?
                        text :
                        text.text

                return (
                    <PromoViewText
                        {...{
                            key: index,
                            text: textEntity,
                        }}
                    />
                )

            } else if (text.title) {
                return (
                    <PromoViewTitle
                        {...{
                            key: index,
                            title: text.title,
                        }}
                    />
                )

            } else {
                return null
            }
        })}
        {showContact && (
            <Contact isMediumTitle />
        )}
    </PromoViewContent>
)

PromoView.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.array.isRequired,
    showContact: PropTypes.bool,
    footnote: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
}

export default PromoView
