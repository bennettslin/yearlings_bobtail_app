import React, { useEffect } from 'react'
import cx from 'classnames'
import { Helmet } from 'react-helmet'
import Texts from '../../components/Texts'
import { navigateToStandalonePage } from '../../helpers/navigate'
import { getTitleForAlbum } from '../../endpoint/album/title'
import './style'

const DEPRECATED_TEXT = 'Sorry, this browser is not supported.'

const DeprecatedContainer = () => {
    useEffect(() => {
        logServe(
            'Deprecated container loaded.',
            {
                action: 'container',
                label: 'deprecated',
            },
        )
        navigateToStandalonePage('deprecated')
    }, [])

    return (
        <div
            {...{
                className: cx(
                    'DeprecatedContainer',
                    'fontColour__title',
                    'fontSize__largeTitle',
                    'font__heading',
                    'abF',
                    'fCC',
                ),
            }}
        >
            <Helmet>
                <title>{`Deprecated | ${getTitleForAlbum()}`}</title>
                <meta
                    {...{
                        name: 'description',
                        content: DEPRECATED_TEXT,
                    }}
                />
            </Helmet>
            <Texts {...{ text: DEPRECATED_TEXT }} />
        </div >
    )
}

export default DeprecatedContainer
