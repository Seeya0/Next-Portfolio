import { FunctionComponent } from "react"
import { Category } from "../type"

export const NavItem: FunctionComponent<{
    categoryValue: Category, handleFilterCategory: Function, active: string,
}> = ({ categoryValue, handleFilterCategory, active }) => {
    let customClass = "capitalize cursor-pointer hover:text-green";
    if (active === categoryValue) customClass += " text-green";

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
            <NavItem categoryValue="express" {...props} />
        </div>
    )
}

export default ProjectsNavBar
