Ext.define('CrotusValet.view.GuestInfo', {
    extend: "Ext.Container",
    alias: "widget.guestinfoview",
    config:{

        layout : 'vbox',
        cls: 'backgroundcolor',
        styleHtmlContent:true,
        padding:'0 0 0 0',
        items:[
            {
                xtype:'container',
                height:'45px',
                cls:'introText',
                html:'<h5><span class="guestName">Hotel Information</span></h5>'
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
                        cls: 'logo logoInnerPages',
                        html: "<img src='resources/images/logo.png'>"
                    }
                ]
            },

            {
                docked: 'bottom',
                zIndex: 888,
                xtype: 'titlebar',
                height: '65px',
                width: '100%',
                cls: 'footerLinks',
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
                                    Ext.getCmp('secondarytitlebar').show();
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
                id:"secondarytitlebar",
                zIndex: 999,
                height: '65px',
                width: '100%',
                cls: 'introText',
                //   cls: 'footerLinks',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                showAnimation: {
                    type: 'fadeIn'
               //     reveal: true,
              //      direction:'up',
              //      duration: 400
                },
                hideAnimation: {
                    type: 'fadeOut'
                //    reveal: true,
                //    direction:'up',
                //    duration: 400
                },
                items: [

                    {
                        xtype: 'button',
                        //    height: '85px',
                        //       text: 'Information',
                        iconAlign:'left',
                        iconCls:'inforamtion',
                        id: 'infobtn',
                        cls: 'subMenu_btns',
                        itemId: 'btnInformation'


                    },
                    {
                        xtype: 'button',
                        //      height: '85px',
                        iconAlign:'left',
                        iconCls:'facilities',
                        //     text: 'Faclities',
                        cls: 'subMenu_btns',
                        itemId: 'btnFaclities'

                    },
                    {
                        xtype: 'button',
                        //      height: '85px',
                        iconAlign:'left',
                        iconCls:'map',
                        //     text: 'Maps',
                        cls: 'subMenu_btns',
                        itemId: 'btnMaps'

                    },
                    {
                        xtype: 'button',
                        //     height: '85px',
                        iconAlign:'left',
                        iconCls:'room_types',
                        //      text: 'Room Type',
                        cls: 'subMenu_btns',
                        itemId: 'btnRoomType'

                    }
                ]
            },
            {
                xtype: 'container',
                //    hidden: true,
                //    modal: true,
                id:'guestcont',
                flex: 4,
                items: [{

                    xtype: 'dataview',
                    name: 'dataviewpack',
                    itemId: "dvGuestInfo",
                    // store: "Guests",
                    loadingText: "Loading...",
                    emptyText: "<div class=\"notes-list-empty-text\">Check Internet...</div>",
                    itemTpl: ['<div class="imgcss"> <img class="img" src=\"{DataLogoUrl}\" width=100% height=100% /></div>',
                        '<div id="aligntext" class="imgText">{DataName}</div>'
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

                }]
            }
        ],
        listeners: [
            {
                delegate: "#dvGuestInfo",
                event: "itemtap",
                fn: "onDataViewTap"
            },
            {
                delegate: "#Hmaster",
                event: "tap",
                fn: "hMasterTap"
            },
            {
                delegate: "#btnMostUsed",
                event: "tap",
                fn: "onbtnMostUsedTap"
            },
            {
                delegate: "#btnInformation",
                event: "tap",
                fn: "onbtnInformationTap"
            },
            {
                delegate: "#btnFaclities",
                event: "tap",
                fn: "onbtnFaclitiesTap"
            },
            {
                delegate: "#btnMaps",
                event: "tap",
                fn: "onbtnMapsTap"
            },
            {
                delegate: "#btnRoomType",
                event: "tap",
                fn: "onbtnRoomTypeTap"
            },
            {
                delegate: "#btnConcierge",
                event: "tap",
                fn: "onbtnConciergeTap"
            }
        ]
    },
    onDataViewTap: function (list, target, index, record, evt, options) {
        this.fireEvent("dataViewCommand", list, target, index, record, evt, options);
    },
    hMasterTap:function(){
        this.fireEvent("hMasterCommand");
    },
    onbtnMostUsedTap:function(){
        this.fireEvent("mostUsedCommand");
    },
    onbtnFaclitiesTap:function(){
        this.fireEvent("faclitiesCommand");
    },
    onbtnMapsTap:function(){
        this.fireEvent("mapCommand");
    },
    onbtnInformationTap:function(){
        this.fireEvent("informationCommand");
    },
    onbtnRoomTypeTap:function(){
        this.fireEvent("roomTypeCommand");
    },
    onbtnConciergeTap: function () {
        this.fireEvent("conciergeCommand");
    }
});














