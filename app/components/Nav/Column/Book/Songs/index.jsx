// Container for all song buttons in a book.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../modules/Svg'
import NavButtonIndexed from '../ButtonIndexed'

import {
    getSongsAndLoguesCount,
    getStartingIndexForBook
} from 'album/api/songs'

const navBookSongsPropTypes = {
    // From parent.
        bookIndex: PropTypes.number.isRequired
    },

    NavBookSongs = ({

        // From props.
        bookIndex,

        ...other
    }) => {

        const isFirstColumn = bookIndex === 0,

            rowReverse = !isFirstColumn,
            songsCount = getSongsAndLoguesCount(),

            beginArrayIndex = getStartingIndexForBook(bookIndex),
            endArrayIndex = isFirstColumn ? getStartingIndexForBook(bookIndex + 1) : songsCount - 1

        return (
            <div className={cx(
                'NavBookSongs',
                'NavBook'
            )}>
                <Svg
                    {...{
                        className: cx(
                            'NavRoad',
                            'abF'
                        )
                    }}
                >
                    <rect
                        className={cx(
                            'NavRoad__rect'
                        )}
                        {...{
                            x: 0,
                            y: 85,
                            width: 100,
                            height: 15
                        }}
                    />
                </Svg>
                {Array.from(Array(endArrayIndex - beginArrayIndex).keys()).map(currentIndex => {
                    const songIndex = rowReverse ? endArrayIndex - 1 - currentIndex : currentIndex + beginArrayIndex
                    return (
                        <NavButtonIndexed {...other}
                            {...{
                                key: currentIndex,
                                songIndex
                            }}
                        />
                    )
                })}
            </div>
        )
    }

NavBookSongs.propTypes = navBookSongsPropTypes

export default memo(NavBookSongs)
