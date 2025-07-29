import { useState } from "react";
import { Link } from "react-router-dom";

const ChevronDownIcon = () => (
  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-90">
    <path d="M12.0581 5.05812L7.50002 9.61625L2.9419 5.05812L2.05814 5.94187L7.50002 11.3837L12.9419 5.94187L12.0581 5.05812Z" fill="black"/>
  </svg>
);

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full min-h-[100px] px-4 lg:px-[120px] border-b border-black/30 bg-white">
      <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between py-[31px]">
        <div className="flex items-center justify-center pb-[5px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9d040409a145ca932e697b688b2fc245382791af?width=532"
            alt="NYK Energy Ocean"
            className="w-[200px] h-[23px] lg:w-[266px] lg:h-[31px]"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-[15px]">
          <div className="flex items-center">
            <span className="font-yu-gothic text-[14px] font-medium text-black leading-[130%]">会社概要</span>
            <ChevronDownIcon />
          </div>
          <Link to="/business" className="font-yu-gothic text-[14px] font-medium text-black leading-[130%]">事業内容</Link>
          <Link to="/news" className="font-yu-gothic text-[14px] font-medium text-black leading-[130%]">お知らせ</Link>
          <Link to="/fleet" className="font-yu-gothic text-[14px] font-medium text-black leading-[130%]">運航船腹</Link>
          <Link to="/careers" className="font-yu-gothic text-[14px] font-medium text-black leading-[130%]">採用情報</Link>
          <Link to="/contact" className="font-yu-gothic text-[14px] font-medium text-black leading-[130%]">お問い合わせ</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-black/30 bg-white p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-yu-gothic text-[14px] font-medium text-black">会社概要</span>
              <ChevronDownIcon />
            </div>
            <Link to="/business" className="font-yu-gothic text-[14px] font-medium text-black">事業内容</Link>
            <Link to="/news" className="font-yu-gothic text-[14px] font-medium text-black">お知らせ</Link>
            <Link to="/fleet" className="font-yu-gothic text-[14px] font-medium text-black">運航船腹</Link>
            <Link to="/careers" className="font-yu-gothic text-[14px] font-medium text-black">採用情報</Link>
            <Link to="/contact" className="font-yu-gothic text-[14px] font-medium text-black">お問い合わせ</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

const Breadcrumb = () => {
  return (
    <div className="font-yu-gothic text-[16px] text-black">
      <Link to="/" className="text-black">ホーム</Link>
      <span className="text-nyk-red mx-1">&gt;</span>
      <span className="text-black">会社概要</span>
    </div>
  );
};

