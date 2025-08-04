'use client';

import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { getDataAPI } from '../lib/getDataAPI';

export default function Footer() {
  const [footer, setFooter] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');

  const getFooterData = async () => {
    try {
      const { fotdata } = await getDataAPI();
      setFooter(fotdata);
      setLoading(false);
    } catch (err) {
      setError('Failed to load footer data');
      setLoading(false);
    }
  };

  useEffect(() => {
    getFooterData();
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Placeholder for email submission logic (e.g., API call)
    console.log('Email submitted:', email);
    setEmail(''); // Reset input after submission
  };

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-5 text-danger">{error}</div>;
  }

  return (
    <div className="container-fluid footer bg-dark text-white py-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="f-image mb-3">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  height={100}
                  width={100}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="f-title">
                <p className="text-light">{footer.paragraph || 'No description available'}</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="mb-3">
                <span>Location</span>
              </h3>
              <p className="text-light">{footer.location || 'No location available'}</p>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
              <h3 className="mb-3">
                <span>Links</span>
              </h3>
              <ul className="list-unstyled">
                {footer.Link && footer.Link.length > 0 ? (
                  footer.Link.map((link, index) => (
                    <li key={index}>
                      <a href="/" className="text-light text-decoration-none">
                        {link}
                      </a>
                    </li>
                  ))
                ) : (
                  <li>No links available</li>
                )}
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="mb-3">
                <span>Contact</span>
              </h3>
              <form onSubmit={handleEmailSubmit}>
                <label htmlFor="exampleInputEmail1" className="form-label text-light">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text text-light">
                  We'll never share your email with anyone else.
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
              </form>
              <div className="f-icon mt-4">
                <ul className="list-unstyled d-flex gap-3">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light"
                      aria-label="Facebook"
                    >
                      <FaFacebook size={24} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light"
                      aria-label="Twitter"
                    >
                      <FaTwitterSquare size={24} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light"
                      aria-label="Instagram"
                    >
                      <FaInstagramSquare size={24} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center mt-4">
          <p className="cpright mb-0">{footer.copy_right}</p>
        </div>
      </div>
    </div>
  );
}