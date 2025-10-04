import { WEDDING_INFO } from "@/constants/wedding";
import {
  BusFrontIcon,
  MapPinIcon,
  ParkingCircleIcon,
  TramFrontIcon,
} from "lucide-react";

export default function TransportationInfo() {
  return (
    <div className="flex flex-col gap-6 px-8 pt-8 pb-0">
      {TRANSPORTATIONS.map(({ icon, title, items }) => (
        <div key={title}>
          <div className="text-primary mb-1 flex items-center gap-1 text-lg">
            {icon}
            {title}
          </div>

          <ul className="space-y-0.5 pl-1">
            {items.map((item, index) => (
              <li key={index} className="text-gray-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const TRANSPORTATIONS = [
  {
    icon: <MapPinIcon size={16} />,
    title: WEDDING_INFO.venue,
    items: [WEDDING_INFO.venueAddress, `Tel. ${WEDDING_INFO.venuePhone}`],
  },
  {
    icon: <ParkingCircleIcon size={16} />,
    title: "주차",
    items: ["동일 건물 지하 주차장 이용 가능", "2시간 무료주차"],
  },
  {
    icon: <TramFrontIcon size={16} />,
    title: "지하철",
    items: ["2호선·5호선 영등포구청역 4번 출구 도보 10분"],
  },
  {
    icon: <BusFrontIcon size={16} />,
    title: "셔틀버스",
    items: ["영등포구청역 5번출구 뒤 ↔ 더베르G 주차장 입구 좌측"],
  },
] as const;
