import React from "react";
import Container from "./Container";

function About() {
  return (
    <div id="about">
      <h2 className="text-4xl text-center text-green-900 font-semibold pt-6">
        About Us
      </h2>
      <Container className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3">
          <section className="md:pr-6">
            <p className="pt-0 xl:pt-20">
              <span className="ml-6 text-lg font-semibold">TANI DAN WARGA</span>{" "}
              didirikan dengan tujuan utama untuk mengatasi masalah maraknya
              mafia bahan pangan di Indonesia. Didirikan pada tahun 2024,
              perusahaan ini bertujuan untuk menyediakan platform yang
              memungkinkan para petani dan warga dapat bertransaksi langsung
              tanpa perantara yang tidak perlu.
            </p>
            <p className=" pt-3">
              <span className="ml-6 text-lg font-semibold">TANI DAN WARGA</span>{" "}
              berkomitmen untuk mengubah lanskap perdagangan bahan pangan di
              Indonesia, memastikan kesejahteraan petani, dan memberikan
              keamanan pangan yang lebih besar bagi masyarakat luas.
            </p>
          </section>
          <img
            src="https://agrisustineri.org/wp-content/uploads/2022/05/Peluang-Petani-Muda-Milenial-Di-Masa-Sekarang.jpg"
            alt="gambar2"
            className="rounded-lg shadow-lg h-80 md:h-auto object-cover"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 lg:hidden ">
          <img
            src="https://static.prindonesia.co.id/upload/20210718112806agrojabar.jpg"
            alt="gambar3"
            className="rounded-lg shadow-lg h-80 md:h-auto object-cover"
          />
          <section className="md:pl-6 lg:hidden">
            <p>
              <span className="ml-6 text-lg font-semibold">Website</span> ini
              bertujuan untuk menjadi platform yang menghubungkan langsung
              antara para petani dan warga. Melalui platform ini, petani dapat
              menawarkan produk mereka secara langsung kepada konsumen tanpa
              melalui perantara yang dapat menambahkan biaya dan mengurangi
              keuntungan petani. Kami ingin memastikan bahwa setiap transaksi
              dilakukan dengan jujur dan transparan, memungkinkan warga untuk
              mendapatkan bahan pangan berkualitas langsung dari sumbernya.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}

export default About;
