import React, { Fragment as ___, memo, useEffect, useState } from 'react'
import cx from 'classnames'
import { BENNETT_EMAIL } from '../../../constants/website'
import './style'

const AboutContact = () => {
    const [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setDidMount(true)
    }, [])

    return (
        <>
            {'If you have an offer or opportunity for me to consider, please email '}
            {didMount && (
                <span
                    {...{
                        className: cx(
                            'AboutContact__email',
                            'Rancho'
                        )
                    }}
                >
                    {BENNETT_EMAIL.split('').map((character, index) => (
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
            {`. I'll respond if it matches my interests. Thanks!`}
        </>
    )
}

export default memo(AboutContact)
