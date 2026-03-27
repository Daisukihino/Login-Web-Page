import { cn } from "@/lib/utils";

type AlertProps = {
  message: string;
  variant: "success" | "error";
};

export function Alert({ message, variant }: AlertProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border px-4 py-3 text-sm font-medium",
        variant === "success" &&
          "border-emerald-200 bg-emerald-50 text-emerald-700",
        variant === "error" && "border-rose-200 bg-rose-50 text-rose-700",
      )}
    >
      {message}
    </div>
  );
}
