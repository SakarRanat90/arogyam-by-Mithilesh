import AppShell from "@/components/layout/AppShell";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { schemes } from "@/data/sample";

export default function Schemes() {
  return (
    <AppShell title="Govt. Schemes">
      <Helmet>
        <title>Government Health Schemes – Arogyam</title>
        <meta name="description" content="Browse and apply for government health schemes." />
        <link rel="canonical" href="/patient/schemes" />
      </Helmet>

      <div className="space-y-3">
        {schemes.map((s) => (
          <Card key={s.id}>
            <CardHeader className="py-3"><CardTitle className="text-base">{s.title}</CardTitle></CardHeader>
            <CardContent className="flex items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">{s.description}</p>
              <Button variant="secondary">Apply</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
