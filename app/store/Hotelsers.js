/**
 * Created by karthik on 5/28/2014.
 */
Ext.define("CrotusValet.store.Hotelsers", {
    extend: "Ext.data.Store",
    config: {
        model: "CrotusValet.model.Hotelser",
        //autoLoad:true,
        proxy: {
            type: 'ajax'
        }
    }
});