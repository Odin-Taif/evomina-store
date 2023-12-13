import { create } from "zustand";

interface RegisterModelStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// Zustand hook for managing the register modal state
const useRegisterModal = create<RegisterModelStore>((set) => ({
  isOpen: false,  // Initial state: modal is closed
  onOpen: () => set({ isOpen: true }),  // Action to open the modal
  onClose: () => set({ isOpen: false }),  // Action to close the modal
}));

export default useRegisterModal;
