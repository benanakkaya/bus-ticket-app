import React from 'react'
import { FormattedMessage } from 'react-intl';

function HeroFooter() {
    return (
        <section className='bg-primary pt-4 border-b-2 border-secondary pb-4'>
            <div className='container px-10 lg:flex space-y-2 justify-center gap-x-10 flex-wrap'>
                <div className='flex flex-1 items-center gap-x-5'>
                    <img className='h-16' alt='hero-footer-pic' src={require("../images/lowest-price.png")} />
                    <div>
                        <h3 className='font-medium'><FormattedMessage id="herofH1" /></h3>
                        <p className='text-sm'> <FormattedMessage id="herofP1" /></p>
                    </div>
                </div>
                <div className='flex flex-1 items-center gap-x-5'>
                    <img className='h-16' alt='hero-footer-pic' src={require("../images/secure-payment.png")} />
                    <div>
                        <h3 className='font-medium'><FormattedMessage id="herofH2" /></h3>
                        <p className='text-sm'> <FormattedMessage id="herofP2" /></p>
                    </div>
                </div>
                <div className='flex flex-1 items-center gap-x-5 md:flex'>
                    <img className='h-16' alt='hero-footer-pic' src={require("../images/customer-service.png")} />
                    <div>
                        <h3 className='font-medium'><FormattedMessage id="herofH3" /></h3>
                        <p className='text-sm'> <FormattedMessage id="herofP3" /></p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HeroFooter;