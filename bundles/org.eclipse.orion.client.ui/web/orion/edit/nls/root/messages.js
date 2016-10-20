/*******************************************************************************
 * @license
 * Copyright (c) 2012, 2016 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 ******************************************************************************/
/*eslint-env browser, amd*/
define({
	"Editor": "Editor",
	"switchEditor": "Switch Editor",
	"Fetching": "Fetching: ${0}",
	"confirmUnsavedChanges": "There are unsaved changes. Do you still want to navigate away?",
	"searchFilesCommand": "Quick Search...",
	"searchFiles": "Quick Search in ${0}",
	"searchTerm": "Enter search term:",
	"unsavedChanges": "There are unsaved changes.",
	"unsavedAutoSaveChanges": "Please stay on the page until Auto Save is complete.",
	"Save": "Save",
	"Saved": "Saved",
	"Blame": "Blame",
	"BlameTooltip":"Show blame annotations",
	"Diff": "Diff",
	"DiffTooltip":"Show diff annotations",
	"saveOutOfSync": "Resource is out of sync with the server. Do you want to save it anyway?",
	"loadOutOfSync": "Resource is out of sync with the server. Do you want to load it anyway? This will overwrite your local changes.",
	"ReadingMetadata": "Reading metadata of ${0}",
	"ReadingMetadataError": "Cannot get metadata of ${0}",
	"Reading": "Reading ${0}",
	"ReloadWith": "Reload With",
	"Convert Line Delimiters": "Convert Line Delimiters",
	"Windows (CR/LF)": "Windows (CR/LF)",
	"Unix (LF)": "Unix (LF)",
	"ConversionCompleteCRLF": "Line delimiters have been converted to CR/LF",
	"ConversionCompleteLF": "Line delimiters have been converted to LF",
	"readonly": "Read Only.",
	"saveFile": "Save this file",
	"toggleZoomRuler": "Toggle Zoom Ruler",
	"gotoLine": "Go to Line...",
	"gotoLineTooltip": "Go to specified line number",
	"gotoLinePrompt": "Go to line:",
	"Undo": "Undo",
	"Redo": "Redo",
	"Cut": "Cut",
	"Copy": "Copy",
	"Paste": "Paste",
	"Find": "Find...",
	"noResponse": "No response from server. Check your internet connection and try again.",
	"noResponseTimeout": "No response from server (timed out after ${0} seconds). Check your internet connection and try again.",
	"savingFile": "Saving file ${0}",
	"running": "Running ${0}",
	"Saving..." : "Saving...",
	"View": "View",
	"SplitSinglePage": "Single Page",
	"SplitVertical": "Split Vertical",
	"SplitHorizontal": "Split Horizontal",
	"SplitPipInPip": "Picture in Picture",
	"SplitModeTooltip": "Change split editor mode",
	"SidePanel": "Side Panel",
	"SidePanelTooltip": "Choose what to show in the side panel.",
	"Slideout": "Slideout",
	"Actions": "Actions",
	"Navigator": "Navigator",
	"FolderNavigator": "Folder Navigator",
	"Project": "Project",
	"New": "New",
	"File": "File",
	"Edit": "Edit",
	"Tools": "Tools",
	"Add": "Add",
	"noActions": "There are no actions for the current selection.",
	"NoFile": "Use the ${0} to create new files and folders. Click a file to start coding.",
	"LocalEditorSettings": "Local Editor Settings",
	"EditorSettings": "Editor Settings",
	"NoProject": "${0} is not a project. To convert it to a project use ${1}.",
	"NoProjects": "There are no projects in your workspace. Use the ${0} menu to create projects.",
	"Disconnected": "${0} (disconnected)",
	"ChooseFS": "Choose Filesystem",
	"ChooseFSTooltip": "Choose the filesystem you want to view.",
	"FSTitle": "${0} (${1})",
	"Deploy": "Deploy",
	"Deploy As": "Deploy As",
	"Import": "Import",
	"Export": "Export",
	"OpenWith": "Open With",
	"OpenRelated": "Open Related",
	"OpenFolder": "Open Folder",
	"OpenRecent": "Open Recent",
	"OpenFolderTip": "Change the root folder",
	"Dependency": "Dependency",
	"UnnamedCommand": "Unnamed",
	"searchInFolder": "Folder Search...",
	"Global Search": "Global Search...",
	"ClickEditLabel": "Click to edit",
	"ProjectInfo": "Project Information",
	"Name": "Name",
	"Description": "Description",
	"Site": "Site",
	'projectsSectionTitle': 'Projects',
	'listingProjects': 'Listing projects...',
	'gettingWorkspaceInfo': 'Getting workspace information...',
	"showProblems": "Show Problems...",
	"showTooltip": "Show Tooltip",
	"showTooltipTooltip": "Shows the tooltip immediately based on the caret position",
	"emptyDeploymentInfoMessage": "Use the Launch Configurations dropdown to deploy this project",
	"Orion": "Orion",
	"OK": "Ok",
	"Format" : "Format Code",
	"FormatTooltip":"Format editor contents"
});