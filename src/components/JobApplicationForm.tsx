import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface JobApplicationFormProps {
  jobTitle: string;
  onClose: () => void;
}

// Temporary file storage service (replace with your preferred service)
const UPLOAD_URL = 'tmpfiles.org';

export default function JobApplicationForm({
  jobTitle,
  onClose,
}: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    resume: null as File | null,
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | '';
    message: string;
  }>({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const uploadFile = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload resume');
    }

    const data = await response.json();
    return data.url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      if (!formData.resume) {
        throw new Error('Please upload your resume');
      }

      // First, upload the resume file
      const fileUrl = await uploadFile(formData.resume);

      // Then send the application notification via EmailJS
      const templateParams = {
        job_title: jobTitle,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        resume_name: formData.resume.name,
        resume_url: fileUrl,
      };

      await emailjs.send(
        'service_62wq3qn',
        'template_gtgx6el',
        templateParams,
        'O3UTEkdxnZazWtF2E'
      );

      setStatus({
        type: 'success',
        message:
          'Thank you for your application! We will review it and get back to you soon.',
      });

      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again later.',
      });
      console.error('Application Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      const file = fileInput.files?.[0] || null;

      if (file && file.size > 10 * 1024 * 1024) {
        // 10MB limit
        setStatus({
          type: 'error',
          message: 'File is too large. Please upload a file smaller than 10MB.',
        });
        return;
      }

      setFormData((prev) => ({ ...prev, [name]: file }));
      setStatus({ type: '', message: '' });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Apply for {jobTitle}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700"
            >
              Experience
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              required
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g., 5 years in web development"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Resume (Max size: 10MB)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </div>

          {status.message && (
            <div
              className={`p-4 rounded-md ${
                status.type === 'success'
                  ? 'bg-green-50 text-green-800'
                  : 'bg-red-50 text-red-800'
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold
              ${
                isSubmitting
                  ? 'opacity-75 cursor-not-allowed'
                  : 'hover:bg-blue-700'
              } transition`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
}
