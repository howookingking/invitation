import { GOOGLE_MAP_URL } from "@/constants/wedding";

export default function GoogleMap() {
  return (
    <div className="h-[600px] w-full max-w-[430px]">
      <iframe
        src={GOOGLE_MAP_URL}
        className="h-full w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="더베르데G 위치"
      />
    </div>
  );
}
