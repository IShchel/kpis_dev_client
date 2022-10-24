export const headerNamesColDef = {
    maxOb: "Макс. объём (тыс. литров)",
    cena: "Цена(тыс. руб за один литр)",
};

export const columnDefs = [
    {
        headerName: "Организация-исполнитель",
        children: [
            { field: "naim_org", headerName: "Наименование", width: 100 },
            { field: "adr_fact", headerName: "Местонахождение", width: 170 },
            {
                field: "inn",
                headerName: "ИНН",
                width: 80,
                suppressSizeToFit: true,
            },
        ],
    },
    {
        headerName: "Плазма свежезамороженная",
        children: [
            {
                field: "plazma_max",
                headerName: headerNamesColDef.maxOb,
                width: 135,
                suppressSizeToFit: true,
            },
            {
                field: "plazma_cena",
                headerName: headerNamesColDef.cena,
                width: 135,
                suppressSizeToFit: true,
            },
        ],
    },
    {
        headerName: "Эртроцитарная масса",
        children: [
            {
                field: "erm_max",
                headerName: headerNamesColDef.maxOb,
                width: 135,
                suppressSizeToFit: true,
            },
            {
                field: "erm_cena",
                headerName: headerNamesColDef.cena,
                width: 135,
                suppressSizeToFit: true,
            },
        ],
    },
    {
        headerName: "Иммуноглобулин человека",
        children: [
            {
                field: "immg_max",
                headerName: headerNamesColDef.maxOb,
                width: 135,
                suppressSizeToFit: true,
            },
            {
                field: "immg_cena",
                headerName: headerNamesColDef.cena,
                width: 135,
                suppressSizeToFit: true,
            },
        ],
    },
    {
        headerName: "Альбумин 10%",
        children: [
            {
                field: "alb_max",
                headerName: headerNamesColDef.maxOb,
                width: 135,
                suppressSizeToFit: true,
            },
            {
                field: "alb_cena",
                headerName: headerNamesColDef.cena,
                width: 135,
                suppressSizeToFit: true,
            },
        ],
    },
];