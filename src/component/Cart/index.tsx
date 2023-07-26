import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state: any) => state.cart);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item: any) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>
                                    <button
                                        onClick={() => dispatch({ type: "cart/increase", payload: item.id })}
                                    > +
                                    </button>
                                    <label> {item?.quantity} </label>
                                    <button
                                        onClick={() => {
                                            // console.log("Click decrease");
                                            dispatch({ type: "cart/decrease", payload: item.id })
                                        }
                                        }
                                    >
                                        -
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            Total:
            {items.reduce(function (sum: any, item: any) {
                return sum + item.price * item.quantity;
            }, 0)}
        </div>
    );
};

export default Cart;
