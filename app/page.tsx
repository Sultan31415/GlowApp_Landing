"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { AuroraBackground } from "@/components/ui/aurora-background";

import {
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  MessageCircle,
  Trophy,
  Sparkles,
  Camera,
  Target,
  Zap,
  Heart,
  TrendingUp,
  Crown,
  Users,
  BarChart3,
  Clock,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Eye,
} from "lucide-react"

export default function GlowUpLanding() {
  const [currentAvatar, setCurrentAvatar] = useState(0)
  const [sliderValue, setSliderValue] = useState([0])
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "hero", name: "Home" },
    { id: "how-it-works", name: "How it Works" },
    { id: "features", name: "Features" },
    { id: "pricing", name: "Pricing" },
    { id: "contact", name: "Contact" },
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentAvatar((prev) => (prev + 1) % 2)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for sticky header

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToQuiz = useCallback(() => {
    const element = document.getElementById("quiz-section")
    if (element) {
      const headerOffset = 80
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [])

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [])

  const archetypes = [
    { name: "CEO", icon: Crown, color: "from-purple-500 to-pink-500" },
    { name: "Fit", icon: Target, color: "from-green-500 to-blue-500" },
    { name: "Romantic", icon: Heart, color: "from-pink-500 to-red-500" },
    { name: "Calm", icon: Sparkles, color: "from-blue-500 to-cyan-500" },
    { name: "Boss", icon: Zap, color: "from-yellow-500 to-orange-500" },
    { name: "Healing", icon: Star, color: "from-green-400 to-emerald-500" },
  ]

  const habits = [
    { habit: "+30 min sleep", impact: "Better skin & energy" },
    { habit: "Drink 1L water", impact: "Clearer complexion" },
    { habit: "10 min walk", impact: "Improved posture" },
    { habit: "Morning meditation", impact: "Reduced stress lines" },
  ]

  const testimonials = [
    { name: "Sarah M.", score: 8.2, improvement: "+2.1", image: "/placeholder.svg?height=60&width=60" },
    { name: "Alex K.", score: 9.1, improvement: "+1.8", image: "/placeholder.svg?height=60&width=60" },
    { name: "Maya L.", score: 8.7, improvement: "+2.3", image: "/placeholder.svg?height=60&width=60" },
  ]

  return (
    <AuroraBackground>
      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mb-8 transition-all duration-500 hover:scale-110">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">GlowApp</span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#how-it-works"
                  onClick={(e) => scrollToSection(e, "how-it-works")}
                  className={`font-medium transition-all duration-300 relative ${
                    activeSection === "how-it-works" ? "text-purple-600" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  How it Works
                  {activeSection === "how-it-works" && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded-full" />
                  )}
                </a>
                <a
                  href="#features"
                  onClick={(e) => scrollToSection(e, "features")}
                  className={`font-medium transition-all duration-300 relative ${
                    activeSection === "features" ? "text-purple-600" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Features
                  {activeSection === "features" && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded-full" />
                  )}
                </a>
                <a
                  href="#pricing"
                  onClick={(e) => scrollToSection(e, "pricing")}
                  className={`font-medium transition-all duration-300 relative ${
                    activeSection === "pricing" ? "text-purple-600" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Pricing
                  {activeSection === "pricing" && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded-full" />
                  )}
                </a>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className={`font-medium transition-all duration-300 relative ${
                    activeSection === "contact" ? "text-purple-600" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Contact
                  {activeSection === "contact" && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded-full" />
                  )}
                </a>
              </div>

              <Button
                onClick={scrollToQuiz}
                className="bg-gray-900 hover:bg-gray-900 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Crown className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Central Logo */}
            <div className="mb-12">
              <div className="w-24 h-24 mx-auto bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center mb-8 transition-all duration-500 hover:scale-110">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Main Headline */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                See Who You Could Become.
                <br />
                <span className="text-gray-600">Powered by AI.</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Transform your life in 30 days with AI-powered guidance and visualization
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
                <Button
                  onClick={scrollToQuiz}
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Your GlowApp
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Learn More
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Total Users", value: "12,847", icon: Users, color: "blue", trend: "+8.5%" },
                { title: "Transformations", value: "8,293", icon: Target, color: "purple", trend: "+12.3%" },
                { title: "Avg GlowScore", value: "8.7", icon: BarChart3, color: "green", trend: "-2.1%" },
                { title: "Active Plans", value: "4,521", icon: Clock, color: "orange", trend: "+5.8%" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 bg-${stat.color}-100 rounded-full flex items-center justify-center`}>
                        <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <TrendingUp
                        className={`w-4 h-4 mr-1 ${stat.trend.startsWith("+") ? "text-green-500" : "text-red-500 rotate-180"}`}
                      />
                      <span className={`font-medium ${stat.trend.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                        {stat.trend}
                      </span>
                      <span className="text-gray-500 ml-1">
                        {stat.title === "Transformations" ? "Up from past week" : "Up from yesterday"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gray-100 text-gray-600 border border-gray-200 mb-6">
                <Target className="w-4 h-4 mr-2" />
                Process
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Four simple steps to unlock your transformation potential
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Take the Quiz",
                  description: "15 questions about your lifestyle and goals",
                  icon: MessageCircle,
                  color: "from-blue-200 to-blue-600",
                },
                {
                  step: "02",
                  title: "Upload Selfie",
                  description: "Get your FaceScore + GlowScore analysis",
                  icon: Camera,
                  color: "from-purple-200 to-pink-500",
                },
                {
                  step: "03",
                  title: "See Future Self",
                  description: "AI-generated avatar of your potential",
                  icon: Sparkles,
                  color: "from-pink-200 to-red-500",
                },
                {
                  step: "04",
                  title: "Start GlowApp",
                  description: "30-day plan with daily micro-habits",
                  icon: Target,
                  color: "from-green-200 to-green-600",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-bold text-gray-500 mb-2">{item.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Avatar Preview */}
        <section className="py-20 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-white text-gray-600 border border-gray-200 mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                AI Avatars
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Choose Your GlowUp Style</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover different archetypes and see your transformation timeline
              </p>
            </div>

            {/* Archetype Selection */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {archetypes.map((archetype, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${archetype.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                    >
                      <archetype.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{archetype.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Avatar Transformation Preview */}
            <Card className="max-w-4xl mx-auto bg-white border-0 shadow-md">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Transformation Timeline</h3>
                  <div className="flex justify-center items-center space-x-8 md:space-x-16">
                    <div className="text-center">
                      <div className="relative">
                        <div
                          className={`w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 transition-all duration-1000 ${currentAvatar === 0 ? "scale-110 shadow-2xl" : "scale-100 shadow-lg"}`}
                        >
                          <img
                            src="/placeholder.svg?height=192&width=192"
                            alt="Current You"
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                        <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-600">
                          You Now
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-purple-500 animate-pulse" />
                      <span className="text-sm text-gray-500 mt-2">{30 + sliderValue[0]} Days</span>
                    </div>

                    <div className="text-center">
                      <div className="relative">
                        <div
                          className={`w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 transition-all duration-1000 ${currentAvatar === 1 ? "scale-110 shadow-2xl shadow-purple-25" : "scale-100 shadow-lg"}`}
                        >
                          <img
                            src="/placeholder.svg?height=192&width=192"
                            alt="Future You"
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                        <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                          Future You
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>30 Days</span>
                    <span>90 Days</span>
                  </div>
                  <Slider value={sliderValue} onValueChange={setSliderValue} max={60} step={1} className="w-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Micro-Habits */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gray-100 text-gray-600 border border-gray-200 mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                Daily Habits
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Micro-Habits = Macro Results</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Small daily changes that create dramatic transformations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {habits.map((item, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-200 to-green-600 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.habit}</h3>
                        <p className="text-gray-600">{item.impact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Messages from Future Self */}
        <section className="py-20 px-4 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white text-gray-600 border border-gray-200 mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              AI Coaching
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Messages from Your Future Self</h2>

            <Card className="max-w-2xl mx-auto mb-8 bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-200 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-800 italic mb-2">
                      "Hey! It's your future self. You're doing amazing today. Remember, that 10-minute walk you're about
                      to skip? It's the difference between who you are now and who I became. Trust the process. 💪"
                    </p>
                    <p className="text-sm text-gray-500">- Future You, Day 30</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Receive Your First Message
              <MessageCircle className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Viral Video Generator */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gray-100 text-gray-600 border border-gray-200 mb-6">
                <Play className="w-4 h-4 mr-2" />
                Content Creation
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Create Viral Transformation Videos</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Auto-generated before/after videos with music and stats
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="relative overflow-hidden bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-[9/16] bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center relative">
                      <Play className="w-16 h-16 text-white opacity-80" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-sm font-bold mb-2">30-Day GlowUp</div>
                        <div className="text-xs opacity-80">GlowScore: 6.2 → 8.7 (+2.5)</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-200 to-pink-500 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Automatic Editing</h3>
                    <p className="text-gray-600">AI creates your transformation video with trending music</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-200 to-blue-600 flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Progress Stats</h3>
                    <p className="text-gray-600">Show your GlowScore improvement and achievements</p>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Create My GlowUp Video
                  <Play className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* GlowUp Board */}
        <section className="py-20 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-white text-gray-600 border border-gray-200 mb-6">
                <Trophy className="w-4 h-4 mr-2" />
                Community
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">GlowUp Board</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Join the community challenge and win prizes</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {testimonials.map((user, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={user.image || "/placeholder.svg"}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900">{user.name}</h3>
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600">GlowScore: {user.score}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-200 to-green-600 rounded-lg p-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{user.improvement}</div>
                        <div className="text-sm text-green-500">Improvement</div>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        124
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        32
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Trophy className="mr-2 w-5 h-5" />
                Join the GlowUp Challenge
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gray-100 text-gray-600 border border-gray-200 mb-6">
                <Crown className="w-4 h-4 mr-2" />
                Pricing
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-600">Start free, upgrade when you're ready to accelerate</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Free Tier */}
              <Card className="bg-white border-2 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-4">$0</div>
                    <p className="text-gray-600">Perfect to get started</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {["One AI avatar", "Basic FaceScore analysis", "Telegram reminders", "Community access"].map(
                      (feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ),
                    )}
                  </ul>

                  <Button className="w-full transition-all duration-300 transform hover:scale-105" variant="outline">
                    Start Free
                  </Button>
                </CardContent>
              </Card>

              {/* Pro Tier */}
              <Card className="bg-white border-2 border-purple-500 relative shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white px-4 py-1">
                    <Crown className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>

                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-4">$29</div>
                    <p className="text-gray-600">Per month, full transformation</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {[
                      "HD avatars & videos",
                      "All GlowUp archetypes",
                      "Complete transformation plans",
                      "GPT personal coach",
                      "Priority support",
                      "Advanced analytics",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-purple-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 transform hover:scale-105">
                    Upgrade to Pro
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Integration Partners */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            {/* Partner Logos */}
            <div className="flex justify-center items-center space-x-8 mb-16 opacity-60">
              <div className="text-2xl font-bold text-gray-500">Telegram</div>
              <div className="text-2xl font-bold text-gray-500">WhatsApp</div>
              <div className="text-2xl font-bold text-gray-500">Instagram</div>
              <div className="text-2xl font-bold text-gray-500">TikTok</div>
              <div className="text-2xl font-bold text-gray-500">YouTube</div>
            </div>

            <div className="text-center mb-12">
              <Badge className="bg-white text-gray-600 border border-gray-200 mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Integrations
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Integrates with</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Seamlessly integrate with your favorite social platforms
              </p>
            </div>

            {/* Integration Diagram */}
            <div className="relative max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-8 items-center">
                {/* Top Row */}
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                    <Linkedin className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div></div>
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                    <Twitter className="w-8 h-8 text-blue-400" />
                  </div>
                </div>

                {/* Middle Row */}
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                    <Facebook className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                    <Instagram className="w-8 h-8 text-pink-600" />
                  </div>
                </div>

                {/* Bottom Row */}
                <div></div>
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                    <Youtube className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div></div>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                <defs>
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle fill="#d1d5db" cx="2" cy="2" r="1" />
                  </pattern>
                </defs>
                {/* Dotted lines connecting integrations */}
                <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="25%" y1="50%" x2="50%" y2="50%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="75%" y1="50%" x2="50%" y2="50%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="50%" y1="75%" x2="50%" y2="50%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </section>

        {/* Comprehensive Insights */}
        <section id="features" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gray-100 text-gray-600 border border-gray-200 mb-6">
                <Eye className="w-4 h-4 mr-2" />
                Live Tracking
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Comprehensive Insights</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Track every transformation and habit to refine your personal growth strategies
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Real-Time Progress */}
              <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Progress Score</div>
                    <div className="text-4xl font-bold text-gray-900 mb-4">8.2/10</div>

                    {/* Mock Chart */}
                    <div className="h-48 bg-gray-100 rounded-lg flex items-end justify-center p-4 space-x-2">
                      {[20, 35, 45, 30, 55, 40, 65, 50, 70, 60, 80, 75].map((height, index) => (
                        <div
                          key={index}
                          className={`w-6 rounded-t transition-all duration-500 hover:scale-110 ${index === 5 ? "bg-purple-600" : "bg-gray-300"}`}
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>

                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">Real-Time Progress</h3>
                  </div>
                  <p className="text-gray-600">
                    Monitor your transformation in real time to ensure maximum effectiveness and identify areas for
                    improvement
                  </p>
                </CardContent>
              </Card>

              {/* Actionable Data */}
              <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">Balance</div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-gray-600">On track</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-500">Habits</div>
                        <div className="text-2xl font-bold text-gray-900">87.5%</div>
                        <div className="text-sm text-green-500">+2.45%</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">GlowScore</div>
                        <div className="text-2xl font-bold text-gray-900">8.7</div>
                        <div className="text-sm text-red-500">-0.3%</div>
                      </div>
                    </div>

                    {/* Mock Line Chart */}
                    <div className="h-24 bg-gray-100 rounded-lg flex items-end p-2">
                      <svg className="w-full h-full">
                        <path
                          d="M 0 20 Q 25 10 50 15 T 100 12 T 150 8 T 200 10 T 250 6 T 300 8"
                          stroke="#a855f7"
                          strokeWidth="2"
                          fill="none"
                        />
                        <path
                          d="M 0 20 Q 25 10 50 15 T 100 12 T 150 8 T 200 10 T 250 6 T 300 8 L 300 60 L 0 60 Z"
                          fill="url(#gradient)"
                          opacity="0.3"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">Actionable Data</h3>
                  </div>
                  <p className="text-gray-600">
                    Leverage analytics to enhance habits, boost engagement, and make informed transformation decisions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section id="quiz-section" className="py-20 px-4 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Begin Your Transformation Today</h2>
            <p className="text-xl text-gray-600 mb-12">Take the first step towards becoming your best self</p>

            <div className="space-y-6">
              <Button
                onClick={scrollToQuiz}
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 text-xl rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Camera className="mr-3 w-6 h-6" />
                Start My GlowUp
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>

              <p className="text-sm text-gray-500">Free to start • No credit card required • 2 minutes to complete</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gray-100 text-gray-600 border border-gray-200 mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Contact Us</h2>
            <p className="text-xl text-gray-600 mb-12">Have questions about GlowUp? We're here to help!</p>

            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Email Us</h3>
                        <p className="text-gray-600">support@glowup.ai</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
                        <Facebook className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Follow Us</h3>
                        <p className="text-gray-600">@glowup.ai</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 transform hover:scale-105">
                      Send Message
                    </Button>
                    <Button variant="outline" className="w-full transition-all duration-300 transform hover:scale-105">
                      Book a Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </AuroraBackground>
  )
}
