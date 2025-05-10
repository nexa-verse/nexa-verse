'use client'
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    industry: [],
    message: '',
    otherIndustry: '',
  });

  const industries = [
    'budownictwo',
    'handel (hurtowy i detaliczny)',
    'energetyka',
    'edukacja',
    'IT i technologia',
    'transport/logistyka',
    'usługi profesjonalne',
    'przemysł/produkcja',
    'opieka zdrowotna',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        industry: checked
          ? [...prev.industry, value]
          : prev.industry.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    industry: [],
    message: '',
    otherIndustry: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form" netlify>
      <h2>📩 Czekamy na Twoją wiadomość!</h2>
      <div className="form-section">
        <div className="personal-data">
          <h3>Dane osobowe</h3>
          <label>
            Podaj Twoje imię i nazwisko*
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Podaj Twój numer telefonu
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Podaj Twój adres email*
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="company-data">
          <h3>Dane Twojej firmy</h3>
          <label>
            Podaj nazwę Twojej firmy*
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </label>
          <fieldset>
            <legend>Zaznacz branżę w której działa Twoja firma*</legend>
            {industries.map((industry) => (
              <label key={industry}>
                <input
                  type="checkbox"
                  name="industry"
                  value={industry}
                  checked={formData.industry.includes(industry)}
                  onChange={handleChange}
                />
                {industry}
              </label>
            ))}
            <label>
              inne:
              <input
                type="text"
                name="otherIndustry"
                value={formData.otherIndustry}
                onChange={handleChange}
              />
            </label>
          </fieldset>
        </div>
      </div>
      <label>
        Napisz treść wiadomości...
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Skontaktuj się z nami!</button>
    </form>
  );
};

export default ContactForm;