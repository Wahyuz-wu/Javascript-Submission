// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];


// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: 'Menunggu',
  };

  orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const updateOrder = orders.find((order) => order.id === orderId);
  updateOrder.status = status;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders.filter(order => order.status === 'Selesai').reduce((total, order) => total + order.totalPrice, 0)
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const Index = orders.findIndex(order => order.id === id);
  orders.splice(Index, 1);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
