import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import PatientDashboard from "./pages/patient/Dashboard";
import PatientRecords from "./pages/patient/Records";
import PatientAppointments from "./pages/patient/Appointments";
import PatientMedicines from "./pages/patient/Medicines";
import PatientSchemes from "./pages/patient/Schemes";
import PatientProfile from "./pages/patient/Profile";
import EmergencyCard from "./pages/patient/EmergencyCard";
import DoctorDashboard from "./pages/doctor/Dashboard";
import Notifications from "./pages/Notifications";
import EmergencyView from "./pages/public/EmergencyView";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />

            {/* Patient Portal */}
            <Route path="/patient" element={<PatientDashboard />} />
            <Route path="/patient/records" element={<PatientRecords />} />
            <Route path="/patient/appointments" element={<PatientAppointments />} />
            <Route path="/patient/medicines" element={<PatientMedicines />} />
            <Route path="/patient/schemes" element={<PatientSchemes />} />
            <Route path="/patient/profile" element={<PatientProfile />} />
            <Route path="/patient/emergency" element={<EmergencyCard />} />

            {/* Doctor Portal */}
            <Route path="/doctor" element={<DoctorDashboard />} />

            {/* Notifications */}
            <Route path="/notifications" element={<Notifications />} />

            {/* Public Emergency View */}
            <Route path="/e/:id" element={<EmergencyView />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
