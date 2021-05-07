/* eslint-disable import/no-unresolved */

// Get these based on whether in local or deployed environment.
import scene from 'data/scene'
import album from 'data/album'
import artup from 'data/artup'

export const getScene = () => scene
export const getAlbum = () => album
export const getArtup = () => artup
