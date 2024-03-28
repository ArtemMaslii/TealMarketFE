import "./history.scss";

const History = () => {
    return (
        <div className="history">
            <h2>History of orders</h2>
            <div className="history__order">
                <table>
                    <thead>
                        <tr>
                        <th>ORDER</th>
                        <th>DATE</th>
                        <th>SUBTOTAL</th>
                        <th>STATUS</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="order">Iphone 15 Pro</td>
                            <td>19 February, 2024</td>
                            <td>$1,798</td>
                            <td className="status">Pending payment</td>
                        </tr>
                        <tr>
                            <td className="order">Iphone 14 Pro</td>
                            <td>21 February, 2024</td>
                            <td>$699</td>
                            <td className="status paid">Paid</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;