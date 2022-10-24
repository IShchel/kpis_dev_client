import FolderIcon from "@mui/icons-material/Folder";
import HouseIcon from "@mui/icons-material/House";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export const navbar = [
    {
        title: "Главная",
        link: "/",
        icon: <HouseIcon />,
    },
    {
        title: "Ресурсы",
        link: "/asd",
        icon: <FolderIcon />,
    },
    {
        title: "Регионы",
        link: "/mp",
        icon: <FolderIcon />,
    },
    {
        title: "МП",
        link: "/loremipsum",
        icon: <FolderIcon />,
        nestedContent: [
            {
                title: "Кровь",
                link: "/loremipsum",
                icon: <FolderIcon />,
                nestedContent: [
                    {
                        title: "Возможности",
                        link: "/mpe1gem",
                        icon: <FormatListBulletedIcon />,
                    },
                    {
                        title: "Задания",
                        link: "/loremipsum",
                        icon: <FormatListBulletedIcon />,
                    },
                    {
                        title: "Свод",
                        link: "/loremipsum",
                        icon: <FormatListBulletedIcon />,
                    },
                    {
                        title: "Выписка",
                        link: "/loremipsum",
                        icon: <FormatListBulletedIcon />,
                    },
                ],
            },
            {
                title: "Медикаменты",
                link: "/loremipsum",
                icon: <FolderIcon />,
                nestedContent: [
                    {
                        title: "Возможности",
                        link: "/loremipsum",
                        icon: <FormatListBulletedIcon />,
                    },
                    {
                        title: "Задания",
                        link: "/loremipsum",
                        icon: <FormatListBulletedIcon />,
                    },
                    {
                        title: "Свод",
                        link: "/loremipsum",
                        icon: <FormatListBulletedIcon />,
                    },
                    {
                        title: "Выписка",
                        link: "/loremipsum",
                        icon: <FormatListBulletedIcon />,
                    },
                ],
            },
            {
                title: "Лечение",
                link: "/loremipsum",
                icon: <FolderIcon />,
                nestedContent: [
                    {
                        title:"Возможности" ,
                        link: "/loremipsum",
                        icon: <FormatListBulletedIcon />,
                    },
                    {
                        title: "Задания",
                        link: "/loremipsum",
                        icon: <FormatListBulletedIcon />,
                    },
                    {
                        title: "Свод",
                        link: "/loremipsum",
                        icon: <FormatListBulletedIcon />,
                    },
                    {
                        title: "Выписка",
                        link: "/loremipsum",
                        icon: <FormatListBulletedIcon />,
                    },
                ],
            },
        ],
    },
    {
        title: "ОШС",
        link: "/loremipsum",
        icon: <FolderIcon />,
        nestedContent: [
            {
                title: "Свод",
                link: "/loremipsum",
                icon: <FormatListBulletedIcon />,
            },
            {
                title: "Выписка",
                link: "/loremipsum",
                icon: <FormatListBulletedIcon />,
            },
        ],
    },
    {
        title: "МПЭ",
        link: "/loremipsum",
        icon: <FolderIcon />,
    },
];