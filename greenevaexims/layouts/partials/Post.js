import ImageFallback from '@layouts/components/ImageFallback';
import { useState } from 'react';

const Post = ({ post }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,.05)] mb-6 h-[330px] w-[270px]">
      <div className="cursor-pointer" onClick={handleCardClick}>
        {post.image && (
          <ImageFallback
            className="object-cover"
            src={post.image}
            alt={post.title}
            width={270}
            height={300}
          />
        )}
        <div className="p-3">
            <h5 className="block text-primary hover:underline">
              {post.title}
            </h5>
        </div>
      </div>
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <DetailedPost post={post} />
        </Modal>
      )}
    </div>
  );
};

const Modal = ({ children, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center" onClick={handleOverlayClick}>
      <div className="bg-white rounded-lg p-8 max-w-3xl mx-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

const DetailedPost = ({ post }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-primary">{post.title}</h2>
      <p className="mt-4 mb-2"> <span className="text-blue"><strong>Discription:</strong></span>{post.content.utilization}</p>
      <div className="mt-4">
        <p><span className="text-blue"><strong>Yield:</strong></span> {post.content.yield}</p>
        <p><span className="text-blue"><strong>Primary Use:</strong></span> {post.content.primary_use}</p>
        <p><span className="text-blue"><strong>Availability (Harvest Period):</strong></span> {post.content.availability_harvest}</p>
        <p><span className="text-blue"><strong>Availability (CIPC - Stored in Cold Storage):</strong></span> {post.content.availability_cipc}</p>
        <table className="min-w-full divide-y divide-gray-300 mt-3">
        <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-1 whitespace-nowrap"><span className="text-blue"><strong>Shape</strong></span></td>
              <td className="px-6 py-1 whitespace-nowrap">{post?.content?.features?.shape}</td>
            </tr>
            <tr>
              <td className="px-6 py-1 whitespace-nowrap"><span className="text-blue"><strong>Size</strong></span></td>
              <td className="px-6 py-1 whitespace-nowrap">{post?.content?.features?.size}</td>
            </tr>
            <tr>
              <td className="px-6 py-1 whitespace-nowrap"><span className="text-blue"><strong>Skin</strong></span></td>
              <td className="px-6 py-1 whitespace-nowrap">{post?.content?.features?.skin}</td>
            </tr>
            <tr>
              <td className="px-6 py-1 whitespace-nowrap"><span className="text-blue"><strong>Maturity</strong></span></td>
              <td className="px-6 py-1 whitespace-nowrap">{post?.content?.features?.maturity}</td>
            </tr>
            <tr>
              <td className="px-6 py-1 whitespace-nowrap"><span className="text-blue"><strong>Eyes</strong></span></td>
              <td className="px-6 py-1 whitespace-nowrap">{post?.content?.features?.eyes}</td>
            </tr>
            <tr>
              <td className="px-6 py-1 whitespace-nowrap"><span className="text-blue"><strong>Flesh</strong></span></td>
              <td className="px-6 py-1 whitespace-nowrap">{post?.content?.features?.flesh}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Post; 