import React, { useState } from "react";

// Dummy UI components: replace these with your actual UI imports
const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block font-medium text-gray-700">
    {children}
  </label>
);
const Input = (props) => (
  <input
    {...props}
    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
  />
);
const Textarea = (props) => (
  <textarea
    {...props}
    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
  />
);
const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg flex items-center justify-center gap-2 rounded"
  >
    {children}
  </button>
);

// Simple Select component using native select element
const Select = ({ value, onChange, children, required }) => (
  <select
    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    required={required}
  >
    <option value="" disabled>
      Select a subject
    </option>
    {children}
  </select>
);

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h11M14 10l7 7m0 0l-7-7m7 7v-7"
    />
  </svg>
);

const FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzxUmGUdyK41sqtPhoqaHVza3hNjQG7uL-sRaCtC89Y0jmumvZRlZiYf6BbRiYhwTHQKg/exec";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg(null);

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        setResponseMsg("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setResponseMsg("Failed to send message. Please try again.");
      }
    } catch {
      setResponseMsg("Error sending message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            placeholder="Enter your first name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Enter your last name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Select
          value={formData.subject}
          onChange={handleSelectChange}
          required
        >
          <option value="general">General Inquiry</option>
          <option value="support">Technical Support</option>
          <option value="partnership">Partnership</option>
          <option value="fundraiser">Start a Fundraiser</option>
          <option value="donation">Donation Help</option>
          <option value="media">Media Inquiry</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us how we can help you..."
          className="min-h-[120px]"
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" disabled={loading}>
        <SendIcon />
        {loading ? "Sending..." : "Send Message"}
      </Button>

      {responseMsg && (
        <p className="mt-4 text-center text-green-600 font-medium">
          {responseMsg}
        </p>
      )}
    </form>
  );
}
