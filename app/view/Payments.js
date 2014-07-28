/**
 * Created by karthik on 7/4/2014.
 */
Ext.define("CrotusValet.view.Payments", {
    extend: "Ext.Container",
    id: 'confirmationForm',
    requires: ["Ext.Img"],
    alias: "widget.paymentsview",


    config: {
     //   layout : 'vbox',
    //    padding:'5 5 0 5',
        cls: 'paymentContainer',

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
                        html:'<h5><span class="guestName">Payment Options</span></h5>'
                    }
                ]
          //      html:'<h5><span class="guestName">Payment Options</span></h5>'
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                height: '100px',
                width: '100%',
                cls: 'logoContainer',
                layout: {
                    type: 'hbox'
             //       pack:'center',
             //       align: 'center'
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

            /*{
              xtype:'fieldset',
              title: 'Payment Options',
              height:'15%'

            },*/
            {
                xtype: "fieldset",
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                cls:'paymentBgDiv',
                //width: "95%",
                //height:"40%",
                items: [
                  /*  {
                        xtype:'container',
                        height: '50%',
                        items:[
                            {
                                xtype: 'radiofield',
                                name : 'Add To My Bill',
                                label: 'Add To My Bill',
                                value: 'addbill',
                                width:'60%',
                                labelWidth: 120,
                                checked: true
                            }
                        ]
                    },*/
                    {
                        xtype:'panel',
                        id: 'radiocontrolpanel',
                        height: '35%',
                    //    layout:{
                      //      type: 'vbox',
                      //      align: 'center'
                 //       },
                        items:[
                          /*  {
                              xtype:'label',
                              Width: 120,
                              html: 'Other Options'
                            },*/
                            {
                                xtype: 'radiofield',
                                labelAlign: 'right',
                                cls: 'radcolor',
                                text: 'Visa',
                                name : 'Payment',
                            //    html:'<img style="position: absolute; top:8px; left: 40px;" height="20px" width="40px" src="resources/images/visa.png">',
                                value: 'addtobill',
                                label: 'Add To My Bill',
                                width:'100%',
                                labelWidth: 150,
                                labelWrap: true,
                                checked: true
                            },
                            {
                                xtype: 'radiofield',
                                labelAlign: 'right',
                                cls: 'radcolor',
                                disabled: true,
                                text: 'PayPal',
                                name : 'Payment',
                                html:'<img style="position: absolute; top:-5px; left: 150px;" height="40px" width="90px" src="resources/images/payment.png">',
                                value: 'paypal',
                                width:'100%',
                                labelWidth: 150,
                                labelWrap: true,
                                label: 'Other Options'

                            }
                        ]
                    },
                    {
                        xtype: "button",
                        itemId: "btnPayNow",
                        cls: 'titleBar_btns',
                        text:"Order Now",
                        width: "120px",
                        height: "40px",
                        margin: 15
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
                delegate: "#btnPayNow",
                event: "tap",
                fn: "onPayButton"
            }

        ]
    },

    onBackButton: function()
    {
        this.fireEvent("backToCartCommand");
    },
    onPayButton:function(button, e, eOpts)
    {
        this.fireEvent("payNowCommand",button, e, eOpts);
    }

});









