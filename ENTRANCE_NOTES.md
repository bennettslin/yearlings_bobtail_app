# Entrance Notes

## Window resize
* resize sets all to false
* isWindowResizeDone
    * timeout after resize sets to true

## Scene change
* song or scene change sets all to false
* didSceneExit
    * timeout after scene exit sets to true
* isSceneScrollComplete
    * for scene change, timeout after lyric scroll for verse sets to true
    * for song change, timeout after final song selection sets to true
* isSceneChangeDone
    * didSceneExit and isSceneScrollComplete in entrance reducer sets to true

## Song change
* song change sets all to false
* didCurtainsClose
    * timeout after curtains exit sets to true
* isStageDefault scene selector
    * true while didCurtainsClose is true and didStageReset is false
    * while true, cubes key and sky season and time are default
    * while true, presences are all null
* canStageReset scene selector
    * true once cubes key is default and isSongSelectComplete is true
* didStageReset
    * canStageReset sets to true
* isSongSelectComplete
    * timeout after final song selection sets to true
* isSongChangeDone
    * didCurtainsClose, didStageReset, and isSongChangeDone in entrance reducer sets to true