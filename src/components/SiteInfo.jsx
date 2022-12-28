import React from 'react'

function SiteInfo() {
    return (
        <section className='bg-primary py-5 text-customgray border-b-2 border-customgray'>
            <div className='container px-10 py-5 flex gap-x-5'>
            <article  className='flex-1'>
                <h2 className='font-medium text-xl'>Ucuz otobüs bileti nasıl bulunur?</h2> <br/>
                <p>Eğer en uygun fiyatlı otobüs biletini satın alarak seyahat etmek istiyorsanız, doğru yerdesiniz. Biletcim'de size en uygun otobüs bileti sadece birkaç tık uzağınızda. Onlarca otobüs firmasının Türkiye’nin tüm noktalarına düzenlediği seferleri karşılaştırabileceğiniz Biletcim sayesinde gitmek istediğiniz yere en uygun fiyatlı otobüs biletini bulabilirsiniz.</p> <br />
                <p>Aradığınız destinasyondaki tüm seçenekleri sefer saatlerine göre listeleyen Biletcim'in oturma düzeni, kalkış saati, bilet fiyatı gibi filtreleriyle tercihlerinize uygun seferi bulmanız çok kolay. Ucuz otobüs bileti aramanızı daha da kolaylaştırmak için seferleri fiyata göre artan ya da azalan, kalkış saati erkenden geçe ya da geçten erkene ve varış saati erkenden geçe ya da geçten erkene gibi seçeneklerle sıralayabilirsiniz. Bütçenize en uygun otobüs biletini bulduktan sonra Biletcim'den başka sitelere yönlendirilmeden güvenle satın alabilirsiniz.</p>
            </article>
            <article className='flex-1'>
            <h2 className='font-medium text-xl'>Neden uçak ya da araç yerine otobüsle seyahat etmeliyim?</h2> <br/>
                <p>Otobüs biletleri, uçak bileti fiyatlarına ve benzin masraflarına kıyasla daha uygun fiyatlı. Uçak yolculuklarının aksine otobüsle seyahat ederken otogara saatler öncesinde gitmenize gerek yok. Havalimanları şehir merkezine uzak noktalarda bulunurken otobüs terminalleri, genelde şehir merkezlerinde konumlanıyor.</p> <br />
                <p>Yola odaklanıp uzun saatler boyunca araç sürüp yorulmak yerine otobüs yolculuğu esnasında yolu seyrederek yolculuğun tadını çıkarmak mümkün. Ayrıca otobüsle seyahat ettiğinizde park yeri sıkıntısı da yaşamazsınız.</p>
            </article>
            </div>
        </section>
    )
}


export default SiteInfo;