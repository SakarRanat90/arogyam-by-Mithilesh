import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AppShell from "@/components/layout/AppShell";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  return (
    <AppShell showNav={false} title="Arogyam">
      <Helmet>
        <title>Arogyam Login – Secure OTP Access</title>
        <meta name="description" content="Login to Arogyam with OTP to securely access your digital health records." />
        <link rel="canonical" href="/login" />
      </Helmet>

      <div className="mx-auto max-w-sm">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-center">Welcome to Arogyam</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm">Mobile Number</label>
              <Input placeholder="e.g. +91 90000 00001" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            {otpSent && (
              <div className="space-y-2">
                <label className="text-sm">Enter OTP</label>
                <Input placeholder="123456" value={otp} onChange={(e) => setOtp(e.target.value)} />
              </div>
            )}
            <div className="grid grid-cols-1 gap-2">
              {!otpSent ? (
                <Button onClick={() => { setOtpSent(true); toast({ title: "OTP sent", description: "Use 123456 for demo." }); }}>Send OTP</Button>
              ) : (
                <Button onClick={() => { if (otp === "123456") { toast({ title: "Login successful" }); navigate("/patient"); } else { toast({ title: "Invalid OTP", description: "Try 123456 in demo.", }); } }}>Verify & Continue</Button>
              )}
              <Button variant="secondary" onClick={() => navigate("/patient")}>
                Continue as Demo Patient
              </Button>
              <Button variant="outline" onClick={() => navigate("/doctor")}>
                Continue as Demo Doctor
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">Aadhaar-based Health ID login coming soon.</p>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
