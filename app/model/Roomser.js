/**
 * Created by karthik on 4/21/2014.
 */
Ext.define("CrotusValet.model.Roomser", {
    extend: "Ext.data.Model",
    config: {
        fields: [
           /* { name: 'RoomID', type: 'int' },
            { name: 'RoomName', type: 'string' },
            { name: 'RoomClass', type: 'string' },
            { name: 'RoomLogoUrl', type: 'string' }*/


            { name: 'ent_id', type: 'int' },
            { name: 'ent_id1', type: 'int' },
            { name: 'rev_class_name', type: 'string' },
            { name: 'rev_class_id', type: 'int' },
            { name: 'store_id', type: 'int' },
            { name: 'path', type: 'string' }
        ]
    }
});


