import { useSelector } from "react-redux";

function Orders() {
  // Get the purchase details from the store
  const purchaseHistory = useSelector((state) => state.purchasedetails);

  // Convert the object into list items
  let finaldata = purchaseHistory.map((purchase, index) => (
    <li key={index}>
      <p>Date: {purchase.date}</p>
      <p>Total Amount: {purchase.totalamount}</p>
      <p>items:</p>
        {purchase.items.map((item, idx) => (
          <li key={idx}>
            {item.name} - {item.price} * {item.quantity}
          </li>
        ))}
    </li>
  ));

  return (
    <>
      <div>
        <h2>Purchase History</h2>
        {purchaseHistory.length === 0 ? (
          <p>No purchase history available</p>
        ) : (
          <ol>{finaldata}</ol>
        )}
      </div>
    </>
  );
}

export default Orders;
