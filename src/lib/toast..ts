import { toast } from "sonner";

export const showToast = {
  success: (message: string, description?: string) => {
    toast.success(message, {
      description: description,
      // 'unstyled: true' removes Shadcn/Sonner default gray styles 
      // so our Tailwind classes actually work
      unstyled: true, 
      classNames: {
        toast: "flex items-center gap-3 w-full max-w-[350px] p-4 rounded-xl border shadow-lg bg-emerald-50 border-emerald-200 text-emerald-900",
        title: "text-sm font-semibold",
        description: "text-xs opacity-80",
      },
    });
  },

  error: (message: string, description?: string) => {
    toast.error(message, {
      description: description,
      unstyled: true,
      classNames: {
        toast: "flex items-center gap-3 w-full max-w-[350px] p-4 rounded-xl border shadow-lg bg-rose-50 border-rose-200 text-rose-900",
        title: "text-sm font-semibold",
        description: "text-xs opacity-80",
      },
    });
  },

  warning: (message: string, description?: string) => {
    toast.warning(message, {
      description: description,
      unstyled: true,
      classNames: {
        toast: "flex items-center gap-3 w-full max-w-[350px] p-4 rounded-xl border shadow-lg bg-amber-50 border-amber-200 text-amber-800",
        title: "text-sm font-semibold",
        description: "text-xs opacity-80",
      },
    });
  },
};