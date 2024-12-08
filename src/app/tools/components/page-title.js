/**
 * PageTitle Component accepts title and description props
 */
export default function PageTitle({ title, description }) {
  return (
    <div className="flex flex-col text-center !mb-10 space-y-5">
      <h1 className="text-5xl font-serif">{title}</h1>
      <p className="mt-2 text-gray-600 max-w-lg mx-auto">{description}</p>
    </div>
  )
}