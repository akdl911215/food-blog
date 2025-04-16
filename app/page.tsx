import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BlogCard } from "@/components/blog-card"
import { FeaturedPost } from "@/components/featured-post"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="음식점 블로그 배너"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">맛있는 발견</h1>
          <p className="mb-6 max-w-2xl text-lg md:text-xl">맛집 탐방과 요리 레시피를 공유하는 음식 블로그입니다</p>
          <div className="relative w-full max-w-md">
            <Input placeholder="맛집 검색하기..." className="bg-white/90 pl-10 text-black" />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">오늘의 추천</h2>
          <Link href="/featured" className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
            더 보기 <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <FeaturedPost />
      </section>

      {/* Recent Posts */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">최근 포스트</h2>
          <Link href="/posts" className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
            모든 포스트 <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <BlogCard key={i} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="outline" className="rounded-full px-8">
            더 불러오기
          </Button>
        </div>
      </section>
      {/* Newsletter */}
      <section className="bg-orange-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">맛집 소식 받아보기</h2>
          <p className="mb-6 text-gray-600">새로운 맛집 리뷰와 요리 레시피를 이메일로 받아보세요</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Input placeholder="이메일 주소" className="sm:w-80" />
            <Button className="bg-orange-600 hover:bg-orange-700">구독하기</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
