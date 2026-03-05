import {
  User,
  Bell,
  Shield,
  CreditCard,
  Globe,
  Moon,
  Save,
} from "lucide-react";
import { useState } from "react";

type Tab = "profile" | "notifications" | "security" | "billing" | "preferences";

const tabs: { id: Tab; label: string; Icon: React.ElementType }[] = [
  { id: "profile", label: "Profile", Icon: User },
  { id: "notifications", label: "Notifications", Icon: Bell },
  { id: "security", label: "Security", Icon: Shield },
  { id: "billing", label: "Billing", Icon: CreditCard },
  { id: "preferences", label: "Preferences", Icon: Globe },
];

function Field({
  label,
  defaultValue,
  type = "text",
}: {
  label: string;
  defaultValue: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
      />
    </div>
  );
}

function Toggle({
  label,
  sub,
  defaultChecked,
}: {
  label: string;
  sub: string;
  defaultChecked?: boolean;
}) {
  const [on, setOn] = useState(defaultChecked ?? false);
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <div>
        <p className="text-sm font-medium text-gray-800">{label}</p>
        <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
      </div>
      <button
        onClick={() => setOn(!on)}
        className={`w-11 h-6 rounded-full transition-colors relative ${on ? "bg-blue-600" : "bg-gray-200"}`}
      >
        <span
          className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${on ? "right-1" : "left-1"}`}
        />
      </button>
    </div>
  );
}

export default function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-sm text-gray-500 mt-0.5">
          Manage your account and preferences
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tab Sidebar */}
        <div className="lg:w-56 bg-white rounded-2xl border border-gray-100 shadow-sm p-3 flex flex-col gap-1 h-fit">
          {tabs.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors w-full text-left ${
                activeTab === id
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
          {activeTab === "profile" && (
            <>
              <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl font-bold select-none">
                  A
                </div>
                <div>
                  <p className="font-bold text-gray-900">Alex Johnson</p>
                  <p className="text-sm text-gray-400">admin@axythicfin.com</p>
                </div>
                <button className="ml-auto text-sm text-blue-600 font-medium border border-blue-200 rounded-lg px-4 py-2 hover:bg-blue-50 transition-colors">
                  Change Photo
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="First Name" defaultValue="Alex" />
                <Field label="Last Name" defaultValue="Johnson" />
                <Field
                  label="Email Address"
                  defaultValue="admin@axythicfin.com"
                  type="email"
                />
                <Field label="Phone Number" defaultValue="+1 (555) 123-4567" />
                <Field label="Company" defaultValue="Axythic Finance Inc." />
                <Field label="Timezone" defaultValue="Asia/Kolkata (IST)" />
              </div>
            </>
          )}

          {activeTab === "notifications" && (
            <div>
              <h3 className="font-bold text-gray-900 mb-4">
                Email Notifications
              </h3>
              <Toggle
                label="Payment Reminders"
                sub="Get notified 3 days before a payment is due"
                defaultChecked
              />
              <Toggle
                label="Transaction Alerts"
                sub="Instant notification for every transaction"
                defaultChecked
              />
              <Toggle
                label="Invoice Updates"
                sub="Status changes on your invoices"
                defaultChecked
              />
              <Toggle
                label="Monthly Reports"
                sub="Receive a monthly financial summary report"
              />
              <Toggle
                label="Rate Alerts"
                sub="Currency and market rate change alerts"
              />
              <Toggle
                label="Security Alerts"
                sub="Unusual account activity notifications"
                defaultChecked
              />
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-5">
              <h3 className="font-bold text-gray-900">Change Password</h3>
              <div className="space-y-4">
                <Field
                  label="Current Password"
                  defaultValue=""
                  type="password"
                />
                <Field label="New Password" defaultValue="" type="password" />
                <Field
                  label="Confirm Password"
                  defaultValue=""
                  type="password"
                />
              </div>
              <div className="h-[1px] bg-gray-100" />
              <h3 className="font-bold text-gray-900">
                Two-Factor Authentication
              </h3>
              <Toggle
                label="Enable 2FA"
                sub="Use an authenticator app for an extra layer of security"
              />
              <Toggle
                label="SMS Verification"
                sub="Receive a one-time code via SMS"
                defaultChecked
              />
              <div className="h-[1px] bg-gray-100" />
              <h3 className="font-bold text-gray-900">Active Sessions</h3>
              {[
                {
                  device: "MacBook Pro (Chrome)",
                  location: "Mumbai, IN",
                  active: true,
                },
                {
                  device: "iPhone 15 (Safari)",
                  location: "Delhi, IN",
                  active: false,
                },
              ].map((s) => (
                <div
                  key={s.device}
                  className="flex items-center justify-between py-2"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {s.device}
                    </p>
                    <p className="text-xs text-gray-400">{s.location}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {s.active && (
                      <span className="text-xs text-emerald-600 font-medium">
                        ● Current
                      </span>
                    )}
                    {!s.active && (
                      <button className="text-xs text-red-500 font-medium hover:text-red-600">
                        Revoke
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "billing" && (
            <div className="space-y-5">
              <h3 className="font-bold text-gray-900">Current Plan</h3>
              <div className="bg-blue-600 rounded-2xl p-5 text-white flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg">Pro Plan</p>
                  <p className="text-sm text-blue-100 mt-0.5">
                    $49/month · Renews Apr 1, 2025
                  </p>
                </div>
                <button className="bg-white text-blue-600 font-bold text-sm px-4 py-2 rounded-xl hover:bg-blue-50 transition-colors">
                  Manage
                </button>
              </div>
              <h3 className="font-bold text-gray-900">Payment Method</h3>
              {[
                { brand: "Visa", last4: "4242", exp: "12/26", primary: true },
                {
                  brand: "Mastercard",
                  last4: "8821",
                  exp: "08/25",
                  primary: false,
                },
              ].map((c) => (
                <div
                  key={c.last4}
                  className="flex items-center justify-between border border-gray-100 rounded-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-7 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-600">
                      {c.brand[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {c.brand} •••• {c.last4}
                      </p>
                      <p className="text-xs text-gray-400">Expires {c.exp}</p>
                    </div>
                  </div>
                  {c.primary ? (
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      Primary
                    </span>
                  ) : (
                    <button className="text-xs text-gray-400 hover:text-gray-600">
                      Set primary
                    </button>
                  )}
                </div>
              ))}
              <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
                + Add payment method
              </button>
            </div>
          )}

          {activeTab === "preferences" && (
            <div className="space-y-5">
              <h3 className="font-bold text-gray-900">Display</h3>
              <Toggle label="Dark Mode" sub="Switch to a darker interface" />
              <Toggle
                label="Compact View"
                sub="Show more data with reduced spacing"
              />
              <h3 className="font-bold text-gray-900 pt-2">
                Currency & Language
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Default Currency
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-500">
                    <option>USD — US Dollar</option>
                    <option>EUR — Euro</option>
                    <option>INR — Indian Rupee</option>
                    <option>GBP — British Pound</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Language
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-500">
                    <option>English (US)</option>
                    <option>Hindi</option>
                    <option>French</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <Moon className="w-4 h-4 text-gray-400" />
                <Globe className="w-4 h-4 text-gray-400" />
                <p className="text-xs text-gray-400">
                  More display preferences coming soon.
                </p>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl px-6 py-2.5 transition-colors shadow-lg shadow-blue-600/20">
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
