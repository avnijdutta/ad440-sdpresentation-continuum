import * as Dialog from "@radix-ui/react-dialog";
import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  container?: HTMLElement | null;
}

export function Modal({ open, onClose, children, container }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal container={container ?? undefined}>
        <Dialog.Overlay className="fixed inset-0 bg-overlay z-50 animate-overlay-in" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-sm bg-bg p-8 shadow-xl animate-slide-up focus:outline-none">
          <Dialog.Close
            aria-label="Close"
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-border hover:text-text cursor-pointer"
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
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
