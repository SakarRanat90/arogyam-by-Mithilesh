import { useEffect, useRef } from "react";
import QrScanner from "qr-scanner";

interface QrScannerProps {
  onDecode: (text: string) => void;
}

export default function QrScannerView({ onDecode }: QrScannerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const scannerRef = useRef<QrScanner | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const scanner = new QrScanner(
      videoRef.current,
      (result) => {
        onDecode(result.data);
      },
      {
        maxScansPerSecond: 8,
        highlightScanRegion: true,
        highlightCodeOutline: true,
      }
    );
    scannerRef.current = scanner;

    scanner.start().catch((e) => console.error("Camera start failed", e));
    return () => {
      scanner.stop();
      scanner.destroy();
    };
  }, [onDecode]);

  return (
    <div className="rounded-lg overflow-hidden border">
      <video ref={videoRef} className="w-full aspect-square bg-muted" />
    </div>
  );
}
