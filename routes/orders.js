import express from "express";
import { Order } from "../models/orders.js";

const router = express.Router();

router.get('/', (_, res) => {
    // get our Orders
    Order.find() // if you invoke without any arguments, finds all
        .then(orders => res.json(orders))
        .catch(err => res.status(404).json(err))
});

router.post('/', (req, res) => {
    const newOrder = new Order({
        items: req.body.items,
        name: req.body.name,
        address: req.body.address
    })

    // newOrder is an instance of the Order class
    newOrder.save()
        .then(order => res.json(order.items))
        // if successful, return only the items of said order (helps exclude timestamp)
        .ctach(err => res.status(422).json(err)) // 422 unprocessable
});

router.patch('/', (req, res) => {
    res.json('PATCH Success')
});

router.delete('/:order_id', (req, res) => {
    const id = req.params.order_id
    Order.findOneAndDelete(id)
        .then(order => res.json({id: order._id})) // ._ is mongoose standard if ID didn't exist
});

export const orders = router;
