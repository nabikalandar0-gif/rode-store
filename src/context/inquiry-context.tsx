import { createContext, useContext, useState, type ReactNode } from 'react';

type InquiryContextType = {
  selectedProduct: string;
  setSelectedProduct: (name: string) => void;
};

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState('');
  return (
    <InquiryContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error('useInquiry must be used within InquiryProvider');
  return ctx;
}
