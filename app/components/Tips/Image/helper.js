import ImageDidi from './Images/01_Didi'

const TIP_IMAGE_MAP = {
    1: ImageDidi
}

export const getTipImage = songIndex => {
    return TIP_IMAGE_MAP[songIndex] || TIP_IMAGE_MAP[1]
}
