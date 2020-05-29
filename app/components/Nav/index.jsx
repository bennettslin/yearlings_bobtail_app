// Section for user to navigate between songs.
import React, { useEffect } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'

import { CAN_CAROUSEL_MOUNT_SELECTOR } from '../../redux/mount/selectors'
import { SHOW_SINGLE_NAV_BOOK_SELECTOR } from '../../redux/responsive/selectors'
import NavListener from '../../handlers/Nav/Listener'
import NavColumn from './Column'

const Nav = () => {
    const
        canCarouselMount = useSelector(CAN_CAROUSEL_MOUNT_SELECTOR),
        showSingleNavBook = useSelector(SHOW_SINGLE_NAV_BOOK_SELECTOR)

    useEffect(() => {
        logMount('Nav')
    }, [])

    return canCarouselMount && (
        <div
            className={cx(
                'Nav',
                showSingleNavBook ?
                    'Nav__showSingleBook' :
                    'Nav__showDoubleBook'
            )}
        >
            <NavListener />
            {/* Placeholder, has no other purpose. */}
            <div className="CarouselNavToggle__placeholder" />

            <div
                {...{
                    className: cx(
                        'NavColumnContainer'
                    )
                }}
            >
                <NavColumn {...{ bookIndex: 0 }} />
                <NavColumn {...{ bookIndex: 1 }} />
            </div>
        </div>
    )
}

export default Nav
