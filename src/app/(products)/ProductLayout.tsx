"use client"
import React from "react";

interface ProductLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <main className="pb-20 pt-32">
        <div className="container mx-auto px-4">
          <div>
            <h1 className="mb-4 text-4xl font-bold">{title}</h1>
            {description && (
              <p className="mx-auto max-w-2xl text-muted-foreground">
                {description}
              </p>
            )}
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default ProductLayout;
