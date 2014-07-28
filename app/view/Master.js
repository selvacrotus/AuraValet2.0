Ext.define('CrotusValet.view.Master', {
    extend:'Ext.tab.Panel',
  //  extend: 'Ext.Panel',
    xtype:'masterview',
    config:{
        tabBarPosition:'bottom',
        cls: 'tabbartool',
        defaults:{
            styleHtmlContent:true
        },
       /* tabBar: {
            scrollable: {
                direction: 'horizontal'
            }
        },*/
       /* tabBar: {
            layout: {
                pack : 'center',
                align: 'center'
            }
        },*/
        layout: {
            type: 'card',

            animation: {
                type: 'fade'
            //    direction: 'left'

            }
        },
        items:[
/*

            {
                xtype:'toolbar',
                docked: 'top',
                height: '75px',
                cls: 'toolcolor',
          //      height: '20px',
                title: 'Aura',
               style:{
                     'font-family': 'Lemon',
                     'font-size': '25px',
                     'text-align': 'left'
                },
                layout: {
                    align: {
                        pack: 'end'
                    }
                },
                items: [
                    {
                      xtype:'spacer'
                    },
                    {
                        iconCls: 'settings',
                        style:{
                            'background-color': '#db253b'
                        },
                        cls: 'settings',
                        itemId: 'btnsettings'
                    }
                  */
/*  {
                        xtype: 'image',
                        dock: 'left',
                        cls:'mgmlogo',
                        src: 'resources/images/newmgmlogo.jpg'
                     //   margin: '5 5 0 5'
                    },
                    {
                      xtype: "spacer"
                    },
                    {
                        xtype: "button",
                        dock: 'right',
                      //  iconCls: 'action',
                        cls: 'titleBar_btns',
                        text: "Book Now",
                        margin: '10 5 10 5',
                        itemId: "btnBookNow"
                    }*//*

                ]
            },
*/
            {
                docked: 'top',
                xtype: 'toolbar',
                height: '100px',
                width: '100%',
                cls: 'logoContainer',
                layout: {
                    type: 'hbox'
             //       align: 'center',
              //      pack:'center'
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
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack:'center'
                },
                items: [
                    {
                        xtype: "image",
                        cls: 'footIcons',
                        html: "<img src='resources/icons/icon10.png'>",
                        itemId: 'congirence'
                    },
                    {
                        xtype: "image",
                        cls: 'footIcons',
                        html: "<img src='resources/icons/icon11.png'>",
                        itemId: 'airlines'
                    },
                    {
                        xtype: "image",
                        //iconCls: 'settings',
                        cls: 'footIcons',
                        html: "<img src='resources/icons/setting_icon.png'>",
                        itemId: 'btnsettings'
                    }
                ]
            },

            {
                 xtype: 'welcomeview',
                 title: 'Welcome',
                 id: 'tab1',
                 hidden: true,
                 iconCls: 'home'
            },
             {
                 xtype: 'availabilityview',
                 title: 'other',
                 id: 'tab2',
                 hidden: true,
                 iconCls: 'home'


             },
             {
                 xtype: 'productdetailview',
                 title: 'other2',
                 id: 'tab3',
                 hidden: true,
                 iconCls: 'home'


             },
            {
                xtype:'cartview',
                title : 'fooditem',
                cls: 'food',
                hidden: true,
                iconCls: 'action'

            },
            {
                xtype:'descriptionview',
                hidden: true,
                title:"order"
            },
            {
           //     xtype:'reservationview',
                title:'other1',
                hidden: true,
                iconcls: 'action'
            },
             {
                 xtype: 'categorydetailview',
                 title: 'categorydetail',
                 cls: 'restaurant',
                 hidden: true,
                 iconCls: 'forkandknife'

             },
            {
                xtype: 'guestinfoview',
            //    title : 'Guest Information',
                iconCls: 'user'
            },
            {
                xtype:'roomserviceview',
                itemCls:'mastertab',
          //      title : 'Room Services',
                iconCls: 'forkandknife',
                cls: 'restaurant'
            },
            {
                xtype:'hotelserviceview',
         //       title : 'Hotel Services',
                iconCls: 'bell'
            },
            {
                xtype:'galleryview',
           //     title : 'Gallery',
                iconCls: 'pictures'
            },
            {
                xtype:'internetview',
         //       title : 'Internet',
                iconCls: 'signal'
            },
            {
                xtype:'settingview',
              //  title : 'setting',
                hidden: true,
                iconCls: 'settings'
            },
            {
                xtype:'paymentsview',
                hidden: true,
                iconCls: 'settings'
            }
        ],
        listeners: [
            {
                delegate: "#btnBookNow",
                event: "tap",
                fn: "onBookNowTap"
            },
            {
                delegate: "#btnsettings",
                event: "tap",
                fn: "onSettingTap"
            },
            {
                delegate: "#myCart",
                event: "tap",
                fn: "onMyCartTap"
            }
       ]
    },
    onMyCartTap:function(){
        console.log("mycart");
        this.fireEvent("myCartCommand");
    },
    onBookNowTap:function(){
        this.fireEvent("myBookNowCommand");
    },
    onSettingTap:function(){
        console.log('setting');
        this.fireEvent("mySettingCommand");
    }
});

