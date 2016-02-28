var mongoose = require('mongoose');

var invoiceScheme = mongoose.Schema ({
        customer:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Customer'
        },
        service:{
                type: String,
                required: true
        },
        price:{
                type: String
        },
        due:{
                type: String
        },
        status:{
                type: String
        },
        createdAt:{
                type: Date,
                default: Date.now
        },

});

var Invoice  = mongoose.model('Invoice', invoiceScheme);
module.exports = Invoice;

// Get invoices
module.exports.getInvoices = function(callback,limit){
        Invoice.find(callback).limit(limit).sort([['createdAt','descending']]);
}

// Get specific customer by id
module.exports.getInvoice = function(id, callback){
        Invoice.findById(id,callback);
}

// add new invoice
module.exports.addInvoice = function(invoice, callback){
        Invoice.create(invoice, callback);
}
// update invoice
module.exports.updateInvoice = function(id, invoice, options, callback){
        var query = {_id:id};
        Invoice.findOneAndUpdate(query, invoice, options, callback);
}

// remove invoice
module.exports.removeInvoice = function(id, callback){
        var query = {_id:id};
        Invoice.remove(query, callback);
}
