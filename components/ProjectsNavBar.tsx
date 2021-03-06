import { FunctionComponent } from "react"
import { Category } from "../type"

export const NavItem: FunctionComponent<{
    categoryValue: Category, handleFilterCategory: Function, active: string,
}> = ({ categoryValue, handleFilterCategory, active }) => {
    //プロジェクトが選ばれた際のカスタムクラス
    let customClass = "capitalize cursor-pointer hover:text-beige";
    if (active === categoryValue) customClass += " text-beige";

    return (
        <li className={customClass} onClick={() => handleFilterCategory(categoryValue)}>
            {categoryValue}
        </li>
    )
}

const ProjectsNavBar: FunctionComponent<{ handleFilterCategory: Function, active: string }> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 list-none overflow-x-auto">
            <NavItem categoryValue="all" {...props} />
            <NavItem categoryValue="react" {...props} />
            <NavItem categoryValue="typescript" {...props} />
            <NavItem categoryValue="node" {...props} />
            <NavItem categoryValue="express" {...props} />
            <NavItem categoryValue="Next" {...props} />
        </div>
    )
}

export default ProjectsNavBar
