import { useState } from "react";
import "../../../assets/styles/popUp.css";
import { addTransactions } from "../../../api/AddTransaksi";


const BeliProdukPulsa = (props) => {
    const [data, setData] = useState({
        product_id: props.data.product_id,
        user_id: props.data.user_id,
        amount: props.data.amount,
        method: props.data.method,
        number: props.data.number,
        email: props.data.email,
        status: props.data.status,
        type: props.data.type
      });
      const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({
          ...data,
          [name]: value,
        });
      };
      const BuyNow = async (e) => {
        e.preventDefault();
        try {
          const res = await addTransactions({
            product_id: data.product_id,
            user_id: data.user_id,
            amount: data.amount,
            method: data.method,
            number: data.number,
            email: data.email,
            status: data.status,
            type: data.type
          });
          if (res.data.message === "success") {
            props.setReload();
            props.handleClose();
          }
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>
                    x
                </span>
                <h2 className="mb-4 mt-2">
                    <center>Beli Produk</center>
                </h2>
                <form onSubmit={BuyNow}>
                    <div className="form-group row mb-2">
                        <label
                        for="Product_id"
                        className="offset-sm-1 col-sm-3 col-form-label"
                        >
                        Product ID
                        </label>
                        <div className="col-sm-7">
                        <input
                            type="text"
                            className="form-control"
                            id="product_id"
                            name="product_id"
                            onChange={(e) => handleInput(e)}
                            value={data.product_id}
                            placeholder={data.product_id}
                            required
                        />
                        </div>
                        </div>
                        <div className="form-group row mb-2">
                            <label
                                for="inputAmount"
                                className="offset-sm-1 col-sm-3 col-form-label"
                            >
                                Amount
                            </label>
                            <div className="col-sm-7">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAmount"
                                    name="amount"
                                    onChange={handleInput}
                                    value={data.amount}
                                    placeholder={data.amount}
                                    required
                                />
                            </div>
                        </div>

                    <div className="button mt-4">
                        <center>
                            <button
                                type="submit"
                                className="btn mx-3"
                                style={{ backgroundColor: "#006BA0", color: "white" }}
                            >
                                Beli
                            </button>

                            <button
                                className="btn btn-danger mx-3"
                                onClick={props.handleClose}
                            >
                                Batal
                            </button>
                        </center>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default BeliProdukPulsa;