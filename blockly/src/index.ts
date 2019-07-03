import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the blockly extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'blockly',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension blockly is activated!');
  }
};

export default extension;
