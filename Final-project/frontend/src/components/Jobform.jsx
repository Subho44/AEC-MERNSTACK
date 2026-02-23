import React, { useEffect, useState } from "react";

const emptyForm = {
  title: "",
  company: "",
  location: "",
  salary: "",
  description: "",
};

export default function JobForm({ selectedJob, onSubmit, onCancel }) {
  const [form, setForm] = useState(emptyForm);
  const [logoFile, setLogoFile] = useState(null);

  // ✅ Prefill form when Edit is clicked
  useEffect(() => {
    if (selectedJob) {
      setForm({
        title: selectedJob.title || "",
        company: selectedJob.company || "",
        location: selectedJob.location || "",
        salary: selectedJob.salary || "",
        description: selectedJob.description || "",
      });
      setLogoFile(null); // new file optional during update
    } else {
      setForm(emptyForm);
      setLogoFile(null);
    }
  }, [selectedJob]);

  // ✅ input change
  const hc = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ file change
  const hf = (e) => {
    const file = e.target.files && e.target.files[0];
    setLogoFile(file || null);
  };

  // ✅ submit
  const hs = (e) => {
    e.preventDefault();
    onSubmit(form, logoFile);
  };

  // ✅ reset
  const handleReset = () => {
    setForm(emptyForm);
    setLogoFile(null);
    if (selectedJob) onCancel?.(); // if editing, reset also cancels edit
  };

  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="font-semibold text-gray-900">
          {selectedJob ? "✅ Update Job" : "➕ Add New Job"}
        </h2>

        {selectedJob ? (
          <button
            type="button"
            onClick={onCancel}
            className="text-sm px-3 py-1.5 rounded-xl border hover:bg-gray-50"
          >
            ❌ Cancel Edit
          </button>
        ) : null}
      </div>

      {/* Form */}
      <form onSubmit={hs} className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Title */}
        <div>
          <label className="text-sm text-gray-600">Job Title *</label>
          <input
            name="title"
            value={form.title}
            onChange={hc}
            placeholder="MERN Developer"
            required
            className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Company */}
        <div>
          <label className="text-sm text-gray-600">Company *</label>
          <input
            name="company"
            value={form.company}
            onChange={hc}
            placeholder="Google"
            required
            className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Location */}
        <div>
          <label className="text-sm text-gray-600">Location *</label>
          <input
            name="location"
            value={form.location}
            onChange={hc}
            placeholder="Remote / Kolkata"
            required
            className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Salary */}
        <div>
          <label className="text-sm text-gray-600">Salary</label>
          <input
            name="salary"
            value={form.salary}
            onChange={hc}
            placeholder="8 LPA"
            className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="text-sm text-gray-600">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={hc}
            placeholder="Write job details..."
            rows={3}
            className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Logo Upload */}
        <div className="md:col-span-2">
          <label className="text-sm text-gray-600">
            Company Logo {selectedJob ? "(optional for update)" : ""}
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={hf}
            className="mt-1 w-full rounded-xl border px-3 py-2 bg-white"
          />

          {logoFile ? (
            <p className="text-xs text-gray-500 mt-1">
              Selected: <span className="font-semibold">{logoFile.name}</span>
            </p>
          ) : (
            selectedJob?.logo ? (
              <p className="text-xs text-gray-500 mt-1">
                Current logo exists (upload new one to replace)
              </p>
            ) : null
          )}
        </div>

        {/* Buttons */}
        <div className="md:col-span-2 flex gap-2">
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-black text-white hover:opacity-90"
          >
            {selectedJob ? "✅ Update Job" : "➕ Add Job"}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 rounded-xl border hover:bg-gray-50"
          >
            🔄 Reset
          </button>
        </div>
      </form>
    </div>
  );
}