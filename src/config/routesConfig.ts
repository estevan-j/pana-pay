import ApiPage from "../pages/ApiPage";
import AfiliacionMasivaPage from "../pages/dashboard/AfiliacionMasivaPage";
import AfiliacionPage from "../pages/dashboard/AfiliacionPage";
import Catalogos from "../pages/dashboard/Catalogos";
import ConsultaCuentaPage from "../pages/dashboard/ConsultaCuentaPage";
import ConsultaPage from "../pages/dashboard/ConsultaPage";
import ConsultaStatusPage from "../pages/dashboard/ConsultaStatusPage";
import CreditoPage from "../pages/dashboard/CreditoPage";
import DebitoPage from "../pages/dashboard/DebitoPage";
import DesafiliacionPage from "../pages/dashboard/DesafiliacionPage";
import DirectorioUnificadoPage from "../pages/dashboard/DirectorioUnificadoPage";
import FuncionamientoPage from "../pages/dashboard/FuncionamientoPage";
import HistorialCambiosPage from "../pages/dashboard/HistorialCambios";
import HomePage from "../pages/dashboard/HomePage";
import QRPage from "../pages/dashboard/QRPage";
import RegistrosPage from "../pages/dashboard/RegistrosPage";
import ReversoCreditoPage from "../pages/dashboard/ReversoCreditoPage";
import ReversoDebitoPage from "../pages/dashboard/ReversoDebitoPage";
import SeguridadPage from "../pages/dashboard/SeguridadPage";
import TransferenciaPage from "../pages/dashboard/TransferenciaPage";

export const ROUTES_CONFIG = [
  { path: "/", element: HomePage, category: null, id: "home" },
  { path: "/funcionamiento", element: FuncionamientoPage, category: "services", id: "funcionamiento" },
  { path: "/directorio-unificado", element: DirectorioUnificadoPage, category: "services", id: "directorio-unificado" },
  { path: "/seguridad", element: SeguridadPage, category: "services", id: "seguridad" },
  { path: "/historial-cambios", element: HistorialCambiosPage, category: "services", id: "historial-cambios" },
  { path: "/catalogos", element: Catalogos, category: "services", id: "catalogos" },
  { path: "/afiliacion-masiva", element: AfiliacionMasivaPage, category: "services", id: "afiliacion-masiva" },
  { path: "/registros", element: RegistrosPage, category: "services", id: "registros" },
  { path: "/QR", element: QRPage, category: "services", id: "QR" },
  { path: "/afiliacion", element: AfiliacionPage, category: "administrative", id: "afiliacion" },
  { path: "/desafiliacion", element: DesafiliacionPage, category: "administrative", id: "desafiliacion" },
  { path: "/consulta-cuenta", element: ConsultaCuentaPage, category: "administrative", id: "consulta-cuenta" },
  { path: "/consulta-credencial", element: ConsultaPage, category: "administrative", id: "consulta-credencial" },
  { path: "/transferencia", element: TransferenciaPage, category: "administrative", id: "transferencia" },
  { path: "/status-transaccion", element: ConsultaStatusPage, category: "administrative", id: "status-transaccion" },
  { path: "/debito", element: DebitoPage, category: "financial", id: "debito" },
  { path: "/reverso-debito", element: ReversoDebitoPage, category: "financial", id: "reverso-debito" },
  { path: "/credito", element: CreditoPage, category: "financial", id: "credito" },
  { path: "/reverso-credito", element: ReversoCreditoPage, category: "financial", id: "reverso-credito" },
  { path: "/api", element: ApiPage, category: "other", id: "api" },
];