import React, { useState } from "react";
import {ICONS} from "../Helper/Constant"

interface IDropdown {
    title: string;
    items: any[]
}

const CollapsedView: React.FunctionComponent<IDropdown> = (props) => {
    return (<></>)
}

const ExpandedView: React.FunctionComponent<IDropdown> = (props) => {
    return (<></>)
}

const Dropdown: React.FunctionComponent<IDropdown> = (props) => {
    const [isExpanded, setIsExpanded] = useState(false)

    let {title, items} = props
    return <div className="dropdown">
        <div className="heading" onClick={() => setIsExpanded(p => !p)}>
            {isExpanded ? <ICONS.UP_ARROW /> : <ICONS.DOWN_ARROW />}
            <div className="title">{title}</div>
        </div>
    </div>
}

export default Dropdown;
