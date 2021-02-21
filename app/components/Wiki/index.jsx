import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Iframe from '../../modules/Iframe'
import { mapSelectedWikiUrl } from '../../redux/wiki/selector'
import { logState } from '../../utils/logger'

const Wiki = () => {
    const
        wikiElement = useRef(),
        selectedWikiUrl = useSelector(mapSelectedWikiUrl),
        [isLoading, setIsLoading] = useState(false)

    const onLoad = () => {
        setIsLoading(false)
    }

    useEffect(() => {
        if (wikiElement.current) {
            // This prevents iframe src from adding to browser history.
            wikiElement.current.contentWindow.location.replace(selectedWikiUrl)
        }

        if (selectedWikiUrl) {
            logState('selectedWiki', selectedWikiUrl.split('wiki/')[1])
            setIsLoading(true)
        }
    }, [selectedWikiUrl])

    return (
        <Iframe
            {...{
                ref: wikiElement,
                className: 'Wiki',
                isShown: Boolean(selectedWikiUrl),
                isLoading,
                onLoad,
            }}
        />
    )
}

export default Wiki