//////////////////////////////////////////////////////////////////
//Ext.define('CrotusValet.view.GuestInfo', {
//    // extend: 'Ext.tab.Panel',
//    //  extend: 'Ext.tab.Panel',
//
//    extend: "Ext.Container",
//    alias: "widget.guestinfoview",
//    config:{
//
//        layout : 'vbox',
//        cls: 'backgroundcolor',
//        styleHtmlContent:true,
//        padding:'5 5 0 5',
//        items:[
//
//
//            {
//                xtype: 'container',
//                //      cls: 'tabbartop',
//                //      cls: 'subMenu',
//                // flex: 2,
//                layout: {
//                    type: 'vbox'
//                    // align: 'end'
//                },
//                width:120,
//
//                items: [
//                    {
//                        xtype: 'segmentedbutton',
//                        allowDepress: false,
//                        items: [{
//                            //      text: 'Show',
//                            iconCls: 'list',
//                            cls: 'menuLines',
//                            id:'gshow',
//                            handler: function() {
//                                console.log('show');
//                                Ext.getCmp('gcontainertab').show();
//                                Ext.getCmp('gshow').hide();
//                            //    Ext.getCmp('guestcont').hide();
//                                Ext.getCmp('ghide').show();
//                                /* Ext.Viewport.add(Ext.ComponentQuery.query('#popupMenu')[0]);
//                                 Ext.ComponentQuery.query('#popupMenu')[0].show();*/
//                            }
//                        },{
//                            //        text: 'Hide',
//                            iconCls: 'list',
//                            id:'ghide',
//                            cls: 'menuLines',
//                            hidden: true,
//                            handler: function() {
//                                Ext.getCmp('ghide').hide();
//                                Ext.getCmp('gshow').show();
//                            //    Ext.getCmp('guestcont').show();
//                                Ext.getCmp('gcontainertab').hide();
//
//                                //    Ext.ComponentQuery.query('#popupMenu')[0].hide();
//                            }
//                        }]
//
//                    }
//                ]
//            },
//
//            /*
//                        {
//                            xtype: 'container',
//                            //    html:'<div class="slides"> <ul> <!-- slides --> <li><img src="resources/images/pic1.jpg" alt="image01" />   <div>Promo text #1</div> </li>  <li><img src="resources/images/pic2.jpg" alt="image02" />  <div>Promo text #2</div></li>    <li><img src="resources/images/pic3.jpg" alt="image03" />  <div>Promo text #3</div>  </li> <li><img src="resources/images/pic4.jpg" alt="image04" /> <div>Promo text #4</div> </li></ul></div>',
//                            height: '30%',
//                            //     cls:'banner',
//                            // html:'sadfsadsadsadsadsadsasadsadsadsad'
//                            //html:'<div class="slides" > <ul> <!-- slides --> <li><img  src="resources/images/pic1.jpg" alt="image01" />   <div>Guest Information</div></br><div style="color:#333; font-size:12px; margin-left:280px">This app provides you a scope to know and utilise the facilities in our resort.</div> </li>  <li><img  src="resources/images/pic2.jpg" alt="image02" />  <div>Room Service</div></br><div style="color:#333; font-size:12px; margin-left:280px">Our resort is located in a fantastic environment nearer to sea.</div></li>    <li><img  src="resources/images/pic3.jpg" alt="image03" />  <div>Book Now</div></br> <div style="color:#333; font-size:12px; margin-left:280px">Very attractive and competitive rate structure have been followed to suit your budget for each apartment type.</div> </li> <li><img  src="resources/images/pic4.jpg" alt="image04" /> <div>About Us</div></br><div style="color:#333; font-size:12px; margin-left:280px">Resort will have security service always round the clock.</div></li></ul></div>',
//                            //     html:'<div class="slides" > <ul> <!-- slides --> <li><img  src="resources/images/pic1.jpg" alt="image01" />   <div>Guest Information</div></br><div style="color:#333; font-size:12px; margin-left:280px">This app provides you a scope to know and utilise the facilities in our resort.</div> </li>  <li><img  src="resources/images/pic2.jpg" alt="image02" />  <div>Room Service</div></br><div style="color:#333; font-size:12px; margin-left:280px">Our resort is located in a fantastic environment nearer to sea.</div></li>    <li><img  src="resources/images/pic3.jpg" alt="image03" />  <div>Book Now</div></br> <div style="color:#333; font-size:12px; margin-left:280px">Very attractive and competitive rate structure have been followed to suit your budget for each apartment type.</div> </li> <li><img  src="resources/images/pic4.jpg" alt="image04" /> <div>About Us</div></br><div style="color:#333; font-size:12px; margin-left:280px">Resort will have security service always round the clock.</div></li></ul></div>',
//
//                            layout: {
//                                type: 'hbox',
//                                align: 'end',
//                                pack: 'end'
//                            },
//                            //   flex: 1,
//                            items:[
//                                {
//                                    xtype:'label',
//                                    //     docked:'left',
//                                    //    cls:'imgSlide',
//                                    //   html:'gkuj'
//                                    html:'<div class="slides" > <ul> <!-- slides --> <li><img  src="resources/images/pic1.jpg" alt="image01" />   <div><b>Guest Information</b></div></br><div style="color:#333; font-size:12px; margin-left:280px">This app provides you a scope to know and utilise the facilities in our resort.</div> </li>  <li><img  src="resources/images/pic2.jpg" alt="image02" />  <div><b>Room Service</b></div></br><div style="color:#333; font-size:12px; margin-left:280px">Our resort is located in a fantastic environment nearer to sea.</div></li>    <li><img  src="resources/images/pic3.jpg" alt="image03" />  <div><b>Book Now</b></div></br> <div style="color:#333; font-size:12px; margin-left:280px">Very attractive to  your budget for each apartment type.</div> </li> <li><img  src="resources/images/pic4.jpg" alt="image04" /> <div><b>About Us</b></div></br><div style="color:#333; font-size:12px; margin-left:280px">Resort will have security service always round the clock.</div></li></ul></div>'
//                                },
//                                {
//                                    xtype: 'button',
//                                    cls: 'conceirgeBtn',
//                                    text: 'CONCIERGE',
//                                    pressedCls: 'btnconc',
//                                    iconCls: 'mobile',
//                                    itemId: 'btnConcierge'
//
//                                }
//                            ]
//                        },*/
//            {
//                xtype: 'container',
//                hidden: true,
//              /*  modal: true,
//                hideOnMaskTap: true,*/
//                height:'100%',
//              /*  style:{
//                    'position': 'absolute',
//                    'z-index': '999',
//                    'height': '320px',
//                    'width': '120px',
//                    'background': 'antiquewhite'
//                },*/
//                showAnimation: {
//                    type: 'slideIn',
//                    reveal: true,
//                    direction:'right',
//                    duration: 400
//                },
//                hideAnimation: {
//                    type: 'slideOut',
//                    reveal: true,
//                    direction:'left',
//                    duration: 400
//                },
//                id:'gcontainertab',
//                cls: 'subMenu',
//                // flex: 2,
//                layout: {
//                    type: 'vbox'
//                    // align: 'end'
//                },
//                width:"40%",
//
//              /*  id: 'cont',
//                dock: 'right',
//         //       cls: 'subMenu',
//                // flex: 2,
//                layout: {
//                    type: 'vbox',
//                   align: 'start',
//                    pack: 'end'
//                },
//              //  width:320,*/
//                items: [
//
//         /*           {
//                        xtype: 'button',
//                        iconCls: 'list',
//                        iconMask: true,
//                        modal: true,
//                        hideOnMaskTap: true,
//                        scope: this,
//                        listeners: {
//                            tap: function () {
//                            var menu = Ext.create('Ext.Menu', {
//                                items: [
//                                    {
//                                        xtype: 'button',
//                                        text: 'Information',
//                                        id: 'infobtn',
//                                        cls: 'subMenu_btns',
//                                        itemId: 'btnInformation',
//                                        scope: this,
//                                        handler: function () {
//                                            Ext.Viewport.hideMenu('left');
//                                        }
//                                    },
//                                    {
//                                        xtype: 'button',
//                                        text: 'Faclities',
//                                        cls: 'subMenu_btns',
//                                        itemId: 'btnFaclities',
//                                        handler: function () {
//                                            Ext.Viewport.hideMenu('left');
//                                        }
//                                    },
//                                    {
//                                        xtype: 'button',
//                                        text: 'Maps',
//                                        cls: 'subMenu_btns',
//                                        itemId: 'btnMaps',
//                                        listeners: {
//                                            tap: function () {
//
//                                                var pan = Ext.getCmp('cont');
//                                                pan.destroy();
//                                                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
//                                                Ext.Viewport.setActiveItem({
//                                                    xtype: 'settingview'
//                                                });
//                                                console.log('map');
//                                                Ext.Viewport.hideMenu('left');
//                                            }
//                                        }
//                                        *//*  handler: function() {
//                                         Ext.Viewport.hideMenu('left');
//                                         }*//*
//                                    },
//                                    {
//                                        xtype: 'button',
//                                        text: 'Room Type',
//                                        cls: 'subMenu_btns',
//                                        itemId: 'btnRoomType',
//                                        handler: function () {
//                                            Ext.Viewport.hideMenu('left');
//
//                                        }
//                                    }
//                                ]
//                            });
//
//                            Ext.Viewport.setMenu(menu, {
//                                side: 'left',
//                                reveal: true
//                            });
//
//                            Ext.Viewport.showMenu('left');
//
//                            //       Ext.Viewport.toggleMenu('left');
//                        }
//                    }
//                    }*/
//
//                    /* {
//                     xtype: 'button',
//                     text: 'Most Used',
//                     cls: 'subMenu_btns',
//                     itemId: 'btnMostUsed'
//                     },*/
//
//                   /* {
//                        xtype: 'image',
//                        dock: 'left',
//                        cls:'mgmlogo',
//                        html: '<p>Information</p>',
//                     //  cls: 'subMenu_btns',
//                        itemId: 'btnFaclities',
//                        handler:function(){
//                            Ext.getCmp('gcontainertab').hide();
//                            Ext.getCmp('ghide').hide();
//                            Ext.getCmp('gshow').show();
//                        },
//                        src: 'resources/images/newmgmlogo.jpg'
//                        //   margin: '5 5 0 5'
//                    },*/
//                    {
//                        xtype: 'button',
//                    //    height: '85px',
//                        text: 'Information',
//                        iconAlign:'left',
//                        iconCls:'inforamtion',
//                        id: 'infobtn',
//                        cls: 'subMenu_btns',
//                        itemId: 'btnInformation',
//                        handler:function(){
//                            Ext.getCmp('gcontainertab').hide();
//                      //      Ext.getCmp('guestcont').show();
//                            Ext.getCmp('ghide').hide();
//                            Ext.getCmp('gshow').show();
//                        }
//                    },
//                    {
//                        xtype: 'button',
//                  //      height: '85px',
//                        iconAlign:'left',
//                        iconCls:'facilities',
//                        text: 'Faclities',
//                        cls: 'subMenu_btns',
//                        itemId: 'btnFaclities',
//                        handler:function(){
//                            Ext.getCmp('gcontainertab').hide();
//                     //       Ext.getCmp('guestcont').show();
//                            Ext.getCmp('ghide').hide();
//                            Ext.getCmp('gshow').show();
//                        }
//                    },
//                    {
//                        xtype: 'button',
//                  //      height: '85px',
//                        iconAlign:'left',
//                        iconCls:'map',
//                        text: 'Maps',
//                        cls: 'subMenu_btns',
//                        itemId: 'btnMaps',
//                        handler:function(){
//                            Ext.getCmp('gcontainertab').hide();
//                     //       Ext.getCmp('guestcont').show();
//                            Ext.getCmp('ghide').hide();
//                            Ext.getCmp('gshow').show();
//                        }
//                    },
//                    {
//                        xtype: 'button',
//                   //     height: '85px',
//                        iconAlign:'left',
//                        iconCls:'room_types',
//                        text: 'Room Type',
//                        cls: 'subMenu_btns',
//                        itemId: 'btnRoomType',
//                        handler:function(){
//                            Ext.getCmp('gcontainertab').hide();
//                    //        Ext.getCmp('guestcont').show();
//                            Ext.getCmp('ghide').hide();
//                            Ext.getCmp('gshow').show();
//                        }
//                    }
//                ]
//            },
//
//            {
//                xtype: 'container',
//            //    hidden: true,
//            //    modal: true,
//                id:'guestcont',
//                flex: 4,
//                items: [{
//
//                    xtype: 'dataview',
//                    name: 'dataviewpack',
//                    itemId: "dvGuestInfo",
//                    // store: "Guests",
//                    loadingText: "Loading...",
//                    emptyText: "<div class=\"notes-list-empty-text\">Check Internet...</div>",
//                    itemTpl: ['<div class="imgcss"> <img class="img" src=\"{DataLogoUrl}\" width=100% height=100% /></div>',
//                        '<div id="aligntext" class="imgText">{DataName}</div>'
//                    ].join(''),
//                    height: "100%",
//                    //          width:"100%",
//                    styleHtmlContent: true,
//                    layout: {
//                        type: "fit"
//                    },
//                    inline: {
//                        wrap: true
//                    },
//                    itemCls: 'dataCview-item'
//
//                }]
//            }
//        ],
//        listeners: [
//            {
//                delegate: "#dvGuestInfo",
//                event: "itemtap",
//                fn: "onDataViewTap"
//            },
//            {
//                delegate: "#btnMostUsed",
//                event: "tap",
//                fn: "onbtnMostUsedTap"
//            },
//            {
//                delegate: "#btnInformation",
//                event: "tap",
//                fn: "onbtnInformationTap"
//            },
//            {
//                delegate: "#btnFaclities",
//                event: "tap",
//                fn: "onbtnFaclitiesTap"
//            },
//            {
//                delegate: "#btnMaps",
//                event: "tap",
//                fn: "onbtnMapsTap"
//            },
//            {
//                delegate: "#btnRoomType",
//                event: "tap",
//                fn: "onbtnRoomTypeTap"
//            },
//            {
//                delegate: "#btnConcierge",
//                event: "tap",
//                fn: "onbtnConciergeTap"
//            }
//        ]
//    },
//    onDataViewTap: function (list, target, index, record, evt, options) {
//        Ext.getCmp('gcontainertab').hide();
//        Ext.getCmp('ghide').hide();
//        Ext.getCmp('gshow').show();
//        this.fireEvent("dataViewCommand", list, target, index, record, evt, options);
//    },
//
//    onbtnMostUsedTap:function(){
//        this.fireEvent("mostUsedCommand");
//    },
//    onbtnFaclitiesTap:function(){
//        this.fireEvent("faclitiesCommand");
//    },
//    onbtnMapsTap:function(){
//        this.fireEvent("mapCommand");
//    },
//    onbtnInformationTap:function(){
//        this.fireEvent("informationCommand");
//    },
//    onbtnRoomTypeTap:function(){
//        this.fireEvent("roomTypeCommand");
//    },
//    onbtnConciergeTap: function () {
//        this.fireEvent("conciergeCommand");
//    }
//});
/////////////////////////////////////////////////////////
//
