import Link from "next/link"
import { FunctionComponent } from "react"

const NavItem: FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
}> = ({ activeItem, setActiveItem, name, route }) => {
    return (
        //現在のactiveItemと選択されたもの(name)が異なる場合、選択されたものをActiveItemに入れる
        //詳細な内容はprojects.tsxを見てください
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
