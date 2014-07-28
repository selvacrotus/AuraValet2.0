/**
 * Created by karthik on 4/28/2014.
 */
Ext.define("CrotusValet.model.ProductMaster", {
    extend: "Ext.data.Model",
    config: {
        fields: [
           /* { name: 'productMasterID', type: 'int' },
            { name: 'productMasterName', type: 'string' },
            { name: 'productMasterDescription', type: 'string' },
            { name: 'productMasterImageUrl', type: 'string' },
            { name: 'productMasterStock', type: 'string' },
            { name: 'productMasterPrice', type: 'string' },*/
            { name: 'ent_id', type: 'int' },
            { name: 'enterprise_name', type: 'string' },
            { name: 'store_id', type: 'int' },
            { name: 'menu_item_id', type: 'int' },
            { name: 'menu_item_name', type: 'string' },
            { name: 'tax_grp_id', type: 'int' },
            { name: 'rev_cat_id', type: 'int' },
            { name: 'rev_class_id', type:'int'},
            { name: 'rev_class_name', type: 'string' },
            { name: 'rev_cat_name', type: 'string' },
            { name: 'tax_id', type:'int'},
            { name: 'tax_name', type: 'string' },
            { name: 'tax_percent', type: 'int' },
            { name: 'tax_amt', type:'float'},
            { name: 'price_net', type: 'float' },
            { name: 'path', type: 'string' }
        ]
    }
});