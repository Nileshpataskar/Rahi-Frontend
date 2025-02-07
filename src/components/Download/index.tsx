import React from "react";

const pdfFiles = [
  {
    name: "Rahi Catalogue",
    url: "https://drive.google.com/uc?export=download&id=1u8X-2JhDbgHFTmsOhB15OqfqZPVnm-qb",
  },
  {
    name: "Rahi Brochure",
    url: "https://drive.google.com/uc?export=download&id=17GyT4nLg02i22yck7GyCtm-XzRSP8U1V",
  },
  {
    name: "Rahi Pipe Brochure",
    url: "https://drive.google.com/uc?export=download&id=1WQgrHDhHSkEim0j9ZcGFRFiXchdDbz-4",
  },
];

const Downloads = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h2 className="mb-4 text-2xl font-bold">Download PDFs</h2>
      <ul className="w-full max-w-md space-y-2">
        {pdfFiles.map((file, index) => (
          <li key={index}>
            <a
              href={file.url}
              download
              title={` ${file.name}`}
              className="block w-full rounded-lg bg-blue-600 px-4 py-2 text-center text-white transition duration-300 hover:bg-blue-700"
            >
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Downloads;
