# Todo.
* Move each scene to its own folder.
    * Relink tifs in scene files.
* TODO: Figure out how to organise tasks.

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
* Move tif inside folder.
* For each tif, create enough layers for no shape to touch another.
    * Shortcut is Shift-Command-N.
* Create another layer for details that are open paths.

## Tracing.
* For detailed presences, scale image for better resolution.
* Make sure all lines connect!

## Finish.
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
* Set stroke widths.
    * Boundary path is 2pt.
    * Other closed paths are 1pt.
    * Open paths are 0.5pt.
* Send objects backward or forward as needed.
    * Shortcuts are Command-[ or ].
* If not a single shape, create a boundary path.
    * Duplicate layer.
    * Pathfinder > Unite.
    * No fill.
    * Set stroke to 2pt.

## Finish.
* Move subfolder with png files and layered tif to ~completed folder.
* Move Illustrator file to actor or thing folder.

## Create svg.
* Fit artboard to artwork.
    * Shortcut is Shift-Command-F.
* TODO: Create the svg.
* Place svg in scene folder.
* Replace link to image with link to svg in scene file.
