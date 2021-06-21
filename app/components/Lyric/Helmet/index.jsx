import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import getSongServerClientHoc from '../../../hocs/SongHoc'
import {
    getMetaDescription,
    getMetaTitle,
    getMetaTags,
} from './helper'

const LyricHelmet = ({ serverClientSongIndex }) => (
    <Helmet>
        <title>{getMetaTitle(serverClientSongIndex)}</title>
        <meta
            {...{
                name: 'description',
                content: getMetaDescription(serverClientSongIndex),
            }}
        />
        {getMetaTags(serverClientSongIndex).map(({
            name,
            content,
        }) => (
            <meta
                {...{
                    key: name,
                    name,
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
