import SectionContainer from "@/components/common/section-container";
import { WEDDING_INFO } from "@/constants/wedding";
import { CalendarIcon, ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export default function WeddingInfoSection() {
  return (
    <SectionContainer id="info">
      <div className="mx-auto max-w-md space-y-8">
        <h2 className="text-center text-2xl font-light text-gray-800">
          Wedding Day
        </h2>

        <div className="grid gap-4">
          <div className="flex items-center space-x-4 rounded-2xl border border-rose-100 bg-white p-6 shadow-lg">
            <CalendarIcon className="text-rose-500" size={24} />
            <div>
              <p className="font-medium text-gray-800">
                {WEDDING_INFO.weddingDate}
              </p>
              <p className="text-sm text-gray-500">토요일</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 rounded-2xl border border-rose-100 bg-white p-6 shadow-lg">
            <ClockIcon className="text-rose-500" size={24} />
            <div>
              <p className="font-medium text-gray-800">
                {WEDDING_INFO.weddingTime}
              </p>
              <p className="text-sm text-gray-500">식사 오후 3시 30분</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 rounded-2xl border border-rose-100 bg-white p-6 shadow-lg">
            <MapPinIcon className="text-rose-500" size={24} />
            <div>
              <p className="font-medium text-gray-800">{WEDDING_INFO.venue}</p>
              <p className="text-sm text-gray-500">
                {WEDDING_INFO.venueDetail}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-center">
            <PhoneIcon className="mx-auto mb-2 text-blue-600" size={20} />
            <p className="mb-1 text-sm text-gray-600">신랑</p>
            <p className="mb-1 text-sm text-gray-600">
              {WEDDING_INFO.contact.groom}
            </p>
          </div>

          <div className="rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-50 to-pink-100 p-6 text-center">
            <PhoneIcon className="mx-auto mb-2 text-pink-600" size={20} />
            <p className="mb-1 text-sm text-gray-600">신부</p>
            <p className="mb-1 text-sm text-gray-600">
              {WEDDING_INFO.contact.bride}
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
