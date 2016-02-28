var express = require('express');
var router = express.Router();

var Invoice = require('../models/invoices.js');

// Get all invoices

router.get('/', function(req,res){
        Invoice.getInvoices(function(err,invoices){
                if(err){
                        res.send(err);
                }
                else{
                        res.json(invoices);
                }
        });
});

router.get('/:id', function(req,res){
        Invoice.getInvoice(req.params.id,function(err,invoice){
                if(err){
                        res.send(err);
                }
                else{
                        res.json(invoice);
                }
        });
});

router.post('/', function(req,res){
        var invoice = req.body;

        Invoice.addInvoice(invoice,function(err,invoice){
                if(err){
                        res.send(err);
                }
                else{
                        res.json(invoice);
                }
        });
});

router.put('/:id', function(req,res){
        var id = req.params.id;
        var invoice = req.body;

        Invoice.updateInvoice(id, invoice, {}, function(err,invoice){
                if(err){
                        res.send(err);
                }
                else{
                        res.json(invoice);
                }
        });
});

router.delete('/:id', function(req,res){
        var id = req.params.id;

        Invoice.removeInvoice(id, function(err,invoice){
                if(err){
                        res.send(err);
                }
                else{
                        res.json(invoice);
                }
        });
});


module.exports = router;
