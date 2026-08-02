import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function ContactInfo() {
  return (
    <div className="rounded-lg bg-gray-50 p-8 shadow-sm">
      
      <h2 className="text-2xl font-bold text-gray-900">
        Contact Information
      </h2>

      <p className="mt-4 leading-relaxed text-gray-700">
        Reach out to the NewsPulse team for news tips,
        feedback, and inquiries.
      </p>


      <div className="mt-6 space-y-5 text-gray-800">

        <div className="flex items-center gap-3">
          <FiMapPin className="text-xl text-red-600" />

          <p>
            <span className="font-semibold text-gray-900">
              Address:
            </span>{" "}
            Kathmandu, Nepal
          </p>
        </div>


        <div className="flex items-center gap-3">
          <FiMail className="text-xl text-red-600" />

          <p>
            <span className="font-semibold text-gray-900">
              Email:
            </span>{" "}
            contact@newspulse.com
          </p>
        </div>


        <div className="flex items-center gap-3">
          <FiPhone className="text-xl text-red-600" />

          <p>
            <span className="font-semibold text-gray-900">
              Phone:
            </span>{" "}
            +977 9800000000
          </p>
        </div>

      </div>

    </div>
  );
}