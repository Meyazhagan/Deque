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
    const [isExpanded, setIsExpanded] = useState(true)

    let {title, items} = props
    return <div className="dropdown">
        <div className="heading" onClick={() => setIsExpanded(p => !p)}>
            {isExpanded ? <ICONS.UP_ARROW /> : <ICONS.DOWN_ARROW />}
            <div className="title">{title}</div>
        </div>
        { isExpanded ?

            <div className="dropdown__lists">
            <div className="dropdown__item"><ICONS.CIRCLE /> Lonely Walls</div>
            <div className="dropdown__item"><ICONS.STAR /> Mirage</div>
            <div className="dropdown__item"><ICONS.DIAMOND /> Mashroom</div>
            <div className="dropdown__item"><ICONS.TRIANGLE /> Weedo</div>
            <div className="dropdown__item"><ICONS.SQUARE /> Unique <span className="notification" >4</span> </div>
        </div> : <></>
        }
    </div>
}

export default Dropdown;
