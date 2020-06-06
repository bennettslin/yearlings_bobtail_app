/* eslint-disable import/no-unresolved */

// Get these based on whether in local or deployed environment.
import album from 'data/album'
import scene from 'data/scene'

export const getAlbum = () => album
export const getScene = () => scene
