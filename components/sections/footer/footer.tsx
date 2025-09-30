export default function Footer() {
  return (
    <div className="mx-auto w-full max-w-[430px] bg-white">
      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 px-6 py-8">
        <div className="space-y-3 text-center">
          <p className="text-xs text-gray-500">
            이 청첩장은 소중한 분들을 초대하기 위해 신랑이 직접 제작하였습니다
          </p>
          <div className="mt-4 border-t border-gray-200 pt-4">
            <p className="text-xs font-medium text-gray-600">
              Created by Jungwoo Lee
            </p>
            <p className="mt-1 text-xs text-gray-400">
              © 2025. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
