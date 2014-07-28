/**
 * Created by karthik on 4/21/2014.
 */
Ext.define("CrotusValet.model.CategoryDetail", {
    extend: "Ext.data.Model",
    config: {
        fields: [
         /*   { name: 'categoryDetailID', type: 'int' },
            { name: 'categoryDetailName', type: 'string' },
            { name: 'categoryDetailImageUrl', type: 'string' },
            { name: 'categoryDetail_DateCreated', type: 'string' },
            {name:'categoryDetail_categoryMasterID', type:'int'}*/
           /* { name: 'ent_id', type: 'int' },
            { name: 'path', type: 'string' },
            { name: 'rev_class_alpha_id', type: 'int' },
            { name: 'rev_class_id', type: 'int' },
            { name: 'rev_class_name', type: 'string' },
            { name: 'store_id', type: 'int' }
*/

            { name: 'ent_id', type: 'int' },
            { name: 'rev_cat_name', type: 'string' },
            { name: 'rev_cat_id', type: 'int' },
            { name: 'ent_id1', type: 'int' },
            { name: 'rev_class_id', type: 'int' },
            { name: 'path', type: 'string' },
            { name: 'store_id', type: 'int' },
            {name:'prod_class_id', type: 'int'},
            { name: 'prod_class_name', type: 'string' }


        ]
    }
});

