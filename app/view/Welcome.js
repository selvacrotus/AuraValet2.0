Ext.define("CrotusValet.view.Welcome", {
    extend: "Ext.Container",
    alias: "widget.welcomeview",
    cls: 'backgroundcolor',

    config: {
        layout : 'vbox',
        scrollable: true,
        cls: 'homeBgImg',
        styleHtmlContent:true,
        padding:'0 0 0 0',
        items: [

            {
                xtype:'container',
                height:'45px',
                cls:'introText',
                html:'<h5><span class="pinkTxt">Welcome To&nbsp;</span><span class="guestName">Forte do vale</span></h5>'
            },
            {
                xtype:'container',
                layout: 'hbox',
                items:[
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon1.png"><br/><br/>Hotel Information',
                                //itemId: "hotelInfoBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon2.png"><br/><br/>Concierge Services',
                                //itemId: "conciergeBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon3.png"><br/><br/>Food &amp; Beverage',
                                itemId:"restaurantBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    }
                ]
            },
            {
                xtype:'container',
                layout: 'hbox',
                items:[
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon4.png"><br/><br/>Channel &amp TV Info',
                                itemId: "channelInfoBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon5.png"><br/><br/>Events',
                                itemId: "eventsBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon6.png"><br/><br/>Bus Services',
                                itemId:"busServicesBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    }
                ]
            },
            {
                xtype:'container',
                layout: 'hbox',
                items:[
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon7.png"><br/><br/>Movie Services',
                                itemId: "moviesBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon8.png"><br/><br/>WIFI Connections',
                                itemId: "wifiBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon9.png"><br/><br/>Customer Info',
                                itemId:"customerInfoBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    }
                ]
            }/*,
             {
             xtype:'container',
             flex:1,
             style:{
             'background-color':'beige'
             },
             items:[
             {
             xtype:'panel',
             style:{
             'background-color':'beige'
             }
             }
             ]
             },
             {
             xtype:'container',
             flex:1,
             layout: {
             type: 'vbox',
             align: 'center'
             },
             style:{
             'background-color':'red'
             },
             items:[
             {
             xtype: "button",
             itemId: "btnEnterIn",
             cls: 'titleBar_btns',
             text:"Enter",
             width: "100px",
             height: "40px",
             margin: 15
             }
             ]
             }*/
        ],
        listeners: [
            {
                delegate: "#hotelInfoBtn",
                event: "tap",
                fn: "onHotelInfoBtnClick"
            },
            {
                delegate: "#conciergeBtn",
                event: "tap",
                fn: "onConciergeBtnClick"
            },
            {
                delegate: "#restaurantBtn",
                event: "tap",
                fn: "onRestaurantBtnClick"
            },
            {
                delegate: "#channelInfoBtn",
                event: "tap",
                fn: "onChannelInfoBtnClick"
            },
            {
                delegate: "#eventsBtn",
                event: "tap",
                fn: "onEventsBtnClick"
            },
            {
                delegate: "#busServicesBtn",
                event: "tap",
                fn: "onBusServicesBtnClick"
            },
            {
                delegate: "#moviesBtn",
                event: "tap",
                fn: "onMoviesBtnClick"
            },
            {
                delegate: "#wifiBtn",
                event: "tap",
                fn: "onWifiBtnClick"
            },
            {
                delegate: "#customerInfoBtn",
                event: "tap",
                fn: "onCustomerInfoBtnClick"
            }
        ]
    },
    onHotelInfoBtnClick: function () {
        this.fireEvent("hotelCommand");
        console.log('Button 1 Clicked');
    },
    onConciergeBtnClick: function () {
        this.fireEvent("conciCommand");
        console.log('Button 2 Clicked');

    },
    onRestaurantBtnClick: function () {
        this.fireEvent("restaurantCommand");
        console.log('Button 3 Clicked');

    },
    onChannelInfoBtnClick: function () {
        //this.fireEvent("enterCommand");
        console.log('Button 4 Clicked');
        //Ext.MessageBox('asds 4');
    },
    onEventsBtnClick: function () {
        //this.fireEvent("enterCommand");
        console.log('Button 5 Clicked');
        Ext.MessageBox('asds 5');
    },
    onBusServicesBtnClick: function () {
        //this.fireEvent("enterCommand");
        console.log('Button 6 Clicked');
        Ext.MessageBox('asds 6');
    },
    onMoviesBtnClick: function () {
        //this.fireEvent("enterCommand");
        console.log('Button 7 Clicked');
        Ext.MessageBox('asds 7');
    },
    onWifiBtnClick: function () {
        //this.fireEvent("enterCommand");
        console.log('Button 8 Clicked');
        Ext.MessageBox('asds 8');
    },
    onCustomerInfoBtnClick: function () {
        //this.fireEvent("enterCommand");
        console.log('Button 9 Clicked');
        Ext.MessageBox('asds 9');
    }

});



