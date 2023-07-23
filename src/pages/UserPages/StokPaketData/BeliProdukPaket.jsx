import { useState,useEffect } from "react";
import "../../../assets/styles/popUp.css";
import { addTransactions } from "../../../api/AddTransaksi";


const BeliProdukPaket = (props) => {
    const [data, setData] = useState({
        product_id: props.data.id,
        user_id: props.userData.id,
        number: "",
        email: props.userData.email,
        status: "",
        type: ""
      });
      console.log(props)
    //   const handleInput = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setData({
    //       ...data,
    //       [name]: value,
    //     });
    //     console.log(data)
    //   };
      const handleInput = (e) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
      };
      const BuyNow = async (e) => {
        e.preventDefault();
        try {
          const res = await addTransactions({
            product_id: data.product_id,
            user_id: data.user_id,
            number: data.number,
            email: data.email,
            status: data.status,
            type: data.type,
          });
          if (res.data.message === "success") {
            window.open(res.data.data.invoice_url, '_blank', 'noreferrer');
            props.handleClose();
            window.location.reload();
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
                        {/* <div className="form-group row mb-2">
                            <label
                                for="Amount"
                                className="offset-sm-1 col-sm-3 col-form-label"
                            >
                                Pulsa
                            </label>
                            <div className="col-sm-7">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Amount"
                                    name="amount"
                                    onChange={handleInput}
                                    value={data.amount}
                                    placeholder={data.amount}
                                    required
                                />
                            </div>
                        </div> */}
                        <div className="form-group row mb-2">
                            <label
                                for="type"
                                className="offset-sm-1 col-sm-3 col-form-label"
                            >
                                Tipe Transaksi
                            </label>
                            <div className="col-sm-7">
                                <select
                                    className="form-select"
                                    id="type"
                                    name="type"
                                    onChange={handleInput}
                                    value={data.type}
                                    required
                                >
                                    <option required value="Redeem">
                                        Redeem
                                    </option>
                                    <option required value="Purchase">
                                        Purchase
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row mb-2">
                        <label
                            for="status"
                            className="offset-sm-1 col-sm-3 col-form-label"
                        >
                            Status Transaksi
                        </label>
                        <div className="col-sm-7">
                            <select
                                className="form-select"
                                id="status"
                                name="status"
                                onChange={handleInput}
                                value={data.status}
                                required
                            >
                                <option required value="Pending">
                                    Pending
                                </option>
                                <option required value="Pending">
                                    Pending
                                </option>
                            </select>
                        </div>
                        </div>
                        <div className="form-group row mb-2">
                            <label
                                for="User_id"
                                className="offset-sm-1 col-sm-3 col-form-label"
                            >
                                User ID
                            </label>
                            <div className="col-sm-7">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="User_id"
                                    name="user_id"
                                    onChange={handleInput}
                                    value={data.user_id}
                                    placeholder={data.user_id}
                                    required
                                />
                            </div>
                        </div>
                        {/* <div className="form-group row mb-2">
                            <label
                                for="Method"
                                className="offset-sm-1 col-sm-3 col-form-label"
                            >
                                Method
                            </label>
                            <div className="col-sm-7">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Method"
                                    name="method"
                                    onChange={handleInput}
                                    value={data.method}
                                    placeholder={data.method}
                                    required
                                />
                            </div>
                        </div> */}
                        <div className="form-group row mb-2">
                            <label
                            for="Number"
                            className="offset-sm-1 col-sm-3 col-form-label"
                            >
                            Nomor HP
                            </label>
                            <div className="col-sm-7">
                            <input
                                type="text"
                                className="form-control"
                                id="number"
                                name="number"
                                onChange={(e) => handleInput(e)}
                                value={data.number}
                                required
                            />
                            </div>
                        </div>
                        <div className="form-group row mb-2">
                            <label
                                for="Email"
                                className="offset-sm-1 col-sm-3 col-form-label"
                            >
                                Email
                            </label>
                            <div className="col-sm-7">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Email"
                                    name="email"
                                    onChange={handleInput}
                                    value={data.email}
                                    placeholder={data.email}
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
export default BeliProdukPaket;