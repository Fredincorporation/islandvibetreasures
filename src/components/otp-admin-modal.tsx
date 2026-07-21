"use client";

import { useState } from "react";
import { useOtpStore, OtpCode } from "@/store/otp-store";
import { toast } from "sonner";
import { 
  Key, 
  Copy, 
  Check, 
  Plus, 
  RefreshCw, 
  Trash2, 
  Lock, 
  Unlock, 
  Sparkles, 
  X, 
  ShieldCheck, 
  Info,
  SlidersHorizontal
} from "lucide-react";

interface OtpAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCode?: (code: string) => void;
}

export function OtpAdminModal({ isOpen, onClose, onSelectCode }: OtpAdminModalProps) {
  const {
    otpCodes,
    singleUseMode,
    isAuthenticated,
    masterPasscode,
    addCustomOtp,
    generateNewBatch,
    deleteOtp,
    toggleSingleUseMode,
    lockSite,
    unlockSite,
    resetToDefaults,
    setMasterPasscode,
  } = useOtpStore();

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [newCodeInput, setNewCodeInput] = useState("");
  const [newLabelInput, setNewLabelInput] = useState("");
  const [editingMaster, setEditingMaster] = useState(false);
  const [masterInput, setMasterInput] = useState(masterPasscode);
  const [filter, setFilter] = useState<"all" | "active" | "used">("all");

  if (!isOpen) return null;

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    toast.success(`Copied passcode "${code}" to clipboard!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCodeInput.trim()) return;

    const res = addCustomOtp(newCodeInput, newLabelInput);
    if (res.success) {
      toast.success(res.message);
      setNewCodeInput("");
      setNewLabelInput("");
    } else {
      toast.error(res.message);
    }
  };

  const handleGenerate10 = () => {
    generateNewBatch(10);
    toast.success("Generated 10 new random OTP passcodes!");
  };

  const handleSaveMaster = () => {
    if (!masterInput.trim()) return;
    setMasterPasscode(masterInput.trim());
    setEditingMaster(false);
    toast.success("Master Passcode updated!");
  };

  const filteredCodes = otpCodes.filter((item) => {
    if (filter === "active") return !item.isUsed;
    if (filter === "used") return item.isUsed;
    return true;
  });

  const activeCount = otpCodes.filter((c) => !c.isUsed).length;
  const usedCount = otpCodes.filter((c) => c.isUsed).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ocean-900/70 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-sand-50 rounded-2xl border-2 border-gold-300 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-ocean-900 via-ocean-800 to-ocean-900 p-6 text-sand-50 border-b border-gold-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gold-500/20 rounded-xl border border-gold-400/40 text-gold-300">
              <Key className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display text-xl font-bold tracking-wide text-sand-50">
                  Passcode Manager
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full font-sans bg-gold-500/20 text-gold-300 border border-gold-400/30">
                  Admin & Initial OTPs
                </span>
              </div>
              <p className="text-xs text-sand-200 mt-0.5">
                Manage One-Time Passwords for site access (10 generated for start)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-sand-300 hover:text-white rounded-lg hover:bg-ocean-700/50 transition-colors"
            title="Close Manager"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-ocean-900">
          
          {/* Status & Master Passcode Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Site Lock Status */}
            <div className="p-4 bg-white rounded-xl border border-sand-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-ocean-600 uppercase tracking-wider">
                  Site Access Status
                </span>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  isAuthenticated 
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                    : "bg-coral-100 text-coral-800 border border-coral-300"
                }`}>
                  {isAuthenticated ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                  {isAuthenticated ? "Unlocked" : "Locked (OTP Required)"}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2">
                {isAuthenticated ? (
                  <button
                    onClick={() => {
                      lockSite();
                      toast.info("Site is now locked! Reload or close to see OTP gate.");
                    }}
                    className="flex-1 py-2 px-3 bg-ocean-800 hover:bg-ocean-900 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    Lock Site (Test OTP Gate)
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      unlockSite();
                      toast.success("Site unlocked directly!");
                    }}
                    className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Unlock className="w-3.5 h-3.5" />
                    Bypass & Unlock Site
                  </button>
                )}
              </div>
            </div>

            {/* Master Backup Passcode */}
            <div className="p-4 bg-gold-50/60 rounded-xl border border-gold-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gold-800 uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
                  Master Backup Passcode
                </span>
                <button
                  onClick={() => setEditingMaster(!editingMaster)}
                  className="text-xs text-ocean-600 hover:underline font-medium"
                >
                  {editingMaster ? "Cancel" : "Edit"}
                </button>
              </div>

              {editingMaster ? (
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    value={masterInput}
                    onChange={(e) => setMasterInput(e.target.value)}
                    className="flex-1 px-3 py-1 text-xs font-mono border border-gold-300 rounded bg-white"
                  />
                  <button
                    onClick={handleSaveMaster}
                    className="px-3 py-1 bg-gold-500 text-white text-xs rounded font-medium hover:bg-gold-600"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-ocean-900 bg-white px-2.5 py-1 rounded border border-gold-200">
                    {masterPasscode}
                  </span>
                  <button
                    onClick={() => handleCopy(masterPasscode, "master")}
                    className="p-1 text-ocean-600 hover:text-ocean-900 rounded hover:bg-gold-100"
                    title="Copy master code"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
              <p className="text-[11px] text-ocean-700/80 mt-1">
                Reusable master code for admin or emergency bypass.
              </p>
            </div>
          </div>

          {/* Quick Actions & Settings Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-white rounded-xl border border-sand-200">
            <div className="flex items-center gap-3">
              <button
                onClick={handleGenerate10}
                className="px-3 py-1.5 bg-ocean-50 hover:bg-ocean-100 text-ocean-700 border border-ocean-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                Generate 10 New OTPs
              </button>
              
              <button
                onClick={resetToDefaults}
                className="px-3 py-1.5 bg-sand-100 hover:bg-sand-200 text-sand-800 border border-sand-300 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors"
                title="Reset to initial 10 generated passcodes"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset 10 Initial Codes
              </button>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-xs text-ocean-700 flex items-center gap-1.5 cursor-pointer font-medium">
                <input
                  type="checkbox"
                  checked={singleUseMode}
                  onChange={toggleSingleUseMode}
                  className="rounded border-ocean-300 text-ocean-600 focus:ring-ocean-500"
                />
                Enforce Single-Use Mode
              </label>
            </div>
          </div>

          {/* Add Custom Passcode Form */}
          <form onSubmit={handleAddCustom} className="p-4 bg-ocean-50/50 rounded-xl border border-ocean-100 space-y-3">
            <h3 className="text-xs font-bold text-ocean-800 uppercase tracking-wider flex items-center gap-1.5">
              <Plus className="w-4 h-4 text-ocean-600" />
              Add Your Own Custom Passcode
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="Code (e.g. MYPASS2026)"
                value={newCodeInput}
                onChange={(e) => setNewCodeInput(e.target.value)}
                className="px-3 py-1.5 text-xs bg-white border border-sand-300 rounded-lg font-mono uppercase focus:ring-2 focus:ring-ocean-500 outline-none"
              />
              <input
                type="text"
                placeholder="Label / Note (optional)"
                value={newLabelInput}
                onChange={(e) => setNewLabelInput(e.target.value)}
                className="px-3 py-1.5 text-xs bg-white border border-sand-300 rounded-lg focus:ring-2 focus:ring-ocean-500 outline-none"
              />
              <button
                type="submit"
                className="px-4 py-1.5 bg-ocean-600 hover:bg-ocean-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Passcode
              </button>
            </div>
          </form>

          {/* Passcodes List Header & Filter Tabs */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-ocean-900">
                  Generated Passcodes List
                </h3>
                <span className="text-xs font-medium text-ocean-600 bg-sand-200 px-2 py-0.5 rounded-full">
                  {otpCodes.length} total ({activeCount} active, {usedCount} redeemed)
                </span>
              </div>

              {/* Filters */}
              <div className="flex bg-sand-200/80 p-0.5 rounded-lg text-xs">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    filter === "all" ? "bg-white text-ocean-900 font-semibold shadow-xs" : "text-ocean-700"
                  }`}
                >
                  All ({otpCodes.length})
                </button>
                <button
                  onClick={() => setFilter("active")}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    filter === "active" ? "bg-white text-emerald-800 font-semibold shadow-xs" : "text-ocean-700"
                  }`}
                >
                  Active ({activeCount})
                </button>
                <button
                  onClick={() => setFilter("used")}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    filter === "used" ? "bg-white text-sand-800 font-semibold shadow-xs" : "text-ocean-700"
                  }`}
                >
                  Redeemed ({usedCount})
                </button>
              </div>
            </div>

            {/* Passcodes Grid */}
            {filteredCodes.length === 0 ? (
              <div className="text-center py-8 bg-white rounded-xl border border-dashed border-sand-300">
                <Info className="w-8 h-8 text-sand-400 mx-auto mb-2" />
                <p className="text-xs text-ocean-600 font-medium">No passcodes found for this filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {filteredCodes.map((item, index) => (
                  <div
                    key={item.id}
                    className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
                      item.isUsed
                        ? "bg-sand-100/50 border-sand-200 text-sand-700 opacity-75"
                        : "bg-white border-ocean-100 hover:border-gold-300 shadow-xs hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                        item.isUsed ? "bg-sand-200 text-sand-600" : "bg-gold-100 text-gold-800 border border-gold-300"
                      }`}>
                        {index + 1}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-base font-extrabold tracking-widest text-ocean-900">
                            {item.code}
                          </span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                            item.isUsed 
                              ? "bg-sand-200 text-sand-700" 
                              : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                          }`}>
                            {item.isUsed ? "Redeemed" : "Active"}
                          </span>
                        </div>
                        <p className="text-[11px] text-ocean-600 line-clamp-1">
                          {item.label}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {onSelectCode && !item.isUsed && (
                        <button
                          onClick={() => {
                            onSelectCode(item.code);
                            toast.info(`Auto-filled passcode "${item.code}"!`);
                            onClose();
                          }}
                          className="px-2 py-1 bg-ocean-100 hover:bg-ocean-200 text-ocean-800 text-[11px] font-semibold rounded transition-colors"
                          title="Auto-fill this code into OTP screen"
                        >
                          Use
                        </button>
                      )}

                      <button
                        onClick={() => handleCopy(item.code, item.id)}
                        className="p-1.5 text-ocean-600 hover:text-ocean-900 hover:bg-sand-100 rounded-lg transition-colors"
                        title="Copy Code"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        onClick={() => {
                          deleteOtp(item.id);
                          toast.info(`Deleted passcode ${item.code}`);
                        }}
                        className="p-1.5 text-sand-500 hover:text-coral-600 hover:bg-coral-50 rounded-lg transition-colors"
                        title="Delete Passcode"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-sand-100 border-t border-sand-200 flex items-center justify-between text-xs text-ocean-700">
          <span className="flex items-center gap-1 text-[11px]">
            <Info className="w-3.5 h-3.5 text-ocean-500" />
            Codes are persisted locally in browser state.
          </span>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-ocean-800 hover:bg-ocean-900 text-white font-semibold rounded-lg transition-colors shadow-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
