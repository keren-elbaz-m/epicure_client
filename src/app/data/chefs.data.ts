import { Chef } from '@/app/types/index'

export const chefs: Chef[] = [
    {
        id: 1,
        name: "asaf granit",
        imageUrl: "/images/chefs/asaf_granit.png",
        views: 100,
        isNew: false,
        description: "Asaf Granit is a renowned Israeli chef known for his innovative approach to Mediterranean cuisine. He has gained international acclaim for his unique culinary style and has opened several successful restaurants.",
        restaurants: ["1", "2"]
    },
    {
        id: 2,
        name: "aviv moshe",
        imageUrl: "/images/chefs/aviv_moshe.png",
        views: 200,
        isNew: true,
        description: "Aviv Moshe is a talented Israeli chef celebrated for his creative dishes that blend traditional and modern flavors. He has made a name for himself in the culinary world with his unique approach to cooking.",
        restaurants: ["3", "4"]
    },
    {
        id: 3,
        name: "eyal shani",
        imageUrl: "/images/chefs/eyal_shani.png",
        views: 300,
        isNew: false,
        description: "Eyal Shani is a prominent Israeli chef known for his bold flavors and innovative dishes. He has gained recognition for his unique culinary style and has opened several successful restaurants.",
        restaurants: ["3", "4"]
    },
    {
        id: 4,
        name: "meir adoni",
        imageUrl: "/images/chefs/meir_adoni.png",
        views: 50,
        isNew: true,
        description: "Meir Adoni is a celebrated Israeli chef known for his modern take on Mediterranean cuisine. He has gained international acclaim for his innovative dishes and has opened several successful restaurants.",
        restaurants: ["5", "6"]
    },

    {
        id: 5,
        name: "nitzan raz",
        imageUrl: "/images/chefs/nitzan_raz.png",
        views: 400,
        isNew: false,
        description: "Nitzan Raz is a talented Israeli chef known for his creative dishes that blend traditional and modern flavors. He has made a name for himself in the culinary world with his unique approach to cooking.",
        restaurants: ["7", "8"]
    },
    {
        id: 6,
        name: "omer miller",
        imageUrl: "/images/chefs/omer_miller.png",
        views: 150,
        isNew: true,
        description: "Omer Miller is a renowned Israeli chef known for his innovative approach to Mediterranean cuisine. He has gained international acclaim for his unique culinary style and has opened several successful restaurants.",
        restaurants: ["9", "1"]
    },
    {
        id: 7,
        name: "shahaf shabtay",
        imageUrl: "/images/chefs/shahaf_shabtay.png",
        views: 250,
        isNew: false,
        description: "Shahaf Shabtay is a talented Israeli chef celebrated for his creative dishes that blend traditional and modern flavors. He has made a name for himself in the culinary world with his unique approach to cooking.",
        restaurants: ["2", "3"]
    },
    {
        id: 8,
        name: "yossi shitrit",
        imageUrl: "/images/chefs/yossi_shitrit.png",
        views: 350,
        isNew: false,
        description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
        restaurants: ["4", "5", "6"]
    },
    {
        id: 9,
        name: "yuval ben neriah",
        imageUrl: "/images/chefs/yuval_ben_neriah.png",
        views: 500,
        isNew: true,
        description: "Yuval Ben Neriah is a celebrated Israeli chef known for his modern take on Mediterranean cuisine. He has gained international acclaim for his innovative dishes and has opened several successful restaurants.",
        restaurants: ["6", "7"]
    }
]