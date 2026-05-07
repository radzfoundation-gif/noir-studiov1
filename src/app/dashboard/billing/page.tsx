"use client";

import React from "react";
import { Coins, CreditCard, ArrowUpRight, Check, FileText } from "lucide-react";
import { motion } from "motion/react";

const transactions = [
  { id: "TRX-8271", date: "May 4, 2026", amount: "Rp 99.000", credits: "+25 Credits", status: "Paid" },
  { id: "TRX-7102", date: "Apr 12, 2026", amount: "Rp 49.000", credits: "+10 Credits", status: "Paid" },
  { id: "TRX-6091", date: "Mar 10, 2026", amount: "Rp 0", credits: "+3 Credits (Free Trial)", status: "Paid" },
];

export default function BillingPage() {
  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto pb-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A]">Billing & Credits</h1>
        <p className="text-[#5E6470] text-sm mt-1">Manage your credit balance, active plans, and payment history.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Credit Balance Card */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-1 bg-gradient-to-br from-[#0164FF] to-blue-600 rounded-3xl p-6 shadow-lg shadow-blue-500/20 text-white flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-white/80 font-medium text-sm mb-4">
              <Coins className="w-5 h-5" />
              Available Credits
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tight">12</span>
              <span className="text-white/80">credits</span>
            </div>
            <p className="text-sm text-white/70 mt-2 leading-relaxed">
              1 credit = 1 generation. Credits roll over to the next month on active plans.
            </p>
          </div>
          <button className="relative z-10 mt-8 w-full bg-white text-[#0164FF] py-3 rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors shadow-sm">
            Buy More Credits
          </button>
        </motion.div>

        {/* Current Plan Details */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 bg-white rounded-3xl border border-black/5 p-6 md:p-8 shadow-sm flex flex-col justify-between"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-[#0164FF] text-xs font-bold uppercase tracking-wider bg-[#0164FF]/10 px-3 py-1 rounded-full mb-3 inline-block">Active Plan</span>
              <h2 className="text-2xl font-bold text-[#0F172A]">Pro Plan</h2>
              <p className="text-[#5E6470] text-sm mt-1">Your plan renews automatically on <strong className="text-[#0F172A]">June 4, 2026</strong></p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-[#0F172A]">Rp 99.000</span>
              <span className="text-[#5E6470] text-sm">/month</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-2">
              <div className="bg-emerald-100 p-1 rounded-full text-emerald-600 mt-0.5"><Check className="w-3 h-3" /></div>
              <span className="text-sm text-[#0F172A]">25 Photo Generations</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-emerald-100 p-1 rounded-full text-emerald-600 mt-0.5"><Check className="w-3 h-3" /></div>
              <span className="text-sm text-[#0F172A]">4K Upscaling Included</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-emerald-100 p-1 rounded-full text-emerald-600 mt-0.5"><Check className="w-3 h-3" /></div>
              <span className="text-sm text-[#0F172A]">All Premium Styles Access</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-emerald-100 p-1 rounded-full text-emerald-600 mt-0.5"><Check className="w-3 h-3" /></div>
              <span className="text-sm text-[#0F172A]">No Watermark on Preview</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-black/5">
            <button className="flex-1 bg-[#0F172A] text-white py-2.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors">
              Upgrade to Premium
            </button>
            <button className="flex-1 bg-white text-[#0F172A] border border-black/10 py-2.5 rounded-xl text-sm font-medium hover:bg-black/5 transition-colors">
              Cancel Subscription
            </button>
          </div>
        </motion.div>
      </div>

      {/* Transaction History */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-black/5 flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#0F172A]">Transaction History</h3>
          <button className="text-[#0164FF] text-sm font-medium flex items-center gap-1 hover:underline">
            Download All <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[#5E6470] text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Invoice ID</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Item</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-black/5">
              {transactions.map((trx, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-medium text-[#0F172A]">{trx.id}</td>
                  <td className="p-4 text-[#5E6470]">{trx.date}</td>
                  <td className="p-4 text-[#0F172A]">{trx.amount}</td>
                  <td className="p-4 text-[#0164FF]">{trx.credits}</td>
                  <td className="p-4">
                    <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-md text-xs font-semibold">{trx.status}</span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-[#5E6470] hover:text-[#0F172A] p-1 inline-flex transition-colors">
                      <FileText className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
