import React, { createContext, useContext, useState } from 'react';

interface ImageContextProps {
  imageUri: string | null;
  setImageUri: (uri: string | null) => void;
}

const ImageContext = createContext<ImageContextProps | undefined>(undefined);

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext deve ser usado dentro de um ImageProvider');
  }
  return context;
};

export function ImageProvider({ children }: { children: React.ReactNode }){
  const [imageUri, setImageUri] = useState<string | null>(null);

  return (
    <ImageContext.Provider value={{ imageUri, setImageUri }}>
      {children}
    </ImageContext.Provider>
  );
};
