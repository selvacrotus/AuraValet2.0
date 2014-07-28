/**
 * Created by karthik on 4/21/2014.
 */
Ext.define("CrotusValet.store.CategoryDetails", {
    extend: "Ext.data.Store",
    config: {
        model: "CrotusValet.model.CategoryDetail",
     //   autoLoad:true,
        proxy: {
            type: 'ajax',
            url:'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?GetCategoryDetail=1'
       //     url: 'http://1.23.183.6:8085/CrotusValetHandler.ashx?GetCategoryDetail=1'
      ////         url: 'http://1.23.183.7/Aurawcf/AURAService.svc/GetAllCategoryMaster'
           // url: 'http://localhost/CrotusValetService/CrotusValetHandler.ashx?GetCategoryDetail=1'
          /*  reader : {
                type : 'json',
                rootProperty : 'GetCategoriesResult'
            }*/
        }
    }
});