import React, { Component } from "react";
import Judo from '../img/judo1.png';

class IntroCard extends Component {
  render() {
    return (
     <div className="row">
       <div className="col-md-6 col-xs-12 first">
        <img src={ Judo } alt="judo" />
       </div>
       <div className="col-md-6 col-xs-12">
         <div className="intro-card">
          <div className="card">
            <div className="card-header">
              <h3>Judo</h3>
            </div>
            <div className="card-body">
              <p>
                Judo (bahasa Jepang: 柔道 ) adalah seni bela diri, olahraga, dan filosofi yang berakar dari Jepang. Judo dikembangkan dari seni bela diri kuno Jepang yang disebut Jujutsu. Jujutsu yang merupakan seni bertahan dan menyerang menggunakan tangan kosong maupun senjata pendek, dikembangkan menjadi Judo oleh Kano Jigoro (嘉納治五郎) pada 1882. Olahraga ini menjadi model dari seni bela diri Jepang, gendai budo, dikembangkan dari sekolah (koryu) tua. Pemain judo disebut judoka atau pejudo. Judo sekarang merupakan sebuah cabang bela diri yang populer, bahkan telah menjadi cabang olahraga resmi Olimpiade.

                <sup className="text-muted"><a href="https://id.wikipedia.org/wiki/Judo">wikipedia</a></sup>
              </p>
            </div>
          </div>
         </div>
       </div>
     </div>
    );
  }
}

export default IntroCard;