import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function BlogCard() {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image src="/placeholder.svg?height=200&width=400" alt="음식 이미지" fill className="object-cover" />
        <Badge className="absolute right-2 top-2 bg-orange-600">맛집</Badge>
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center gap-1 text-sm text-orange-600">
          <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
          <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
          <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
          <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
          <Star className="h-4 w-4" />
          <span className="ml-1 font-medium">4.0</span>
        </div>
        <Link href="/post/1">
          <h3 className="mb-2 text-lg font-bold hover:text-orange-600">서울 숨은 맛집, 골목식당</h3>
        </Link>
        <p className="mb-3 text-sm text-gray-600 line-clamp-2">
          서울 종로구에 위치한 이 작은 식당은 전통 한식을 현대적으로 재해석한 메뉴로 많은 사람들의 사랑을 받고 있습니다.
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center">
            <MapPin className="mr-1 h-3 w-3" />
            <span>서울 종로구</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-3 w-3" />
            <span>3일 전</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 p-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=32&width=32" alt="프로필 이미지" fill className="object-cover" />
            </div>
            <span className="ml-2 text-sm font-medium">김맛집</span>
          </div>
          <Link href="/post/1" className="text-sm font-medium text-orange-600 hover:underline">
            자세히 보기
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
