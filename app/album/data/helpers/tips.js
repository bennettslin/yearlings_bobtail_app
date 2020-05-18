import albumpTips from '../tips'

export const addTip = (songIndex, song) => {
    const tip = albumpTips[songIndex]
    song.tip = tip
}
