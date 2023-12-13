import { create } from "zustand";

interface ForgetPasswordModelStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// Zustand hook for managing the forget password modal state
const useForgetPasswordModel = create<ForgetPasswordModelStore>((set) => ({
  isOpen: false,  // Initial state: modal is closed
  onOpen: () => set({ isOpen: true }),  // Action to open the modal
  onClose: () => set({ isOpen: false }),  // Action to close the modal
}));

export default useForgetPasswordModel;

