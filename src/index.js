import {Utils} from './common/utils';

/**
 * Bootstrap script.
 *
 * It does import the main routine class to start the execution.
 * When a Provider is started, it's also bootstraped here. Since it's init as
 * a new fork, the script recover the arg in process.argv and do import the
 * correct Provider and calls the main method in the new fork.
 *
 */
let Application = Utils.dynamicClassImport(__dirname+'/app');
Application.main(process.argv);