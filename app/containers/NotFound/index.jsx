import React, { useEffect } from 'react'
import cx from 'classnames'
import { Helmet } from 'react-helmet'
import NotFoundHeader from './Header'
import Texts from '../../components/Texts'
import { ALBUM_TITLE } from '../../constants/paths'
import { navigateToPathname } from '../../helpers/navigate'
import './style'

const NOT_FOUND_TEXT = 'Oops! Page not found.'

const NotFoundContainer = () => {
    useEffect(() => {
        logServe(
            'Not found container loaded.',
            {
                action: 'container',
                label: 'notFound',
            },
        )
        navigateToPathname('404')
    }, [])

    return (
        <>
            <div
                {...{
                    className: cx(
                        'NotFoundContainer',
                        'fontColour__title',
                        'fontSize__largeTitle',
                        'Rancho',
                        'abF',
                        'fCC',
                    ),
                }}
            >
                <Helmet>
                    <title>{`404 | ${ALBUM_TITLE}`}</title>
                    <meta
                        {...{
                            name: 'description',
                            content: NOT_FOUND_TEXT,
                        }}
                    />
                </Helmet>
                <Texts {...{ text: NOT_FOUND_TEXT }} />
            </div >
            <NotFoundHeader />
        </>
    )
}

export default NotFoundContainer