const CompanyTable = () => {
  const tableData = [
    {
      label: "商号",
      content: "和名：NYK Energy Ocean株式会社（エヌワイケイ・エナジー・オーシャン株式会社）\n英名：NYK Energy Ocean Corporation"
    },
    {
      label: "設立年月日",
      content: "2024年8月8日"
    },
    {
      label: "発足年月日", 
      content: "2025年4月1日"
    },
    {
      label: "会社所在地",
      content: "〒220-0012\n神奈川県横浜市西区みなとみらい三丁目６番３号　MMパークビル13階"
    },
    {
      label: "電話番号",
      content: "045-286-6730（代表番号）"
    },
    {
      label: "資本金",
      content: "5億円"
    },
    {
      label: "株主",
      content: "日本郵船株式会社（80％）\nＥＮＥＯＳオーシャン株式会社（20％）",
      hasLinks: true
    },
    {
      label: "従業員数",
      content: "109名［陸上81名、海上28名］（2025年7月1日現在）"
    },
    {
      label: "��航船腹",
      content: "49隻（2025年7月1日現在）　※海外子会社の運航船腹を含む"
    },
    {
      label: "主要航路",
      content: "国外および国内"
    },
    {
      label: "主要子会社",
      content: "NYK Energy Ocean Asia Pte Ltd\nNYK Energy Ocean Shipmanagement Pte Ltd",
      hasLinks: true
    }
  ];

  return (
    <div className="w-full border border-nyk-border rounded-[4px] bg-white overflow-hidden">
      {tableData.map((row, index) => (
        <div key={index} className="flex min-h-0">
          <div className="w-[248px] flex-shrink-0 bg-nyk-table-header border-t border-l border-nyk-border p-[10px_12px] flex items-center">
            <span className="font-yu-gothic text-[14px] font-bold text-black leading-[130%]">
              {row.label}
            </span>
          </div>
          <div className="flex-1 border-t border-l border-nyk-border p-[10px_12px] flex items-center bg-white">
            <div className="font-yu-gothic text-[14px] text-black whitespace-pre-line leading-[130%]">
              {row.hasLinks ? (
                <span dangerouslySetInnerHTML={{
                  __html: row.content
                    .replace(/日本郵船株式会社/g, '<span class="underline">日本郵船株式会社</span>')
                    .replace(/ＥＮＥＯＳオーシャン株式会社/g, '<span class="underline">ＥＮＥＯＳオーシャン株式会社</span>')
                    .replace(/NYK Energy Ocean Shipmanagement Pte Ltd/g, '<span class="underline">NYK Energy Ocean Shipmanagement Pte Ltd</span>')
                }} />
              ) : (
                row.content
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const OrganizationalChart = () => {
  return (
    <div className="w-full flex justify-center">
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/4ad2476b72bf4a2424026823ec5f74634006557d?width=1844"
        alt="組織図"
        className="max-w-[922px] w-full h-auto"
      />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full border-t border-black/30 bg-white px-4 lg:px-[333px]">
      <div className="max-w-[1200px] mx-auto py-[60px_0_40px_0] flex flex-col lg:flex-row items-start gap-6">
        <div className="flex-1 flex flex-col gap-[30px]">
          <div className="w-[250px] h-[29px]">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/90d0b316a07d442f14c547e0a768ecfad44d1848?width=500"
              alt="NYK Energy Ocean"
              className="w-[250px] h-[29px]"
            />
          </div>
          <div className="font-yu-gothic text-[14px] text-black leading-[130%]">
            NYK Energy Ocean株式会社 〒220-0012　神奈川県横浜市西区みなとみらい三丁目6番3号 (MMパークビル13階)
          </div>
        </div>
        
        <div className="flex gap-[15px]">
          <div className="flex flex-col gap-[15px] w-[70px]">
            <Link to="/company" className="font-inter text-[14px] text-black leading-[130%]">会社概要</Link>
            <Link to="/message" className="font-inter text-[14px] text-black leading-[130%]">社長ご挨拶</Link>
            <Link to="/officers" className="font-inter text-[14px] text-black leading-[130%]">役員一覧</Link>
            <Link to="/history" className="font-inter text-[14px] text-black leading-[130%]">沿革</Link>
          </div>
          
          <div className="flex flex-col gap-[15px] w-[84px]">
            <Link to="/business" className="font-inter text-[14px] text-black leading-[130%]">事業内容</Link>
            <Link to="/news" className="font-inter text-[14px] text-black leading-[130%]">お知らせ</Link>
            <Link to="/fleet" className="font-inter text-[14px] text-black leading-[130%]">運行船腹</Link>
            <Link to="/careers" className="font-inter text-[14px] text-black leading-[130%]">採用情報</Link>
            <Link to="/contact" className="font-inter text-[14px] text-black leading-[130%]">お問い合わせ</Link>
          </div>
        </div>
        
        <div className="flex flex-col gap-[15px]">
          <Link to="/privacy" className="font-inter text-[14px] text-black leading-[130%]">プライバシーポリシー</Link>
        </div>
      </div>
    </footer>
  );
};

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center gap-[30px] px-4 lg:px-0">
        <div className="w-full max-w-[1200px] flex flex-col gap-[10px] pb-[30px] pt-[30px]">
          <Breadcrumb />
          
          <h1 className="font-yu-gothic text-[20px] font-bold text-black">会社概要</h1>
          
          <h2 className="font-yu-gothic text-[16px] font-bold text-black/85 w-full">会社概要</h2>
          
          <CompanyTable />
          
          <h2 className="font-yu-gothic text-[16px] font-bold text-black/85 w-full mt-[30px]">組織図</h2>
          
          <OrganizationalChart />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
