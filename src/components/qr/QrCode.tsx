import { useEffect, useState } from "react";
import QRCode from "qrcode";

interface QrCodeProps {
  value: string;
  size?: number;
  className?: string;
}

export default function QrCode({ value, size = 192, className }: QrCodeProps) {
  const [dataUrl, setDataUrl] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const url = await QRCode.toDataURL(value, {
          width: size,
          margin: 1,
        });
        if (!cancelled) setDataUrl(url);
      } catch (e) {
        console.error("QR generation failed", e);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [value, size]);

  if (!dataUrl) return null;
  return <img src={dataUrl} width={size} height={size} alt="Arogyam patient QR code" className={className} />;
}
