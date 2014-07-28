/**
 * Created by karthik on 5/23/2014.
 */

Ext.define("CrotusValet.model.Internet", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: 'InternetID', type: 'int' },
            { name: 'InternetName', type: 'string' },
            { name: 'InternetClass', type: 'string' },
            { name: 'InternetLogoUrl', type: 'string' }
        ]
    }

});
