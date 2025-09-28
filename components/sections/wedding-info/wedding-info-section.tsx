import { WEDDING_INFO } from "@/app/page";
import { CalendarIcon, ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

export default function WeddingInfoSection() {
  return (
    <section
      id="info"
      className="min-h-screen flex flex-col justify-center py-16"
    >
      <div className="max-w-md mx-auto space-y-8">
        <h2 className="text-2xl font-light text-center text-gray-800">
          Wedding Day
        </h2>

        <div className="grid gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100 flex items-center space-x-4">
            <CalendarIcon className="text-rose-500" size={24} />
            <div>
              <p className="font-medium text-gray-800">
                {WEDDING_INFO.weddingDate}
              </p>
              <p className="text-sm text-gray-500">토요일</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100 flex items-center space-x-4">
            <ClockIcon className="text-rose-500" size={24} />
            <div>
              <p className="font-medium text-gray-800">
                {WEDDING_INFO.weddingTime}
              </p>
              <p className="text-sm text-gray-500">식사 오후 3시 30분</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100 flex items-center space-x-4">
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
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200">
            <PhoneIcon className="text-blue-600 mx-auto mb-2" size={20} />
            <p className="text-sm text-gray-600 mb-1">신랑</p>
            <p className="text-sm text-gray-600 mb-1">
              {WEDDING_INFO.contact.groom}
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 text-center border border-pink-200">
            <PhoneIcon className="text-pink-600 mx-auto mb-2" size={20} />
            <p className="text-sm text-gray-600 mb-1">신부</p>
            <p className="text-sm text-gray-600 mb-1">
              {WEDDING_INFO.contact.bride}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
