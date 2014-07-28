/**
 * Created by karthik on 5/28/2014.
 */
Ext.define("CrotusValet.model.Hotelser", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: 'ImgID', type: 'int' },
            { name: 'ImgName', type: 'string' },
            { name: 'ImgClass', type: 'string' },
            { name: 'ImgLogoUrl', type: 'string' }
        ]
    }
});