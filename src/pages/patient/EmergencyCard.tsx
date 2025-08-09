import AppShell from "@/components/layout/AppShell";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QrCode from "@/components/qr/QrCode";
import { demoEmergency, demoPatient } from "@/data/sample";
import { Button } from "@/components/ui/button";

export default function EmergencyCard() {
  const url = typeof window !== "undefined" ? `${window.location.origin}/e/${demoPatient.id}` : `/e/${demoPatient.id}`;

  const download = () => {
    const img = document.querySelector('img.qr-img') as HTMLImageElement | null;
    if (!img) return;
    const link = document.createElement("a");
    link.href = img.src;
    link.download = `Arogyam_QR_${demoPatient.id}.png`;
    link.click();
  };

  return (
    <AppShell title="Emergency Card">
      <Helmet>
        <title>Emergency Card – Arogyam</title>
        <meta name="description" content="Show and share your emergency info via QR for quick access." />
        <link rel="canonical" href="/patient/emergency" />
      </Helmet>

      <Card className="max-w-sm mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-base">Scan in Emergencies</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-3">
          <QrCode value={url} size={192} className="qr-img rounded bg-white p-2" />
          <div className="text-sm text-center text-muted-foreground break-all">{url}</div>
          <div className="grid grid-cols-2 gap-2 w-full">
            <Button onClick={download}>Download QR</Button>
            <Button variant="secondary" asChild>
              <a href={url} target="_blank" rel="noreferrer">Open Public Card</a>
            </Button>
          </div>

          <div className="w-full border-t pt-3 text-sm">
            <div><span className="text-muted-foreground">Name:</span> {demoEmergency.name}</div>
            <div><span className="text-muted-foreground">Blood Group:</span> {demoEmergency.bloodGroup}</div>
            <div><span className="text-muted-foreground">Allergies:</span> {demoEmergency.allergies.join(", ") || "None"}</div>
            <div><span className="text-muted-foreground">Emergency Contact:</span> {demoEmergency.emergencyContact}</div>
            <div><span className="text-muted-foreground">Medications:</span> {demoEmergency.medications.join(", ")}</div>
          </div>
        </CardContent>
      </Card>
    </AppShell>
  );
}
