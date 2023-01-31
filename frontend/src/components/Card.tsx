import React, { useState } from "react";
import { BiDotsVerticalRounded, BiPlus } from "react-icons/bi";
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri"
import { TbFileDescription, TbMessage } from "react-icons/tb";
import avatar from "../Assets/avatar.png";
import { ICONS } from "../Helper/Constant";

interface ICard {

}

const CompactCard: React.FunctionComponent<ICard> = (props) => {
    return (<div>
    <div className="card">
        <div className="card__header">
            <div className="card__title">Presentation on react</div>

            <BiDotsVerticalRounded className="card__action" />
        </div>

        <div className="card__body">
            <div className="card__tags">
                <div className="tag tag--blue">Website</div>
                <div className="tag tag--yellow">design</div>
            </div>

            {/* <div className="card__info">Approved the design of the content for iOS app, let's make a presentation</div> */}
            <div className="card__subtask">
                <div className="tasks">
                    <div className="task task--close"><RiCheckboxCircleFill />Approved budget</div>
                    <div className="task task--open"><RiCheckboxBlankCircleLine />Initial design review</div>
                    <div className="task task--open"><RiCheckboxBlankCircleLine />First design concept</div>
                    <div className="task task--open"><RiCheckboxBlankCircleLine />Second design concept</div>
                </div>

                <div className="task__action"><BiPlus />Add Subtask</div>
            </div>

            <div className="card__attachment">
                <img className="images" src="https://i.pravatar.cc/450" alt="" />
                <img className="images" src="https://i.pravatar.cc/450" alt="" />
                <img className="images" src="https://i.pravatar.cc/450" alt="" />
                <img className="images" src="https://i.pravatar.cc/450" alt="" />
                <img className="images" src="https://i.pravatar.cc/450" alt="" />
                <img className="images" src="https://i.pravatar.cc/450" alt="" />
                <div className="images images--count">+8</div>
            </div>
        </div>

    </div>
        <div className="card__footer">
            <div className="left">
                <img className="avatar" src="https://i.pravatar.cc/450" alt="" />
                <img className="avatar" src="https://i.pravatar.cc/450" alt="" />
                <img className="avatar" src="https://i.pravatar.cc/450" alt="" />
                <div className="avatar avatar--center">+8</div>
                <div className="avatar avatar--add avatar--center"><BiPlus /></div>
            </div>

            <div className="right">
                <div className="info attachment--count"><ICONS.FILE /> 4 </div>
                <div className="info message--count"><ICONS.CHAT /> 5 </div>
            </div>
        </div>
        </div>)
}

const Card: React.FunctionComponent<ICard> = (props) => {
    const [isMinView, setIsMinView] = useState(true)
    return <>
    <CompactCard /> </>
}

export default Card;
