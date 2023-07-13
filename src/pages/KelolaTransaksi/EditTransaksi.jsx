import { useState } from "react";
import { updateTransaksi } from "../../api/updateTransaksi";
import "../../assets/styles/popUp.css";

const EditTransaksi = (props) => {
    const [data, setData] = useState({
        status: props.data.status,
        amount: props.data.amount,
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

    const addNow = async (e) => {
        e.preventDefault();
        try {
            const res = await updateTransaksi(props.data.id, data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        props.setReload();
        props.handleClose();
    };

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>
                    x
                </span>
                <h2 className="mb-4 mt-2">
                    <center>Edit Transaksi</center>
                </h2>
                <form onSubmit={addNow}>
                    <div className="form-group row mb-2">
                        <label
                            for="inputStatus"
                            className="offset-sm-1 col-sm-3 col-form-label"
                        >
                            Status Transaksi
                        </label>
                        <div className="col-sm-7">
                            <select
                                className="form-select"
                                id="inputStatus"
                                name="status"
                                onChange={handleInput}
                                value={data.status}
                                required
                            >
                                <option required value="Success">
                                    Success
                                </option>
                                <option required value="Pending">
                                    Pending
                                </option>
                                <option required value="Failed">
                                    Gagal
                                </option>
                            </select>
                        </div>
                        </div>
                        <div className="form-group row mb-2">
                            <label
                                for="inputType"
                                className="offset-sm-1 col-sm-3 col-form-label"
                            >
                                Tipe Transaksi
                            </label>
                            <div className="col-sm-7">
                                <select
                                    className="form-select"
                                    id="inputType"
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
                                Update
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
export default EditTransaksi;