/**
 * Created by karthik on 4/22/2014.
 */
Ext.define("CrotusValet.store.ProductDetails",  {
    extend: "Ext.data.Store",
    config: {
        model: "CrotusValet.model.ProductDetail",
    //    autoload:true,
        proxy: {
            type: "ajax"
        }
    }
});