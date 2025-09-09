import React, { useState } from "react";

const videos = [
  {
    id: 1,
    title: "Our Mission & Vision",
    description:
      "Learn about Daanapani's goals and objectives in serving the community.",
    videoPath:
      "https://drive.google.com/file/d/1NDxv8WN5UG9HI3zQEW3DwI-VyL_ExGmk/preview",
  },
  {
    id: 2,
    title: "Community Outreach Programs",
    description:
      "See how we're making a difference in local communities through various initiatives.",
    videoPath:
      "https://drive.google.com/file/d/1Ry3H0mv2Iu5xNOywbvysO_iCqJakz5ZT/preview",
  },
  {
    id: 3,
    title: "Volunteer Stories",
    description:
      "Hear from our dedicated volunteers about their experiences with Daanapani.",
    videoPath:
      "https://drive.google.com/file/d/1Ry3H0mv2Iu5xNOywbvysO_iCqJakz5ZT/preview",
  },
  {
    id: 4,
    title: "Education Initiatives",
    description:
      "Discover our educational programs that empower underprivileged children.",
    videoPath:
      "https://drive.google.com/file/d/1iiAOf5ILdklWlORJWbIJzI28KfbWksWB/preview",
  },
  {
    id: 6,
    title: "Environmental Conservation",
    description:
      "See how we're working to protect and preserve our environment.",
    videoPath:
      "https://drive.google.com/file/d/1t1xU3Y8J_6-eJyMmnvwPwmLrOUPiI1Oc/preview",
  },
  {
    id: 7,
    title: "Future Vision",
    description:
      "Understand our upcoming projects and long-term sustainability goals.",
    videoPath:
      "https://drive.google.com/file/d/1Zx7aGcQU49uuPk8UVxdWNMbWqBmOH6cj/preview",
    featured: true,
  },
];

const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const featuredVideo = videos.find((video) => video.featured);

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
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={featuredVideo.videoPath}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-64 md:h-96"
                ></iframe>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {featuredVideo.title}
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {featuredVideo.description}
                </p>
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
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos
              .filter((video) => !video.featured)
              .map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="relative overflow-hidden">
                    <iframe
                      src={video.videoPath}
                      frameBorder="0"
                      allowFullScreen
                      className="w-full h-40 group-hover:scale-105 transition-transform duration-500"
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full">
            <div className="relative">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors duration-300"
              >
                ✕
              </button>
              <iframe
                src={selectedVideo.videoPath}
                frameBorder="0"
                allowFullScreen
                className="w-full h-[70vh]"
              ></iframe>
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
