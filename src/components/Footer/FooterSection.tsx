

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FooterSection = ({ title, children }: FooterSectionProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {children}
    </div>
  );
};