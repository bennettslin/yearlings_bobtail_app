import React, { useEffect, useRef, useState, memo } from 'react'
import { useSelector } from 'react-redux'
import Iframe from '../../modules/Iframe'
import { mapSelectedWikiUrl } from '../../redux/wiki/selector'

const Wiki = () => {
    const
        selectedWikiUrl = useSelector(mapSelectedWikiUrl),
        [isLoading, setIsLoading] = useState(false),
        wikiElement = useRef()

    const onLoad = () => {
        setIsLoading(false)
    }

    useEffect(() => {
        if (wikiElement.current) {
            // This prevents iframe src from adding to browser history.
            wikiElement.current.contentWindow.location.replace(selectedWikiUrl)
        }

        if (selectedWikiUrl) {
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
                onLoad
            }}
        />
    )
}

export default memo(Wiki)
