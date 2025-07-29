import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Same header as Index page would go here */}
      <header className="w-full h-[100px] px-4 lg:px-[120px] border-b border-black/30 bg-white">
        <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between py-[31px]">
          <Link to="/" className="flex items-center justify-center pb-[5px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9d040409a145ca932e697b688b2fc245382791af?width=532"
              alt="NYK Energy Ocean"
              className="w-[200px] h-[23px] lg:w-[266px] lg:h-[31px]"
            />
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center gap-8 px-4">
        <div className="text-center max-w-2xl">
          <h1 className="font-yu-gothic text-[24px] lg:text-[32px] font-bold text-black mb-4">
            {title}
          </h1>
          <p className="font-yu-gothic text-[16px] text-black/70 mb-8">
            {description ||
              "このページは現在準備中です。詳細については、引き続きお声かけください。"}
          </p>
          <Link
            to="/"
            className="inline-block bg-nyk-orange px-6 py-3 font-yu-gothic text-[14px] font-medium text-black rounded hover:opacity-80 transition-opacity"
          >
            ホームに戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
