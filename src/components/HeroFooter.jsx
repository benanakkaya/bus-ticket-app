import React from 'react'

function HeroFooter() {
    return (
        <section className='bg-primary pt-4 border-b-2 border-secondary pb-4'>
            <div className='container px-10 flex justify-center gap-x-10'>
                <div className='flex items-center gap-x-5'>
                    <img className='h-16' alt='hero-footer-pic' src={require("../images/lowest-price.png")} />
                    <div>
                        <h3 className='font-medium'>En Uygun Biletler</h3>
                        <p className='text-sm'> Tüm havayolu ve otobüs firmalarının en ucuz biletlerini aynı ekranda karşılaştırın, en uygun bileti 3 adımda online satın alın!</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-5'>
                    <img className='h-16' alt='hero-footer-pic' src={require("../images/secure-payment.png")} />
                    <div>
                        <h3 className='font-medium'>%100 Güvenli Alışveriş</h3>
                        <p className='text-sm'> Tüm bilgileriniz 3D Secure ödeme sistemi ve 256 BIT SSL güvenlik sertifikası ile tamamen güvende, güvenli alışverişin tadını çıkarın!</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-5 hidden md:flex'>
                    <img className='h-16' alt='hero-footer-pic' src={require("../images/customer-service.png")} />
                    <div>
                        <h3 className='font-medium'>Satış Sonrası Destek</h3>
                        <p className='text-sm'> Satın aldığınız bileti iptal ettirmek veya değiştirmek istediğinizde, sizin için hazır olan destek ekibimizi arayın!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HeroFooter;