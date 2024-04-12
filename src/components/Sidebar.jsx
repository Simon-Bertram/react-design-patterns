const links = [
  { name: "Products", url: "/products" },
  { name: "Services", url: "/services" },
  { name: "About", url: "/about" },
]

const Sidebar = () => {
  return (
    <div>
      <ul>
        {links.map((link) => (
          <li key={link.url}>
            <a
              key={link.name}
              href={link.url}
              className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
