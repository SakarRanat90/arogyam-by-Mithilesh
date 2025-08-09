import AppShell from "@/components/layout/AppShell";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { initialRecords } from "@/data/sample";

interface Item { id: string; title: string; date: string; fileUrl: string; }

export default function Records() {
  const [items, setItems] = useState<Item[]>(initialRecords);

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const added: Item[] = Array.from(files).map((f, idx) => ({
      id: `new-${Date.now()}-${idx}`,
      title: f.name,
      date: new Date().toISOString().slice(0, 10),
      fileUrl: URL.createObjectURL(f),
    }));
    setItems((prev) => [...added, ...prev]);
  };

  return (
    <AppShell title="My Records">
      <Helmet>
        <title>Medical Records – Arogyam</title>
        <meta name="description" content="Upload and view your medical prescriptions, lab reports, X-rays and more." />
        <link rel="canonical" href="/patient/records" />
      </Helmet>

      <div className="mb-4">
        <Input type="file" accept="image/*,.pdf" multiple onChange={onUpload} />
      </div>

      <div className="space-y-3">
        {items.map((it) => (
          <Card key={it.id}>
            <CardHeader className="py-3">
              <CardTitle className="text-base">{it.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground mb-2">{it.date}</div>
              <a className="text-primary underline" href={it.fileUrl} target="_blank" rel="noreferrer">
                View document
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
