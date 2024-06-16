import React from "react";

const Contact = () => {
  return (
    <div
      className="mt-24 px-6 max-w-[1000px] mx-auto grid md:grid-cols-2 place-items-center"
      id="contact"
    >
      <div>
        <div className="text-gray-700 my-3 p-2">
          <h3 className="text-3xl font-semibold mb-5 text-primary-color">
            Bergabunglah Bersama <span className="text-gray-700">Kami</span>
          </h3>
          <p className="text-gray-700 font-bold text-justify leading-7">
            Tingkatkan kesejahteraan petani, dapatkan akses pangan segar dengan
            harga wajar!
          </p>

          <p className="text-gray-700 text-justify leading-7">
            <span className="font-bold">Memperpendek rantai pasokan:</span>
            Menghilangkan perantara yang tidak perlu, sehingga meningkatkan
            keuntungan bagi petani dan menurunkan harga bagi konsumen.
          </p>
        </div>
      </div>

      <form
        action="https://getform.io/f/warkmknb"
        method="POST"
        className="max-w-6xl p-5 md:p-12 bg-gray-100 rounded-lg shadow-md mb-8 mx-2"
      >
        <input
          type="text"
          id="name"
          placeholder="Your name ...."
          name="name"
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />

        <input
          type="email"
          id="email"
          placeholder="Your email ...."
          name="email"
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />

        <textarea
          type="textarea"
          id="textarea"
          cols="30"
          rows="4"
          placeholder="Your massage ...."
          className="mb-8 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-md text-white font-semibold text-xl bg-green-800 hover:bg-green-900"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
};

export default Contact;
