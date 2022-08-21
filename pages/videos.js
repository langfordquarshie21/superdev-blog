import Header from "../components/header";
import BasicLayout from "../components/layout/basicLayout";
import VideoCard from "../components/videoCard";
import { defaultMeta } from "../content";
import { videos } from "../videos";

const Videos = () => {
  return (
    <>
      <Header />
      <BasicLayout meta={defaultMeta}>
        <h2 className="-mt-10 mb-10">Video tutorials ({videos.length})</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3">
          {videos.map((video) => {
            return (
              <VideoCard
                thumbnail={video.thumbnail}
                title={video.title}
                link={video.link}
                key={video.link}
              />
            );
          })}
        </ul>
      </BasicLayout>
    </>
  );
};

export default Videos;
