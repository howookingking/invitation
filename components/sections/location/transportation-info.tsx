import { WEDDING_INFO } from "@/constants/wedding";
import {
  BusFrontIcon,
  MapPinIcon,
  ParkingCircleIcon,
  TramFrontIcon,
} from "lucide-react";

export default function TransportationInfo() {
  return (
    <div className="flex flex-col gap-6 px-4 py-6">
      {TRANSPORTATIONS.map(({ icon, title, items }) => (
        <div key={title} className="gap-2">
          <div className="mb-1 flex items-center gap-1 text-sm text-rose-500">
            {icon}
            {title}
          </div>

          <ul className="space-y-0.5">
            {items.map((item, index) => (
              <li key={index} className="text-xs leading-relaxed text-gray-600">
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
    items: ["동일 건물 지하 주차장 이용 가능"],
  },
  {
    icon: <TramFrontIcon size={16} />,
    title: "지하철",
    items: ["2호선·5호선 영등포구청역 4번 출구 도보 10분"],
  },
  {
    icon: <BusFrontIcon size={16} />,
    title: "버스",
    items: [
      "서울시림청소년 문화센터: 간선 660",
      "하이서울유스호스텔: 일반 5",
      "신화병원: 좌석 700, 간선 605, 간선 661, 간선 760, 지선 5616, 지선 5714",
      "삼환아파트: 직행 9030, 직행 8000",
    ],
  },
  {
    icon: <BusFrontIcon size={16} />,
    title: "셔틀버스",
    items: ["영등포구청역 5번출구 ↔ 더베르G 주차장 입구 좌측"],
  },
] as const;
