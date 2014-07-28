Ext.define("CrotusValet.view.ProductDetail", {
    extend:"Ext.Container",
    requires: ['Ext.field.Text', 'Ext.field.Search'],
    alias: "widget.productdetailview",
    id:"availabilityy",
    config: {
        layout: {
            align: 'stretch',
            type: 'vbox'
        },
        cls: 'backgroundcolor',
        padding:'0',
        items: [
            {
                xtype:'container',
                height:'45px',
                cls:'introText',
                layout:{
                    type:'hbox',
                    pack:'end',
                    align:'end'
                },
                items:[
                    {
                        xtype: "button",
                        itemId: "backButton",
                        cls: 'backButton'
                    },
                    {
                        xtype: "label",
                        cls:"labeltitle",
                        html:'<h5><span class="guestName">Products </span></h5>'
                    },
                    {
                        xtype:"spacer"
                    },
                    {
                        xtype:'searchfield',
                        placeHolder: 'Search...',
                        itemId: "searchBtn",
                        cls:'searchBox'
                        /*   listeners: {
                         scope: this,
                         clearicontap: this.onSearchClearIconTap,
                         keyup: this.onSearchKeyUp
                         }*/

                    }
                ]
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                height: '100px',
                width: '100%',
                cls: 'logoContainer',
                layout: {
                    type: 'hbox'
              //      pack:'center',
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
                    },
                    {
                        xtype: "button",
                        hidden:true,
                        cls: 'titleBar_btns',
                        iconCls: 'cart3',
                        text: "My Cart",
                        itemId: "btnMyCart"
                    }
                ]
            },
            {
                xtype: "toolbar",
                cls: 'secondarytoolcolor',
                //  title: "My Cart",
                docked: "bottom",
                /*layout:{
                    type:'vbox',
                    align:'center'
                },*/
                items:[
                    {
                        xtype:"button",
                        id: "prebtn",
                        text: "Prev",
                        hidden: true,
                        cls:"titleBar_btns",
                        itemId:"btnPrev"
                    },
                    {
                        xtype:"spacer"
                    },
                    {
                        xtype:"button",
                        id: "nxtbtn",
                        text: "next",
                        cls:"titleBar_btns",
                        itemId:"btnNext",
                        hidden: true,
                        badgeText: '0'
                        //      listeners:{
                        //         handler: function () {

                        //        }
                        //      }

                    }
                ]
                /* items: [
                 {
                 xtype: "button",
                 itemId: "mainButton",
                 cls: 'secondarybuttoncolor',
                 iconCls:'home'

                 }
                 ]*/
            },
            {
                xtype: 'container',
                height: "100%",
                cls:'commonBgImg',
                items: [{
                    xtype: 'list',
                    name: 'dataviewpack',
                    //     scrollable: 'horizontal',
                    itemId: "dvProduct",
                    store: "ProductMasters",
                    masked: {
                        xtype: 'loadmask',
                        message: 'Loading',
                        indicator: true
                    },
                    //loadingText: "Loading...",
                    emptyText: "<div class=\"notes-list-empty-text\">Items Unavaliable!!!</div>",
                    /* itemTpl: ['<div class="imgcss {DataClass}"> <img class="img" src=\"{productMasterImageUrl}\" width=100% height=100%/></div>',
                     '<div id="aligntext" class="imgText" style="width: 100%; float:left; margin-top:-40px;"><div style="width: 85%; float:left;"> <p>{menu_item_name}</p></div><div style="width: 15%; padding: 0px 5px;  float:left; background-color:#E6168A; opacity: 0.8;"><b class="priceText">&euro;{price_net}</b></div></div>'*//*, '<div id="aligntext" class="imgText">&euro;{productMasterPrice}</div>'*//*
                     ].join(''),*/
                    /*itemTpl: [*//*'<div class="imgcss {DataClass}"> <img src=\"{categoryDetailImageUrl}\" width=100% height=100%/></div>',*//*
                     '<div id="aligntext" class="imgText">{menu_item_name}</div>'
                     ].join(''),*/
                    itemTpl:" <div class=\"common\"><div class=\"imageTitle\"><div class=\"\">" +
                        "<img src=\"resources/images/dummy.jpg\" height=50>" +
                        "</div></div><div class=\"priceQuant\">" +
                        "<p><span class=\'tproquan\'> {menu_item_name}</span><br/><span class=\"pricecolor\"> &euro;{price_net}</span></p></div></div>",

                    height: "100%",
                    styleHtmlContent: true,
                    layout: {
                        type: "fit"
                    },
                    inline: {
                        wrap: true
                    },
                    itemCls: 'dataPview-item',
                    itemLength: 200

                }]
            }
        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButton"
            },
            {
                delegate: "#searchBtn",
                event: "keyup",
                fn: "onSearchButton"
            },
            {
                delegate: "#searchBtn",
                event: "keyup",
                fn: "onSearchButton"
            },
            {
                delegate: "#mainButton",
                event: "tap",
                fn: "onMainButton"
            },
            {
                delegate: "#dvProduct",
                event: "itemtap",
                fn: "onProductViewTap"
            },
            {
                delegate: "#btnMyCart",
                event: "tap",
                fn: "onMyCartTap"
            },
            {
                delegate: "#btnNext",
                event: "tap",
                fn: "onNextButton"
            },
            {
                delegate: "#btnPrev",
                event: "tap",
                fn: "onPrevButton"
            }
        ]
    },
    onProductViewTap: function (list, target, index, record, evt, options) {
        this.fireEvent("productCommand", list, target, index, record, evt, options);

    },
    onBackButton: function()
    {
        this.fireEvent("backToMasterViewCommand");

    },
    onMainButton:function(){
        this.fireEvent("backToMainViewCommand");
    },
    onNextButton:function(list, target, index, record, evt, options){
        this.fireEvent("nextCommand", list, target, index, record, evt, options);
        console.log("next");
    },
    onPrevButton:function(list, target, index, record, evt, options){
        this.fireEvent("prevCommand", list, target, index, record, evt, options);
        console.log("Prev");
    },
    onMyCartTap:function(){
        console.log("mycart");
        this.fireEvent("myCartCommand");
    },
    onSearchButton:function(field){
        console.log('search');
        this.fireEvent("SearchKeyUp",field);
    }



});