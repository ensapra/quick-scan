<div align="center">

  <!-- Website -->
  <a href="https://ensapra.com">
    <img src="https://img.shields.io/badge/Website-Visit-1999?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Ensapra Website" />
  </a>

  <!-- Discord -->
  <a href="https://ensapra.com/links/discord">
    <img src="https://img.shields.io/badge/Discord-Join_Server-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Join Ensapra Discord" />
  </a>

  <!-- Patreon -->
  <a href="https://ensapra.com/links/patreon">
    <img src="https://img.shields.io/badge/Patreon-Support-FF424D?style=for-the-badge&logo=patreon&logoColor=white" alt="Support Ensapra on Patreon" />
  </a>
</div>

# Quick Scan

Quick Scan is a fork of [Showwaiyan/obsidian-scan-sketch](https://github.com/Showwaiyan/obsidian-scan-sketch), updated for Obsidian 1.13 and modified to be easier to work with, faster to use when adding scans, and more polished through multiple quality-of-life improvements.

It is an Obsidian plugin for turning photos of handwritten notes and documents into clean scans. The workflow is designed for both desktop and mobile, with a quick command that can be added directly to the mobile toolbar.

The original author, **Showwaiyan**, gave direct approval to maintain this fork as an independent plugin in [issue #5](https://github.com/Showwaiyan/obsidian-scan-sketch/issues/5):

> You’re welcome to keep your fork as an independent plugin. If you’d like to submit it to Obsidian, please make sure it has its own name and ID so it doesn’t clash with the original.

## Features

- **Quick Scan command**: Run `Quick Scan: Scan your document` from the command palette or add it to the mobile toolbar.
- **Camera and gallery input**: Open the native image picker to take a photo or choose an existing image.
- **Automatic page detection**: Detect the corners of a document before cropping.
- **Perspective correction**: Adjust four crop points manually and straighten the page.
- **Rotation**: Rotate the image clockwise or counter-clockwise in 90-degree steps.
- **Background removal**: Sample the original background color, adjust tolerance from 0 to 50, and export transparent areas.
- **Image filters**: Adjust brightness, contrast, and saturation with sliders or direct numeric entry. Enable black-and-white or color inversion.
- **Correct processing order**: Background removal is based on the original image colors, then the selected filters are applied.
- **HiDPI support**: Render and sample correctly on high-density displays.
- **Touch and mouse support**: Use crop handles and controls on desktop or mobile.
- **Transparent preview**: A checkerboard shows transparent pixels while editing.
- **Mobile-friendly controls**: Compact panels, touch-sized controls, and transparent tool tabs.
- **Export to PNG, JPG, or SVG**: PNG preserves transparency. SVG contains the final image in an SVG wrapper.
- **Obsidian integration**: Save to the vault's configured attachment location and insert the resulting embed into the source note.

## What has been changed

- **Reworked scanner editor**: A simpler editing layout with compact panels and controls designed for easy use on laptops and phones.
- **No more scrolling through the scanner**: The image preview and main controls fit together in the scanner window, keeping the editing workflow within reach.
- **Settings wired into the workflow**: Your chosen camera/gallery launch action, default export format, and toolbar icon size are applied when using the scanner.
- **Automatic camera or gallery launch**: Open the camera, open the gallery, or simply show the scanner when starting Quick Scan. Camera is the default.
- **Note context-menu actions**: Start scanning directly from a note's file menu or editor menu.
- **Source-note tracking**: Scans started from a note's context menu keep that note as their destination, even if you switch notes while scanning. The embed is inserted at the cursor when the source note is active in an editor; otherwise, it is appended to that note.
- **Obsidian attachment-location support**: Save scans to the vault's configured attachment location, with embed links generated through Obsidian's file manager.
- **One-click saving**: Save and embed the scan with the checkmark button, using an automatic filename and your configured export format.
- **Adjustable toolbar icon size**: Set icons from 32 to 72px independently of interface zoom, or reset them to the 40px default.
- **Color inversion**: Invert scan colors alongside the existing image filters.
- **Direct numeric filter controls**: Enter precise brightness, contrast, and saturation values as well as adjusting them with sliders.
- **Consistent background removal with filters**: Sample original image colors and remove the background before applying filters, so brightness changes and inversion do not change which original color is removed.
- **Background-removal state preserved between panels**: Keep the sampled color and tolerance while switching between editing tools, and use **Clear** to remove the effect.
- **Sidebar ribbon button**: Open Quick Scan from the command palette, a mobile toolbar shortcut, or a note's context menu instead.
- **Separate export dialog**: The checkmark button now saves the scan directly into the note.
- **Scanner-specific destination folders**: The destination-folder list and export dropdown have been replaced by Obsidian's attachment-location settings.
- **Custom filename entry**: Scan filenames are generated automatically when saving.
- **Per-export format selection**: Choose the default PNG, JPG, or SVG format in Quick Scan's settings instead of selecting it in an export dialog.
- **Export without a source note**: Saving now requires a note to receive the scan's embed.

## Installation

### BRAT

For testing or installing unreleased builds:

1. Install and enable [BRAT](https://github.com/TfTHacker/obsidian42-brat).
2. Add this repository in BRAT using its GitHub repository address.
3. Enable **Quick Scan** under **Settings > Community plugins**.

### Manual installation

1. Download a release containing `main.js`, `manifest.json`, and `styles.css`.
2. Create `.obsidian/plugins/quick-scan/` in your vault.
3. Copy those three files into the folder.
4. Reload Obsidian and enable **Quick Scan** under **Settings > Community plugins**.

Quick Scan is not desktop-only and is intended to work on mobile as well.

## Usage

### Fast workflow

1. **Open**: From your note, run **Quick Scan: Scan your document** or choose **Scan note** from its context menu.
2. **Capture**: Take a photo with the camera that opens automatically, or use the gallery button to choose an image.
3. **Adjust (optional)**: Crop, rotate, remove the background, or apply filters as needed.
4. **Save**: Tap the main toolbar's checkmark to save the attachment and embed it in your note.

The filename and attachment location are handled automatically. Set your preferred export format in **Settings > Quick Scan**; choose PNG to preserve transparency.

### Background removal

Background removal samples the color from the original image before filters are applied. This means enabling inversion or changing brightness will not change which pixels match the sampled background.

The selected color and tolerance remain available when switching between the background-removal and filter panels. Use **Clear** to remove the sample and restore the image without background removal.

### Opening from a note

Choose **Scan note** from a note's file menu or editor menu to keep that note as the destination even if you switch notes while scanning. If the source note is active in an editor when you save, the embed is inserted at the cursor; otherwise, it is appended to that note.

When opening from the command palette or mobile toolbar, the note active at save time receives the embed. Keep the intended note active, or use **Scan note** to select a specific destination before scanning.

## Settings

Open **Settings > Quick Scan** to configure:

- **Quick sketch action**: Automatically open the camera (default), open the gallery, or do nothing when starting the scanner.
- **Default export format**: PNG, JPG, or SVG.
- **Close scanner after export**: Currently shown in settings, but the scanner always closes after a successful save regardless of this toggle.
- **Toolbar icon size**: Adjust the scanner toolbar icon size independently of Obsidian's interface zoom.

## Development

### Requirements

- Node.js 16 or newer
- npm

### Setup

```bash
npm install
```

### Commands

```bash
npm run dev              # Watch and bundle source changes
npm run build            # Type-check and create the production bundle
npm test                 # Run the complete Vitest suite
npm run test:coverage    # Generate coverage output
npm run version          # Bump manifest and versions metadata
```

On Windows PowerShell, use `npm.cmd` if script execution blocks `npm`:

```powershell
npm.cmd test
npm.cmd run build
```

Run one test file while iterating:

```bash
npx vitest test/ImagePreview.test.ts
npx vitest test/ImageFilter.test.ts
npx vitest test/ImageBackgroundRemoval.test.ts
```

## Code Map

```text
main.ts                         Plugin commands, menus, and settings
UI/Modals/scannerModal.ts       Workflow coordinator and Obsidian modal
UI/Components/ImagePreview.ts   Stateful canvas, rendering, and processing order
UI/Components/FilterControls.ts Filter inputs and filter-panel UI
UI/Components/BackgroundRemovalControls.ts
                                Background-removal controls and sampled-color display
UI/Components/ExportControls.ts Export button, vault path, and note-link workflow
Services/ImageFilter.ts         Pixel filters
Services/ImageBackgroundRemoval.ts
                                Color sampling and transparency masking
Services/ImageTransform.ts      Rotation, crop transformation, and image conversion
Services/PageDetection.ts       Automatic document-corner detection
Services/CanvasRenderer.ts      Checkerboard, crop handles, and magnifier rendering
Services/ImageExport.ts         PNG, JPG, and SVG encoding
Services/VaultExport.ts         Vault file creation
test/                           Vitest tests and browser API mocks
styles.css                      Modal, toolbar, panel, and responsive styling
```

`Services/` is the preferred home for stateless image or geometry algorithms. `ImagePreview` owns the changing image state and combines those operations into the display and export pipelines. `main.js` is generated by esbuild; edit TypeScript source and run the build instead of editing the bundle directly.

## Processing Model

The image is rebuilt from its source whenever settings change:

```text
Original image
    -> background removal using the sampled original RGB color
    -> brightness / contrast / saturation / B&W / inversion
    -> display canvas or exported canvas
```

This order is important. New visual settings must be stored as state and applied during both redraw and export, or they will disappear when another setting causes a redraw.

The canvas uses CSS pixels for layout and device pixels for `ImageData`. When working with pointer positions or crop points, multiply CSS coordinates by `window.devicePixelRatio` before reading pixels; divide detected image coordinates by the same value before displaying them.

## Contributing

Keep changes focused and follow the existing conventions:

- Tabs, double quotes, and semicolons.
- Obsidian imports first, then local imports.
- Pure processing functions in `Services/`.
- Tests beside the behavior they cover.
- Run the narrowest relevant test first, followed by `npm run build`.
- Do not edit generated `main.js` by hand.

For a deeper architecture walkthrough, see [ARCHITECTURE.md](ARCHITECTURE.md).

## License

This project is licensed under the OBSD License. See [LICENSE](LICENSE).

## Credits

- [Obsidian API](https://github.com/obsidianmd/obsidian-api)
- [perspective-transform](https://github.com/jlouthan/perspective-transform)
