import React, { Fragment as ___, memo, useEffect, useState } from 'react'
import cx from 'classnames'
import { CONTACT_EMAIL } from '../../../constants/website'
import './style'

const AboutContact = () => {
    const [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setDidMount(true)
    }, [])

    return (
        <>
            {'If you have an offer or opportunity for us to consider, please email '}
            {didMount && (
                <span
                    {...{
                        className: cx(
                            'AboutContact__email',
                            'Rancho'
                        )
                    }}
                >
                    {CONTACT_EMAIL.split('').map((character, index) => (
                        <___ {...{ key: index }} >
                            <span {...{ className: 'dNC' }}>
                                {String.fromCharCode(
                                    character.charCodeAt(0) + 1
                                )}
                            </span>
                            <span>{character}</span>
                        </___>
                    ))}
                </span>
            )}
            {`. We'll respond if it matches our interests. Thanks!`}
        </>
    )
}

export default memo(AboutContact)
