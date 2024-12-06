import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import "./contact.css"

// إنشاء مخطط التحقق من البيانات باستخدام Yup
const validationSchema = Yup.object({
  theName: Yup.string().required('مطلوب'),
  theEmail: Yup.string().email('بريد إلكتروني غير صالح').required('مطلوب'),
  fone: Yup.string().required('مطلوب'),
  userRole: Yup.string().required('مطلوب'),
  message: Yup.string().required('مطلوب')
});

const Contact = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    emailjs.send(
      'service_5cu8cxa', 
      'template_ocab4g7',
      values,
      'DRFRZSyaV8acVdrmw'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitting(false);
        resetForm(); // لإعادة تعيين النموذج بعد الإرسال الناجح
        setSubmitSuccess(true); // تحديث حالة نجاح الإرسال
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setSubmitting(false);
        setSubmitSuccess(false); 
      });
  };

  return (
    <div className="contactUs overflow-hidden container flex flex-col justify-center items-center min-h-screen mx-auto p-4">
      <div className="header_sec_title relative header-cont mt-32 mb-10 text-center">
        <h2 className="w-max relative mx-auto text-5xl font-bold mb-8">تواصل <span className='z-10 relative'>معنا</span></h2>
        <p>لا تتردد في الاتصال بنا. قم بإرسال استفساراتك هنا وسنقوم بالرد عليك في أقرب وقت ممكن.</p>
      </div>

      <div className="order-3 mt-5 lg:order-none grid grid-cols-1 text-center md:grid-cols-3 gap-8 w-full max-w-4xl mb-8">
        <div data-aos="fade-left" className="bg-[#eef2fe] hover:bg-blue-700 hover:text-white transition rounded-lg shadow-md p-8">
          <a href="tel:+20 109 353 6351">
            <FaPhoneAlt className="mx-auto text-5xl text-green-500 mb-4" />
            <h3 className='mb-5'>رقم التواصل</h3>
            <p style={{direction:"ltr"}}>+20 109 353 6351</p>
          </a>
        </div>
        <div data-aos="fade-up" className="bg-[#eef2fe] hover:bg-blue-700 hover:text-white transition rounded-lg shadow-md p-8">
          <a href="mailto:Uashgan@gmail.com">
            <FaEnvelope className="mx-auto text-5xl text-blue-500 mb-4" />
            <h3 className='mb-5'>البريد الإلكتروني</h3>
            <p>Uashgan@gmail.com</p>
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
        <Formik
          initialValues={{ theName: '', theEmail: '', fone: '', userRole: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form data-aos="fade-left" data-aos-delay="500" className='w-full lg:w-1/2 p-5 flex flex-col'>
              <label htmlFor="theName">اسمك</label>
              <Field type="text" name="theName" className='w-full px-2 border h-10 rounded-md my-3' />
              <ErrorMessage name="theName" component="div" className='text-red-500' />

              <label htmlFor="theEmail">بريدك الإلكتروني</label>
              <Field type="email" name="theEmail" className='w-full px-2 border h-10 rounded-md my-3' />
              <ErrorMessage name="theEmail" component="div" className='text-red-500' />

              <label htmlFor="fone">رقم هاتفك</label>
              <Field type="tel" name="fone" className='w-full px-2 border h-10 rounded-md my-3' />
              <ErrorMessage name="fone" component="div" className='text-red-500' />

              <label htmlFor="userRole">صفتك</label>
              <div className='flex items-center my-3'>
                <Field type="radio" name="userRole" value="هو" className='mr-2' />
                <label htmlFor="userRole" className='mr-2'>هو</label>
                <Field type="radio" name="userRole" value="هي" className='mr-2' />
                <label htmlFor="userRole" className='mr-2'>هي</label>
              </div>
              <ErrorMessage name="userRole" component="div" className='text-red-500' />

              <label htmlFor="message">رسالتك</label>
              <Field as="textarea" name="message" className='w-full px-2 border h-20 rounded-md my-3' />
              <ErrorMessage name="message" component="div" className='text-red-500' />

              <button type="submit" className='w-full p-2 border border-yellow-600 hover:bg-transparent transition hover:text-yellow-600 bg-yellow-600 text-white' disabled={isSubmitting}>
                إرسال
              </button>
              {submitSuccess && (
                <p className='text-green-500 mt-4'>تم إرسال الرسالة بنجاح!</p>
              )}
            </Form>
          )}
        </Formik>
        <div data-aos="flip-left" data-aos-delay="1000" className="map w-full lg:w-1/2 rounded-xl overflow-hidden p-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.6629820214534!2d31.38438622347607!3d31.035638070928893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db6a0b2c3b7%3A0x16757b4ad51e32a9!2z2YPZhNmK2Kkg2KfZhNiq2LHYqNmK2Kkg2KfZhNmG2YjYudmK2Kkg2KzYp9mF2LnYqSDYp9mE2YXZhti12YjYsdip!5e0!3m2!1sar!2seg!4v1731944030663!5m2!1sar!2seg"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
