import React from 'react'
import { FormattedMessage } from 'react-intl';

function SiteInfo() {
    return (
        <section className='bg-primary py-5 text-customgray border-b-2 border-customgray'>
            <div className='container px-10 py-5 flex gap-x-5'>
            <article  className='flex-1'>
                <h2 className='font-medium text-xl'><FormattedMessage id="infoHeader1" /></h2> <br/>
                <p><FormattedMessage id="infoH1P1" /></p> <br />
                <p><FormattedMessage id="infoH1P2" /></p>
            </article>
            <article className='flex-1'>
            <h2 className='font-medium text-xl'><FormattedMessage id="infoHeader1" /></h2> <br/>
                <p><FormattedMessage id="infoH2P1" /></p> <br />
                <p><FormattedMessage id="infoH2P2" /></p>
            </article>
            </div>
        </section>
    )
}


export default SiteInfo;