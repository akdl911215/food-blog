"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-orange-600">
          맛있는발견
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex">
          <Link href="/" className="font-medium hover:text-orange-600">
            홈
          </Link>
          <Link href="/restaurants" className="font-medium hover:text-orange-600">
            맛집 리스트
          </Link>
          <Link href="/recipes" className="font-medium hover:text-orange-600">
            레시피
          </Link>
          <Link href="/about" className="font-medium hover:text-orange-600">
            소개
          </Link>
          <Link href="/contact" className="font-medium hover:text-orange-600">
            문의
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button variant="outline" className="mr-2">
            로그인
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">가입하기</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 z-50 bg-white p-4 shadow-lg md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="font-medium hover:text-orange-600">
              홈
            </Link>
            <Link href="/restaurants" className="font-medium hover:text-orange-600">
              맛집 리스트
            </Link>
            <Link href="/recipes" className="font-medium hover:text-orange-600">
              레시피
            </Link>
            <Link href="/about" className="font-medium hover:text-orange-600">
              소개
            </Link>
            <Link href="/contact" className="font-medium hover:text-orange-600">
              문의
            </Link>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1">
                로그인
              </Button>
              <Button className="flex-1 bg-orange-600 hover:bg-orange-700">가입하기</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
