import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette, MainAreaWidget
} from '@jupyterlab/apputils';

import {
  Widget
} from '@phosphor/widgets';

/**
 * Initialization data for the blockly extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'kogi',
  requires: [ICommandPalette],
  autoStart: true,
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('JupyterLab extension blockly is activated!');
    console.log('ICommandPalette', palette);
    

    // Empty content widget
    const content =  new Widget();
    // Added a widget inside a MainAreaWidget
    const widget = new MainAreaWidget({content});

    // Set widget properties
    widget.id = 'kogi-jupyterlab';
    widget.title.label = 'Block-based lense';
    widget.title.closable = true;

    // Set app commands
    const command :string = 'kogi:open';

    app.commands.addCommand(command, {
      label: 'Block-based Language Representation',
      execute: () => {
        // Attach the widget to the main area if it isn't there
        if (!widget.isAttached) {
          app.shell.add(widget, 'main');
        }
        // Activate the kogi widget
        app.shell.activateById(widget.id);
      } 
    });

    palette.addItem({command, category: 'Grammar lenses'});
  }
};

export default extension;
