/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'CrotusValet',
    models: ['GuestInf', 'ProductDetail', 'CategoryDetail', 'Roomser', 'ProductMaster','Setting','Internet', "Gallery","Gallerydv","Hotelser"],
    stores: ['GuestInfs', 'ProductDetails', 'CategoryDetails', 'Roomsers', 'ProductMasters','Internets', "Gallerys","Gallerydvs","Hotelsers"],
    controllers: ['Basic'],
    views: [
        'Welcome', 'Master', 'Availability', 'ProductDetail','GuestInfo', 'Roomservice', 'CategoryDetail', 'Cart', 'Description', 'Setting' ,'Iframe', 'Internet', 'Gallery', 'Hotelservice','Payments'
        //, 'Irispanel'
    ],
 //   requires: [Ext.Panel],
    requires: [
        'Ext.Panel',
        'Ext.data.Store',
        'Ext.List',
        'Ext.field.Search',
        'Ext.Toolbar'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function () {
        var welcomeView = {
            xtype: "welcomeview"
        };
        var masterView = {
            xtype:"masterview"
        };
        var guestinfoView = {
            xtype: "guestinfoview"
        };
        var mainView = {
            xtype: "mainview"
        };
        var availabilityView = {
            xtype: "availabilityview"
        };
        var productdetailView = {
            xtype: "productdetailview"
        };
        var roomserviceView = {
            xtype: "roomserviceview"
        };
        var categorydetailView = {
            xtype: "categorydetailview"
        };
        var cartView = {
            xtype:"cartview"
        };
        var descriptionView = {
            xtype:"descriptionview"
        };
        var settingView = {
            xtype:"settingview"
        };
        var paymentsView = {
            xtype:"paymentsview"
        };
        var iframeView = {
            xtype:"iframeview"
        };
        var internetView = {
            xtype:"internetview"
        };
        var galleryview = {
            xtype: "galleryview"
        };
        var hotelserviceView = {
            xtype: "hotelserviceview"
        };


        /*setTimeout(function(){
            Ext.fly('appLoadingIndicator').destroy();
            //Ext.fly('loadingBG').destroy();
        }, 1000);*/
       Ext.fly('appLoadingIndicator').destroy();
        // Initialize the main view
        /*setTimeout(function(){
            Ext.Viewport.add([masterView])
        }, 5000);*/

        Ext.Viewport.add([masterView]);
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
