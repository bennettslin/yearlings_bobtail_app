* Mobile global annotation
* Change some overlap lines to crease or fold line.
* Slant direction order, allow for -1 yIndex?
* Make ceiling cubes disappear
* Allow for skew and perspective

# Redo straight or curved line.
* bennettOdinBuoy
* bennettOdinRickshaw
* berkeleyLamppost
* dispensers
* ivDrip
* monitors
* overpassSigns
* playgroundSlide
* sandbags
* signpost
* stageLights
* storageChest
* television
* trafficLight
* twinStreetlamp
* yellowTapedGrill
* dumpster
* lockerBank
* volkswagen

# Redo className organisation.
* Cardboards
* Cutouts

# Redo shape organisation.
* apartmentPlant
* recyclables
* storageBoxes
* wallSpeaker
* trashCan
* fireHydrant?

# Rotate in svg.
* bennettOdinOceanDepths
* wallSpeakerSide

# Order.
* Cutouts
* Flats
* Panels
* Cardboards
* Bubbles
* Backdrops
* Furnitures (include shadow)
* Puppets (include shadow)
* Fixtures (include shadow)
* Actors (include shadow)

# Photoshop work.

## File creation.
* Create temporary subfolder in ~todo.
* Move tif into subfolder.
* If necessary, double the size.
    * Shortcut is Option-Command-I. Just multiply width by 2.
* In tif, create enough layers for no shape to touch another.
    * Shortcut is Shift-Command-N.
* Create another layer for details that are open paths.

## Tracing.
* For detailed presences, scale image for better resolution.
* Make sure all lines connect!

## File organisation.
* Quick export each isolated layer to PNG in subfolder.
    * Custom shortcut is Command-Option-Alt-N.
* File names don't matter. They're temporary.
* Show all layers and save tif.

# Illustrator work.

## File creation.
* Create new file with instance name and png dimensions.
* Create new layer for each image.
    * Shortcut is Command-L.
* Place each numbered image in its numbered layer.
    * Shortcut is Shift-Command-P.
* Align all at once.

## Vectorisation.
* For each image, Image Trace > Line Art, then Expand.
* Smooth each object by joining corners.
    * Shortcut for Join tool is J.
* Join path for each object.
    * Shortcut is Command-J.
* In Layers settings, Flatten artwork.
* Temporarily colour each object. Aim for final colour, but don't sweat it.
* Send objects backward or forward as needed.
    * Shortcuts are Command-[ or ].

## File organisation.
* Move Illustrator file to actor or thing folder.
* Move subfolder with png files to ~completed folder.

## Svg work

## Create svg.
* Fit artboard to artwork.
    * Shortcut is Shift-Command-F.
* Make sure it's deselected, and Export as SVG.
    * Shortcut is Shift-Command-E.
    * Internal CSS, Layer Names, no minify, yes responsive.
* Undo fit arboard to artwork, and save.

## Convert svg to React component.
* Place in svg assets folder.
* Change component routing.
    * Import svg in Presences.
* Change scene config.
    * Correct x and y positions, if needed.
    * Scale it.
* Move styles to stylesheet in Presence folder.
    * Remove title.
    * Change class names.
    * Change for open paths.
    * Indent using Prettier.

* Log done in illustrator task folder!