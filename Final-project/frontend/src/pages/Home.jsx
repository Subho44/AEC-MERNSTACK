import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/api";
import JobForm from "../components/Jobform";
import JobCard from "../components/Jobcard";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // for edit
  const [selectedJob, setSelectedJob] = useState(null);

  // message
  const [msg, setMsg] = useState("");

  // ✅ Fetch jobs
  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/jobs");
      setJobs(res.data);
    } catch (err) {
      setMsg(err?.response?.data?.message || "❌ Failed to fetch jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // ✅ Add / Update job (same handler)
  const handleSubmit = async (form, logoFile) => {
    try {
      setMsg("");

      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("company", form.company);
      fd.append("location", form.location);
      fd.append("salary", form.salary);
      fd.append("description", form.description);

      // file only if selected
      if (logoFile) fd.append("logo", logoFile);

      if (selectedJob) {
        // UPDATE
        await api.put(`/api/jobs/${selectedJob._id}`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setMsg("✅ Job updated successfully");
        setSelectedJob(null);
      } else {
        // CREATE
        await api.post("/api/jobs", fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setMsg("✅ Job added successfully");
      }

      fetchJobs();
    } catch (err) {
      setMsg(err?.response?.data?.message || "❌ Something went wrong");
    }
  };

  // ✅ Delete job
  const handleDelete = async (id) => {
    const ok = confirm("Are you sure you want to delete this job?");
    if (!ok) return;

    try {
      setMsg("");
      await api.delete(`/api/jobs/${id}`);
      setMsg("🗑️ Job deleted successfully");

      // if currently editing the same job, cancel edit
      if (selectedJob?._id === id) setSelectedJob(null);

      fetchJobs();
    } catch (err) {
      setMsg(err?.response?.data?.message || "❌ Delete failed");
    }
  };

  // ✅ Edit job
  const handleEdit = (job) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Cancel edit
  const cancelEdit = () => setSelectedJob(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: FORM */}
        <div className="lg:col-span-1">
          <JobForm
            selectedJob={selectedJob}
            onSubmit={handleSubmit}
            onCancel={cancelEdit}
          />

          {/* Message box */}
          {msg ? (
            <div className="mt-3 rounded-2xl border bg-white p-3 text-sm text-gray-700">
              {msg}
            </div>
          ) : null}
        </div>

        {/* RIGHT: LIST */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-900">
              All Jobs <span className="text-gray-500">({jobs.length})</span>
            </h2>

            <button
              onClick={fetchJobs}
              className="px-3 py-2 rounded-xl border text-sm hover:bg-gray-50"
              type="button"
            >
              🔄 Refresh
            </button>
          </div>

          {loading ? (
            <div className="rounded-2xl border bg-white p-6 text-gray-600">
              Loading jobs...
            </div>
          ) : jobs.length === 0 ? (
            <div className="rounded-2xl border bg-white p-6 text-gray-500">
              No jobs found. Add your first job.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {jobs.map((job) => (
                <JobCard
                  key={job._id}
                  job={job}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}