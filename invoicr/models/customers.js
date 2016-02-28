var mongoose = require('mongoose');

var customerScheme = mongoose.Schema ({
        first_name:{
                type: String,
                required: true
        },
        last_name:{
                type: String,
                required: true
        },
        company:{
                type: String,
        },
        logo_url:{
                type: String,
        },
        email:{
                type: String,
                required: true
        },
        phone:{
                type: String,
        },
        address:{
                street: String,
                city: String,
                state: String,
                zip: String
        },
        createdAt:{
                type: Date,
                default: Date.now
        },

});

var Customer  = mongoose.model('Customer', customerScheme);
module.exports = Customer;

// Get customers
module.exports.getCustomers = function(callback,limit){
        Customer.find(callback).limit(limit).sort([['first_name','ascending']]);
}

// Get specific customer by id
module.exports.getCustomer = function(id, callback){
        Customer.findById(id,callback);
}

module.exports.addCustomer = function( customer, callback) {
        /*var add = {
                first_name      : customer.first_name,
                last_name       : customer.last_name,
                company         : customer.company,
                logo_url        : customer.logo_url,
                email           : customer.email,
                phone           : customer.phone,
                address         : {
                        street  : customer.address.street,
                        city  : customer.address.city,
                        state  : customer.address.state,
                        zip  : customer.address.zip
                }
        };

        Customer.create(add, callback);
        */
        Customer.create(customer, callback);
}

module.exports.updateCustomer = function(id, customer, options, callback) {
        var query = { _id: id};
        /*
        var update = {
                first_name      : customer.first_name,
                last_name       : customer.last_name,
                company         : customer.company,
                logo_url        : customer.logo_url,
                email           : customer.email,
                phone           : customer.phone,
                address         : {
                        street  : customer.address.street,
                        city  : customer.address.city,
                        state  : customer.address.state,
                        zip  : customer.address.zip
                }
        };
        Customer.findOneAndUpdate(query, update, options, callback);
        */
        Customer.findOneAndUpdate(query, customer, options, callback);
}

module.exports.removeCustomer = function(id, callback) {
        var query = { _id: id};

        Customer.remove(query, callback);
}
