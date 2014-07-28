Ext.define("CrotusValet.model.Gallery", {
   extend: "Ext.data.Model",
    config: {
        idproperty: 'galID',
        fields: [
        { name: 'galID', type: 'int' },
        { name: 'galName', type: 'string' },
        { name: 'galUrl', type: 'string' },
        ]
    }

});