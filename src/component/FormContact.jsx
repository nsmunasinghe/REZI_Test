import ComboBox from './comboBox'
import React from 'react'

function FormContact() {
    return (
        <form action="" method="POST" id='form-contact' className='flex flex-col w-full mt-5'>
            <div className='grid w-full mb-10 md:grid-cols-2 md:gap-x-10 md:justify-between md:mb-1' >
                <div className='flex flex-col w-full'>
                    <label htmlFor="fullName">FULL NAME</label> <br />
                    <input type="text" id='fullName' name='fullName' placeholder="Charles Bloomberg"/> <br />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="email">EMAIL ADDRESS</label> <br />
                    <input type="text" id='email' name='email' placeholder="charlesbloomberg@wisc.edu"/> <br />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="phoneNumber">PHONE NUMBER</label> <br />
                    <input type="text" id='phoneNumber' name='phoneNumber' placeholder="(621) 799-5548"/> <br /> 
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="linkedin">LINKEDIN <span>URL</span> </label> <br />
                    <input type="text" id='linkedin' name='linkedin' defaultValue='https://linkedin.com/'/> <br />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="personalWebSite">PERSONAL WEBSITE <span>OR RELEVANT LINK</span></label> <br />
                    <input type="text" id='personalWebSite' name='personalWebSite' placeholder="https://www.charlesbloomberg.com"/> <br />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="country">COUNTRY</label> <br />
                    <ComboBox />
                </div>
            </div>
            <button type='submit' className='btnSubmit'>SAVE BASIC INFO</button>
        </form>
    )
}

export default FormContact
