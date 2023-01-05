import React, { useState } from 'react'

export const LanguagesContext = React.createContext();

function Languages(props) {

    const browserLang = navigator.language;



    const [locale,setLocale] = useState(browserLang);
    const [langModalState,setLangModalState] = useState(false);





    const messages = {
        "tr-TR" : {
            //Navbar
            busTicket : "Otobüs Bileti",
            ticketCheck: "Bilet Sorgulama",
            welcome: "Hoşgeldin",
            aboutUs: "Hakkımızda",
            contact: "İletişim",
            myReservations: "Rezervasyonlarım",
            login: "Giriş",
            register: "Kayıt",
            logout: "Çıkış",
            turkish: "Türkçe",
            english: "İngilizce",
            //Hero
            fromWhere: "Nereden",
            toWhere: "Nereye",
            travelDate: "Yolculuk Tarihi",
            find: "BUL",
            //Hero Footer
            herofH1: "En Uygun Biletler",
            herofH2: "100% Güvenli Alışveriş",
            herofH3: "Satış Sonrası Destek",
            herofP1: "Tüm havayolu ve otobüs firmalarının en ucuz biletlerini aynı ekranda karşılaştırın, en uygun bileti 3 adımda online satın alın!",
            herofP2: "Tüm bilgileriniz 3D Secure ödeme sistemi ve 256 BIT SSL güvenlik sertifikası ile tamamen güvende, güvenli alışverişin tadını çıkarın!",
            herofP3: "Satın aldığınız bileti iptal ettirmek veya değiştirmek istediğinizde, sizin için hazır olan destek ekibimizi arayın!",
            //Lets Register
            lrHeader: "ONLARCA OTOBÜS FİRMASINDAN EN UCUZ BİLETLERİ SATIN ALMAK İÇİN",
            lrButton: "HEMEN ÜYE OL",
            //Site Info
            infoHeader1: "Ucuz otobüs bileti nasıl bulunur?",
            infoHeader2: "Neden uçak ya da araç yerine otobüsle seyahat etmeliyim?",
            infoH1P1: "Eğer en uygun fiyatlı otobüs biletini satın alarak seyahat etmek istiyorsanız, doğru yerdesiniz. Biletcim'de size en uygun otobüs bileti sadece birkaç tık uzağınızda. Onlarca otobüs firmasının Türkiye’nin tüm noktalarına düzenlediği seferleri karşılaştırabileceğiniz Biletcim sayesinde gitmek istediğiniz yere en uygun fiyatlı otobüs biletini bulabilirsiniz.",
            infoH1P2: "Aradığınız destinasyondaki tüm seçenekleri sefer saatlerine göre listeleyen Biletcim'in oturma düzeni, kalkış saati, bilet fiyatı gibi filtreleriyle tercihlerinize uygun seferi bulmanız çok kolay. Ucuz otobüs bileti aramanızı daha da kolaylaştırmak için seferleri fiyata göre artan ya da azalan, kalkış saati erkenden geçe ya da geçten erkene ve varış saati erkenden geçe ya da geçten erkene gibi seçeneklerle sıralayabilirsiniz. Bütçenize en uygun otobüs biletini bulduktan sonra Biletcim'den başka sitelere yönlendirilmeden güvenle satın alabilirsiniz.",
            infoH2P1: "Otobüs biletleri, uçak bileti fiyatlarına ve benzin masraflarına kıyasla daha uygun fiyatlı. Uçak yolculuklarının aksine otobüsle seyahat ederken otogara saatler öncesinde gitmenize gerek yok. Havalimanları şehir merkezine uzak noktalarda bulunurken otobüs terminalleri, genelde şehir merkezlerinde konumlanıyor.",
            infoH2P2: "Yola odaklanıp uzun saatler boyunca araç sürüp yorulmak yerine otobüs yolculuğu esnasında yolu seyrederek yolculuğun tadını çıkarmak mümkün. Ayrıca otobüsle seyahat ettiğinizde park yeri sıkıntısı da yaşamazsınız.",
            //Footer
            followUs: "Bizi Takip Edin",
            footerA1: "En Uygun Otobüs Bileti",
            footerA2: "Bilet Satın Al",
            footerA3: "Tüm Seferler",
            footerA4: "Otobüs Firmaları",
            footerA5: "Terminaller",
            footerCopyright: "© 2022 Tüm hakları saklıdır. Biletcim | İnternet Biletcim, Belge No: 7153",
            //Set Filter
            filters: "Filtreler",
            departureTime: "Kalkış Saati",
            seatingArrangement: "Oturma Düzeni",
            ticketPrice: "Bilet Ücreti",
            companies: "Firmalar",
            applyFilter: "Filtreyi Uygula",
            am : "Gündüz",
            pm: "Gece",
            //List Item
            front: "Ön Taraf",
            emptySeat: "Boş Koltuk",
            femaleP: "Kadın Yolcu",
            maleP: "Erkek Yolcu",
            selectedSeat: "Seçili Koltuk",
            selectedSeats: "Seçili Koltuklar",
            total: "Toplam",
            reserve: "Rezerve Et",
            chooseSeat: "Koltuk Seç",
            //Reservation Screen
            reservationScreen: "Rezervasyon Ekranı",
            reservationP2: "Lütfen yolcu bilgilerini giriniz;",
            reservationButton: "Rezerve Et",
            //MyReservations
            yourReservations: "Rezervasyonlarınız",
            reservationNotFound: "Kayıtlı rezervasyonunuz bulunamadı.",
            name: "Ad",
            lastName: "Soyad",
            tcNo: "TC No",
            phoneNumber: "Tel No",
            seatNo: "Koltuk No",
            reservationNo: "Reservasyon No",
            cancel: "İptal",
            pleaseLogin: "Rezervasyonlarınızı görmek için lütfen giriş yapın.",
            //ModalForm
            username: "Kullanıcı Adı",
            password: "Parola",
            repeat: "Tekrar",
            complete: "Kayıt İşlemini Tamamla",
            alreadyHave: "Zaten bir hesabınız var mı?",
            dontHave:"Henüz bir hesabınız yok mu?",
            registerHeader: "Siteye Kayıt Ol",
            loginHeader: "Siteye Giriş Yap",
            signUp: "Kayıt Ol",
            signIn: "Giriş Yap",
            //Ticket Check
            check: "Kontrol Et",
            //Language Modal
            languageSelection: "Dil Seçimi",
            
        },
        "en-US" : {
            //Navbar
            busTicket : "Bus Ticket",
            ticketCheck: "Ticket Check",
            welcome: "Welcome",
            aboutUs: "About us",
            contact: "Contact",
            myReservations: "My Reservations",
            login: "Login",
            register: "Register",
            logout: "Logout",
            turkish: "Turkish",
            english: "English",
            //Hero
            fromWhere: "From where",
            toWhere: "To where",
            travelDate: "Travel Date",
            find: "FIND",
            //Hero Footer
            herofH1: "The Cheapest Tickets",
            herofH2: "100% Safe Shopping",
            herofH3: "Support After Sale",
            herofP1: "Compare the cheapest tickets from all airline and these companies on the same screen and purchase the most affordable ticket online in 3 steps.",
            herofP2: "Enjoy secure shopping as all of your information is completely safe with the 3D Secure payment system and 256 BIT SSL security certificate!",
            herofP3: "When you want to cancel or change the ticket you purchased, call our support team ready for you!",
            //Lets Register
            lrHeader: "TO BUY THE CHEAPEST TICKETS FROM TENS OF BUS COMPANIES",
            lrButton: "REGISTER NOW",
            //Site Info
            infoHeader1: "How to find cheap bus tickets?",
            infoHeader2: "Why should I travel by bus instead of plane or car?",
            infoH1P1: "If you want to travel by purchasing the most affordable bus ticket, you are in the right place. The most suitable bus ticket for you is just a few clicks away at Biletcim. Thanks to my Biletcim, where you can compare the flights organized by dozens of bus companies to all points of Turkey, you can find the most affordable bus ticket to the place you want to go.",
            infoH1P2: "It is very easy to find the flight that suits your preferences with the filters of Biletcim, which lists all the options in the destination you are looking for according to the flight times, such as seating arrangement, departure time, ticket price. To make your search for cheap bus tickets even easier, you can sort the flights by increasing or decreasing price, departure time by early or late by early, and arrival time by early or late by early by options such as. After finding the bus ticket that best suits your budget, you can safely buy it from Biletcim without being redirected to other sites.",
            infoH2P1: "Bus tickets are more affordable compared to air ticket prices and gasoline costs. Unlike airplane trips, there is no need to go to the bus station hours earlier when traveling by bus. While airports are located far from the city center, bus terminals are usually located in city centers.",
            infoH2P2: "Instead of focusing on the road and driving for long hours and getting tired, it is possible to enjoy the journey by watching the road during the bus journey. In addition, when you travel by bus, you will not have a problem with parking.",
            //Footer
            followUs: "Follow Us",
            footerA1: "The Cheapest Bus Ticket",
            footerA2: "Buy Ticket",
            footerA3: "All Voyages",
            footerA4: "Bus Companies",
            footerA5: "Terminals",
            footerCopyright: "© 2022 All rights reserved. Biletcim | Internet Biletcim, Document No: 7153",
            //Set Filter
            filters: "Filters",
            departureTime: "Departure Time",
            seatingArrangement: "Seating Arrange",
            ticketPrice: "Ticket Price",
            companies: "Companies",
            applyFilter: "Apply Filter",
            am : "am",
            pm: "pm",
            //List Item
            front: "Front",
            emptySeat: "Empty Seat",
            femaleP: "Female Pessenger",
            maleP: "Male Pessenger",
            selectedSeat: "Selected Seat",
            selectedSeats: "Selected Seats",
            total: "Total",
            reserve: "Reserve",
            chooseSeat: "Choose a Seat",
            //Reservation Screen
            reservationScreen: "Reservation Screen",
            reservationP2: "Please enter the passenger information",
            reservationButton: "To reserve",
            //MyReservations
            yourReservations: "Your Reservations",
            reservationNotFound: "Your registered reservation could not be found.",
            name: "Name",
            lastName: "Last Name",
            tcNo: "TC Number",
            phoneNumber: "Phone Number",
            seatNo: "Seat No",
            reservationNo: "Reservation No",
            cancel: "Cancel",
            pleaseLogin: "Please log in to see your reservations.",
            //ModalForm
            username: "Username",
            password: "Password",
            repeat: "Repeat",
            complete: "Complete the Registration",
            alreadyHave: "Do you already have an account?",
            dontHave:"Don't have an account yet?",
            registerHeader: "Register On The Website",
            loginHeader: "Login To The Website",
            signUp: "Sign Up",
            signIn: "Sign In",
            //Ticket Check
            check: "Check",
            //Language Modal
            languageSelection: "Language Selection",

        }
    }




    const values = {
        locale,
        setLocale,
        messages,
        langModalState,
        setLangModalState
    };

  return (
    <LanguagesContext.Provider value={values}> 
    {props.children}
    </LanguagesContext.Provider>
  )
}


export default Languages;
