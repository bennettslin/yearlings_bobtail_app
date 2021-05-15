import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../hocs/DidMountHoc'
import { CONTACT_EMAIL } from '../../constants/website'
import './style'

const Contact = ({ didMount, isMediumTitle }) => (
    didMount ? (
        <span
            {...{
                className: cx(
                    'Contact',
                    'Rancho',
                    isMediumTitle ?
                        'fontSize__mediumTitle' :
                        'Contact__fontSize',
                ),
            }}
        >
            {CONTACT_EMAIL.split('').map((character, index) => (
                <Fragment {...{ key: index }}>
                    <span {...{ className: 'dNC' }}>
                        {String.fromCharCode(
                            character.charCodeAt(0) + 1,
                        )}
                    </span>
                    {character}
                </Fragment>
            ))}
        </span>
    ) : '_@_._'
)

Contact.propTypes = {
    didMount: PropTypes.bool.isRequired,
    isMediumTitle: PropTypes.bool,
}

export default getDidMountHoc(Contact)
