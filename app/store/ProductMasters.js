/**
 * Created by karthik on 4/28/2014.
 */
Ext.define("CrotusValet.store.ProductMasters", {
    extend: "Ext.data.Store",
    config: {
        model: "CrotusValet.model.ProductMaster",
   //     autoLoad:true,
        proxy: {
            type: 'ajax',
            url: 'http://1.23.183.7/Aurademowcf/CrotusValetHandler.ashx?GetProductMaster=1'
           // url: 'http://localhost/CrotusValetService/CrotusValetHandler.ashx?GetProductMaster=1'
        }
    }
});
