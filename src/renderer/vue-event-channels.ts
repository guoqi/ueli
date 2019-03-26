export enum VueEventChannels {
    enterPress = "enter-press",
    tabPress = "tab-press",
    openSearchResultLocationKeyPress = "open-search-result-location-key-press",
    handleOpenLocation = "handle-open-location",
    mainWindowHasBeenHidden = "execution-succeeded",
    handleExecution = "handle-execution",
    handleAutoCompletion = "handle-auto-completion",
    mainWindowHasBeenShown = "main-window-has-been-shown",
    userInputChange = "user-input-change",
    userInputUpdated = "user-input-updated",
    userInputHasBeenReset = "user-input-has-been-reset",
    selectNextItem = "select-next-item",
    selectPreviousItem = "select-previous-item",
    searchResultsUpdated = "search-results-updated",
    configUpdated = "config-updated",
    notification = "push-notification",
    showSetting = "show-setting",
    loadingStarted = "loading-started",
    loadingCompleted = "loading-completed",
    appearanceOptionsUpdated = "user-styles-udpated",
    colorThemeOptionsUpdated = "color-theme-options-updated",
    openShortcutEditingModal = "add-new-shortcut-button-clicked",
    shortcutEdited = "shortcut-edited",
    openNewApplicationFolderModal = "open-new-application-folder-modal",
    applicationFolderAdded = "application-folder-added",
    openNewApplicationFileExtensionModal = "open-new-application-file-extension-modal",
    applicationFileExtensionAdded = "application-file-extension-added",
    languageUpdated = "language-updated",
    openWebSearchEditingModal = "open-websearch-editing-modal",
    websearchEngineEdited = "websearch-engine-edited",
    editColor = "edit-color",
    saveColor = "save-color",
}
