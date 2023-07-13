import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/Login";
import KelolaTransaksi from "../pages/kelolaTransaksi/KelolaTransaksi";
import DetailEditProdukPulsa from "../pages/kelolaStokPulsa/DetailEditProdukPulsa";
import DetailEditProdukPaket from "../pages/kelolaStokPaket/DetailEditProdukPaket";
import DetailEditPengguna from "../pages/kelolaPelanggan/DetailEditPengguna";
import KelolaAdmin from "../pages/kelolaAdmin/KelolaAdmin";
import StokPaketData from "../pages/kelolaStokPaket/StokPaketData";
import StokPulsa from "../pages/kelolaStokPulsa/StokPulsa";
import KelolaPelanggan from "../pages/kelolaPelanggan/KelolaPelanggan";
import KelolaFAQ from "../pages/kelolaFAQ/FaqPage";
import Beranda from "../pages/landingPage/Beranda";
import PageNotFound from "../pages/PageNotFound";
import DetailTransaksi from "../pages/kelolaTransaksi/DetailTransaksi";
import Verifikasi from "../pages/VerifikasiEmail";
import Reset from "../pages/ResetPassword";
import FeedbacksPage from "../pages/kelolaFeedbacks/FeedbacksPage";
import { AuthProvider } from "../components/AuthProvider";
import UserDashboard from "../pages/UserPages/UserDashboard";
import UserProdukPulsa from "../pages/UserPages/StokPulsa/UserProdukPulsa";
import UserProdukPaketData from "../pages/UserPages/StokPaketData/UserProdukData";
import DetailProdukPulsa from "../pages/UserPages/StokPulsa/DetailProdukPulsa";
import DetailProdukPaket from "../pages/UserPages/StokPaketData/DetailProdukPaket";
import RiwayatTransaksiUser from "../pages/UserPages/UserTransaksi/RiwayatTransaksiUser";
import UserFAQ from "../pages/UserPages/UserFaq/UserFaqPage";
import UserFeedbacks from "../pages/UserPages/UserFB/UserFeedbacks";

function Router() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/verifikasi" exact element={<Verifikasi />} />
          <Route path="/reset/:token" exact element={<Reset />} />
          <Route element={<ProtectedRoute></ProtectedRoute>}>
            <Route path="/login" element={<Login></Login>} />
          </Route>

          <Route element={<PrivateRoute></PrivateRoute>}>
            <Route path="/dashboard" element={<Dashboard></Dashboard>} />
            <Route
              path="/kelolaPengguna/pelanggan/detailpengguna/:id"
              exact
              element={<DetailEditPengguna />}
            />
            <Route
              path="/kelolapengguna/pelanggan"
              element={<KelolaPelanggan />}
            />
            <Route path="/kelolapengguna/admin" element={<KelolaAdmin />} />
            <Route path="/kelolatransaksi" element={<KelolaTransaksi />} />
            <Route
              path="/kelolatransaksi/detail/:id"
              exact
              element={<DetailTransaksi />}
            />
            <Route path="/kelolastok/pulsa" element={<StokPulsa />} />
            <Route path="/kelolastok/paketdata" element={<StokPaketData />} />
            <Route
              path="/kelolastok/detaileditproduk/pulsa/:id"
              element={<DetailEditProdukPulsa />}
            />
            <Route
              path="/kelolastok/detaileditproduk/paket/:id"
              element={<DetailEditProdukPaket />}
            />
            <Route path="/kelolafaq" element={<KelolaFAQ />} />
            <Route path="/feedbackspage" element={<FeedbacksPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          {/* User Sections */}
          <Route path="/userDashboard" element={<UserDashboard/>}/>
          <Route path="/transaksi" element={<RiwayatTransaksiUser/>}/>
          <Route path="/produk/pulsa" element={<UserProdukPulsa />} />
          <Route path="/produk/paketdata" element={<UserProdukPaketData />} />
          <Route
              path="/produk/detailproduk/pulsa/:id"
              element={<DetailProdukPulsa />}
            />
            <Route
              path="/produk/detailproduk/paket/:id"
              element={< DetailProdukPaket/>}
            />
            <Route path="/userfaq" element={< UserFAQ/>} />
            <Route path="/userfeedbacks" element={<UserFeedbacks/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Router;
