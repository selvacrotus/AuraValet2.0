/**
 * Created by karthik on 4/26/2014.
 */
Ext.define("CrotusValet.view.Description", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias:"widget.descriptionview",
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
                items:[
                    {
                        xtype: "button",
                        itemId: "backButton",
                        cls: 'backButton'
                    },
                    {
                        xtype: "label",
                        cls:"labeltitle",
                        html:'<h5><span class="guestName">Product Detail </span></h5>'
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
                        xtype: "button",
                        cls: 'addToCartBtn',
                        //iconCls: "add",
                        html: "<img src='resources/icons/continueshopping.png' width='50'>",
                        itemId: "addCart"
                        //flex:1
                    },
                    {
                        xtype: "image",
                        cls: 'logo',
                        html: "<img src='resources/icons/aura_logo.png'>"
                    }






                /*    {
                        xtype: "button",
                        itemId: "backButton",
                        cls: 'backButton'
                        //flex:1
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
                        cls: 'addToCartBtn',
                        //iconCls: "add",
                        html: "<img src='resources/icons/continueshopping.png' width='50'>",
                        itemId: "addCart"
                        //flex:1
                    }*/
                ]
            },
            /*{
                xtype: "toolbar",
                title: "Product Description",
                docked: "top",
                cls: 'toolcolor',
                items: [
                    {
                        xtype: "button",
                        itemId: "backButton",
                        cls: 'backButton'
                    },
                    {
                      xtype:"spacer"
                    },
                    {
                        xtype: "button",
                        cls: 'titleBar_btns',
                        iconCls: "add",
                        text: "To Cart",
                        itemId: "addCart"
                    }
                ]
            },*/
            {
                //xtype: "toolbar",
                //cls: 'secondarytoolcolor',
                //  title: "My Cart",
                docked: 'bottom',
                xtype: 'titlebar',
                height: '65px',
                width: '100%',
                cls: 'footerLinks',
                items: [
                    /*{
                        xtype: "button",
                        cls: 'secondarybuttoncolor',
                        itemId: "mainButton",
                        iconCls:'home'
                    }*/
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
                                itemId: 'mainButton'
                            }
                        ]
                    }
                ]
            },




            {
              xtype:"container",
              height:"100%",
                layout:"hbox",
                items:[
                    {
                        xtype:"container",
                        flex:1,
                        cls:'prodDetailImgContainer',
                        items:[
                            {
                                xtype: 'image',
                                width: "100%",
                                height: "50%",
                                margin: "5",
                                //docked: "top",
                                html: "<img src='resources/images/burger.jpg'>",
                                id: "myimage",
                                align: 'stretch',
                                cls:'prodDetailImg'
                            }
                        ]
                    },
                    {
                        xtype:"container",
                        flex:1,
                        items:[
                            {
                                xtype: "fieldset",  //todo
                                cls: 'formbackground',
                                items: [
                                    {
                                        xtype: 'hiddenfield',
                                        name: 'productMasterID',
                                        id:'lblProductDetailID'
                                    },
                                    {
                                        xtype:'label',
                                        text: 'No Of Items'
                                    },
                                    {

                                        xtype: 'textfield',
                                        //         hidden: true,
                                        cls: 'borderhidden prodTitle',
                                        id: "txt2",
                                        //       label: 'Product Name:',
                                        text: 'productMasterPrice',
                                        name: 'productMasterPrice',
                                        disabled: true
                                        //itemCls:'prodTitle'
                                    },
                                    {
                                        xtype:"container",
                                        layout:{
                                            type: "hbox",
                                            align: 'start',
                                            pack: 'start'
                                        },
                                        items:[
                                            {
                                                xtype: 'spinnerfield',
                                                id:"spinQuantity",
                                                name: 'spinfield',
                                                //      label: 'Quantities',
                                                value: 1,
                                                minValue: 1,
                                                maxValue: 100,
                                                stepValue: 1,
                                                cycle: false
                                                //cls:'spinnerNumberInput'
                                            },
                                            {
                                                xtype: 'textfield',
                                                //hidden: true,
                                                cls: 'borderhidden prodPrice',
                                                id: "txt4",
                                                text: 'productMasterPrice',
                                                name: 'productMasterPrice',
                                                disabled: true
                                            },
                                            {

                                                xtype: 'textfield',
                                                hidden: true,
                                                cls: 'borderhidden',
                                                id: "txt1",
                                                //       label: 'Product Price(in €):',
                                                text: 'productMasterPrice',
                                                name: 'productMasterPrice',
                                                disabled: true
                                            }
                                        ]
                                    },

                                    {

                                        xtype: 'textfield',
                                        hidden: true,
                                        cls: 'borderhidden',
                                        id: "txt3",
                                        text: 'productMasterPrice',
                                        name: 'productMasterPrice',
                                        disabled: true
                                    },

                                    {

                                        xtype: 'textfield',
                                        hidden: true,
                                        cls: 'borderhidden',
                                        id: "txt5",
                                        text: 'productMasterPrice',
                                        name: 'productMasterPrice',
                                        disabled: true
                                    },
                                    {

                                        xtype: 'textfield',
                                        hidden: true,
                                        cls: 'borderhidden',
                                        id: "txt6",
                                        text: 'productMasterPrice',
                                        name: 'productMasterPrice',
                                        disabled: true
                                    },
                                    {

                                        xtype: 'textfield',
                                        hidden: true,
                                        cls: 'borderhidden',
                                        id: "txt7",
                                        text: 'productMasterPrice',
                                        name: 'productMasterPrice',
                                        disabled: true
                                    },
                                    {

                                        xtype: 'textfield',
                                        hidden: true,
                                        cls: 'borderhidden',
                                        id: "txt8",
                                        text: 'productMasterPrice',
                                        name: 'productMasterPrice',
                                        disabled: true
                                    },
                                    {
                                        xtype: 'label',
                                        cls:'borderhidden prodDesc',
                                        id:"txtProductDescrip",
                                        label: 'Description:',
                                        html:"<p id='pDesc'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><br/>",

                                        //       text: 'productMasterDescription',
                                        name: 'productMasterDescription',
                                        disabled:true
                                    }


                                ]
                            }
                        ]
                    }
                ]
            }



        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButton"
            },
            {
                delegate: "#mainButton",
                event: "tap",
                fn: "onMainButton"
            },
            {
                delegate: "#addCart",
                event: "tap",
                fn: "onaddCartButton"
            }
        ]
    },
    onBackButton: function()
    {
        this.fireEvent("backToMasterCommand");
    },
    onMainButton:function(){
        this.fireEvent("backToMainViewCommand");
    },
    onaddCartButton:function(){
        this.fireEvent("addCartCommand");
    }
});

