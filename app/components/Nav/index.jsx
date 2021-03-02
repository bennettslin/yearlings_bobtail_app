// Section for user to navigate between songs.
import React, { useEffect } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import NavListener from '../../handlers/Nav/Listener'
import NavColumn from './Column'
import { mapShowSingleNavBook } from '../../redux/nav/selector'
import { mapCanCarouselNavMount } from '../../redux/viewport/selector'
import './style'

const Nav = () => {
    const
        canCarouselNavMount = useSelector(mapCanCarouselNavMount),
        showSingleNavBook = useSelector(mapShowSingleNavBook)

    useEffect(() => {
        logMount('Nav')
    }, [])

    return canCarouselNavMount && (
        <div
            className={cx(
                'Nav',
                showSingleNavBook ?
                    'Nav__showSingleBook' :
                    'Nav__showDoubleBook',
            )}
        >
            <NavListener />
            {/* Placeholder, has no other purpose. */}
            <div className="CarouselNavToggle__placeholder" />

            <div
                {...{
                    className: cx(
                        'NavColumnContainer',
                    ),
                }}
            >
                <NavColumn {...{ bookIndex: 0 }} />
                <NavColumn {...{ bookIndex: 1 }} />
            </div>
        </div>
    )
}

export default Nav
