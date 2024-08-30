"use client"; // Add this to mark the component as a Client Component

import { Button } from "@/ui/button";
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const EmailForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [agreeToContact, setAgreeToContact] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeToContact(e.target.checked);
  };

  const validateForm = () => {
    const newErrors = [];
    if (!formData.firstName) newErrors.push(t('First Name is required.'));
    if (!formData.lastName) newErrors.push(t('Last Name is required.'));
    if (!formData.email) newErrors.push(t('Email is required.'));
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.push(t('Email format is invalid.'));
    if (!formData.message) newErrors.push(t('Message is required.'));
    if (!agreeToContact) newErrors.push(t('You must agree to be contacted.'));
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setErrors([]);

    if (!validateForm()) return;

    try {
      const response = await axios.post('/api/send-email', formData);
      if (response.status === 200) {
        setStatus(t('Email sent successfully!'));
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setAgreeToContact(false);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus(t('Failed to send email. Please try again later.'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <label htmlFor="firstName" className="block text-sm">
            {t('First Name')}
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full border-b border-gray-500 bg-transparent p-2"
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastName" className="block text-sm">
            {t('Last Name')}
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full border-b border-gray-500 bg-transparent p-2"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm">
          {t('Email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-500 bg-transparent p-2"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm">
          {t('Message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-500 bg-transparent p-2"
          rows={4}
          required
        ></textarea>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="agreeToContact"
          checked={agreeToContact}
          onChange={handleCheckboxChange}
          className="mr-2"
          required
        />
        <label htmlFor="agreeToContact" className="text-sm">
          {t('I agree to be contacted by Diverse Visa')}
        </label>
      </div>
      <Button
        className="w-full bg-customblue py-2 text-lg text-white font-bold hover:bg-custombluehover"
        size="lg"
        type="submit"
      >
        {t('SEND')}
      </Button>
      {status && <p className="mt-4 text-center">{status}</p>}
      {errors.length > 0 && (
        <ul className="mt-4 text-red-600">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </form>
  );
};
