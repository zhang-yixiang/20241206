// a component get href, social name as props and icon as children

export default function SocialTemplate({ socialHref, socialName, children }) {
  return (
    <a
      href={socialHref}
      className="text-gray-400 hover:text-gray-500"
      target="_blank"
    >
      <span className="sr-only">{socialName}</span>
      {children}
    </a>
  )
}