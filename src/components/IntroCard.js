import React, { Component } from "react";
import Judo from '../img/judo1.png';

class IntroCard extends Component {
  render() {
    return (
     <div className="row">
       <div className="col-md-5 first hidden-xs hidden-sm">
        <img src={ Judo } alt="judo" width="150%" className="featured logo"/>
       </div>

       <div className="col-md-7 col-xs-12">

         <div className="intro-card">
          <div className="card">
            <div className="card-header">
              <h3>Judo</h3>
            </div>
            <div className="card-body">
              <p>
                <strong>Judo</strong> (bahasa Jepang: 柔道 ) adalah seni bela diri, olahraga, dan filosofi yang berakar dari Jepang. Judo dikembangkan dari seni bela diri kuno Jepang yang disebut <i>Jujutsu</i>. <i>Jujutsu</i> yang merupakan seni bertahan dan menyerang menggunakan tangan kosong maupun senjata pendek, dikembangkan menjadi Judo oleh Kano Jigoro (嘉納治五郎) pada 1882. Olahraga ini menjadi model dari seni bela diri Jepang, gendai budo, dikembangkan dari sekolah tua (koryu). Pemain judo disebut <i>judoka</i> atau <i>pejudo</i>. Judo sekarang merupakan sebuah cabang bela diri yang populer, bahkan telah menjadi cabang olahraga resmi Olimpiade.

                <br />
                <br />

                Judoka Indonesia bernaung di bawah PJSI (Persatuan Judo Seluruh Indonesia) yang bernaung di bawah KONI (Komite Olahraga Nasional Indonesia). Tokoh-tokoh Judo Indonesia antara lain Ferry Sonneville, pebulu tangkis yang aktif membidani lahirnya PJSI; Perry G. Pantouw, juara SEA Games 1983; Kresna Bayu, Maya Fransisca, Ira Purnamasari, Aprilia Marzuki, Peter Taslim, atlet judoka Indonesia.

                <br />
                <br />

                Pada tahun 1970-an dan 1980-an dikenal nama-nama atlet seperti Bambang Prakasa, Ceto Cosadek, Raymond Rochili dsb. Di bawah kepemimpinan Ir. Soehoed saat itu, Judo merintis didirikannya training center untuk pelatnas di Ciloto, Puncak, Jawa Barat. Saat itu di Jakarta sangat berkembang berbagai perguruan Judo, seperti misalnya Judo Waza di Jakarta Selatan (dipimpin oleh alm. Robert Judono/ Robert Jung), Perguruan Judo Tiang Bendera di Jakarta Utara, dan sebagainya.

                <sup className="text-muted"><a href="https://id.wikipedia.org/wiki/Judo">wikipedia</a></sup>
              </p>
            </div>
          </div>

          <div className="row">
              <div className="col-md-12">
                  <div className="text-center">
                      <h6>Keuntungan Judo:</h6>
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="col-md-4 col-xs-12 lower">
                <div className="card">
                    <div className="text-center">
                        <i className="fa fa-child fa-big text-info"></i>
                        <p className="desc">Kesehatan</p>
                    </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="card">
                    <div className="text-center">
                        <i className="fa fa-trophy fa-big text-warning"></i>
                        <p className="desc">Prestasi</p>
                    </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 lower">
                <div className="card">
                    <div className="text-center">
                        <i className="fa fa-shield fa-big text-danger"></i>
                        <p className="desc">Bela Diri</p>
                    </div>
                </div>
              </div>
          </div>
         </div>

       </div>

     </div>
    );
  }
}

export default IntroCard;