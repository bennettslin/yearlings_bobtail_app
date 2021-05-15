import React from 'react'
import PropTypes from 'prop-types'
import Contact from './../../Contact'
import Texts from './../../Texts'
import PromoTitle from './Title'
import PromoContent from './Content'
import { isString } from '../../../helpers/general'

const PromoView = ({
    title,
    body,
    footnote,
    showContact,
}) => (
    <>
        <PromoTitle {...{ title }} />
        <PromoContent {...{ footnote }}>
            {body.map((text, index) => {
                if (isString(text) || text.text) {
                    return (
                        <p {...{ key: index }}>
                            <Texts {...{ text: isString(text) ? text : text.text }} />
                        </p>
                    )

                } else if (text.title) {
                    return (
                        <PromoTitle
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
                <Contact />
            )}
        </PromoContent>
    </>
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
