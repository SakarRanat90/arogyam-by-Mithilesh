import AppShell from "@/components/layout/AppShell";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, CalendarDays, Pill, ShieldCheck, Siren, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

const tiles = [
  { to: "/patient/records", title: "My Records", Icon: FileText },
  { to: "/patient/appointments", title: "Appointments", Icon: CalendarDays },
  { to: "/patient/medicines", title: "Medicines", Icon: Pill },
  { to: "/patient/schemes", title: "Govt. Schemes", Icon: ShieldCheck },
  { to: "/patient/emergency", title: "Emergency", Icon: Siren },
  { to: "/patient/profile", title: "Profile", Icon: HeartPulse },
];

export default function PatientDashboard() {
  return (
    <AppShell title="Arogyam">
      <Helmet>
        <title>Patient Dashboard – Arogyam</title>
        <meta name="description" content="Access records, appointments, medicines, schemes and emergency QR in Arogyam." />
        <link rel="canonical" href="/patient" />
      </Helmet>

      <section className="mb-6">
        <div className="rounded-xl p-5 bg-hero text-white">
          <h1 className="text-2xl font-semibold">Your Health, Simplified</h1>
          <p className="opacity-90 mt-1">Securely manage and share your medical records.</p>
          <div className="mt-3">
            <Button asChild variant="secondary">
              <Link to="/patient/emergency">View Emergency Card</Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {tiles.map(({ to, title, Icon }) => (
            <Card key={to} className="hover:shadow-soft transition-smooth">
              <Link to={to}>
                <CardContent className="p-4 flex flex-col items-center justify-center gap-2 min-h-28">
                  <Icon className="text-primary" />
                  <div className="text-sm font-medium text-center">{title}</div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
