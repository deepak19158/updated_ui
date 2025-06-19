import React from "react";
import { useParams } from "react-router-dom";

// Example data structure for package details
const packageDetailsData = {
  men: {
    "Erectile & Ejaculation": {
      "Premature Ejaculation Panel": {
        title: "Premature Ejaculation Panel",
        description: "Comprehensive tests for premature ejaculation concerns.",
        price: "₹1999",
        tests: [
          {
            name: "Testosterone Total",
            description: "Measures testosterone levels.",
          },
          { name: "Prolactin", description: "Assesses prolactin hormone." },
        ],
        benefits: [
          "Early detection of hormonal imbalances",
          "Personalized treatment plan",
        ],
      },
      // ... Add other packages here ...
    },
    // ... Add other services here ...
  },
  women: {
    // ... Add services and packages for women ...
  },
};

const PackageDetails = () => {
  const { category, service, packageName } = useParams();

  // Decode URI components for service and packageName
  const decodedService = decodeURIComponent(service);
  const decodedPackageName = decodeURIComponent(packageName);

  const selectedPackage =
    packageDetailsData[category]?.[decodedService]?.[decodedPackageName];

  if (!selectedPackage) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900">Package not found</h1>
        <p className="text-gray-600 mt-2">
          The requested package could not be found. Please check back later or
          contact support.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Package Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {selectedPackage.title}
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          {selectedPackage.description}
        </p>
        <div className="text-2xl font-bold text-green-600">
          {selectedPackage.price}
        </div>
      </div>

      {/* Tests Included */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Tests Included
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {selectedPackage.tests.map((test, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="font-semibold text-gray-900 mb-1">{test.name}</h3>
              <p className="text-gray-600 text-sm">{test.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Package Benefits
        </h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {selectedPackage.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Booking Button */}
      <div className="mt-8">
        <button
          onClick={() => {
            alert("Booking functionality will be implemented soon!");
          }}
          className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors w-full md:w-auto"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PackageDetails;
