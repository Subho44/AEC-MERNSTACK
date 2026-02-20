const EvenEmitter = require('events');
const bus = new EvenEmitter();

// Send Notification
bus.on("order:created",(order)=>{
    console.log("email sent to user for order id:",order.email,"for order id:",order.id);

});
// Invoice Generate
bus.on("order:created",(order)=>{
    console.log("invoice generated for order id:",order.id,"Amount:",order.amount);

});

//analysis update order
bus.on("order:created",(order)=>{
    console.log("analysis updated for order id:",order.id,"Amount:",order.amount);
});

function createOrder(email,amount){
    const order = {id:"ord"+Date.now(),email,amount};
    bus.emit("order:created",order);
}
createOrder("Debanjanm12@gmail.com",8999);