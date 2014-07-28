Ext.define("CrotusValet.store.Gallerys", {
    extend: "Ext.data.Store",
    config: {
        model: "CrotusValet.model.Gallery",
   //     autoLoad:true,
        proxy: {
           // timeout: 3000,
            type: 'ajax',
            url: 'http://localhost/tourappservice/tourservice.ashx?Json=GALLERY'
      ////////      url: 'http://test.petcheyleisure.com/TourAppservice/tourservice.ashx?Json=GALLERY'
            //url: 'http://115.254.54.126:8078/tourappservice/tourservice.ashx?Json=GALLERY',

        }
    }
});