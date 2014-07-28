/**
 * Created by karthik on 4/22/2014.
 */
Ext.define('CrotusValet.view.Cart', {
    extend: "Ext.Container",
    requires: "Ext.dataview.List",
    alias: "widget.cartview",
    config: {
        layout: {
            align: 'stretch',
            type: 'vbox'
        },
        styleHtmlContent: false,
        //cls: 'backgroundcolor',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                height: '100px',
                width: '100%',
                cls: 'logoContainer',
                layout: {
                    type: 'hbox'
                    /*pack:'center',
                     align: 'center'*/
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
                    /*{
                        xtype: "button",
                        itemId: "backButton",
                        iconCls: "cart3",
                        cls: 'titleBar_btns continueShopping'
                    },
                    {xtype:'spacer'},
                    {
                        xtype: "image",
                        cls: 'logo',
                        html: "<img src='resources/images/logo.png'>"
                        //flex:1
                    },
                    {xtype:'spacer'},
                    {
                        xtype: "button",
                        itemId: "confirmorder",
                        cls: 'titleBar_btns',
                        text: "Confirm",
                        name: "Order Food Items"
                    }*/
                ]
            },
            {
                xtype: "toolbar",
              //  title: "My Cart",
                docked: "bottom",
                layout:{
                    type:'vbox',
                  align:'center'
                },
                cls:'footerLinks',
                ////////////////////////////////////////////////////////////
                items: [
                    {
                        xtype:'textfield',
                        hidden: true,
                        width:'auto',
                        text: 'MyBill',
                        itemId: "txtitemMyBill",
                        id:'txtMyBill',
                        cls:'mybill',
                        name:'My Bill',
                        label:"My Bill",
                        disabled: true
                    }
                ]
                /////////////////////////////////////////////////////////////
            },
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
                        html:'<h5><span class="guestName">My Cart</span></h5>'
                    },
                    {xtype:'spacer'},{xtype:'spacer'},
                    {
                        xtype: "button",
                        itemId: "continueShop",
                        iconCls: "cart3",
                        cls: 'titleBar_btns continueShopping'
                    },
                    {
                        xtype: "button",
                        itemId: "confirmorder",
                        cls: 'titleBar_btns confirmOrder',
                        text: "Confirm",
                        name: "Order Food Items"
                    }
                ]
         //       html:'<h5><span class="guestName">My Cart</span></h5>'
            },
            {
                xtype: 'container',
                height: "100%",
                items:[
                    {
                        xtype: "list",
                        cls: 'listbg',
                        id: 'SpecialDisclosureList',
                        store: "FoodList",
                        itemId: "lstFoodItems",
                        loadingText: "Loading ...",
                        itemCls: 'dataPview-item',
                        emptyText: "<div>No Items In Your Cart!!!</div>",
                        onItemDisclosure: false,
                        //     itemTpl: "<img class=\"item-item-thumbnails\" src=\"{productDetailImageUrl}\" width=80 height=60 /><!--<button class=\"addtocart\">Add To Cart</button><button class=\"order\">order</button>--><div class=\"list-item-title\">{productDetailName}</div><div class=\"list-item-mobile\">No.Of.Items: {productDetailQuantity}</div><div class=\"list-item-mobile\">Price: $ {productDetailPrice}</div>"
                        /*     itemTpl:" <div class=\"common\"><div class=\"imageTitle\"><div class=\"\">" +
                         "<img src=\"{productDetailImageUrl}\"width=120 height=120>" +
                         "</div></div><div class=\"priceQuant\">" +
                         "<p class=\"title\">{productDetailName}</p><p>Price:<b><span class=\"pricecolor\"> &euro;{productDetailPrice}</span></b><br/>Quantity:<b><span class=\'proquan\'>  {productDetailQuantity}</span></b>  <br/>Total:<b><span class=\'tproquan\'>  &euro;{productTotal}</span></b>  <!--   <br/>Total:<b><span class=\'ptotal\'>{productTotalPrice}</span></b>  -->     </p><!--<div class='rembutton'><button class=\"remove\">Remove</button></div>--><div class='rembutton'><img class=\"remove\" height=35px width=25px src='resources/images/trash.png'/></div></div></div>"
                         */
                        itemTpl: " <div class=\"common\"><div class=\"imageTitle\"><div class=\"\">" +
                        "<img src=\"resources/images/dummy.jpg\" height=50>" +
                        "</div></div><div class=\"priceQuant\">" +
                        "<p>Name: <span class=\'tproquan\'>   {menu_item_name}</span><br/>Total: <span class=\'tproquan priceColr\'>{menu_quantity} x &euro; {price_net} = &euro; {total}</span><!--<br/>Price: <span class=\"pricecolor\"> &euro;{price_net}</span>--></p><div class='rembutton'><img class=\"remove\" height=35px width=25px src='resources/images/trash.png'/></div></div></div>",

                        height: "100%"
                    }
                ]
            }
        ],
        listeners: [
            {
                delegate: "#continueShop",
                event: "tap",
                fn:"onBackButtonTap"
            },
            {
                delegate: "#backButton",
                event: "tap",
                fn:"onBackButtonTap"
            },
            {
                delegate: "#lstFoodItems",
                event: "disclose",
                fn: "onlstFoodDetail"
            },
            {
                delegate: "#lstFoodItems",
                event: "itemtap",
                fn:"onLstFoodItemTap"
            },
            {
                delegate: "#confirmorder",
                event: "tap",
                fn:"onConfirmOrderTap"
            },
            {
                delegate: "#mybill",
                event: "tap",
                fn:"onMyBill"
            }
        ]
    } ,
    onBackButtonTap: function(){
        console.log("onBackButton");
        this.fireEvent("backToMasterViewCommand");
    },
    onlstFoodDetail: function (list,record,target,index,evt,options) {
        this.fireEvent("foodDescriptionTapCommand", this, record);
    },
    onLstFoodItemTap: function (list,target,index,record,evt,options) {
        this.fireEvent("foodItemListTapCommand", list,target,index,record,evt,options);
    },
    onConfirmOrderTap:function(){
        this.fireEvent("confirmCommand");
    },
    onMyBill:function(){
        this.fireEvent("myBillCommand");
    }


});