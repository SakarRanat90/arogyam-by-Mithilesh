import AppShell from "@/components/layout/AppShell";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { demoPatient } from "@/data/sample";

export default function Profile() {
  const p = demoPatient;
  return (
    <AppShell title="Profile">
      <Helmet>
        <title>Profile – Arogyam</title>
        <meta name="description" content="Manage your personal and emergency details." />
        <link rel="canonical" href="/patient/profile" />
      </Helmet>

      <Card>
        <CardHeader><CardTitle className="text-base">Personal Details</CardTitle></CardHeader>
        <CardContent className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-y-2">
          <div><span className="text-muted-foreground">Name:</span> {p.name}</div>
          <div><span className="text-muted-foreground">DOB:</span> {p.dob}</div>
          <div><span className="text-muted-foreground">Age:</span> {p.age}</div>
          <div><span className="text-muted-foreground">Gender:</span> {p.gender}</div>
          <div><span className="text-muted-foreground">Contact:</span> {p.contact}</div>
          <div><span className="text-muted-foreground">Blood Group:</span> {p.bloodGroup}</div>
          <div className="sm:col-span-2"><span className="text-muted-foreground">Allergies:</span> {p.allergies.join(", ") || "None"}</div>
          <div className="sm:col-span-2"><span className="text-muted-foreground">Emergency Contacts:</span> {p.emergencyContacts.join(", ")}</div>
        </CardContent>
      </Card>
    </AppShell>
  );
}
