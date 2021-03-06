import Link from 'next/link'

const Nav = () => (
  <ul>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
    </li>
  </ul>
)

export default Nav