import { useState } from "react";
import { Shield, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function SetNewPasswordPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passFocused, setPassFocused] = useState(false);
    const [confirmFocused, setConfirmFocused] = useState(false);

    return (
        <div className="min-h-screen bg-[#0A1324] flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
            <div className="mb-6 bg-[#0d1a33] p-4 rounded-full flex items-center justify-center shadow-lg">
                <Shield className="text-[#14C9E7]" size={48} />
            </div>

            <div className="bg-[#111C33] w-full max-w-md rounded-2xl p-8 md:p-10 shadow-2xl text-center">
                <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">Set New Password</h2>
                <p className="text-gray-400 mb-8 text-sm md:text-base">
                    Create a strong password for your account
                </p>

                {/* New Password */}
                <div className="mb-6 text-left">
                    <label className="text-gray-300 text-sm md:text-base">New Password</label>
                    <div
                        className={`flex items-center p-3 rounded-lg mt-1 transition border ${passFocused ? "border-[#14C9E7]" : "border-transparent"
                            } bg-[#0A1324]`}
                    >
                        <Lock className="text-gray-400 mr-3" size={20} />
                        <input
                            type={showPassword ? "text" : "password"}
                            onFocus={() => setPassFocused(true)}
                            onBlur={() => setPassFocused(false)}
                            placeholder="••••••••"
                            autoComplete="off"
                            className="bg-transparent text-white w-full outline-none text-sm md:text-base"
                        />
                        {showPassword ? (
                            <EyeOff
                                onClick={() => setShowPassword(!showPassword)}
                                className="ml-3 cursor-pointer text-[#14C9E7] transition"
                                size={20}
                            />
                        ) : (
                            <Eye
                                onClick={() => setShowPassword(!showPassword)}
                                className="ml-3 cursor-pointer text-gray-400 transition"
                                size={20}
                            />
                        )}
                    </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-6 text-left">
                    <label className="text-gray-300 text-sm md:text-base">Confirm Password</label>
                    <div
                        className={`flex items-center p-3 rounded-lg mt-1 transition border ${confirmFocused ? "border-[#14C9E7]" : "border-transparent"
                            } bg-[#0A1324]`}
                    >
                        <Lock className="text-gray-400 mr-3" size={20} />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            onFocus={() => setConfirmFocused(true)}
                            onBlur={() => setConfirmFocused(false)}
                            placeholder="••••••••"
                            autoComplete="off"
                            className="bg-transparent text-white w-full outline-none text-sm md:text-base"
                        />
                        {showConfirmPassword ? (
                            <EyeOff
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="ml-3 cursor-pointer text-[#14C9E7] transition"
                                size={20}
                            />
                        ) : (
                            <Eye
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="ml-3 cursor-pointer text-gray-400 transition"
                                size={20}
                            />
                        )}
                    </div>
                </div>

                <button className="w-full bg-[#14C9E7] hover:bg-[#11b5d1] text-white font-medium py-3 rounded-lg transition text-base">
                    Save Password
                </button>

                <Link to="/login" className="text-[#14C9E7] text-sm mt-3 hover:underline cursor-pointer block">
                    ← Back to Login
                </Link>
            </div>
        </div>
    );
}
