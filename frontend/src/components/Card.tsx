import React, { } from "react";
import { BiDotsVerticalRounded, BiPlus } from "react-icons/bi";
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri"
import { TbSubtask } from "react-icons/tb";
import avatar from "../Assets/piper.jpg";
import { ICONS } from "../Helper/Constant";

interface ITags {
    title: string
    color: IColor
}
interface IAttachment {
    id: string
    src: string
    alt: string
}

interface ISubTask {
    title: string
    status: string
    refTask?: string
}

interface IMember {
    name: string
    avatar: string
}

type IColor = "red" | "blue" | "green" | "yellow" | "pink" | "violet"
interface ICard {
    title: string
    shortNote: string
    description: string
    tags: ITags[]
    status: string
    subTasks: ISubTask[]
    attachments: IAttachment[]
    columns: []
    assignedTo: IMember[]
    metadata : {
        attachmentCount: number
        commentsCount: number
    }
}


let card: ICard = {
    title: "Presentation on react",
    shortNote: "Approved the design of the content for iOS app, let's make a presentation",
    description: "",
    status: "INPROGRESS",
    tags: [
        {
            title: "Website",
            color: "blue"
        },
        {
            title: "Design",
            color: "yellow"
        },
        {
            title: "Design",
            color: "red"
        },
        {
            title: "Design",
            color: "green"
        },
        {
            title: "Design",
            color: "violet"
        },
        {
            title: "Design",
            color: "pink"
        },
        {
            title: "Design",
            color: "green"
        },
    ],
    subTasks: [
        {
            title:"Approved budget",
            status: "CLOSED"
        },
        {
            title:"Initial design review",
            status: "OPEN",
            refTask: "uuid"
        },
        {
            title:"First design concept",
            status: "OPEN"
        },
        {
            title:"Second design concept",
            status: "OPEN"
        },
    ],
    attachments: [
        {
            id: "uuid1",
            src: avatar,
            alt: "avatar"
        },
        {
            id: "uuid2",
            src: avatar,
            alt: "avatar"
        },
        {
            id: "uuid3",
            src: avatar,
            alt: "avatar"
        },
        {
            id: "uuid4",
            src: avatar,
            alt: "avatar"
        },
        {
            id: "uuid5",
            src: avatar,
            alt: "avatar"
        },
        {
            id: "uuid6",
            src: avatar,
            alt: "avatar"
        },
        {
            id: "uuid7",
            src: avatar,
            alt: "avatar"
        },
        {
            id: "uuid8",
            src: avatar,
            alt: "avatar"
        },
        {
            id: "uuid9",
            src: avatar,
            alt: "avatar"
        },
        {
            id: "uuid10",
            src: avatar,
            alt: "avatar"
        },
    ],
    columns: [],
    assignedTo: [
        {
            avatar: avatar,
            name: "Meyazhagan"
        },
        {
            avatar: avatar,
            name: "Meyazhagan"
        },
        {
            avatar: avatar,
            name: "Meyazhagan"
        },
        {
            avatar: avatar,
            name: "Meyazhagan"
        },
        // {
        //     avatar: avatar,
        //     name: "Meyazhagan"
        // },
        // {
        //     avatar: avatar,
        //     name: "Meyazhagan"
        // },
        // {
        //     avatar: avatar,
        //     name: "Meyazhagan"
        // },
    ],
    metadata: {
        attachmentCount: 4,
        commentsCount: 6,
    }
}

const CompactCard: React.FunctionComponent<{card : ICard}> = (props) => {
    const card = props.card

    card.attachments = []
    card.subTasks = []
    // card.assignedTo = []

    return (<div>
    <div className="card">
        <div className="card__header">
            <div className="card__title">{card.title}</div>

            <BiDotsVerticalRounded className="card__action" />
        </div>

        <div className="card__body">
            <div className="card__tags">
                {
                    card.tags.map(tag => (<div className={`tag tag--${tag.color}`}>{tag.title}</div>))
                }
            </div>

            {/* <div className="card__info">Approved the design of the content for iOS app, let's make a presentation</div> */}
            {card.subTasks.length != 0 &&
            <div className="card__subtask">
                <div className="tasks">
                    {
                        card.subTasks.map(subTask => (
                            <div className={`task task--${subTask.status == "CLOSED" ? "close" : "open"}`}>
                                {subTask.status == "CLOSED" ? <ICONS.CIRCLE_FILLED />: <ICONS.CIRCLE /> }
                                {subTask.title}
                            </div>
                        ))
                    }
                </div>
                {
                    card.subTasks.length > 0 &&
                    <div className="task__action"><BiPlus />Add Subtask</div>
                }
            </div>}
            {/* https://i.pravatar.cc/450 */}
            { card.attachments.length != 0 &&
                <div className="card__attachment">
                    {
                        card.attachments.map((attachment, index) => {
                            if (index > 5) return null
                            return <img className="images" src={attachment.src} alt={attachment.alt} />
                        }
                        )
                    }
                    {card.attachments.length > 6 && <div className="images images--count">+{card.attachments.length - 6}</div>}
                </div>
            }
        </div>

    </div>
        <div className="card__footer">
            <div className="left">
                {
                    card.assignedTo.map((assignee, index) => {
                        if (index >= 3) return null
                        return <img className="avatar" src={assignee.avatar} alt={assignee.name} />
                    })
                }
                {card.assignedTo.length > 3 && <div className="avatar avatar--center">+{card.assignedTo.length - 3}</div>}
                <div className="avatar avatar--add avatar--center"><BiPlus /></div>
            </div>

            <div className="right">
                <div className="info attachment--count"><ICONS.FILE /> <span className="count">{card.metadata.attachmentCount}</span> </div>
                <div className="info message--count"><ICONS.CHAT /> <span className="count">{card.metadata.commentsCount}</span> </div>
            </div>
        </div>
        </div>)
}

const Card: React.FunctionComponent<{}> = (props) => {
    return <><CompactCard card={card}  /> </>
}

export default Card;
