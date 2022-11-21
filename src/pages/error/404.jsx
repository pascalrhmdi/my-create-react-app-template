import React from "react";
import { Link } from "react-router-dom";
import "./404.css";

export default function NotFound() {
  return (
    <section className="page_404 vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="col-sm-10 offset-sm-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Sepertinya Anda Terzezatz Yhh!</h3>
                <p>Sini sama Om, Om tuntun ke jalan yang benar. Klik tombol dibawah ini ya!</p>
                <Link to="/" className="btn btn-primary-app">
                  Pulank Ke Rumah Om
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
