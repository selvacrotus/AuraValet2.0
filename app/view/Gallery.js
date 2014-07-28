Ext.define('CrotusValet.view.Gallery', {
    // extend: 'Ext.tab.Panel',
    //  extend: 'Ext.tab.Panel',

    extend: "Ext.Container",
    alias: "widget.galleryview",
    config:{

        layout : 'vbox',
        cls: 'backgroundcolor',
        styleHtmlContent:true,
        padding:'5 5 0 5',
        items:[


            {
                xtype: 'container',
                //      cls: 'tabbartop',
                //      cls: 'subMenu',
                // flex: 2,
                layout: {
                    type: 'vbox'
                    // align: 'end'
                },
                width:120,

                items: [
                    {
                        xtype: 'segmentedbutton',
                        allowDepress: false,
                        items: [{
                            //      text: 'Show',
                            iconCls: 'list',
                            cls: 'menuLines',
                            id:'galshow',
                            handler: function() {
                                console.log('show');
                                Ext.getCmp('galcontainertab').show();
                                Ext.getCmp('galshow').hide();
                                Ext.getCmp('galhide').show();
                                /* Ext.Viewport.add(Ext.ComponentQuery.query('#popupMenu')[0]);
                                 Ext.ComponentQuery.query('#popupMenu')[0].show();*/
                            }
                        },{
                            //        text: 'Hide',
                            iconCls: 'list',
                            cls: 'menuLines',
                            id:'galhide',
                            hidden: true,
                            handler: function() {
                                Ext.getCmp('galhide').hide();
                                Ext.getCmp('galshow').show();
                                Ext.getCmp('galcontainertab').hide();

                                //    Ext.ComponentQuery.query('#popupMenu')[0].hide();
                            }
                        }]

                    }
                ]
            },




/*
            {
                xtype: 'container',
                //    html:'<div class="slides"> <ul> <!-- slides --> <li><img src="resources/images/pic1.jpg" alt="image01" />   <div>Promo text #1</div> </li>  <li><img src="resources/images/pic2.jpg" alt="image02" />  <div>Promo text #2</div></li>    <li><img src="resources/images/pic3.jpg" alt="image03" />  <div>Promo text #3</div>  </li> <li><img src="resources/images/pic4.jpg" alt="image04" /> <div>Promo text #4</div> </li></ul></div>',
                height: '30%',
                //     cls:'banner',
                // html:'sadfsadsadsadsadsadsasadsadsadsad'
                //html:'<div class="slides" > <ul> <!-- slides --> <li><img  src="resources/images/pic1.jpg" alt="image01" />   <div>Guest Information</div></br><div style="color:#333; font-size:12px; margin-left:280px">This app provides you a scope to know and utilise the facilities in our resort.</div> </li>  <li><img  src="resources/images/pic2.jpg" alt="image02" />  <div>Room Service</div></br><div style="color:#333; font-size:12px; margin-left:280px">Our resort is located in a fantastic environment nearer to sea.</div></li>    <li><img  src="resources/images/pic3.jpg" alt="image03" />  <div>Book Now</div></br> <div style="color:#333; font-size:12px; margin-left:280px">Very attractive and competitive rate structure have been followed to suit your budget for each apartment type.</div> </li> <li><img  src="resources/images/pic4.jpg" alt="image04" /> <div>About Us</div></br><div style="color:#333; font-size:12px; margin-left:280px">Resort will have security service always round the clock.</div></li></ul></div>',
                //     html:'<div class="slides" > <ul> <!-- slides --> <li><img  src="resources/images/pic1.jpg" alt="image01" />   <div>Guest Information</div></br><div style="color:#333; font-size:12px; margin-left:280px">This app provides you a scope to know and utilise the facilities in our resort.</div> </li>  <li><img  src="resources/images/pic2.jpg" alt="image02" />  <div>Room Service</div></br><div style="color:#333; font-size:12px; margin-left:280px">Our resort is located in a fantastic environment nearer to sea.</div></li>    <li><img  src="resources/images/pic3.jpg" alt="image03" />  <div>Book Now</div></br> <div style="color:#333; font-size:12px; margin-left:280px">Very attractive and competitive rate structure have been followed to suit your budget for each apartment type.</div> </li> <li><img  src="resources/images/pic4.jpg" alt="image04" /> <div>About Us</div></br><div style="color:#333; font-size:12px; margin-left:280px">Resort will have security service always round the clock.</div></li></ul></div>',

                layout: {
                    type: 'hbox',
                    align: 'end',
                    pack: 'end'
                },
                //   flex: 1,
                items:[
                    {
                        xtype:'label',
                        //     docked:'left',
                        //    cls:'imgSlide',
                        //   html:'gkuj'
                        html:'<div class="slides" > <ul> <!-- slides --> <li><img  src="resources/images/pic1.jpg" alt="image01" />   <div><b>Guest Information</b></div></br><div style="color:#333; font-size:12px; margin-left:280px">This app provides you a scope to know and utilise the facilities in our resort.</div> </li>  <li><img  src="resources/images/pic2.jpg" alt="image02" />  <div><b>Room Service</b></div></br><div style="color:#333; font-size:12px; margin-left:280px">Our resort is located in a fantastic environment nearer to sea.</div></li>    <li><img  src="resources/images/pic3.jpg" alt="image03" />  <div><b>Book Now</b></div></br> <div style="color:#333; font-size:12px; margin-left:280px">Very attractive to  your budget for each apartment type.</div> </li> <li><img  src="resources/images/pic4.jpg" alt="image04" /> <div><b>About Us</b></div></br><div style="color:#333; font-size:12px; margin-left:280px">Resort will have security service always round the clock.</div></li></ul></div>'
                    },
                    {
                        xtype: 'button',
                        cls: 'conceirgeBtn',
                        text: 'CONCIERGE',
                        iconCls: 'mobile',
                        itemId: 'btnConcierge'

                    }
                ]
            },*/
            {
                xtype: 'container',
                hidden: true,
                height:'100%',
                /*  style:{
                 'position': 'absolute',
                 'z-index': '999',
                 'height': '320px',
                 'width': '120px',
                 'background': 'antiquewhite'
                 },*/
                showAnimation: {
                    type: 'slideIn',
                    reveal: true,
                    direction:'right',
                    duration: 400
                },
                hideAnimation: {
                    type: 'slideOut',
                    reveal: true,
                    direction:'left',
                    duration: 400
                },
                id:'galcontainertab',
                cls: 'subMenu',
                // flex: 2,
                layout: {
                    type: 'vbox'
                    // align: 'end'
                },
                width:"40%",
               /* cls: 'subMenu',
                // flex: 2,
                layout: {
                    type: 'hbox'
                    //   align: 'end'
                },*/
                items: [
                    /* {
                     xtype: 'button',
                     text: 'Most Used',
                     cls: 'subMenu_btns',
                     itemId: 'btnMostUsed'
                     },*/

                    {
                        xtype: 'button',
                        text: 'Portugal',
                        iconCls:'portugal',
                        cls: 'subMenu_btns',
                        itemId: 'btnInformation',
                        handler:function(){
                            Ext.getCmp('galcontainertab').hide();
                            Ext.getCmp('galhide').hide();
                            Ext.getCmp('galshow').show();
                        }
                    },
                         {
                    xtype: 'carousel',

                        cls: 'container-background',
                        itemId: 'gallery-general',
                       // store: "Gallerys",
                        bufferSize: 2
                    }
                    //{
                    //    xtype: 'button',
                    //    text: 'Faclities',
                    //    cls: 'subMenu_btns',
                    //    itemId: 'btnFaclities'
                    //},
                    //{
                    //    xtype: 'button',
                    //    text: 'Maps',
                    //    cls: 'subMenu_btns',
                    //    itemId: 'btnMaps'
                    //},
                    //{
                    //    xtype: 'button',
                    //    text: 'Room Type',
                    //    cls: 'subMenu_btns',
                    //    itemId: 'btnRoomType'
                    //}
                ]
            }
            ,

            {
                xtype: 'container',
                flex: 4,
                //items: [
                //    {
                //    xtype: 'carousel',
                   
                //        cls: 'container-background',
                //        itemId: 'gallery-general',
                //       // store: "Gallerys",
                //        bufferSize: 2
                //    }
                //]
                items: [{

                    xtype: 'dataview',
                    name: 'dataviewpack',
                    itemId: "dvGuestInfo",
                    // store: "Guests",
               //     loadingText: "Loading...",
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
                 //   itemCls: 'dataview-item'

                }]
            }
        ],
        listeners: [
            {
                delegate: "#dvGuestInfo",
                event: "itemtap",
                fn: "onDataViewTap"
            },
            //{
            //    delegate: "#btnMostUsed",
            //    event: "tap",
            //    fn: "onbtnMostUsedTap"
            //},
            {
                delegate: "#btnInformation",
                event: "tap",
                fn: "onbtnInformationTap"
            }
            //,
            //{
            //    delegate: "#btnFaclities",
            //    event: "tap",
            //    fn: "onbtnFaclitiesTap"
            //},
            //{
            //    delegate: "#btnMaps",
            //    event: "tap",
            //    fn: "onbtnMapsTap"
            //},
            //{
            //    delegate: "#btnRoomType",
            //    event: "tap",
            //    fn: "onbtnRoomTypeTap"
            //},
            //{
            //    delegate: "#btnConcierge",
            //    event: "tap",
            //    fn: "onbtnConciergeTap"
            //}
        ]
    },
    onDataViewTap: function (list, target, index, record, evt, options) {
        Ext.getCmp('galcontainertab').hide();
        Ext.getCmp('galhide').hide();
        Ext.getCmp('galshow').show();
         this.fireEvent("datagalViewCommand", list, target, index, record, evt, options);
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
    onbtnInformationTap: function () {
        console.log('cpo command in view');
        this.fireEvent("informationCommand");
    },
    onbtnRoomTypeTap:function(){
        this.fireEvent("roomTypeCommand");
    },
    onbtnConciergeTap: function () {
        this.fireEvent("conciergeCommand");
    }
});


