import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">맛있는발견</h3>
            <p className="mb-4">
              맛집 탐방과 요리 레시피를 공유하는 음식 블로그입니다. 전국의 숨은 맛집을 발견하고 공유합니다.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">카테고리</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/restaurants" className="hover:text-white">
                  맛집 리스트
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="hover:text-white">
                  레시피
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white">
                  리뷰
                </Link>
              </li>
              <li>
                <Link href="/tips" className="hover:text-white">
                  요리 팁
                </Link>
              </li>
              <li>
                <Link href="/interviews" className="hover:text-white">
                  셰프 인터뷰
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">지역별 맛집</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/seoul" className="hover:text-white">
                  서울
                </Link>
              </li>
              <li>
                <Link href="/busan" className="hover:text-white">
                  부산
                </Link>
              </li>
              <li>
                <Link href="/jeju" className="hover:text-white">
                  제주
                </Link>
              </li>
              <li>
                <Link href="/gangwon" className="hover:text-white">
                  강원
                </Link>
              </li>
              <li>
                <Link href="/gyeonggi" className="hover:text-white">
                  경기
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">연락처</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0" />
                <span>서울특별시 강남구 테헤란로 123 푸드빌딩 8층</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>02-123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>contact@masitneun.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 맛있는발견. 모든 권리 보유.</p>
        </div>
      </div>
    </footer>
  )
}
