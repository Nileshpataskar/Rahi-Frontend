const SectionTitle = ({
  title,
  paragraph,
  width = "635px",
  center,
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
}) => {
  return (
    <div className="-mx-4 flex flex-wrap">
      <div
        className={`wow fadeInUp w-full px-4 ${
          center ? "mx-auto text-center" : ""
        }`}
        data-wow-delay=".1s"
        style={{ maxWidth: width }}
      >
        <h2 className="mb-6 text-3xl font-bold">{title}</h2>
        <p className="text-muted-foreground">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
