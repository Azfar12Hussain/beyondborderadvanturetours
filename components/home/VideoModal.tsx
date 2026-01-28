"use client";

interface Props {
  videoSrc: string | null;
  onClose: () => void;
}

export default function VideoModal({ videoSrc, onClose }: Props) {
  if (!videoSrc) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-4xl p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl font-bold"
        >
          ×
        </button>

        <video
          src={videoSrc}
          controls
          autoPlay
          className="w-full max-h-[90vh] rounded"
        />
      </div>
    </div>
  );
}
