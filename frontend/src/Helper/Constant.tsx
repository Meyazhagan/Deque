import { AiOutlineStar, AiOutlineFile } from "react-icons/ai"
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { RiSearchLine, RiCheckboxBlankCircleLine, RiEqualizerFill,RiCheckboxCircleFill } from "react-icons/ri"
import { TbTriangle, TbSquareRotated, TbSquare } from "react-icons/tb";
import { FaRegSquare } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsKanban } from "react-icons/bs";
import { RxTable } from "react-icons/rx"
import { ImList2 } from "react-icons/im"
import { IoChatbubbleOutline } from "react-icons/io5"
import { RxFile } from "react-icons/rx"

const ICONS = {
    "STAR": AiOutlineStar,
    "RECT": FaRegSquare,
    "DIAMOND": TbSquareRotated,
    "SQUARE": TbSquare,
    "TRIANGLE": TbTriangle,
    "CIRCLE": RiCheckboxBlankCircleLine,
    "UP_ARROW": MdExpandLess,
    "DOWN_ARROW": MdExpandMore,
    "SEARCH": RiSearchLine,
    "ACTION": BiDotsVerticalRounded,
    "KANBAN": BsKanban,
    "FILTER": RiEqualizerFill,
    "TABLE": RxTable,
    "LIST": ImList2,
    "FILE": RxFile,
    "CHAT": IoChatbubbleOutline,
    "CIRCLE_FILLED": RiCheckboxCircleFill,

}

const COLOR = {
    "RED": "",
    "YELLOW": "",
    "BLUE": "",
    "GREEN": "",
    "GREY": ""
}

export { ICONS }