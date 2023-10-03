'use client'
import ViewDetectAnimation from '../../../components/animationComponents/viewDetectAnimation/ViewDetectAnimation';
import { useState } from 'react';

function QuoteForm() {
  const [loading, setloading] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectDetails, setProjectDetails] = useState('');


  const handleSubmit = (e: any) => {
    e.preventDefault();
    setloading(true)
    const url = "https://sendmessage-xnxe62iksa-uc.a.run.app"
    const data = { Name: name, Email: email, Phone: phone, ProjectDetails: projectDetails };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        alert(`Thank you for your message. It has been successfully reached to us. We will contact you shortly.`)
        setloading(false)
      })
      .catch(error => {
        alert(error);
      });
  }

  return (
    < section className=" text-black font-dancing">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      
          {loading ? (<div className='h-full '><div className=' h-full w-full transition animate-spin duration-500 flex justify-center items-center md:text-7xl text-4xl'> ⌛</div></div>) : (
            <div className="rounded-lg p-8  lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="sr-only " htmlFor="name">Name</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-base border-2"
                    placeholder="Name"
                    type="text"
                    id="name"
                    value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-base border-2"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      value={email} onChange={(e) => setEmail(e.target.value)} required/>
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-base border-2"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      value={phone} onChange={(e) => setPhone(e.target.value)} required
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">Message</label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-base border-2"
                    placeholder="Message"
                    rows={8}
                    id="message"
                    value={projectDetails} onChange={(e) => setProjectDetails(e.target.value)} required
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-md bg-slate-600 md:text-xl text-base hover:bg-red-950 transition duration-500 hover:scale-105  md:px-5 py-3 font-thin dark:text-white sm:w-auto">
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>)}
        </div>
      </div>
    </section >
  );
}
export default QuoteForm;
