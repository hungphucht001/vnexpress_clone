import React from 'react'
import Menu from '../components/Menu'
import Footer from './Footer'
import Header from './Header'

function DefaultLayout({ children }) {
    return (
        <div>
            <iframe className='iframe' src="https://static.eclick.vn/html5/vs_002/ads/s/sun/property/2022/07/18/105743/1920x270/dfp/pc/rmd/fixed/index.html?link=https%3A%2F%2Fadclick.g.doubleclick.net%2Fpcs%2Fclick%3Fxai%3DAKAOjsstSrWp5JMsNR6DGCou59rI1c5iExwYBAWLTl8PGLIdk597XffE5nbrYyT1ZRkyDJsmpffek_4wlQZKzzDNTASg777bq273EFRGNlwr48FH_rmTP3IKgYOk6gDJC9JIIdJU7A_SqAx9GtEeL745yJ9hOmMpkpjOPiKK7yKY8x0Y2nkcwhMvgyWKe1po9iIH0JeYGiJxHug2EeiFhP28nEjBts6zlTrqh1Jn8NF8FbXHDmq_sAZTGj3X7Bztj-oVkHBSCZFIusEfKt_WmnJTXPOiwR-DpEeji_dwBX0xQQl7J6YiMqnS__qVH2D6G9wkzU_cDVeeKTY1lEWJ1kg%26sai%3DAMfl-YRSv0VH_o0gWnMhut2iI1Z1Wp1qyxRjWvFrl3AfN64OZzNaqzYThDDID1-0LhM37ABO-jVBNg1hNjHtBB4QPy9k2npVMthpQO2H2iB7%26sig%3DCg0ArKJSzAedfcxUd6kxEAE%26fbs_aeid%3D%5Bgw_fbsaeid%5D%26urlfix%3D1%26adurl%3Dhttps%253A%252F%252Fsunsecretvalley.vn%252F&otherlink=&campaign_name=Sun%20lafiesta&index_brand=LB1001.13_Sun%20group&index_industrial=L1001_B%E1%BA%A5t%20%C4%91%E1%BB%99ng%20s%E1%BA%A3n"></iframe>
            <Header />
            <Menu />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default DefaultLayout
