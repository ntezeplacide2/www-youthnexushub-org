import { AIChatWidget } from "@/components/AIChatWidget"

export default function PortfolioPage() {
  return (
    <main className="relative">
      {/* Your portfolio content */}
      <section className="p-8">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <p className="mt-4">Welcome! Explore my projects and skills here.</p>
      </section>

      {/* Floating AI Assistant */}
      <AIChatWidget />
    </main>
  )
}