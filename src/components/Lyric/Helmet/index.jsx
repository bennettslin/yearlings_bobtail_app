import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import getSongServerClientHoc from '../../../hocs/SongHoc'
import {
    getMetaTitle,
    getMetaTags,
} from './helper'

const LyricHelmet = ({ serverClientSongIndex }) => (
    <Helmet>
        <title>{getMetaTitle(serverClientSongIndex)}</title>
        {getMetaTags(serverClientSongIndex).map(({
            name,
            property,
            content,
        }) => (
            <meta
                {...{
                    key: name || property,
                    ...name && { name },
                    ...property && { property },
                    content,
                }}
            />
        ))}
    </Helmet>
)

LyricHelmet.propTypes = {
    serverClientSongIndex: PropTypes.number.isRequired,
}

export default getSongServerClientHoc(LyricHelmet)
