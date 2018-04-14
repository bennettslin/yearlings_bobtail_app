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

Toggles live with their sections
Rename DotsOverview
Distinguish DotSlider and Dots
Distinguish AudioSlider

Fix and simplify scrolling.

### Remaining

Access
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
    DotsOverview (do with overviewToggle, dotsToggle, and scoresTips)
    Main (/)
    Menu (/)
    OverviewLogue
    PopupOverlaid
    ScoresTips
Lyric (Remember lyric scroll.)
Nav (Need to consider last title margin, panels, and consolidate responsive)
Overview (Waiting on overview in phone and heightless.)
Players
Popup (Waiting on popup rework to finalise.)
Popups
    AnnotationPopup
    OverviewPopup
    ScorePopup
    TipsPopup
    TitlePopup
    WikiPopup
Score (/)
Slider
Stage (Just rename some children)
Text
Theatre (Just rename some children)
Tips (/)
Title (/)
Verse (Remember verse scroll, changed with underscore)
Wiki (/)

AccessManager
AppManager
DomManager (Redo classes, rearrange so that SwitchManager is first?)
EventManager
RoutingManager
SwitchManager

### Done
