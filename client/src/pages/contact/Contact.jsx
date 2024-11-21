import React from 'react';
import {
  FaMapMarkerAlt, // من مكتبة Fontawesome
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import "./contact.css"

function Contact() {
  return (
    <div className="overflow-hidden container flex flex-col justify-center items-center min-h-screen mx-auto p-4">
      <div  className="header_sec_title relative header-cont mt-32 mb-10 text-center">
        <h2 className="w-max relative mx-auto text-5xl font-bold mb-8">تواصل <span className='z-10 relative'>معنا</span></h2>
        <p>لا تتردد في الاتصال بنا. قم بإرسال استفساراتك هنا وسنقوم بالرد عليك في أقرب وقت ممكن.</p>
      </div>

      <div className="order-3 mt-5  lg:order-none grid grid-cols-1  text-center md:grid-cols-3 gap-8 w-full max-w-4xl mb-8">
        <div data-aos="fade-left" className="bg-[#eef2fe] hover:bg-blue-700 hover:text-white transition rounded-lg shadow-md p-8">
          <a href="tel:+20111111111111">
            <FaPhoneAlt className="mx-auto text-5xl text-green-500 mb-4" />
            <h3 className='mb-5'>رقم التواصل</h3>
            <p>+20111111111111</p>
          </a>
        </div>
        <div data-aos="fade-up" className="bg-[#eef2fe] hover:bg-blue-700 hover:text-white transition rounded-lg shadow-md p-8">
          <a href="mailto:test@gmail.com">
            <FaEnvelope className="mx-auto text-5xl text-blue-500 mb-4" />
            <h3 className='mb-5'>البريد الإلكتروني</h3>
            <p>test@gmail.com</p>
          </a>
        </div>
        <div data-aos="fade-right" className="bg-[#eef2fe] hover:bg-blue-700 hover:text-white transition rounded-lg shadow-md p-8">
          <a href="https://maps.app.goo.gl/DFvLRCr4b7Tamvwq5" title="عنوان كلية التربية النوعية">
            <FaMapMarkerAlt className="mx-auto text-5xl text-yellow-500 mb-4" />
            <h3 className='mb-5'>العنوان</h3>
            <p>كلية التربية النوعية جامعة المنصورة</p>
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-4xl gap-8">
        <form data-aos="fade-left" data-aos-delay="500" action="" className='w-full lg:w-1/2 p-5 flex flex-col'>
          <label htmlFor="theName">
            اسمك
          </label>
          <input  required  type="text" placeholder='' className='w-full px-2 border h-10 rounded-md my-3' name='theName' id='theName'  />
          <label htmlFor="theEmail">بريدك الإلكتروني</label>
          <input  required  type="email" className='w-full px-2 border h-10 rounded-md my-3' name='theEmail' id='theEmail'  />
          <label htmlFor="fone">رقم هاتفك</label>
          <input   required type="tel" className='w-full px-2 border h-10 rounded-md my-3' name='fone' id='fone'  />
          <label htmlFor="message">رسالتك</label>
          <textarea required   name="message" id='message' className='w-full px-2 border h-20 rounded-md my-3' ></textarea>
          <button type="submit" className='w-full p-2 border border-yellow-600 hover:bg-transparent transition hover:text-yellow-600 bg-yellow-600 text-white'>إرسال</button>
        </form>
        <div  data-aos="flip-left" data-aos-delay="1000"	 className="map w-full lg:w-1/2  rounded-xl overflow-hidden p-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.6629820214534!2d31.38438622347607!3d31.035638070928893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db6a0b2c3b7%3A0x16757b4ad51e32a9!2z2YPZhNmK2Kkg2KfZhNiq2LHYqNmK2Kkg2KfZhNmG2YjYudmK2Kkg2KzYp9mF2LnYqSDYp9mE2YXZhti12YjYsdip!5e0!3m2!1sar!2seg!4v1731944030663!5m2!1sar!2seg"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
