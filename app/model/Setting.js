/**
 * Created by karthik on 5/13/2014.
 */
Ext.define("CrotusValet.model.Setting", {
    extend: "Ext.data.Model",
    config: {
        idproperty: "settingsID",
        fields: [
         /* { name: 'ResId', type: 'int' },
            { name: 'ResName', type: 'string' }*/
            { name: 'res_id', type: 'int' },
            { name: 'res_roomno', type: 'int' },
            { name: 'res_name', type: 'string' }
        ],
        proxy: {
            type: 'localstorage',
            id  : 'settingsID'
        }

    }
});