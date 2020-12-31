import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../DidMountHoc'
import { CONTACT_EMAIL } from '../../constants/website'
import './style'

const Contact = ({ didMount }) => (
    didMount ? (
        <span
            {...{
                className: cx(
                    'Contact',
                    'Rancho'
                ),
            }}
        >
            {CONTACT_EMAIL.split('').map((character, index) => (
                <Fragment {...{ key: index }}>
                    <span {...{ className: 'dNC' }}>
                        {String.fromCharCode(
                            character.charCodeAt(0) + 1
                        )}
                    </span>
                    <span>{character}</span>
                </Fragment>
            ))}
        </span>
    ) : '_@_._'
)

Contact.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(Contact)
