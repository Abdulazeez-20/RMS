import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div className='bg-gray-800'>
            <div className="header flex justify-between p-4">
                <div className="header-logo text-2xl">
                    <h3>Research logo</h3>
                </div>
                <div className="header-links flex justify-around bg-yellow-200">
                    <li className='header_links-item' >About</li>
                    <li className='header_links-item'>explor</li>
                    <li className='header_links-item'>Docs</li>
                </div>

                <div className="flex justify-between items-center text-xl">
                    <a href="">تسجيل الدخول</a>
                    <div className='mx-3 font-bold'>|</div>
                    <a href="">انشاء حساب</a>
                </div>
            </div>
        </div>
    )
}

export default Home