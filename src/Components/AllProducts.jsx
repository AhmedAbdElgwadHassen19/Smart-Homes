import image1 from "../image/IMG-20241030-WA0017.jpg"
import image3 from "../image/IMG-20241104-WA0009.jpg"
import image4 from "../image/IMG-20241104-WA0010.jpg"
import image5 from "../image/IMG-20241104-WA0011.jpg"
import image6 from "../image/IMG-20241104-WA0014.jpg"
import image7 from "../image/IMG-20241104-WA0016.jpg"
import image8 from "../image/IMG-20241104-WA0017.jpg"
import image9 from "../image/IMG-20241104-WA0018.jpg"
import image10 from "../image/IMG-20241104-WA0020.jpg"
import image11 from "../image/IMG-20241104-WA0022.jpg"
import image12 from "../image/IMG-20241104-WA0023.jpg"
import image13 from "../image/IMG-20241104-WA0024.jpg"
import image14 from "../image/IMG-20241104-WA0025.jpg"
import image15 from "../image/IMG-20241105-WA0022.jpg"
import image16 from "../image/IMG-20241105-WA0023.jpg"
import image17 from "../image/IMG-20241105-WA0024.jpg"
import image18 from "../image/IMG-20241105-WA0025.jpg"
import image19 from "../image/IMG-20241105-WA0026.jpg"
import image20 from "../image/IMG-20241105-WA0027.jpg"
import image21 from "../image/IMG-20241106-WA0017.jpg"
import image22 from "../image/IMG-20241106-WA0018.jpg"
import image23 from "../image/IMG-20241106-WA0019.jpg"
import image24 from "../image/IMG-20241106-WA0020.jpg"
import image25 from "../image/IMG-20241106-WA0021.jpg"


