import React, { useEffect } from 'react'
import cx from 'classnames'
import { Helmet } from 'react-helmet'
import NotFoundHeader from './Header'
import Texts from '../../components/Texts'
import DeviceWrapper from '../../wrappers/DeviceWrapper'
import { getTitleForAlbum } from '../../endpoint/album/title'
import { navigateToStandalonePage } from '../../helpers/navigate'
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
        navigateToStandalonePage('404')
    }, [])

    return (
        <DeviceWrapper>
            <div
                {...{
                    className: cx(
                        'NotFoundContainer',
                        'fontColour__title',
                        'fontSize__largeTitle',
                        'font__heading',
                        'abF',
                        'fCC',
                    ),
                }}
            >
                <Helmet>
                    <title>{`404 | ${getTitleForAlbum()}`}</title>
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
        </DeviceWrapper>
    )
}

export default NotFoundContainer
