# TODO
Share configs for posters and albums.
See about sharing configs for couches and others.
Make cardboards stroke line different.
Rethink some dot category shapes?
Don't use cursor width to determine whether to render tracker in Filmstrip Cell?
Put mapWormholeLinkForDispatch in own dispatch dispatchWormhole

# FIXME
Ellipsis is too short when only right cards are shown.

# Album refactor

## Figure out what these need, build them from scratch
* annotations
    * TODO

* indexedVerses
    * lyric, centre, left, or right
        * delete anchor metadata?
    * verseAnnotationIndices
    * lastAnnotationIndex
    * delete verseIndex?
    * delete time?

* lyricUnits
    * TODO

* Need unitVerseIndicesList

# Can be completely separate
    * times
    * tips

* songs
    * lyrics
    * scenes
    * tips

# Annotation todos
Fix carousel annotation not hiding upon ear click (might need to reconsider making 0 the default, maybe pass -1 to api, then api passes null to component)

If single card, just pass it instead of array.
If just single card, don't have dot keys, and then get dot keys from annotation
If wiki or wormhole index is single, just pass it instead of array.
Make dot keys bit numbers
