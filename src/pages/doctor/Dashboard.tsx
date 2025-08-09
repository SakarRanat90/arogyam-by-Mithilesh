import AppShell from "@/components/layout/AppShell";
import { Helmet } from "react-helmet-async";
import QrScannerView from "@/components/qr/QrScanner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { demoPatient } from "@/data/sample";

export default function DoctorDashboard() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");

  return (
    <AppShell title="Doctor Portal" showNav={false}>
      <Helmet>
        <title>Doctor Portal – Arogyam</title>
        <meta name="description" content="Scan QR to access patient emergency info or search by mobile/Health ID." />
        <link rel="canonical" href="/doctor" />
      </Helmet>

      <section className="space-y-3 mb-6">
        <h1 className="text-lg font-semibold">Scan Patient QR</h1>
        <QrScannerView onDecode={(text) => {
          try {
            const url = new URL(text, window.location.origin);
            navigate(url.pathname + url.search + url.hash);
          } catch {
            if (text.startsWith("/")) navigate(text);
          }
        }} />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Find Patient</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          <Input placeholder="Mobile or Health ID" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          <Button className="sm:col-span-1" onClick={() => { if (mobile) navigate(`/e/${demoPatient.id}`); }}>Search</Button>
        </div>
      </section>
    </AppShell>
  );
}
