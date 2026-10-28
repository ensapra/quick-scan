import { App, Plugin, PluginSettingTab, TFile } from "obsidian";
import type { ExportFormat } from "./Services/ImageExport";
import { ScannerModal } from "./UI/Modals/scannerModal";

interface HandwrittenScannerSettings {
	exportDefaultFormat: ExportFormat;
	closeAfterExport: boolean;
	toolbarIconSize: number;
	quickSketchAction: "none" | "gallery" | "camera";
}

const DEFAULT_TOOLBAR_ICON_SIZE = 40;

const DEFAULT_SETTINGS: HandwrittenScannerSettings = {
	exportDefaultFormat: "png",
	closeAfterExport: true,
	toolbarIconSize: DEFAULT_TOOLBAR_ICON_SIZE,
	quickSketchAction: "camera",
};

export default class HandWrittenPlugin extends Plugin {
	settings: HandwrittenScannerSettings;

	async onload() {
		await this.loadSettings();

		this.addCommand({
			id: "open-sketch-scanner",
			name: "Scan your document",
			icon: "scan",
			callback: () => void this.openScanner(),
		});

		this.registerEvent(this.app.workspace.on("file-menu", (menu, file) => {
			if (!(file instanceof TFile)) return;

			menu.addItem((item) =>
				item
					.setTitle("Scan note")
					.setIcon("scan")
					.onClick(() => void this.openScanner(file.path)),
			);
		}));

		this.registerEvent(this.app.workspace.on("editor-menu", (menu, _editor, info) => {
			const file = info.file;
			if (!file) return;

			menu.addItem((item) =>
				item
					.setTitle("Scan note")
					.setIcon("scan")
					.onClick(() => void this.openScanner(file.path)),
			);
		}));

		this.addSettingTab(new HandwrittenScannerSettingTab(this.app, this));
	}

	private openScanner(sourcePath?: string): void {
		new ScannerModal(this.app, this, sourcePath, this.settings.quickSketchAction).open();
	}

	async loadSettings() {
		const savedSettings = await this.loadData() as Partial<HandwrittenScannerSettings> | null;

		this.settings = {
			...DEFAULT_SETTINGS,
			...savedSettings,
		};
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class HandwrittenScannerSettingTab extends PluginSettingTab {
	plugin: HandWrittenPlugin;

	constructor(app: App, plugin: HandWrittenPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	getSettingDefinitions() {
		return [
			{
				name: "Quick sketch action",
				desc: "Choose what opens automatically when starting Quick Scan",
				control: {
					type: "dropdown",
					key: "quickSketchAction",
					options: {
						none: "Do nothing",
						gallery: "Open gallery",
						camera: "Open camera",
					},
				},
			},
			{
				name: "Toolbar icon size",
				desc: "Size of the scanner toolbar icons, independent of Obsidian's interface zoom",
				control: {
					type: "slider",
					key: "toolbarIconSize",
					min: 32,
					max: 72,
					step: 4,
				},
			},
			{
				name: "Default export format",
				desc: "Default file format for exporting scanned images",
				control: {
					type: "dropdown",
					key: "exportDefaultFormat",
					options: { png: "PNG", jpg: "JPG", svg: "SVG" },
				},
			},
			{
				name: "Close scanner after export",
				desc: "Automatically close the scanner window after successfully exporting an image",
				control: { type: "toggle", key: "closeAfterExport" },
			},
		];
	}

}
