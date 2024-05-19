import IconCoin from '@assets/images/icon-coin.png';
import IconSchedule from '@assets/images/icon-schedual.png';
import IconMap from '@assets/images/icon-map.png';
import { HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
const PostDetailHeader = () => {
  return (
    <div className=" md:px-10 py-3 md:py-4 px-4 bg-white shadow-sd-12 rounded-sm mb-5 shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
      <div className="md:flex w-full items-start">
        <img
          alt="logo"
          className="relative rounded w-[120px] h-[120px] object-contain"
          src="https://cdn1.vieclam24h.vn/tvn/images/old_employer_avatar/images/44ad9bde9b667fad53b2983817a0237c_5cad51a7de35d_1554862503.jpeg"
        />
        <div className="md:ml-7 w-full">
          <a href="/danh-sach-tin-tuyen-dung-cong-ty-tnhh-kobelco-compressors-viet-nam-ntd12861844p122.html">
            <h2 className="font-normal text-[16px] text-se-neutral-64 mb-4">
              Công Ty TNHH Kobelco Compressors Việt Nam
            </h2>
          </a>
          <h1 className="font-semibold text-[18px] md:text-[24px] leading-snug">
            Nhân Viên Kỹ Thuật Máy Nén Khí (Tập Đoàn Nhật Bản Tại HCM)
          </h1>
          <div className="md:flex mt-5">
            <div className="flex items-start min-w-[250px] mb-4">
              <img
                src={IconCoin}
                className="w-[32px] h-[32px] pt-[2px] md:pt-0"
              />
              <h2 className="ml-3 text-[14px] md:flex pt-0 md:pt-[5px] my-0">
                <p className="mr-1 text-grey-11 flex-shrink-0">Mức lương : </p>
                <p className="font-semibold text-[14px] text-[#8B5CF6]">9 - 17 triệu</p>
              </h2>
            </div>
            <div className="flex items-start min-w-[250px] mb-4 md:pl-6 md:border-l">
              <img
                src={IconSchedule}
                className="w-[32px] h-[32px] pt-[2px] md:pt-0"
              />
              <h2 className="ml-3 text-[14px] md:flex pt-0 md:pt-[5px] my-0">
                <p className="mr-1 text-grey-11 flex-shrink-0">Hạn nộp hồ sơ : </p>
                <p className="">02/06/2024</p>
              </h2>
            </div>
          </div>
          <div className="flex items-start min-w-[250px] mb-4 mb-6">
            <img
              src={IconMap}
              className="w-[32px] h-[32px] pt-[2px] md:pt-0"
            />
            <h2 className="ml-3 text-[14px] md:flex pt-0 md:pt-[5px] my-0">
              <p className="mr-1 text-grey-11 flex-shrink-0">Khu vực tuyển : </p>
              <p className="">
                <a
                  className="hover:text-se-accent"
                  title="Việc làm tại TP.HCM"
                  href="/viec-lam-tp-hcm-p122.html">
                  <span>TP.HCM</span>
                </a>
              </p>
            </h2>
          </div>
          <div className="flex justify-between w-full">
            <div className="w-full md:w-[60%]">
              <div className="flex items-center">
                <button className="py-3 px-6 mb-4 md:mb-0 bg-[#451da0] hover:bg-[#613cb6] text-white text-[14px] rounded-lg w-full md:min-w-[165px] max-w-[165px] flex items-center justify-evenly rounded-md !w-full md:!w-[300px] order-2 md:order-1 mb-0">
                  Chia sẻ <ShareAltOutlined />
                </button>
                <div className="flex justify-between w-auto order-1 md:order-2">
                  <button className="flex items-center justify-center py-3 px-auto text-[14px] rounded-sm w-full md:w-[152px] font-semibold md:mx-4 mr-3 border border-se-line !w-[44px] rounded-md border-0 bg-[#F5F1FF]">
                    <HeartOutlined className="px-2 text-[18px]" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center text-[12px] mx-0 md:mx-4 py-2 md:py-0">
              <i className="text-[16px] svicon-calendar-day text-se-neutral-48-n pr-2"></i>
              <span>
                <span className="font-medium pr-1">Ngày cập nhật:</span>
                <span className="font-semibold">19/05/2024 17:30</span>
              </span>
            </div>
            <div className="flex items-center text-[12px] mx-0 md:mx-4 py-2 md:py-0">
              <i className="text-[16px] svicon-eye text-se-neutral-48-n pr-2"></i>
              <span>
                <span className="font-medium pr-1">Lượt xem:</span>
                <span className="font-semibold">3370</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-full md:w-4/5"></div>
      </div>
    </div>
  );
};

export default PostDetailHeader;
