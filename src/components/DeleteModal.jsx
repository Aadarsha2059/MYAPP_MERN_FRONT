import React from 'react';

export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description
}) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white p-6 rounded-lg w-[300px] shadow-lg'>
        <h2 className='text-lg font-semibold mb-2'>{title}</h2>
        <p className='text-sm mb-4'>{description}</p>
        <div className='flex justify-end space-x-4'>
          <button
            onClick={onClose}
            className='px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400'
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
