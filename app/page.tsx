import ShortsScriptGenerator from '@/components/ShortsScriptGenerator'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6">
        <ShortsScriptGenerator />
      </div>
    </main>
  )
}
