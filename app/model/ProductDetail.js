Ext.define("CrotusValet.model.ProductDetail", {
    extend: "Ext.data.Model",
    config: {
   //     idproperty: "productDetailID",
        fields: [
            /*  { name: 'productDetailID', type: 'int' },
                { name: 'productDetailName', type: 'string' },
                { name: 'productDetailDescription', type: 'string' },
                { name: 'productDetailImageUrl', type: 'string' },
                { name: 'productDetailPrice', type: 'int' },
                { name: 'productDetailQuantity', type: 'int' },
                { name: 'productDetail_reservationID', type: 'string' },
                { name: 'productTotal', type:'int'},
                { name: 'productDetail_reservationName', type: 'string' }*/



        /*
            { name: 'ent_id', type: 'int' },
            { name: 'enterprise_name', type: 'string' },
            { name: 'store_id', type: 'int' },
            { name: 'menu_item_id', type: 'int' },
            { name: 'menu_item_name', type: 'string' },
            { name: 'tax_grp_id', type: 'int' },
            { name: 'rev_cat_id', type: 'int' },
            { name: 'rev_class_id', type:'int'},
            { name: 'productDetailQuantity', type:'int'},
            { name: 'rev_class_name', type: 'string' },
            { name: 'rev_cat_name', type: 'string' },
            { name: 'tax_id', type:'int'},
            { name: 'tax_name', type: 'string' },
            { name: 'tax_percent', type: 'int' },
            { name: 'tax_amt', type:'int'},
            { name: 'price_net', type: 'int' },
            { name: 'path', type: 'string' }*/

  //          { name: 'menu_item_id', type: 'int' },
     //       { name: 'menu_item_name', type: 'string' },
     //       { name: 'ent_id', type: 'int' },
      //      { name: 'price_net', type: 'int' },
     //       { name: 'menu_quantity', type: 'int' },
     //       { name: 'total_price', type: 'int' },
    //        { name: 'res_id', type: 'int' },
   //         { name: 'res_name', type: 'string' },
   //         { name: 'res_roomno', type: 'int' }


            { name: 'menu_item_id', type: 'int' },
             { name: 'menu_item_name', type: 'string' },
           { name: 'ent_id', type: 'int' },
            { name: 'price_net', type: 'int' },
            { name: 'menu_quantity', type: 'float' },
              { name: 'total_price', type: 'float' },
              { name: 'res_id', type: 'int' },
                { name: 'res_roomno', type: 'int' },
              { name: 'res_name', type: 'string' },

            { name: 'tax_percent', type: 'int' },
            { name: 'tax_amt', type:'float'},
            { name: 'total', type:'float'}




        ],

       proxy: {
            type: 'localstorage',
            id  : 'productDetailID'
        }
    }
});
