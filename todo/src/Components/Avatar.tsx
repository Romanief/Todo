export default function Avatar({ initials }: { initials: string }) {
  return (
    <div className="w-[80px] h-[80px] mx-6 my-auto bg-pink-600 rounded text-4xl font-extrabold text-white text-center py-5">
      {initials}
    </div>
  )
}