const AllProducts = [
    //Dubai
    { 
        id: 1 ,
        name:{
            en:"BAYZ 102 By Danube",
            ar:"شقة",
        },
        price: "2M",
        location:{
            en:"Dubai business bay",
            ar:"دبي"
        },
        studio:{
            en :"2 & 3 & 4 bedroom", 
            ar:"2 & 3 & 4 & غرفة نوم"
        },
        payment_plan:{
            en:"Payment plan : 50/50",
            ar:"خطة الدفع 50/50"
        },
        down_payment:{
            en:"Down Payment 10%",
            ar:"الدفعة الاولي %10"
        },
        image: image1
    },
    { 
        id: 3 ,
        name:{
            en:"AZiZi VENICE",
            ar:"فيلا",
        },
        price: "550,00",
        location:{
            en:"Dubai",
            ar:"دبي"
        },
        studio:{
            en :"1 & 2 & 3 bedroom",
            ar:"1 & 2 ,3  غرفة نوم"
        },
        payment_plan:{
            en:"Payment plan : 50/50",
            ar:"خطة الدفع 50/50"
        },
        down_payment:{
            en:"Down Payment 10%",
            ar:"الدفعة الاولي %10"
        },
        image: image3
    },
    { 
        id: 4 ,
        name:{
            en:"Samana Rome",
            ar:"فيلا",
        },
        price: "1.900.000",
        location:{
            en:"MBE City ",
            ar:"دبي"
        },
        studio:{
            en :"1 & 2 bedroom",
            ar:"1 & 2 غرفة نوم"
        },
        payment_plan:{
            en:"Payment plan : 50/50",
            ar:"خطة الدفع 50/50"
        },
        down_payment:{
            en:"Down Payment 15%",
            ar:"الدفعة الاولي %15"
        },
        image: image4
    },
    { 
        id: 5 ,
        name:{
            en:"Safa one",
            ar:" الصفا الاول ",
        },
        price: "Call us",
        location:{
            en:"Sheikh Zayed Road",
            ar:" شارع الشيخ زايد"
        },
        studio:{
            en :"2 & 3 & 4 bedroom",
            ar:"1 & 2 غرفة نوم"
        },
        payment_plan:{
            en:"Easy installment",
            ar:"قسط سهل"
        },
        down_payment:{
            en:"Call us",
            ar:"اتصل بنا"
        },
        image: image5
    },
    { 
        id: 6 ,
        name:{
            en:"Damac Amail Villa",
            ar:"فيلا",
        },
        price: "50M",
        location:{
            en:"the world is land",
            ar:"جزيرة العالم"
        },
        studio:{
            en :"Hand over Q1 2027",
            ar:"التلسم الرابع الاول من عام 2027"
        },
        payment_plan:{
            en:"Payment plan : 60/40",
            ar:"خطة الدفع 60/40"
        },
        down_payment:{
            en:"Down Payment 5%",
            ar:"الدفعة الاولي %5"
        },
        image: image6
    },
    { 
        id: 7 ,
        name:{
            en:" The Acres Villa",
            ar:"فيلا",
        },
        price: " 5M",
        location:{
            en:"al barshaa south",
            ar:"البرشاء جنوب الثالث"
        },
        studio:{
            en :"3 & 4 & 5 bedroom",
            ar:"3 & 4 & 5 غرفة نوم"
        },
        payment_plan:{
            en:"Payment plan : 65/35",
            ar:"خطة الدفع 65/35"
        },
        down_payment:{
            en:"Down Payment 10%",
            ar:"الدفعة الاولي %10"
        },
        image: image7
    },
    { 
        id: 8 ,
        name:{
            en:"Bughatti Residenes ",
            ar:"بنتاوس",
        },
        price: "20M ",
        location:{
            en:"Business Bay",
            ar:"الخليج التجاري"
        },
        studio:{
            en :"hand over : 2026",
            ar:"التسليم : 2026"
        },
        payment_plan:{
            en:"Payment plan : 70/30",
            ar:"خطة الدفع 70/30"
        },
        down_payment:{
            en:"Down Payment 25%",
            ar:"الدفعة الاولي %25"
        },
        image: image8
    },
    { 
        id: 9 ,
        name:{
            en:"Mercedes Benz ",
            ar:"شقة",
        },
        price: "10M",
        location:{
            en:"Downtown dubai",
            ar:" وسط دبي "
        },
        studio:{
            en:"Hand over : 2026",
            ar:"التسليم 2026"
        },
        payment_plan:{
            en:"Payment plan : 70/30",
            ar:"خطة الدفع 70/30"
        },
        down_payment:{
            en:"Down Payment 20%",
            ar:"الدفعة الاولي %20"
        },
        image: image9
    },
    { 
        id: 10 ,
        name:{
            en:"Bayz 101 ",
            ar:"شقة",
        },
        price: "1,2M ",
        location:{
            en:"Business Bay",
            ar:"الخليج التجاري"
        },
        studio:{
            en:"Hand over : 2028",
            ar:"التسليم 2028"
        },
        payment_plan:{
            en:"Payment plan : 74/26 , 1%",
            ar:"خطة الدفع 74/26 , %1"
        },
        down_payment:{
            en:"Down Payment 10%",
            ar:"الدفعة الاولي %10"
        },
        image: image10
    },
    { 
        id: 11 ,
        name:{
            en:"Bayz 102 (Studio)",
            ar:"استوديو",
        },
        price: "1,3M",
        location:{
            en:"Business Bay",
            ar:"ابخليج التجاري"
        },
        studio:{
            en:"Hand over : 2028",
            ar:"التسليم 2028"
        },
        payment_plan:{
            en:"Payment plan : 70/30 , 1% monthly",
            ar:"خطة الدفع  70/30 ,%1, شهريآ"
        },
        down_payment:{
            en:"Down Payment 10%",
            ar:"الدفعة الاولي %10"
        },
        image: image11
    },
    { 
        id: 12 ,
        name:{
            en:"Como Residences (Building)",
            ar:"شقة",
        },
        price: "21M",
        location:{
            en:"Palm Jumeirah",
            ar:"نخلة الجميرا"
        },
        studio:{
            en :"6 & 4 bedroom &  Hand over: 2028",
            ar:"6 & 7 التسليم 2028 &  غرفة نوم" 
        },
        payment_plan:{
            en:"Payment plan : 80/20",
            ar:"خطة الدفع 80/20"
        },
        down_payment:{
            en:"Down Payment 20%",
            ar:"الدفعة الاولي %20"
        },
        image: image12
    },
    { 
        id: 13 ,
        name:{
            en:"barari lagoons (Studio)",
            ar:"استوديو",
        },
        price: "1,2M",
        location:{
            en:"Dubai majan",
            ar:" مجان دبي"
        },
        studio:{
            en :"Hand over 2027",
            ar:"النسليم 2027"
        },
        payment_plan:{
            en:"Payment plan :60/40",
            ar:"خطة الدفع 60/40"
        },
        down_payment:{
            en:"Down Payment 15%",
            ar:"الدفعة الاولي %15"
        },
        image: image13
    },
    { 
        id: 14 ,
        name:{
            en:"Burj Azizi",
            ar:"برج عزيز",
        },
        price: "Call us",
        location:{
            en:"Sheikh Zayed Road",
            ar:"شارع الشيخ زايد"
        },
        studio:{
            en :"Property type : Will be",
            ar:"سيتم التحديث قربيا"
        },
        payment_plan:{
            en:"Payment plan :ُEasy installment & Hand over : announcing",
            ar:"استليم : اعلن - قريبا & خطة الدفع :  قسط سهل "
        },
        down_payment:{
            en:"Down Payment Call us%",
            ar:"الدفعة الاولي اتصل بنا"
        },
        image: image14
    },
    //AduDubai
    { 
        id: 15 ,
        name:{
            en:"BerKshire",
            ar:" بيركشاير",
        },
        price: "950,000",
        location:{
            en:"Al Yelayiss2",
            ar:"اليلايس 2"
        },
        studio:{
            en :"1 & 2 & 3 bedroom",
            ar:"1 & 2 & 3 غرفة نوم"
        },
        payment_plan:{
            en:"Payment plan: 50/50 & Size : 633.56 to 2,187.33 Sq",
            ar:"نوع الوحدة : 633.56,الي 2,187.33 قدم مربع  & خطة الدفع :50/50 "
        },
        down_payment:{
            en:"Down Payment 10%",
            ar:"الدفعة الاولي  10%"
        },
        image: image15
    },
    { 
        id: 16 ,
        name:{
            en:"Radiant Marina Towers Radiant marina tower",
            ar:"  برج مارينا مشع ابراج مارينا المشعة" ,
        },
        price: "650K",
        location:{
            en:"Al Reem island",
            ar:"جزيرة الريم"
        },
        studio:{
            en :"(Studio)1 & 2 &3 bedroom && Size: 633.56 to 2.187.33 Sq",
            ar:"نوع الوحدة :633.56, الي 2,187.33 قدم مربع  & غرفة نوم :1 & 2 & 3 "
        },
        payment_plan:{
            en:"Payment plan : 55/45 & Hand over : Q4 - 2027",
            ar:"نوع الوحدة : 633.56,الي 2,187.33 قدم مربع  & خطة الدفع :55/45 "
        },
        down_payment:{
            en:"Down Payment %10",
            ar:"الدفعة الاولي %10"
        },
        image: image16
    },
    { 
        id: 17 ,
        name:{
            en:"Reportage Tower (Building)",
            ar:"ريبورتاج",
        },
        price: "2,1M",
        location:{
            en:"Al Maryah island",
            ar:"جزيرة الماريه"
        },
        studio:{
            en :"2&3 bedroom & penthouse: townhose",
            ar:"غرفة نوم 2&3 & بنتهاوس تاون هاوس"
        },
        payment_plan:{
            en:"Payment plan : 20/80 & Hand over: Q4- 2028",
            ar:"خطة الدفع : 80/20 &  أستليم :  الربع الرابع - 2028"
        },
        down_payment:{
            en:"Down Payment 20%",
            ar:"الدفعة الاولي  %20"
        },
        image: image17
    },
    { 
        id: 18 ,
        name:{
            en:"Ramhan Island Villas",
            ar:"فلل جزيرة رامهان",
        },
        price: "Call us",
        location:{
            en:"Ramhan island",
            ar:"جزيرة رمحان"
        },
        studio:{
            en :"Property type : Villas 3,4,5,6,7",
            ar:"نوع العقار : فلل 3و4و5و6و7"
        },
        payment_plan:{
            en:"Payment plan : 50/50 & Hand over: Q3- 2027",
            ar:"خطة الدفع : 50/50 &  أستليم :  الربع الثالث - 2027"
        },
        down_payment:{
            en:"Down Payment 10%",
            ar:"الدفعة الاولي  %10"
        },
        image: image18
    },
    { 
        id: 19 ,
        name:{
            en:"The Bay 2 Residnce ",
            ar:"ذت باي 2 ريزيدنس",
        },
        price: "770K",
        location:{
            en:"yas island",
            ar:"جزيرة ياس"
        },
        studio:{
            en :"Property type: Studio 1&2&3&4 bedroom",
            ar:"استوديو :غرفةنوم: 1&2&3&4 "
        },
        payment_plan:{
            en:"Payment plan : 15/85 & Hand over: Q4- 2027",
            ar:"خطة الدفع : 85/15 &  أستليم :  الربع الرابع - 2027"
        },
        down_payment:{
            en:"Down Payment 30%",
            ar:"الدفعة الاولي  %30"
        },
        image: image19
    },
    //Sharjah
    { 
        id: 20 ,
        name:{
            en:"IL Teator Residences 2 ",
            ar:"مساكن ال تياترو 2 ",
        },
        price: "1 M",
        location:{
            en:"aljada",
            ar:"الجادة"
        },
        studio:{
            en :"Property type: 1&2&3 bedroom & Size: 736 to 3,671 Sq Ft.",
            ar:"غرفةنوم: 1&2&3 & الحجم : 736 الي 3و671 قدم مربع "
        },
        payment_plan:{
            en:"Payment plan : 65/35 & Hand over: Q3- 2025",
            ar:" خطة الدفع : 65/35 &  أستليم :  الربع الثالث- 2025" 
        },
        down_payment:{
            en:"Down Payment 5%",
            ar:"الدفعة الاولي  %5"
        },
        image: image20
    },
    { 
        id: 21 ,
        name:{
            en:"Ajmal makan",
            ar:"أجمل مكان",
        },
        price: "400,000",
        location:{
            en:"Sharjah al hamriyah",
            ar:"الشارقة الحمرية"
        },
        studio:{
            en :"Property type: Villa & Size: Various sizes available",
            ar:"الحجم :الاحجام مختلفة متاحة :  "
        },
        payment_plan:{
            en:"Payment plan: Easy Payment & Hand over: Announcing",
            ar:"خطة الدفع : خطة سداد سهلة  &  أستليم :أعلان- قربيا"
        },
        down_payment:{
            en:"Down Payment Call Us",
            ar:"الدفعة الاولي : اتصل بنا"
        },
        image: image21
    },
    { 
        id: 22 ,
        name:{
            en:"Sustainable city",
            ar:"مدنية مستدامة",
        },
        price: "2,200,000",
        location:{
            en:"Al rahmaniya",
            ar:" الرحمانية"
        },
        studio:{
            en :"Property type:Villa 3&4 bedroom Siae: 1,900 Sq Ft",
            ar:"غرفةنوم: 3&4 : فيلا :الحجم 1.900 قدم مربع"
        },
        payment_plan:{
            en:"Payment plan:20/80 & Hand over: 2026",
            ar:"خطة الدفع:20/80  &  أستليم : 2026"
        },
        down_payment:{
            en:"Down Payment 20%",
            ar:"الدفعة الاولي : 20%"
        },
        image: image22
    },
    { 
        id: 23 ,
        name:{
            en:"Citrine Residences",
            ar:"مساكن السترين",
        },
        price: "Call Us",
        location:{
            en:"Maryam island",
            ar:"جزيرة مريم"
        },
        studio:{
            en :"Property type: apartment 1&2&3&4 bedroom",
            ar:"شقه :غرفةنوم: 1&2&3&4 "
        },
        payment_plan:{
            en:"Payment plan: Easy Payment & Hand over: 742 to 3,078 Sq Ft",
            ar:"خطة الدفع : خطة سداد سهلة  &  أستليم :أعلان- قربيا"
        },
        down_payment:{
            en:"Down Payment Call Us",
            ar:"الدفعة الاولي : اتصل بنا"
        },
        image: image23
    },
    { 
        id: 24 ,
        name:{
            en:"Layla Residenidences",
            ar:"مساكن ليلي",
        },
        price: "Call Us",
        location:{
            en:"Maryam island",
            ar:"جزيرة مريم"
        },
        studio:{
            en :"Property type: 1&2&3 bedroom",
            ar:"غرفةنوم: 1&2&3 "
        },
        payment_plan:{
            en:"Payment plan: Easy Payment & Hand over: Announcing",
            ar:"خطة الدفع : خطة سداد سهلة  &  أستليم :أعلان- قربيا"
        },
        down_payment:{
            en:"Down Payment Call Us",
            ar:"الدفعة الاولي : اتصل بنا"
        },
        image: image24
    },
    { 
        id: 25 ,
        name:{
            en:"Nam2 - Al Mamsha",
            ar:"نما 2 الممشي",
        },
        price: "Call Us",
        location:{
            en:"Al zahiyah",
            ar:"الزاهية"
        },
        studio:{
            en :"Property type: Studio 1&2&3 bedroom & Size: Various Sizes",
            ar:"استوديو :غرفةنوم:1&2&3 :الحجم: مقاسات مختلفة"
        },
        payment_plan:{
            en:"Payment plan : Easy Payment & Hand over: 2028",
            ar:"خطة الدفع : خطة سداد سهلة &  أستليم : 2028"
        },
        down_payment:{
            en:"Down Payment Call Us",
            ar:"الدفعة الاولي:اتصل بنا"
        },
        image: image25
    },
]

export default AllProducts