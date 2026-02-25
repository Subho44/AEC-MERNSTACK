import React from "react";
import { imageUrl } from "../api/api";

export default function JobCard({ job, onEdit, onDelete,onSubscribe }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="p-4 flex gap-4">
        {/* Logo */}
        <div className="h-14 w-14 shrink-0 rounded-xl border bg-gray-50 overflow-hidden flex items-center justify-center">
          {job.logo ? (
            <img
              src={imageUrl(job.logo)}
              alt="logo"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-[11px] text-gray-400">No Logo</span>
          )}
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-base font-semibold text-gray-900 truncate">
                {job.title}
              </h2>
              <p className="text-sm text-gray-600 truncate">
                {job.company} • {job.location}
              </p>
            </div>

            {job.salary ? (
              <div className="text-xs font-semibold rounded-full bg-gray-100 px-2 py-1 shrink-0">
                {job.salary}
              </div>
            ) : null}
          </div>

          {/* Description */}
          {job.description ? (
            <p className="mt-2 text-sm text-gray-700 line-clamp-2">
              {job.description}
            </p>
          ) : (
            <p className="mt-2 text-sm text-gray-400 italic">
              No description
            </p>
          )}

          {/* Buttons */}
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => onEdit(job)}
              className="px-3 py-2 rounded-xl border text-sm hover:bg-gray-50"
            >
              ✏️ Edit
            </button>

            <button
              type="button"
              onClick={() => onDelete(job._id)}
              className="px-3 py-2 rounded-xl border text-sm text-red-600 hover:bg-red-50"
            >
              🗑️ Delete
            </button>
            <button
              type="button"
              onClick={() => onSubscribe(job)}
              className="px-3 py-2 rounded-xl border text-sm text-red-600 hover:bg-red-50"
            >
             Subscribe $199
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 text-xs text-gray-500 border-t bg-gray-50">
        {job.createdAt ? `Created: ${new Date(job.createdAt).toLocaleString()}` : "—"}
      </div>
    </div>
  );
}