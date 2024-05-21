/* eslint-disable react/no-unescaped-entities */
const PortfolioDetail = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((item, i) => (
        <dialog key={i} id={`modal${i}`} className="modal">
          <div className="modal-box w-11/12 max-w-5xl p-0 bg-white">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
                ✕
              </button>
            </form>
            <div className="mockup-browser border bg-white">
              <div className="mockup-browser-toolbar bg-red-100 rounded-full mx-auto">
                <div className=" bg-transparent">
                  <a href="/">https://daisyui.com</a>
                </div>
              </div>
              <div className="flex justify-center bg-base-200">
                <div className="carousel w-full h-60">
                  <div id="slide1" className="carousel-item relative w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                      className="w-full object-cover"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a
                        href="#slide4"
                        className="btn btn-circle bg-thememaroon-muted border-none text-white"
                      >
                        ❮
                      </a>
                      <a
                        href="#slide2"
                        className="btn btn-circle bg-thememaroon-muted border-none text-white"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a
                        href="#slide1"
                        className="btn btn-circle bg-thememaroon-muted border-none text-white"
                      >
                        ❮
                      </a>
                      <a
                        href="#slide3"
                        className="btn btn-circle bg-thememaroon-muted border-none text-white"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide3" className="carousel-item relative w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a
                        href="#slide2"
                        className="btn btn-circle bg-thememaroon-muted border-none text-white"
                      >
                        ❮
                      </a>
                      <a
                        href="#slide4"
                        className="btn btn-circle bg-thememaroon-muted border-none text-white"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide4" className="carousel-item relative w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a
                        href="#slide3"
                        className="btn btn-circle bg-thememaroon-muted border-none text-white"
                      >
                        ❮
                      </a>
                      <a
                        href="#slide1"
                        className="btn btn-circle bg-thememaroon-muted border-none text-white"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 px-8 text-themeblue">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </dialog>
      ))}
    </>
  );
};

export default PortfolioDetail;
