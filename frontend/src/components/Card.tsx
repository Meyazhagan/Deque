import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

interface ICard {

}

const Card: React.FunctionComponent<ICard> = (props) => {

    return (
        <div className="card">
            <div className="card__header">
                <div className="card__tags">
                    <div className="tag tag--blue">Website</div>
                    <div className="tag tag--yellow">design</div>
                </div>
                <BiDotsVerticalRounded className="card__action" />
            </div>

            <div className="card__body">
                <div className="card__title">Presentation on react</div>
                <div className="card__info">Approved the design of the content for iOS app, let's make a presentation</div>
                <div className="card__subtask">
                    <div className="tasks">
                        <div className="task task--close">Approved budget</div>
                        <div className="task task--open">Initial design review</div>
                        <div className="task task--open">First design concept</div>
                        <div className="task task--open">Second design concept</div>
                    </div>

                    <div className="task__action">Add Subtask</div>
                </div>

                <div className="card__attachment">
                    <div className="images"></div>
                    <div className="images"></div>
                    <div className="images"></div>
                    <div className="images"></div>
                    <div className="images"></div>
                    <div className="images--count"></div>
                </div>
            </div>

            <div className="card__footer"></div>
        </div>
    );
}

export default Card;
