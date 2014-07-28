Ext.define("CrotusValet.view.Availability", {
    extend: "Ext.form.Panel",
    alias: "widget.availabilityview",
    id: "availability",
    config: {
        StyleHtmlContent: true,
        layout: {
            align: 'stretch',
            type: 'vbox'
        },
      //  centered: true,
        cls: 'backgroundcolor',
        items:
            [
                {
                    xtype: 'titlebar',
                    id: 'availabilitytitle',
                    docked: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'backButton',
                            cls: 'backButton'

                        }

                    ]
                },
                {
                    xtype: 'container',
                    id: 'container1',
                    height: '35%',
                    docked: 'top',
                    cls: 'italic',
                    html: ''
                    //items: [
                    //    {
                    //        //html: '<span>Name:</span> <span id="s-name"></span><hr/><span class="No.Of.Nights">No.Of.Nights:</span> <span class={offerName}></span><hr/>',
                    //        xtype: 'label',
                    //        itemId: 'lblName',


                    //    }

                    //]

                }
                //{
                //    xtype: 'list',

                //}


            ],
        listeners: [
            {
                delegate: '#backButton',
                fn: 'onbackButtonTap',
                event: 'tap'
            }
        ]

    },
    onbackButtonTap: function () {
        this.fireEvent('backToRequirement');
    }


});































//Ext.define("CrotusValet.view.Availability", {
//    extend:"Ext.Container",
//    alias: "widget.availabilityview",
//    id:"availability",
//    config: {
//        layout: {
//            align: 'stretch',
//            type: 'vbox'
//        },
//        cls: 'container-background',
//        items: [
//            /*   {
//             xtype: 'container',
//             height: '25%',
//             cls:'banner'
//             },*/
//            /*  {
//             xtype: "button",
//             itemId: "cart",
//             text: "My Cart",
//             name: "My Cart"
//             },*/
//            {
//                xtype: 'container',
//                height: "100%",
//                //       flex: 4,
//                items: [{
//                    xtype: 'dataview',
//                    name: 'dataviewpack',
//                    //     scrollable: 'horizontal',
//                    itemId: "productMas",
//                    store: "ProductMasters",
//                    loadingText: "Loading...",
//                    emptyText: "<div class=\"notes-list-empty-text\">Check Internet...</div>",
//                    itemTpl: ['<div class="imgcss {DataClass}"> <img src=\"{productMasterImageUrl}\" width=100% /></div>',
//                        '<div id="aligntext" class="imgText">{productMasterName}</div>', '<div id="aligntext" class="imgText">{productMasterPrice} $</div>'
//                    ].join(''),
//                    /* scrollable: {
//                     direction: 'horizontal',
//                     directionLock: true
//                     },*/
//                    height: "100%",
//                    styleHtmlContent: true,
//                    layout: {
//                        type: "fit"
//                    },
//                    //      scrollable: 'horizontal',
//                    inline: {
//                        wrap: true
//                    },

//                    itemCls: 'dataHview-item',
//                    itemLength: 200
//                }]
//            }
//        ],
//        listeners: [
//            {
//                delegate: "#productMas",
//                event: "itemtap",
//                fn: "onproductMasViewTap"
//            }
//        ]
//    },
//    onproductMasViewTap: function (list, target, index, record, evt, options) {
//        this.fireEvent("productMasCommand", list, target, index, record, evt, options);
//        // Ext.Msg.alert(record.get("PackName"));
//    }


//});