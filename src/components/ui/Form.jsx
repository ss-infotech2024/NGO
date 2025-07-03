import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "./your-form-components-path"; // Adjust path accordingly

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzxUmGUdyK41sqtPhoqaHVza3hNjQG7uL-sRaCtC89Y0jmumvZRlZiYf6BbRiYhwTHQKg/exec";

export default function NGOForm() {
  const methods = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    const body = new URLSearchParams({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone || "",
      subject: data.subject,
      message: data.message,
    }).toString();

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (res.ok) {
        setSuccessMessage("Form submitted successfully!");
        methods.reset();
      } else {
        setSuccessMessage("Failed to submit form. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("Error submitting form. Please try again.");
      console.error(error);
    }
  };

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        {successMessage && (
          <p className="text-green-600 font-medium">{successMessage}</p>
        )}

        <FormField
          control={methods.control}
          name="firstName"
          rules={{ required: "First name is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <input {...field} placeholder="Enter your first name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Remaining fields same as your original code */}

        <FormField
          control={methods.control}
          name="lastName"
          rules={{ required: "Last name is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <input {...field} placeholder="Enter your last name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={methods.control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <input type="email" {...field} placeholder="Enter your email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={methods.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (Optional)</FormLabel>
              <FormControl>
                <input type="tel" {...field} placeholder="Enter your phone number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={methods.control}
          name="subject"
          rules={{ required: "Subject is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <select {...field}>
                  <option value="">Select a subject</option>
                  <option value="Support">Support</option>
                  <option value="Donation">Donation</option>
                  <option value="Volunteer">Volunteer</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={methods.control}
          name="message"
          rules={{ required: "Message is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <textarea {...field} placeholder="Your message" rows={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </Form>
  );
}
