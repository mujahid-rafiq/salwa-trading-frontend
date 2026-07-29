import React from "react";
import {
  CheckCircle,
  Clock3,
  XCircle,
} from "lucide-react";

interface StatusBadgeProps {
  status: "Pending" | "Approved" | "Rejected";
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
}) => {
  const styles = {
    Pending:
      "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",

    Approved:
      "bg-green-500/10 text-green-400 border-green-500/20",

    Rejected:
      "bg-red-500/10 text-red-400 border-red-500/20",
  };

  const icons = {
    Pending: <Clock3 size={16} />,
    Approved: <CheckCircle size={16} />,
    Rejected: <XCircle size={16} />,
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${styles[status]}`}
    >
      {icons[status]}
      {status}
    </span>
  );
};

export default StatusBadge;