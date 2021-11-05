/* eslint-disable import/no-unresolved */

// Get these based on whether in local or deployed environment.
import scene from 'data/scene'
import album from 'data/album'
import promo from 'data/promo'
import facePaths from 'data/facePaths'

export const getScene = () => scene
export const getAlbum = () => album
export const getPromo = () => promo
export const getFacePaths = () => facePaths
