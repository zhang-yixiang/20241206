import Link from "next/link";

/**
 * 网站导航地图的单列
 */
export default function SiteMapCol({ item, firstCol }) {
  return (
    <div className={firstCol ? '' : 'mt-10 md:mt-0'}>
      <h3 className="text-sm font-semibold leading-6 text-gray-900">{item.title}</h3>
      <ul role="list" className="mt-6 space-y-4 list-none p-0">
        {item.children.map((child) => (
          <li className="p-0 m-0" key={child.title}>
            <Link
              href={child.href}
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              {child.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}