Ext.define("CrotusValet.view.Iframe", {
    extend: "Ext.Container",
    alias: "widget.iframeview",
    cls: 'backgroundcolor',
    config: {
        layout: {
            align: 'stretch',
            type: 'vbox'
        },
        cls: 'backgroundcolor',
        items: [
            {
                xtype:'container',
                //     cls:'indexbanner1',
                height: '100%',
                /* layout: {
                 type: 'hbox',
                 align: 'start',
                 pack: 'end'
                 },*/
                items:[
                    {
                        xtype:'container',
                        html: '<iframe height="100%" width="100%" src="http://www.sencha.com/"></iframe>'
                    }]

            }/*,
             {
             xtype:'container',
             height:'100%',
             cls:'indexbanner2',
             flex:3,
             items:[
             {
             xtype:'label',
             style:{
             'font-size':'180%',
             'font-family': 'monospace',
             'font-weight': 'bold',
             'color': 'rgb(202, 19, 92)',
             'line-height': '4'
             },
             docked: 'right',
             id:'lblResName',
             html: ''
             }
             ]
             }*/
        ]
    }

});



