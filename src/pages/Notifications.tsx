import AppShell from "@/components/layout/AppShell";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  { id: "n1", title: "Medicine Reminder", text: "Take Metformin 500mg now.", time: "08:00" },
  { id: "n2", title: "Appointment", text: "Dr. Kapoor today at 5:30 PM.", time: "17:30" },
  { id: "n3", title: "Alert", text: "Lab report uploaded.", time: "Yesterday" },
];

export default function Notifications() {
  return (
    <AppShell title="Notifications">
      <Helmet>
        <title>Notifications – Arogyam</title>
        <meta name="description" content="View medicine reminders, appointments and alerts." />
        <link rel="canonical" href="/notifications" />
      </Helmet>

      <div className="space-y-3">
        {items.map((n) => (
          <Card key={n.id}>
            <CardContent className="py-3">
              <div className="font-medium">{n.title} <span className="text-xs text-muted-foreground">• {n.time}</span></div>
              <div className="text-sm text-muted-foreground">{n.text}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
