import AppShell from "@/components/layout/AppShell";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { initialAppointments } from "@/data/sample";

interface FormState { doctorName: string; date: string }

export default function Appointments() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [form, setForm] = useState<FormState>({ doctorName: "", date: "" });

  const add = () => {
    if (!form.doctorName || !form.date) return;
    setAppointments((prev) => [
      { id: `apt-${Date.now()}`, doctorName: form.doctorName, date: new Date(form.date).toISOString(), status: "pending" },
      ...prev,
    ]);
    setForm({ doctorName: "", date: "" });
  };

  return (
    <AppShell title="Appointments">
      <Helmet>
        <title>Appointments – Arogyam</title>
        <meta name="description" content="Book and manage doctor appointments." />
        <link rel="canonical" href="/patient/appointments" />
      </Helmet>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <label className="text-sm">Doctor Name</label>
          <Input value={form.doctorName} onChange={(e) => setForm({ ...form, doctorName: e.target.value })} />
        </div>
        <div className="space-y-2">
          <label className="text-sm">Date & Time</label>
          <Input type="datetime-local" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
        </div>
      </div>
      <Button onClick={add} className="mb-6">Book Appointment</Button>

      <div className="space-y-3">
        {appointments.map((a) => (
          <Card key={a.id}>
            <CardHeader className="py-3">
              <CardTitle className="text-base">{a.doctorName}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <div>{new Date(a.date).toLocaleString()}</div>
              <div className="capitalize">Status: {a.status}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
