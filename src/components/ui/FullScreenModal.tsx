import * as Dialog from "@radix-ui/react-dialog";
import type { ReactNode } from "react";

interface FullScreenModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function FullScreenModal({
  open,
  onClose,
  children,
}: FullScreenModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-overlay z-50 animate-overlay-in" />
        <Dialog.Content className="fixed inset-0 z-50 overflow-y-auto bg-bg animate-fade-in focus:outline-none">
          <Dialog.Close
            aria-label="Close"
            className="fixed top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-border hover:text-text cursor-pointer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 4l8 8M12 4l-8 8" />
            </svg>
          </Dialog.Close>
          <div className="mx-auto max-w-5xl px-8 py-12">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
