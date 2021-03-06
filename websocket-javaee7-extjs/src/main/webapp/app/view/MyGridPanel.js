Ext.define('WebSocketDemo.view.MyGridPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mypanel',
    autoScroll: true,
    animCollapse: false,
    minWidth: 400,
    minHeight: 140,
    width: 800,
    height: 600,
    layout: {type: 'border', padding: 2},
    initComponent: function (config) {
        this.websocketGrid = Ext.create('WebSocketDemo.view.StockGrid', {
            title: 'WebSocket Stock Grid',
            name: 'myWebSocketGid',
            flex: 5,
            region: 'center',
            floatable: false
        });
        var sseStore = Ext.create('WebSocketDemo.store.StockStore', {});

        this.sseGrid = Ext.create('WebSocketDemo.view.StockGrid', {
            store: sseStore,
            name: 'mySseGrid',
            flex: 5,
            region: 'south',
            title: 'Server-Sent Events Stock Grid',
            html: 'server-sent events (EventSource) demo grid',
            collapsed: true,
            floatable: false,
            collapsible: true
        });

        this.items = [
            this.websocketGrid,
            this.sseGrid
        ];

        this.callParent(config);
    },

    defaults: {
        collapsible: true,
        split: true
    },

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'right',
            items: [
                {text: 'Open WebSocket connection', action: 'open_socket'},
                {text: 'Close WebSocket connection', action: 'close_socket'},
                '-',
                {text: 'Subscribe to Server-Sent Events', action: 'sse_subscribe'},
                {text: 'Unubscribe to Server-Sent Events', action: 'sse_unsubscribe'},
                '-',
                {text: 'Http GET-request', action: 'doRestCall'},
                {
                    xtype: 'textfield',
                    name: 'ticker',
                    width: 100,
                    emptyText: 'Ticker...',
                    enableKeyEvents: true,
                    style: 'text-align: left'
                }
            ]
        }
    ]
});
