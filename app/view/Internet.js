/**
 * Created by karthik on 5/23/2014.
 */
Ext.define('CrotusValet.view.Internet', {
    // extend: 'Ext.tab.Panel',
    //  extend: 'Ext.tab.Panel',

    extend: "Ext.Container",
    alias: "widget.internetview",
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
                            id:'intshow',
                            handler: function() {
                                console.log('show');
                                Ext.getCmp('intcontainertab').show();
                                Ext.getCmp('intshow').hide();
                                Ext.getCmp('inthide').show();
                                /* Ext.Viewport.add(Ext.ComponentQuery.query('#popupMenu')[0]);
                                 Ext.ComponentQuery.query('#popupMenu')[0].show();*/
                            }
                        },{
                            //        text: 'Hide',
                            iconCls: 'list',
                            cls: 'menuLines',
                            id:'inthide',
                            hidden: true,
                            handler: function() {
                                Ext.getCmp('inthide').hide();
                                Ext.getCmp('intshow').show();
                                Ext.getCmp('intcontainertab').hide();

                                //    Ext.ComponentQuery.query('#popupMenu')[0].hide();
                            }
                        }]

                    }
                ]
            },




            /*  {
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
                          html:'<div class="slides" > <ul> <!-- slides --> <li><img  src="resources/images/pic1.jpg" alt="image01" />   <div><b>Facebook</b></div></br><div style="color:#333; font-size:12px; margin-left:280px">This app provides you a scope to know and utilise the facilities in our resort.</div> </li>  <li><img  src="resources/images/pic2.jpg" alt="image02" />  <div><b>Room Service</b></div></br><div style="color:#333; font-size:12px; margin-left:280px">Our resort is located in a fantastic environment nearer to sea.</div></li>    <li><img  src="resources/images/pic3.jpg" alt="image03" />  <div><b>Book Now</b></div></br> <div style="color:#333; font-size:12px; margin-left:280px">Very attractive to  your budget for each apartment type.</div> </li> <li><img  src="resources/images/pic4.jpg" alt="image04" /> <div><b>About Us</b></div></br><div style="color:#333; font-size:12px; margin-left:280px">Resort will have security service always round the clock.</div></li></ul></div>'
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
                id:'intcontainertab',
                cls: 'subMenu',
                // flex: 2,
                layout: {
                    type: 'vbox'
                    // align: 'end'
                },
                width:"40%",
              /*  cls: 'subMenu',
                // flex: 2,
                layout: {
                    type: 'hbox'
                    //   align: 'end'
                },*/
                items: [
                    {
                        xtype: 'button',
                        iconAlign:'left',
                        iconCls:'socialmedia',
                        text: 'Social Media',
                        cls: 'subMenu_btns',
                        itemId: 'btnSocialNetwork',
                        handler:function(){
                            Ext.getCmp('intcontainertab').hide();
                            Ext.getCmp('inthide').hide();
                            Ext.getCmp('intshow').show();
                        }
                    },
                    {
                        xtype: 'button',
                        iconAlign:'left',
                        iconCls:'favourite',
                        text: 'Favourites',
                        cls: 'subMenu_btns',
                        itemId: 'btnFavorites',
                        handler:function(){
                            Ext.getCmp('intcontainertab').hide();
                            Ext.getCmp('inthide').hide();
                            Ext.getCmp('intshow').show();
                        }
                    }
                ]
            },

            {
                xtype: 'container',
                flex: 4,
                items: [{

                    xtype: 'dataview',
                    name: 'dataviewpack',
                    itemId: "dvInternetInfo",
                    // store: "Guests",
                    loadingText: "Loading...",
                    emptyText: "<div class=\"notes-list-empty-text\">Check Internet...</div>",
                    itemTpl: ['<div class="imgcss"> <img class="img" src=\"{InternetLogoUrl}\" width=100% height=100% /></div>',
                        '<div id="aligntext" class="imgText">{InternetName}</div>'
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
                //    itemCls: 'dataviewI-item'
                    itemCls: 'dataCview-item'
               //     itemCls: 'dataview-item'

                }]
            }
        ],
        listeners: [
            {
                delegate: "#dvInternetInfo",
                event: "itemtap",
                fn: "onIntDataViewTap"
            },
            {
                delegate: "#btnSocialNetwork",
                event: "tap",
                fn: "onbtnSocialNetworkTap"
            },
            {
                delegate: "#btnFavorites",
                event: "tap",
                fn: "onbtnFavoritesTap"
            }
        ]
    },
    onIntDataViewTap: function (list, target, index, record, evt, options) {
        Ext.getCmp('intcontainertab').hide();
        Ext.getCmp('inthide').hide();
        Ext.getCmp('intshow').show();
        this.fireEvent("intDataViewCommand", list, target, index, record, evt, options);
    },

    onbtnSocialNetworkTap:function(){
        console.log('socialnetwork');
        this.fireEvent("socialNetworkCommand");
    },
    onbtnFavoritesTap:function(){
        console.log('favorities');
        this.fireEvent("favoritiesCommand");
    }
});



