import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
const PortfolioDetail = ({ index, link, preview, desc }) => {
  return (
    <>
      {/* {Array.from({ length: 6 }).map((item, i) => ( */}
      <dialog id={`modal${index}`} className="modal">
        <div className="modal-box w-11/12 max-w-2xl p-0 bg-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
              ✕
            </button>
          </form>
          <div className="mockup-browser border bg-white">
            <div className="mockup-browser-toolbar bg-red-100 rounded-full mx-auto">
              <div className=" bg-transparent">
                <a href={link}>{link}</a>
              </div>
            </div>
            <div className="flex justify-center bg-base-200">
              <div className="carousel w-full h-80">
                {preview?.map((item, i) => (
                  <div
                    key={i}
                    id={`modal${index}-slide${i}`}
                    className="carousel-item relative w-full"
                  >
                    <Image
                      src={`/img/preview/${item}`}
                      alt="Preview"
                      className="w-full object-cover"
                      width={1000}
                      height={700}
                    />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a
                        href={`#modal${index}-slide${
                          i - 1 < 0 ? preview.length - 1 : i - 1
                        }`}
                        className="btn btn-circle bg-thememaroon-muted border-none text-white"
                      >
                        ❮
                      </a>
                      <a
                        href={`#modal${index}-slide${
                          i + 1 > preview.length - 1 ? "0" : i + 1
                        }`}
                        className="btn btn-circle bg-thememaroon-muted border-none text-white"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-6 px-8 text-themeblue">
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </dialog>
      {/* ))} */}
    </>
  );
};

export default PortfolioDetail;
