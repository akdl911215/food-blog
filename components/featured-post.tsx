import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function FeaturedPost() {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg md:flex">
      <div className="relative h-64 w-full md:h-auto md:w-1/2">
        <Image src="/placeholder.svg?height=600&width=800" alt="추천 맛집 이미지" fill className="object-cover" />
        <Badge className="absolute left-4 top-4 bg-orange-600 px-3 py-1 text-sm">이달의 맛집</Badge>
      </div>
      <div className="flex w-full flex-col justify-between p-6 md:w-1/2">
        <div>
          <div className="mb-2 flex items-center gap-1 text-orange-600">
            <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
            <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
            <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
            <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
            <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
            <span className="ml-1 text-lg font-medium">5.0</span>
          </div>
          <Link href="/post/featured">
            <h3 className="mb-3 text-2xl font-bold hover:text-orange-600">
              부산 해운대 '바다의 맛', 신선한 해산물의 천국
            </h3>
          </Link>
          <p className="mb-6 text-gray-600">
            부산 해운대에 위치한 '바다의 맛'은 매일 아침 직접 공수해오는 신선한 해산물로 요리한 다양한 메뉴를
            선보입니다. 특히 제철 해산물을 활용한 특선 요리는 많은 미식가들의 발길을 이끌고 있습니다. 바다가 보이는 전망
            좋은 자리에서 즐기는 해산물 요리는 잊지 못할 경험을 선사합니다.
          </p>
          <div className="mb-6 flex flex-wrap gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <MapPin className="mr-1 h-4 w-4" />
              <span>부산 해운대구</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>1주일 전</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=40&width=40" alt="프로필 이미지" fill className="object-cover" />
            </div>
            <span className="ml-2 font-medium">박푸드</span>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Link href="/post/featured">자세히 보기</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
