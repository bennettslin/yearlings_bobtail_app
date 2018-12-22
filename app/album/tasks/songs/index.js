import tasks_00 from './00_Prologue'
import tasks_01 from './01_Didi'
import tasks_02 from './02_WillyTheCocoa'
import tasks_03 from './03_DearSaskia'
import tasks_04 from './04_Odin'
import tasks_05 from './05_PchelkasStarryJourney'
import tasks_06 from './06_AshWednesday'
import tasks_07 from './07_M'
import tasks_08 from './08_GoodNightSita'
import tasks_09 from './09_GrasshoppersLieHeavy'
import tasks_10 from './10_Constellations'
import tasks_11 from './11_LookBackInAnger'
import tasks_12 from './12_Garryowen'
import tasks_13 from './13_OnAGoldenCord'
import tasks_14 from './14_Kyon'
import tasks_15 from './15_UncannyValleyBoy'
import tasks_16 from './16_Cremated'
import tasks_17 from './17_VeganProclamation'
import tasks_18 from './18_My100000thDream'
import tasks_19 from './19_Epilogue'

import { addSongDrawingTasksToSongTasks } from './helper'

const allSongTasks = [
    tasks_00,
    tasks_01,
    tasks_02,
    tasks_03,
    tasks_04,
    tasks_05,
    tasks_06,
    tasks_07,
    tasks_08,
    tasks_09,
    tasks_10,
    tasks_11,
    tasks_12,
    tasks_13,
    tasks_14,
    tasks_15,
    tasks_16,
    tasks_17,
    tasks_18,
    tasks_19
]

// Add drawing tasks for each song.
addSongDrawingTasksToSongTasks(allSongTasks)

export const combinedSongTasks = [
    ...tasks_00,
    ...tasks_01,
    ...tasks_02,
    ...tasks_03,
    ...tasks_04,
    ...tasks_05,
    ...tasks_06,
    ...tasks_07,
    ...tasks_08,
    ...tasks_09,
    ...tasks_10,
    ...tasks_11,
    ...tasks_12,
    ...tasks_13,
    ...tasks_14,
    ...tasks_15,
    ...tasks_16,
    ...tasks_17,
    ...tasks_18,
    ...tasks_19
]

export default allSongTasks
