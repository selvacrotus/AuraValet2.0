Ext.define("CrotusValet.controller.Basic",{
    extend: "Ext.app.Controller",
    config:{
        refs: {
            masterView:"masterview",
            guestinfoView: "guestinfoview",
            availabilityView: "availabilityview",
            productdetailView: "productdetailview",
            categorydetailView: "categorydetailview",
            roomserviceView: "roomserviceview",
            cartView: "cartview",
            descriptionView: "descriptionview",
            settingView: "settingview",
            welcomeView: "welcomeview",
            internetView: "internetview",
            galleryView: "galleryview",
            hotelserviceView: "hotelserviceview",
            paymentsView: "paymentsview"
        },

        control:{
            guestinfoView: {
                conciergeCommand: "onconciergeCommand",
                mostUsedCommand: "onmostUsedCommand",
                faclitiesCommand: "onfaclitiesCommand",
                informationCommand: "oninformationCommand",
                mapCommand: "onmapCommand",
                roomTypeCommand: "onroomTypeCommand",
                dataViewCommand: "ondataViewCommand",
                hMasterCommand: "onhMasterCommand"
            },
            welcomeView: {
                enterCommand: "onenterCommand",
                hotelCommand:"onhotelCommand",
                restaurantCommand:"onrestaurantCommand",
                conciCommand: "onconciCommand"
            },
            masterView:{
                myCartCommand: "onmyCartCommand",
                myBookNowCommand: "onmyBookNowCommand",
                BeveragesCommand: "onBeveragesCommand",
                InHouseCommand: "onInHouseCommand",
                mySettingCommand: "onmySettingCommand"
            },
            paymentsView:{
                backToCartCommand: "onbackToCartCommand",
                payNowCommand: "onpayNowCommand"
            },
            availabilityView: {
                backToRequirement: "onbackToRequirement"
            },
            productdetailView:{
                productCommand: "onproductCommand",
                backToMainViewCommand: "onbackToMainViewCommand",
                backToMasterViewCommand: "onbackToCategoryViewCommand",
                myCartCommand:"onmyCartCommand",
                SearchKeyUp:"onSearchKeyUp",
                nextCommand: "onnextCommand",
                prevCommand: "onprevCommand"
            },
            categorydetailView: {
                categoryCommand: "oncategoryCommand",
                backToMasterCommand:"onbackToRoomViewCommand",
                myCartCategoryCommand:"onmyCartCommand",
                hMasterCommand: "onhMasterCommand"
            },
            roomserviceView:{
                roomSerCommand: "onroomSerCommand",
                roomDesCommand: "onroomDesCommand",
                cartCommand: "oncartCommand",
                hMasterCommand: "onhMasterCommand"
            },
            descriptionView:{
                backToMasterCommand: "onbackToMasterCommand",
                backToMainViewCommand: "onbackToMainViewCommand",
                addCartCommand: "onaddCartCommand"
            },
            settingView:{
                backToMasterCommand:"onbackToMasterViCommand",
                checkInCommand: "oncheckInCommand",
                checkOutCommand: "oncheckOutCommand"

            },
            hotelserviceView:{
                taxiCommand: "ontaxiCommand",
                conciergenewCommand: "onconciergenewCommand",
                housekeepingCommand: "onhousekeepingCommand",
                laundryCommand: "onlaundryCommand",
                hotelViewCommand: "onhotelViewCommand",
                hMasterCommand: "onhMasterCommand"
            },
            internetView:{
                intDataViewCommand: "onintDataViewCommand",
                socialNetworkCommand: "onsocialNetworkCommand",
                favoritiesCommand: "onfavoritiesCommand",
                mostCommand: "onmostCommand"
            },
            cartView:{
                backToMasterViewCommand: "onbackToMasterViewCommand",
                foodDescriptionTapCommand: "onfoodDescriptionTapCommand",
                foodItemListTapCommand: "onfoodItemListTapCommand",
                confirmCommand:"onconfirmCommand",
                myBillCommand: "myBillCommand"
            },
            galleryView: {
                informationCommand: "ongalleryCommandd",
                datagalViewCommand: "ondatagalViewCommand"
            }

        }
    },
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },





    onhotelCommand:function(){
        console.log("hotel");
        /*  Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
         Ext.Viewport.setActiveItem({
         xtype : 'guestinfoview'
         });*/
        var toGO = this.getGuestinfoView();
        Ext.Viewport.animateActiveItem(toGO, this.slideLeftTransition);
    },

    onrestaurantCommand:function(){
        console.log("rest");
        var toGO = this.getRoomserviceView();
        Ext.Viewport.animateActiveItem(toGO, this.slideLeftTransition);
    },
    onconciCommand:function(){
        console.log("congire");
        var toGO = this.getHotelserviceView();
        Ext.Viewport.animateActiveItem(toGO, this.slideLeftTransition);
    },
    onhMasterCommand:function(){
        var toGO = this.getMasterView();
        Ext.Viewport.animateActiveItem(toGO, this.slideLeftTransition);
    },




    onSearchKeyUp: function(field) {
        var productdetailView = this.getProductdetailView();
        var value = productdetailView.down('#searchBtn').getValue();
        var productMasterStore = Ext.getStore("ProductMasters");

        if(value==''){
            console.log("null");
            productMasterStore.setProxy({
                type: 'ajax',
                url: 'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?catId='+tempvariable +'&PageNum=1&PageSize=25'
            });
            productMasterStore.load();
            Ext.getCmp('nxtbtn').show();
        }else{
            console.log("notaneull");
            productMasterStore.setProxy({
                type: 'ajax',
                url: 'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?catId='+tempvariable+'&menuitemname='+value
            });
            productMasterStore.load();
        }


        /*

         productdetailView.down('#dvProduct').setStore(productMasterStore);
         Ext.Viewport.animateActiveItem(productdetailView, this.slideLeftTransition);
         */

    },
    /*   onSearchKeyUp: function(field) {
     console.log("search");
     console.log("tv1j"+tempvariable);
     //get the store and the value of the field
     var productdetailView = this.getProductdetailView();
     var value = productdetailView.down('#searchBtn').getValue();
     store = Ext.getStore("ProductMasters");
     console.log("val"+value);
     //    var value = field.getValue(),
     //       store = this.getStore();

     //first clear any current filters on thes tore
     store.clearFilter();

     //check if a value is set first, as if it isnt we dont have to do anything
     if (value) {
     //the user could have entered spaces, so we must split them so we can loop through them all
     var searches = value.split(' '),
     regexps = [],
     i;

     //loop them all
     for (i = 0; i < searches.length; i++) {
     //if it is nothing, continue
     if (!searches[i]) continue;

     //if found, create a new regular expression which is case insenstive
     regexps.push(new RegExp(searches[i], 'i'));
     }

     //now filter the store by passing a method
     //the passed method will be called for each record in the store
     store.filter(function(record) {
     var matched = [];

     //loop through each of the regular expressions
     for (i = 0; i < regexps.length; i++) {
     var search = regexps[i],
     didMatch = record.get('menu_item_name').match(search)*//* || record.get('lastName').match(search);*//*

     //if it matched the first or last name, push it into the matches array
     matched.push(didMatch);
     }

     //if nothing was found, return false (dont so in the store)
     if (regexps.length > 1 && matched.indexOf(false) != -1) {
     return false;
     } else {
     //else true true (show in the store)
     return matched[0];
     }
     });
     }
     },*/








    onmySettingCommand:function(){
        console.log('set');
        var toGO = this.getSettingView();
        Ext.Viewport.animateActiveItem(toGO, this.slideLeftTransition);
    },
    onenterCommand:function(){
        console.log('master');
        //    var toGO = this.getSettingView();
        //    Ext.Viewport.animateActiveItem(toGO, this.slideLeftTransition);
        Ext.Viewport.setActiveItem({
            xtype : 'masterview'
        });
    },
    onbackToCartCommand:function(){
        localStore = Ext.create('Ext.data.Store', {
            model: "CrotusValet.model.ProductDetail"
        });
        localStore.load();
        localStore.sync();
        console.log('lc'+localStore);
        var chkmsg = localStore.getData().length;
        if(chkmsg != 0) {
            var toGO = this.getCartView();
            Ext.Viewport.animateActiveItem(toGO, this.slideRightTransition);
        }else
        {
            Ext.Msg.alert("No Items In Your Cart!!!");
            var toGO = this.getMasterView();
            Ext.Viewport.animateActiveItem(toGO, this.slideRightTransition);
        }
    },

    onpayNowCommand:function(button, e, eOpts){

        var rvalue = Ext.ComponentQuery.query('radiofield[name=Payment]');
        var cvalue = rvalue[0].getGroupValue();
        console.log('cval'+cvalue);
        if(cvalue=='addtobill'){

            var cartView = this.getCartView();
            var billvalue = cartView.down('#txtitemMyBill').getValue();
            Ext.Msg.alert("Your "+" " +billvalue + " Added to Your Bill");
            this.onorderconfirmed();
            console.log('billvalue'+billvalue);
        }else{
            Ext.Msg.alert("Payment Progress");
            this.onorderconfirmed();
        }




    },

    onorderconfirmed:function(){
        localCountrystore = Ext.create('Ext.data.Store', {   //fly
            model: 'CrotusValet.model.ProductDetail'
        });
        me = this;
        localCountrystore.load();
        var jsonData = '[';
        var recordCount = 0;
        localCountrystore.each(function (record) {   //fly
            recordCount++;
            if (recordCount == 1) {
                jsonData = jsonData + Ext.JSON.encode(record.data);
            }
            else {
                jsonData = jsonData + ',' + Ext.JSON.encode(record.data);
            }
        });
        jsonData = jsonData + ']';
        console.log(jsonData);
        //todo


        Ext.Ajax.request({
            method: 'POST',
            type: 'json',
            /////       url: 'http://1.23.183.6:8085/CrotusValetPushHandler.ashx',
            url: 'http://1.23.183.7/Aurademowcf/CrotusValetPushHandler.ashx',
            // url: 'http://localhost/CrotusValetService/CrotusValetPushHandler.ashx',
            params: jsonData,
            callback: function (options, success, response) {
                Ext.Msg.alert("Order Confirmed!!!");
            },
            success: function (response) {
                console.log("Sucess Res"+response.responseText);

            },
            failure: function (response) {
                console.log("Failure Res"+response);
            }
        });
        localCountrystore.getProxy().clear();
        localCountrystore.data.clear();
        localCountrystore.sync();
        //    Ext.Msg.alert("Payment Progress");
        //   Ext.Msg.alert("comming Soon!!!");
        var toGO = this.getCartView();
        this.myBillCommand();
        //    toGO.down('#txtMyBill').setValue(0);
        localCountrystore.load();
        toGO.down('#lstFoodItems').setStore(localCountrystore);
        var mainview = this.getMasterView();
        Ext.Viewport.animateActiveItem(mainview, this.slideLeftTransition);
    },

    onbackToMainViewCommand:function(){
        console.log('set');
        var toGO = this.getMasterView();
        Ext.Viewport.animateActiveItem(toGO, this.slideLeftTransition);
    },

    onsocialNetworkCommand:function() {
        console.log("onsocialNetworkCommand");
        var intView = this.getInternetView();
        var internerStore = Ext.getStore("Internets");
        internerStore.removeAll();
        // guestStore.load();

        var rec = {
            InternetID: '1',
            InternetClass:'intPics',
            InternetName: 'Facebook',
            //   InternetName: 'MGM',
            //   InternetLogoUrl: 'resources/images/text.jpg'
            InternetLogoUrl: 'resources/images/facebook.jpg'
        };

        internerStore.add(rec);
        var rec = {
            InternetID: '2',
            InternetClass:'intPics',
            InternetName: 'Twitter',
            InternetLogoUrl: 'resources/images/twitter.jpg'
        };
        internerStore.add(rec);
        var rec = {
            InternetID: '3',
            InternetClass:'intPics',
            InternetName: 'Pinterest',
            InternetLogoUrl: 'resources/images/pinterest.jpg'
        };
        internerStore.add(rec);
        var rec = {
            InternetID: '4',
            InternetClass:'intPics',
            InternetName: 'Youtube',
            InternetLogoUrl: 'resources/images/youtube.jpg'
        };
        internerStore.add(rec);
        var rec = {
            InternetID: '3',
            InternetClass:'intPics',
            InternetName: 'Wikipedia',
            InternetLogoUrl: 'resources/images/wiki.jpg'
        };
        internerStore.add(rec);
        intView.down('#dvInternetInfo').setStore(internerStore);
    },



    onfavoritiesCommand:function() {
        console.log("onfavoritiesCommand");
        var intView = this.getInternetView();
        var internerStore = Ext.getStore("Internets");
        internerStore.removeAll();
        // guestStore.load();

        var rec = {
            InternetID: '1',
            InternetClass:'intPics',
            InternetName: 'Google',
            InternetLogoUrl: 'resources/images/google.jpg'
        };

        internerStore.add(rec);
        var rec = {
            InternetID: '2',
            InternetClass:'intPics',
            InternetName: 'Yahoo',
            InternetLogoUrl: 'resources/images/yahoo.jpg'
        };
        internerStore.add(rec);
        var rec = {
            InternetID: '3',
            InternetClass:'intPics',
            InternetName: 'Wikipedia',
            InternetLogoUrl: 'resources/images/wiki.jpg'
        };
        internerStore.add(rec);
        intView.down('#dvInternetInfo').setStore(internerStore);
    },





    onroomdataCommand:function() {
        console.log("onfavoritiesCommand");
        var intView = this.getRoomserviceView();
        var internerStore = Ext.getStore("Internets");
        internerStore.removeAll();
        // guestStore.load();
        var rec = {
            InternetID: '1',
            InternetClass:'intPics',
            InternetName: 'Welcome',
            //   InternetName: 'MGM',
            //   InternetLogoUrl: 'resources/images/text.jpg'
            InternetLogoUrl: 'resources/images/new_images/1.jpg'
        };

        internerStore.add(rec);
        var rec = {
            InternetID: '2',
            InternetClass:'intPics',
            InternetName: 'Meet the Chef',
            InternetLogoUrl: 'resources/images/new_images/2.jpg'
        };
        internerStore.add(rec);
        var rec = {
            InternetID: '3',
            InternetClass:'intPics',
            InternetName: 'Loyalty',
            InternetLogoUrl: 'resources/images/new_images/3.jpg'
        };
        internerStore.add(rec);
        var rec = {
            InternetID: '4',
            InternetClass:'intPics',
            InternetName: 'Wine Supplier',
            InternetLogoUrl: 'resources/images/new_images/4.jpg'
        };
        /*internerStore.add(rec);
        var rec = {
            InternetID: '5',
            InternetClass:'intPics',
            InternetName: 'Wikipedia',
            InternetLogoUrl: 'resources/images/wiki.jpg'
        };*/
        internerStore.add(rec);
        intView.down('#dvRoomDes').setStore(internerStore);
    },










    ontaxiCommand:function()
    {
        console.log('ontaxiCommand');
        //258
        var html = "<h4 id='hname'>Taxi Request</h4><p id='pname'>Taxi will be available at the reception within 5 to 10 mins from the time of booking. You do have the luxury to provide a pickup time</p><br/>";
        var nestedList = new Ext.form.Panel({
            //     displayField: 'text',
            //     floating: true,

            centered: true,
            requires: 'Ext.DateExtras',
            width: '90%',
            padding: '15px',
            itemCls: 'mainpanel',
            height: '60%',
            cls:'floatpanel',
            modal: true,
            hideOnMaskTap: false,
            title: 'categories',
            showAnimation: {
                type: 'fadeIn'
            },
            hideAnimation: {
                type: 'fadeOut'
            },
            layout: {
                align: 'stretch',
                type: 'vbox'
            },
            items: [
                {
                    xtype:'toolbar',
                    title:'Taxi Request',
                    docked:'top'
                },
                {
                    xtype: 'label',
                    html: html,
                    padding: 10,
                    width: '100%'
                },
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'datepickerfield',
                            placeHolder: 'Enter date here...',
                            itemId: "txtDateId",
                            cls: "datePcls",
                            name: 'title',
                            label: 'Date',
                            labelWidth: 165,
                            id: 'arrivaldate',
                            destroyPickerOnHide:true,
                            //picker: {
                            //    yearFrom: 2014,
                            //    yearTo: 2200
                            //},




                            //        dateFormat: 'd-m-Y',
                            //    //destroyPickerOnHide: true,
                            //slotOrder: ['day','month','year'],
                            ////value: new Date(),
                            //align: 'right'

                            picker: {
                                yearFrom: 2014, yearTo: 2100,
                                slotOrder: ['day', 'month', 'year']
                            },
                            dateFormat: 'd-m-Y',
                            value: new Date()

                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        /*   {
                         xtype: 'textfield',
                         //       placeHolder: 'Enter Nr.of.Pax here...',
                         itemId: "txtTimeId",
                         name: 'title',
                         width: '90%',
                         label: 'Time',
                         labelWidth: 165,
                         id: 'arrivaldate'
                         },*/

                        {
                            xtype: 'selectfield',
                            //     placeHolder: 'Enter Time here...',
                            itemId: "txtTimeId",
                            name: 'title',
                            //      width: '20px',
                            label: 'Time',
                            //   label: 'Time(Format-24 hours)',
                            labelWidth: 165,
                            id: 'arrivaldate',
                            options: [
                                {text: '00 hours',  value: '00'},
                                {text: '01 hours',  value: '01'},
                                {text: '02 hours',  value: '02'},
                                {text: '03 hours',  value: '03'},
                                {text: '04 hours',  value: '04'},
                                {text: '05 hours',  value: '05'},
                                {text: '06 hours',  value: '06'},
                                {text: '07 hours',  value: '07'},
                                {text: '08 hours',  value: '08'},
                                {text: '09 hours',  value: '09'},
                                {text: '10 hours',  value: '10'},
                                {text: '11 hours',  value: '11'},
                                {text: '12 hours',  value: '12'},
                                {text: '13 hours',  value: '13'},
                                {text: '14 hours',  value: '14'},
                                {text: '15 hours',  value: '15'},
                                {text: '16 hours',  value: '16'},
                                {text: '17 hours',  value: '17'},
                                {text: '18 hours',  value: '18'},
                                {text: '19 hours',  value: '19'},
                                {text: '20 hours',  value: '20'},
                                {text: '21 hours',  value: '21'},
                                {text: '22 hours',  value: '22'},
                                {text: '23 hours',  value: '23'}
                            ]
                        },
                        {
                            xtype: 'selectfield',
                            //       placeHolder: 'Enter Time here...',
                            itemId: "txtMinId",
                            name: 'title',
                            //    width: '20px',
                            //    label: 'Min',
                            //    labelWidth: 165,
                            id: 'arrivaldate',
                            options: [
                                {text: '00 mins',  value: '00'},
                                {text: '10 mins',  value: '10'},
                                {text: '20 mins',  value: '20'},
                                {text: '30 mins',  value: '30'},
                                {text: '40 mins',  value: '40'},
                                {text: '50 mins',  value: '50'}
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'spinnerfield',
                            value: 1,
                            minValue: 1,
                            maxValue: 20,
                            stepValue: 1,
                            cycle: false,
                            //       xtype: 'textfield',
                            clearIcon:false,
                            //       placeHolder: 'Enter Nr.of.Pax here...',
                            itemId: "txtPaxId",
                            name: 'title',
                            width: '90%',
                            label: 'Nr.of.Pax',
                            labelWidth: 165,
                            id: 'arrivaldate'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'spinnerfield',
                            value: 1,
                            minValue: 1,
                            maxValue: 20,
                            stepValue: 1,
                            cycle: false,
                            //      xtype: 'textfield',
                            clearIcon:false,
                            //      placeHolder: 'Enter Nr.of.Children here...',
                            itemId: "txtChildId",
                            name: 'title',
                            width: '90%',
                            label: 'No.of.Children',
                            labelWidth: 165,
                            id: 'arrivaldate'
                        }
                    ]
                },


                {
                    xtype: 'textareafield',
                    style:{
                        'border':'none',
                        'overflow':'auto'
                    },
                    clearIcon:false,
                    placeHolder: 'Enter time and date for the taxi arrival...',
                    itemId: "txtTaxiId",
                    name: 'title',
                    width: '98%'
                    //label: 'Taxi Request',
                    // labelWidth: '120px'

                },
                /*  {
                 xtype:'button',
                 text:'submit',
                 style:{
                 'background-color':'#1C8A06 !important;',
                 'width':'100px'
                 },
                 itemCls:'submit_btns'
                 },*/
                {
                    xtype: 'button',
                    text: 'Submit',
                    style:{
                        'background-color':'#db253b'
                    },
                    align: 'center',
                    docked: 'bottom',
                    cls: 'pansbutton',
                    width:'85px',
                    handler: function () {
                        var paneltext = nestedList.down('#txtTaxiId').getValue();
                        var paneldate = nestedList.down('#txtDateId').getValue();
                        var panelpax = nestedList.down('#txtPaxId').getValue();
                        var panelchild = nestedList.down('#txtChildId').getValue();
                        var panelhrs = nestedList.down('#txtTimeId').getValue();
                        var panelmin = nestedList.down('#txtMinId').getValue();
                        var paneltime = panelhrs+':'+panelmin;
                        console.log('panel'+panelhrs,'panelmin'+panelmin,'time'+paneltime);

                //        paneltext = paneltext+'+'+paneldate+'+'+paneltime+'+'+panelpax+'+'+panelchild;

                        paneltext = 'date:' + paneldate + ', ' + 'Time:' + paneltime + ', ' + 'No.Of.Pax:' + panelpax + ', ' + 'No.Of.Child:' + panelchild + ', ' + 'Request:' + paneltext;



                        var requestname = 'Taxi Request';
                        var requestno = "3";
                        console.log(requestname);
                        console.log(paneltext);

                        settingslocalStore = Ext.create('Ext.data.Store', {
                            model: "CrotusValet.model.Setting"
                        });
                        settingslocalStore.load();

                        if(settingslocalStore.getData().length==0) {
                            Ext.Msg.alert("Check-In Required!!!");
                            return;
                        }
                        settingslocalStore.each(function (record) {


                            console.log(record.data.res_name);
                            console.log(record.data.res_id);
                            //sendmail

                            Ext.define('Login', {
                                extend: 'Ext.data.Model',
                                config: {
                                    fields: [
                                        { name: 'requestname', type: 'string' },
                                        { name: 'requestcontent', type: 'string' },
                                        { name: 'resId', type: 'string' },
                                        { name: 'resname', type: 'string' }

                                    ]
                                }
                            });
                            loginStore = Ext.create('Ext.data.Store', {
                                model: Login
                            });

                            loginStore.setProxy({
                                type: 'ajax',
                                //   url: ' http://localhost/CrotusValetService/CrotusValetHandler.ashx?requestname=' + requestname + '&requestcontent=' + paneltext + '&resId=' + record.data.ResId + '&resname=' + record.data.ResName
                                url: 'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?requestname=' + requestname + '&requestcontent=' + paneltext + '&resId=' + record.data.res_id + '&resname=' + record.data.res_name

                            });
                            loginStore.getProxy().on('exception',function () {
                                console.log("check internet");
                                Ext.Msg.alert("Check Internet!!!");
                                return;
                            });
                            loginStore.load();

                        });

                        nestedList.hide();


                    }
                },
                {
                    xtype: 'button',
                    //     text: 'Close',
                    cls: 'panelbtn',
                    docked: 'top',
                    handler: function () {
                        nestedList.hide();
                    }
                }
            ]
        });
        //   nestedList.setHtml(html);
        Ext.Viewport.add(nestedList);
        nestedList.show({
            type: 'pop',
            isComponent: true
        });

















        //  var mostUsedView = this.getGuestinfoView();
        //  var guestStore = Ext.getStore("GuestInfs");
        //  guestStore.removeAll();
        //  // guestStore.load();

        // /* var rec = {
        //      DataID: '1',
        //      DataClass:'facList',
        //      DataName: 'Test',
        //      DataLogoUrl: 'resources/images/text.jpg'
        //  };


        //  guestStore.add(rec);*/
        //  var rec = {
        //      DataID: '2',
        //      DataClass:'facList',
        //      DataName: 'Internet Connection',
        //      DataLogoUrl: 'resources/images/internetconnection.jpg'
        //  };


        //  guestStore.add(rec);
        ///*  var rec = {
        //      DataID: '3',
        //      DataClass:'facList',
        //      DataName: 'Bussiness Center',
        //      DataLogoUrl: 'resources/images/bussinesscenter.jpg'
        //  };


        //  guestStore.add(rec);*/
        //  var rec = {
        //      DataID: '4',
        //      DataClass:'facList',
        //      DataName: 'Play Area',
        //      DataLogoUrl: 'resources/images/playarea.jpg'
        //  };
        //  guestStore.add(rec);
        //  mostUsedView.down('#dvGuestInfo').setStore(guestStore);
    },


    onhotelViewCommand:function (list, target, index, record, evt, options) {

        var hotname = record.get("ImgName");
        if (hotname == 'Alarm Call Service') {

            console.log('alarm');


            var html = "<h4 id='hname'>Alarm Call Service</h4><p id='pname'>Need a wakeup call at any time during a day, just call our reception and they will be happy to help you. Just relax and be at ease and our receptionist will remind you at the exact time</p><br/>";
            var nestedList = new Ext.form.Panel({
                //     displayField: 'text',
                //     floating: true,
                centered: true,
                padding: '15px',
                width: '90%',
                itemCls: 'mainpanel',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                layout: {
                    align: 'stretch',
                    type: 'vbox'
                },
                items:  [
                    {
                        xtype:'toolbar',
                        title:'Alarm Call Service',
                        docked:'top'
                    },
                    {
                        xtype: 'label',
                        html: html,
                        padding: 10,
                        width: '100%'
                    },
                    /* {
                     xtype: 'container',
                     items: [
                     {
                     xtype: 'togglefield',
                     itemId: 'tfOnOff',
                     name: 'Enable Alarm',
                     width: '100%',
                     labelWidth: 165,
                     label: 'Enable Alarm',
                     value: 1
                     }
                     ]
                     },*/
                    {
                        xtype: 'container',
                        items: [
                            {
                                xtype: 'datepickerfield',
                                placeHolder: 'Enter date here...',
                                itemId: "txtDateId",
                                name: 'title',
                                width: '90%',
                                label: 'Date',
                                labelWidth: 165,
                                id: 'arrivaldate',
                                value:new Date(),
                                destroyPickerOnHide:true,
                                picker: {
                                    yearFrom: 2014, yearTo: 2015,
                                    slotOrder: ['day', 'month', 'year']
                                },
                                dateFormat: 'd-m-Y'

                            }
                        ]
                    },
                    /* {
                     xtype: 'container',
                     items: [
                     {
                     xtype: 'textfield',
                     placeHolder: 'Enter time here...',
                     itemId: "txtTimeId",
                     name: 'title',
                     width: '90%',
                     label: 'Time',
                     labelWidth: 165
                     }
                     ]
                     },*/
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            /*   {
                             xtype: 'textfield',
                             //       placeHolder: 'Enter Nr.of.Pax here...',
                             itemId: "txtTimeId",
                             name: 'title',
                             width: '90%',
                             label: 'Time',
                             labelWidth: 165,
                             id: 'arrivaldate'
                             },*/

                            {
                                xtype: 'selectfield',
                                //     placeHolder: 'Enter Time here...',
                                itemId: "txtTimeId",
                                name: 'title',
                                //   width: '20px',
                                label: 'Time',
                                //  label: 'Time(Format-24 hours)',
                                labelWidth: 165,
                                id: 'arrivaldate',
                                options: [
                                    {text: '00 hours',  value: '00'},
                                    {text: '01 hours',  value: '01'},
                                    {text: '02 hours',  value: '02'},
                                    {text: '03 hours',  value: '03'},
                                    {text: '04 hours',  value: '04'},
                                    {text: '05 hours',  value: '05'},
                                    {text: '06 hours',  value: '06'},
                                    {text: '07 hours',  value: '07'},
                                    {text: '08 hours',  value: '08'},
                                    {text: '09 hours',  value: '09'},
                                    {text: '10 hours',  value: '10'},
                                    {text: '11 hours',  value: '11'},
                                    {text: '12 hours',  value: '12'},
                                    {text: '13 hours',  value: '13'},
                                    {text: '14 hours',  value: '14'},
                                    {text: '15 hours',  value: '15'},
                                    {text: '16 hours',  value: '16'},
                                    {text: '17 hours',  value: '17'},
                                    {text: '18 hours',  value: '18'},
                                    {text: '19 hours',  value: '19'},
                                    {text: '20 hours',  value: '20'},
                                    {text: '21 hours',  value: '21'},
                                    {text: '22 hours',  value: '22'},
                                    {text: '23 hours',  value: '23'}
                                ]
                            },
                            {
                                xtype: 'selectfield',
                                //       placeHolder: 'Enter Time here...',
                                itemId: "txtMinId",
                                name: 'title',
                                //    width: '20px',
                                //    label: 'Min',
                                //    labelWidth: 165,
                                id: 'arrivaldate',
                                options: [
                                    {text: '00 mins',  value: '00'},
                                    {text: '10 mins',  value: '10'},
                                    {text: '20 mins',  value: '20'},
                                    {text: '30 mins',  value: '30'},
                                    {text: '40 mins',  value: '40'},
                                    {text: '50 mins',  value: '50'}

                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',

                        items: [
                            {
                                xtype: 'textareafield',
                                style:{
                                    'border':'none',
                                    'overflow':'auto'
                                },
                                clearIcon:false,
                                placeHolder: 'Enter your request here...',
                                itemId: "txtRequestId",
                                name: 'title',
                                width: '98%'
                            }

                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        style:{
                            'background-color':'#db253b'
                        },
                        align: 'center',
                        docked: 'bottom',
                        cls: 'pansbutton',
                        width:'85px',
                        handler: function () {
                            var requestname = 'Alarm Request';
                            var panelrequest = 'datetime';
                      //      var ResId = '123';
                      //      var ResName = 'dinesh';

                            var requestno = "1";
                            console.log(requestname);
                            //      var paneltime = nestedList.down('#txtTimeId').getValue();
                            var paneldate = nestedList.down('#txtDateId').getValue();
                  //          var panelrequest = nestedList.down('#txtRequestId').getValue();
                            var panelhrs = nestedList.down('#txtTimeId').getValue();
                            var panelmin = nestedList.down('#txtMinId').getValue();
                            var paneltime = panelhrs+':'+panelmin;
                            console.log('panel'+panelhrs,'panelmin'+panelmin,'time'+paneltime);
                  /////////          panelrequest = panelrequest+'+'+paneldate+'+'+paneltime;
                ////////       panelrequest='date:'+paneldate+', '+'Time:'+paneltime+', '+'Request:' + panelrequest;
                            console.log("panelRequest"+panelrequest);


                            settingslocalStore = Ext.create('Ext.data.Store', {
                                model: "CrotusValet.model.Setting"
                            });
                            settingslocalStore.load();
                            if(settingslocalStore.getData().length==0) {
                                Ext.Msg.alert("Check-In Required!!!");
                                return;
                            }
                            settingslocalStore.each(function (record) {


                                console.log(record.data.res_name);
                                console.log(record.data.res_id);
                                //sendmail

                                Ext.define('Login', {
                                    extend: 'Ext.data.Model',
                                    config: {
                                        fields: [
                                            { name: 'requestname', type: 'string' },
                                            { name: 'requestcontent', type: 'string' },
                                            { name: 'resId', type: 'string' },
                                            { name: 'resname', type: 'string' }

                                        ]
                                    }
                                });
                                loginStore = Ext.create('Ext.data.Store', {
                                    model: Login
                                });

                                loginStore.setProxy({
                                    type: 'ajax',
                                    //    url: ' http://localhost/CrotusValetService/CrotusValetHandler.ashx?requestname=' + requestname + '&requestcontent=' + panelrequest + '&resId=' + record.data.ResId + '&resname=' + record.data.ResName
                                    url: 'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?requestname=' + requestname + '&requestcontent=' + panelrequest + '&resId=' + record.data.res_id + '&resname=' + record.data.res_name

                                });
                                loginStore.getProxy().on('exception',function () {
                                    console.log("check internet");
                                    Ext.Msg.alert("Check Internet!!!");
                                    return;
                                });
                                loginStore.load();

                            });



                            nestedList.hide();
                        }
                    },
                    {
                        xtype: 'button',
                        //     text: 'Close',
                        cls: 'panelbtn',
                        docked: 'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]

            });
            //     nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type: 'pop',
                isComponent: true
            });
        }else
        if(hotname == 'How Can We Help You'){
            console.log('How Can We Help You');



            var html = "<h4 id='hname'>How Can We Help You</h4><p id='pname'>If you are not sure to whom to reach out for your query, nothing to worry, we will take care of it and address it appropriately with our experienced professionals. Let us know what you want and we will revert back at the earliest. Our team will be happy to assist you ! <!-- Exclusive and elite laundry service shall be utilised. Our team of professionals will handle your clothes with care and deliver it with good quality. Dry cleaning facility is also available in our laundry. We have our own inhouse laundry to serve better, quicker for you to look at your best --></p><br/>";
            var nestedList = new Ext.form.Panel({
                //     displayField: 'text',
                //     floating: true,
                centered: true,
                padding: '15px',
                width: '90%',
                itemCls: 'mainpanel',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                layout: {
                    align: 'stretch',
                    type: 'vbox'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'How Can We Help You',
                        docked:'top'
                    },
                    {
                        xtype: 'label',
                        html: html,
                        padding: 10,
                        width: '100%'
                    },
                    {
                        xtype: 'textareafield',
                        clearIcon:false,
                        placeHolder: 'Enter Your Request Here...',
                        itemId: "txtHelpId",
                        style:{
                            'border':'none',
                            'overflow':'auto'
                        },
                        name: 'title',
                        width: '98%'
                        //label: 'Laundry Request',
                        //labelWidth: '160px'
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        align: 'center',
                        cls: 'pansbutton',
                        docked: 'bottom',
                        width: '85px',
                        handler: function () {
                            var requestname = 'How Can We Help You';
                            var requestno = "2";
                            console.log(requestname);
                            var paneltext = nestedList.down('#txtHelpId').getValue();
                            console.log(paneltext);

                            //todo
                            settingslocalStore = Ext.create('Ext.data.Store', {
                                model: "CrotusValet.model.Setting"
                            });
                            settingslocalStore.load();
                            if(settingslocalStore.getData().length==0) {
                                Ext.Msg.alert("Check-In Required!!!");
                                return;
                            }
                            settingslocalStore.each(function (record) {


                                console.log(record.data.res_name);
                                console.log(record.data.res_id);
                                //sendmail

                                Ext.define('Login', {
                                    extend: 'Ext.data.Model',
                                    config: {
                                        fields: [
                                            { name: 'requestname', type: 'string' },
                                            { name: 'requestcontent', type: 'string' },
                                            { name: 'resId', type: 'string' },
                                            { name: 'resname', type: 'string' }

                                        ]
                                    }
                                });
                                loginStore = Ext.create('Ext.data.Store', {
                                    model: Login
                                });

                                loginStore.setProxy({
                                    type: 'ajax',
                                    //    url: ' http://localhost/CrotusValetService/CrotusValetHandler.ashx?requestname=' + requestname + '&requestcontent=' + paneltext + '&resId=' + record.data.ResId + '&resname=' + record.data.ResName
                                    url: 'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?requestname=' + requestname + '&requestcontent=' + paneltext + '&resId=' + record.data.res_id + '&resname=' + record.data.res_name

                                });
                                loginStore.getProxy().on('exception',function () {
                                    console.log("check internet");
                                    Ext.Msg.alert("Check Internet!!!");
                                    return;
                                });
                                loginStore.load();

                            });

                            nestedList.hide();


                        }
                    },
                    {
                        xtype: 'button',
                        //     text: 'Close',
                        cls: 'panelbtn',
                        docked: 'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            //    nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type: 'pop',
                isComponent: true
            });


        }


    },


    onconciergenewCommand:function(){



        var hotelView = this.getHotelserviceView();
        var hotelStore = Ext.getStore("Hotelsers");
        hotelStore.removeAll();
        // guestStore.load();

        var rec = {
            ImgID: '1',
            ImgClass:'hotPics',
            ImgName: 'Alarm Call Service',
            ImgLogoUrl: 'resources/images/Alarm.jpg'
        };
        hotelStore.add(rec);
        var rec = {
            ImgID: '2',
            ImgClass:'hotPics',
            ImgName: 'How Can We Help You',
            ImgLogoUrl: 'resources/images/monitoring.jpg'
        };
        hotelStore.add(rec);
        hotelView.down('#dvHotelInfo').setStore(hotelStore);
    },



    onhousekeepingCommand:function(){
        console.log('onhousekeepingCommand');

        var html = "<h4 id='hname'>HouseKeeping Request</h4><p id='pname'> As the name goes by, you shall be at ease as if you are at home. Resort will try to provide everything thats available at home, if you missed to bring it. Following will be available on a simple request to our help desk: Request for a shampoo, Soap, pillow change, additional bed sheets, extra bed or baby cot etc., shall be made and availed.</p><br/>";
        var nestedList = new Ext.form.Panel({
            //     displayField: 'text',
            //     floating: true,
            centered: true,
            padding: '15px',
            width: '90%',
            itemCls: 'mainpanel',
            height: '50%',
            cls:'floatpanel',
            modal: true,
            hideOnMaskTap: false,
            title: 'categories',
            showAnimation: {
                type: 'fadeIn'
            },
            hideAnimation: {
                type: 'fadeOut'
            },
            layout: {
                align: 'stretch',
                type: 'vbox'
            },
            items: [
                {
                    xtype:'toolbar',
                    title:'HouseKeeping Request',
                    docked:'top'
                },
                {
                    xtype: 'label',
                    html: html,
                    padding: 10,
                    width: '100%'
                },
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'datepickerfield',
                            placeHolder: 'Enter date here...',
                            itemId: "txtDateId",
                            name: 'title',
                            width: '90%',
                            label: 'Date',
                            labelWidth: 165,
                            id: 'arrivaldate',
                            value:new Date(),
                            destroyPickerOnHide:true,
                            picker: {
                                yearFrom: 2014, yearTo: 2015,
                                slotOrder: ['day', 'month', 'year']
                            },
                            dateFormat: 'd-m-Y'
                        }
                    ]
                },
                /*  {
                 xtype: 'container',
                 items: [
                 {
                 xtype: 'textfield',
                 placeHolder: 'Enter Time here...',
                 itemId: "txtTimeId",
                 name: 'title',
                 width: '90%',
                 label: 'Time',
                 labelWidth: 165,
                 id: 'arrivaldate'
                 }
                 ]
                 },*/
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        /*   {
                         xtype: 'textfield',
                         //       placeHolder: 'Enter Nr.of.Pax here...',
                         itemId: "txtTimeId",
                         name: 'title',
                         width: '90%',
                         label: 'Time',
                         labelWidth: 165,
                         id: 'arrivaldate'
                         },*/

                        {
                            xtype: 'selectfield',
                            //     placeHolder: 'Enter Time here...',
                            itemId: "txtTimeId",
                            name: 'title',
                            //      width: '20px',
                            // label: 'Time(Format-24 hours)',
                            label: 'Time',
                            labelWidth: 165,
                            id: 'arrivaldate',
                            options: [
                                {text: '00 hours',  value: '00'},
                                {text: '01 hours',  value: '01'},
                                {text: '02 hours',  value: '02'},
                                {text: '03 hours',  value: '03'},
                                {text: '04 hours',  value: '04'},
                                {text: '05 hours',  value: '05'},
                                {text: '06 hours',  value: '06'},
                                {text: '07 hours',  value: '07'},
                                {text: '08 hours',  value: '08'},
                                {text: '09 hours',  value: '09'},
                                {text: '10 hours',  value: '10'},
                                {text: '11 hours',  value: '11'},
                                {text: '12 hours',  value: '12'},
                                {text: '13 hours',  value: '13'},
                                {text: '14 hours',  value: '14'},
                                {text: '15 hours',  value: '15'},
                                {text: '16 hours',  value: '16'},
                                {text: '17 hours',  value: '17'},
                                {text: '18 hours',  value: '18'},
                                {text: '19 hours',  value: '19'},
                                {text: '20 hours',  value: '20'},
                                {text: '21 hours',  value: '21'},
                                {text: '22 hours',  value: '22'},
                                {text: '23 hours',  value: '23'}
                            ]
                        },
                        {
                            xtype: 'selectfield',
                            //       placeHolder: 'Enter Time here...',
                            itemId: "txtMinId",
                            name: 'title',
                            //    width: '20px',
                            //    label: 'Min',
                            //    labelWidth: 165,
                            id: 'arrivaldate',
                            options: [
                                {text: '00 mins',  value: '00'},
                                {text: '10 mins',  value: '10'},
                                {text: '20 mins',  value: '20'},
                                {text: '30 mins',  value: '30'},
                                {text: '40 mins',  value: '40'},
                                {text: '50 mins',  value: '50'}
                            ]
                        }
                    ]
                },
                {
                    xtype: 'textareafield',
                    clearIcon:false,
                    placeHolder: 'Enter What you want and when you want here...',
                    itemId: "txtHouseId",
                    style:{
                        'border': 'none',
                        'overflow':'auto'
                    },
                    name: 'title',
                    width: '98%'
                    //label: 'HouseKeeping Request',
                    //labelWidth: '215px'

                },
                /* {
                 xtype:'button',
                 text:'submit',
                 style:{
                 'background-color':'#1C8A06 !important;',
                 'width':'100px'
                 },
                 itemCls:'submit_btns'
                 },*/
                {
                    xtype: 'button',
                    text: 'Submit',
                    align: 'center',
                    docked: 'bottom',
                    cls: 'pansbutton',
                    width: '85px',
                    handler: function () {
                        var requestname = 'HouseKeeping Request';
                        var requestno = "4";
                        console.log(requestname);
                        //      var paneltime = nestedList.down('#txtTimeId').getValue();
                        var paneldate = nestedList.down('#txtDateId').getValue();
                        var paneltext = nestedList.down('#txtHouseId').getValue();
                        var panelhrs = nestedList.down('#txtTimeId').getValue();
                        var panelmin = nestedList.down('#txtMinId').getValue();
                        var paneltime = panelhrs+':'+panelmin;
                        console.log('panel'+panelhrs,'panelmin'+panelmin,'time'+paneltime);
            /////////            paneltext = paneltext+'+'+paneldate+'+'+paneltime;
                    paneltext='date:'+paneldate+', '+'Time:'+paneltime+', '+'Request:' + paneltext;
                        /*    var getdate = 'kjeckjc';
                         var gettext = 'cklc';
                         var getarea = 'hshk';
                         */
                        console.log(paneltext);
                        settingslocalStore = Ext.create('Ext.data.Store', {
                            model: "CrotusValet.model.Setting"
                        });
                        settingslocalStore.load();
                        if(settingslocalStore.getData().length==0) {
                            Ext.Msg.alert("Check-In Required!!!");
                            return;
                        }
                        settingslocalStore.each(function (record) {


                            console.log(record.data.res_name);
                            console.log(record.data.res_id);
                            //sendmail

                            Ext.define('Login', {
                                extend: 'Ext.data.Model',
                                config: {
                                    fields: [
                                        { name: 'requestname', type: 'string' },
                                        { name: 'requestcontent', type: 'string' },
                                        { name: 'resId', type: 'string' },
                                        { name: 'resname', type: 'string' }

                                    ]
                                }
                            });
                            loginStore = Ext.create('Ext.data.Store', {
                                model: Login
                            });

                            loginStore.setProxy({
                                type: 'ajax',
                                //     url: ' http://localhost/CrotusValetService/CrotusValetHandler.ashx?requestname=' + requestname + '&requestcontent=' + paneltext + '&resId=' + record.data.ResId + '&resname=' + record.data.ResName
                                url: 'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?requestname=' + requestname + '&requestcontent=' + paneltext + '&resId=' + record.data.res_id + '&resname=' + record.data.res_name
                                //     url: 'https://localhost:62554/CrotusValetHandler.ashx?requestname=' + requestname + '&requestcontent=' + getdate + '&resId=' + gettext + '&resname=' + getarea

                            });
                            loginStore.getProxy().on('exception',function () {
                                console.log("check internet");
                                Ext.Msg.alert("Check Internet!!!");
                                return;
                            });
                            loginStore.load();

                        });

                        nestedList.hide();
                    }
                },
                {
                    xtype: 'button',
                    //     text: 'Close',
                    cls: 'panelbtn',
                    docked: 'top',
                    handler: function () {
                        nestedList.hide();
                    }
                }
            ]
        });
        //    nestedList.setHtml(html);
        Ext.Viewport.add(nestedList);
        nestedList.show({
            type: 'pop',
            isComponent: true
        });
    },




    onlaundryCommand:function(){
        console.log('onlaundryCommand');

        var html = "<h4 id='hname'>Laundry Request</h4><p id='pname'> Exclusive and elite laundry service shall be utilised. Our team of professionals will handle your clothes with care and deliver it with good quality. Dry cleaning facility is also available in our laundry. We have our own inhouse laundry to serve better, quicker for you to look at your best</p><br/>";
        var nestedList = new Ext.form.Panel({
            //     displayField: 'text',
            //     floating: true,
            centered: true,
            padding: '15px',
            width: '90%',
            itemCls: 'mainpanel',
            height: '50%',
            cls:'floatpanel',
            modal: true,
            hideOnMaskTap: false,
            title: 'categories',
            showAnimation: {
                type: 'fadeIn'
            },
            hideAnimation: {
                type: 'fadeOut'
            },
            layout: {
                align: 'stretch',
                type: 'vbox'
            },
            items: [
                {
                    xtype:'toolbar',
                    title:'Laundry Request',
                    docked:'top'

                },
                {
                    xtype: 'label',
                    html: html,
                    padding: 10,
                    width: '100%'
                },
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'datepickerfield',
                            placeHolder: 'Enter date here...',
                            itemId: "txtDateId",
                            name: 'title',
                            width: '90%',
                            label: 'Date',
                            labelWidth: 165,
                            id: 'arrivaldate',
                            value:new Date(),
                            destroyPickerOnHide:true,
                            picker: {
                                yearFrom: 2014, yearTo: 2015,
                                slotOrder: ['day', 'month', 'year']
                            },
                            dateFormat: 'd-m-Y'
                        }
                    ]
                },
                /* {
                 xtype: 'container',
                 items: [
                 {
                 xtype: 'textfield',
                 placeHolder: 'Enter Time here...',
                 itemId: "txtTimeId",
                 name: 'title',
                 width: '90%',
                 label: 'Time',
                 labelWidth: 165,
                 id: 'arrivaldate'
                 }
                 ]
                 },*/
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        /*   {
                         xtype: 'textfield',
                         //       placeHolder: 'Enter Nr.of.Pax here...',
                         itemId: "txtTimeId",
                         name: 'title',
                         width: '90%',
                         label: 'Time',
                         labelWidth: 165,
                         id: 'arrivaldate'
                         },*/

                        {
                            xtype: 'selectfield',
                            //     placeHolder: 'Enter Time here...',
                            itemId: "txtTimeId",
                            name: 'title',
                            //      width: '20px',
                            label: 'Time',
                            //   label: 'Time(Format-24 hours)',
                            labelWidth: 165,
                            id: 'arrivaldate',
                            options: [
                                {text: '00 hours',  value: '00'},
                                {text: '01 hours',  value: '01'},
                                {text: '02 hours',  value: '02'},
                                {text: '03 hours',  value: '03'},
                                {text: '04 hours',  value: '04'},
                                {text: '05 hours',  value: '05'},
                                {text: '06 hours',  value: '06'},
                                {text: '07 hours',  value: '07'},
                                {text: '08 hours',  value: '08'},
                                {text: '09 hours',  value: '09'},
                                {text: '10 hours',  value: '10'},
                                {text: '11 hours',  value: '11'},
                                {text: '12 hours',  value: '12'},
                                {text: '13 hours',  value: '13'},
                                {text: '14 hours',  value: '14'},
                                {text: '15 hours',  value: '15'},
                                {text: '16 hours',  value: '16'},
                                {text: '17 hours',  value: '17'},
                                {text: '18 hours',  value: '18'},
                                {text: '19 hours',  value: '19'},
                                {text: '20 hours',  value: '20'},
                                {text: '21 hours',  value: '21'},
                                {text: '22 hours',  value: '22'},
                                {text: '23 hours',  value: '23'}
                            ]
                        },
                        {
                            xtype: 'selectfield',
                            //       placeHolder: 'Enter Time here...',
                            itemId: "txtMinId",
                            name: 'title',
                            //    width: '20px',
                            //    label: 'Min',
                            //    labelWidth: 165,
                            id: 'arrivaldate',
                            options: [
                                {text: '00 mins',  value: '00'},
                                {text: '10 mins',  value: '10'},
                                {text: '20 mins',  value: '20'},
                                {text: '30 mins',  value: '30'},
                                {text: '40 mins',  value: '40'},
                                {text: '50 mins',  value: '50'}
                            ]
                        }
                    ]
                },
                {
                    xtype: 'textareafield',
                    clearIcon:false,
                    placeHolder: 'Enter Your Request Here...',
                    itemId: "txtLaundryId",
                    style:{
                        'border':'none',
                        'overflow':'auto'
                    },
                    name: 'title',
                    width: '98%'
                    //label: 'Laundry Request',
                    //labelWidth: '160px'

                },
                {
                    xtype: 'button',
                    text: 'Submit',
                    align: 'center',
                    docked: 'bottom',
                    cls: 'pansbutton',
                    width: '85px',
                    handler: function () {
                        var requestname = 'Laundry Request';
                        var requestno = "5";
                        console.log(requestname);
                        //       var paneltime = nestedList.down('#txtTimeId').getValue();
                        var paneldate = nestedList.down('#txtDateId').getValue();
                        var paneltext = nestedList.down('#txtLaundryId').getValue();
                        var panelhrs = nestedList.down('#txtTimeId').getValue();
                        var panelmin = nestedList.down('#txtMinId').getValue();
                        var paneltime = panelhrs+':'+panelmin;
                        console.log('panel'+panelhrs,'panelmin'+panelmin,'time'+paneltime);
              ////////////          paneltext = paneltext+'+'+paneldate+'+'+paneltime;
                   paneltext='date:'+paneldate+', '+'Time:'+paneltime+', '+'Request:' + paneltext;
                        console.log("test"+paneltext);
                        settingslocalStore = Ext.create('Ext.data.Store', {
                            model: "CrotusValet.model.Setting"
                        });
                        settingslocalStore.load();
                        if(settingslocalStore.getData().length==0) {
                            Ext.Msg.alert("Check-In Required!!!");
                            return;
                        }
                        settingslocalStore.each(function (record) {


                            console.log(record.data.res_name);
                            console.log(record.data.res_id);
                            //sendmail

                            Ext.define('Login', {
                                extend: 'Ext.data.Model',
                                config: {
                                    fields: [
                                        { name: 'requestname', type: 'string' },
                                        { name: 'requestcontent', type: 'string' },
                                        { name: 'resId', type: 'string' },
                                        { name: 'resname', type: 'string' }

                                    ]
                                }
                            });
                            loginStore = Ext.create('Ext.data.Store', {
                                model: Login
                            });

                            loginStore.setProxy({
                                type: 'ajax',
                                //      url: ' http://localhost/CrotusValetService/CrotusValetHandler.ashx?requestname=' + requestname + '&requestcontent=' + paneltext + '&resId=' + record.data.ResId + '&resname=' + record.data.ResName
                                url: 'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?requestname=' + requestname + '&requestcontent=' + paneltext + '&resId=' + record.data.res_id + '&resname=' + record.data.res_name

                            });
                            loginStore.getProxy().on('exception',function () {
                                console.log("check internet");
                                Ext.Msg.alert("Check Internet!!!");
                                return;
                            });
                            loginStore.load();

                        });

                        nestedList.hide();
                    }
                },
                {
                    xtype: 'button',
                    //     text: 'Close',
                    cls: 'panelbtn',
                    docked: 'top',
                    handler: function () {
                        nestedList.hide();
                    }
                }
            ]
        });
        //    nestedList.setHtml(html);
        Ext.Viewport.add(nestedList);
        nestedList.show({
            type: 'pop',
            isComponent: true
        });
    },


    onroomDesCommand: function(list, target, index, record, evt, options){
        var dataname = record.get("InternetID");
        if (dataname == '1') {

            var availabilityView = this.getRoomserviceView();
            var container1 = availabilityView.down("#roomcont1");
            var html = "<h4 id='hname'><small class=\"smallText\">Welcome to</small><br/>Forte Do Vale</h4><p id='pname'>Forte Do Vale offers apartments with a fully equipped kitchen and a private balcony, just 500 metres from Forte Beach in Albufeira.<br/>                                The air-conditioned apartments of Hotel Apartamento Forte Do Vale are bright and airy and feature a modern and colourful interior. All apartments have floor-to-ceiling windows, satellite TV and a private bathroom.<br/>                                The outdoor swimming pool is surrounded by a spacious terrace equipped with sun loungers. Free Wi-Fi can be accessed in public areas.<br/>                                Hotel Apartamento Forte Do Vale's restaurant offers local and international cuisine. The bar serves a wide variety of drinks and light snacks.<br/>Many Albufeira restaurants, bars, and shops are within walking distance of Forte Do Vale. Santa Eulália Beach is 2.2 km from the hotel, and the Modelo Shopping Center is 1.2 km away.</p><br/>"
            container1.setHtml(html);
        }else
            if (dataname == '2') {

                var availabilityView = this.getRoomserviceView();
                var container1 = availabilityView.down("#roomcont1");
                var html = "<h4 id='hname'><small class=\"smallText\">Meet the</small><br/>Chef</h4><p id='pname'>The Twitter consists of two double or twin bedrooms, sofa bed, flat screen TV, bathrooms, fitted kitchen with large living and dining area. The furnished sun terrace offers stunning views over the beautiful gardens and the Atlantic ocean.</p> <p id='pname'>Max Occupancy: 6 Pax + 1 children </p><br/>"
                container1.setHtml(html);
            }
        else
            if (dataname == '3') {

                var availabilityView = this.getRoomserviceView();
                var container1 = availabilityView.down("#roomcont1");
                var html = "<h4 id='hname'>Loyalty</h4><p id='pname'>The Pinterest consists of two double or twin bedrooms, sofa bed, flat screen TV, bathrooms, fitted kitchen with large living and dining area. The furnished sun terrace offers stunning views over the beautiful gardens and the Atlantic ocean.</p> <p id='pname'>Max Occupancy: 6 Pax + 1 children </p><br/>"
                container1.setHtml(html);
            }
            else
            if (dataname == '4') {

                var availabilityView = this.getRoomserviceView();
                var container1 = availabilityView.down("#roomcont1");
                var html = "<h4 id='hname'>Wine Supplier</h4><p id='pname'>The Youtube consists of two double or twin bedrooms, sofa bed, flat screen TV, bathrooms, fitted kitchen with large living and dining area. The furnished sun terrace offers stunning views over the beautiful gardens and the Atlantic ocean.</p> <p id='pname'>Max Occupancy: 6 Pax + 1 children </p><br/>"
                container1.setHtml(html);
            }
        /*else
            if (dataname == 'Yahoo') {
                console.log("Yahoo");
                var availabilityView = this.getRoomserviceView();
                var container1 = availabilityView.down("#roomcont1");
                var html = "<h4 id='hname'>Wine Supplier</h4><p id='pname'>The Yahoo consists of two double or twin bedrooms, sofa bed, flat screen TV, bathrooms, fitted kitchen with large living and dining area. The furnished sun terrace offers stunning views over the beautiful gardens and the Atlantic ocean.</p> <p id='pname'>Max Occupancy: 6 Pax + 1 children </p><br/>"
                container1.setHtml(html);
            }
            else
            if (dataname == 'Wikipedia') {
                console.log("Wikipedia");
                var availabilityView = this.getRoomserviceView();
                var container1 = availabilityView.down("#roomcont1");
                var html = "<h4 id='hname'>facebook</h4><p id='pname'>The Wikipedia consists of two double or twin bedrooms, sofa bed, flat screen TV, bathrooms, fitted kitchen with large living and dining area. The furnished sun terrace offers stunning views over the beautiful gardens and the Atlantic ocean.</p> <p id='pname'>Max Occupancy: 6 Pax + 1 children </p><br/>"
                container1.setHtml(html);
            }*/


    },

    onintDataViewCommand: function (list, target, index, record, evt, options) {


        var dataname = record.get("InternetName");
        if (dataname == 'Facebook') {
            /*  if (dataname == 'MGM') {


             var html = '<iframe height="500px"  width="100%" src="http://muthuhotels.com/"></iframe>';
             var nestedList = new Ext.form.Panel({
             centered: true,
             itemCls:'mainpanel',
             width: '90%',
             height: '90%',
             cls:'floatpanel',
             title: 'categories',
             modal: true,
             hideOnMaskTap: true,
             items: [
             //          {
             //              xtype:'toolbar',
             //          title:'Studio Apartment',
             //              docked:'top'
             //           },
             {
             xtype: 'button',
             cls:'panelbtn',
             docked:'top',
             handler: function () {
             nestedList.hide();
             }
             }
             ]
             });
             nestedList.setHtml(html);
             Ext.Viewport.add(nestedList);
             nestedList.show({
             type        : 'pop',
             isComponent : true
             });
             */


            console.log('FaceBook');
            window.location = "https://www.facebook.com/MGMMuthuHotels";

        } else
        if (dataname == 'Twitter') {
            console.log('Twitter');
            window.location = "https://twitter.com/MGMMuthuHotels";
            //   Ext.device.Device.openURL('https://twitter.com/MGMMuthuHotels'),{ openExternal:true };
            //     var referance = window.open('https://twitter.com/MGMMuthuHotels');
            //    referance.close();

        } else
        if (dataname == 'Pinterest') {
            console.log('Pinterest');
            navigator.app.url('https://twitter.com/MGMMuthuHotels',{openExternal: true});
            //     navigator.app.loadUrl('https://twitter.com/MGMMuthuHotels', {openExternal: true});
            //  window.location = "http://www.pinterest.com/group0422/";

        } else
        if (dataname == 'Youtube') {
            console.log('Youtube');
            window.location = "http://www.youtube.com/channel/UC4FAB_fHeRBv3hkf26pWuWQ/feed?view_as=public";

        }else
        if (dataname == 'Google') {
            console.log('google');
            window.location = "http://www.google.com/";

        }else
        if (dataname == 'Yahoo') {
            console.log('yahoo');
            window.location = "http://www.yahoo.com/";

        }else
        if (dataname == 'Wikipedia') {
            console.log('wikipedia');

            /*    var html = '<iframe height="500px"  width="100%" src="https://www.wikipedia.org/"></iframe>';
             var nestedList = new Ext.form.Panel({
             centered: true,
             itemCls:'mainpanel',
             width: '90%',
             height: '90%',
             cls:'floatpanel',
             title: 'categories',
             modal: true,
             hideOnMaskTap: true,
             items: [
             //      {
             //           xtype:'toolbar',
             //          title:'Studio Apartment',
             //           docked:'top'
             //       },
             {
             xtype: 'button',
             cls:'panelbtn',
             docked:'top',
             handler: function () {
             nestedList.hide();
             }
             }
             ]
             });
             nestedList.setHtml(html);
             Ext.Viewport.add(nestedList);
             nestedList.show({
             type        : 'pop',
             isComponent : true
             });
             */
            window.location = "https://www.wikipedia.org/";

        }
    },













    oncheckInCommand: function(){
        var settingView = this.getSettingView();
        var resIdValue = settingView.down('#txtReservationId').getValue();
        var roomNoValue =settingView.down('#txtAdminId').getValue();
        var resNameValue =settingView.down('#psdAdminpsd').getValue();
        //    console.log('resId'+resIdValue,'adminId'+adminIdValue,'adminPsd'+adminPsdValue);


        Ext.define('Login', {
            extend: 'Ext.data.Model',
            config: {
                fields: [
                    { name: 'message', type: 'string' },
                    /* {name:'id',type:'int'},
                     { name: 'message1', type: 'string' },
                     { name: 'message2', type: 'string' }*/
                ]
            }
        });
        loginStore = Ext.create('Ext.data.Store', {
            model: Login
        });

        loginStore.setProxy({
            type: 'ajax',
            //   url: ' http://localhost/CrotusValetService/CrotusValetHandler.ashx?adminname=' + adminIdValue + '&adminpassword=' + adminPsdValue + '&resid=' + resIdValue
            url: 'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?resID=' + resIdValue + '&roomNO=' + roomNoValue + '&resName=' + resNameValue

        });
        loginStore.getProxy().on('exception',function () {
            console.log("check internet");
            Ext.Msg.alert("Check Internet!!!");
            return;
        });
        loginStore.load({
            scope: this,
            callback: function () {
                result = loginStore.getData().getAt(0).get('message');
                console.log(result);
                if (result == '1') {
                    Ext.Msg.alert("Welcome"+resNameValue);
                    productlocalStore = Ext.create('Ext.data.Store', {
                        model: "CrotusValet.model.ProductDetail"
                    });
                    productlocalStore.load();
                    productlocalStore.removeAll();
                    productlocalStore.sync();
                    //To call Url from server to get resname
                    var rec ={
                        res_id:  settingView.down('#txtReservationId').getValue(),
                        res_roomno: settingView.down('#txtAdminId').getValue(),
                        res_name:  settingView.down('#psdAdminpsd').getValue()
                    };
                    settingslocalStore = Ext.create('Ext.data.Store', {
                        model: "CrotusValet.model.Setting"
                    });
                    settingslocalStore.load();
                    settingslocalStore.removeAll();
                    settingslocalStore.add(rec);
                    settingslocalStore.sync();

                 /*   Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                    Ext.Viewport.setActiveItem({
                        xtype : 'productdetailview'
                    });*/
                    window.location.reload();
                }
                else
                {
                    console.log('Invalid Credentials');
                    Ext.Msg.alert("Invalid Credentials!!!");
                }
            }

        });






        /*


         if(adminIdValue=='admin'&&adminPsdValue=='crotus'){
         productlocalStore = Ext.create('Ext.data.Store', {
         model: "CrotusValet.model.ProductDetail"
         });
         productlocalStore.load();
         productlocalStore.removeAll();
         productlocalStore.sync();

         //To call Url from server to get resname


         var rec ={
         ResId:  settingView.down('#txtReservationId').getValue(),
         ResName: 'crotus'
         };
         settingslocalStore = Ext.create('Ext.data.Store', {
         model: "CrotusValet.model.Setting"
         });

         settingslocalStore.load();
         settingslocalStore.removeAll();
         settingslocalStore.add(rec);
         settingslocalStore.sync();
         window.location.reload();




         var toGO =  this.getMasterView();
         console.log(toGO);
         Ext.Viewport.animateActiveItem(toGO,this.slideRightTransition);

         //    console.log('resId'+resIdValue,'adminId'+adminIdValue,'adminPsd'+adminPsdValue);
         //   window.location.reload();
         }
         else{
         console.log('Invalid Credentials');
         }

         */

    },
    oncheckOutCommand: function(){
        console.log('checkout1');
    },
    oncategoryCommand: function (list, target, index, record, evt, options) {
        var productdetailView = this.getProductdetailView();
        //   var tempvariable;
        var productMasterStore = Ext.getStore("ProductMasters");
        //     var id=productdetailView.productMasterStore.getAt(index).data.id;



        //countx
        localStore = Ext.create('Ext.data.Store', {
            model: "CrotusValet.model.ProductMaster"
        });
        localStore.load();


        //       var indexValue=1;
        //       var endValue = 25;

        var getbadge = productdetailView.down('#btnNext').getBadgeText();
        var indexValue = getbadge+1;
        if(getbadge==0) {
            tempvariable = record.get("prod_class_id");
            tempsecvariable = record.get("ent_id1");
            console.log("fdvdvvvvvv..............."+tempvariable);
        }
        console.log("getb"+getbadge);
        console.log("tv1"+tempvariable);
        /*

         var sample =  productdetailView.down('#dvProduct').getItemTpl(total_count).getAt(0);
         console.log(sample);
         */

        if(getbadge<=400){
            Ext.getCmp('nxtbtn').show();
            var countLocalStoreProducts = localStore.getCount();
            //   productdetailView.down('#btnMyCart').setBadgeText(countLocalStoreProducts);
            productdetailView.down('#btnMyCart').setText(''+'('+countLocalStoreProducts+')');
            productMasterStore.setProxy({
                type: 'ajax',
                //////           url: 'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?GetProductMaster='+tempvariable
                url: 'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?catId='+tempvariable +'&PageNum=' +indexValue +'&PageSize=25'
                /////         url: 'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?catId='+record.get("rev_cat_id") +'&rowFrom=' +indexValue +'&rowTo=' +endValue
                //        url: ' http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?GetProductMaster='+record.get("rev_cat_id")
                //    url: 'http://localhost/CrotusValetService/CrotusValetHandler.ashx?GetProductMaster=' + record.get("categoryDetailID")
            });
            productMasterStore.getProxy().on('exception',function () {
                console.log("check internet");
                Ext.Msg.alert("Check Internet!!!");
                return;
            });
            productMasterStore.on('load', function () {
                var count = productMasterStore.getCount();
                if(count<25){
                    Ext.getCmp('nxtbtn').hide();
                }
                console.log("........................."+count);
            });
            productMasterStore.load();
        }else
        {
            Ext.getCmp('nxtbtn').hide();
        }
        var pro = productdetailView.down('#dvProduct').setStore(productMasterStore);

        Ext.Viewport.animateActiveItem(productdetailView, this.slideLeftTransition);
    },


    onnextCommand:function(list, target, index, record, evt, options){
        var productdetailView = this.getProductdetailView();
        var getbadge =  parseInt(productdetailView.down('#btnNext').getBadgeText());
        console.log(getbadge);
        //var clickCount =0;
        productdetailView.down('#btnNext').setBadgeText(++getbadge);
        if(getbadge>1){
            Ext.getCmp('prebtn').show();
        }

        //     console.log("tempvariable"+tempvariable);
        this.oncategoryCommand(list, target, index, record, evt, options);
        //      console.log("nextcommand");
        /* var productdetailView = this.getProductdetailView();
         totalcount =250;
         i=0;
         if(i<totalcount){
         i = i+1;
         }
         console.log("i"+i);
         productdetailView.down('#btnNext').setBadgeText(i);*/
        //     var productdetailView = this.getProductdetailView();
        //     var productMasterStore = Ext.getStore("ProductMasters");
        /* productMasterStore.on('load', function () {
         var i = 1;
         var count = productMasterStore.getCount();
         console.log("........................."+count);
         var totalpage = count/25;
         console.log(totalpage);


         });*/

        //       var productdetailView = this.getProductdetailView();
        //     Ext.Viewport.animateActiveItem(productdetailView, this.slideLeftTransition);

    },

    onprevCommand:function( list, target, index, record, evt, options){
        console.log("onprev");
        var productdetailView = this.getProductdetailView();
        var getbadge =  parseInt(productdetailView.down('#btnNext').getBadgeText());
        console.log(getbadge);
        //var clickCount =0;
        if(getbadge>1){
            productdetailView.down('#btnNext').setBadgeText(--getbadge);


            Ext.getCmp('prebtn').show();
        }else
        {
            Ext.getCmp('prebtn').hide();
        }
        this.oncategoryCommand(list, target, index, record, evt, options);
    },



    onproductCommand: function (list, target, index, record, evt, options) {






        console.log("onproduct tab");
        console.log("description");
        var descriptionView = this.getDescriptionView();
        descriptionView.setRecord(record);
        descriptionView.down('#spinQuantity').setValue(1);


        /*var newPriceValues = record.get("productDetailPrice");
         console.log('res'+newPriceValues)
         descriptionView.down('#txtProductPrice').setValue(newPriceValues);*/
        // descriptionView.down('#spinQuantity').Value = 1;

        /*  var newValues = record.get("productMasterImageUrl");
         Ext.getCmp('myimage').setSrc(newValues);
         var proName = record.get("menu_item_name");
         Ext.getCmp('txtProductName').setValue(proName);
         var proprice = record.get("price_net");
         Ext.getCmp('txtProductPrice').setValue(proprice);
         var prodescrip = record.get("enterprise_name");
         Ext.getCmp('txtProductDescrip').setValue(prodescrip);*/
        var menuid = record.get("menu_item_id");
        Ext.getCmp('txt1').setValue(menuid);
        var menuname = record.get("menu_item_name");
        Ext.getCmp('txt2').setValue(menuname);
        var entid = record.get("ent_id");
        Ext.getCmp('txt3').setValue(entid);
        var pricenet = record.get("price_net");
        Ext.getCmp('txt4').setValue(pricenet);
        var menuqun = record.get("menu_quantity");
        Ext.getCmp('spinQuantity').setValue(menuqun);
        var totalprice = record.get("total_price");
        Ext.getCmp('txt6').setValue(totalprice);
        var taxamt = record.get("tax_amt");
        Ext.getCmp('txt7').setValue(taxamt);
        var taxprec = record.get("tax_percent");
        Ext.getCmp('txt8').setValue(taxprec);

        /*  var resid = record.get("res_id");
         Ext.getCmp('').setValue(resid);
         var roonno = record.get("res_roomno");
         Ext.getCmp('').setValue(roonno);
         var rsname = record.get("res_name");
         Ext.getCmp('').setValue(rsname);*/
        Ext.Viewport.animateActiveItem(descriptionView, this.slideLeftTransition);
    },
    /*

     window.location.href = "http://facebook.com";

     */


    launch: function () {

        var tempvariable;
        var tempsecvariable;
        this.oninformationCommand();
        this.onconciergenewCommand();
        this.onroomdataCommand();
        this.onFirstCommand();

        /*


         this.onsocialNetworkCommand();

         this.oninformationCommandd();

         this.onconciergenewCommand();
         */





        /* var welcomeView = this.getWelcomeView();
         localStore = Ext.create('Ext.data.Store', {
         model: "CrotusValet.model.Setting"
         });
         localStore.load();
         welcomeView.down('#lblResName').setHtml('CheckIn Required!!!');
         localStore.each(function (record) {
         var resname = record.data.ResName;
         var welcomeHtml = "<h3 class='welcome' style='text-align: center; color: #000000'>welcome</h3><p>"+resname+"</p>";
         //   var welcomeHtml = "<div class='slides' > <ul> <!-- slides --> <li>  <img  src='resources/images/pic1.jpg' alt='image01' /> <div>Guest Information</div></br><div >This app provides you a scope to know and utilise the facilities in our resort.</div> </li> </ul></div>" +resname;
         welcomeView.down('#lblResName').setHtml(welcomeHtml);
         console.log('kljlk'+resname);
         });*/






        //  welcomeView.down('#lblResName').setHtml('welcome1234');









        //availabilityView.down("#availabilitytitle").setTitle('FOOD & BEVERAGES');
//    Ext.Viewport.animateActiveItem(productdetailView, this.slideLeftTransition);







        /*   var mostUsedView = this.getRoomserviceView();
         var roomStore = Ext.getStore("Roomsers");
         roomStore.removeAll();

         var rec = {
         RoomID:'1',
         RoomName: 'Food & Beverages',
         RoomLogoUrl: 'resources/images/pekingduck.jpg'
         };
         roomStore.add(rec);
         var rec = {
         RoomID:'2',
         RoomName: 'In-House Shopping',
         RoomLogoUrl:'resources/images/1.png'
         };


         roomStore.add(rec);

         mostUsedView.down('#dvRoomService').setStore(roomStore);*/
    },

    onFirstCommand:function(){
        console.log('roomservice');


        var productdetailView = this.getRoomserviceView();
        var productMasterStore = Ext.getStore("Roomsers");
        productMasterStore.setProxy({
            type: 'ajax',
            ////     url: 'http://1.23.183.7/Aurawcf/AURAService.svc/GetAllCategoryMaster'
            url:'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?GetCategoryMaster=1'
            //     url: 'http://1.23.183.6:8085/CrotusValetHandler.ashx?GetCategoryDetail=1'
            //    url: 'http://localhost/CrotusValetService/CrotusValetHandler.ashx?GetCategoryDetail=1'
        });

        console.log("Offline Check");

        productMasterStore.load();
        productdetailView.down('#dvRoomService').setStore(productMasterStore);
    },


    onmyBookNowCommand:function(){
        window.location = "https://www.globekey.com/reserve.php?grp=aurora2&chain=petch&sh=no";
    },
    onmyCartCommand:function(){
        localStore = Ext.create('Ext.data.Store', {
            model: "CrotusValet.model.ProductDetail"
        });
        localStore.load();
        localStore.sync();
        console.log('lc'+localStore);
        var chkmsg = localStore.getData().length;
        if(chkmsg != 0) {
            var toGO = this.getCartView();
            this.myBillCommand();
            toGO.down('#lstFoodItems').setStore(localStore);
            Ext.Viewport.animateActiveItem(toGO, this.slideLeftTransition);
        }else
        {
            console.log("No Items In Your Cart");
            Ext.Msg.alert("No Items In Your Cart!!!");
        }
    }, ////////////////////////////////////
    myBillCommand:function(){
        var cartview = this.getCartView();
        console.log('bill');
        localStore = Ext.create('Ext.data.Store', {
            model: "CrotusValet.model.ProductDetail"
        });
        localStore.load({
            scope: this,
            callback: function () {
                var count = localStore.getData().length;
                var total =0;
                for(i=0;i<count;i++){
                    var res = localStore.getData().getAt(i).get('productTotal');
                    total = total+res;
                }
                console.log(total);
                cartview.down('#txtMyBill').setValue('€'+total);

            }
        });
    },
    ///////////////////////////////////


    onconciergeCommand: function () {
        window.location.href = "tel:" + 351289590300;
        console.log("onconciergeCommand");
    },


    onBeveragesCommand: function(){
        var productdetailView = this.getCategorydetailView();

        /////////////////////////////////////



        //countx
        localStore = Ext.create('Ext.data.Store', {
            model: "CrotusValet.model.ProductDetail"
        });
        localStore.load();
        var countLocalStoreProducts = localStore.getCount();
        productdetailView.down('#btnMyCart').setText(''+'('+countLocalStoreProducts+')');
        var productMasterStore = Ext.getStore("CategoryDetails");
        productMasterStore.setProxy({
            type: 'ajax',
            url:'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?GetCategoryDetail=2'
            /////      url: 'http://1.23.183.7/Aurawcf/AURAService.svc/GetAllCategoryMaster'
            //   url: 'http://1.23.183.6:8085/CrotusValetHandler.ashx?GetCategoryDetail=1'
            //    url: 'http://localhost/CrotusValetService/CrotusValetHandler.ashx?GetCategoryDetail=1'

        });
        /* productMasterStore.getProxy().on('exception',function () {
         console.log("check internet");
         Ext.Msg.alert("Check Internet!!!");
         return;
         });*/
        productMasterStore.load();
        productdetailView.down('#dvCategory').setStore(productMasterStore);
        //availabilityView.down("#availabilitytitle").setTitle('FOOD & BEVERAGES');
        Ext.Viewport.animateActiveItem(productdetailView, this.slideLeftTransition);
    },

    onInHouseCommand: function(){
        var productdetailView = this.getCategorydetailView();
        /////////////////////////////////////
        //countx
        localStore = Ext.create('Ext.data.Store', {
            model: "CrotusValet.model.ProductDetail"
        });
        localStore.load();
        var countLocalStoreProducts = localStore.getCount();
        productdetailView.down('#btnMyCart').setText(''+'('+countLocalStoreProducts+')');
        var productMasterStore = Ext.getStore("CategoryDetails");
        productMasterStore.setProxy({
            type: 'ajax',
            url:'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?GetCategoryDetail=2'
            ////    url: 'http://1.23.183.7/Aurawcf/AURAService.svc/GetAllCategoryMaster'
            //   url: 'http://1.23.183.6:8085/CrotusValetHandler.ashx?GetCategoryDetail=2'
            // url: 'http://localhost/CrotusValetService/CrotusValetHandler.ashx?GetCategoryDetail=2'
        });
        /* productMasterStore.getProxy().on('exception',function () {
         console.log("check internet");
         Ext.Msg.alert("Check Internet!!!");
         return;
         });*/
        productMasterStore.load();
        productdetailView.down('#dvCategory').setStore(productMasterStore);
        //availabilityView.down("#availabilitytitle").setTitle('FOOD & BEVERAGES');
        Ext.Viewport.animateActiveItem(productdetailView, this.slideLeftTransition);
    },




    onroomSerCommand: function (list, target, index, record, evt, options) {



        var productdetailView = this.getCategorydetailView();
        var productMasterStore = Ext.getStore("CategoryDetails");

        //countx
        localStore = Ext.create('Ext.data.Store', {
            model: "CrotusValet.model.CategoryDetail"
        });
        localStore.load();
        var countLocalStoreProducts = localStore.getCount();
        //   productdetailView.down('#btnMyCart').setBadgeText(countLocalStoreProducts);
        productdetailView.down('#btnMyCart').setText(''+'('+countLocalStoreProducts+')');
        productMasterStore.setProxy({
            type: 'ajax',
            url: 'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?GetCategoryDetail=' + record.get("rev_class_id")
            //    url: 'http://localhost/CrotusValetService/CrotusValetHandler.ashx?GetProductMaster=' + record.get("categoryDetailID")
        });
        productMasterStore.getProxy().on('exception',function () {
            console.log("check internet");
            Ext.Msg.alert("Check Internet!!!");
            return;
        });

        productMasterStore.load();

        productdetailView.down('#dvCategory').setStore(productMasterStore);
        Ext.Viewport.animateActiveItem(productdetailView, this.slideLeftTransition);





        /*     var productdetailView = this.getCategorydetailView();
         /////////////////////////////////////

         //countx
         localStore = Ext.create('Ext.data.Store', {
         model: "CrotusValet.model.ProductDetail"
         });
         localStore.load();
         var countLocalStoreProducts = localStore.getCount();
         productdetailView.down('#btnMyCart').setText(''+'('+countLocalStoreProducts+')');

         ////////////////////////////


         var foodDetail = record.get("RoomName");
         if (foodDetail == 'Food & Beverages') {
         console.log('Food');
         //    var offline =false;
         var productMasterStore = Ext.getStore("CategoryDetails");
         productMasterStore.setProxy({
         type: 'ajax',
         ////     url: 'http://1.23.183.7/Aurawcf/AURAService.svc/GetAllCategoryMaster'
         url:'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?GetCategoryDetail=1'
         //     url: 'http://1.23.183.6:8085/CrotusValetHandler.ashx?GetCategoryDetail=1'
         //    url: 'http://localhost/CrotusValetService/CrotusValetHandler.ashx?GetCategoryDetail=1'
         });

         console.log("Offline Check");






         productMasterStore.load();
         productdetailView.down('#dvCategory').setStore(productMasterStore);
         //availabilityView.down("#availabilitytitle").setTitle('FOOD & BEVERAGES');
         Ext.Viewport.animateActiveItem(productdetailView, this.slideLeftTransition);




         ////          if(checkconnection==true){
         ////             Ext.Msg.alert('Online');
         ////          }else
         ///          if (Ext.device.Connection.isOnline()){
         ///             console.log("check online");
         ///        }else
         ///      {
         ///          Ext.Msg.alert('offline');

         ///      }

         *//*    if(offline==true){
         console.log(offline);
         Ext.Msg.alert("Check Internet!!!");
         } else{
         console.log(offline);
         console.log("Your are online");

         ///      productMasterStore.on('refresh', function() {

         productMasterStore.load();
         productdetailView.down('#dvCategory').setStore(productMasterStore);
         //availabilityView.down("#availabilitytitle").setTitle('FOOD & BEVERAGES');
         Ext.Viewport.animateActiveItem(productdetailView, this.slideLeftTransition);
         ////        });


         }*//*
         }
         else
         if (foodDetail == 'In-House Shopping') {
         console.log('SHOPPING');
         var productMasterStore = Ext.getStore("CategoryDetails");
         var checkconnection = navigator.onLine;
         productMasterStore.setProxy({
         type: 'ajax',
         ////        url: 'http://1.23.183.7/Aurawcf/AURAService.svc/GetAllCategoryMaster'
         url: 'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?GetCategoryDetail=2'
         //     url: 'http://1.23.183.6:8085/CrotusValetHandler.ashx?GetCategoryDetail=2'
         // url: 'http://localhost/CrotusValetService/CrotusValetHandler.ashx?GetCategoryDetail=2'
         });
         productMasterStore.getProxy().on('exception',function () {
         console.log("check internet");
         Ext.Msg.alert("Check Internet!!!");
         return;
         });

         if(checkconnection==true){
         productMasterStore.load();
         productdetailView.down('#dvCategory').setStore(productMasterStore);
         //availabilityView.down("#availabilitytitle").setTitle('FOOD & BEVERAGES');
         Ext.Viewport.animateActiveItem(productdetailView, this.slideLeftTransition);
         }else
         {
         Ext.Msg.alert("Check Internet!!!");
         }




         *//*
         productMasterStore.load();
         *//**//*productMasterStore.getProxy().on('exception',function () {
         console.log("check internet");
         Ext.Msg.alert("Check Internet!!!");
         return;
         });*//**//*
         productdetailView.down('#dvCategory').setStore(productMasterStore);
         //availabilityView.down("#availabilitytitle").setTitle('FOOD & BEVERAGES');
         Ext.Viewport.animateActiveItem(productdetailView, this.slideLeftTransition);*//*
         }*/
    },



    onbackToMasterViCommand:function(){
        var toGO =  this.getMasterView();
        Ext.Viewport.animateActiveItem(toGO,this.slideRightTransition);
    },
    onbackToRoomViewCommand:function(){
        var toGO =  this.getRoomserviceView();
        Ext.Viewport.animateActiveItem(toGO,this.slideRightTransition);
    },


    onbackToCategoryViewCommand:function(){
        console.log("category");
        var toGO =  this.getCategorydetailView();
        localStore = Ext.create('Ext.data.Store', {
            model: "CrotusValet.model.ProductDetail"
        });
        localStore.load();
        var productdetailView = this.getProductdetailView();
        var getbadge = productdetailView.down('#btnNext').setBadgeText(0);
        console.log("getb"+getbadge);
        var countLocalStoreProducts = localStore.getCount();
        toGO.down('#btnMyCart').setText(''+'('+countLocalStoreProducts+')');
        Ext.Viewport.animateActiveItem(toGO,this.slideRightTransition);
    },



    onaddCartCommand:function(){

        var productDescriptionView = this.getDescriptionView();

        settingslocalStore = Ext.create('Ext.data.Store', {
            model: "CrotusValet.model.Setting"
        });

        settingslocalStore.load();

        /////////////////////////////
        var  bool1='false';
        /////////////////////////////////////

        settingslocalStore.each(function (record) {


            //////////////////////////////////////
            bool1= 'true';
            /////////////////////////

            /*
             var newValues = record.get("productMasterImageUrl");
             Ext.getCmp('myimage').setSrc(newValues);
             var proName = record.get("menu_item_name");
             Ext.getCmp('txtProductName').setValue(proName);
             var proprice = record.get("price_net");
             Ext.getCmp('txtProductPrice').setValue(proprice);
             var prodescrip = record.get("enterprise_name");
             Ext.getCmp('txtProductDescrip').setValue(prodescrip);*/





            var rec = {
                menu_item_id: productDescriptionView.down('#txt1').getValue(),
                menu_item_name: productDescriptionView.down('#txt2').getValue(),
                ent_id: productDescriptionView.down('#txt3').getValue(),
                price_net: productDescriptionView.down('#txt4').getValue(),
                menu_quantity: productDescriptionView.down('#spinQuantity').getValue(),
                //      total_price: productDescriptionView.down('#txt6').getValue(),
                tax_amt:  productDescriptionView.down('#txt7').getValue(),
                tax_percent:  productDescriptionView.down('#txt8').getValue(),
                total_price:  parseFloat(productDescriptionView.down('#txt4').getValue())+parseFloat(productDescriptionView.down('#txt7').getValue()),
                //        total: productDescriptionView.down('#txt4').getValue()+productDescriptionView.down('#txt7').getValue(),
                total:(parseFloat(productDescriptionView.down('#txt4').getValue())+parseFloat(productDescriptionView.down('#txt7').getValue()))*(productDescriptionView.down('#spinQuantity').getValue()),
                res_id: record.data.res_id,
                res_roomno: record.data.res_roomno,
                res_name: record.data.res_name
            };






            /*

             var rec = {
             productDetailID: productDescriptionView.down('#lblProductDetailID').getValue(),
             productDetailName: productDescriptionView.down('#txtProductName').getValue(),
             productDetailDescription: productDescriptionView.down('#txtProductDescrip').getValue(),
             productDetailImageUrl: productDescriptionView.down('#myimage').getSrc(),
             productDetailQuantity: productDescriptionView.down('#spinQuantity').getValue(),
             productDetailPrice: productDescriptionView.down('#txtProductPrice').getValue(),
             productTotal: productDescriptionView.down('#txtProductPrice').getValue()*productDescriptionView.down('#spinQuantity').getValue(),
             productDetail_reservationID: record.data.ResId
             };

             */

            //    console.log('rec'+record.data.ResId);

            localStore = Ext.create('Ext.data.Store', {
                model: "CrotusValet.model.ProductDetail"
            });
            //     this.myBillCommand();
            localStore.load();
            localStore.add(rec);
            localStore.sync();
            ///************************************************************
            //         this.myBillCommand();
            ///*********************************************************
            /*  localStore.each(function (record){
             //   var sum = 0;
             for(i=0; i<localStore.getData().length; i++){
             //   var sum = sum + i;
             var sum =+ record.data.productDetailPrice[i];

             }
             console.log('count'+sum);
             console.log('hello'+record.data.productDetailPrice);
             //     var sum =  record.data.productDetailPrice;
             var result = result+record.data.productDetailPrice;
             console.log('sum' +result);

             });*/

            //push
            //
            console.log('cart');

        });
        ////////////////////////////////////////////////////////
        if(bool1=='false'){
            Ext.Msg.alert("Check-In Required!!!");

            var toGO = this.getSettingView();
            Ext.Viewport.animateActiveItem(toGO, this.slideLeftTransition);
            return;

        }
        ///////////////////////////////////////////////////
        this.myBillCommand();
        var toGO = this.getCartView();
        toGO.down('#lstFoodItems').setStore(localStore);
        Ext.Viewport.animateActiveItem(toGO, this.slideLeftTransition);

        //console.log(localStore);


        /*



         console.log('addcart');
         var productDescriptionView = this.getDescriptionView();
         //////////////////////////         //1.get local store

         settingslocalStore = Ext.create('Ext.data.Store', {
         model: "CrotusValet.model.Setting"
         });

         settingslocalStore.load();



         //2.get reservation id and reservation from local strore into varialble
         localStore.each(function (record) {   //fly
         console.log('rec'+record.data.ResId);
         var rec = {
         productDetailID: productDescriptionView.down('#lblProductDetailID').getValue(),
         productDetailName: productDescriptionView.down('#txtProductName').getValue(),
         productDetailDescription: productDescriptionView.down('#txtProductDescrip').getValue(),
         productDetailImageUrl: productDescriptionView.down('#myimage').getSrc(),
         productDetailQuantity: productDescriptionView.down('#spinQuantity').getValue(),
         productDetailPrice: productDescriptionView.down('#txtProductPrice').getValue(),
         productDetail_reservationID: record.data.ResId
         };
         console.log(rec);
         localStore = Ext.create('Ext.data.Store', {
         model: "CrotusValet.model.ProductDetail"
         });
         localStore.load();
         localStore.add(rec);
         localStore.sync();
         });
         var toGO = this.getCartView();
         toGO.down('#lstFoodItems').setStore(localStore);
         Ext.Viewport.animateActiveItem(toGO, this.slideLeftTransition);
         */

    },















    onconfirmCommand:function(){
        console.log('push');

        //   var status = 'fail';



        ///////////////////Internet validation/////////////////////
        /*   Ext.define('Confirm', {
         extend: 'Ext.data.Model',
         config: {
         fields: [
         {name:'id',type:'int'},
         { name: 'message1', type: 'string' },
         { name: 'message2', type: 'string' }
         ]
         }
         });

         confirmStore = Ext.create('Ext.data.Store', {
         model: Confirm
         });

         confirmStore.setProxy({
         type: 'ajax',
         //   url: ' http://localhost/CrotusValetService/CrotusValetHandler.ashx?adminname=' + adminIdValue + '&adminpassword=' + adminPsdValue + '&resid=' + resIdValue
         url: 'http://1.23.183.6:8085/CrotusValetPushHandler.ashx'
         //  url: 'http://gjgjgfk.com'


         });
         confirmStore.getProxy().on('exception',function () {
         console.log("check internet");
         Ext.Msg.alert("Check Internet!!!");
         status = 'true';
         return;

         });
         confirmStore.load();
         console.log(status);*/

        ////////////////////////////








        /*
         localCountrystore = Ext.create('Ext.data.Store', {   //fly
         model: 'CrotusValet.model.ProductDetail'
         });
         me = this;

         localCountrystore.load();

         var jsonData = '[';
         var recordCount = 0;
         localCountrystore.each(function (record) {   //fly
         recordCount++;
         if (recordCount == 1) {
         jsonData = jsonData + Ext.JSON.encode(record.data);
         }
         else {
         jsonData = jsonData + ',' + Ext.JSON.encode(record.data);
         }
         });

         jsonData = jsonData + ']';
         console.log(jsonData);

         //todo


         Ext.Ajax.request({
         method: 'POST',
         type: 'json',
         url: 'http://1.23.183.6:8085/CrotusValetPushHandler.ashx',
         // url: 'http://localhost/CrotusValetService/CrotusValetPushHandler.ashx',
         params: jsonData,
         callback: function (options, success, response) {
         //    Ext.Msg.alert("Order Confirmed!!!");
         },
         success: function (response) {


         },
         failure: function (response) {


         }


         });


         localCountrystore.getProxy().clear();
         localCountrystore.data.clear();
         localCountrystore.sync();
         //   Ext.Msg.alert("comming Soon!!!");
         var toGO = this.getCartView();
         //     this.myBillCommand();
         //    toGO.down('#txtMyBill').setValue(0);
         localCountrystore.load();
         toGO.down('#lstFoodItems').setStore(localCountrystore);
         var mainview = this.getPaymentsView();
         Ext.Viewport.animateActiveItem(mainview, this.slideLeftTransition);*/






        localStore = Ext.create('Ext.data.Store', {
            model: "CrotusValet.model.ProductDetail"
        });
        localStore.load();
        localStore.sync();
        console.log('lc'+localStore);
        var chkmsg = localStore.getData().length;
        console.log('no:'+chkmsg);
        if(chkmsg != 0) {
            var toGO = this.getCartView();
            this.myBillCommand();
            //    var mainview = this.getPaymentsView();
            var mainview = this.getPaymentsView();
            Ext.Viewport.animateActiveItem(mainview, this.slideLeftTransition);
        }else
        {
            console.log("No Items In Your Cart");
            Ext.Msg.alert("No Items In Your Cart!!!");
        }





        /*




         localCountrystore = Ext.create('Ext.data.Store', {   //fly
         model: 'CrotusValet.model.ProductDetail'
         });
         me = this;

         localCountrystore.load();

         var jsonData = '[';
         var recordCount = 0;
         localCountrystore.each(function (record) {   //fly
         recordCount++;
         if (recordCount == 1) {
         jsonData = jsonData + Ext.JSON.encode(record.data);
         }
         else {
         jsonData = jsonData + ',' + Ext.JSON.encode(record.data);
         }
         });

         jsonData = jsonData + ']';
         //      console.log(jsonData);



         Ext.define('Login', {
         extend: 'Ext.data.Model',
         config: {
         fields: [
         {name:'id',type:'int'},
         { name: 'message1', type: 'string' },
         { name: 'message2', type: 'string' }
         ]
         }
         });
         loginStore = Ext.create('Ext.data.Store', {
         model: Login
         });


         loginStore.setProxy({
         method: 'POST',
         type: 'jsonp',
         url: 'http://1.23.183.6:8085/CrotusValetPushHandler.ashx',
         // url: 'http://localhost/CrotusValetService/CrotusValetPushHandler.ashx',
         params: jsonData
         });
         loginStore.getProxy().on('exception',function () {
         console.log("check internet");
         Ext.Msg.alert("Check Internet!!!");
         console.log('insideexception');
         return;
         });
         loginStore.load(
         {

         scope: this,
         callback: function (options, success, response) {

         },
         success: function (response) {
         console.log('sucess');
         localCountrystore = Ext.create('Ext.data.Store', {   //fly
         model: 'CrotusValet.model.ProductDetail'
         });
         localCountrystore.getProxy().clear();
         localCountrystore.data.clear();
         localCountrystore.sync();
         var toGO = this.getCartView();
         //     this.myBillCommand();
         //    toGO.down('#txtMyBill').setValue(0);
         localCountrystore.load();
         toGO.down('#lstFoodItems').setStore(localCountrystore);
         },
         failure: function (response) {
         console.log('fail');

         }

         }
         );


         */





        /*
         localCountrystore = Ext.create('Ext.data.Store', {   //fly
         model: 'CrotusValet.model.ProductDetail'
         });
         localCountrystore.getProxy().clear();
         localCountrystore.data.clear();
         localCountrystore.sync();
         var toGO = this.getCartView();
         //     this.myBillCommand();
         //    toGO.down('#txtMyBill').setValue(0);
         localCountrystore.load();
         toGO.down('#lstFoodItems').setStore(localCountrystore);*/






    },
    onmostUsedCommand:function(){
        console.log("onmostUsedCommand");
        var mostUsedView = this.getGuestinfoView();
        var guestStore = Ext.getStore("GuestInfs");
        guestStore.removeAll();
        // guestStore.load();

        var rec = {
            DataID:'1',
            DataName: 'About this app',
            DataLogoUrl: 'resources/images/Aboutthisapp.jpg'
        };


        guestStore.add(rec);
        var rec = {
            DataID: '2',
            DataName: 'Directory',
            DataLogoUrl: 'resources/images/directory.jpg'
        };


        guestStore.add(rec);
        var rec = {
            DataID: '3',
            DataName: 'Internet Connection',
            DataLogoUrl: 'resources/images/internetconnection.jpg'
        };


        guestStore.add(rec);
        var rec = {
            DataID: '4',
            DataName: 'Phone Directory',
            DataLogoUrl: 'resources/images/phonedirectory.jpg'
        };


        guestStore.add(rec);
        mostUsedView.down('#dvGuestInfo').setStore(guestStore);

    },
    oninformationCommand:function(){
        console.log("oninformationCommand");
        var mostUsedView = this.getGuestinfoView();
        var guestStore = Ext.getStore("GuestInfs");
        guestStore.removeAll();
        // guestStore.load();

        var rec = {
            DataID: '1',
            DataClass:'infoList',
            DataName: 'Entertainment',
            DataLogoUrl: 'resources/images/entertianment.jpg'
        };


        guestStore.add(rec);
        var rec = {
            DataID: '2',
            DataClass:'infoList',
            DataName: 'Personal Request',
            DataLogoUrl: 'resources/images/personal.jpg'
        };

        guestStore.add(rec);
        /*   var rec = {
         DataID: '3',
         DataClass:'infoList',
         DataName: 'Test',
         DataLogoUrl: 'resources/images/text.jpg'
         };


         guestStore.add(rec);
         var rec = {
         DataID: '4',
         DataClass:'infoList',
         DataName: 'Safty & security',
         DataLogoUrl: 'resources/images/saftyandsecurity.jpg'
         };

         guestStore.add(rec);*/
        var rec = {
            DataID: '5',
            DataClass:'infoList',
            DataName: 'Directory',
            DataLogoUrl: 'resources/images/directory.jpg'
        };

        guestStore.add(rec);
        var rec = {
            DataID: '6',
            DataClass:'infoList',
            DataName: 'Phone Directory',
            DataLogoUrl: 'resources/images/phonedirectory.jpg'
        };

        guestStore.add(rec);
        var rec = {
            DataID: '7',
            DataClass:'infoList',
            DataName: 'Room Rate',
            DataLogoUrl: 'resources/images/roomrate.jpg'
        };

        guestStore.add(rec);
        var rec = {
            DataID: '8',
            DataClass:'infoList',
            DataName: 'About this app',
            DataLogoUrl: 'resources/images/aboutthisapp.jpg'
        };

        guestStore.add(rec);
        mostUsedView.down('#dvGuestInfo').setStore(guestStore);

    },
    onfaclitiesCommand:function(){
        console.log("onfaclitiesCommand");

        var mostUsedView = this.getGuestinfoView();
        var guestStore = Ext.getStore("GuestInfs");
        guestStore.removeAll();
        // guestStore.load();

        /* var rec = {
         DataID: '1',
         DataClass:'facList',
         DataName: 'Test',
         DataLogoUrl: 'resources/images/text.jpg'
         };


         guestStore.add(rec);*/
        var rec = {
            DataID: '2',
            DataClass:'facList',
            DataName: 'Internet Connection',
            DataLogoUrl: 'resources/images/internetconnection.jpg'
        };


        guestStore.add(rec);
        /*  var rec = {
         DataID: '3',
         DataClass:'facList',
         DataName: 'Bussiness Center',
         DataLogoUrl: 'resources/images/bussinesscenter.jpg'
         };


         guestStore.add(rec);*/
        var rec = {
            DataID: '4',
            DataClass:'facList',
            DataName: 'Play Area',
            DataLogoUrl: 'resources/images/playarea.jpg'
        };
        guestStore.add(rec);
        mostUsedView.down('#dvGuestInfo').setStore(guestStore);


    },
    onmapCommand:function() {
        console.log("onmapCommand");
        var mostUsedView = this.getGuestinfoView();
        var guestStore = Ext.getStore("GuestInfs");
        guestStore.removeAll();
        // guestStore.load();

        var rec = {
            DataID: '1',
            DataName: 'The Local Area',
            DataLogoUrl: 'resources/images/thelocalarea.jpg'
        };


        guestStore.add(rec);
        /*  var rec = {
         DataID: '2',
         DataName: 'Land Map',
         DataLogoUrl: 'resources/images/landmap.jpg'
         };
         guestStore.add(rec);*/
        mostUsedView.down('#dvGuestInfo').setStore(guestStore);

    },
    onroomTypeCommand:function() {
        console.log("onroomTypeCommand");
        var mostUsedView = this.getGuestinfoView();
        var guestStore = Ext.getStore("GuestInfs");
        guestStore.removeAll();
        // guestStore.load();

        var rec = {
            DataID: '1',
            DataClass:'roomPics',
            DataName: 'Studio Apartment',
            DataLogoUrl: 'resources/images/CPO Studio apartment.jpg'
        };

        guestStore.add(rec);
        var rec = {
            DataID: '2',
            DataClass:'roomPics',
            DataName: 'Studio Apartment with seaview',
            DataLogoUrl: 'resources/images/CPO Studio apartment-seaview.jpg'
        };
        guestStore.add(rec);
        var rec = {
            DataID: '3',
            DataClass:'roomPics',
            DataName: 'One bed room Apartment',
            DataLogoUrl: 'resources/images/CPO One bedroom apartment.jpg'
        };
        guestStore.add(rec);
        var rec = {
            DataID: '4',
            DataClass:'roomPics',
            DataName: 'One bed room Apartment with seaview',
            DataLogoUrl: 'resources/images/CPO One bedroom apartment-seaview.jpg'
        };
        guestStore.add(rec);
        var rec = {
            DataID: '5',
            DataClass:'roomPics',
            DataName: 'Two bed room Apartment',
            DataLogoUrl: 'resources/images/CPO Two bedroom apartment.jpg'
        };
        guestStore.add(rec);
        mostUsedView.down('#dvGuestInfo').setStore(guestStore);
    },
    onfoodItemListTapCommand:function(list, target, index, record, evt, options){

        if (evt.getTarget('.remove')) {
            console.log('onfoodItemListTapCommand');
            localStore = Ext.create('Ext.data.Store', {
                model: "CrotusValet.model.ProductDetail"
            });
            localStore.load();
            localStore.remove(record);
            localStore.sync();
            this.myBillCommand();
            console.log('cart');
            var toGO = this.getCartView();
            toGO.down('#lstFoodItems').setStore(localStore);
            Ext.Viewport.animateActiveItem(toGO, this.slideLeftTransition);
        }
        //console.log(localStore);









    },


    onfoodDescriptionTapCommand:function(list, record){
        console.log("description");
        var descriptionView = this.getDescriptionView();
        //var dataname = record.get("productMasterName");
        //descriptionView.down("#availabilitytitle").setTitle(dataname);
        descriptionView.setRecord(record);
        var newValues = record.get("FoodLogoUrl");
        Ext.getCmp('myimage').setSrc(newValues);
        Ext.Viewport.animateActiveItem(descriptionView,this.slideLeftTransition);
    },

    onbackToMasterCommand:function(){
        console.log("back");
        var toGO =  this.getProductdetailView();
        Ext.Viewport.animateActiveItem(toGO,this.slideRightTransition);
    },

    onbackToMasterViewCommand:function(){
        console.log('backtomaster');
        var toGO =  this.getProductdetailView();
        localStore = Ext.create('Ext.data.Store', {
            model: "CrotusValet.model.ProductDetail"
        });
        localStore.load();
        var countLocalStoreProducts = localStore.getCount();
        toGO.down('#btnMyCart').setText(''+'('+countLocalStoreProducts+')');

        //     this.oncategoryCommand();
        Ext.Viewport.animateActiveItem(toGO,this.slideRightTransition);
    },



    ondataViewCommand: function (list, target, index, record, evt, options) {



        var dataname = record.get("DataName");
        var availabilityView = this.getAvailabilityView();
        availabilityView.down("#availabilitytitle").setTitle(dataname);
        if (dataname == 'About this app') {
            console.log('aboutus');

            var container1 = availabilityView.down("#container1");
            var html = "<h4 id='hname'>About this app</h4><p id='pname'> This app provides you a scope to know and utilise the facilities in our resort, order food, beverages, to know where / whom to reach out for information and what not!!! You will have an amazing experience by sitting where ever you are to enjoy the pleasure of staying in our resort. </p>"
            /*  container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);

             console.log(availabilityView);*/

            var nestedList = new Ext.form.Panel({
                //    displayField: 'text',
                //     floating: true,
                centered: true,
                padding: '15px',
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'About this app',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //        text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                //     showAnimation: {
                //          type: 'slideIn',
                //          duration: 5000
                //      },
                isComponent : true
            });



        } else
        if (dataname == 'Directory') {
            console.log('Directory');

            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            var html = "<h4 id='hname'>Directory</h4><p id='pname'>Our resort is located in a fantastic environment nearer to sea, beach with the warmth of a breeze and mildness. You will witness unmatched happiness and pleasure while you stay here.</p><br/>"
            /* container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);

             console.log(availabilityView);*/


            /*

             var panel = Ext.create('Ext.Panel', {
             centered : true,
             html     : 'Hello'
             });

             Ext.Viewport.add(panel);

             panel.show({
             type        : 'pop',
             isComponent : true
             });
             */


            var nestedList = new Ext.form.Panel({
                //    displayField: 'text',
                //     floating: true,
                centered: true,
                padding: '15px',
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'Directory',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //       text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });


        } else
        if (dataname == 'Internet Connection') {
            console.log('Internet Connection');
            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            var html = "<h4 id='hname'>Internet Connection</h4><p id='pname'>As a guest you shall avail free internet connection through WiFi in most places of our resort. During the checkin our receptionist will provide you with the WiFi credentials. There is an option to buy WiFi connectivity too.</p><br/>"
            /* container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);

             console.log(availabilityView);*/

            var nestedList = new Ext.form.Panel({
                //     displayField: 'text',
                //     floating: true,
                centered: true,
                padding: '15px',
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'Internet Connection',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //     text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });

        } else
        if (dataname == 'Phone Directory') {
            console.log('Phone Directory');

            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            /*   var html = "<h4>Phone Directory:</h4><p>To know whom to reach out for availing any facility in our resort, here with you shall find the relevant contact person and numbers you shall rely upon to get an unlimited service.</p><ul><li><b>Person:</b><span> +xxx xxx xxxx</span><li><li><b>Person:</b><span> +xxx xxx xxxx</span><li><li><b>Person:</b><span> +xxx xxx xxxx</span><li><li><b>Person:</b><span> +xxx xxx xxxx</span><li><li><b>Person:</b><span> +xxx xxx xxxx</span><li><li><b>Person:</b><span> +xxx xxx xxxx</span><li></ul><br/>"
             */
            var html = "<h4 id='hname'>Phone Directory</h4><p id='pname'>To know whom to reach out for availing any facility in our resort, here with you shall find the relevant contact person and numbers you shall rely upon to get an unlimited service.</p><ul><li><p id='pname'><b>Tel:</b><span> +351 289 590 300</span></p><li><li><p id='pname'><b>Fax:</b><span> +351 289 589 157</span></p></ul><br/>"

            /* container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);

             console.log(availabilityView);*/

            var nestedList = new Ext.form.Panel({
                //     displayField: 'text',
                //     floating: true,
                centered: true,
                padding: '15px',
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'Phone directory',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //     text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });
        } else
        if (dataname == 'Entertainment') {
            console.log('Entertainment');

            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            var html = "<h4 id='hname'>Entertainment</h4> <p id='pname'>Each and every day is different and you shall enjoy a unique experience with amazing experience on the entertainment activity thats been carried out in our resort either in Bar or in Restaurant. Apart from this there are several activities that will be carried out on specific dates to commemorate an occasion.</p><br/>";
            /*  container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);
             console.log(availabilityView);*/



            var nestedList = new Ext.form.Panel({
                //     displayField: 'text',
                //     floating: true,
                centered: true,
                padding: '15px',
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                layout: {
                    align: 'stretch',
                    type: 'vbox'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'Entertainment',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //     text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });




        } else
        if (dataname == 'Personal Request') {
            console.log('Personal Request');

            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            var html = "<h4 id='hname'>Personal Request</h4><p id='pname'>You shall place any personal request that you or your family needs during your stay to make your vacation more enjoyable. Your request will be handled with specialised care with the available resource to satisfy you to the best extent possible</p><br/>";
            /*  container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);

             console.log(availabilityView);*/

            var nestedList = new Ext.form.Panel({
                //     displayField: 'text',
                //     floating: true,
                centered: true,
                padding: '15px',
                width: '90%',
                itemCls:'mainpanel',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                layout: {
                    align: 'stretch',
                    type: 'vbox'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'Personal Request',
                        docked:'top'
                    },
                    {
                        xtype: 'label',
                        html: html,
                        padding: 10,
                        width: '100%'
                    },
                    {
                        xtype: 'textareafield',
                        autoCapitalize:true,
                        style:{
                            'border':'none',
                            'overflow':'auto'
                        },
                        clearIcon:false,
                        placeHolder: 'Enter Your Request...',
                        itemId: "txtAdminId",
                        name: 'title',
                        width: '98%'
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        align: 'center',
                        docked: 'bottom',
                        cls: 'pansbutton',
                        width: '85px',
                        handler: function () {
                            var paneltext = nestedList.down('#txtAdminId').getValue();
                            var requestname = 'Personal Request';
                            var requestno = "6";
                            console.log(requestname);
                            console.log(paneltext);

                            settingslocalStore = Ext.create('Ext.data.Store', {
                                model: "CrotusValet.model.Setting"
                            });
                            settingslocalStore.load();

                            if(settingslocalStore.getData().length==0) {
                                Ext.Msg.alert("Check-In Required!!!");
                                return;
                            }
                            settingslocalStore.each(function (record) {


                                console.log(record.data.res_name);
                                console.log(record.data.res_id);
                                //sendmail

                                Ext.define('Login', {
                                    extend: 'Ext.data.Model',
                                    config: {
                                        fields: [
                                            { name: 'requestname', type: 'string' },
                                            { name: 'requestcontent', type: 'string' },
                                            { name: 'resId', type: 'string' },
                                            { name: 'resname', type: 'string' }
                                        ]
                                    }
                                });
                                loginStore = Ext.create('Ext.data.Store', {
                                    model: Login
                                });

                                loginStore.setProxy({
                                    type: 'ajax',
                                    url: 'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?requestname=' + requestname + '&requestcontent=' + paneltext + '&resId=' + record.data.res_id + '&resname=' + record.data.res_name


                                });
                                loginStore.getProxy().on('exception',function () {
                                    console.log("check internet");
                                    Ext.Msg.alert("Check Internet!!!");
                                    return;
                                });
                                loginStore.load();

                            });
                            nestedList.hide();
                        }
                    },
                    {
                        xtype: 'button',
                        //     text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {

                            nestedList.hide();
                        }
                    }
                ]
            });
            //        nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });

        } else
        if (dataname == 'Test') {
            console.log('Test');

            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            var html = "<h4 id='hname'>Test</h4><p id='pname'>HTMLDATA HTMLDATA HTMLDATA HTMLDATA HTMLDATA  </p><br/>"
            /* container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);

             console.log(availabilityView);*/

            var nestedList = new Ext.form.Panel({
                //       displayField: 'text',
                //        floating: true,
                centered: true,
                padding: '15px',
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'Test',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //        text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });

        } else
        if (dataname == 'Safety & security') {
            console.log('Safty & security');

            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            var html = "<h4 id='hname'>Safty & security</h4><p id='pname'>Resort will have security service always round the clock. Proper fire safety as per the government norms have been adhered. Resort also has the access control systems on few entry and exit points.</p><br/>"
            /*container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);

             console.log(availabilityView);*/

            var nestedList = new Ext.form.Panel({
                //       displayField: 'text',
                //       floating: true,
                centered: true,
                padding: '15px',
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'Safety & Security',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //       text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });

        } else
        if (dataname == 'Room Rate') {
            console.log('Room Rate');
            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            var html = "<img id='noborder' /><h4 id='hname'>Room Rate</h4><p id='pname'>Very attractive and competitive rate structure have been followed to suit your budget for each apartment type. Rate will vary for different apartment type based on the season. As always a lucrative price is guranteed !</p><br/>"
            /* container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);
             console.log(availabilityView);*/

            var nestedList = new Ext.form.Panel({
                //       displayField: 'text',
                //       floating: true,
                centered: true,
                padding: '15px',
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'Room Rate',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //       text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });

        } else
        if (dataname == 'Bussiness Center') {
            console.log('Bussiness Center');

            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            var html = "<h4 id='hname'>Bussiness Center</h4><p id='pname'>HTMLDATA HTMLDATA HTMLDATA HTMLDATA HTMLDATA</p><br/>"
            /* container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);
             console.log(availabilityView);*/
            var nestedList = new Ext.form.Panel({
                //       displayField: 'text',
                //       floating: true,
                centered: true,
                padding: '15px',
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'Bussiness Center',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //      text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });

        } else
        if (dataname == 'Play Area') {
            console.log('Play Area');

            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            var html = "<h4 id='hname'>Play Area</h4><p id='pname'>Lot of open space available to enjoy a sportive experience and there is a separate kids area too. Kids can play and have fun by using the amenities in the kids arena. There are also some specific event for kids which will happen at a defined time period.</p><br/>"
            /*container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);

             console.log(availabilityView);*/

            var nestedList = new Ext.form.Panel({
                //        displayField: 'text',
                //       floating: true,
                centered: true,
                padding: '15px',
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'Play Area',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //        text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });

        } else
        if (dataname == 'The Local Area') {
            console.log('The Local Area');

            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            var html = "<h4 id='hname'>The Local Area</h4><p id='pname'>Algarve is most happening place for the tourism. Our resort is located in the Algarve region to realise the best touristic experience of your life time. Our resort is just nearer to all basic enjoyment that one requires. Beaches, Zoo marines, shopping malls, restaurant, Bars, strips road and much more... You shall enjoy by hiring a bike, rent a car and lot of water sports varies from Jet bike, Jet boat, Banana Boat, Dolphin visit and to parasailing.</p><p><img width='100%' height='100%' src='resources/images/algarve.png'></p><br/>"
            /* container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);

             console.log(availabilityView);*/

            var nestedList = new Ext.form.Panel({
                //       displayField: 'text',
                //       floating: true,
                centered: true,
                padding: '15px',
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'The Local Area',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //         text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });

        } else
        if (dataname == 'Land Map') {
            console.log('Land Map');

            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            var html = "<h4 id='hname'>Land Map</h4><p id='pname'>  HTMLDATA HTMLDATA HTMLDATA HTMLDATA HTMLDATA  </p><br/>"
            /*  container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);

             console.log(availabilityView);*/

            var nestedList = new Ext.form.Panel({
                //          displayField: 'text',
                //          floating: true,
                centered: true,
                padding: '15px',
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'Land Map',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //       text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });

        } else
        if (dataname == 'Studio Apartment') {
            console.log('Deluxe Room');

            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            var html = "<h4 id='hname'>Studio Apartment</h4><p id='pname'>These Studio Apartments are compact yet comfortable and suitably spacious for two adults. All are equipped with integrated kitchenettes, with all the utensil’s you'd expect. Light bright and airy with lovely views.</p> <p id='pname'>Max Occupancy: 2 Pax + 1 children </p><br/>"
            /*  container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);

             console.log(availabilityView);*/

            var nestedList = new Ext.form.Panel({
                //       displayField: 'text',
                //       floating: true,
                centered: true,
                padding: '15px',
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'Studio Apartment',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //          text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });

        } else
        if (dataname == 'Studio Apartment with seaview') {
            console.log('Studio Apartment with seaview');

            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            var html = "<h4 id='hname'>Studio Apartment with seaview</h4><p id='pname'>Expect to be pleasantly surprised at these Studio apartments with a sea view, modern contemporary designs, Fully integrated kitchenettes, flat screen TV and satellite. Enjoy your sun terrace or why not take a 3 minute stroll to the beach.</p><p id='pname'>Max Occupancy: 2 Pax + 1 children  </p><br/>"
            /* container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);

             console.log(availabilityView);*/

            var nestedList = new Ext.form.Panel({
                //        displayField: 'text',
                //        floating: true,
                centered: true,
                padding: '15px',
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'Studio Apartment with seaview',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //           text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });

        } else
        if (dataname == 'One bed room Apartment') {
            console.log('One bed room Apartment');

            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            var html = "<h4 id='hname'>One bed room Apartment</h4><p id='pname'>Each apartment has a large double bedroom equipped with double or twin beds. Comfy sofa bed in the living room and dining area. All furnished to a high standard including flat screen TV’s, fitted kitchens and hair dryer. Arrive, unpack then enjoy.</p> <p id='pname'>Max Occupancy: 4 Pax + 1 children  </p><br/>"
            /* container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);

             console.log(availabilityView);*/

            var nestedList = new Ext.form.Panel({
                //           displayField: 'text',
                //           floating: true,
                centered: true,
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'One bed room Apartment',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //           text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });

        }else
        if (dataname == 'One bed room Apartment with seaview') {
            console.log('One bed room Apartment with seaview');

            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            var html = "<h4 id='hname'>One bed room Apartment with seaview</h4><p id='pname'>The spacious and airy apartments have a contemporary design with an extra touch of luxury. The rooms have double or twin beds, flat screen TV’s with satellite, sofa bed for family or guests. Test your culinary skills in the well equipped kitchen.</p><p id='pname'>Max Occupancy: 4 Pax + 1 children</p><br/>"
            /* container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);

             console.log(availabilityView);*/

            var nestedList = new Ext.form.Panel({
                //           displayField: 'text',
                //           floating: true,
                centered: true,
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'One bed room Apartment with seaview',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //             text: 'Close',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });

        }else
        if (dataname == 'Two bed room Apartment') {
            console.log('Two bed room Apartment');

            var availabilityView = this.getAvailabilityView();
            var container1 = availabilityView.down("#container1");
            var html = "<h4 id='hname'>Two bed room Apartment</h4><p id='pname'>The apartment consists of two double or twin bedrooms, sofa bed, flat screen TV, bathrooms, fitted kitchen with large living and dining area. The furnished sun terrace offers stunning views over the beautiful gardens and the Atlantic ocean.</p> <p id='pname'>Max Occupancy: 6 Pax + 1 children </p><br/>"
            /* container1.setHtml(html);
             Ext.Viewport.animateActiveItem(availabilityView, this.slideLeftTransition);

             console.log(availabilityView);*/

            var nestedList = new Ext.form.Panel({
                //           displayField: 'text',
                //           floating: true,
                centered: true,
                itemCls:'mainpanel',
                width: '90%',
                height: '50%',
                cls:'floatpanel',
                title: 'categories',
                modal: true,
                hideOnMaskTap: false,
                showAnimation: {
                    type: 'fadeIn'
                },
                hideAnimation: {
                    type: 'fadeOut'
                },
                items: [
                    {
                        xtype:'toolbar',
                        title:'Two bed room Apartment',
                        docked:'top'
                    },
                    {
                        xtype: 'button',
                        //                text: 'close',
                        //  width:'80px',
                        cls:'panelbtn',
                        docked:'top',
                        handler: function () {
                            nestedList.hide();
                        }
                    }
                ]
            });
            nestedList.setHtml(html);
            Ext.Viewport.add(nestedList);
            nestedList.show({
                type        : 'pop',
                isComponent : true
            });

        }
    },

    onbackToRequirement: function ()
    {
        // Ext.Msg.alert('dsf22');
        var toView = this.getMasterView();
        Ext.Viewport.animateActiveItem(toView,this.slideRightTransition);

    },
    ongalleryCommandd: function () {
        var mostUsedView = this.getGalleryView();
        var guestStore = Ext.getStore("Gallerydvs");
        guestStore.removeAll();
        // guestStore.load();

        var rec = {
            DataID: '1',
            DataClass: 'infoList',
            DataName: 'Clube praia da oura',
            DataLogoUrl: 'resources/images/entertianment.jpg'
        };
        guestStore.add(rec);
        mostUsedView.down('#dvGuestInfo').setStore(guestStore);

        //     console.log("CPO");
        //     var galStore = Ext.getStore("Gallerys");
        //     galStore.load();
        //     galStore.load(function (pictures, operation) {
        //         var items = [];
        //         Ext.each(pictures, function (picture) {
        //             if (!picture.get('galUrl')) {
        //                 return;
        //             }
        //             items.push({
        //                 xtype: 'image',
        //                 cls: 'my-carousel-item-img',
        //                 src: picture.data.galUrl

        //             });
        //         });
        //            var carview = new Ext.Carousel({
        //                           items: [
        //                 {
        //                     xtype: 'button',
        //                     text: 'Close',
        //                     cls: 'panelbtn',
        //                     docked: 'top',
        //                     handler: function () {
        //                         carview.hide();
        //                     }
        //                 }
        //             ]
        //         });
        //         carview.setItems(items);
        //         carview.setActiveItem(0);
        //         Ext.Viewport.add(carview);
        //         carview.show({
        //             type: 'pop',
        //             isComponent: true
        //         });
        //     }
        //);
    },
    ondatagalViewCommand:function(){
        console.log('1111');
        console.log("CPO");
        var galStore = Ext.getStore("Gallerys");
        galStore.getProxy().on('exception',function () {
            console.log("check internet");
            Ext.Msg.alert("Check Internet!!!");
            return;
        });
        galStore.load();
        galStore.load(function (pictures, operation) {
                var items = [];
                Ext.each(pictures, function (picture) {
                    if (!picture.get('galUrl')) {
                        return;
                    }
                    items.push({
                        xtype: 'image',
                        cls: 'my-carousel-item-img',
                        src: picture.data.galUrl

                    });
                });
                var carview = new Ext.Carousel({
                    centered: true,
                    width: '90%',
                    itemCls: 'mainpanel',
                    height: '90%',
                    //      modal: false,
                    //      hideOnMaskTap: true,
                    emptyText: "<div class=\"notes-list-empty-text\">Check Internet!!!</div>",
                    /*    masked: {
                     xtype: 'loadmask'

                     },*/
                    items: [
                        {
                            xtype: 'button',
                            cls: 'panelbtn',
                            docked: 'top',
                            handler: function () {
                                carview.hide();
                            }
                        }
                    ]
                });
                carview.setItems(items);
                carview.setActiveItem(0);
                Ext.Viewport.add(carview);
                carview.show({
                    type: 'pop',
                    isComponent: true
                });
            }
        );




    }

});


