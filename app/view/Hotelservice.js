Ext.define('CrotusValet.view.Hotelservice', {
    // extend: 'Ext.tab.Panel',
    //  extend: 'Ext.tab.Panel',

    extend: "Ext.Container",
    alias: "widget.hotelserviceview",
    config:{

        layout :{
            type:'vbox'
            /*align:'center',
            pack:'center'*/
        },
        modal:false,
        cls: 'backgroundcolor',
        styleHtmlContent:true,
        padding:'0',
        items:[
            {
                xtype:'container',
                height:'45px',
                cls:'introText',
                html:'<h5><span class="guestName">Concierge Services</span></h5>'
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                height: '100px',
                width: '100%',
                cls: 'logoContainer',
                layout: {
                    type: 'vbox',
                    pack:'center',
                    align: 'center'
                },
                items: [
                    {
                        xtype: "image",
                        cls: 'logo',
                        html: "<img src='resources/images/logo.png'>"
                    }
                ]
            },
            {
                docked: 'bottom',
                xtype: 'titlebar',
                height: '65px',
                width: '100%',
                cls: 'footerLinks',
                /*layout: {
                    type: 'vbox',
                    align:'center',
                    pack:'end'
                },*/
                //fullscreen:true,
                items: [
                    {
                        xtype: 'container',
                        cls: 'innerSubMenus',
                        layout: {
                            type: 'hbox',
                            align: 'start',
                            pack: 'start'
                        },
                        items: [
                            {
                                xtype: "button",
                                cls: 'footIcons homeIcon',
                                //iconCls: 'home',
                                //html: "<img src='resources/icons/icon11.png'>",
                                itemId: 'Hmaster'
                            }
                        ]
                    },
                    { xtype: "spacer" },
                    {
                        xtype: 'container',
                        cls: 'innerSubMenus',
                        layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: "image",
                                cls: 'footIcons',
                                html: "<img src='resources/icons/icon10.png'>",
                                itemId: 'congirence'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'innerSubMenus',
                        layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: "image",
                                cls: 'footIcons',
                                html: "<img src='resources/icons/icon11.png'>",
                                itemId: 'airlines'
                            }
                        ]
                    },
                    { xtype: "spacer" },
                    {
                        xtype: 'container',
                        cls: 'innerSubMenus',
                        layout: {
                            type: 'vbox',
                            align: 'end',
                            pack: 'end'
                        },
                        items: [
                            {
                                xtype: "button",
                                cls: 'footIcons subMenuIcon',
                                //iconCls: 'menuLines',
                                //html: "<img src='resources/icons/icon11.png'>",
                                itemId: 'airlines',
                                handler: function () {
                                    console.log('show');
                                    Ext.getCmp('secondarytitlebarHotel').show();
                                }
                            }
                        ]
                    }
                ]
            },
            {
                docked: 'bottom',
                xtype: 'titlebar',
                hidden: true,
                id:"secondarytitlebarHotel",
                height: '65px',
                width: '100%',
                cls: 'introText',
                //   cls: 'footerLinks',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                showAnimation: {
                    type: 'slideIn',
                    reveal: true,
                    direction:'up',
                    duration: 400
                },
                hideAnimation: {
                    type: 'slideOut',
                    reveal: true,
                    direction:'up',
                    duration: 400
                },
                items: [

                    {
                        xtype: 'button',
                        //       cls: 'tabbartop',
                        //      text: 'Concierge',
                        iconAlign:'left',
                        iconCls:'conciege',
                        cls: 'subMenu_btns',
                        itemId: 'btnConciergenew'

                    },
                    {
                        xtype: 'button',
                        //         cls: 'tabbartop',
                        //       text: 'Taxi',
                        iconAlign:'left',
                        iconCls:'taxi',
                        cls: 'subMenu_btns',
                        itemId: 'btnTaxi'

                    },
                    {
                        xtype: 'button',
                        iconAlign:'left',
                        iconCls:'housekeeping',
                        //            cls: 'tabbartop',
                        //          text: 'Housekeeping',
                        cls: 'subMenu_btns',
                        itemId: 'btnHouseKeeping'

                    },
                    {
                        xtype: 'button',
                        iconAlign:'left',
                        iconCls:'laundry',
                        //       cls: 'tabbartop',
                        //           text: 'Laundry',
                        cls: 'subMenu_btns',
                        itemId: 'btnLaundry'

                    }
                ]
            },



            {
                xtype: 'container',
                flex: 4,
                items: [{

                    xtype: 'dataview',
                    name: 'dataviewpack',
                    itemId: "dvHotelInfo",
                    // store: "Guests",
                    loadingText: "Loading...",
                    emptyText: "<div class=\"notes-list-empty-text\">Check Internet...</div>",
                    itemTpl: ['<div class="imgcss"> <img class="img" src=\"{ImgLogoUrl}\" width=100% height=100% /></div>',
                        '<div id="aligntext" class="imgText">{ImgName}</div>'
                    ].join(''),
                    height: "100%",
                    //          width:"100%",
                    styleHtmlContent: true,

                    layout: {
                        type: "fit"
                    },
                    inline: {
                        wrap: true
                    },
                    itemCls: 'dataCview-item'
                    //   itemCls: 'dataview-item'

                }]
            }
        ],
        listeners: [
            {
                delegate: "#dvHotelInfo",
                event: "itemtap",
                fn: "onDataViewTap"
            },
            {
                delegate: "#Hmaster",
                event: "tap",
                fn: "hMasterTap"
            },
            {
                delegate: "#btnTaxi",
                event: "tap",
                fn: "onbtnTaxiTap"
            },
            {
                delegate: "#btnConciergenew",
                event: "tap",
                fn: "onbtnConciergenewTap"
            },
            {
                delegate: "#btnHouseKeeping",
                event: "tap",
                fn: "onbtnHouseKeepingsTap"
            },
            {
                delegate: "#btnLaundry",
                event: "tap",
                fn: "onbtnLaundryTap"
            }
        ]
    },
    onDataViewTap: function (list, target, index, record, evt, options) {

        this.fireEvent("hotelViewCommand",list, target, index, record, evt, options);
    },
    hMasterTap:function(){
        this.fireEvent("hMasterCommand");
    },
    onbtnTaxiTap:function(){
        console.log('btntaxi');
        this.fireEvent("taxiCommand");
    },
    onbtnConciergenewTap:function(){
        this.fireEvent("conciergenewCommand");
    },
    onbtnHouseKeepingsTap:function(){
        this.fireEvent("housekeepingCommand");
    },
    onbtnLaundryTap:function(){
        this.fireEvent("laundryCommand");
    }
});




