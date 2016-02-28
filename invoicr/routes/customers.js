var express = require('express');
var router = express.Router();

var Customer = require('../models/customers.js');

// Get all customers

router.get('/', function(req,res){
        Customer.getCustomers(function(err,customers){
                if(err){
                        res.send(err);
                }
                else{
                        res.json(customers);
                }
        });
});

// get specific customer by id
router.get('/:id', function(req,res){
        Customer.getCustomer(req.params.id,function(err,customer){
                if(err){
                        res.send(err);
                }
                else{
                        res.json(customer);
                }
        });
});

router.post('/', function(req,res){
        var customer = req.body;

        Customer.addCustomer(customer,function(err,customer){
                if(err){
                        res.send(err);
                }
                else{
                        res.json(customer);
                }
        });
});

router.put('/:id', function(req,res){
        var id = req.params.id;
        var customer = req.body;

        Customer.updateCustomer(id, customer, {}, function(err,customer){
                if(err){
                        res.send(err);
                }
                else{
                        res.json(customer);
                }
        });
});

router.delete('/:id', function(req,res){
        var id = req.params.id;

        Customer.removeCustomer(id, function(err,customer){
                if(err){
                        res.send(err);
                }
                else{
                        res.json(customer);
                }
        });
});


module.exports = router;
