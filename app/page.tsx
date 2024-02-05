import VideoSample from "@/components/video";

interface VideoInfoProps {
  pcSrc: string;
  spSrc: string;
  loop: boolean;
}

const videoInfo: Record<string, VideoInfoProps> = {
  op: {
    pcSrc: "https://d1utppovu0gppp.cloudfront.net/input/op.mp4",
    spSrc: "https://d1utppovu0gppp.cloudfront.net/input/op_sp.mp4",
    loop: false,

  },
  loop1: {
    pcSrc: "https://d1utppovu0gppp.cloudfront.net/input/loop1.mp4",
    spSrc: "https://d1utppovu0gppp.cloudfront.net/input/loop1_sp.mp4",
    loop: true,

  },
  move1: {
    pcSrc: "https://d1utppovu0gppp.cloudfront.net/input/move1_2.mp4",
    spSrc: "https://d1utppovu0gppp.cloudfront.net/input/move1_2_sp.mp4",
    loop: false,

  },
  back1: {
    pcSrc: "https://d1utppovu0gppp.cloudfront.net/input/back1_2.mp4",
    spSrc: "https://d1utppovu0gppp.cloudfront.net/input/back1_2_sp.mp4",
    loop: false,

  },
  loop2: {
    pcSrc: "https://d1utppovu0gppp.cloudfront.net/input/loop2.mp4",
    spSrc: "https://d1utppovu0gppp.cloudfront.net/input/loop2_sp.mp4",
    loop: true,

  },
  move2: {
    pcSrc: "https://d1utppovu0gppp.cloudfront.net/input/move2_3.mp4",
    spSrc: "https://d1utppovu0gppp.cloudfront.net/input/move2_3_sp.mp4",
    loop: false,
  },
  back2: {
    pcSrc: "https://d1utppovu0gppp.cloudfront.net/input/back2_3.mp4",
    spSrc: "https://d1utppovu0gppp.cloudfront.net/input/back2_3_sp.mp4",
    loop: false,

  },
  loop3: {
    pcSrc: "https://d1utppovu0gppp.cloudfront.net/input/loop3.mp4",
    spSrc: "https://d1utppovu0gppp.cloudfront.net/input/loop3_sp.mp4",
    loop: true,

  },
  move3: {
    pcSrc: "https://d1utppovu0gppp.cloudfront.net/input/move3_4.mp4",
    spSrc: "https://d1utppovu0gppp.cloudfront.net/input/move3_4_sp.mp4",
    loop: false,

  },
  back3: {
    pcSrc: "https://d1utppovu0gppp.cloudfront.net/input/back3_4.mp4",
    spSrc: "https://d1utppovu0gppp.cloudfront.net/input/back3_4_sp.mp4",
    loop: false,

  },
  loop4: {
    pcSrc: "https://d1utppovu0gppp.cloudfront.net/input/loop4.mp4",
    spSrc: "https://d1utppovu0gppp.cloudfront.net/input/loop4_sp.mp4",
    loop: true,

  },
  move4: {
    pcSrc: "https://d1utppovu0gppp.cloudfront.net/input/move4_5.mp4",
    spSrc: "https://d1utppovu0gppp.cloudfront.net/input/move4_5_sp.mp4",
    loop: false,

  },
  back4: {
    pcSrc: "https://d1utppovu0gppp.cloudfront.net/input/back4_5.mp4",
    spSrc: "https://d1utppovu0gppp.cloudfront.net/input/back4_5_sp.mp4",
    loop: false,

  },
  loop5: {
    pcSrc: "https://d1utppovu0gppp.cloudfront.net/input/loop5.mp4",
    spSrc: "https://d1utppovu0gppp.cloudfront.net/input/loop5_sp.mp4",
    loop: true,

  },
  move5: {
    pcSrc: "https://d1utppovu0gppp.cloudfront.net/input/move1_5.mp4",
    spSrc: "https://d1utppovu0gppp.cloudfront.net/input/move1_5_sp.mp4",
    loop: false,

  },
};

type VideoName = keyof typeof videoInfo;

const linkList: Partial<
  Record<keyof typeof videoInfo, { href: string; label: string }>
> = {
  loop2: { href: "/php", label: "詳細ページへ" },
  loop3: { href: "/about", label: "アバウトページへ" },
  loop4: { href: "/contact", label: "コンタクトページへ" },
  loop5: { href: "/services", label: "サービスページへ" },
};

export default function Home() {


  return (
    <div>
      <VideoSample src={videoInfo.op.pcSrc} loop={videoInfo.op.loop} />
    </div>
  );
}
