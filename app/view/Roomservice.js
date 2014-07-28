/**
 * Created by karthik on 4/21/2014.
 */
Ext.define('CrotusValet.view.Roomservice', {
    extend: "Ext.Container",
    alias: "widget.roomserviceview",
    config: {

        layout: {
            align: 'stretch',
            type: 'vbox'
        },
        cls: 'backgroundcolor',
        styleHtmlContent:true,
        padding:'0 0 0 0',
        items:[
            {
                xtype:'container',
                height:'45px',
                cls:'introText',
                items:[
                    {
                        xtype: "button",
                        itemId: "backButton",
                        cls: 'backButton'
                    },
                    {
                        xtype: "label",
                        cls:"labeltitle",
                        html:'<h5><span class="guestName">Categories</span></h5>'
                    }
                ]
            //    html:'<h5><span class="guestName">Categories</span></h5>'
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                height: '100px',
                width: '100%',
                cls: 'logoContainer',
                layout: {
                    type: 'hbox'
               //     pack:'center',
               //     align: 'center'
                },
                items: [
                    {
                        xtype: "image",
                        cls: 'logo',
                        html: "<img src='resources/icons/MGM_LOGO.png'>"
                    },
                    {
                        xtype: "image",
                        cls: 'logo',
                        html: "<img src='resources/icons/PL_logo.png'>"
                    },
                    {
                        xtype:"spacer"
                    },
                    {
                        xtype:"spacer"
                    },
                    {
                        xtype: "image",
                        cls: 'logo',
                        html: "<img src='resources/icons/aura_logo.png'>"
                    }
                ]
            },
            {
                docked: 'bottom',
                xtype: 'toolbar',
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
                    /*{
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
                    }*/
                ]
            },
            {
                xtype: 'container',
                cls: 'fbContainer',
                /*layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },*/
                layout:'vbox',
                height:'100%',
                items: [
                    {
                        xtype:'container',
                        height:'67%',
                        layout:{
                            type:'hbox'
                        },
                        items:[
                            {
                                xtype:'container',
                                flex:1,
                                id: 'roomcont1',
                                cls: 'roomcont',
                                scrollable:'vertical',
                                html: "<h4 id='hname'><small class=\"smallText\">Welcome to</small><br/>Forte Do Vale</h4><p id='pname'>Forte Do Vale offers apartments with a fully equipped kitchen and a private balcony, just 500 metres from Forte Beach in Albufeira.<br/>                                The air-conditioned apartments of Hotel Apartamento Forte Do Vale are bright and airy and feature a modern and colourful interior. All apartments have floor-to-ceiling windows, satellite TV and a private bathroom.<br/>                                The outdoor swimming pool is surrounded by a spacious terrace equipped with sun loungers. Free Wi-Fi can be accessed in public areas.<br/>                                Hotel Apartamento Forte Do Vale's restaurant offers local and international cuisine. The bar serves a wide variety of drinks and light snacks.<br/>Many Albufeira restaurants, bars, and shops are within walking distance of Forte Do Vale. Santa Eulália Beach is 2.2 km from the hotel, and the Modelo Shopping Center is 1.2 km away.</p><br/>"
                            },
                            {
                                xtype:'container',
                                flex:1,
                                cls:'fbCatMenus',

                                items:[
                                    {
                                        xtype: 'dataview',
                                        name: 'dataviewpack',
                                        //     scrollable: 'horizontal',
                                        itemId: "dvRoomService",
                                        // store: "Guests",
                                        loadingText: "Loading...",
                                        emptyText: "<div class=\"notes-list-empty-text\">Check Internet!!!</div>",
                                        itemTpl: ['<div class="imgcss fbIconImg {DataClass}"><img src=\"{path}\"/></div>',
                                            '<div id="aligntext"  class="fbIconText">{rev_class_name}</div>'
                                        ].join(''),
                                        height: "100%",
                                        styleHtmlContent: true,
                                        layout: {
                                            type: "fit"
                                        },

                                        inline: {
                                            wrap: true
                                        },
                                        //cls:'fbCatIcons',
                                        itemCls: 'dataRview-item fbCatIcons',
                                        itemLength: 200
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype:'container',
                        height:'32%',
                        cls:'fbSliderDiv',
                        /*layout:{
                            type:'hbox'
                        },
                        scrollable:{
                            direction:'vertical',
                            directionLock:true
                        },*/

                        items:[
                            {
                                xtype: 'dataview',
                                name: 'dataviewpack',
                                //     scrollable: 'horizontal',
                                itemId: "dvRoomDes",
                                loadingText: "Loading...",
                                emptyText: "<div class=\"notes-list-empty-text\">Check Internet!!!</div>",
                                itemTpl: ['<div class="imgcss fbSliderImg {DataClass}"> <img src=\"{InternetLogoUrl}\" /></div>',
                                    '<div id="aligntext" class="imgText fbSliderTxt">{InternetName}</div>'
                                ].join(''),
                                height: "100%",
                                //          styleHtmlContent: true,
                                layout: {
                                    type: "fit"
                                },
                                inline: {
                                    wrap: false
                                },
                                itemCls: 'fbitemSliderDiv',
                                itemLength: 200
                            }
                        ]
                    }
                ]
            }








            /*{
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
            },*/
            /////////////////////////////////////////////
          /*  {
                xtype: 'container',
                height: '100%',
                flex: 4,
                items: [{
                    xtype: 'dataview',
                    name: 'dataviewpack',
                    //     scrollable: 'horizontal',
                    itemId: "dvRoomService",
                    // store: "Guests",
                    loadingText: "Loading...",
                    emptyText: "<div class=\"notes-list-empty-text\">Check Internet!!!</div>",
                    itemTpl: ['<div class="imgcss {DataClass}"> <img src=\"{path}\" width=100% height=100%/></div>',
                        '<div id="aligntext"  class="imgText">{rev_class_name}</div>'
                    ].join(''),
                    height: "100%",
                    styleHtmlContent: true,
                    layout: {
                        type: "fit"
                    },

                    inline: {
                        wrap: true
                    },

                    itemCls: 'dataRview-item',
                    itemLength: 200
                }]
            }*/
            ///////////////////////////////////////////////////
        ],
        listeners: [
            {
                delegate: "#dvRoomService",
                event: "itemtap",
                fn: "onRoomSerViewTap"
            },
            {
                delegate: "#dvRoomDes",
                event: "itemtap",
                fn: "onRoomDesViewTap"
            },
            {
                delegate: "#Hmaster",
                event: "tap",
                fn: "hMasterTap"
            }
        ]
    },
    onRoomSerViewTap: function (list, target, index, record, evt, options) {
        this.fireEvent("roomSerCommand",list, target, index, record, evt, options);
    },
    onRoomDesViewTap: function (list, target, index, record, evt, options) {
        this.fireEvent("roomDesCommand",list, target, index, record, evt, options);
    },
    hMasterTap:function(){
        this.fireEvent("hMasterCommand");
    }
});


