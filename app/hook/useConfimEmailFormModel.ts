import { create } from "zustand";

interface ConfirmEmailModelStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// Zustand hook for managing the confirm email modal state
const useConfirmEmailModel = create<ConfirmEmailModelStore>((set) => ({
  isOpen: false,  // Initial state: modal is closed
  onOpen: () => set({ isOpen: true }),  // Action to open the modal
  onClose: () => set({ isOpen: false }),  // Action to close the modal
}));

export default useConfirmEmailModel;
