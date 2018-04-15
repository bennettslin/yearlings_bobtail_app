# Refactor notes
First wave of components to refactor.
(Delete when no longer needed.)

Folder/file structure organised
    Single word is top level class and component

Less constants
    All renamed, or accounted for elsewhere in a comment.
    Prefixed with JS if needed, make sure consistent

Class names optimised for clarity
    Favour appending more style-specific classes

Consolidate styles for child with parent selector nesting

### Remaining

Access (take in array, handle not last child, refactor all clients as well.)
Admin
Annotation (Still largely undone.)
Audio (Waiting on button icons.)
Button
Carousel (Waiting on carousel rework to finalise. Revert dots when done.)
Dot
Dots
DynamicSvg
Icon
Live
    Menu (/)
    OverviewLogue
    PopupOverlaid
Lyric
LyricColumn (Waiting on access.)
Main
    LeftShelf (do with overviewToggle, dotsToggle, and scoresTips)
    DotsToggle
    OverviewToggle
Nav (Need to consider last title margin, panels, and consolidate responsive)
Overview (Waiting on overview in phone and heightless.)
Players (/)
Popup (Waiting on popup rework to finalise.)
Popups
    AnnotationPopup
    OverviewPopup
    ScorePopup
    TipsPopup
    TitlePopup
    WikiPopup
Score (/)
ScoresTips
Slider (Now just waiting on rework.)
Stage (Just rename some children)
Text
Theatre (Just rename some children)
Tips (/)
Title (/)
Verse
Wiki (/)

AccessManager
AppManager
RootManager (Redo classes, rearrange so that SwitchManager is first?)
EventManager
RoutingManager
SwitchManager

### Done
