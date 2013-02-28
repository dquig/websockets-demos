/*
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

Pre-release code in the Ext repository is intended for development purposes only and will
not always be stable. 

Use of pre-release code is permitted with your application at your own risk under standard
Ext license terms. Public redistribution is prohibited.

For early licensing, please contact us at licensing@sencha.com

Build date: 2013-02-13 19:36:35 (686c47f8f04c589246d9f000f87d2d6392c82af5)
*/
/**
 * This class implements the Ext.Direct event domain. All classes extending from
 * {@link Ext.direct.Provider} are included in this domain. The selectors are simply provider
 * id's or the wildcard "*" to match any provider.
 *
 * @protected
 */

Ext.define('Ext.app.domain.Direct', {
    extend: 'Ext.app.EventDomain',
    singleton: true,
    
    requires: [
        'Ext.direct.Provider'
    ],
    
    type: 'direct',
    idProperty: 'id',
    
    constructor: function() {
        var me = this;
        
        me.callParent();
        me.monitor(Ext.direct.Provider);
    }
});