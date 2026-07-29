// import React from "react";
// import { X } from "lucide-react";

// import PaymentInfo from "./PaymentInfo";
// import FileUpload from "./FileUpload";
// import StatusBadge from "./StatusBadge";

// export interface SelectedPackage {
//   id: number;
//   name: string;
//   price: number;
//   profit: string;
//   duration: string;
// }

// interface BuyPackageModalProps {
//   open: boolean;
//   onClose: () => void;
//   selectedPackage: SelectedPackage | null;
// }

// const BuyPackageModal: React.FC<BuyPackageModalProps> = ({
//   open,
//   onClose,
//   selectedPackage,
// }) => {
//   if (!open || !selectedPackage) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

//       <div className="relative w-full max-w-2xl rounded-3xl border border-yellow-500/20 bg-[#151515] shadow-[0_0_40px_rgba(212,175,55,0.18)]">

//         {/* Header */}
//         <div className="flex items-center justify-between border-b border-gray-800 px-8 py-6">

//           <div>
//             <h2 className="text-2xl font-bold text-white">
//               Buy Investment Package
//             </h2>

//             <p className="mt-1 text-sm text-gray-400">
//               Complete your payment details below.
//             </p>
//           </div>

//           <button
//             onClick={onClose}
//             className="rounded-full p-2 text-gray-400 transition hover:bg-gray-800 hover:text-white cursor-pointer"
//           >
//             <X size={22} />
//           </button>

//         </div>

//         {/* Body */}
//         <div className="space-y-8 p-8">

//           {/* Selected Package */}
//           <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">

//             <div className="flex items-center justify-between">

//               <div>
//                 <p className="text-sm text-gray-400">
//                   Selected Package
//                 </p>

//                 <h3 className="mt-2 text-2xl font-bold text-yellow-400">
//                   {selectedPackage.name}
//                 </h3>
//               </div>

//               <div className="text-right">

//                 <p className="text-sm text-gray-400">
//                   Investment
//                 </p>

//                 <h2 className="mt-2 text-4xl font-bold text-white">
//                   ${selectedPackage.price}
//                 </h2>

//               </div>

//             </div>

//           </div>

//           {/* Payment Information */}
//           <PaymentInfo />

//           {/* Note */}
//           <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">

//             <p className="text-sm leading-6 text-blue-300">
//               After completing your payment, enter your Transaction ID
//               and upload the payment screenshot. Your package will be
//               activated after admin verification.
//             </p>

//           </div>

//           {/* Transaction ID */}
//           <div>

//             <label className="mb-2 block text-sm text-gray-300">
//               Transaction ID
//             </label>

//             <input
//               type="text"
//               placeholder="Enter transaction ID"
//               className="w-full rounded-xl border border-gray-700 bg-[#1D1D1D] px-4 py-3 text-white outline-none transition focus:border-yellow-500"
//             />

//           </div>

//           {/* Upload */}
//           <FileUpload />

//           {/* Status */}
//           <div className="flex items-center justify-between">

//             <span className="text-gray-300">
//               Current Status
//             </span>

//             <StatusBadge status="Pending" />

//           </div>

//         </div>

//         {/* Footer */}
//         <div className="flex justify-end gap-4 border-t border-gray-800 px-8 py-6">

//           <button
//             onClick={onClose}
//             className="rounded-xl border border-gray-700 px-6 py-3 text-white transition hover:border-gray-500 cursor-pointer"
//           >
//             Cancel
//           </button>

//           <button
//             className="rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-8 py-3 font-semibold text-black transition hover:scale-[1.02] cursor-pointer"
//           >
//             Submit Purchase
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default BuyPackageModal;