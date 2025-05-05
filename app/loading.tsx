export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-900"></div>
        <p className="mt-4 text-cyan-900 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  )
} 