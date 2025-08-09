import { useParams } from "react-router-dom";
import { demoEmergency, demoPatient } from "@/data/sample";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

export default function EmergencyView() {
  const { id } = useParams();
  const match = id === demoPatient.id;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <Helmet>
        <title>Emergency Info – Arogyam</title>
        <meta name="description" content="Public emergency information for quick medical help." />
        <link rel="canonical" href={`/e/${id ?? ""}`}/>
      </Helmet>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Emergency Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          {match ? (
            <>
              <div><span className="text-muted-foreground">Name:</span> {demoEmergency.name}</div>
              <div><span className="text-muted-foreground">Blood Group:</span> {demoEmergency.bloodGroup}</div>
              <div><span className="text-muted-foreground">Allergies:</span> {demoEmergency.allergies.join(", ") || "None"}</div>
              <div><span className="text-muted-foreground">Emergency Contact:</span> {demoEmergency.emergencyContact}</div>
              <div><span className="text-muted-foreground">Medications:</span> {demoEmergency.medications.join(", ")}</div>
            </>
          ) : (
            <div className="text-center text-muted-foreground">Patient not found.</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
