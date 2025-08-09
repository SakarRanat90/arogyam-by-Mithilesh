import AppShell from "@/components/layout/AppShell";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { initialReminders } from "@/data/sample";
import { useState } from "react";

export default function Medicines() {
  const [items, setItems] = useState(initialReminders);

  return (
    <AppShell title="Medicines">
      <Helmet>
        <title>Medicine Reminders – Arogyam</title>
        <meta name="description" content="Track medicines and enable reminders." />
        <link rel="canonical" href="/patient/medicines" />
      </Helmet>

      <div className="space-y-3">
        {items.map((m) => (
          <Card key={m.id}>
            <CardHeader className="py-3">
              <CardTitle className="text-base">{m.name} – {m.dosage}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Time: {m.time}</div>
              <Switch checked={m.active} onCheckedChange={(v) => setItems((prev) => prev.map(p => p.id === m.id ? { ...p, active: v } : p))} />
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
