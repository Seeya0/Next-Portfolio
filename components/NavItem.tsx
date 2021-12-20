import Link from "next/link"
import { FunctionComponent } from "react"

const NavItem: FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
}> = ({ activeItem, setActiveItem, name, route }) => {
    return (
        activeItem !== name ? (
            <Link href={route}>
                <a>
                    <span onClick={() => setActiveItem(name)}>{name}</span>
                </a>
            </Link>
        ) : null
    )
}

export default NavItem
