import React, { Component } from "react"; 

import Judo from '../img/judo2.png';

class Belts extends Component {
  render() {
    return (
     <div className="bg-danger second">
       <div className="row">
           <div className="col-md-8 col-xs-12">
                <div className="card">
                    <div className="card-header">
                        Kurikulum
                    </div>
                    <div className="card-body">
                        <p>
                        Teknik bantingan judo (<i>nage waza</i>) dapat dibagi menjadi teknik berdiri (<i>tachi waza</i>) dan teknik menjatuhkan diri (sutemi waza). Teknik berdiri dibagi lagi menjadi teknik tangan (te waza), teknik pangkal paha (<i>koshi waza</i>), dan teknik kaki (<i>ashi waza</i>). Teknik menjatuhkan diri dibagi lagi menjadi teknik menjatuhkan diri ke belakang (<i>mae sutemi waza</i>) dan teknik menjatuhkan diri ke samping (<i>yoko sutemi waza</i>)

                        <br />
                        <br />

                        Teknik kuncian judo (<i>katame waza</i>) dapat dibagi menjadi teknik menahan (<i>osae waza</i> atau <i>osaekomi waza</i>), teknik jepit (<i>shime waza</i>), dan teknik sambungan (kansetsu waza)

                        <br />
                        <br />

                        Teknik menyerang (<i>atemi waza</i>) dengan tendangan atau pukulan bahkan dengan senjata pisau atau pedang kadang digunakan untuk latihan bagi judoka tingkatan tinggi, walaupun dalam pertandingan resmi hal tersebut dilarang (demikian pula pada saat latihan bebas (<i>randori</i>)

                        <br />
                        <br />
                        
                        <h6>Teknik bantingan (teknik berdiri)</h6>
                        <ol>
                            <li>Sapuan lutut - <i>hiza guruma</i></li>
                            <li>Jegal dari belakang - <i>o soto gari</i></li>
                            <li>Jegal dari depan - <i>'ko uchi gari</i></li>
                            <li>Sapuan samping - <i>deashi barai</i></li>
                            <li>Bantingan paha - <i>uchi mata</i></li>
                            <li>Bantingan pangkal paha memutar - <i>o goshi</i></li>
                            <li>Bantingan pangkal paha angkat - <i>surikomi goshi</i></li>
                            <li>Bantingan pangkal paha sapuan - <i>harai goshi</i></li>
                            <li>Lemparan bahu - <i>seoi nage</i></li>
                            <li>Menjatuhkan tubuh - <i>tai otoshi</i></li>
                            <li>Lemparan guling belakang - <i>omoe nage</i></li>
                        </ol>

                        <h6>Teknik kuncian (teknik berbaring)</h6>
                        Teknik kuncian (<i>katame waza</i>) disebut juga teknik berbaring (ne waza) karena teknik ini dilakukan ketika seorang judoka atau lawannya berbaring menghadap ke atas atau ke bawah.

                        <ol>
                            <li>Kuncian pinggang - <i>kesa gatame</i></li>
                            <li>Kuncian bahu - <i>kata gatame</i></li>
                            <li>Kuncian empat sisi - <i>yoko shiho gatame</i></li>
                            <li>Kuncian empat sisi atas - <i>kami shiho gatame</i></li>
                            <li>Kuncian belakang - <i>kataha jime</i></li>
                            <li>Kuncian kalung - <i>okuri eri jime</i></li>
                            <li>Kuncian tangan - <i>ude garami</i></li>
                            <li>Kuncian tangan silang - <i>ude hishigi juji gatame</i></li>
                        </ol>
                        </p>
                    </div>
                </div>
           </div>

            <div className="col-md-4 third">
                <img src={ Judo } alt="judo-img" />
            </div>

       </div>
     </div>
    );
  }
}

export default Belts;