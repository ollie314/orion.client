/*******************************************************************************
 * Copyright (c) 2013 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 * Contributors: IBM Corporation - initial API and implementation
 ******************************************************************************/
 
/*global define document*/
define(['orion/markdownView', 'orion/webui/littlelib', 'orion/projectClient', 'orion/projectCommands', 'orion/commandRegistry'],
	function(mMarkdownView, lib, mProjectClient, mProjectCommands, mCommandRegistry) { //$NON-NLS-0$
	function ProjectEditor(options){
		this.serviceRegistry = options.serviceRegistry;
		this.fileClient = options.fileClient;
		this.progress = options.progress;
		this.projectClient = new mProjectClient.ProjectClient(this.serviceRegistry, this.fileClient);
		this.commandService = new mCommandRegistry.CommandRegistry({ });
		this._node = null;
		this.markdownView = new mMarkdownView.MarkdownView({
			fileClient : this.fileClient,
			progress : this.progress
		});
		this.redmeCommandsScope = "readmeActions";
		this.createCommands();
	}
	ProjectEditor.prototype = {
		createCommands: function(){
			mProjectCommands.createProjectCommands(this.serviceRegistry, this.commandService, this, this.fileClient, this.projectClient);
			this.commandService.registerCommandContribution(this.redmeCommandsScope, "orion.project.edit.readme", 1); 
			this.commandService.registerCommandContribution(this.redmeCommandsScope, "orion.project.create.readme", 2); 
		},
		changedItem: function(){
			this.fileClient.read(this.parentFolder.Location, true).then(function(metadata){
				lib.empty(this.node);
				this.displayContents(this.node, metadata);
			}.bind(this));
		},
		display: function(node, projectData){
			this.node = node;
			this.node.className = "orionProject";				
			this.projectData = projectData;
			var span = document.createElement("span");
			this.node.appendChild(span);
			this.renderProjectInfo(span);
			span = document.createElement("span");
			this.node.appendChild(span);
			this.renderReadmeMd(span);
		},
		displayContents: function(node, parentFolder){
			this.parentFolder = parentFolder;
			this.projectClient.readProject(parentFolder).then(function(projectData){
				this.display.bind(this)(node, projectData);
			}.bind(this));
		},
		renderProjectInfo: function(parent){
			var table = document.createElement("table");
			var tr = document.createElement("tr");
			table.appendChild(tr);
			var td = document.createElement("th");
			td.colSpan = 2;
			td.appendChild(document.createTextNode("Project Information"));
			tr.appendChild(td);

			tr = document.createElement("tr");
			table.appendChild(tr);
			td = document.createElement("td");
			var b = document.createElement("b");
			b.appendChild(document.createTextNode("Name"));
			td.appendChild(b);
			tr.appendChild(td);
			td = document.createElement("td");
			td.appendChild(document.createTextNode(this.projectData.Name));
			tr.appendChild(td);
			table.appendChild(tr);
			
			tr = document.createElement("tr");
			table.appendChild(tr);
			td = document.createElement("td");
			b = document.createElement("b");
			b.appendChild(document.createTextNode("Description"));
			td.appendChild(b);
			tr.appendChild(td);
			td = document.createElement("td");
			td.appendChild(document.createTextNode(this.projectData.Description ? this.projectData.Description: ""));
			tr.appendChild(td);
			table.appendChild(tr);
			
			tr = document.createElement("tr");
			table.appendChild(tr);
			td = document.createElement("td");
			b = document.createElement("b");
			b.appendChild(document.createTextNode("Website"));
			td.appendChild(b);
			tr.appendChild(td);
			td = document.createElement("td");
			var a = document.createElement("a");
			a.href = this.projectData.Url;
			a.appendChild(document.createTextNode(this.projectData.Url ? this.projectData.Url : ""));
			td.appendChild(a);
			tr.appendChild(td);
			table.appendChild(tr);
			
			parent.appendChild(table);
		},
		renderReadmeMd: function(parent){
			
			var that = this;
			
			var table = document.createElement("table");
			var tr = document.createElement("tr");
			table.appendChild(tr);
			var td = document.createElement("th");
			td.appendChild(document.createTextNode("readme.md"));
			var actionsSpan = document.createElement("span");
			actionsSpan.id = this.redmeCommandsScope;
			actionsSpan.style.cssFloat = "right";
			actionsSpan.style.textTransform = "none";
			td.appendChild(actionsSpan);
			tr.appendChild(td);

			tr = document.createElement("tr");
			table.appendChild(tr);
			td = document.createElement("td");
			//README.MD
			
			function displayReadmeFromChildren(children){
				var div;
				for(var i=0; i<children.length; i++){
					var child = children[i];
					if (!child.Directory && child.Name && child.Name.toLowerCase() === "readme.md") { //$NON-NLS-0$
						div = document.createElement("div");
						div.style.overflow = "auto";
						div.style.maxHeight = "400px";
						this.fileClient.read(child.Location).then(function(markdown){
							this.markdownView.display(div, markdown);
							this.commandService.renderCommands(this.redmeCommandsScope, actionsSpan, child, this, "tool");
						}.bind(this));
						td.appendChild(div);
						break;
					}
				}
				if(!div){
					td.appendChild(document.createTextNode("No readme in this project"));
					this.parentFolder.Project = this.projectData;
					this.commandService.renderCommands(this.redmeCommandsScope, actionsSpan, this.parentFolder, this, "tool");
				}
			}
			
			if(this.parentFolder.Children){
				displayReadmeFromChildren.call(this, this.parentFolder.Children);
			} else if(this.parentFolder.ChildrenLocation){
				this.progress.progress(this.fileClient.fetchChildren(this.parentFolder.ChildrenLocation), "Fetching children of " + this.parentFolder.Name).then( 
					displayReadmeFromChildren.bind(that)
				);
			}
			
			tr.appendChild(td);
			
			parent.appendChild(table);
		}
	};
	
	return {ProjectEditor: ProjectEditor};
});