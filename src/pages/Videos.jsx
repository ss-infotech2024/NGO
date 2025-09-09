import React, { useState, useRef, useEffect } from "react";
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";
import video6 from "../assets/videos/video6.mp4";
import video7 from "../assets/videos/video7.mp4";

const videos = [
  {
    id: 1,
    title: "Our Mission & Vision",
    description:
      "Learn about Daanapani's goals and objectives in serving the community.",
    videoPath: video1,
  },
  {
    id: 2,
    title: "Community Outreach Programs",
    description:
      "See how we're making a difference in local communities through various initiatives.",
    videoPath: video2,
  },
  {
    id: 3,
    title: "Volunteer Stories",
    description:
      "Hear from our dedicated volunteers about their experiences with Daanapani.",
    videoPath: video3,
  },
  {
    id: 4,
    title: "Education Initiatives",
    description:
      "Discover our educational programs that empower underprivileged children.",
    videoPath: video4,
  },
  {
    id: 6,
    title: "Environmental Conservation",
    description:
      "See how we're working to protect and preserve our environment.",
    videoPath: video6,
  },
  {
    id: 7,
    title: "Future Vision",
    description:
      "Understand our upcoming projects and long-term sustainability goals.",
    videoPath: video7,
    featured: true,
  },
];

const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isVertical, setIsVertical] = useState(false);

  const videoRef = useRef(null);
  const featuredVideoRef = useRef(null);

  // Find the featured video
  const featuredVideo = videos.find((video) => video.featured);

  const openVideo = (video) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  const closeVideo = () => {
    setShowModal(false);
    setSelectedVideo(null);
    setIsVertical(false);
  };

  useEffect(() => {
    if (videoRef.current) {
      const checkAspect = () => {
        if (videoRef.current.videoHeight > videoRef.current.videoWidth) {
          setIsVertical(true);
        } else {
          setIsVertical(false);
        }
      };
      videoRef.current.addEventListener("loadedmetadata", checkAspect);
      return () =>
        videoRef.current?.removeEventListener("loadedmetadata", checkAspect);
    }
  }, [selectedVideo]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section
        className="py-12 px-4"
        style={{ backgroundColor: "#166534", color: "white" }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Making a Difference Together
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Watch our interactive videos to learn about our initiatives and how
            you can contribute to creating positive change.
          </p>
        </div>
      </section>

      {/* Featured Video Section */}
      {featuredVideo && (
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Featured Video
            </h2>
            <div className="max-w-4xl mx-auto">
              <div
                className="relative rounded-lg overflow-hidden shadow-xl cursor-pointer"
                onClick={() => openVideo(featuredVideo)}
              >
                <video
                  ref={featuredVideoRef}
                  src={featuredVideo.videoPath}
                  className="w-full h-auto"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-80 rounded-full p-4">
                    <svg
                      className="w-12 h-12"
                      fill="#166534"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {featuredVideo.title}
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {featuredVideo.description}
                </p>
                <button
                  onClick={() => openVideo(featuredVideo)}
                  className="mt-4 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors duration-300"
                >
                  Watch Full Video
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Video Gallery */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            More Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos
              .filter((video) => !video.featured) // Exclude the featured video from the gallery
              .map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => openVideo(video)}
                >
                  <div className="relative">
                    {/* Video as thumbnail */}
                    <video
                      src={video.videoPath}
                      className="w-full h-48 object-cover"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-80 rounded-full p-4">
                        <svg
                          className="w-12 h-12"
                          fill="#166534"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600">{video.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showModal && selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div
            className={`bg-white rounded-lg overflow-hidden ${
              isVertical ? "max-w-sm" : "max-w-4xl"
            } w-full`}
          >
            <div className="relative">
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <video
                ref={videoRef}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh] mx-auto"
              >
                <source src={selectedVideo.videoPath} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-600">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
