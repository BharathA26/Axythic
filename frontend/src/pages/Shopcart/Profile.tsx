import {
  User,
  MapPin,
  Mail,
  Phone,
  Edit3,
  Camera,
  ShieldCheck,
} from "lucide-react";
import type { View } from "./types";

interface ProfileProps {
  onNavigate: (view: View) => void;
}

export default function Profile({ onNavigate }: ProfileProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-extrabold text-gray-900">My Profile</h1>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="h-28 bg-gradient-to-r from-[#1a3c34] to-[#0f241f]" />
          <div className="px-6 pb-6">
            <div className="flex items-end gap-4 mb-5 px-2">
              <div className="relative -mt-10">
                <div className="w-20 h-20 rounded-2xl bg-[#1a3c34] border-4 border-white flex items-center justify-center text-white font-extrabold text-3xl shadow-lg">
                  A
                </div>
                <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#1a3c34] rounded-full flex items-center justify-center border-2 border-white">
                  <Camera className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
              <div className="pb-1">
                <h2 className="text-xl font-extrabold text-gray-900">
                  Alex Johnson
                </h2>
                <p className="text-sm text-gray-400">
                  Premium Member · Joined March 2024
                </p>
              </div>
              <button className="ml-auto flex items-center gap-2 text-sm font-bold text-[#1a3c34] border border-[#1a3c34] px-4 py-2 rounded-xl hover:bg-green-50 transition-colors">
                <Edit3 className="w-4 h-4" /> Edit Profile
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: "Total Orders", value: "16" },
                { label: "Wishlist Items", value: "5" },
                { label: "Reviews Given", value: "9" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center bg-gray-50 rounded-xl p-4"
                >
                  <p className="text-2xl font-extrabold text-[#1a3c34]">
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <h3 className="font-extrabold text-gray-800 mb-2">
              Personal Information
            </h3>
            {[
              { Icon: User, label: "Full Name", value: "Alex Johnson" },
              { Icon: Mail, label: "Email", value: "alex@shopcart.com" },
              { Icon: Phone, label: "Phone", value: "+1 (555) 012-3456" },
              { Icon: MapPin, label: "Location", value: "New York, NY, USA" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">{label}</p>
                  <p className="text-sm font-bold text-gray-800">{value}</p>
                </div>
                <button className="ml-auto text-xs text-[#1a3c34] font-semibold hover:underline">
                  Edit
                </button>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {/* Security */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-[#1a3c34]" />
                <h3 className="font-extrabold text-gray-800">Security</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Password", value: "Last changed 30 days ago" },
                  {
                    label: "Two-Factor Auth",
                    value: "Enabled via Authenticator",
                  },
                  { label: "Login Sessions", value: "2 active devices" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0"
                  >
                    <div>
                      <p className="text-sm font-bold text-gray-800">
                        {row.label}
                      </p>
                      <p className="text-xs text-gray-400">{row.value}</p>
                    </div>
                    <button className="text-xs text-[#1a3c34] font-bold hover:underline">
                      Manage
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Default Address */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-extrabold text-gray-800">
                  Default Address
                </h3>
                <button className="text-xs text-[#1a3c34] font-bold hover:underline">
                  Change
                </button>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 leading-relaxed">
                <p className="font-bold text-gray-800">Alex Johnson</p>
                <p>123 Main Street, Apt 4B</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => onNavigate("orders")}
            className="flex-1 bg-[#1a3c34] text-white font-bold py-3 rounded-xl hover:bg-[#16342e] transition-colors"
          >
            View My Orders
          </button>
          <button
            onClick={() => onNavigate("wishlist")}
            className="flex-1 border-2 border-[#1a3c34] text-[#1a3c34] font-bold py-3 rounded-xl hover:bg-green-50 transition-colors"
          >
            View Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
