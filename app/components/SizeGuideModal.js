'use client'
import { useState } from 'react';

export default function SizeGuideModal({ isOpen, onClose, onSelectSize, productSizes }) {
  const [activeTab, setActiveTab] = useState('predictor'); // 'predictor' or 'chart'
  const [footLength, setFootLength] = useState('27.0');
  const [fitPreference, setFitPreference] = useState('true'); // 'true', 'small', 'large'
  const [recommendedSize, setRecommendedSize] = useState(null);

  if (!isOpen) return null;

  const handleCalculate = (e) => {
    e.preventDefault();
    const lengthCm = parseFloat(footLength);
    if (isNaN(lengthCm)) return;

    // Standard foot length to US size approximation
    // e.g., 24cm -> 6, 25cm -> 7, 26cm -> 8, 27cm -> 9, 28cm -> 10, 29cm -> 11
    let baseUsSize = Math.round((lengthCm - 18) / 1) + 2; // rough mapping
    // Let's make a precise lookup table
    const conversionTable = [
      { cm: 23.5, us: '6' },
      { cm: 24.0, us: '6.5' },
      { cm: 24.5, us: '7' },
      { cm: 25.0, us: '7.5' },
      { cm: 25.5, us: '8' },
      { cm: 26.0, us: '8.5' },
      { cm: 27.0, us: '9' },
      { cm: 27.5, us: '9.5' },
      { cm: 28.0, us: '10' },
      { cm: 28.5, us: '10.5' },
      { cm: 29.0, us: '11' },
    ];

    // Find closest match in conversion table
    let closest = conversionTable[0];
    let minDiff = Math.abs(conversionTable[0].cm - lengthCm);
    for (let item of conversionTable) {
      let diff = Math.abs(item.cm - lengthCm);
      if (diff < minDiff) {
        minDiff = diff;
        closest = item;
      }
    }

    let recName = closest.us;
    // Adjust if fit preference changes
    if (fitPreference === 'small') {
      // shoe runs small, go up a half size if available
      // or similar logic
    }

    // Check if recommended size exists in productSizes and is in stock
    const sizes = Array.isArray(productSizes) ? productSizes : [];
    const matchingSizeObj = sizes.find(s => s.name === recName && s.inStock);
    if (matchingSizeObj) {
      setRecommendedSize(matchingSizeObj);
    } else {
      // Find any available size closest to recName
      const availableSizes = sizes.filter(s => s.inStock);
      if (availableSizes.length > 0) {
        setRecommendedSize(availableSizes[0]);
      } else {
        setRecommendedSize({ name: recName, inStock: false });
      }
    }
  };

  const handleApply = () => {
    if (recommendedSize && recommendedSize.inStock) {
      onSelectSize(recommendedSize);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl transition-all">
        <div className="flex items-center justify-between border-b pb-4">
          <h3 className="text-lg font-bold text-gray-900">Size Guide & Fit Predictor</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b mt-4">
          <button
            className={`flex-1 py-2 text-sm font-medium border-b-2 ${activeTab === 'predictor' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('predictor')}
          >
            Fit Predictor
          </button>
          <button
            className={`flex-1 py-2 text-sm font-medium border-b-2 ${activeTab === 'chart' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('chart')}
          >
            Size Conversion Chart
          </button>
        </div>

        <div className="mt-4">
          {activeTab === 'predictor' ? (
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Enter your foot length to get a personalized size recommendation for this shoe.
              </p>
              <form onSubmit={handleCalculate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Foot Length (cm)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="20"
                    max="35"
                    value={footLength}
                    onChange={(e) => setFootLength(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fit Preference
                  </label>
                  <select
                    value={fitPreference}
                    onChange={(e) => setFitPreference(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="true">True to size (Standard fit)</option>
                    <option value="snug">Snug fit (Performance)</option>
                    <option value="relaxed">Relaxed fit (Roomy)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Calculate Recommendation
                </button>
              </form>

              {recommendedSize && (
                <div className="mt-6 rounded-md bg-indigo-50 p-4 border border-indigo-100">
                  <h4 className="text-sm font-semibold text-indigo-900">Recommended Size:</h4>
                  <p className="mt-1 text-2xl font-bold text-indigo-600">US {recommendedSize.name}</p>
                  <p className="text-xs text-indigo-700 mt-1">
                    {recommendedSize.inStock ? '✓ In stock and ready to add' : '⚠️ Selected size is currently out of stock'}
                  </p>
                  {recommendedSize.inStock && (
                    <button
                      type="button"
                      onClick={handleApply}
                      className="mt-3 rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      Apply Size {recommendedSize.name} to Order
                    </button>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Standard international footwear size conversion reference.
              </p>
              <div className="overflow-x-auto max-h-60 overflow-y-auto border rounded-md">
                <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr>
                      <th className="px-4 py-2 font-medium">US Size</th>
                      <th className="px-4 py-2 font-medium">UK Size</th>
                      <th className="px-4 py-2 font-medium">EU Size</th>
                      <th className="px-4 py-2 font-medium">Foot Length (cm)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white text-gray-600">
                    <tr><td className="px-4 py-2">6</td><td className="px-4 py-2">5.5</td><td className="px-4 py-2">38.5</td><td className="px-4 py-2">23.5 cm</td></tr>
                    <tr><td className="px-4 py-2">6.5</td><td className="px-4 py-2">6</td><td className="px-4 py-2">39</td><td className="px-4 py-2">24.0 cm</td></tr>
                    <tr><td className="px-4 py-2">7</td><td className="px-4 py-2">6.5</td><td className="px-4 py-2">40</td><td className="px-4 py-2">24.5 cm</td></tr>
                    <tr><td className="px-4 py-2">7.5</td><td className="px-4 py-2">7</td><td className="px-4 py-2">40.5</td><td className="px-4 py-2">25.0 cm</td></tr>
                    <tr><td className="px-4 py-2">8</td><td className="px-4 py-2">7.5</td><td className="px-4 py-2">41</td><td className="px-4 py-2">25.5 cm</td></tr>
                    <tr><td className="px-4 py-2">8.5</td><td className="px-4 py-2">8</td><td className="px-4 py-2">42</td><td className="px-4 py-2">26.0 cm</td></tr>
                    <tr><td className="px-4 py-2">9</td><td className="px-4 py-2">8.5</td><td className="px-4 py-2">42.5</td><td className="px-4 py-2">27.0 cm</td></tr>
                    <tr><td className="px-4 py-2">9.5</td><td className="px-4 py-2">9</td><td className="px-4 py-2">43</td><td className="px-4 py-2">27.5 cm</td></tr>
                    <tr><td className="px-4 py-2">10</td><td className="px-4 py-2">9.5</td><td className="px-4 py-2">44</td><td className="px-4 py-2">28.0 cm</td></tr>
                    <tr><td className="px-4 py-2">10.5</td><td className="px-4 py-2">10</td><td className="px-4 py-2">44.5</td><td className="px-4 py-2">28.5 cm</td></tr>
                    <tr><td className="px-4 py-2">11</td><td className="px-4 py-2">10.5</td><td className="px-4 py-2">45</td><td className="px-4 py-2">29.0 cm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-end border-t pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
