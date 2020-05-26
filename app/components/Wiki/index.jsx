// eslint-disable-next-line object-curly-newline
import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { SELECTED_WIKI_URL_SELECTOR } from '../../redux/session/selectors'
import Spinner from '../../modules/Spinner'

const Wiki = () => {
    const
        selectedWikiUrl = useSelector(SELECTED_WIKI_URL_SELECTOR),
        [isLoading, setIsLoading] = useState(false),
        wikiElement = useRef(),

        onLoad = () => {
            setIsLoading(false)
        }

    useEffect(() => {
        // This prevents iframe src from adding to browser history.
        wikiElement.current.contentWindow.location.replace(
            selectedWikiUrl
        )

        if (selectedWikiUrl) {
            setIsLoading(true)
        }
    }, [selectedWikiUrl])

    return (
        <div
            {...{
                className: cx(
                    'Wiki',
                    'iframeContainer'
                )
            }}
        >
            {isLoading &&
                <div
                    {...{
                        className: cx(
                            'iframeContainer__spinner',
                            'abF',
                            'fCC'
                        )
                    }}
                >
                    <Spinner />
                </div>
            }
            <iframe
                {...{
                    ref: wikiElement,
                    className: cx(
                        'iframeContainer__iframe',
                        !isLoading && 'iframeContainer__iframe__loaded'
                    ),
                    tabIndex: -1,
                    onLoad
                }}
            />
        </div>
    )
}

export default Wiki
