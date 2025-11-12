export default function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className={`${color} rounded-lg shadow-md p-6 text-white text-center`}>
      <h4 className="text-gray-100 font-semibold mb-2">{label}</h4>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  )
}
