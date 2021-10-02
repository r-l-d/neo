import List      from '../../../src/list/Base.mjs';
import MainStore from './MainStore.mjs';
import Toolbar   from '../../../src/container/Toolbar.mjs';
import Viewport  from '../../../src/container/Viewport.mjs';

/**
 * @class Neo.examples.list.animate.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        className: 'Neo.examples.list.animate.MainContainer',
        autoMount: true,
        layout   : {ntype: 'vbox', align: 'stretch'},

        items: [{
            module: Toolbar,
            flex  : 'none',

            itemDefaults: {
                ntype: 'button',
                style: {marginRight: '.5em'}
            },

            items : [{
                ntype: 'label',
                text : 'Sort by'
            }, {
                text: 'Firstname'
            }, {
                text: 'Lastname'
            }]
        }, {
            module      : List,
            animate     : true,
            displayField: 'firstname',
            store       : MainStore
        }]
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};
