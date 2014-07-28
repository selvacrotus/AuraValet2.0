Ext.define("CrotusValet.store.Gallerydvs", {
    extend: "Ext.data.Store",
    config: {
        model: "CrotusValet.model.Gallerydv",

        //autoLoad:true,
        proxy: {
            type: 'ajax'

            //     url: 'http://test.petcheyleisure.com/TourAppservice/tourservice.ashx?Json=GetPackages'
            //url: 'http://localhost/tourappservice/TourService.ashx?Json=GetTourService'
            //url: 'http://115.254.54.126:8078/tourappservice/tourservice.ashx?Json=GetPackages',
            //url: 'http://offfffff.com'
            // id:'tour-app-store'
        }
    }
});